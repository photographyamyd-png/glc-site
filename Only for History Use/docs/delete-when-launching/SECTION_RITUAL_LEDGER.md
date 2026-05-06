# Section ritual ledger (preserve-first + reject list)

**Purpose:** Record what each homepage section **means for the master** before anything is removed from `/`, from the repo, or from written rules. Stakeholder confirms **Preserve** and **Reject** rows per slice.

**Process:** One section at a time. After you edit the **Reject** table for a slice, note `action`: `slash-only` | `remove-code` | `relax-rule` (which doc) | `move-to-labs`.

---

## 1 — Hero (`GLHero`)

**Status:** In progress — first reject captured (typography size rule).

### What this section means for the master (draft — from code)

- **Role:** Full-bleed first impression: photo field + graded scrim + optional yellow radial wash; copy and CTAs sit in a **frosted editorial slab** over the image; primary story is **three-act headline** (Oswald stack) + lede + stat line + service coverage + shortcut chips + two CTAs; optional **inline hero marquee** (duplicated phrases) when `showMarquee` is true (Lane A default).
- **Canonical implementation:** [`components/ground-level/GLHero.tsx`](components/ground-level/GLHero.tsx). Default content: [`lib/ground-level/homepage-copy.ts`](lib/ground-level/homepage-copy.ts) (`HERO`, `MARQUEE_PHRASES`). Anchor: `id="top"` (default), `hero-heading` on the headline component.
- **Design references (structure):** Align with [`docs/design-references/`](design-references/README.md) hero / full-bleed notes where applicable (structure intent, not subject matter).

### Hero inventory (record all parts so nothing is omitted)

| Layer/part | What it contains now | Source of truth |
|-----------|-----------------------|-----------------|
| Section root | `#top`, `hero-stage`, `band-dark-field`, `min-h-[100dvh]` full viewport hero | [`GLHero.tsx`](components/ground-level/GLHero.tsx) |
| Background media plane | Full-bleed `Image` (`/ground-level/hero-primary.jpg` default) | [`GLHero.tsx`](components/ground-level/GLHero.tsx) |
| Contrast overlays | 1) dark linear gradient 2) subtle yellow radial wash | [`GLHero.tsx`](components/ground-level/GLHero.tsx), `--y` in [`app/globals.css`](app/globals.css) |
| Brand mark | `ClaudeLogicWatermark` bottom-right | [`GLHero.tsx`](components/ground-level/GLHero.tsx), [`ClaudeLogicWatermark.tsx`](components/ui/ClaudeLogicWatermark.tsx) |
| Copy slab | Bordered + blurred editorial panel (`border-white/10`, translucent dark background, drop shadow) | [`GLHero.tsx`](components/ground-level/GLHero.tsx) |
| Eyebrow label | `p.hero-eyebrow label-overline-on-dark` | [`GLHero.tsx`](components/ground-level/GLHero.tsx), label classes in [`app/globals.css`](app/globals.css) |
| Main headline | `ThreeActHeadline` with three lines (`From / Concept / To Creation`) | [`ThreeActHeadline.tsx`](components/ui/ThreeActHeadline.tsx), copy in [`homepage-copy.ts`](lib/ground-level/homepage-copy.ts) |
| Supporting lede | One paragraph of positioning copy | [`homepage-copy.ts`](lib/ground-level/homepage-copy.ts) (`HERO.lede`) |
| Emphasis rule | Thin yellow horizontal rule below lede | [`GLHero.tsx`](components/ground-level/GLHero.tsx) |
| Stats row | Two stat items from `HERO.stats` | [`homepage-copy.ts`](lib/ground-level/homepage-copy.ts) |
| Coverage micro-label | `SERVICE COVERAGE — ...` row in small uppercase label style | [`homepage-copy.ts`](lib/ground-level/homepage-copy.ts) (`serviceCoverageLabel`) |
| Service chips | Either linked `serviceShortcuts` or static `serviceBarLabels` chips | [`GLHero.tsx`](components/ground-level/GLHero.tsx), [`homepage-copy.ts`](lib/ground-level/homepage-copy.ts) |
| CTA row | Primary filled CTA + secondary outline CTA | [`GLHero.tsx`](components/ground-level/GLHero.tsx), button classes in [`app/globals.css`](app/globals.css) |
| Optional inline marquee | `showMarquee` gated lower strip with duplicated `MARQUEE_PHRASES` | [`GLHero.tsx`](components/ground-level/GLHero.tsx), [`homepage-copy.ts`](lib/ground-level/homepage-copy.ts) |

