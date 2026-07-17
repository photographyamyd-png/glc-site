import { getIndexablePaths } from "@/lib/site/indexable-urls";
import { getNap } from "@/lib/site/nap";
import { getSiteUrl } from "@/lib/site/metadata";
import { BACKLINK_TARGETS } from "./backlink-targets";
import { DIRECTORY_TARGETS } from "./directories";
import { readTracker, migrateTrackerSchema, type TrackerRow } from "./tracker";

type Severity = "ok" | "warn" | "fail" | "info";

type TechnicalCheck = {
  label: string;
  severity: Severity;
  summary: string;
};

type PriorityUrlCheck = {
  url: string;
  status: number;
};

const PRIORITY_MONEY_PATHS = [
  "/",
  "/services/excavation-site-preparation/",
  "/locations/excavation-site-preparation-barrie-ontario/",
  "/locations/excavation-site-preparation-orillia-ontario/",
  "/services/site-preparation-grading/",
  "/services/foundations-civil-infrastructure/",
  "/services/drainage-hardscaping/",
  "/services/hauling-site-clearing-logistics/",
  "/services/snow-removal/",
  "/contact/",
] as const;

const GSC_MANUAL_TASKS = [
  "Review Search Console coverage/pages for new errors or 'Not indexed' reasons.",
  "Check low-CTR queries and pages, then queue title/description rewrites where impressions are already present.",
  "Inspect Core Web Vitals regressions and request indexing on the highest-value URLs after any content changes.",
];

const GBP_MANUAL_TASKS = [
  "Reply to every new Google review, positive or negative, within 24-48 hours.",
  "Verify business hours, phone, and website are still correct in Google Business Profile.",
  "Publish or schedule one GBP update when there has not been a fresh project photo, offer, or service highlight in the last 7 days.",
];

const CONTENT_AND_UX_TASKS = [
  "Refresh one outdated service, location, or resource page with fresher dates, proof points, and tighter metadata.",
  "Add 2-3 relevant internal links between money pages, geo pages, and supporting resources.",
  "Spot-check mobile rendering and run PageSpeed Insights on the homepage or a priority landing page when load quality feels off.",
  "Compress or replace oversized images and fill any missing descriptive alt text during normal page edits.",
];

async function head(url: string): Promise<{ status: number; location?: string }> {
  const res = await fetch(url, { method: "HEAD", redirect: "manual" });
  return {
    status: res.status,
    location: res.headers.get("location") ?? undefined,
  };
}

function iconForSeverity(severity: Severity): string {
  switch (severity) {
    case "ok":
      return "[ok]";
    case "warn":
      return "[warn]";
    case "fail":
      return "[fail]";
    default:
      return "[info]";
  }
}

function sortPendingDirectories(rows: TrackerRow[]): TrackerRow[] {
  return rows
    .filter((row) => row.type === "directory" && row.status === "pending")
    .sort((a, b) => {
      const left = DIRECTORY_TARGETS.find((target) => target.id === a.id);
      const right = DIRECTORY_TARGETS.find((target) => target.id === b.id);
      return (left?.tier ?? 99) - (right?.tier ?? 99);
    });
}

function sortPendingBacklinks(rows: TrackerRow[]): TrackerRow[] {
  return rows
    .filter((row) => row.type === "backlink" && row.status === "pending")
    .sort((a, b) => {
      const left = BACKLINK_TARGETS.find((target) => target.id === a.id);
      const right = BACKLINK_TARGETS.find((target) => target.id === b.id);
      return (left?.priority ?? 99) - (right?.priority ?? 99);
    });
}

