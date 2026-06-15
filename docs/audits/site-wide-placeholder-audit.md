# Site-wide placeholder copy audit (33 production routes)

**Method:** Three-gate check (source of truth → placeholder signals → exclusions).  
**Scope:** All URLs in `app/sitemap.ts`. Excludes `/sandbox/`, `/sequence-trial/`, `/maintenance/`.  
**Bracket tokens (`[YEAR]`, `[Rating]`, `[Count]`):** Documented only — no copy or env-behavior changes in this pass.  
**Homepage baseline:** Commit `6b258de` (prior pass). Site-wide fixes in working tree (uncommitted pending approval).

**Status key:** `pass` = re-audit clean for fixable items · `flag-only` = intentional bracket/env tokens · `n/a` = no findings

---

## Summary

| Batch | Routes | Re-audit |
|-------|--------|----------|
| 0 — Homepage | 1 | pass |
| 1 — Services index | 1 | pass |
| 2 — Core marketing / legal | 4 | pass |
| 3–7 — Primary service lines | 6 | pass |
| 8 — Foundations hub + subs | 9 | pass |
| 9 — Snow sub-services | 8 | pass |
| 10 — Locations | 5 | pass |
| **Total** | **33** | **pass** |

**Shared tooling:** `SERVICE_PAGE_CHROME`, `SERVICE_CARD_LINK_LABEL`, `FOUNDATIONS_PAGE_CHROME` in content modules; `lib/site/copy-hygiene-extended.test.ts` scans production templates + app pages.

---

## Per-route findings

