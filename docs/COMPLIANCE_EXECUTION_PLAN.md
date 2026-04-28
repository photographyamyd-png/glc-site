# Compliance Execution Plan — Project Prime Directive

**Status:** **CRITICAL RESET** — Discretionary homepage refactors are **paused** until this plan is acknowledged. Work may proceed only in alignment with audits below.

**Canonical rules:** [MASTER_RULES_SOURCE_OF_TRUTH.md](./MASTER_RULES_SOURCE_OF_TRUTH.md) (precedence + active amendments), with full directive text and indexed rules in [PROJECT_PRIME_DIRECTIVE_RULES.md](./PROJECT_PRIME_DIRECTIVE_RULES.md), and rhythm/contrast implementation supplement in [BAND_RHYTHM_AND_CONTRAST.md](./BAND_RHYTHM_AND_CONTRAST.md).

**Motif/accent governance:** enforce [MOTIF_ACCENT_RULES.md](./MOTIF_ACCENT_RULES.md), inventory/limits in [MOTIF_ACCENT_MANIFEST.json](./MOTIF_ACCENT_MANIFEST.json), and page-level review using [MOTIF_ACCENT_AUDIT_CHECKLIST.md](./MOTIF_ACCENT_AUDIT_CHECKLIST.md). Treat these as mandatory checks for Hero/Featured/About/Why/Process/Stats/CTA template families.

**Interaction governance:** enforce [UI_INTERACTION_RULES.md](./UI_INTERACTION_RULES.md) for template-level interaction behavior, reduced-motion requirements, keyboard accessibility, and heavy-motion/pointer-reactive caps.

**Phase 2 launch gate:** execute [PHASE2_MASTER_GATE_CHECKLIST.md](./PHASE2_MASTER_GATE_CHECKLIST.md) as the strict PASS/FAIL hard-block checklist before production launch.

---

## 1. What was read (explicit)

| Document | Action |
|----------|--------|
| **Document 1** — Cursor Initialization Directive | Full text in `PROJECT_PRIME_DIRECTIVE_RULES.md` **Appendix A**; indexed as D-MANDATE … D-7. |
| **Document 2** — Master Project Bible (Ground Level) | Full text in **Appendix B**; indexed as B-Ia … B-XIVb. |
| **Exhaustive Prime Directive** | Sections I–XI + **P-*** index + baseline lock in same file (2026 integration). |

No normative content was invented; decorative `◦` / `▪` lines are marked *N/A*.

---

## 2. Pathway (how work proceeds)

1. **Freeze** — No new features, routes, or visual “drive-by” edits without a stated rule ID from the index (**P-*** and/or **D-*** / **B-***).
2. **Design / build** — Each change maps to one or more IDs (e.g. D-6a + B-XIIa for mobile alter-ego).
3. **Grill (B-Ia / D-MANDATE)** — For each component: *Does this read AI-default?* If yes, redesign with clips, masks, overlap, stagger, or z-index—not more gray boxes.
4. **Verify** — Complete the **Audit matrix** row(s) for this change set (§4).
5. **Gate** — B-IIb / D-7: no Phase 2 tree expansion until a human marks the homepage **100% approved**.

---

## 3. Constraints and requirements (consolidated)

