/**
 * Headed assisted directory session: open site, fill NAP, upload images, wait for human submit.
 */
import { chromium } from "playwright";
import {
  buildAutofillValues,
  buildPayload,
  writeListingJson,
} from "../listing-payload";
import { DIRECTORY_TARGETS, getDirectoryAutomationTier } from "../directories";
import { updateTrackerRow } from "../tracker";
import { fillPageForms } from "./fill-page";
import { ensureSessionsDir, hasSession, sessionPath } from "./session-path";
import { uploadListingImages } from "./upload-images";

export type AssistedSessionResult = {
  id: string;
  platform: string;
  filledFields: number;
  imagesUploaded: number;
  finalUrl: string;
};

export async function runAssistedSession(options: {
  id: string;
  headed: boolean;
  dryRun: boolean;
  waitMinutes?: number;
}): Promise<AssistedSessionResult | null> {
  const target = DIRECTORY_TARGETS.find((d) => d.id === options.id);
  if (!target) {
    console.error(`Unknown directory id: ${options.id}`);
    return null;
  }

  const payload = buildPayload(
    { ...target, automationTier: getDirectoryAutomationTier(target.id) },
    "pending",
  );
  writeListingJson(payload);

  const values = buildAutofillValues(target);
  const today = new Date().toISOString().slice(0, 10);

  console.log(`\n=== Assisted listing session: ${target.platform} ===\n`);
  console.log(`URL: ${target.signupUrl}`);
  console.log(`Tier: ${target.tier} | automation: ${getDirectoryAutomationTier(target.id)}`);
  if (target.notes) console.log(`Notes: ${target.notes}`);
  console.log("");

  if (options.dryRun) {
    console.log("[dry-run] Would open browser, fill NAP, upload hero image, and wait for human submit.");
    return null;
  }

  ensureSessionsDir();
  const useSession = hasSession(options.id);

  const browser = await chromium.launch({
    headless: !options.headed,
    ...(process.argv.includes("--channel=chrome") ? { channel: "chrome" as const } : {}),
    ...(process.argv.includes("--channel=msedge") ? { channel: "msedge" as const } : {}),
  });

  const context = await browser.newContext(
    useSession ? { storageState: sessionPath(options.id) } : {},
  );
  const page = await context.newPage();

  await page.goto(target.signupUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(2000);

  const fillResult = await fillPageForms(page, values);
  console.log(`Filled ${fillResult.filled} field(s):`);
  fillResult.fields.forEach((f) => console.log(`  - ${f}`));

  let imagesUploaded = 0;
  try {
    const imageResult = await uploadListingImages(page);
    imagesUploaded = imageResult.uploaded;
    console.log(`Uploaded images to ${imageResult.uploaded} file input(s).`);
  } catch (err) {
    console.log(`Image upload skipped: ${err instanceof Error ? err.message : err}`);
  }

  if (options.headed) {
    const waitMs = (options.waitMinutes ?? 10) * 60 * 1000;
    console.log("\nReview the form in the browser.");
    console.log("Log in if needed, fix any fields, click Submit, then close the browser.");
    console.log(`Waiting up to ${options.waitMinutes ?? 10} minutes...\n`);
    await page.waitForTimeout(waitMs);
  }

  const finalUrl = page.url();
  await browser.close();

  updateTrackerRow(options.id, {
    last_attempt: today,
    agent_notes: `Assisted session: ${fillResult.filled} fields filled, ${imagesUploaded} image input(s). Review submit manually.`,
    live_url: finalUrl !== target.signupUrl ? finalUrl : "",
    status: "submitted",
    submitted_date: today,
  });

  return {
    id: options.id,
    platform: target.platform,
    filledFields: fillResult.filled,
    imagesUploaded,
    finalUrl,
  };
}
