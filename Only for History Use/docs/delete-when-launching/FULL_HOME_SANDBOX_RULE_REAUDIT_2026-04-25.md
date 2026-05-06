# Full Homepage + Sandbox Rule Re-Audit (2026-04-25)

This is a read-first, plain-text ruleline report for all sections on:

- `app/page.tsx`
- `app/sandbox/page.tsx`

It uses the compiled rules from:

- `AGENTS.md`
- `docs/BAND_RHYTHM_AND_CONTRAST.md`
- `docs/PROJECT_PRIME_DIRECTIVE_RULES.md`
- `docs/COMPLIANCE_EXECUTION_PLAN.md`

## Compiled checklist used

### Global governance + system rules (applies to all sections)

- `P-Ia`, `P-Ib`, `P-Ic`, `P-Id`
- `P-IIa`, `P-IIb`, `P-IIc`
- `P-Xa`, `P-Xc`, `P-XIa`, `P-XIb`, `P-XIc`

### Section-composition + typography rules (audited per section)

- `A-3LAYER` (AGENTS ground-level minimum)
- `A-REG` (multi-register typography)
- `A-RHYTHM` (band rhythm)
- `B-G1`..`B-G6` (candidate guardrails)
- `P-IIIb`, `P-IIIc`
- `P-IVa`, `P-IVb`
- `P-Va`, `P-Vb`
- `P-VIa`, `P-VIb`, `P-VIc`
- `P-VIIa`, `P-VIIb`, `P-VIIc`
- `P-VIIIa`, `P-VIIIb`, `P-VIIIc`, `P-VIIId`, `P-VIIIe`
- `P-IXa`, `P-IXb`, `P-IXc`
- `P-Xb`, `P-Xd`

### New explicit typography rule now codified

- `P-VIIIe`: minimum 3 distinct typography color uses for 3 semantic roles:
  - label/eyebrow
  - display/headline (accent fragment where pattern expects it)
  - body/supporting copy
  - optional 4th role: stats/meta/chips/CTA text

Hard fails:

- single-tone heading/body/meta stacks
- repeated color use without semantic role distinction
- missing accent fragment where section pattern expects one

## Accepted typography rule (verbatim operative statement)

Accepted and enforced rule text:

1. Every section must present **at least three distinct typography color uses** for **three distinct semantic purposes**.
2. Required role mapping:
   - **Role A:** label/eyebrow
   - **Role B:** display/headline with accent fragment (`--y`) where heading pattern expects it
   - **Role C:** body/supporting copy
3. Optional but preferred:
   - **Role D:** stats/chips/meta/CTA text
4. Hard fail conditions:
   - heading/body/meta rendered as a neutral single-tone stack
   - repeated color use without semantic role distinction
   - missing accent fragment in headings that use accent-key patterns

## Global status snapshot (inherited by all sections)

- `P-Ib` Zero-creation policy: **Fail (global)** due to existing secondary route tree
- `P-Ic` DNA extraction complete: **Fail/Pending (global)**
- `P-Xc` JSON-LD proof for every audited route: **Borderline/Pending evidence**
- `P-IIc` no prefab kits: **Pass (global)**
- `P-Xa` App Router: **Pass (global)**

---

## Inventory audited

### Route `/` (`app/page.tsx`)

1. `GLServices`
2. `GLCtaBand`
3. `GLWhoWeServe`
4. rhythm separator strip
5. `GLProcess`
6. `GLServiceAreas`
7. `GLTestimonials`
8. `GLTestimonialsVariantLab` set
9. `GLPedigree`
10. `GLContact`
11. unresolved lab wrapper intro
12. `ServiceLayoutLabA`
13. `ServiceLayoutLabB`
14. `ServiceLayoutLabD`
15. `ServiceLayoutLabE`
16. `ServiceLayoutLabF`
17. `HomeReviewCandidates`
18. `TaggedSectionVariationSet`
19. `NewReviewComponentsSet`

### Route `/sandbox` (`app/sandbox/page.tsx`)

1. `GLHero`
2. `GLMarqueeBand`
3. `GLFeaturedServices`
4. `GLDifference`
5. `ServiceLayoutLabC`
6. `GLCDnaSandbox`
7. `GLHomeCopyLab`

---

## Section-by-section findings

Legend: `Pass`, `Fail`, `Borderline`, `N/A`

### `/` Route

### 1) `GLServices`

- `A-3LAYER`, `P-IVa`: **Pass** (field + figure/cards + accent architecture)
- `A-REG`, `P-VIIIa`: **Pass** (eyebrow/headline/body/action)
- `P-VIIIe`: **Pass** (label + accent headline fragment + body/meta)
- `A-RHYTHM`: **Pass** in stack context
- `P-Vb`, `P-VIc`: **Borderline** (can push stronger interlock/offset variety)
- `P-Xb`: **Pass** (action paths present)

