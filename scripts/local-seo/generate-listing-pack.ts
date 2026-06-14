/**
 * Generate copy-paste listing pack for directory submissions.
 * Run: npm run seo:listing-pack
 */
import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  getListingCategories,
  getListingDescriptions,
  getListingImageUrls,
  getMoneyPageLinks,
  getNap,
} from "@/lib/site/nap";
import { getSiteUrl } from "@/lib/site/metadata";
import { DIRECTORY_TARGETS } from "./directories";
import { BACKLINK_TARGETS, OUTREACH_TEMPLATES } from "./backlink-targets";

const TRACKER_PATH = join(process.cwd(), "seo", "listings-tracker.csv");

function ensureTrackerCsv(): void {
  if (existsSync(TRACKER_PATH)) return;
  const header =
    "id,type,platform,status,submitted_date,live_url,notes\n";
  const rows = DIRECTORY_TARGETS.map(
    (d) => `${d.id},directory,"${d.platform}",pending,,,`,
  );
  const backlinkRows = BACKLINK_TARGETS.map(
    (b) => `${b.id},backlink,"${b.name}",pending,,,`,
  );
  writeFileSync(TRACKER_PATH, header + rows.join("\n") + "\n" + backlinkRows.join("\n") + "\n");
}

function getPendingFromTracker(): string[] {
  if (!existsSync(TRACKER_PATH)) return [];
  const lines = readFileSync(TRACKER_PATH, "utf8").split("\n").slice(1);
  return lines
    .filter((l) => l.includes(",pending,"))
    .map((l) => l.split(",")[0])
    .filter(Boolean);
}

function main(): void {
  const nap = getNap();
  const desc = getListingDescriptions();
  const images = getListingImageUrls();
  const siteUrl = getSiteUrl();
  const categories = getListingCategories();
  const links = getMoneyPageLinks();

  ensureTrackerCsv();
  const pending = getPendingFromTracker();

  const pack = `# Ground Level Contracting — Listing Pack
Generated: ${new Date().toISOString()}
Website: ${siteUrl}

## NAP (use exactly on every listing)

Name:    ${nap.name}
Legal:   ${nap.legalName}
Phone:   ${nap.phone}
Email:   ${nap.email}
Address: ${nap.fullAddress}
Web:     ${nap.website}

## Descriptions

### Short (~150 chars)
${desc.short}

### Medium (~300 chars)
${desc.medium}

### Long (~500 chars)
${desc.long}

## Categories (pick best match per platform)
${categories.map((c) => `- ${c}`).join("\n")}

## Service areas
${nap.areaServed.join(", ")}

## Deep links
${links.map((l) => `- ${l.label}: ${siteUrl}${l.path === "/" ? "/" : l.path}`).join("\n")}

## Images
- Logo/hero: ${images.hero}

---

## Next directories to submit (pending in tracker)
${pending
  .slice(0, 5)
  .map((id) => {
    const d = DIRECTORY_TARGETS.find((t) => t.id === id);
    return d ? `- [Tier ${d.tier}] ${d.platform}: ${d.signupUrl}` : `- ${id}`;
  })
  .join("\n") || "(tracker empty or all submitted)"}

---

## Outreach templates

### Chamber
${OUTREACH_TEMPLATES.chamberShort}

### Partner link
${OUTREACH_TEMPLATES.partnerLink}

### Resource pitch
${OUTREACH_TEMPLATES.resourcePitch}
`;

  const outPath = join(process.cwd(), "seo", "listing-pack.md");
  writeFileSync(outPath, pack);
  console.log(`\nListing pack written: ${outPath}`);
  console.log(`Tracker: ${TRACKER_PATH}`);
  console.log(`Pending items: ${pending.length}\n`);
}

main();
