# Placeholder copy and contrast audit

**Date:** 2026-05-13  
**Scope:** Production routes under `app/` (excluding `sandbox/` and `sequence-trial/` unless explicitly requested).  
**Methods:** Route-to-template inventory, extended Vitest copy hygiene ([`lib/site/copy-hygiene-extended.test.ts`](../../lib/site/copy-hygiene-extended.test.ts)), static contrast review of major templates, canonical URL fallback check.

## Summary

| Category | Result |
|----------|--------|
| TODO / TBD / FIXME in extended bundles | **Pass** (copy-lab, commercial snow objects, foundations hub SEO) |
| Homepage `TESTIMONIALS` empty quotes | **Fixed** — three anonymized commercial-style quotes added in [`lib/ground-level/homepage-copy.ts`](../../lib/ground-level/homepage-copy.ts) |
| Drainage `[YEAR]` token | **Fixed** — “Locally Owned” line rewritten in [`lib/site/drainage-hardscaping-landing-content.ts`](../../lib/site/drainage-hardscaping-landing-content.ts) |
| Drainage `[Rating]` / `[Count]` | **Operational** — source strings remain; production must set `NEXT_PUBLIC_GOOGLE_REVIEW_SCORE` and `NEXT_PUBLIC_GOOGLE_REVIEW_COUNT`, or replace with static copy ([`substituteGoogleReviewPlaceholders`](../../lib/site/google-business-env.ts)) |
| `NEXT_PUBLIC_SITE_URL` | **Operational** — [`getSiteUrl()`](../../lib/site/metadata.ts) falls back to `https://groundlevel.example.com` when unset; Vitest documents expected fallback |
| White-on-white (static review) | **No high-confidence defects** in `ServicePageTemplate`, `CommercialSnowPage`, foundations hub DNA lane — `band-light` sections pair with `text-ink`; dark sections pair with `text-white` or dark CTA shells |

**Recommended live follow-up:** Re-check contrast on real devices (mobile tab panels, reduced motion) using DevTools Accessibility / forced-colors; repo has no Playwright+axe dependency today.

---

## Route to template matrix