### Hero rule capture (document database entry)

| Rule area | Current rule to keep unless rejected | Rule source |
|----------|--------------------------------------|------------|
| Palette lock | Hero uses locked ink/canvas/yellow system (`--y`, dark field, white/ink contrasts) | [`AGENTS.md`](AGENTS.md), [`PROJECT_PRIME_DIRECTIVE_RULES.md`](docs/PROJECT_PRIME_DIRECTIVE_RULES.md) |
| Typography stack | Display/headline + body + label register split (ThreeAct + lede + labels) | [`AGENTS.md`](AGENTS.md), [`app/globals.css`](app/globals.css) |
| Composition minimum | At least three layers: field + overlays + slab + watermark + CTA strip | [`AGENTS.md`](AGENTS.md) |
| Band rhythm role | Hero is a dark opener, followed by approved separator (`GLMarqueeBand`) | [`BAND_RHYTHM_AND_CONTRAST.md`](docs/BAND_RHYTHM_AND_CONTRAST.md), [`app/page.tsx`](app/page.tsx) |
| Copy authority | Homepage hero strings come from canonical `HERO` object (not ad hoc edits in component) | [`homepage-copy.ts`](lib/ground-level/homepage-copy.ts) |
| Anchor ownership | `#top` is hero-owned anchor in Lane A | [`GLHero.tsx`](components/ground-level/GLHero.tsx) |

**Pending accepted change for this section:** small-label baseline increase to `13px` project-wide (`font-label text-[10px]` scope).

### Preserve (you confirm / edit)

_Drafted from current build — replace or strike as you wish._

1. **Full-bleed hero** with `min-h-[100dvh]`, primary image, and **layered scrim** (linear + subtle radial with `--y`) so type stays legible without flattening the photo.
2. **Three-act headline** (`ThreeActHeadline`) + eyebrow + lede + **yellow rule** + **two stat lines** + coverage label + **service shortcut chips** (or bar labels) + **primary / secondary CTA** styling (`cta-hero-fill`, `cta-outline-light`).
3. **`ClaudeLogicWatermark`** bottom-right on the hero field.

### Reject

| Item | Why I dislike it | Action |
|------|------------------|--------|
| Increase `font-label text-[10px]` to `13px` project-wide (includes Hero eyebrow + Hero service coverage label) | Current small-label typography feels undersized in Hero and weakens hierarchy legibility at this scale. | `relax-rule` — update typography baseline in system/rules docs, then implement token/class migration project-wide |

**Ideas you might reject** (only if you mean it): inline hero marquee vs global `GLMarqueeBand` only; `backdrop-blur` on the copy slab; glass chips; `100dvh` height; watermark presence or opacity.

---

## 2 — Marquee systems (`hero-marquee` + `GLMarqueeBand`)

**Status:** Keep all parts (user-confirmed).

### Section inventory

| Layer/part | What it contains now | Source of truth |
|-----------|-----------------------|-----------------|
| Hero-inline marquee | Optional ticker inside Hero slab footer (`showMarquee` gated) with duplicated phrase track | [`GLHero.tsx`](components/ground-level/GLHero.tsx) |
| Global marquee band | Standalone yellow trust ticker (`div.marquee-band`) immediately after Hero | [`GLMarqueeBand.tsx`](components/glc-sections/GLMarqueeBand.tsx) |
| Item/separator pattern | Phrase text + inline separator mark, duplicated list for continuous loop | [`GLMarqueeBand.tsx`](components/glc-sections/GLMarqueeBand.tsx), `GLHero` inline track |
| Phrase source | Canonical phrase lists for both lanes | [`lib/glc/marquee-items.ts`](lib/glc/marquee-items.ts), [`homepage-copy.ts`](lib/ground-level/homepage-copy.ts) |

### Rule capture