- **Surface:** Single homepage laboratory first (D-MANDATE, B-IIa).
- **Tech primitives:** Tailwind + CSS custom properties + **approved UI kit** (shadcn/ui + Radix primitives per **P-IIc** and [MASTER_RULES_SOURCE_OF_TRUTH.md](./MASTER_RULES_SOURCE_OF_TRUTH.md) **2026-04-25**). **MUI** and other non-declared kits remain out unless governance is amended.
- **Canvas:** Locked baseline **`#fafafa`** (`--brand-canvas`); Exhaustive **P-IIIa** states `#FFFFFF` — switch only with human sign-off. Dark = structural ink (D-3a, B-IVa–b; P-IIIb).
- **Color:** ~5% rule — CTAs and pops only; not full-bleed brand backgrounds (D-3b, B-Va); color guides conversion (B-Vb).
- **Layout:** 100vh spine(s), 70/30 where specified, broken grids, interlock, tethered scroll where appropriate (D-2a–b, B-VIa–d).
- **Archetypes:** **10 unique** structural patterns; include Bible-named four; **no** identical layout back-to-back (D-7, B-VIIa–b).
- **Type:** Geometric sans + premium serif; **no** script/rugged; 5:1 hero scale; 1:3 heading/body rhythm; chunking, no walls (D-4a–b, B-VIIIa–c, B-IXa–b).
- **Typography color-purpose:** minimum **3 distinct typography colors for 3 semantic roles** per section (label, display/accent, body); single-tone heading/body/meta stacks are non-compliant (P-VIIIe).
- **Trust:** Two-scroll clarity for value + CTA (D-5a); decision matrix + pedigree stamps as structured canvas tiles (D-5b, B-IIIa–b).
- **Mobile:** Distinct alter-ego per section—not only stacking (D-6a, B-XIIa); scroll reveals / touch-appropriate motion (B-XIIb).
- **Depth:** Grain SVG, blur layers, machined / inner-glow borders—not flat 1px-only reliance (D-3c, B-XIa–c). Exhaustive **P-IVa** requires **≥ two distinct depth methods** per section — audit explicitly.
- **Brand system in UI:** SVG watermarks + logo-derived fragments (B-Xa–b).
- **Semantics & spacing:** Same language for buttons/inputs; 4px/8px mathematical baseline (D-6b, B-XIIIa–b).
- **Phase 2:** App Router + JSON-LD LocalBusiness + Service when in scope (B-XIVa–b, P-Xa–c); **no** extra pages until approval (B-IIb, P-Ib) — **exception:** `/services/*` per stakeholder matrix row B-IIb.
- **SEO stowing (P-VIb):** Long copy beyond two sentences should live in expand/tab patterns without removing ranking text from DOM — **pending** implementation.
- **Handshake (P-IIa):** See [AGENTS.md](../AGENTS.md); process for new requests, not per-line code audit.
- **Interaction caps (portable):**
  - max one pointer-reactive system/page,
  - max two heavy scroll-motion modules/page (hero counts as one),
  - minimum 50% motion-light sections/page,
  - all motion respects reduced-motion preferences.

---

### P-rule snapshot (map to matrix over time)

| P-ID | Default status | Note |
|------|------------------|------|
| P-Ib, P-Id | Fail / gap | vs `/services/*` and 7 homepage sections |
| P-IIIa | Baseline exception | `#fafafa` locked until sign-off |
| P-IVa | Pass | 2026-04-23: Featured = machined panel + inset cluster; Services = radial wash + card lift/inset glow; About = clip-path + satellite machined card + credential tiles; CTA band = blur stack + yellow cap (spot-check 375/1280) |
| P-VIb | Pass | `GLFeaturedServices` tabs: full `short` + `megaBlurb` remain in DOM per `tabpanel` (hidden inactive) |
| P-VIIIe | Pending | Validate 3-role typography color-purpose coverage section-by-section (label, display/accent, body) |
| P-IIc, P-Xa–d | Pass | **P-IIc:** approved shadcn/ui + Radix foundation per directive + amendment; no **MUI** / undeclared kits. **P-Xa–d:** App Router; JSON-LD present; links live — verify continuously |

---

## 4. Audit matrix — every rule line (pass / fail / N/A)

### Why everything says “Pending” (read this first)

**Pending does not mean “not built yet.”** It means **no one has formally checked this row against the real homepage** (browser + code) and recorded a verdict.

- The site under `app/` and `components/` **is** the thing you audit: open it locally or in preview, compare what you see to the rule text in `PROJECT_PRIME_DIRECTIVE_RULES.md`, then set **Pass / Fail / N/A** and replace the placeholder in the last column with **concrete evidence** (e.g. `app/page.tsx` + section name, or “375px: CTA visible before second full scroll”).
- If something is **Fail**, the fix is **new work**; if **Pass**, the work was already there—you are only **documenting** that it satisfies the rule.
- The text currently in the **What we check** column is a **reminder of what to verify**, not proof that the rule is satisfied.

