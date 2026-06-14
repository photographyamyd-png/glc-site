/**
 * Free weekly SEO monitoring routine — no paid rank trackers.
 * Run: npm run seo:weekly
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { getIndexablePaths } from "@/lib/site/indexable-urls";
import { getSiteUrl } from "@/lib/site/metadata";
import { DIRECTORY_TARGETS } from "./local-seo/directories";
import { BACKLINK_TARGETS } from "./local-seo/backlink-targets";

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
];

const MANUAL_RANK_TERMS = [
  "excavation barrie",
  "barrie excavation",
  "excavation orillia",
  "excavation contractor barrie",
  "commercial grading barrie",
  "foundation contractor simcoe county",
  "drainage contractor barrie",
  "demolition hauling barrie",
  "commercial snow removal barrie",
  "ground level contracting",
];

function getPendingTrackerIds(): string[] {
  const path = join(process.cwd(), "seo", "listings-tracker.csv");
  if (!existsSync(path)) return [];
  return readFileSync(path, "utf8")
    .split("\n")
    .slice(1)
    .filter((l) => l.includes(",pending,"))
    .map((l) => l.split(",")[0])
    .filter(Boolean);
}

function main(): void {
  const siteUrl = getSiteUrl();
  const indexable = getIndexablePaths();
  const pending = getPendingTrackerIds();

  console.log("\n=== GLC Weekly SEO Checklist (free tools only) ===\n");
  console.log(`Site: ${siteUrl}`);
  console.log(`Indexable URLs: ${indexable.length}\n`);

  console.log("--- Google Search Console (weekly) ---");
  console.log("1. Performance → filter low CTR pages → rewrite title/description");
  console.log("2. Pages → confirm no coverage errors");
  console.log("3. Core Web Vitals → note any URL regressions");
  console.log(`4. Sitemaps → confirm ${siteUrl}/sitemap.xml is green\n`);

  console.log("--- Request indexing (priority URLs) ---");
  PRIORITY_MONEY_PATHS.forEach((path) => {
    console.log(`  ${siteUrl}${path === "/" ? "/" : path}`);
  });
  console.log("");

  console.log("--- Google Business Profile (weekly) ---");
  console.log("1. Post one update (project photo, seasonal tip, or service highlight)");
  console.log("2. Respond to new reviews within 48 hours");
  console.log("3. Check Insights: calls, direction requests, discovery queries\n");

  console.log("--- Manual rank spot-check (incognito, Barrie geo) ---");
  MANUAL_RANK_TERMS.forEach((term) => {
    console.log(`  [ ] "${term}"`);
  });
  console.log("\nLog positions in a spreadsheet — export GSC queries for comparison.\n");

  console.log("--- Directory & backlink queue (from tracker) ---");
  if (pending.length === 0) {
    console.log("  Run npm run seo:listing-pack to create seo/listings-tracker.csv\n");
  } else {
    pending.slice(0, 5).forEach((id) => {
      const dir = DIRECTORY_TARGETS.find((d) => d.id === id);
      const link = BACKLINK_TARGETS.find((b) => b.id === id);
      if (dir) console.log(`  [ ] Directory: ${dir.platform} (${dir.signupUrl})`);
      else if (link) console.log(`  [ ] Backlink: ${link.name} — ${link.notes ?? link.url}`);
      else console.log(`  [ ] ${id}`);
    });
    console.log(`  (${pending.length} pending total)\n`);
  }

  console.log("--- Bing Webmaster Tools (monthly) ---");
  console.log(`Confirm sitemap indexed: ${siteUrl}/sitemap.xml\n`);

  console.log("--- Re-submit after deploy ---");
  console.log("  SITE_URL=" + siteUrl + " npm run push:indexing");
  console.log("  npm run seo:listing-pack\n");
}

main();
