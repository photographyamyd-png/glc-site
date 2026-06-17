/**
 * Generate step-by-step manual submission playbook for directory listings.
 * Run: npm run seo:submission-guide
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import type { SiteConfig } from "@/content/types";
import site from "@/content/site.json";
import { getBusinessEmail } from "@/lib/site/owners";
import {
  getListingCategories,
  getListingDescriptions,
  getGbpDescription,
  getGbpDescriptionFallback,
  getGbpDescriptionMaxLength,
  getListingImageUrls,
  getMoneyPageLinks,
  getNap,
  type NapRecord,
} from "@/lib/site/nap";
import { getSiteUrl } from "@/lib/site/metadata";
import {
  DIRECTORY_TARGETS,
  getDirectoriesByTier,
  type DirectoryTarget,
} from "./directories";
import {
  BACKLINK_TARGETS,
  OUTREACH_TEMPLATES,
  type BacklinkTarget,
  type BacklinkTargetType,
} from "./backlink-targets";

const OUT_PATH = join(process.cwd(), "seo", "listing-submission-guide.md");
const TRACKER_PATH = join(process.cwd(), "seo", "listings-tracker.csv");

type PreflightResult = {
  url: string;
  label: string;
  ok: boolean;
  status?: number;
  detail?: string;
};

function telToSchema(phoneHref: string): string {
  const digits = phoneHref.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  return phoneHref;
}

/** Static check: SiteJsonLd.tsx fields match getNap() (same site.json source). */
function validateJsonLdNap(nap: ReturnType<typeof getNap>): PreflightResult[] {
  const SITE = site as SiteConfig;
  const jsonLdTel = telToSchema(SITE.telephone);
  const napTel = telToSchema(nap.phoneTel);

  const pairs: Array<{ label: string; jsonLdValue: string; napValue: string }> = [
    { label: "JSON-LD telephone", jsonLdValue: jsonLdTel, napValue: napTel },
    { label: "JSON-LD email", jsonLdValue: SITE.email, napValue: nap.email },
    {
      label: "JSON-LD streetAddress",
      jsonLdValue: SITE.address.streetAddress,
      napValue: nap.street,
    },
  ];

  return pairs.map(({ label, jsonLdValue, napValue }) => ({
    url: "components/seo/SiteJsonLd.tsx ↔ lib/site/nap.ts",
    label,
    ok: jsonLdValue === napValue,
    detail: jsonLdValue === napValue ? jsonLdValue : `SiteJsonLd "${jsonLdValue}" ≠ NAP "${napValue}"`,
  }));
}

function fieldTable(rows: Array<[string, string]>): string {
  return [
    "| Platform field | Paste exactly |",
    "|---|---|",
    ...rows.map(([field, value]) => `| ${field} | ${value.replace(/\|/g, "\\|")} |`),
  ].join("\n");
}

function napFieldRows(
  nap: NapRecord,
  desc: { short: string; medium: string; long: string },
): Array<[string, string]> {
  return [
    ["Business name", nap.name],
    ["Slogan / tagline", nap.slogan],
    ["Legal name (if asked)", nap.legalName],
    ["Phone", nap.phone],
    ["Email", nap.email],
    ["Street address", nap.street],
    ["City", nap.city],
    ["Province / region", nap.region],
    ["Postal code", nap.postalCode],
    ["Country", nap.country],
    ["Full address (single line)", nap.fullAddress],
    ["Website", nap.website],
    ["Short description (~150 chars)", desc.short],
    ["Medium description (~300 chars)", desc.medium],
    ["Long description (~500 chars)", desc.long],
  ];
}

function gbpFieldRows(nap: NapRecord, gbpDesc: string, maxLen: number): Array<[string, string]> {
  return [
    ["Business name", nap.name],
    ["Slogan / tagline", nap.slogan],
    ["Legal name (if asked)", nap.legalName],
    ["Phone", nap.phone],
    ["Email", nap.email],
    ["Street address", nap.street],
    ["City", nap.city],
    ["Province / region", nap.region],
    ["Postal code", nap.postalCode],
    ["Country", nap.country],
    ["Full address (single line)", nap.fullAddress],
    ["Website", nap.website],
    [`Business description (max ${maxLen} chars — paste exactly)`, gbpDesc],
  ];
}

