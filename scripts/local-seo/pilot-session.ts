/**
 * Pilot session for assisted directory listing workflow.
 * Run: npm run seo:pilot-session [-- --id=canada411]
 *
 * Prints agent payload, updates last_attempt, and documents human gates.
 */
import { getNap } from "@/lib/site/nap";
import { DIRECTORY_TARGETS } from "./directories";
import { updateTrackerRow, readTracker } from "./tracker";

function parseArgs(): { id: string } {
  const arg = process.argv.find((a) => a.startsWith("--id="));
  return { id: arg?.slice(5) ?? "canada411" };
}

async function main(): Promise<void> {
  const { id } = parseArgs();
  const target = DIRECTORY_TARGETS.find((d) => d.id === id);

  if (!target) {
    console.error(`Directory not found in registry: ${id}`);
    process.exit(1);
  }

  const row = readTracker().find((r) => r.id === id);
  const nap = getNap();
  const today = new Date().toISOString().slice(0, 10);

  console.log("\n=== GLC Directory Listing — Pilot Session ===\n");
  console.log(`Platform: ${target.platform}`);
  console.log(`Signup:   ${target.signupUrl}`);
  console.log(`Tier:     ${target.tier}`);
  console.log(`Status:   ${row?.status ?? "unknown"}\n`);

  console.log("--- NAP payload (paste exactly) ---");
  console.log(`Name:    ${nap.name}`);
  console.log(`Phone:   ${nap.phone}`);
  console.log(`Email:   ${nap.email}`);
  console.log(`Address: ${nap.fullAddress}`);
  console.log(`Web:     ${nap.website}\n`);

  console.log("--- Assisted agent steps ---");
  console.log("1. npm run seo:local-prep");
  console.log(`2. npm run seo:next-listing -- --id=${id}`);
  console.log(`3. Open ${target.signupUrl} in IDE browser`);
  console.log("4. PAUSE — user logs in (loginRequired: true)");
  console.log("5. Agent fills form from JSON fieldMap");
  console.log("6. PAUSE — user reviews and clicks Submit");
  console.log("7. Update tracker:");
  console.log(
    `   npx tsx scripts/local-seo/pilot-session.ts --id=${id} --mark-submitted --live-url=<url>`,
  );
  console.log(`8. npm run seo:verify-listings -- --id=${id}\n`);

  const markSubmitted = process.argv.includes("--mark-submitted");
  const liveUrlArg = process.argv.find((a) => a.startsWith("--live-url="));
  const liveUrl = liveUrlArg?.slice(11) ?? "";

  if (markSubmitted) {
    updateTrackerRow(id, {
      status: liveUrl ? "live" : "submitted",
      submitted_date: today,
      live_url: liveUrl,
      last_attempt: today,
      agent_notes: "Pilot session completed via assisted agent workflow",
    });
    console.log(`Tracker updated: ${id} → ${liveUrl ? "live" : "submitted"}\n`);
    return;
  }

  updateTrackerRow(id, {
    last_attempt: today,
    agent_notes: "Pilot session started — awaiting human login and submit",
  });

  console.log(`Tracker: last_attempt set to ${today} for ${id}\n`);
  console.log("Full JSON payload:");
  const { execSync } = await import("node:child_process");
  execSync(`npx tsx scripts/local-seo/next-listing.ts --id=${id} --dry-run`, {
    stdio: "inherit",
    cwd: process.cwd(),
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