| Route | Template / page | Copy sources | Findings (P0/P1/P2) | Actions | Re-audit |
|-------|-----------------|--------------|---------------------|---------|----------|
| `/` | `GLHomeCopyLab` | `home-copy-lab-content.ts` | P0: georeferenced slider disclaimer; P1: hardcoded FAQ/CTA/card labels | Removed disclaimer; centralized labels (commit `6b258de`) | pass |
| `/services/` | `app/services/page.tsx`, `GLFeaturedServicesBento` | `CORE_COPY.servicesIndex`, `SERVICE_CARD_LINK_LABEL` | P1: hardcoded breadcrumb, H1, grid CTA; card link drift | Wired hero + bento to `CORE_COPY` / `SERVICE_CARD_LINK_LABEL` | pass |
| `/about/` | `MarketingPageShell` | `CORE_COPY.about` | P1: hardcoded section headings | Wired `operatingPrincipleHeading`, `credentialsHeading` | pass |
| `/contact/` | `MarketingPageShell` | `CORE_COPY.contact` | P1: hardcoded form heading, helper, submit label | Wired form chrome to `CORE_COPY.contact` | pass |
| `/privacy/` | `LegalPageTemplate` | `CORE_COPY.privacy` | P1: inline section arrays in page TSX | Moved sections to `CORE_COPY.privacy.sections` | pass |
| `/terms/` | `LegalPageTemplate` | `CORE_COPY.terms` | P1: inline section arrays in page TSX | Moved sections to `CORE_COPY.terms.sections` | pass |
| `/services/site-preparation-grading/` | `GradingConversionLane`, grading page | `SERVICE_DETAILS` (`proofCaption`) | P0: georeferenced survey disclaimer in visible caption | Rewrote `proofCaption` to marketing copy | pass |
| `/services/drainage-hardscaping/` | `DrainageHardscapingPage` | `drainage-hardscaping-landing-content.ts` | P1: hardcoded `View Service →` on related cards; **flag:** `[YEAR]`, `[Rating]`/`[Count]` | Related cards use `SERVICE_CARD_LINK_LABEL`; bracket tokens unchanged | pass / flag-only |
| `/services/excavation-site-preparation/` | `ExcavationSitePreparationArticle` | `excavation-sandbox-map.ts`, `SERVICE_DETAILS` | P1: hardcoded solution + related eyebrows | Wired `excavationSolutionSectionEyebrow`, `excavationRelatedEyebrow` | pass |
| `/services/hauling-site-clearing-logistics/` | `ServicePageTemplate` | `hauling-glc-dna-map.ts`, `SERVICE_PAGE_CHROME` | P1: template section eyebrows / CTA drift | Template reads `SERVICE_PAGE_CHROME`; slug copy in module | pass |
| `/services/snow-removal/` | `CommercialSnowPage` | `commercial-snow-page-data.ts` | P1: hardcoded coverage, programs, proof, related eyebrows | Wired to `COMMERCIAL_SNOW_*` exports + `COMMERCIAL_SNOW_CREDENTIALS.eyebrow` | pass |
| `/services/foundations-civil-infrastructure/` | `FoundationsCivilInfrastructureHubPage` | `foundations-civil-infrastructure-content.ts` | P1: hero eyebrow, reference library intro, accordion summaries | Wired `FOUNDATIONS_PAGE_CHROME` | pass |
| `/services/foundations-civil-infrastructure/foundation-excavation-backfilling/` | `FoundationsCivilInfrastructureSubPage` | `foundations-civil-infrastructure-content.ts` | P1: duplicate hero eyebrow, scope/next-step labels | Wired `FOUNDATIONS_PAGE_CHROME` | pass |
| `/services/foundations-civil-infrastructure/concrete-footings-walls-pads-grade-beams/` | Sub template | same | same (shared template) | same | pass |
| `/services/foundations-civil-infrastructure/multi-storey-high-rise-foundations/` | Sub template | same | same | same | pass |
| `/services/foundations-civil-infrastructure/subdivision-site-servicing/` | Sub template | same | same | same | pass |
| `/services/foundations-civil-infrastructure/earthworks-mass-excavation/` | Sub template | same | same | same | pass |
| `/services/foundations-civil-infrastructure/commercial-municipal-foundation-work/` | Sub template | same | same | same | pass |
| `/services/foundations-civil-infrastructure/foundation-repair-underpinning/` | Sub template | same | same | same | pass |
| `/services/foundations-civil-infrastructure/structural-engineering-foundation-solutions/` | Sub template | same | same | same | pass |
| `/services/commercial-parking-lot-snow-plowing-barrie/` | `ServicePageTemplate` | `SERVICE_DETAILS`, `SERVICE_PAGE_CHROME` | P1: shared template eyebrows / snow hub CTA | `SERVICE_PAGE_CHROME` | pass |
| `/services/industrial-snow-removal-simcoe-county/` | `ServicePageTemplate` | same | same | same | pass |
| `/services/commercial-ice-management-deicing-simcoe-county/` | `ServicePageTemplate` | same | same | same | pass |
| `/services/247-emergency-snow-removal-barrie/` | `ServicePageTemplate` | same | same | same | pass |
| `/services/commercial-snow-hauling-removal-simcoe-county/` | `ServicePageTemplate` | same | same | same | pass |
| `/services/retail-plaza-snow-removal-barrie/` | `ServicePageTemplate` | same | same | same | pass |
| `/services/property-management-snow-removal-contracts/` | `ServicePageTemplate` | same | same | same | pass |
| `/services/office-building-corporate-campus-snow-removal-barrie/` | `ServicePageTemplate` | same | same | same | pass |
| `/locations/commercial-snow-removal-barrie-ontario/` | `LocationPageTemplate` | `LOCATION_COPY_MODEL` | P1: hardcoded service-area / local-coverage eyebrows | Wired `serviceAreaEyebrow`, `localCoverageEyebrow`, heading pattern | pass |
| `/locations/commercial-snow-removal-orillia-ontario/` | `LocationPageTemplate` | same | same | same | pass |
| `/locations/commercial-snow-removal-innisfil-ontario/` | `LocationPageTemplate` | same | same | same | pass |
| `/locations/commercial-snow-removal-wasaga-beach-ontario/` | `LocationPageTemplate` | same | same | same | pass |
| `/locations/commercial-snow-removal-simcoe-county/` | `LocationPageTemplate` | same | same | same | pass |

---

## Bracket / env tokens (document only)

| Token | Location | Visible on | Action |
|-------|----------|------------|--------|
| `[Rating]`, `[Count]` | `DRAINAGE_TRUST_SIGNALS` → Google Reviewed sub | `/services/drainage-hardscaping/` trust grid | Documented; replaced at runtime when `NEXT_PUBLIC_GOOGLE_REVIEW_*` set |
| `[YEAR]` | `DRAINAGE_FINAL_CTA.finePrint` | Drainage final CTA band | Documented; no change this pass |

---

## Automated guards

- `lib/site/copy-hygiene-extended.test.ts`
  - TODO/TBD/FIXME scan: copy-lab bundle, `CORE_COPY`, `SERVICE_DETAILS`, commercial snow data, foundations SEO
  - Disallowed phrases in `components/ground-level/home-copy-lab/*.tsx`, `components/templates/*.tsx`, production `app/**/page.tsx` (excludes sandbox / maintenance / sequence-trial)
  - Bracket-token inventory test (non-removal assertion)
  - Google review substitution behavior when env is set

---

## Final re-scan (33 routes)

**Date:** 2026-05-27  
**Method:** Grep production paths for disallowed phrases (`georeferenced`, `Slider compares`, `View Service →`, `Client signal`) + test suite.

**Result:** No fixable placeholder hits in production templates or app pages. Bracket tokens remain only in drainage content module (documented above).

**Git:** Changes staged in working tree; commit to `main` pending user approval (per batch deploy cadence in plan).
