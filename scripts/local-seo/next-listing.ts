/**
 * Return next pending directory listing payload for the assisted agent.
 * Run: npm run seo:next-listing [-- --id=canada411] [-- --write] [-- --dry-run]
 */
import {
  buildPayload,
  pickTarget,
  writeListingJson,
} from "./listing-payload";
import { migrateTrackerSchema, updateTrackerRow } from "./tracker";

function parseArgs(): { id?: string; tier?: number; dryRun: boolean; write: boolean } {
  const args = process.argv.slice(2);
  let id: string | undefined;
  let tier: number | undefined;
  let dryRun = false;
  let write = false;

  for (const arg of args) {
    if (arg === "--dry-run") dryRun = true;
    else if (arg === "--write") write = true;
    else if (arg.startsWith("--id=")) id = arg.slice(5);
    else if (arg.startsWith("--tier=")) tier = Number(arg.slice(7));
  }

  return { id, tier, dryRun, write };
}

function main(): void {
  migrateTrackerSchema();
  const { id, tier, dryRun, write } = parseArgs();
  const picked = pickTarget(id, tier);

  if (!picked) {
    console.error(
      id
        ? `Directory not found or not in registry: ${id}`
        : "No pending directory listings in tracker queue.",
    );
    process.exit(1);
  }

  const payload = buildPayload(picked.target, picked.trackerStatus);

  if (!dryRun) {
    updateTrackerRow(picked.target.id, {
      last_attempt: new Date().toISOString().slice(0, 10),
    });
  }

  if (write) {
    writeListingJson(payload);
    console.error(`Wrote ${picked.target.id} payload to seo/next-listing.json and extension listing-data.json`);
  }

  console.log(JSON.stringify(payload, null, 2));
}

main();
