# Legacy-Inclusive Forensic Homepage Audit

**Date:** 2026-04-30  
**Audit mode:** Legacy-inclusive (all listed governance docs treated as binding).  
**Scope:** Homepage and shared chrome/components, rule-family complete, second/third/fourth-pass intrusive audit.

---

## Binding Authority Set

- `docs/BAND_RHYTHM_AND_CONTRAST.md`
- `docs/MASTER_DESIGN_BUILD_COMPLIANCE.md`
- `docs/MASTER_RULES_SOURCE_OF_TRUTH.md`
- `docs/MOTIF_ACCENT_RULES.md`
- `docs/UI_INTERACTION_RULES.md`
- `docs/UI_KIT_BOUNDARIES.md`
- `AGENTS.md`
- `GLC_GLOBAL_DESIGN_SYSTEM.md`
- `GLC_MASTER_RULES.md`

---

## Audit Targets

- `app/page.tsx`
- `components/home/HomeHeroSection.tsx`
- `components/home/HomeStatsBand.tsx`
- `components/ui/SiteHeader.tsx`
- `components/ui/SiteFooter.tsx`
- `components/ground-level/GLTestimonialsFeature.tsx`
- `lib/site/copy.ts`
- `app/globals.css`
- `app/sandbox/page.tsx` and reusable `components/ground-level/*` references
- `public/images/services/Drainage-and-Hardscaping`
- `public/images/services/Foundations`
- `public/images/services/Grading`
- `public/images/services/Hauling`
- `public/images/services/Snow Removal`
- `public/images/services/Snow Removal/Videos`

---

## Pass Method

1. **Pass 2 (omission/delta):** canonical + legacy coverage completeness and governance drift.
2. **Pass 3:** typography/contrast/rhythm/archetype and 3-axis enforcement.
3. **Pass 4:** depth/motif/interaction/UI-kit/token/media utilization.

No code remediation performed in this audit step.

---

## Page-Level Violations

| Severity | Rule family | Finding | Evidence |
| --- | --- | --- | --- |
| Critical | C1/C3 + 3-axis | Repeated anti-flat centered grid composition across major sections; insufficient X/Y/Z friction. | `app/page.tsx` sections `#services`, `#positioning`, `#coverage`, `#cta-band` use centered max-width cards with minimal bleed/interlock. |
| High | D5 / archetype mechanics | Adjacent section physics are overly similar even when roots change; structural contrast is weak. | `app/page.tsx` mid-stack relies on repeated panel/grid mechanics vs stronger differentiated `GL*` archetypes. |
| High | Part 5.6 / end interlock | Final conversion band to footer is not treated as interlocking architectural footer mechanic. | `#cta-band` inset light card followed by flat `SiteFooter` grid. |
| High | Token lock / UI kit boundaries | Token drift in globals conflicts with canonical lock assumptions. | `app/globals.css` charcoal alias and yellow-tint definitions conflict with strict legacy-inclusive interpretation. |
| High | SEO/structured data | Homepage-level structured schema evidence not present in audited homepage layer. | No JSON-LD service/local-business block in `app/page.tsx`. |
| Medium | IA contract | Canonical anchor coverage drift (`#about` absent on homepage sequence). | `app/page.tsx` lacks `#about`; nav/IA still assumes broader canonical lane. |
| Medium | Media proof parity | Homepage visual proof is excavation-heavy while multiple service media libraries remain mostly unused. | Hero image references excavation; no direct homepage use of Foundations/Grading/Hauling/Snow directories. |
| Medium | Motif expression | Motif system under-expressed relative to approved pattern library references. | Production sections omit most motif-governed primitives used in stronger `GL*` shells. |

---

## Section-By-Section Violation Matrix