### 2) `GLCtaBand`

- `A-3LAYER`, `P-IVa`: **Pass**
- `A-REG`, `P-VIIIa`: **Pass**
- `P-VIIIe`: **Pass** (label/headline accent/body/action)
- `P-VIIc`: **Pass** (early CTA clarity)
- `P-Va`: **Pass** (accent used as beacon, not full field)

### 3) `GLWhoWeServe`

- `A-3LAYER`, `P-IVa`: **Pass**
- `A-REG`: **Pass**
- `P-VIIIe`: **Pass**
- `A-RHYTHM`: **Pass** (followed by light separator)
- `P-Vb`: **Borderline** (variety strong but could push deeper interlock)

### 4) Separator strip (`GLWhoWeServe` -> `GLProcess`)

- `A-RHYTHM`: **Pass** (approved tone break)
- All composition/type-specific rules: **N/A**

### 5) `GLProcess`

- `A-3LAYER`, `P-IVa`: **Pass**
- `A-REG`: **Pass** (after step-title improvement)
- `P-VIIIe`: **Borderline** (header block strong; repeated step cards still close in color role separation)
- `P-IXa`: **Borderline** (mobile alter-ego not explicitly distinct)

### 6) `GLServiceAreas`

- `A-3LAYER`: **Pass**
- `A-REG`: **Pass**
- `P-VIIIe`: **Pass** (eyebrow/headline/body/meta)
- `A-RHYTHM`: **Pass** (light bridge between dark sections)

### 7) `GLTestimonials`

- `A-3LAYER`, `P-IVa`: **Pass**
- `A-REG`: **Pass**
- `P-VIIIe`: **Pass** (eyebrow + white/yellow heading + ink-muted intro/body)
- `P-VIIa`, `P-VIIb`: **Borderline** (proof architecture weakened by empty quote bodies)

### 8) `GLTestimonialsVariantLab` set

- `A-3LAYER`: **Pass** (lab shells)
- `A-RHYTHM`: **N/A / lab exception context**
- `P-VIIIe`: **Borderline** (some variant cards compress quote/attribution color distinction)
- `B-G2`: **Borderline** on select variants

### 9) `GLPedigree`

- `A-3LAYER`, `P-IVa`: **Pass**
- `A-REG`: **Pass**
- `P-VIIIe`: **Pass** (eyebrow/headline emphasis/body/meta)
- `P-VIIa`: **Pass** (pedigree intent present)
- `P-VIIb`: **Borderline** (full monochrome/stamp policy evidence still partial)

### 10) `GLContact`

- `A-3LAYER`: **Pass**
- `A-REG`: **Pass**
- `P-VIIIe`: **Pass**
- `P-Xb`: **Pass**

### 11) unresolved-lab wrapper intro block

- `A-3LAYER`: **Borderline** (mostly wrapper prose + border band)
- `A-REG`: **Borderline**
- `P-VIIIe`: **Borderline** (limited role/color variety)

### 12) `ServiceLayoutLabA`

- `A-3LAYER`: **Pass**
- `A-REG`: **Pass**
- `P-VIIIe`: **Pass**
- `B-G4`: **Borderline** (alternating rows still visually safe at scale)

### 13) `ServiceLayoutLabB`

- `A-3LAYER`, `A-REG`, `P-VIIIe`: **Pass**
- `A-RHYTHM`: **N/A / lab exception**

### 14) `ServiceLayoutLabD`

- `A-3LAYER`: **Pass** (after accent rail add)
- `A-REG`: **Pass**
- `P-VIIIe`: **Pass**
- `B-G4`: **Borderline** (dense directory remains structurally constrained)

### 15) `ServiceLayoutLabE`

- `A-3LAYER`, `A-REG`, `P-VIIIe`: **Pass**

### 16) `ServiceLayoutLabF`

- `A-3LAYER`, `A-REG`, `P-VIIIe`: **Pass**

### 17) `HomeReviewCandidates`

- `B-G1`..`B-G3`: **Mixed Pass/Borderline**
- `B-G5` tone-aware internals: **Borderline** (improved, but still inconsistent across full library)
- `B-G4` balance/variety: **Fail/Borderline** (many sections still read structurally safe/repetitive)
- `P-VIIIe`: **Pass/Borderline**
  - **Pass examples:** hero-like candidates with explicit label/headline accent/body/chips
  - **Borderline scope:** long-tail brainstorming blocks still require periodic spot-check for semantic role drift

### 18) `TaggedSectionVariationSet`