function getPlatformSteps(id: string, nap: NapRecord): string[] {
  const areas = nap.areaServed.join(", ");
  const steps: Record<string, string[]> = {
    gbp: [
      "Sign in at [Google Business Profile](https://business.google.com) with a Google account you control long-term.",
      "Choose **Add business** (or claim if a duplicate already exists for your name + phone).",
      "Business type: select **Service-area business** (you have a PO Box, not a customer-facing street address).",
      "Enter business name exactly as listed in the field table.",
      "Primary category: **Excavating contractor**. Add **Construction company** and **Snow removal service** as additional categories.",
      "In **Services**, add: Commercial excavation (Barrie), Commercial excavation (Orillia), Site grading, Commercial snow removal (Barrie), Commercial snow removal (Orillia).",
      `Service areas: add each city — ${areas}.`,
      `Website: ${nap.website} (no www, no .com).`,
      `Phone: ${nap.phone} | Email: ${nap.email}.`,
      `Address: use PO Box exactly — ${nap.fullAddress}. Do not invent a street address for the map pin.`,
      "Business description: paste the **GBP description** from the field table. Google rejects phone numbers, URLs, offers (e.g. free estimates), and keyword-stuffed location repeats — use the dedicated GBP field for phone and website.",
      "If the description is **not approved**, wait 24 hours and submit the **fallback description** from Section 0 (do not resubmit the same rejected text).",
      "Upload at least one photo (hero image URL in Section 0).",
      "Complete ownership verification (postcard, phone, or video as offered).",
      "After verification, add hours (if applicable) and additional photos.",
    ],
    "bing-places": [
      "Sign in at [Bing Places](https://www.bingplaces.com).",
      "If GBP is already live, use **Import from Google Business Profile** when offered.",
      "Otherwise create a new listing and paste NAP from the field table.",
      `Primary category: **Excavating contractor**. Service areas: ${areas}.`,
      "Match phone, website, and address character-for-character with GBP.",
    ],
    "apple-business": [
      "Sign in at [Apple Business Connect](https://businessconnect.apple.com) with your Apple ID.",
      "Create a new location or claim an existing Apple Maps listing.",
      `Category: **Construction** (or closest match to Excavating contractor).`,
      "Paste NAP from the field table; confirm Barrie appears as the business locality.",
      `Service areas: ${areas}. Website: ${nap.website}.`,
      "Upload hero photo; submit for Apple review if prompted.",
    ],
    "yellow-pages-ca": [
      "Go to [Yellow Pages Canada](https://www.yellowpages.ca) and sign in or register.",
      "Search for an existing listing to **claim**, or create a new business profile.",
      `Category: **Excavation Contractors** (or closest match).`,
      "Use the **medium** description from the field table.",
      "Paste remaining NAP fields exactly; add service areas if the form allows.",
    ],
    canada411: [
      "Go to [Canada411](https://www.canada411.ca) and create or claim a listing.",
      `Category: **Excavating contractor**.`,
      "Paste NAP from the field table; use **medium** description.",
      "Confirm website is `.ca` and phone format matches `(705) 619-4902`.",
    ],
    homestars: [
      "Sign up at [HomeStars](https://www.homestars.com) as a pro/contractor.",
      `Category: **Excavation**.`,
      "Complete profile with NAP from the field table; use **long** description if space allows.",
      "Upload 3+ project photos (use hero + additional service images from your site).",
      "Plan to request reviews from satisfied clients after completed jobs.",
    ],
    houzz: [
      "Create a [Houzz Pro](https://www.houzz.com/pro) profile.",
      `Category: **Excavation**.`,
      "Paste NAP; use **medium** or **long** description.",
      "Add portfolio photos and link website to excavation service page if a deep-link field exists.",
    ],
    "barrie-chamber": [
      "Visit [Barrie Chamber of Commerce](https://www.barriechamber.com).",
      "If not a member, explore membership — directory link may require joining.",
      "If already a member, use the **Chamber** outreach template in Section 5 to confirm directory details.",
      "Ensure website lists `https://groundlevelcontracting.ca` and category reflects excavation/site preparation.",
    ],
    "orillia-chamber": [
      "Visit [Orillia & District Chamber of Commerce](https://www.orillia.com/chamber).",
      "Membership may be required for a directory listing.",
      "Use the **Chamber** outreach template in Section 5 if you are a member.",
    ],
    "bbb-central-ontario": [
      "Go to [BBB](https://www.bbb.org) and search for existing listing or apply for accreditation.",
      `Category: **Excavating contractor**. Paste NAP; use **medium** description.`,
      "Accreditation is optional for a basic listing — follow their apply/claim flow.",
    ],
    trustedpros: [
      "Register at [TrustedPros](https://www.trustedpros.ca).",
      `Category: **Excavation**. Paste NAP from field table; use **medium** description.`,
      "Add service areas and upload photos when prompted.",
    ],
    facebook: [
      "Create a [Facebook Business Page](https://www.facebook.com/pages/create).",
      `Category: **Construction Company**. Business name: ${nap.name}.`,
      `Tagline: **${nap.slogan}** (if the form has a short tagline field).`,
      "Add phone, email, website, and address from field table.",
      "Use **medium** description in About; add hero image as profile/cover.",
    ],
    linkedin: [
      "Create a [LinkedIn Company Page](https://www.linkedin.com/company/setup/new).",
      `Category: **Construction**. Paste NAP; website ${nap.website}.`,
      `Tagline: **${nap.slogan}**.`,
      "Use **medium** description for the About section.",
    ],
    "yelp-ca": [
      "Claim or add at [Yelp for Business](https://biz.yelp.ca).",
      `Category: **Excavation Services**. Paste NAP; use **medium** description.`,
      "Do not pay for ads to complete basic listing setup.",
    ],
    brownbook: [
      "Add listing at [Brownbook.net](https://www.brownbook.net).",
      `Category: **Excavating contractor**. Paste NAP; **short** or **medium** description.`,
    ],
    "cylex-ca": [
      "Register at [Cylex Canada](https://www.cylex-canada.ca).",
      `Category: **Excavating contractor**. Paste NAP from field table.`,
    ],
    "hotfrog-ca": [
      "Add listing at [Hotfrog Canada](https://www.hotfrog.ca).",
      `Category: **Excavation**. Paste NAP; **medium** description.`,
    ],
    iglobal: [
      "Add listing at [iGlobal Canada](https://www.iglobal.co/canada).",
      `Category: **Construction**. Paste NAP from field table.`,
    ],
    cybo: [
      "Add listing at [Cybo](https://www.cybo.com).",
      "Category: **Excavating contractor**. Paste NAP; confirm website `.ca`.",
    ],
    manta: [
      "Add listing at [Manta](https://www.manta.com/add-your-business).",
      `Category: **Excavation contractor**. Paste NAP; **medium** description.`,
    ],
    ogca: [
      "Visit [Ontario General Contractors Association](https://ogca.ca).",
      "Explore membership or subcontractor/supplier directory eligibility — not a quick citation.",
      "Use association outreach (adapt Chamber template) if contacting about a listing.",
    ],
  };

  return (
    steps[id] ?? [
      "Open the signup URL below and create or claim a listing.",
      "Paste NAP from the field table exactly.",
      "Pick the suggested category closest to your services.",
      `Add service areas: ${areas}.`,
    ]
  );
}

