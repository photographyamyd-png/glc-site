# Drainage & Hardscaping landing — build audit

**Date:** 2026-05-10  
**Sources:** [`docs/content/GLC_DrainageHardscaping_Page_Complete_v2.md`](../content/GLC_DrainageHardscaping_Page_Complete_v2.md), [`lib/site/drainage-hardscaping-landing-content.ts`](../../lib/site/drainage-hardscaping-landing-content.ts), [`.cursor/rules/design-system.mdc`](../../.cursor/rules/design-system.mdc).

## 1. Copy mapping (pass)

- Hero H1, sub, CTAs, breadcrumb labels: `DRAINAGE_HERO` + `drainageHeroPhoneCta()`.
- Trust bar four cells: `DRAINAGE_TRUST_BAR`.
- Intro visible three sentences + expand + inline CTA: `DRAINAGE_INTRO_*`.
- Six service cards: `DRAINAGE_SERVICE_CARDS` (anchor `href`s match Section D ids).
- Long sections E–N and final CTA: keyed constants in landing content module; FAQ eight Q&As match Section M.
- **Exceptions (intentional):**
  - Related services **hrefs** use live registry slugs (`/services/hauling-site-clearing-logistics/`, `/services/snow-removal/`, `/contact/`) while card titles/body match Part 4.
  - Sub-service links (`foundation-drain-tile-barrie`, etc.) are verbatim marketing paths; pages may 404 until published.
  - Trust / Google block uses placeholder line for embed.
  - Patio tab strip uses short labels (`Interlock`, `Natural Stone`, …) for layout; panel copy is full Section H.

## 2. V7 design-system compliance (pass with notes)

- **Tonal rhythm:** Dark hero + trust strip (documented exception), then light/dark alternation; **§09–§10** dark cluster separated by **4px yellow rail** (`h-1 bg-[color:var(--y)]`).
- **Layers (≥3):** Hero/substrate/scrim/watermark/content; light sections use border seams, motifs, or raster anchors.
- **Tri-tonal type:** Dark bands: white / `text-white/90` / yellow + solid `eyebrow text-white`; light: `text-ink` / muted / yellow accents.
- **Typography:** Section H2/H3 via `font-serif` (Oswald); body `text-[15px] leading-[1.72]`; CTAs `font-label` on `CTAButton` primary; section eyebrows use `.eyebrow` (not `font-label`).
- **Spacing:** `section-major`, `gap-12`, yellow rules, `mt-[60px]` image spacing where specified.
- **Motion:** `ExpandSection` uses `useSyncExternalStore` for `prefers-reduced-motion`; `StickyTabBox` uses `motion-safe:` transitions.
- **A11y:** Tablist/tab/tabpanel roles; FAQ buttons `aria-expanded` / regions; tap targets ≥44px on tabs and FAQ rows.
- **Radius:** No rounded corners on cards/panels per spec (`ServiceCard`, motifs).
- **Notes:** Mid-page CTA uses **CSS diagonal stripe** treatment (low-opacity `repeating-linear-gradient`) as non-raster §4 anchor. Process timeline connector is simplified dashed line on `lg+`.

## 3. SEO

- `generateMetadata` branch for `drainage-hardscaping`: title/description/OG/Twitter/canonical/`en-CA` + `x-default` from `DRAINAGE_LANDING_SEO` + `drainageCanonicalUrl()`.
- Page JSON-LD: `DrainageHardscapingJsonLd` — Service + BreadcrumbList + FAQPage graph; provider references site-wide `#business`.

## 4. Build

- `npm run build` and `npm run lint` pass after implementation.
