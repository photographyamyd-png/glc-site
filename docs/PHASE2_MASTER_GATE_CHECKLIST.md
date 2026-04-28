# Phase 2 Master Gate Checklist

Single launch gate for Phase 2 productionization.  
All checks are binary and enforced as hard blocks.

## Gate metadata

- Release ID:
- Environment:
- Reviewer:
- Date:
- Route scope reviewed:
  - `/`
  - `/services`
  - `/services/[slug]`
  - additional routes:

## Hard-block rule

- Any failed item in this file blocks launch.
- Conditional pass is not allowed for this gate.
- If checks overlap across docs, apply the strictest threshold.

## Section owner map (dedupe contract)

Each requirement appears once under one owner section.

- **MOTIF:** motif limits, asset validity, geometry/motif context
- **INTERACTION:** motion intensity, reduced-motion, pointer-reactive caps
- **TEMPLATE:** required behavior presence by template group
- **ACCESSIBILITY:** keyboard, semantics, interaction independence
- **CONVERSION:** CTA action readiness and non-blocking behavior
- **VERDICT:** final pass/fail closure

## 1) MOTIF block (owner: MOTIF)

### 1.1 Family and overlay caps

- [ ] Accent family count `<= 3` per page
- [ ] Ghost system count `<= 2` per page
- [ ] Pointer-reactive motif system count `<= 1` per page
- [ ] Clean section ratio `>= 0.50` per page
- [ ] Dominant diagonal motif systems `<= 1` per page
- [ ] Side vertical label systems `<= 2` per page

### 1.2 Context correctness

- [ ] Numeric ghost motifs appear only in Why/Process/Stats contexts
- [ ] `ab3__wm` appears only in About/Brand contexts
- [ ] Adjacent duplicate oversized ghost motifs are avoided
- [ ] Truck corner density in repeated clusters `<= 0.60`
- [ ] Truck watermark opacity `<= 0.12`

### 1.3 Asset and library integrity

- [ ] Canonical motif assets under `/images/Accents-and-Motifs/*` resolve correctly
- [ ] Additive motif assets under `/motifs/*` resolve correctly (26-file set)
- [ ] Hero ghost logo asset resolves at `/images/Logos/ground-level-logo.png`
- [ ] `components/motifs/GlcMotifs.tsx` exists and is importable
- [ ] `components/motifs/TruckGeometryUiKit.tsx` exists and is importable
- [ ] Primitive geometry motif placements include `data-motif-id` where rendered

## 2) INTERACTION block (owner: INTERACTION)

### 2.1 Global interaction limits

- [ ] Heavy scroll-motion module count `<= 2` per page (hero counts as one)
- [ ] Pointer-reactive interaction system count `<= 1` per page
- [ ] Motion-light section ratio `>= 0.50` per page
- [ ] Adjacent high-attention modules are not stacked

### 2.2 Reduced-motion and touch safety

- [ ] All animation systems honor reduced-motion preferences
- [ ] Hover-only behavior is non-critical on touch devices
- [ ] Essential meaning is preserved when motion is disabled

### 2.3 Navigation interaction integrity

- [ ] Hash anchor scrolling applies sticky-header offset
- [ ] Anchor navigation remains keyboard operable
- [ ] Header nav allows only one active surface at once (mega OR drawer)
- [ ] Mobile drawer behavior preserves predictable expand/collapse logic

## 3) TEMPLATE block (owner: TEMPLATE)

### 3.1 Home template required behaviors

- [ ] Hero parallax/reveal behavior is present and restrained
- [ ] Marquee behavior is present with pause-on-hover and reduced-motion fallback
- [ ] Featured accordion behaves as a single flagship interactive section
- [ ] Services reveal pattern remains scanable and link-safe
- [ ] Stats count-up remains readable with and without animation
- [ ] CTA section interactions remain decorative-layer safe and action-first

### 3.2 Services/detail template required behaviors

- [ ] Services index remains link-first and not over-animated
- [ ] Service page shell uses shared interaction primitives consistently
- [ ] Scope-strip anchors map to real IDs and offset correctly
- [ ] Sticky capability nav remains usable across breakpoints
- [ ] FAQ uses semantic disclosure behavior and predictable open/close

### 3.3 Optional/special modules

- [ ] Parallax type band used at most once per page where present
- [ ] Snow pointer-follow glow (if present) is the only pointer-reactive system on page

## 4) ACCESSIBILITY block (owner: ACCESSIBILITY)

- [ ] Essential content is accessible without interaction
- [ ] Native semantics are used where appropriate (`button`, `a`, `details/summary`)
- [ ] Keyboard focus is visible for all interactive controls
- [ ] Action controls remain reachable and operable via keyboard
- [ ] Decorative motif layers are non-blocking and do not intercept essential interactions

## 5) CONVERSION block (owner: CONVERSION)

- [ ] Primary CTA path is visible without interaction dependency
- [ ] Phone action is directly accessible and valid
- [ ] Email action is directly accessible and valid
- [ ] CTA decorative layers do not block tap/click/focus on actionable controls
- [ ] Conversion-critical actions remain available in reduced-motion mode

## 6) Evidence log

- Route tested:
- Viewports tested (minimum required): `375px`, `1280px`
- Reduced-motion tested:
- Keyboard navigation tested:
- Touch behavior tested:
- Notes:

## 7) Final verdict (owner: VERDICT)

- [ ] PASS (all checks passed)
- [ ] FAIL (one or more checks failed; launch blocked)

If FAIL:

- Blocking findings:
- Required remediation:
- Re-test date:
- Re-test owner:

---

### Canonical references

- `docs/MASTER_RULES_SOURCE_OF_TRUTH.md`
- `docs/MOTIF_ACCENT_RULES.md`
- `docs/MOTIF_ACCENT_MANIFEST.json`
- `docs/MOTIF_ACCENT_AUDIT_CHECKLIST.md`
- `docs/UI_INTERACTION_RULES.md`
- `docs/COMPLIANCE_EXECUTION_PLAN.md`