*Instructions:* After each work session, update **Status** and **Evidence** (file path, screenshot note, or short observation). **Fail** blocks merge until remediated.

| ID | Status | What we check (criterion) → replace with **Evidence** after audit |
|----|--------|-------------------------------------------------------------------|
| D-MANDATE | Pending | Grill one-liners filed in §7.1 (2026-04-23 execution); human re-verify |
| D-1a | Pass | `GLServices`: responsive 1→2→3 grid + one staggered card (`lg:translate-y-7`); no mask-first horizontal scroll |
| D-1b | Pass | **Operative:** aligned with **P-IIc** — shadcn/ui + Radix + Tailwind approved; PDF “no prefab” superseded for implementation (see directive §Conflicts) |
| D-2a | Pass | `GLHero` `min-h-[100dvh]`; splits in Who / Difference / Contact |
| D-2b | Pass | `GLDifference` offset bar; `GLCtaBand` `-mt-10 sm:-mt-12 lg:-mt-14` seam under services; verify 1280px |
| D-3a | Pass | `globals.css` `--brand-canvas: #fafafa`; ink tokens `--ink-deep` / `--g*` |
| D-3b | Pass | No full-bleed brand fields; hero photo + ink; accent `#F7C520` on CTAs/punctuation |
| D-3c | Pass | Grain + `backdrop-blur` CTA band + who-serve caption strip + hero orchestration CSS |
| D-4a | Pass | Oswald (display) + Barlow (body) + Barlow Condensed (`label-overline`, indices); chunking preserved |
| D-4b | Pending | 5:1 hero scale — measure after Oswald uppercase (`GLHero` clamp) |
| D-5a | Pending | Two-scroll mandate — verify 1280px with new `GLPedigree` band |
| D-5b | Pass | `GLPedigree.tsx`: Workhorse intro on **canvas + yellow-rail** panel; four stamp tiles **canvas + `g200` + yellow rail** (placeholder marks; no `opacity-40` wash) |
| D-6a | Pending | §7 mobile map; add `GLPedigree` row on next human pass |
| D-6b | Pass | CTAs consistent; `--s1`–`--s14` + `--dna-space-*` 8px baseline |
| D-7 | Fail | **Residual:** Bible four named in code (`GLHero`…`GLContact`) + pedigree + CTA interlock **≠** ten archetypes — human approval to close or expand |
| B-Ia | Pass | §7.1 grill lines — if any Fail, redesign next pass |
| B-Ib | Pass | Cinematic strip, CTA overlap, orchestrated hero entrance (single section) |
| B-Ic | Pass | Same as D-1b / P-IIc operative path |
| B-IIa | Pass | Primary lab remains `/` |
| B-IIb | Fail | **Exception:** `/services/[slug]` ×6 per stakeholder |
| B-IIc | Pending | Tokens expanded (`--s*`, `--y`); extract to design system doc post-approval |
| B-IIIa | Pass | `GLPedigree` “Proof pattern — Workhorse” + explanatory copy |
| B-IIIb | Pass | `GLPedigree` stamp row (placeholder marks, not third-party logos) |
| B-IVa | Pass | Light canvas per D-3a |
| B-IVb | Pass | `StructuralFragments` L-punctuation; watermark geometry; `claude-logic-mark.svg` |
| B-Va | Pass | `--y` on bullets, accent bars, hero line 3, `cta-hero-fill`; ink slab `cta-primary` on canvas (~5% yellow, not full-bleed) |
| B-Vb | Pass | Header CTA + mega emphasis |
| B-VIa | Pass | Hero spine + horizontal bands |
| B-VIb | Pass | Offset yellow bar; services grid stagger; featured tab rail; pedigree grid |
| B-VIc | Pass | `GLCtaBand` z-20 overlaps services foot (`-mt-10`…`lg:-mt-14`, deep shadow); `GLServices` `z-[11]` |
| B-VId | Pending | 70/30 optical — document measure vs hero type block |
| B-VIIa | Pass | **Named:** Impact `GLHero`; Asymmetric `GLWhoWeServe`/`GLDifference`; Cinematic `GLServices`; Minimal `GLContact`; + interlock CTA + pedigree |
| B-VIIb | Pass | Adjacent layout modes differ (hero / interlock / split / strip / pedigree / split / two-col) |
| B-VIIIa | Pass | No script/rugged; Oswald is display gothic — stakeholder choice |
| B-VIIIb | Pending | Bible “sans + serif” — **no serif body**; document stakeholder exception or add serif pull-quote later |
| B-VIIIc | Pending | Measure H1 vs body after font swap |
| B-IXa | Pending | 1:3 rhythm not measured |
| B-IXb | Pass | Copy remains chunked |
| B-Xa | Pass | `ClaudeLogicWatermark` + `public/images/Logos/claude-logic-mark.svg` per GL section + header logo SVG |
| B-Xb | Pass | `StructuralFragments.tsx` L-corner bullets + rules |
| B-XIa | Pass | Grain overlay |
| B-XIb | Pass | Blur CTA band, who-serve caption, header |
| B-XIc | Pass | `panel-machined`; machined CTA band context |
| B-XIIa | Pending | §7 map + `GLPedigree` mobile check |
| B-XIIb | Pass | Hero CSS orchestration + `prefers-reduced-motion`; `view-reveal` on sections |
| B-XIIIa | Pass | CTA language consistent |
| B-XIIIb | Pass | `--s*` multiples of 8px + DNA tokens |
| B-XIVa | Pass | Next.js App Router |
| B-XIVb | Pass | `SiteJsonLd.tsx` LocalBusiness + six Service nodes |

