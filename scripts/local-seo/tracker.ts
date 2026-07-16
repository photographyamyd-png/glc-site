/**
 * Read/write listings tracker CSV with extended agent columns.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const TRACKER_PATH = join(process.cwd(), "seo", "listings-tracker.csv");

export const TRACKER_COLUMNS = [
  "id",
  "type",
  "platform",
  "status",
  "submitted_date",
  "live_url",
  "notes",
  "last_attempt",
  "agent_notes",
  "verified",
  "backlink_type",
] as const;

export type TrackerStatus = "pending" | "submitted" | "live" | "blocked" | "skipped";
export type TrackerVerified = "" | "yes" | "no" | "drift";
export type BacklinkType = "" | "nofollow" | "dofollow" | "unknown";

export type TrackerRow = {
  id: string;
  type: "directory" | "backlink";
  platform: string;
  status: TrackerStatus;
  submitted_date: string;
  live_url: string;
  notes: string;
  last_attempt: string;
  agent_notes: string;
  verified: TrackerVerified;
  backlink_type: BacklinkType;
};

/** Parse a single CSV line respecting quoted fields. */
function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      fields.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current);
  return fields;
}

function escapeCsvField(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function rowToCsv(row: TrackerRow): string {
  return TRACKER_COLUMNS.map((col) => escapeCsvField(row[col] ?? "")).join(",");
}

function fieldsToRow(fields: string[]): TrackerRow {
  const padded = [...fields];
  while (padded.length < TRACKER_COLUMNS.length) padded.push("");

  const status = padded[3] as TrackerStatus;
  const type = padded[1] as TrackerRow["type"];

  return {
    id: padded[0] ?? "",
    type: type === "backlink" ? "backlink" : "directory",
    platform: padded[2] ?? "",
    status:
      status === "submitted" || status === "live" || status === "blocked" || status === "skipped"
        ? status
        : "pending",
    submitted_date: padded[4] ?? "",
    live_url: padded[5] ?? "",
    notes: padded[6] ?? "",
    last_attempt: padded[7] ?? "",
    agent_notes: padded[8] ?? "",
    verified: (padded[9] as TrackerVerified) ?? "",
    backlink_type: (padded[10] as BacklinkType) ?? "",
  };
}

export function readTracker(): TrackerRow[] {
  if (!existsSync(TRACKER_PATH)) return [];

  const lines = readFileSync(TRACKER_PATH, "utf8")
    .split(/\r?\n/)
    .filter((l) => l.trim().length > 0);

  if (lines.length <= 1) return [];

  return lines.slice(1).map((line) => fieldsToRow(parseCsvLine(line)));
}

export function writeTracker(rows: TrackerRow[]): void {
  const header = TRACKER_COLUMNS.join(",");
  const body = rows.map(rowToCsv).join("\n");
  writeFileSync(TRACKER_PATH, `${header}\n${body}\n`);
}

export function getTrackerRow(id: string): TrackerRow | undefined {
  return readTracker().find((r) => r.id === id);
}

export function upsertTrackerRow(row: TrackerRow): void {
  const rows = readTracker();
  const idx = rows.findIndex((r) => r.id === row.id);
  if (idx >= 0) {
    rows[idx] = row;
  } else {
    rows.push(row);
  }
  writeTracker(rows);
}

export function updateTrackerRow(
  id: string,
  patch: Partial<Omit<TrackerRow, "id">>,
): TrackerRow | undefined {
  const rows = readTracker();
  const idx = rows.findIndex((r) => r.id === id);
  if (idx < 0) return undefined;

  rows[idx] = { ...rows[idx], ...patch };
  writeTracker(rows);
  return rows[idx];
}

export function getPendingDirectoryIds(): string[] {
  return readTracker()
    .filter((r) => r.type === "directory" && r.status === "pending")
    .map((r) => r.id);
}

export function seedTrackerRows(
  entries: Array<{ id: string; type: TrackerRow["type"]; platform: string }>,
): void {
  const existing = readTracker();
  const existingIds = new Set(existing.map((r) => r.id));
  const merged = [...existing];

  for (const entry of entries) {
    if (existingIds.has(entry.id)) continue;
    merged.push({
      id: entry.id,
      type: entry.type,
      platform: entry.platform,
      status: "pending",
      submitted_date: "",
      live_url: "",
      notes: "",
      last_attempt: "",
      agent_notes: "",
      verified: "",
      backlink_type: "",
    });
  }

  if (merged.length !== existing.length) {
    writeTracker(merged);
  }
}

/** Migrate legacy 7-column CSV to extended schema. */
export function migrateTrackerSchema(): void {
  if (!existsSync(TRACKER_PATH)) return;

  const raw = readFileSync(TRACKER_PATH, "utf8");
  const firstLine = raw.split(/\r?\n/)[0] ?? "";
  if (firstLine.includes("last_attempt")) return;

  const rows = readTracker();
  writeTracker(rows);
}