| Rule area | Current rule to keep unless rejected | Rule source |
|----------|--------------------------------------|------------|
| Rhythm separator | Marquee is an approved dark/light separator in inter-section rhythm | [`docs/BAND_RHYTHM_AND_CONTRAST.md`](docs/BAND_RHYTHM_AND_CONTRAST.md) |
| Accent role | Uses locked yellow system (`--y`) as motion punctuation, not as full content field replacement | [`AGENTS.md`](AGENTS.md), [`app/globals.css`](app/globals.css) |
| Accessibility intent | Decorative marquee is `aria-hidden` (non-semantic movement layer) | [`GLMarqueeBand.tsx`](components/glc-sections/GLMarqueeBand.tsx), [`GLHero.tsx`](components/ground-level/GLHero.tsx) |

### Reject

| Item | Why | Action |
|------|-----|--------|
| _(none)_ | | |

---

## 3 — Featured services (`GLFeaturedServices`)

**Status:** Keep all parts (user-confirmed).

### Section inventory

| Layer/part | What it contains now | Source of truth |
|-----------|-----------------------|-----------------|
| Section shell | `#what-we-do`, `band-light`, gradient field, watermark | [`GLFeaturedServices.tsx`](components/ground-level/GLFeaturedServices.tsx) |
| Header stack | Eyebrow, split-tone H2 (`toneSplit` on `/`), intro paragraph | [`GLFeaturedServices.tsx`](components/ground-level/GLFeaturedServices.tsx), [`homepage-copy.ts`](lib/ground-level/homepage-copy.ts) |
| Interactive rail | Keyboard-accessible tablist (`Arrow`/`Home`/`End` behavior) with selected-state inversion | [`GLFeaturedServices.tsx`](components/ground-level/GLFeaturedServices.tsx) |
| Detail panel | Selected service headline + short + mega blurb + deep-link CTA | [`GLFeaturedServices.tsx`](components/ground-level/GLFeaturedServices.tsx), [`lib/ground-level/services.ts`](lib/ground-level/services.ts) |
| Section CTA | Bottom `cta-primary` to contact flow | [`GLFeaturedServices.tsx`](components/ground-level/GLFeaturedServices.tsx) |

### Rule capture

| Rule area | Current rule to keep unless rejected | Rule source |
|----------|--------------------------------------|------------|
| Multi-register type | Eyebrow + display + muted body + action row | [`AGENTS.md`](AGENTS.md) |
| Structural depth | Field + machined panel + interactive rail layers | [`AGENTS.md`](AGENTS.md), [`docs/PROJECT_PRIME_DIRECTIVE_RULES.md`](docs/PROJECT_PRIME_DIRECTIVE_RULES.md) |
| Accessibility | Tab semantics and keyboard traversal preserved | [`GLFeaturedServices.tsx`](components/ground-level/GLFeaturedServices.tsx) |

### Reject

| Item | Why | Action |
|------|-----|--------|
| _(none)_ | | |

---

## 4 — Difference (`GLDifference`)

**Status:** Keep all parts (user-confirmed).

### Section inventory

| Layer/part | What it contains now | Source of truth |
|-----------|-----------------------|-----------------|
| Section shell | `#difference`, `band-light`, radial accent + watermark | [`GLDifference.tsx`](components/ground-level/GLDifference.tsx) |
| Media column | Clipped equipment image, side rail, shadow depth, chip overlay | [`GLDifference.tsx`](components/ground-level/GLDifference.tsx) |
| Copy column | Eyebrow, accent-key H2, body panel, reasons list, CTA | [`GLDifference.tsx`](components/ground-level/GLDifference.tsx), [`homepage-copy.ts`](lib/ground-level/homepage-copy.ts) |
| Reason rows | Supports string and structured rows (`index/title/body`) | [`GLDifference.tsx`](components/ground-level/GLDifference.tsx) |

### Rule capture

| Rule area | Current rule to keep unless rejected | Rule source |
|----------|--------------------------------------|------------|
| Composition minimum | Field + media figure + copy system + CTA = 3+ layers | [`AGENTS.md`](AGENTS.md) |
| Accent handling | Key phrase split with `--y` emphasis only on fragment | [`GLDifference.tsx`](components/ground-level/GLDifference.tsx), [`app/globals.css`](app/globals.css) |
| Band rhythm | Light section used as separator between dark blocks | [`docs/BAND_RHYTHM_AND_CONTRAST.md`](docs/BAND_RHYTHM_AND_CONTRAST.md) |