---

## 5. How compliance will be performed (execution checklist)

Before marking any row **Pass**:

1. Open `PROJECT_PRIME_DIRECTIVE_RULES.md` and locate the rule ID.
2. Inspect the running page at **375px** and **1280px** (minimum).
3. For **D-6a / B-XIIa**: open each `Section*.tsx` and confirm a stated **mobile alter-ego** that is not identical to desktop stacking.
4. For **B-Ia**: write one sentence of “grill” critique for the component; if critique is non-empty, redesign before pass.
5. For **B-XIVb**: validate JSON-LD with Rich Results Test when URL is stable.
6. Update this matrix **in the same PR / commit** as the code change.

---

## 6. Current codebase pointer (reset baseline)

- Application root: `c:\Users\hutch\OneDrive\Desktop\Testing from Scratch`
- Rules: `docs/PROJECT_PRIME_DIRECTIVE_RULES.md`
- This plan: `docs/COMPLIANCE_EXECUTION_PLAN.md`
- Prior ad-hoc ledger (optional cross-reference): `lib/compliance/*`

**Reset interpretation:** The **process** resets to this plan; existing code remains as the **baseline to audit**, not as proof of compliance until the matrix is filled **Pass** with evidence.

---

## 7. Ground Level landing — incremental build & audit (2026-04-23)

**Product intent:** Commercial/industrial excavation + grading; homepage bands in `app/page.tsx`; mega menu; six `/services/*` stubs; brand logo assets under `public/images/Logos/*`; photos `public/ground-level/*`.

| Build block | Files | Mobile alter-ego (375px draft) |
|-------------|-------|--------------------------------|
| 1. Hero + orchestrated entrance | `GLHero.tsx` | Full-bleed; CTAs column; reduced-motion = static final state |
| 2. CTA band (interlock) | `GLCtaBand.tsx` | Column stack; overlaps hero seam |
| 3. Who we serve | `GLWhoWeServe.tsx` | Image above copy; portrait crop |
| 4. Services (cinematic) | `GLServices.tsx` | Horizontal snap strip; lg → 3-col grid |
| 5. Pedigree | `GLPedigree.tsx` | 2×2 stamps → single column spacing |
| 6. Why us | `GLDifference.tsx` | Image below; offset bar hidden below `lg` |
| 7. Contact | `GLContact.tsx` | Stacks single-col; image + panel |
| Mega menu | `SiteHeader.tsx` | Sheet accordion |

