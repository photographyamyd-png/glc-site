# Condensed label and eyebrow usage audit

**Date:** 2026-05-11  
**Scope:** `app/**/*.tsx`, `components/**/*.tsx`, plus token definitions in `app/globals.css` (and related extracted CSS where `.eyebrow` is referenced). Build artifacts (`.next/`) excluded.  
**Document type:** Read-only inventory and intent map only. It does **not** prescribe or record shipped UI changes; use it to decide whether a follow-up typography pass is warranted.

## Intent recap

| Surface | Mechanism | Role |
|--------|------------|------|
| Utility rail | `.eyebrow` on [`SiteHeader`](../../components/ui/SiteHeader.tsx) | Geography + phone + rotator; dense institutional chrome |
| Section kickers | `.eyebrow` + `text-ink` / `text-white` / accent | Short labels, not body prose |
| Tab / chip chrome | `.eyebrow` on control + inner `tracking-[0.14em]` / `[0.18em]` | Fit labels in narrow hit targets; index-style feel |
| Condensed UI | `font-label` + `text-xs` / `text-[10px]` | Chips, small badges, some CTAs |
| Primary actions | `tracking-[0.12em]` + `font-semibold` + `uppercase` | `cta-primary` / `cta-hero-fill` pattern |

Authoritative rules: [`.cursor/rules/design-system.mdc`](../../.cursor/rules/design-system.mdc), `.eyebrow` definition in [`app/globals.css`](../../app/globals.css).

## Grep inventory (how measured)

Commands equivalent to:

- `eyebrow` word boundary in `*.tsx` under `app/` + `components/` (counts are **per-file** lines containing the token; some files have many occurrences).
- `font-label` in `*.tsx` under repo (condensed family hook).
- `tracking-[0.14em]`, `tracking-[0.18em]`, `tracking-[0.12em]` in `*.tsx` under `components/` + `app/`.

### Approximate scale (TSX)

| Token / pattern | Order of magnitude | Notes |
|-----------------|---------------------|--------|
| `eyebrow` | **~90+** TSX files touch the token (includes `app/` pages, `components/templates`, `components/ground-level`, `components/glc-dna`, labs, review candidates) | Highest churn: `CommercialSnowPage`, `TaggedSectionVariationSet`, `ProcessVerticalFlow`, `GLHero`, `ServicePageTemplate`, `HomeReviewCandidates` |
| `font-label` | **~16** occurrences across **~12** TSX files | `primitives` CTA, `maintenance` CTA row, `CommercialSnowPage`, service layout labs, `GLFeaturedServicesBento`, `GLTestimonialsFeature` |
| `tracking-[0.14em]` | **~22** occurrences across **~19** unique component files | Link affordances, outline CTAs, card “learn more”, **testimonial tab attribution**, labs |
| `tracking-[0.18em]` | **~2** occurrences | **Only** [`GLTestimonials.tsx`](../../components/ground-level/GLTestimonials.tsx) tab “Quote 01” index line |
| `tracking-[0.12em]` | **~80+** occurrences across many files | Primary CTA / header consultation pattern |

### Files using `tracking-[0.14em]` (components)

Use this list as the **label / affordance** audit set:

- [`components/ground-level/GLTestimonials.tsx`](../../components/ground-level/GLTestimonials.tsx)
- [`components/ui/SiteHeader.tsx`](../../components/ui/SiteHeader.tsx)
- [`components/process/ProcessVerticalFlow.tsx`](../../components/process/ProcessVerticalFlow.tsx)
- [`components/ground-level/GLCapabilitiesRail.tsx`](../../components/ground-level/GLCapabilitiesRail.tsx)
- [`components/ground-level/GLFeaturedServices.tsx`](../../components/ground-level/GLFeaturedServices.tsx)
- [`components/ground-level/GLFeaturedServicesBento.tsx`](../../components/ground-level/GLFeaturedServicesBento.tsx)
- [`components/ground-level/GLServices.tsx`](../../components/ground-level/GLServices.tsx)
- [`components/ground-level/GLTestimonialsFeature.tsx`](../../components/ground-level/GLTestimonialsFeature.tsx)
- [`components/templates/CommercialSnowPage.tsx`](../../components/templates/CommercialSnowPage.tsx)
- [`components/ground-level/service-layout-lab/ServiceLayoutLabA.tsx`](../../components/ground-level/service-layout-lab/ServiceLayoutLabA.tsx) through `ServiceLayoutLabF.tsx`
- [`components/ground-level/home-review-candidates/SequenceHierarchyTrialPage.tsx`](../../components/ground-level/home-review-candidates/SequenceHierarchyTrialPage.tsx)

## Bucket matrix (when / why)

| Bucket | Examples | Typography |
|--------|----------|------------|
| **Utility rail** | `SiteHeader` location `<p>`, rotator parent `div.eyebrow` | `.eyebrow` 13px / **600** / 0.07em; rotator child muted color only |
| **Section eyebrow** | `GLCtaBand`, `GLProcess`, FAQ `+` / `−`, template section labels | `.eyebrow` + band-appropriate `text-*`; no arbitrary font-size overrides on `.eyebrow` per design-system lock |
| **Tab / chip** | `GLTestimonials` tab buttons, commercial snow proof tabs | `.eyebrow` on control; optional **tighter** inner tracking for index lines |
| **Link affordance** | “View service”, underlined yellow links in rails / cards | `text-xs` + **`font-semibold`** + `tracking-[0.14em]` (not always `.eyebrow`) |
| **Outline CTA** | `cta-outline-light` in `ProcessVerticalFlow` | `text-xs` + **`font-semibold`** + `tracking-[0.14em]` |
| **Primary CTA** | `cta-primary`, `cta-hero-fill` | `text-xs` + `font-semibold` + `uppercase` + `tracking-[0.12em]` |

## Outliers and readability (observations only)

1. **[`GLTestimonials.tsx`](../../components/ground-level/GLTestimonials.tsx) tab panel** — Long **attribution** strings sit inside `.eyebrow` tab buttons, so they inherit **uppercase + Barlow Condensed 13px + 600**; the inner span adds **`tracking-[0.14em]`**, which reads wider than the utility rail’s base **0.07em**. That stack trades **scan density** for **sentence readability** on long names. **Possible follow-ups (if you approve a later change):** render attribution in **`font-sans`** with **`normal-case`** on a second line while keeping the “Quote 01” line in eyebrow; or slightly larger tab label size; or shorten copy at source.

2. **Labs / review candidates** — High count of `eyebrow` usage; acceptable for sandbox routes; not production-nav critical unless linked.

## Post-rollout (2026-05-11)

Shipped default: **`app/globals.css`** sets **`.eyebrow`**, **`.label-overline`**, and **`.label-overline-on-dark`** to **`font-weight: 600`**. Affordance rows use **`font-semibold`** with **`tracking-[0.14em]`**; tiny **`font-label`** chips use **`font-semibold`** where previously **`font-bold`**. **`GLTestimonials`** no longer stacks **`font-extrabold`** on `.eyebrow`. DNA lane **`.eyebrow`** in **`app/glc-dna-extracted.css`** was aligned to **600** (from 800) with scoped CSS regenerated via **`npm run scope:glc-dna`**. Sandbox reference: [`app/sandbox/eyebrow-weight-preview/page.tsx`](../../app/sandbox/eyebrow-weight-preview/page.tsx) (single-column “live” strip; no scoped 700 vs 600 comparison).

## Related docs

- [Design system drift workflow](./design-system-drift-workflow.md)
- [Design system rules](../../.cursor/rules/design-system.mdc)
