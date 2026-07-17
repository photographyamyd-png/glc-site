/**
 * Seed seo/listings-tracker.csv with every directory in the citation registry.
 * Preserves existing status / live_url / notes for known ids.
 *
 * Run: npm run seo:seed-citations
 */
import { DIRECTORY_TARGETS } from "./directories";
import { migrateTrackerSchema, readTracker, writeTracker, type TrackerRow } from "./tracker";

function main(): void {
  migrateTrackerSchema();
  const existing = readTracker();
  const byKey = new Map(existing.map((row) => [`${row.type}:${row.id}`, row]));

  let added = 0;
  for (const target of DIRECTORY_TARGETS) {
    const key = `directory:${target.id}`;
    if (byKey.has(key)) continue;

    const row: TrackerRow = {
      id: target.id,
      type: "directory",
      platform: target.platform,
      status: "pending",
      submitted_date: "",
      live_url: "",
      notes: target.notes ?? "",
      last_attempt: "",
      agent_notes: "Seeded from 150-citation expansion",
      verified: "",
      backlink_type: "",
    };
    byKey.set(key, row);
    added++;
  }

  const merged = [...byKey.values()];
  writeTracker(merged);

  const pending = merged.filter((r) => r.type === "directory" && r.status === "pending").length;
  console.log(`\nCitation queue seed complete.`);
  console.log(`Registry directories: ${DIRECTORY_TARGETS.length}`);
  console.log(`Tracker rows: ${merged.length} (added ${added} new directory rows)`);
  console.log(`Pending directories: ${pending}\n`);
}

main();