### Reject

| Item | Why | Action |
|------|-----|--------|
| _(none)_ | | |

---

## 5 — Service layout lab C (`ServiceLayoutLabC`)

**Status:** Keep all parts in lab context (user-confirmed).

### Section inventory

| Layer/part | What it contains now | Source of truth |
|-----------|-----------------------|-----------------|
| Section shell | `#service-layout-lab-c`, `band-light`, review-lab heading | [`ServiceLayoutLabC.tsx`](components/ground-level/service-layout-lab/ServiceLayoutLabC.tsx) |
| Anchor tile | Large dark featured card with image, gradient veil, numbered label, title, short | [`ServiceLayoutLabC.tsx`](components/ground-level/service-layout-lab/ServiceLayoutLabC.tsx) |
| Satellite grid | Five bordered canvas satellites with image + compact copy | [`ServiceLayoutLabC.tsx`](components/ground-level/service-layout-lab/ServiceLayoutLabC.tsx) |
| Data wiring | Uses six service items from lab dataset and links to `/services/[slug]` | [`ServiceLayoutLabC.tsx`](components/ground-level/service-layout-lab/ServiceLayoutLabC.tsx), [`service-layout-lab-data.ts`](lib/ground-level/service-layout-lab-data.ts) |

### Rule capture

| Rule area | Current rule to keep unless rejected | Rule source |
|----------|--------------------------------------|------------|
| Lab status | Layout labs are non-production comparison artifacts | [`docs/BAND_RHYTHM_AND_CONTRAST.md`](docs/BAND_RHYTHM_AND_CONTRAST.md), [`GLServiceLayoutLab.tsx`](components/ground-level/GLServiceLayoutLab.tsx) |
| Typography split | Heading accent fragment uses `--y` on subtitle fragment | [`ServiceLayoutLabC.tsx`](components/ground-level/service-layout-lab/ServiceLayoutLabC.tsx) |

### Reject

| Item | Why | Action |
|------|-----|--------|
| _(none)_ | | |

---

## 6 — Lane B + copy-lab sections clicked (keep as recorded references)

**Status:** Keep all clicked parts for now (user-confirmed).

### Inventory snapshots

| Clicked part | Current implementation source |
|-------------|-------------------------------|
| Lane B featured accordion (`section.container`) | [`featured-accordion.tsx`](components/glc-dna/sections/featured-accordion.tsx) |
| Lane B services (`#glc-dna-services`) | [`services-grid-section.tsx`](components/glc-dna/sections/services-grid-section.tsx) |
| Lane B why header (`#why .why3__header`) | [`why-section.tsx`](components/glc-dna/sections/why-section.tsx) |
| Lane B process split panels (`proc3__left-panel`, `proc3__steps-panel`) | [`process-section.tsx`](components/glc-dna/sections/process-section.tsx) |
| Copy-lab hero wrapper (`#copy-lab-hero`) | [`GLHero.tsx`](components/ground-level/GLHero.tsx) via [`GLHomeCopyLab.tsx`](components/ground-level/home-copy-lab/GLHomeCopyLab.tsx) |
| Copy-lab featured (`#copy-lab-featured`) | [`CopyLabFeatured.tsx`](components/ground-level/home-copy-lab/CopyLabFeatured.tsx) |
| Copy-lab why (`#copy-lab-why`) | [`GLDifference.tsx`](components/ground-level/GLDifference.tsx) via [`GLHomeCopyLab.tsx`](components/ground-level/home-copy-lab/GLHomeCopyLab.tsx) |

### Rule capture (for these clicked blocks)

| Rule area | Current rule to keep unless rejected | Rule source |
|----------|--------------------------------------|------------|
| Lane B namespace | `glc-dna-*` ids remain namespaced to avoid Lane A collisions | [`docs/BAND_RHYTHM_AND_CONTRAST.md`](docs/BAND_RHYTHM_AND_CONTRAST.md), `components/glc-dna/*` |
| Lab coexistence | Lane B / copy-lab may coexist during decision phase; production status decided later | [`docs/DNA_MERGE_PREP.md`](docs/DNA_MERGE_PREP.md), [`app/page.tsx`](app/page.tsx) |