- `B-G1`, `B-G2`, `B-G3`: **Pass**
- `B-G4`: **Borderline** (A/B/C variation still shares strong common skeleton in places)
- `B-G5`: **Pass**
- `P-VIIIe`: **Pass** in hero tracks, concept groups, and previously failing families after role-mapping refactor:
  - `review-tagged-copylab-about-var-a/b/c-light|dark`: heading now split base + accent fragment, chip/meta role shifted to distinct accent purpose.
  - `review-tagged-laneb-cta-band-var-a/b/c-light|dark`: heading now split with accent fragment; action slab adds explicit meta role.
  - `review-tagged-laneb-coverage-var-a/b/c-light|dark`: heading split with accent fragment; location chips converted to distinct accent role.
  - `review-tagged-laneb-process-steps-var-a/b/c-light|dark`: retained label/body separation with explicit heading accent split.

### 19) `NewReviewComponentsSet`

- `B-G1`..`B-G3`: **Pass**
- `B-G4`: **Borderline** (several blocks still compositionally safe)
- `P-VIIIe`: **Pass** after refactor:
  - `review-new-mobilization-*` now uses explicit role colors (`label/yellow`, `display split with yellow accent digit`, `muted meta`)
  - `review-new-callout-rail-*` and `review-new-procurement-faq-*` headings now split base + accent fragment, with supporting muted body/meta role

---

### `/sandbox` Route

### 1) `GLHero`

- `A-3LAYER`, `P-IVa`: **Pass**
- `A-REG`: **Pass**
- `P-VIIIe`: **Pass** (label + three-act display/accent + body/meta/chips)
- `P-VIIIb`: **Borderline/Pass** (hero scale strong; strict ratio measurement pending)

### 2) `GLMarqueeBand`

- `A-RHYTHM`: **Pass** (approved separator)
- `P-VIIIe`: **Fail** as standalone typography section (single-purpose ticker text, no role triad)
- `N/A` for many section-content rules due to utility-band nature

### 3) `GLFeaturedServices`

- `A-3LAYER`, `A-REG`, `P-IVa`: **Pass**
- `P-VIIIe`: **Pass** (label + split-tone display + body + CTA/action text)
- `P-VIa/P-VIb`: **Pass** (copy remains chunked and interactive)

### 4) `GLDifference`

- `A-3LAYER`, `A-REG`, `P-IVa`: **Pass**
- `P-VIIIe`: **Pass**
- `P-Va`: **Pass** (accent is purposeful punctuation)

### 5) `ServiceLayoutLabC`

- `A-3LAYER`, `A-REG`, `P-VIIIe`: **Pass**
- `A-RHYTHM`: **N/A / lab artifact**

### 6) `GLCDnaSandbox` (composite)

- Wrapper-level section rules: **Borderline**
- Internal child sections carry most compliance; wrapper itself is not a complete role-triad section
- `P-VIIIe`: **Borderline at wrapper level**

### 7) `GLHomeCopyLab` (composite)

- Wrapper-level section rules: **Borderline**
- Child sections mostly satisfy role-typing; wrapper alone does not
- `P-VIIIe`: **Borderline at wrapper level**

---

## Hard-fail list (current)

1. `P-Ib` global governance fail (secondary routes exist before final approval lock).
2. `P-Ic` global DNA extraction status not completed.
3. `P-Xc` full JSON-LD evidence status not fully documented for this audit pass.
4. `GLMarqueeBand` fails `P-VIIIe` only if treated as a standalone content section; as a utility separator it is evaluated under rhythm rules (`A-RHYTHM`) and treated `N/A` for full role-triad typography.

## Borderline risk list

- Candidate/review wrappers where role-color variation is present technically but weak semantically.
- Proof architecture quality in testimonials while quotes remain empty.
- Composite wrapper sections (`GLCDnaSandbox`, `GLHomeCopyLab`) that delegate compliance to children.
- Utility separator components require explicit `N/A` handling for `P-VIIIe` to avoid false fail classification.
- New hero-entry variation block is separately audited with line-by-line evidence in `docs/HERO_ENTRY_VARIATIONS_RULE_AUDIT.md`.
- Sequence-hierarchy trial route (10 sections, strict dark/light alternation, interactive mechanics) is audited in `docs/SEQUENCE_HIERARCHY_TRIAL_RULE_AUDIT_2026-04-25.md`.

## Plain conclusion

- Production core sections are mostly compliant with the updated typography-color rule.
- Candidate/review libraries remain the largest source of rule breaks, specifically on semantic typography color-role variety and repeated safe structures.
- The new `P-VIIIe` rule now makes those failures explicit and auditable across all rule docs.
