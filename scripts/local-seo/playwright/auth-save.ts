/**
 * Save Playwright browser session after manual login.
 * Run: npm run seo:auth-save -- --id=brownbook
 *
 * Opens a headed browser — log in, then press Enter in the terminal to save session.
 */
import * as readline from "node:readline";
import { chromium } from "playwright";
import { DIRECTORY_TARGETS } from "../directories";
import { ensureSessionsDir, sessionPath } from "./session-path";

function parseArgs(): { id: string; channel?: "chrome" | "msedge" } {
  const idArg = process.argv.find((a) => a.startsWith("--id="));
  if (!idArg) {
    console.error("Usage: npm run seo:auth-save -- --id=<directory-id> [--channel=chrome]");
    console.error("Example: npm run seo:auth-save -- --id=brownbook --channel=chrome");
    process.exit(1);
  }
  const channelArg = process.argv.find((a) => a.startsWith("--channel="));
  const channel = channelArg?.slice(10) as "chrome" | "msedge" | undefined;
  return { id: idArg.slice(5), channel };
}

async function waitForEnter(prompt: string): Promise<void> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  await new Promise<void>((resolve) => {
    rl.question(prompt, () => {
      rl.close();
      resolve();
    });
  });
}

async function main(): Promise<void> {
  const { id, channel } = parseArgs();
  const target = DIRECTORY_TARGETS.find((d) => d.id === id);

  if (!target) {
    console.error(`Directory not found: ${id}`);
    process.exit(1);
  }

  ensureSessionsDir();
  const storagePath = sessionPath(id);

  console.log(`\nOpening ${target.platform} for login...`);
  console.log(`URL: ${target.signupUrl}`);
  console.log(`Session will save to: ${storagePath}\n`);

  const browser = await chromium.launch({
    headless: false,
    ...(channel ? { channel } : {}),
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(target.signupUrl, { waitUntil: "domcontentloaded" });

  await waitForEnter(
    "Log in and navigate to the add/edit business form, then press Enter here to save session... ",
  );

  await context.storageState({ path: storagePath });
  console.log(`\nSession saved: ${storagePath}`);
  console.log(`Next: npm run seo:auto-submit -- --id=${id}\n`);

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