| Section | Disposition | Primary rule failures | Why it fails |
| --- | --- | --- | --- |
| `HomeHeroSection` | Partial pass | Minor token-discipline risk | Structurally layered and strongest section, but overall page context still violates surrounding architecture/rhythm expectations. |
| `#services` | Fail (High) | C1/C3, 3-axis gate | Flat grid in centered container; insufficient bleed, stagger, and Z-layer intersection. |
| `#positioning` | Fail (High) | C1/C3, anti-flat | Single bordered panel without strong multi-plane composition. |
| `HomeStatsBand` | Fail (Medium) | 3-axis (X), C4 depth intent | Partial Y/Z stagger exists, but X-axis break and compositional friction remain weak. |
| `#process` | Fail (High) | C1/C3, depth mechanics | Uniform dark card grid lacks stronger figure-ground/multi-layer hierarchy expected by rule set. |
| `#coverage` | Fail (High) | C1/C3, anti-flat | Centered card + list pattern; minimal compositional depth and overlap mechanics. |
| `#testimonials` | Fail (High) | C1/C3, rhythm-in-section dark stacking concern | Dark-on-dark card repetition without enough tonal/structural differentiation. |
| `marquee-band` separator | Pass | D2 separator | Valid approved separator use. |
| `#cta-band` | Fail (Medium) | Part 5.6 interlocking footer expectation | Reads as isolated inset card rather than architectural interlock to footer foundation. |
| `SiteHeader` | Partial pass | Token strictness | Conversion persistence improved, but inline color treatment and strict token governance are not fully canonical-clean. |
| `SiteFooter` | Fail (Medium) | Anti-flat closeout / floating-silo intent | Footer remains conventional flat grid rather than interlocked architectural terminal section. |

---

## Part 15 Checklist Failure Summary (Binary)

| Checklist family | Status | Audit note |
| --- | --- | --- |
| Architecture C1/C2/C3/C4 | Fail | Multiple homepage sections do not satisfy enforced anti-flat and multi-layer mechanics. |
| Rhythm D1-D5 | Partial fail | D1 separator added, but D5/mechanical contrast remains weak in legacy-inclusive strict reading. |
| Typography triad/registers | Mostly pass | Section-level triad generally present; not primary blocker. |
| Contrast/component-level | Partial fail | Several dark card stacks rely on repetitive treatment with limited hierarchy separation. |
| Interaction invariants | Mostly pass | Drawer lock and basic nav interaction patterns present; no major blocker found. |
| Motif governance | Partial fail | Motif usage minimal and not clearly governed where expected by stricter design language. |
| Copy/SEO architecture | Partial fail | Structured data and some canonical IA/anchor contract expectations unresolved. |
| Conversion/link integrity | Partial fail | Core links work, but service-media proof parity and deep-lane surfacing remain under-realized. |
| UI kit/token compliance | Fail | Global token mappings and tint strategy conflict under strict legacy-inclusive interpretation. |

---

## Media Utilization Forensic Findings

| Severity | Finding | Evidence |
| --- | --- | --- |
| High | Service media directories listed for Foundations/Grading/Hauling/Snow are not materially surfaced on homepage sections. | Homepage references hero excavation image; no equivalent section-level media mapping for other primary services. |
| Medium | Snow video assets are available but not used in homepage proof narrative. | `public/images/services/Snow Removal/Videos` populated, no homepage video integration. |
| Medium | Asset naming consistency risk can cause poor selection and maintainability drift. | Mixed naming conventions in large service media folders. |

---

## Sandbox/Approved Reference Comparison

`app/sandbox/page.tsx` and `components/ground-level/*` expose stronger approved patterns than current production homepage implementation, especially:

- `GLHero`
- `GLFeaturedServices`
- `GLDifference`
- `GLProcess`
- `GLServiceAreas`
- `GLTestimonials`
- `GLCtaBand`
- `GLMarqueeBand`

Current production page does not sufficiently inherit these approved structural mechanics; this is a major compliance gap driver.

---

## Global Verdict

- **Launch gate status:** **FAIL**
- **Blocker count:** **8 primary blockers**

### Ordered blocker list

1. Anti-flat / 3-axis failures across multiple major sections (`app/page.tsx`).
2. Weak archetype/mechanics differentiation under strict D5 interpretation.
3. Missing interlocking final CTA-to-footer architecture.
4. Token governance drift in `app/globals.css`.
5. Missing homepage schema evidence in strict compliance reading.
6. Service-media proof mismatch across primary service categories.
7. Incomplete canonical anchor/IA contract alignment.
8. Motif governance under-expression relative to approved system patterns.

---

## Immediate Next Step (Before Corrections)

Use this report as the remediation checklist baseline, then execute corrections in blocker order using approved `GL*` section shells/mechanics from sandbox-ground-level references to restore full compliance under legacy-inclusive rules.