### Reject

| Item | Why | Action |
|------|-----|--------|
| _(none)_ | | |

---

## Home review candidate library (new build batch)

**Status:** Candidate-only (not approved by default).

- Route context: appended at bottom of [`app/page.tsx`](app/page.tsx) via `HomeReviewCandidates`.
- Component source: [`components/ground-level/home-review-candidates/HomeReviewCandidates.tsx`](components/ground-level/home-review-candidates/HomeReviewCandidates.tsx).
- Contains 9 requested section types, each as Light + Dark variant (18 total) for audit/reject/promote decisions.
- Decision policy: these remain brainstorming artifacts until explicitly promoted to `/sandbox` or canonized in production sections.

### Correction log — candidate quality failure and rule hardening

- **Issue observed:** first-pass candidate batch violated key constraints (insufficient 3-layer composition in multiple sections, weak typography alternation, and tone-incorrect pairings including white-on-light surfaces in some compositions).
- **Process correction:** candidate generator now follows the hard pre-flight checks in [`docs/BAND_RHYTHM_AND_CONTRAST.md`](docs/BAND_RHYTHM_AND_CONTRAST.md) under **Candidate build guardrails (mandatory pre-flight)**.
- **Action taken:** refactored candidate components in [`HomeReviewCandidates.tsx`](components/ground-level/home-review-candidates/HomeReviewCandidates.tsx) to enforce layered structure, tone-aware internal panels, and stronger visual counterbalance.

---

## Later sections (queue)

Scroll order on Lane A for future rows: Featured services → Services → CTA band → Who we serve → Difference → Process → Service areas → Testimonials (+ labs) → Pedigree → Contact. Copy-lab and Lane B are separate optional rows when you scope them.

---

## 7 — Full homepage rule-line audit + immediate fix pass (2026-04-25)

**Scope locked:** all sections currently rendered by [`app/page.tsx`](app/page.tsx).

### Ordered inventory audited

1. `GLServices`
2. `GLCtaBand`
3. `GLWhoWeServe`
4. `GLProcess`
5. `GLServiceAreas` (`surface="light"`)
6. `GLTestimonials`
7. `GLTestimonialsVariantLab` (`TESTIMONIAL_PREVIEW_VARIANTS` mapped set)
8. `GLPedigree`
9. `GLContact`
10. Service layout wrapper + `ServiceLayoutLabA/B/D/E/F`
11. `HomeReviewCandidates`
12. `TaggedSectionVariationSet`
13. `NewReviewComponentsSet`

### Rule lines used (per section check)

- `AGENTS.md`: baseline lock, 3-layer minimum, multiple type registers, non-flat composition.
- [`docs/BAND_RHYTHM_AND_CONTRAST.md`](docs/BAND_RHYTHM_AND_CONTRAST.md): inter-section rhythm, candidate guardrails (layers, contrast, tone-aware internals, asymmetry).
- [`docs/PROJECT_PRIME_DIRECTIVE_RULES.md`](docs/PROJECT_PRIME_DIRECTIVE_RULES.md): P-IIIb, P-IVa/b, P-Va/b, P-VIIIa, P-Xb, P-XIa.

### Section-by-section verdict + correction

