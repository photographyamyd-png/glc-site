# Ground Level Contracting — Drainage, Hardscaping & Landscaping Service Page

**Version:** 2.0 (Landscaping integration)  
**Canonical implementation:** Verbatim strings and structure are mirrored in [`lib/site/drainage-hardscaping-landing-content.ts`](../../lib/site/drainage-hardscaping-landing-content.ts) and rendered by [`components/templates/DrainageHardscapingPage.tsx`](../../components/templates/DrainageHardscapingPage.tsx).  
**Purpose:** Human audit reference; the TypeScript module is the runtime source of truth for copy parity checks.

---

## Part 1 — Technical SEO (summary)

| Field | Final value |
|-------|-------------|
| Meta title | Drainage, Hardscaping & Landscaping Barrie \| Drain Tile, Retaining Walls & Patios |
| Meta description | Drainage, hardscaping & landscaping in Barrie & Simcoe County. Foundation drain tile, armour stone retaining walls, interlock patios & driveways. Free quotes. |
| Primary H1 | Drainage, Hardscaping & Landscaping Contractors Serving Barrie, Simcoe County & Surrounding Areas |
| Live URL (repo) | `/services/drainage-hardscaping/` (canonical from `NEXT_PUBLIC_SITE_URL`) |
| Marketing URL (doc) | `/services/drainage-hardscaping-barrie` — not a separate route; canonical uses registry slug |

JSON-LD: [`components/seo/DrainageHardscapingJsonLd.tsx`](../../components/seo/DrainageHardscapingJsonLd.tsx) — `@graph`: Service, BreadcrumbList, FAQPage (LocalBusiness via layout `SiteJsonLd` `#business`).

---

## Part 2 — Sections (labels map to TS exports)

| Section | TS / UI |
|---------|---------|
| A Hero | `DRAINAGE_HERO`, hero image `DRAINAGE_IMAGES.hero` |
| B Trust bar | `DRAINAGE_TRUST_BAR` |
| C Intro | `DRAINAGE_INTRO_*`, `DRAINAGE_IMAGES.introSidecar` |
| D Service cards | `DRAINAGE_SERVICE_CARDS`, `DRAINAGE_SERVICE_CARDS_EYEBROW` |
| E Foundation drain tile | `DRAINAGE_DRAIN_TILE` |
| F Site drainage | `DRAINAGE_SITE_DRAINAGE`, `SiteDrainageDesignClient` |
| G Retaining walls | `DRAINAGE_RETAINING_WALLS`, `StickyTabBox` |
| Mid CTA | `DRAINAGE_MID_CTA` |
| H Patios / steps | `DRAINAGE_PATIOS`, `StickyTabBox` |
| I Integration | `DRAINAGE_INTEGRATION` |
| J Why choose us | `DRAINAGE_WHY_CHOOSE` |
| K Process | `DRAINAGE_PROCESS` |
| L Service areas | `DRAINAGE_SERVICE_AREAS` |
| M FAQ | `DRAINAGE_FAQ`, `DrainageFaqAccordion` |
| N Trust signals | `DRAINAGE_TRUST_SIGNALS` |
| Position 15 Related | `DRAINAGE_RELATED_CARDS` (hrefs mapped to registry) |
| Position 16 Final CTA | `DRAINAGE_FINAL_CTA` |

## Part 3 — Image alts (Section P)

Verbatim alts: `DRAINAGE_IMAGE_ALTS` keys `01`–`28` in [`lib/site/drainage-hardscaping-landing-content.ts`](../../lib/site/drainage-hardscaping-landing-content.ts). Raster paths use `drainage-hardscaping-NNN.jpg` under `public/images/services/Drainage-and-Hardscaping/` until assets are renamed to Section P filenames.

---

## Part 4 — Internal links (exceptions documented in code)

- Sub-service URLs in copy (`/services/foundation-drain-tile-barrie`, etc.): **verbatim** in TS; routes may not exist yet.
- Related cards (Position 15): titles/descriptors verbatim; **hrefs** use `hauling-site-clearing-logistics`, `snow-removal`, `/contact/` per registry.

---

*Stakeholder-facing prose for Sections A–P in full lives in the v2.0 document supplied to the project; this file indexes where it landed in the repo for audits.*
