# Design system drift workflow (audit → refactor → re-audit)

Reusable three-phase process to catch and fix typography (or other token) drift without rewriting the whole site blindly.

## Phase 1 — Read-only audit (baseline)

**Goal:** Catalogue current treatments and produce a **conflict-only** or **checklist** report before editing.

**Prompt pattern:**

1. Ask for a **read-only typographic (or token) audit**: weights, transforms, tracking, size, line-height by element type.
2. Optionally scope: production routes only, or components under `app/`, `components/`, `lib/`.
3. Deliver **PASS/FAIL checks** or a **numbered checklist** (e.g. H2 weight, H3 tracking, CTA tokens, `<p>` + `font-serif`, eyebrow size overrides, stat tracking, H1 integrity).
4. **No code edits** in this phase.

**Git:** Optionally create an empty or snapshot commit (e.g. `chore: pre typography checkpoint`) on `main` so rollback is easy.

## Phase 2 — Targeted refactor

**Goal:** Apply agreed rules in small, verifiable edits.

**Prompt pattern:**

1. Lock **explicit rules** first (e.g. section H2 `font-bold`, card H3 `tracking-[0.04em]`, CTAs `font-semibold` + `uppercase` + `tracking-[0.12em]` + `text-xs`, body `<p>` → `font-sans` except display metrics).
2. List **files or patterns** to exclude (ThreeAct headline, `hero-v2`, DNA extracted CSS, `delete-when-launching/`, etc.).
3. Implement in batches; run **`npm run build`** (and **`npm run lint`** if policy requires).
4. **Commit + push** intentional paths per project enforcement rules.

## Phase 3 — Post-standardization verification (re-audit)

**Goal:** Prove nothing was missed and nothing regressed.

**Prompt pattern:**

1. **Read-only** grep/search pass with **numbered checks** (same as Phase 1 or narrowed).
2. Report **PASS** or **FAIL** with `FILE → LINE → snippet` for each failure.
3. Summarize: checks passed **n / total**, remaining issues, recommended follow-up (another micro-pass vs complete).

**Example checks (typography):**

- H2: no `font-serif` + `font-semibold` together on section headings (expect `font-bold`).
- H3: card titles use `tracking-[0.04em]` (not `tracking-tight` / `0.02em` / missing).
- CTAs: `cta-primary` / `cta-hero-fill` without `font-bold`; include uppercase + tracking spec.
- `<p>`: no `font-serif` on prose; allowed on display metrics/stats/chips per written rule.
- Eyebrows: no font-size overrides on `.eyebrow` (color OK).
- Stats: large numerals retain negative tracking where specified.
- H1: remain `font-semibold` where page-title pattern applies.

## Aftercare — Lock the rules

When a rule stabilizes, add it to **`.cursor/rules/design-system.mdc`** (or the relevant module) so future sessions **inherit** the decision and drift less.

## Related

- Project rule index: [`AGENTS.md`](../../AGENTS.md)
- Typography / palette truth: [`.cursor/rules/design-system.mdc`](../../.cursor/rules/design-system.mdc)

## Example artifact

After a typography pass, capture a key route for a quick visual regression check. Example (maintenance / coming-soon page): [`maintenance-page-screenshot.png`](./maintenance-page-screenshot.png).

## Condensed label inventory

Barlow `.eyebrow`, `font-label`, and tracking bands (`0.12em` / `0.14em` / `0.18em`): see [`condensed-label-usage-audit.md`](./condensed-label-usage-audit.md).