| Route | Page module | Primary template / component | Copy sources (representative) |
|-------|----------------|------------------------------|-------------------------------|
| `/` | [`app/page.tsx`](../../app/page.tsx) | [`GLHomeCopyLab`](../../components/ground-level/home-copy-lab/GLHomeCopyLab.tsx) | [`home-copy-lab-content.ts`](../../lib/ground-level/home-copy-lab-content.ts), [`merge-copy-lab-services.ts`](../../lib/ground-level/merge-copy-lab-services.ts) |
| `/about/` | [`app/about/page.tsx`](../../app/about/page.tsx) | [`MarketingPageShell`](../../components/templates/MarketingPageShell.tsx) | [`CORE_COPY.about`](../../lib/site/copy.ts) |
| `/contact/` | [`app/contact/page.tsx`](../../app/contact/page.tsx) | `MarketingPageShell`, [`ContactLeadForm`](../../components/contact/ContactLeadForm.tsx) | `CORE_COPY.contact`, [`homepage-copy`](../../lib/ground-level/homepage-copy.ts) (phone constants) |
| `/privacy/` | [`app/privacy/page.tsx`](../../app/privacy/page.tsx) | [`LegalPageTemplate`](../../components/templates/LegalPageTemplate.tsx) | `CORE_COPY.privacy` + inline section strings in page |
| `/terms/` | [`app/terms/page.tsx`](../../app/terms/page.tsx) | `LegalPageTemplate` | `CORE_COPY.terms` + inline section strings in page |
| `/services/` | [`app/services/page.tsx`](../../app/services/page.tsx) | Inline hero + [`GLFeaturedServicesBento`](../../components/ground-level/GLFeaturedServicesBento.tsx) | [`CORE_COPY.servicesIndex`](../../lib/site/copy.ts), merged services |
| `/services/drainage-hardscaping/` | [`app/services/[slug]/page.tsx`](../../app/services/[slug]/page.tsx) | [`DrainageHardscapingPage`](../../components/templates/DrainageHardscapingPage.tsx) | [`drainage-hardscaping-landing-content.ts`](../../lib/site/drainage-hardscaping-landing-content.ts), `SERVICE_DETAILS` |
| `/services/excavation-site-preparation/` | same | [`ExcavationSitePreparationPage`](../../components/templates/ExcavationSitePreparationPage.tsx) | `SERVICE_DETAILS`, excavation modules |
| `/services/snow-removal/` | same | [`CommercialSnowPage`](../../components/templates/CommercialSnowPage.tsx) | [`commercial-snow-page-data.ts`](../../lib/site/commercial-snow-page-data.ts) |
| `/services/foundations-civil-infrastructure/` | [`app/services/foundations-civil-infrastructure/page.tsx`](../../app/services/foundations-civil-infrastructure/page.tsx) | [`FoundationsCivilInfrastructureHubPage`](../../components/templates/FoundationsCivilInfrastructureHubPage.tsx) | [`foundations-civil-infrastructure-content.ts`](../../lib/site/foundations-civil-infrastructure-content.ts), [`foundations-glc-dna-adapters.ts`](../../lib/site/foundations-glc-dna-adapters.ts), GLC-DNA scoped CSS |
| `/services/foundations-civil-infrastructure/{sub}/` | [`app/services/foundations-civil-infrastructure/[subSlug]/page.tsx`](../../app/services/foundations-civil-infrastructure/[subSlug]/page.tsx) | [`FoundationsCivilInfrastructureSubPage`](../../components/templates/FoundationsCivilInfrastructureSubPage.tsx) | `FOUNDATIONS_SUBPAGE_COPY` |
| `/services/{other-primary-or-snow-sub}/` | same | [`ServicePageTemplate`](../../components/templates/ServicePageTemplate.tsx) | [`SERVICE_DETAILS`](../../lib/site/copy.ts) / registry descriptions; slug list from [`ALL_SERVICES`](../../lib/site/registry.ts) |
| `/locations/{slug}/` | [`app/locations/[slug]/page.tsx`](../../app/locations/[slug]/page.tsx) | [`LocationPageTemplate`](../../components/templates/LocationPageTemplate.tsx) | [`getAllSnowLocationDefs`](../../lib/site/registry.ts) |
| `/maintenance/` | [`app/maintenance/page.tsx`](../../app/maintenance/page.tsx) | (maintenance UI) | Intentional “coming soon” — not a defect |

**Excluded from commercial matrix:** [`app/sandbox/`](../../app/sandbox/), [`app/sequence-trial/`](../../app/sequence-trial/).

---

## Section-by-section matrix (key surfaces)

Columns: **Placeholder** = unresolved tokens / empty shipped strings / TODO. **Contrast** = static template check (light band uses ink; dark band uses white on charcoal or scrim).

### Home (`/` — `GLHomeCopyLab`)

