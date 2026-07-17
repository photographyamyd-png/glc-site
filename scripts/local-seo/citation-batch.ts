/**
 * Execute next N pending citations for the Cursor Automation agent.
 * Prefers Playwright-eligible free directories first, then tier order.
 *
 * Run:
 *   npm run seo:citation-batch -- --limit=3
 *   npm run seo:citation-batch -- --limit=3 --dry-run
 */
import { chromium } from "playwright";
import { DIRECTORY_TARGETS, getDirectoryAutomationTier, PLAYWRIGHT_AUTO_IDS } from "./directories";
import { buildAutofillValues, buildPayload, writeListingJson } from "./listing-payload";
import { fillPageForms } from "./playwright/fill-page";
import { hasSession, sessionPath, ensureSessionsDir } from "./playwright/session-path";
import { uploadListingImages } from "./playwright/upload-images";
import { migrateTrackerSchema, readTracker, updateTrackerRow } from "./tracker";

function parseArgs(): { limit: number; dryRun: boolean; headed: boolean } {
  const args = process.argv.slice(2);
  let limit = 10;
  let dryRun = false;
  let headed = false;
  for (const arg of args) {
    if (arg === "--dry-run") dryRun = true;
    else if (arg === "--headed") headed = true;
    else if (arg.startsWith("--limit=")) limit = Math.max(1, Number(arg.slice(8)) || 3);
  }
  return { limit, dryRun, headed };
}

function pickBatch(limit: number) {
  const rows = readTracker().filter(
    (r) => r.type === "directory" && (r.status === "pending" || r.status === "awaiting_human"),
  );
  const byId = new Map(rows.map((r) => [r.id, r]));

  const pending = DIRECTORY_TARGETS.filter((d) => byId.has(d.id)).sort((a, b) => {
    const aRow = byId.get(a.id)!;
    const bRow = byId.get(b.id)!;
    // Finish human-paused listings before starting new ones
    const aWait = aRow.status === "awaiting_human" ? 0 : 1;
    const bWait = bRow.status === "awaiting_human" ? 0 : 1;
    if (aWait !== bWait) return aWait - bWait;
    const aPlay = PLAYWRIGHT_AUTO_IDS.has(a.id) ? 0 : 1;
    const bPlay = PLAYWRIGHT_AUTO_IDS.has(b.id) ? 0 : 1;
    if (aPlay !== bPlay) return aPlay - bPlay;
    return a.tier - b.tier;
  });

  return pending.slice(0, limit);
}

async function attemptPlaywrightFill(
  id: string,
  headed: boolean,
  dryRun: boolean,
): Promise<{ ok: boolean; filled: number; note: string }> {
  const target = DIRECTORY_TARGETS.find((d) => d.id === id);
  if (!target) return { ok: false, filled: 0, note: "unknown id" };

  if (!hasSession(id)) {
    return {
      ok: false,
      filled: 0,
      note: `No saved session — cloud agent should open ${target.signupUrl} with browser tools and fill from payload`,
    };
  }

  if (dryRun) {
    return { ok: true, filled: 0, note: "[dry-run] would Playwright-fill with saved session" };
  }

  const values = buildAutofillValues(target);
  const browser = await chromium.launch({ headless: !headed });
  const context = await browser.newContext({ storageState: sessionPath(id) });
  const page = await context.newPage();
  await page.goto(target.signupUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(1500);
  const fill = await fillPageForms(page, values);
  let images = 0;
  try {
    images = (await uploadListingImages(page)).uploaded;
  } catch {
    /* optional */
  }
  const finalUrl = page.url();
  await browser.close();

  const today = new Date().toISOString().slice(0, 10);
  updateTrackerRow(id, {
    status: "submitted",
    submitted_date: today,
    last_attempt: today,
    live_url: finalUrl !== target.signupUrl ? finalUrl : "",
    agent_notes: `citation-batch Playwright: ${fill.filled} fields, ${images} images`,
  });

  return {
    ok: true,
    filled: fill.filled,
    note: `Playwright filled ${fill.filled} fields / ${images} images → submitted`,
  };
}

async function main(): Promise<void> {
  migrateTrackerSchema();
  ensureSessionsDir();
  const { limit, dryRun, headed } = parseArgs();
  const batch = pickBatch(limit);

  console.log(`\n=== Citation batch (limit ${limit}) ===\n`);
  if (batch.length === 0) {
    console.log("No pending directories in queue.\n");
    return;
  }

  for (const target of batch) {
    const tier = getDirectoryAutomationTier(target.id);
    const payload = buildPayload(
      { ...target, automationTier: getDirectoryAutomationTier(target.id) },
      "pending",
    );
    writeListingJson(payload);

    console.log(`## ${target.platform} (\`${target.id}\`)`);
    console.log(`- Tier ${target.tier} | automation: ${tier}`);
    console.log(`- URL: ${target.signupUrl}`);
    console.log(`- Payload written to seo/next-listing.json`);

    if (PLAYWRIGHT_AUTO_IDS.has(target.id)) {
      const result = await attemptPlaywrightFill(target.id, headed, dryRun);
      console.log(`- Result: ${result.note}`);
    } else {
      const today = new Date().toISOString().slice(0, 10);
      if (!dryRun) {
        updateTrackerRow(target.id, {
          last_attempt: today,
          agent_notes:
            "citation-batch: payload ready — automation agent must open URL and fill with browser tools",
        });
      }
      console.log(
        `- Result: Payload ready for cloud agent browser fill (NAP + descriptions in seo/next-listing.json)`,
      );
      console.log(`- Autofill businessName: ${payload.autofill.businessName}`);
      console.log(`- Autofill phone: ${payload.autofill.phone}`);
      console.log(`- Autofill website: ${payload.autofill.website}`);
    }
    console.log("");
  }

  console.log("Done. Cloud agent should continue browser fills for any non-Playwright rows above.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
