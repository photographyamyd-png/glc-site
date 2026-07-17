/**
 * Next pending backlink target + outreach template for assisted outreach.
 */
import { BACKLINK_TARGETS, OUTREACH_TEMPLATES, type BacklinkTarget } from "./backlink-targets";
import { readTracker, type TrackerRow } from "./tracker";

export type BacklinkOutreachTask = {
  row: TrackerRow;
  target: BacklinkTarget;
  templateKey: keyof typeof OUTREACH_TEMPLATES;
  templateBody: string;
};

function templateKeyForType(type: BacklinkTarget["type"]): keyof typeof OUTREACH_TEMPLATES {
  switch (type) {
    case "chamber":
    case "association":
      return "chamberShort";
    case "partner":
      return "partnerLink";
    case "resource":
      return "resourcePitch";
    default:
      return "chamberShort";
  }
}

export function pickNextBacklink(id?: string): BacklinkOutreachTask | null {
  const rows = readTracker().filter((r) => r.type === "backlink" && r.status === "pending");

  let candidates = rows;
  if (id) {
    candidates = rows.filter((r) => r.id === id);
    if (candidates.length === 0) {
      const row = readTracker().find((r) => r.id === id && r.type === "backlink");
      if (!row) return null;
      candidates = [row];
    }
  }

  const sorted = candidates.sort((a, b) => {
    const left = BACKLINK_TARGETS.find((t) => t.id === a.id);
    const right = BACKLINK_TARGETS.find((t) => t.id === b.id);
    return (left?.priority ?? 99) - (right?.priority ?? 99);
  });

  const row = sorted[0];
  if (!row) return null;

  const target = BACKLINK_TARGETS.find((t) => t.id === row.id);
  if (!target) return null;

  const templateKey = templateKeyForType(target.type);
  return {
    row,
    target,
    templateKey,
    templateBody: OUTREACH_TEMPLATES[templateKey],
  };
}

export function formatBacklinkReport(task: BacklinkOutreachTask): string {
  const lines = [
    `## Backlink outreach — ${task.target.name}`,
    "",
    `- Priority: ${task.target.priority}`,
    `- Type: ${task.target.type}`,
    `- URL: ${task.target.url}`,
    `- Suggested anchor: ${task.target.suggestedAnchor}`,
    `- Tracker status: ${task.row.status}`,
    "",
    task.target.notes ? `Notes: ${task.target.notes}` : "",
    "",
    "### Outreach template",
    "",
    "```text",
    task.templateBody.trim(),
    "```",
    "",
    "### After they agree / link is live",
    "",
    "```bash",
    `npm run seo:listing-worker -- --id=${task.row.id} --mark-submitted --live-url=<partner-page-url>`,
    "```",
  ];

  return lines.filter((line) => line !== "").join("\n");
}