| Section | Verdict | Violations found | Correction applied | Post-fix |
|--------|---------|------------------|--------------------|----------|
| `GLServices` | Pass | None critical (register + layering intact) | None | Pass |
| `GLCtaBand` | Pass | None critical | None | Pass |
| `GLWhoWeServe` | Borderline | Adjacent dark-root rhythm risk before `GLProcess` | Inserted light separator between `GLWhoWeServe` and `GLProcess` in [`app/page.tsx`](app/page.tsx) | Pass |
| `GLProcess` | Borderline | String step path had weak register separation (index + body only) | Added explicit step title register for string-mode cards in [`components/ground-level/GLProcess.tsx`](components/ground-level/GLProcess.tsx) | Pass |
| `GLServiceAreas` | Pass | None critical | None | Pass |
| `GLTestimonials` | Fail (production intent) | Main section rendered full variant gallery (lab-style behavior) instead of one production figure | Replaced gallery map with single production variant rendering (`DEFAULT_BLOCK_VARIANT`) in [`components/ground-level/GLTestimonials.tsx`](components/ground-level/GLTestimonials.tsx) | Pass |
| `GLTestimonialsVariantLab` mapped set | Pass (lab context) | Dark stacking accepted under lab exception | None | Pass |
| `GLPedigree` | Pass | None critical | None | Pass |
| `GLContact` | Pass | None critical | None | Pass |
| `ServiceLayoutLabA` | Borderline (lab quality) | Copy registers too flat between short + mega blurb | Reduced secondary paragraph emphasis + added compact meta chip in [`ServiceLayoutLabA.tsx`](components/ground-level/service-layout-lab/ServiceLayoutLabA.tsx) | Pass |
| `ServiceLayoutLabB` | Pass (lab exception) | Adjacent dark with D only in lab block | None | Pass |
| `ServiceLayoutLabD` | Borderline (lab quality) | Third layer/accent plane too weak | Added persistent accent rail layer in [`ServiceLayoutLabD.tsx`](components/ground-level/service-layout-lab/ServiceLayoutLabD.tsx) | Pass |
| `ServiceLayoutLabE` | Pass | None critical | None | Pass |
| `ServiceLayoutLabF` | Pass | None critical | None | Pass |
| `HomeReviewCandidates` | Fail (tone-aware internals) | Multiple dark variants reused light canvas CTA/content slabs | Added tone-aware conditional panel treatment for affected sections (service-landing, parallax CTA slab, cinematic CTA panel) in [`HomeReviewCandidates.tsx`](components/ground-level/home-review-candidates/HomeReviewCandidates.tsx) | Pass |
| `TaggedSectionVariationSet` | Pass | Hero resemblance now intentionally strong; tone/layer checks pass | None this pass | Pass |
| `NewReviewComponentsSet` | Pass | No blocking violations after prior refactor | None this pass | Pass |

### Verification evidence

- `npm run lint` — pass
- `npm run build` — pass

### Remaining risk (non-blocking)

- Review/lab blocks still prioritize exploration density over final production rhythm; this is acceptable while they remain candidate-only.

---

## Changelog

| Date | Section | Note |
|------|---------|------|
| 2026-04-24 | Hero | Ledger created; draft Preserve from codebase. |
| 2026-04-24 | Hero | Reject captured: global small-label baseline `10px -> 13px` (`font-label text-[10px]` scope project-wide). |
| 2026-04-24 | Marquee / Featured / Difference / Layout Lab C / Lane B clicked set | Full inventory + rule-capture entries added; all marked keep unless explicitly rejected later. |
| 2026-04-25 | Home review candidates | Added candidate-only note for new 18-section Light/Dark library appended to home for audit. |
| 2026-04-25 | Full homepage audit | Completed one-by-one rule-line audit for all sections currently on `app/page.tsx`; applied immediate fixes and re-verified lint/build. |
| 2026-04-25 | Rule codification | Added explicit typography color-purpose minimum (3 distinct color roles) to canonical rule docs and compliance plan for future audits. |
| 2026-04-25 | Full home+sandbox re-audit | Published exhaustive plain-text report with updated rule set and typography color-purpose verdicts: [`docs/FULL_HOME_SANDBOX_RULE_REAUDIT_2026-04-25.md`](docs/FULL_HOME_SANDBOX_RULE_REAUDIT_2026-04-25.md). |
| 2026-04-25 | Hero/entry build block | Added bottom-of-homepage hero entry variation block with labeled divider and dedicated ruleline evidence: [`docs/HERO_ENTRY_VARIATIONS_RULE_AUDIT.md`](docs/HERO_ENTRY_VARIATIONS_RULE_AUDIT.md). |
| 2026-04-25 | Sequence hierarchy trial route | Added dedicated trial route with 10 sequence sections using strict dark/light page rhythm and interactive behaviors. Audit evidence: [`docs/SEQUENCE_HIERARCHY_TRIAL_RULE_AUDIT_2026-04-25.md`](docs/SEQUENCE_HIERARCHY_TRIAL_RULE_AUDIT_2026-04-25.md). |
