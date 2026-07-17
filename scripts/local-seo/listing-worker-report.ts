/**
 * Markdown report for the next directory + backlink listing tasks.
 */
import { getNap } from "@/lib/site/nap";
import { pickNextBacklink, formatBacklinkReport } from "./backlink-outreach";
import { DIRECTORY_TARGETS, getDirectoryAutomationTier } from "./directories";
import { pickTarget } from "./listing-payload";
import { migrateTrackerSchema, readTracker } from "./tracker";

export function buildListingWorkerReport(): string {
  migrateTrackerSchema();
  const nap = getNap();
  const rows = readTracker();
  const today = new Date().toISOString().slice(0, 10);

  const directories = rows.filter((r) => r.type === "directory");
  const pendingDirs = directories.filter((r) => r.status === "pending");
  const pendingBacklinks = rows.filter((r) => r.type === "backlink" && r.status === "pending");

  const nextDir = pickTarget(undefined, 1) ?? pickTarget();
  const nextBacklink = pickNextBacklink();

  const lines = [
    `# Listing worker report — ${today}`,
    "",
    `Business: ${nap.name}`,
    `Website: ${nap.website}`,
    "",
    "## Queue summary",
    `- Directory listings: ${pendingDirs.length} pending`,
    `- Backlink outreach: ${pendingBacklinks.length} pending`,
    "",
  ];

  if (nextDir) {
    const tier = getDirectoryAutomationTier(nextDir.target.id);
    lines.push(
      "## Next directory task",
      `- Platform: **${nextDir.target.platform}**`,
      `- ID: \`${nextDir.target.id}\``,
      `- Signup: ${nextDir.target.signupUrl}`,
      `- Tier: ${nextDir.target.tier} | automation: **${tier}**`,
      nextDir.target.notes ? `- Notes: ${nextDir.target.notes}` : "",
      "",
      "### Run assisted session (chamber / Tier 1 manual)",
      "",
      "```bash",
      `npm run seo:listing-worker -- --id=${nextDir.target.id} --headed`,
      "```",
      "",
      "### Or prepare JSON payload only",
      "",
      "```bash",
      `npm run seo:next-listing -- --id=${nextDir.target.id} --write`,
      "```",
      "",
    );
  } else {
    lines.push("## Next directory task", "- No pending directories in queue.", "");
  }

  const topPending = pendingDirs
    .map((row) => {
      const target = DIRECTORY_TARGETS.find((d) => d.id === row.id);
      return { row, target };
    })
    .filter((item) => item.target)
    .sort((a, b) => (a.target!.tier - b.target!.tier))
    .slice(0, 5);

  if (topPending.length > 0) {
    lines.push("### Pending directory queue (top 5)");
    for (const { row, target } of topPending) {
      lines.push(
        `- ${target!.platform} (\`${row.id}\`, tier ${target!.tier}, ${getDirectoryAutomationTier(row.id)})`,
      );
    }
    lines.push("");
  }

  if (nextBacklink) {
    lines.push(formatBacklinkReport(nextBacklink));
  } else {
    lines.push("## Backlink outreach", "- No pending backlink tasks.", "");
  }

  lines.push(
    "## Human gates",
    "- Login / membership (chambers may require joining first)",
    "- CAPTCHA / 2FA",
    "- Final Submit click",
    "- Mark live URL after publish:",
    "",
    "```bash",
    "npm run seo:listing-worker -- --id=<id> --mark-submitted --live-url=<url>",
    "```",
  );

  return lines.filter(Boolean).join("\n");
}