async function collectTechnicalHealth(siteUrl: string): Promise<{
  checks: TechnicalCheck[];
  priorityUrls: PriorityUrlCheck[];
}> {
  const checks: TechnicalCheck[] = [];
  const priorityUrls: PriorityUrlCheck[] = [];
  const wwwUrl = siteUrl.replace(/^https:\/\//, "https://www.");

  const sitemap = await head(`${siteUrl}/sitemap.xml`);
  checks.push({
    label: "Sitemap",
    severity: sitemap.status === 200 ? "ok" : "fail",
    summary: `${siteUrl}/sitemap.xml returned ${sitemap.status}`,
  });

  const robots = await head(`${siteUrl}/robots.txt`);
  checks.push({
    label: "Robots",
    severity: robots.status === 200 ? "ok" : "fail",
    summary: `${siteUrl}/robots.txt returned ${robots.status}`,
  });

  try {
    const wwwHome = await head(`${wwwUrl}/`);
    const ok = wwwHome.status >= 301 && wwwHome.status <= 308;
    checks.push({
      label: "WWW redirect",
      severity: ok ? "ok" : "warn",
      summary: ok
        ? `${wwwUrl}/ redirects to ${wwwHome.location ?? siteUrl}`
        : `${wwwUrl}/ returned ${wwwHome.status}; verify SSL and redirect handling`,
    });
  } catch (error) {
    checks.push({
      label: "WWW redirect",
      severity: "warn",
      summary: `Unable to verify ${wwwUrl}/ (${error instanceof Error ? error.message : String(error)})`,
    });
  }

  const homeRes = await fetch(`${siteUrl}/`);
  const homeHtml = await homeRes.text();
  const hasNoindex = /noindex/i.test(homeHtml);
  const canonical = homeHtml.match(/rel="canonical"\s+href="([^"]+)"/)?.[1];
  const hasJsonLd = homeHtml.includes('application/ld+json');
  const hasGscVerify = homeHtml.includes("google-site-verification");

  checks.push({
    label: "Homepage indexability",
    severity: homeRes.status === 200 && !hasNoindex ? "ok" : "fail",
    summary:
      homeRes.status === 200
        ? hasNoindex
          ? "Homepage responded 200 but includes a noindex signal"
          : "Homepage responded 200 and appears indexable"
        : `Homepage returned ${homeRes.status}`,
  });

  checks.push({
    label: "Canonical tag",
    severity: canonical ? "ok" : "warn",
    summary: canonical ? `Canonical points to ${canonical}` : "Canonical tag missing on homepage",
  });

  checks.push({
    label: "Structured data",
    severity: hasJsonLd ? "ok" : "warn",
    summary: hasJsonLd ? "Homepage includes JSON-LD markup" : "No JSON-LD detected on homepage HTML",
  });

  checks.push({
    label: "Search Console verification",
    severity: hasGscVerify ? "ok" : "warn",
    summary: hasGscVerify ? "Google site verification meta tag is present" : "Google site verification meta tag is missing",
  });

  const llms = await head(`${siteUrl}/llms.txt`).catch(() => ({ status: 0 }));
  checks.push({
    label: "llms.txt",
    severity: llms.status === 200 ? "ok" : "info",
    summary:
      llms.status === 200
        ? `${siteUrl}/llms.txt is present`
        : "No llms.txt detected; this is optional but useful for AI-search discoverability",
  });

  const llmsFull = await head(`${siteUrl}/llms-full.txt`).catch(() => ({ status: 0 }));
  checks.push({
    label: "llms-full.txt",
    severity: llmsFull.status === 200 ? "ok" : "info",
    summary:
      llmsFull.status === 200
        ? `${siteUrl}/llms-full.txt is present`
        : "No llms-full.txt detected; keep this on the future AI-search backlog",
  });

  for (const path of PRIORITY_MONEY_PATHS) {
    const url = `${siteUrl}${path === "/" ? "/" : path}`;
    const result = await head(url);
    priorityUrls.push({ url, status: result.status });
  }

  return { checks, priorityUrls };
}

function buildTrackerSummary(rows: TrackerRow[]): string[] {
  const directories = rows.filter((row) => row.type === "directory");
  const backlinks = rows.filter((row) => row.type === "backlink");
  const liveDirectories = directories.filter((row) => row.status === "live").length;
  const submittedDirectories = directories.filter((row) => row.status === "submitted").length;
  const pendingDirectories = directories.filter((row) => row.status === "pending").length;
  const pendingBacklinks = backlinks.filter((row) => row.status === "pending").length;

  return [
    `Directory listings: ${liveDirectories} live, ${submittedDirectories} submitted, ${pendingDirectories} pending.`,
    `Backlink outreach queue: ${pendingBacklinks} pending opportunities.`,
  ];
}

