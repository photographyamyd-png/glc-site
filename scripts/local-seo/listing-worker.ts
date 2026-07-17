/**
 * Directory + backlink listing worker for assisted and Playwright automation.
 *
 * Run:
 *   npm run seo:listing-worker -- --report
 *   npm run seo:listing-worker -- --id=barrie-chamber --headed
 *   npm run seo:listing-worker -- --backlink --report
 *   npm run seo:listing-worker -- --id=canada411 --mark-submitted --live-url=<url>
 *   npm run seo:listing-worker -- --id=canada411 --mark-awaiting-human --note="CAPTCHA"
 */
import { formatBacklinkReport, pickNextBacklink } from "./backlink-outreach";
import { buildListingWorkerReport } from "./listing-worker-report";
import { runAssistedSession } from "./playwright/assisted-session";
import { migrateTrackerSchema, updateTrackerRow } from "./tracker";

function parseArgs(): {
  id?: string;
  report: boolean;
  backlink: boolean;
  headed: boolean;
  dryRun: boolean;
  markSubmitted: boolean;
  markAwaitingHuman: boolean;
  liveUrl?: string;
  note?: string;
} {
  const args = process.argv.slice(2);
  let id: string | undefined;
  let report = false;
  let backlink = false;
  let headed = false;
  let dryRun = false;
  let markSubmitted = false;
  let markAwaitingHuman = false;
  let liveUrl: string | undefined;
  let note: string | undefined;

  for (const arg of args) {
    if (arg === "--report") report = true;
    else if (arg === "--backlink") backlink = true;
    else if (arg === "--headed") headed = true;
    else if (arg === "--dry-run") dryRun = true;
    else if (arg === "--mark-submitted") markSubmitted = true;
    else if (arg === "--mark-awaiting-human") markAwaitingHuman = true;
    else if (arg.startsWith("--id=")) id = arg.slice(5);
    else if (arg.startsWith("--live-url=")) liveUrl = arg.slice(11);
    else if (arg.startsWith("--note=")) note = arg.slice(7);
  }

  return {
    id,
    report,
    backlink,
    headed,
    dryRun,
    markSubmitted,
    markAwaitingHuman,
    liveUrl,
    note,
  };
}

async function main(): Promise<void> {
  migrateTrackerSchema();
  const {
    id,
    report,
    backlink,
    headed,
    dryRun,
    markSubmitted,
    markAwaitingHuman,
    liveUrl,
    note,
  } = parseArgs();
  const today = new Date().toISOString().slice(0, 10);

  if (markAwaitingHuman) {
    if (!id) {
      console.error(
        "Usage: npm run seo:listing-worker -- --id=<id> --mark-awaiting-human [--note=CAPTCHA]",
      );
      process.exit(1);
    }
    updateTrackerRow(id, {
      status: "awaiting_human",
      last_attempt: today,
      agent_notes: note?.trim() || "Paused for CAPTCHA / OTP / human verify — resume same listing",
    });
    console.log(`Tracker updated: ${id} → awaiting_human (do not start another directory)\n`);
    return;
  }

  if (markSubmitted) {
    if (!id) {
      console.error("Usage: npm run seo:listing-worker -- --id=<id> --mark-submitted [--live-url=<url>]");
      process.exit(1);
    }
    updateTrackerRow(id, {
      status: liveUrl?.trim() ? "live" : "submitted",
      submitted_date: today,
      last_attempt: today,
      live_url: liveUrl?.trim() ?? "",
      agent_notes: "Marked submitted via listing-worker",
    });
    console.log(`Tracker updated: ${id} → ${liveUrl?.trim() ? "live" : "submitted"}\n`);
    return;
  }

  if (backlink && report) {
    const task = pickNextBacklink(id);
    if (!task) {
      console.error(id ? `Backlink not found or not pending: ${id}` : "No pending backlink tasks.");
      process.exit(1);
    }
    console.log(formatBacklinkReport(task));
    return;
  }

  if (report) {
    console.log(buildListingWorkerReport());
    return;
  }

  if (id) {
    const result = await runAssistedSession({ id, headed: headed || true, dryRun });
    if (result) {
      console.log("\nSession complete.");
      console.log(`Platform: ${result.platform}`);
      console.log(`Fields filled: ${result.filledFields}`);
      console.log(`Images uploaded: ${result.imagesUploaded}`);
      console.log(`Final URL: ${result.finalUrl}`);
      console.log("\nIf listing is live, run:");
      console.log(`  npm run seo:listing-worker -- --id=${id} --mark-submitted --live-url=<url>\n`);
    }
    return;
  }

  console.error("Usage:");
  console.error("  npm run seo:listing-worker -- --report");
  console.error("  npm run seo:listing-worker -- --backlink --report");
  console.error("  npm run seo:listing-worker -- --id=barrie-chamber --headed");
  console.error("  npm run seo:listing-worker -- --id=<id> --mark-submitted --live-url=<url>");
  console.error("  npm run seo:listing-worker -- --id=<id> --mark-awaiting-human [--note=CAPTCHA]");
  process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