function outreachTemplateForType(type: BacklinkTargetType): keyof typeof OUTREACH_TEMPLATES {
  switch (type) {
    case "chamber":
    case "association":
      return "chamberShort";
    case "partner":
    case "supplier":
      return "partnerLink";
    case "resource":
      return "resourcePitch";
    case "media":
      return "resourcePitch";
    default:
      return "chamberShort";
  }
}

function renderDirectorySection(
  tier: 1 | 2 | 3 | 4,
  nap: NapRecord,
  desc: ReturnType<typeof getListingDescriptions>,
  gbpDesc: string,
  gbpMaxLen: number,
): string {
  const items = getDirectoriesByTier(tier);
  if (items.length === 0) return "";

  const blocks = items.map((d: DirectoryTarget, index: number) => {
    const steps = getPlatformSteps(d.id, nap);
    const notes = d.notes ? `\n\n**Registry note:** ${d.notes}` : "";
    const fieldRows =
      d.id === "gbp" ? gbpFieldRows(nap, gbpDesc, gbpMaxLen) : napFieldRows(nap, desc);
    return `### ${index + 1}. ${d.platform}

- **Signup:** [${d.signupUrl}](${d.signupUrl})
- **Time estimate:** ~${d.estimatedMinutes} minutes
- **Tracker ID:** \`${d.id}\`
- **Suggested category:** ${d.suggestedCategories.join(" or ")}

**Steps**

${steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}

**Field mapping**

${fieldTable(fieldRows)}
${notes}

**After submit:** Update \`seo/listings-tracker.csv\` — set \`${d.id}\` status to \`submitted\`, add \`submitted_date\`, then \`live_url\` when the listing is visible.
`;
  });

  return `## Section ${tier} — Tier ${tier} directories (${items.length} platforms)

${blocks.join("\n---\n\n")}`;
}