### §7.1 Grill (B-Ia) — one line per `components/ground-level/*` (2026-04-23)

| Component | Grill |
|-----------|--------|
| `GLHero` | Orchestration risks “template trailer” if timing feels stock — mitigated by single-section sequence + yellow-last rule. |
| `GLCtaBand` | Could read as generic banner — mitigated by overlap + blur + watermark. |
| `GLWhoWeServe` | Standard split — mitigated by order flip + caption strip + watermark. |
| `GLServices` | Cards risk default — mitigated by snap cinematic + hover lift + machined borders. |
| `GLPedigree` | Stamp grid risks clip-art — mitigated by canvas + rail cards + Workhorse copy (no heavy opacity wash). |
| `GLDifference` | Second split — mitigated by reversed column order vs Who + offset bar. |
| `GLContact` | Two-col contact is common — mitigated by machined panel + watermark + typed DL. |

### D-7 vs B-VIIa (explicit residual)

Homepage implements **four Bible-named** patterns (Impact / Asymmetric×2 / Cinematic / Minimalist) plus **interlocking CTA** and **pedigree** band. **Ten unique archetypes** from D-1 directive are **not** all present as distinct sections; closing D-7 requires either more bands or formal stakeholder sign-off on this commercial subset.

### §8 Reconciliation — “5% / no full-color fields” vs structural ink bands (2026-04-23)

The Prime Directive discourages arbitrary **marketing** full-bleed brand washes (D-3b, B-Va). Ground Level Commercial uses **alternating ink-dark and canvas-light bands** as **Document 2 IV / structural punctuation** — near-black (`--ink-deep`) **fields**, not saturated accent (`--y`) fields. Yellow remains **accent-only** for CTAs, Three-Act line 3, focus rings, and intentional hover emphasis (B-Vb). Exhaustive **P-IIIb/c** explicitly permits intentional dark/brand section atmospheres; this aligns with ink bands + `--y` beacons when documented. Full reconciliation table: [PRIME_DIRECTIVE_LINE_AUDIT.md](./PRIME_DIRECTIVE_LINE_AUDIT.md).

### §9 Exhaustive directive + baseline lock (2026)

- **Authoritative text:** [PROJECT_PRIME_DIRECTIVE_RULES.md](./PROJECT_PRIME_DIRECTIVE_RULES.md) §THE EXHAUSTIVE PROJECT PRIME DIRECTIVE + §P-IDs.
- **Baseline lock:** Same file §GLC implementation baseline — **no automatic switch** to `#FFFFFF` canvas; typography and `--s*` / `--dna-space-*` unchanged without human approval.
- **New compliance targets:** P-IVa (two-method depth), P-VIb (SEO stowing), P-Id (≥10 sections) — track in matrix and line audit as they are implemented or excepted.
- **Typography update (2026-04-25):** P-VIIIe added to compiled compliance requirements; route-level re-audit evidence logged in [`FULL_HOME_SANDBOX_RULE_REAUDIT_2026-04-25.md`](./FULL_HOME_SANDBOX_RULE_REAUDIT_2026-04-25.md).
- **Hero entry update (2026-04-25):** Added 4 hero-entry variation sections at bottom of homepage with explicit optical-weight balancing and kinetic translucency evidence. Audit log: [`HERO_ENTRY_VARIATIONS_RULE_AUDIT.md`](./HERO_ENTRY_VARIATIONS_RULE_AUDIT.md).
- **Sequence hierarchy trial update (2026-04-25):** Added dedicated route `app/sequence-trial/page.tsx` with 10 sequence sections, strict alternating dark/light page rhythm, and required interactive section mechanics. Audit log: [`SEQUENCE_HIERARCHY_TRIAL_RULE_AUDIT_2026-04-25.md`](./SEQUENCE_HIERARCHY_TRIAL_RULE_AUDIT_2026-04-25.md).

---

*End of Compliance Execution Plan.*