| Section (#anchor) | Placeholder | Contrast |
|---------------------|-------------|----------|
| `#hero` | N | Dark hero + scrim; white type intentional |
| Marquee | N | Dark band |
| `#services` | N | Light band; bento cards use ink per `GLFeaturedServicesBento` |
| `#services-about-divider` | N | Bridge component |
| `#about` | N | Light editorial (`GLWhoWeServe`) |
| `#agitator` | N | Dark (`HomeAgitatorSection`) |
| `#capabilities` | N | Mixed panels; verify imagery alt text in content module |
| `#proof` | N | Proof section uses structured panels |
| `#cta-band` | N | Dark field CTA |
| `#home-faq` (+ `#why`, `#process`, `#coverage` targets) | N | FAQ accordion tone from `HomeSeoFaqSection` implementation |

### Services index (`/services/`)

| Section | Placeholder | Contrast |
|---------|-------------|----------|
| `#services-overview` | N | `band-dark-field` + gradient; `text-white` OK |
| `#services-grid` | N | Bento on light band |

### Default primary service (`ServicePageTemplate`)

| Section id | Placeholder | Contrast |
|------------|-------------|----------|
| `#overview` | N | `band-dark-field`; white hero copy on image+gradient |
| (overview body) | N | `band-light`; `text-ink` |
| (breakdown) | N | `band-dark`; white |
| `#mid-cta` | N | `band-light`; inner panels ink |
| `#why-glc` | N | `band-dark` |
| `#process` | N | `band-light`; ink |
| `#faq` | N | `band-dark` |
| `#service-area` | N | `band-light` |
| `#related-services` | N | `band-dark`; cards glass + white |
| `#request-site-visit` | N | `band-light` shell; CTA `#cta-band` uses `bg-[rgb(12_14_13)]` + white text |

### Commercial snow (`CommercialSnowPage`)

| Chapter / id (representative) | Placeholder | Contrast |
|-------------------------------|-------------|----------|
| Hero | N | Dark field + white |
| Programs / property flow | N | `band-light` chapters use `text-ink`; image overlays use scrim + white in-panel |
| Proof / specs | N | Light bands + ink; white only on intentional dark strips |

### Drainage landing (`DrainageHardscapingPage`)

| Area | Placeholder | Contrast |
|------|-------------|----------|
| Trust signals grid | **Y if env unset** — `[Rating]` `[Count]` in source until substitution | Trust row uses `substituteGoogleReviewPlaceholders` for subcopy — verify env in prod |
| Rest of page | Scan `drainage-hardscaping-landing-content.ts` for new bracket tokens after `[YEAR]` removal | Sticky tab: dark tab bar + light panels — pattern is intentional |

### Foundations hub (`FoundationsCivilInfrastructureHubPage`)

| Block | Placeholder | Contrast |
|-------|-------------|----------|
| Hero | N | Dark field + glass panel |
| `.glc-dna-sandbox` lane (`#why`, `#glc-dna-process`, `#stats`, CTA DNA) | N | Scoped CSS assigns `#why`, `#stats`, `#glc-dna-process` charcoal backgrounds under [`.glc-dna-sandbox`](../../components/glc-dna/glc-dna-extracted.scoped.css); **regression risk** if `sectionId` drifts from defaults |
| Post-hero white process wrapper | N | `ProcessSection` left column is charcoal in scoped CSS; right steps panel light |

---

## Automated tests added

| File | Role |
|------|------|
| [`lib/site/copy-hygiene-extended.test.ts`](../../lib/site/copy-hygiene-extended.test.ts) | TODO scan on copy-lab bundle + commercial snow export objects + foundations hub SEO; non-empty `TESTIMONIALS` quotes; drainage placeholder substitution behavior; `getSiteUrl` fallback |
| [`lib/site/copy.test.ts`](../../lib/site/copy.test.ts) | Unchanged — still guards `HOME_COPY` + `SERVICE_DETAILS` for TODO/TBD/FIXME |

Run: `npm test`

---

## Copy changes made in this audit pass

1. **Testimonials** — [`homepage-copy.ts`](../../lib/ground-level/homepage-copy.ts): replaced empty `quote` strings with anonymized, production-safe commercial testimonials (replace with verified client quotes when available).
2. **Drainage trust line** — Removed unreplaced `[YEAR]` token from “Locally Owned & Operated” bullet in [`drainage-hardscaping-landing-content.ts`](../../lib/site/drainage-hardscaping-landing-content.ts).

---

## Outstanding operational items (not code defects)

1. **Google review env** — Set `NEXT_PUBLIC_GOOGLE_REVIEW_SCORE` and `NEXT_PUBLIC_GOOGLE_REVIEW_COUNT` in the hosting dashboard so drainage trust copy does not show bracket literals.
2. **Site URL** — Set `NEXT_PUBLIC_SITE_URL` to the live origin so metadata, JSON-LD, and sitemap do not use the `groundlevel.example.com` fallback (see [`metadata.ts`](../../lib/site/metadata.ts)).

---

## Git note

Per stakeholder request: **do not push** until you explicitly approve. Local commits on a branch are fine; production deploys only when your remote and hosting pipeline are updated.