function renderBacklinkSection(): string {
  const byPriority = ([1, 2, 3] as const).map((p) => {
    const targets = BACKLINK_TARGETS.filter((b) => b.priority === p);
    if (targets.length === 0) return "";
    const rows = targets.map((b: BacklinkTarget) => {
      const templateKey = outreachTemplateForType(b.type);
      const templateLabel =
        templateKey === "chamberShort"
          ? "Chamber"
          : templateKey === "partnerLink"
            ? "Partner link"
            : "Resource pitch";
      const notes = b.notes ? `\n- **Notes:** ${b.notes}` : "";
      return `### ${b.name}

- **URL:** [${b.url}](${b.url})
- **Tracker ID:** \`${b.id}\`
- **Type:** ${b.type}
- **Priority:** ${b.priority} (1 = highest)
- **Suggested anchor:** ${b.suggestedAnchor}
- **Use template:** ${templateLabel}${notes}
`;
    });
    return `### Priority ${p}\n\n${rows.join("\n")}`;
  });

  return `## Section 5 — Backlink outreach (${BACKLINK_TARGETS.length} targets)

Work priority 1 first. Send outreach from **${getBusinessEmail()}** only — not personal owner inboxes.

${byPriority.filter(Boolean).join("\n\n")}

### Email templates (copy-paste)

#### Chamber

\`\`\`
${OUTREACH_TEMPLATES.chamberShort}
\`\`\`

#### Partner link

\`\`\`
${OUTREACH_TEMPLATES.partnerLink}
\`\`\`

#### Resource pitch

\`\`\`
${OUTREACH_TEMPLATES.resourcePitch}
\`\`\`
`;
}

async function runPreflight(
  siteUrl: string,
  links: ReturnType<typeof getMoneyPageLinks>,
  heroImage: string,
): Promise<PreflightResult[]> {
  const resourcePath = "/resources/excavation-barrie-commercial-mobilization/";
  const urls: Array<{ label: string; url: string }> = [
    ...links.map((l) => ({
      label: l.label,
      url: `${siteUrl}${l.path === "/" ? "/" : l.path}`,
    })),
    { label: "Resource article (outreach)", url: `${siteUrl}${resourcePath}` },
    { label: "Hero image", url: heroImage },
  ];

  const results: PreflightResult[] = [];
  for (const { label, url } of urls) {
    try {
      const res = await fetch(url, { method: "HEAD", redirect: "follow" });
      const ok = res.ok || res.status === 405;
      if (!ok && res.status === 405) {
        const getRes = await fetch(url, { method: "GET", redirect: "follow" });
        results.push({ url, label, ok: getRes.ok, status: getRes.status });
      } else if (!ok && res.status === 403) {
        const getRes = await fetch(url, { method: "GET", redirect: "follow" });
        results.push({ url, label, ok: getRes.ok, status: getRes.status });
      } else {
        results.push({ url, label, ok, status: res.status });
      }
    } catch {
      results.push({ url, label, ok: false });
    }
  }
  return results;
}

function renderPreflightSection(results: PreflightResult[]): string {
  const failures = results.filter((r) => !r.ok);
  const lines = results.map((r) => {
    const icon = r.ok ? "OK" : "FAIL";
    const status = r.status != null ? ` (${r.status})` : "";
    const detail = r.detail ? ` — ${r.detail}` : "";
    return `- [${icon}] **${r.label}** — ${r.url}${status}${detail}`;
  });

  const warning =
    failures.length > 0
      ? `\n\n> **Warning:** ${failures.length} URL(s) failed preflight. Fix before submitting listings that link to them.\n`
      : "\n\n> All preflight URLs responded successfully.\n";

  return `## Pre-flight check (run ${new Date().toISOString().split("T")[0]})

${lines.join("\n")}${warning}`;
}

