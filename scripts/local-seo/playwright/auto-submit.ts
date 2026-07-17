/**
 * Playwright batch auto-fill for Tier 3 easy directories.
 * Run: npm run seo:auto-submit -- --batch=easy
 *      npm run seo:auto-submit -- --id=brownbook
 *      npm run seo:auto-submit -- --batch=easy --headed
 *
 * Requires saved session: npm run seo:auth-save -- --id=<id>
 */
import { chromium } from "playwright";
import {
  buildAutofillValues,
  getPlaywrightPendingTargets,
} from "../listing-payload";
import { migrateTrackerSchema, updateTrackerRow } from "../tracker";
import { DIRECTORY_TARGETS } from "../directories";
import { fillPageForms } from "./fill-page";
import { ensureSessionsDir, hasSession, sessionPath } from "./session-path";
import { uploadListingImages } from "./upload-images";

function parseArgs(): {
  id?: string;
  batch?: string;
  headed: boolean;
  dryRun: boolean;
} {
  const args = process.argv.slice(2);
  let id: string | undefined;
  let batch: string | undefined;
  let headed = false;
  let dryRun = false;

  for (const arg of args) {
    if (arg === "--headed") headed = true;
    else if (arg === "--dry-run") dryRun = true;
    else if (arg.startsWith("--id=")) id = arg.slice(5);
    else if (arg.startsWith("--batch=")) batch = arg.slice(8);
  }

  return { id, batch, headed, dryRun };
}

async function processDirectory(
  id: string,
  headed: boolean,
  dryRun: boolean,
): Promise<void> {
  const target = DIRECTORY_TARGETS.find((d) => d.id === id);
  if (!target) {
    console.error(`  Skip: unknown id ${id}`);
    return;
  }

  if (!hasSession(id)) {
    console.error(`  Skip ${target.platform}: no session. Run: npm run seo:auth-save -- --id=${id}`);
    return;
  }

  const values = buildAutofillValues(target);
  const today = new Date().toISOString().slice(0, 10);

  console.log(`\n--- ${target.platform} (${id}) ---`);
  console.log(`URL: ${target.signupUrl}`);

  if (dryRun) {
    console.log("  [dry-run] Would open browser and fill forms.");
    return;
  }

  const browser = await chromium.launch({
    headless: !headed,
    ...(process.argv.includes("--channel=chrome") ? { channel: "chrome" as const } : {}),
    ...(process.argv.includes("--channel=msedge") ? { channel: "msedge" as const } : {}),
  });
  const context = await browser.newContext({ storageState: sessionPath(id) });
  const page = await context.newPage();

  await page.goto(target.signupUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(2000);

  const fillResult = await fillPageForms(page, values);
  console.log(`  Filled ${fillResult.filled} field(s):`);
  fillResult.fields.forEach((f) => console.log(`    - ${f}`));

  try {
    const imageResult = await uploadListingImages(page);
    console.log(`  Uploaded images to ${imageResult.uploaded} file input(s).`);
  } catch (err) {
    console.log(`  Image upload skipped: ${err instanceof Error ? err.message : err}`);
  }

  if (headed) {
    console.log("\n  Review the form in the browser.");
    console.log("  Solve CAPTCHA if shown, click Submit, then close the browser window.");
    console.log("  Waiting up to 5 minutes...\n");
    await page.waitForTimeout(5 * 60 * 1000);
  }

  const finalUrl = page.url();
  await browser.close();

  updateTrackerRow(id, {
    status: "submitted",
    submitted_date: today,
    last_attempt: today,
    agent_notes: `Playwright auto-fill: ${fillResult.filled} fields. Review submit manually if headed.`,
    live_url: finalUrl !== target.signupUrl ? finalUrl : "",
  });

  console.log(`  Tracker updated → submitted`);
}

async function main(): Promise<void> {
  migrateTrackerSchema();
  ensureSessionsDir();
  const { id, batch, headed, dryRun } = parseArgs();

  let ids: string[] = [];

  if (id) {
    ids = [id];
  } else if (batch === "easy") {
    ids = getPlaywrightPendingTargets().map((d) => d.id);
    console.log(`\nPlaywright batch "easy": ${ids.length} pending director(ies)\n`);
  } else {
    console.error("Usage:");
    console.error("  npm run seo:auto-submit -- --id=brownbook [--headed]");
    console.error("  npm run seo:auto-submit -- --batch=easy [--headed]");
    process.exit(1);
  }

  if (ids.length === 0) {
    console.log("No pending Playwright-eligible directories in queue.");
    return;
  }

  for (const dirId of ids) {
    await processDirectory(dirId, headed, dryRun);
  }

  console.log("\nDone. Run npm run seo:verify-listings after live URLs are known.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