function buildPendingDirectoryLines(rows: TrackerRow[]): string[] {
  const pending = sortPendingDirectories(rows).slice(0, 5);
  if (pending.length === 0) {
    return ["- No pending directory submissions remain in the tracker."];
  }

  return pending.map((row) => {
    const target = DIRECTORY_TARGETS.find((item) => item.id === row.id);
    const tier = target?.tier ?? "?";
    const lastAttempt = row.last_attempt || "never";
    const notes = row.agent_notes || row.notes || target?.notes || "";
    const suffix = notes ? ` - ${notes}` : "";
    return `- ${target?.platform ?? row.platform} (Tier ${tier}, last attempt: ${lastAttempt})${suffix}`;
  });
}

function buildPendingBacklinkLines(rows: TrackerRow[]): string[] {
  const pending = sortPendingBacklinks(rows).slice(0, 5);
  if (pending.length === 0) {
    return ["- No backlink outreach items are currently pending in the tracker."];
  }

  return pending.map((row) => {
    const target = BACKLINK_TARGETS.find((item) => item.id === row.id);
    const priority = target?.priority ?? "?";
    const notes = row.agent_notes || row.notes || target?.notes || "";
    const suffix = notes ? ` - ${notes}` : "";
    return `- ${target?.name ?? row.platform} (Priority ${priority}, anchor: ${target?.suggestedAnchor ?? "n/a"})${suffix}`;
  });
}

export async function buildDailySeoDigest(): Promise<string> {
  migrateTrackerSchema();

  const siteUrl = getSiteUrl().replace(/\/$/, "");
  const nap = getNap();
  const indexablePaths = getIndexablePaths();
  const rows = readTracker();
  const today = new Date().toISOString().slice(0, 10);
  const { checks, priorityUrls } = await collectTechnicalHealth(siteUrl);
  const nextDirectory = sortPendingDirectories(rows)[0];
  const nextBacklink = sortPendingBacklinks(rows)[0];
  const nextDirectoryTarget = nextDirectory
    ? DIRECTORY_TARGETS.find((target) => target.id === nextDirectory.id)
    : undefined;
  const nextBacklinkTarget = nextBacklink
    ? BACKLINK_TARGETS.find((target) => target.id === nextBacklink.id)
    : undefined;

  const lines = [
    `# Daily SEO Digest - ${today}`,
    "",
    `Site: ${siteUrl}`,
    `Business: ${nap.name}`,
    `Indexable URLs tracked in code: ${indexablePaths.length}`,
    "",
    "## Automated Technical Health",
    ...checks.map((check) => `- ${iconForSeverity(check.severity)} ${check.label}: ${check.summary}`),
    "",
    "### Priority URL Status",
    ...priorityUrls.map((item) => `- ${item.status} ${item.url}`),
    "",
    "## Listing And Outreach Pipeline",
    ...buildTrackerSummary(rows).map((line) => `- ${line}`),
    "",
    "### Next Directory Actions",
    ...buildPendingDirectoryLines(rows),
    "",
    "### Next Backlink Actions",
    ...buildPendingBacklinkLines(rows),
    "",
    "## Manual Google Actions Today",
    "### Reviews And GBP",
    ...GBP_MANUAL_TASKS.map((task) => `- ${task}`),
    "",
    "### Search Console",
    ...GSC_MANUAL_TASKS.map((task) => `- ${task}`),
    "",
    "## Content And UX Queue",
    ...CONTENT_AND_UX_TASKS.map((task) => `- ${task}`),
    "",
    "## Suggested Focus For Today",
    `- Directory priority: ${nextDirectoryTarget?.platform ?? "No pending directory tasks."}`,
    `- Backlink priority: ${nextBacklinkTarget?.name ?? "No pending backlink tasks."}`,
    "- If new pages or copy shipped recently, run IndexNow and request indexing on the priority URLs above.",
    "",
    "## Not Yet Automated",
    "- Google Search Console API metrics are not connected yet, so clicks, impressions, CTR, and indexing deltas remain manual.",
    "- Google Business Profile reviews, insights, and posting are not connected yet, so daily GBP actions are reminders rather than live data pulls.",
    "- Semrush, Ahrefs, and PageSpeed API-backed scoring are not wired in, so third-party audit and competitor data are outside this digest.",
  ];

  return lines.join("\n");
}

