/**
 * Verify live directory listings for NAP drift.
 * Run: npm run seo:verify-listings [-- --id=yellow-pages-ca] [-- --dry-run]
 */
import {
  migrateTrackerSchema,
  readTracker,
  updateTrackerRow,
  type TrackerRow,
} from "./tracker";
import { getNap } from "@/lib/site/nap";

type VerifyResult = {
  id: string;
  platform: string;
  live_url: string;
  verified: "yes" | "no" | "drift";
  issues: string[];
};

function parseArgs(): { id?: string; dryRun: boolean } {
  const args = process.argv.slice(2);
  let id: string | undefined;
  let dryRun = false;

  for (const arg of args) {
    if (arg === "--dry-run") dryRun = true;
    else if (arg.startsWith("--id=")) id = arg.slice(5);
  }

  return { id, dryRun };
}

function normalizePhone(text: string): string {
  return text.replace(/\D/g, "");
}

function normalizeWebsite(text: string): string {
  return text
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

function extractFromHtml(html: string, nap: ReturnType<typeof getNap>): string[] {
  const issues: string[] = [];
  const lower = html.toLowerCase();

  const expectedPhone = normalizePhone(nap.phone);
  const htmlPhones = [...html.matchAll(/(?:\+?1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}/g)].map(
    (m) => normalizePhone(m[0]),
  );

  if (htmlPhones.length > 0 && !htmlPhones.some((p) => p.endsWith(expectedPhone.slice(-10)))) {
    issues.push(`Phone mismatch: expected ${nap.phone}`);
  }

  const expectedWeb = normalizeWebsite(nap.website);
  const webMatches = [...html.matchAll(/https?:\/\/[^\s"'<>]+/gi)].map((m) =>
    normalizeWebsite(m[0]),
  );

  if (webMatches.length > 0 && !webMatches.some((w) => w.includes("groundlevelcontracting.ca"))) {
    if (webMatches.some((w) => w.includes("groundlevelcontracting.com"))) {
      issues.push("Website uses .com instead of canonical .ca");
    } else if (!lower.includes("groundlevelcontracting.ca")) {
      issues.push(`Website not found on page; expected ${nap.website}`);
    }
  }

  if (!lower.includes(nap.name.toLowerCase())) {
    issues.push(`Business name "${nap.name}" not found in page text`);
  }

  return issues;
}

async function verifyRow(row: TrackerRow): Promise<VerifyResult> {
  const nap = getNap();

  if (!row.live_url?.trim()) {
    return {
      id: row.id,
      platform: row.platform,
      live_url: row.live_url,
      verified: "no",
      issues: ["No live_url in tracker"],
    };
  }

  try {
    const res = await fetch(row.live_url, {
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
      headers: { "User-Agent": "GLC-Listing-Verifier/1.0" },
    });

    if (!res.ok) {
      return {
        id: row.id,
        platform: row.platform,
        live_url: row.live_url,
        verified: "no",
        issues: [`HTTP ${res.status} fetching live_url`],
      };
    }

    const html = await res.text();
    const issues = extractFromHtml(html, nap);

    return {
      id: row.id,
      platform: row.platform,
      live_url: row.live_url,
      verified: issues.length === 0 ? "yes" : "drift",
      issues,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      id: row.id,
      platform: row.platform,
      live_url: row.live_url,
      verified: "no",
      issues: [`Fetch failed: ${message}`],
    };
  }
}

async function main(): Promise<void> {
  migrateTrackerSchema();
  const { id, dryRun } = parseArgs();
  const nap = getNap();

  let rows = readTracker().filter((r) => r.type === "directory" && r.live_url.trim());

  if (id) {
    rows = rows.filter((r) => r.id === id);
    if (rows.length === 0) {
      const all = readTracker().find((r) => r.id === id);
      if (!all) {
        console.error(`Tracker row not found: ${id}`);
        process.exit(1);
      }
      if (!all.live_url.trim()) {
        console.error(`No live_url for ${id} — submit listing first.`);
        process.exit(1);
      }
      rows = [all];
    }
  }

  if (rows.length === 0) {
    console.log("\nNo directory rows with live_url to verify.\n");
    return;
  }

  console.log(`\nVerifying ${rows.length} listing(s) against NAP (${nap.website})...\n`);

  const results: VerifyResult[] = [];
  for (const row of rows) {
    const result = await verifyRow(row);
    results.push(result);

    const status = result.verified === "yes" ? "OK" : result.verified.toUpperCase();
    console.log(`[${status}] ${result.platform} (${result.id})`);
    console.log(`  URL: ${result.live_url}`);
    if (result.issues.length > 0) {
      result.issues.forEach((i) => console.log(`  - ${i}`));
    }
    console.log("");

    if (!dryRun) {
      updateTrackerRow(result.id, { verified: result.verified });
    }
  }

  const drift = results.filter((r) => r.verified === "drift").length;
  const ok = results.filter((r) => r.verified === "yes").length;
  console.log(`Summary: ${ok} verified, ${drift} drift, ${results.length - ok - drift} failed\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