async function main(): Promise<void> {
  const nap = getNap();
  const desc = getListingDescriptions();
  const gbpDesc = getGbpDescription();
  const gbpFallback = getGbpDescriptionFallback();
  const gbpMaxLen = getGbpDescriptionMaxLength();
  const images = getListingImageUrls();
  const siteUrl = getSiteUrl();
  const categories = getListingCategories();
  const links = getMoneyPageLinks();

  const urlPreflight = await runPreflight(siteUrl, links, images.hero);
  const jsonLdPreflight = validateJsonLdNap(nap);
  const preflight = [...urlPreflight, ...jsonLdPreflight];

  const guide = `# Ground Level Contracting — Listing Submission Guide

Generated: ${new Date().toISOString()}
Website: ${siteUrl}
Companion: [listing-pack.md](./listing-pack.md) | Tracker: [listings-tracker.csv](./listings-tracker.csv)

Use this guide alongside the listing pack. Paste values **exactly** — character-for-character — on every platform.

${renderPreflightSection(preflight)}

---

## Section 0 — Global prep (read once)

### NAP — do not change on any listing

| Field | Value |
|---|---|
| Name | ${nap.name} |
| Slogan | ${nap.slogan} |
| Legal | ${nap.legalName} |
| Phone | ${nap.phone} |
| Email | ${nap.email} |
| Address | ${nap.fullAddress} |
| Web | ${nap.website} |

### Rules

- Slogan always **${nap.slogan}** — include in descriptions and any tagline/slogan field (Facebook, LinkedIn, etc.).
- Website always **${nap.website}** — no \`www\`, no \`.com\`, no trailing slash unless a form requires it.
- Phone always **${nap.phone}**.
- Email always **${nap.email}** — the only published contact email. Do not list personal owner inboxes (Terry King, Ramon Tomporowski, or any other individual).
- Address always **${nap.fullAddress}** — do not substitute a street address.
- PO Box / map pin: on Google and similar platforms, choose **service-area business**; list service cities instead of faking a storefront.

### Descriptions — which to use

| Length | When to use | Text |
|---|---|---|
| Short (~150) | Tight character limits, social bios | ${desc.short} |
| Medium (~300) | Most directories (default) | ${desc.medium} |
| Long (~500) | HomeStars, Houzz, long About fields | ${desc.long} |
| **GBP (${gbpMaxLen} max)** | **Google Business Profile only** — ${gbpDesc.length} chars | ${gbpDesc} |

> **GBP description rules:** Factual services only. No phone, URLs, pricing, or promotional offers. Barrie/Orillia and construction-company visibility rely on **categories** (Excavating contractor + Construction company), **service areas**, and **Services** — not keyword repetition in the description.

**If Google rejects the description**, use this fallback (${gbpFallback.length} chars):

${gbpFallback}

### Service areas (repeat on every platform that asks)

${nap.areaServed.join(", ")}

### Categories (pick closest match per platform)

${categories.map((c) => `- ${c}`).join("\n")}

### Hero / logo image for uploads

${images.hero}

### Deep links (for website or profile link fields)

${links.map((l) => `- ${l.label}: ${siteUrl}${l.path === "/" ? "/" : l.path}`).join("\n")}

### Recommended order

1. **Google Business Profile first** — Bing can import from Google after GBP is live.
2. Tier 1 remaining: Bing → Apple → Yellow Pages → Canada411 → HomeStars → Houzz.
3. Tier 2–3: batch 2–3 per week.
4. Backlink outreach (Section 5): 1–2 emails per week.

---

${renderDirectorySection(1, nap, desc, gbpDesc, gbpMaxLen)}

---

${renderDirectorySection(2, nap, desc, gbpDesc, gbpMaxLen)}

---

${renderDirectorySection(3, nap, desc, gbpDesc, gbpMaxLen)}

---

${renderDirectorySection(4, nap, desc, gbpDesc, gbpMaxLen)}

---

${renderBacklinkSection()}

---

## Section 6 — Tracker workflow

After each submission, edit [\`seo/listings-tracker.csv\`](./listings-tracker.csv):

\`\`\`csv
id,type,platform,status,submitted_date,live_url,notes
gbp,directory,Google Business Profile,submitted,2026-06-15,https://...,verified via postcard
\`\`\`

**Status flow:** \`pending\` → \`submitted\` → \`live\` → \`verified\`

Tracker path: \`${TRACKER_PATH.replace(/\\/g, "/")}\`

### After GBP is live (Vercel env vars)

Set in your Vercel project:

- \`NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL\`
- \`NEXT_PUBLIC_GOOGLE_REVIEW_SCORE\`
- \`NEXT_PUBLIC_GOOGLE_REVIEW_COUNT\`

---

## Section 7 — Weekly rhythm

- **2–3** directory submissions per week from the tracker queue.
- **1–2** backlink outreach emails per week (Section 5).
- Before each batch, regenerate assets:

\`\`\`bash
npm run seo:local-prep
\`\`\`

Or separately:

\`\`\`bash
npm run seo:listing-pack && npm run seo:submission-guide
\`\`\`
`;

  writeFileSync(OUT_PATH, guide);
  const failCount = preflight.filter((r) => !r.ok).length;
  console.log(`\nSubmission guide written: ${OUT_PATH}`);
  console.log(`Directories: ${DIRECTORY_TARGETS.length} | Backlinks: ${BACKLINK_TARGETS.length}`);
  console.log(`Preflight: ${preflight.length - failCount}/${preflight.length} URLs OK\n`);
  if (failCount > 0) {
    console.log("Preflight failures (see top of guide):");
    preflight
      .filter((r) => !r.ok)
      .forEach((r) => console.log(`  - ${r.label}: ${r.url}`));
    console.log("");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
