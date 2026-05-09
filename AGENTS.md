# GLC Site — agent and contributor index

This file is the **repository-wide** map for AI agents and humans. Authoritative Cursor rules live under **`.cursor/rules/`** (see **[`.cursor/rules/index.mdc`](.cursor/rules/index.mdc)** — `alwaysApply: true`).

## Rule modules (by category)

| File | Category | When it applies |
|------|-----------|-----------------|
| [`index.mdc`](.cursor/rules/index.mdc) | Governance router | Every session (`alwaysApply`) |
| [`glc-modular-enforcement-cloud-safety.mdc`](.cursor/rules/glc-modular-enforcement-cloud-safety.mdc) | Git `main` as source of truth, self-audit, commit/push after significant work | Every session (`alwaysApply`) |
| [`design-system.mdc`](.cursor/rules/design-system.mdc) | Full V7: layout, Z-order, tonal rhythm, mandatory assets, spacing, typography, motion, palette, §8 composition, a11y, service images | Matched globs (see file frontmatter) |
| [`copy-writing.mdc`](.cursor/rules/copy-writing.mdc) | Copy volume, mapping, copy-facing audit | Matched globs |
| [`seo-strategy.mdc`](.cursor/rules/seo-strategy.mdc) | Metadata, technical SEO, DOM / heading integrity | Matched globs |

**Legacy stub:** [`master/MASTER_RULES.md`](master/MASTER_RULES.md) — points here; do not treat as full spec.

**V7 reference TSX (not routed):** [`docs/v7-blueprint/`](docs/v7-blueprint/)

## Key directories

| Path | Purpose |
|------|---------|
| [`app/`](app/) | Next.js App Router pages, layouts, metadata |
| [`components/`](components/) | React UI; templates under `components/templates/` |
| [`lib/site/`](lib/site/) | Registry, `copy.ts`, site constants |
| [`lib/ground-level/`](lib/ground-level/) | Homepage / shared marketing copy modules |
| [`components/seo/`](components/seo/) | JSON-LD and SEO components |
| [`public/images/services/`](public/images/services/) | Service-line photo folders (`Snow Removal`, `Excavation`, …) |
| [`app/globals.css`](app/globals.css) | Global tokens, `eyebrow`, `font-label`, bands, utilities |

## Hooks

Project hooks (if present): [`.cursor/hooks.json`](.cursor/hooks.json) and [`.cursor/hooks/`](.cursor/hooks/). See [`.cursor/hooks/README.md`](.cursor/hooks/README.md).

## Workspace settings

Editor defaults for this repo: [`.vscode/settings.json`](.vscode/settings.json).

---

## Cursor workflow (2026) — rule precedence and drift control

### Precedence (when instructions conflict)

| Priority | Source | Notes |
|:--:|---|---|
| 1 | **`.cursor/rules/*.mdc`** | Project truth for GLC design, copy, SEO, enforcement. |
| 2 | **Legacy `.cursorrules`** (repo root) | **Not present** in this repo; do not reintroduce — it fights modular rules. |
| 3 | **Global** Cursor Settings → Rules for AI | General persona; **must not override** project `.mdc` on tokens, fonts, or SEO structure. |

**Conflict rule:** If global settings and an `.mdc` disagree on stack or brand rules, **the `.mdc` wins.**

### Why `design-system.mdc` is not `alwaysApply: true`

`index.mdc` and `glc-modular-enforcement-cloud-safety.mdc` are **always** loaded. `design-system.mdc` uses **broad globs** (`app/`, `components/`, `lib/`, `public/`, plus common extensions) so it attaches during real code work without injecting the full V7 document into unrelated sessions.

### Global “Rules for AI” (paste in Cursor Settings → General → Rules for AI)

Use this as a **quality gate** alongside project rules:

```text
Before finalizing any file edit or new section build, run an internal Rule Sync Check against `.cursor/rules/`. If the change conflicts with `design-system.mdc`, `copy-writing.mdc`, or `seo-strategy.mdc`, fix the implementation to match project rules before finishing.

### GLC MODULAR ENFORCEMENT & CLOUD SAFETY
- Zero-Loss Sync: Treat GitHub and branch `main` as source of truth. After significant edits, commit and `git push origin main` (stage only intentional paths).
- Modular compliance: Before code or copy, read the relevant `.cursor/rules/` modules. Layouts → `design-system.mdc` (Oswald headings; Barlow / Barlow Condensed per file). Copy volume → `copy-writing.mdc`. Page structure / metadata → `seo-strategy.mdc`. If output violates those modules, halt and regenerate.
```

### Index ghosting / stale context

After large rule refactors: **Cursor Settings → Features → Codebase indexing → Resync** (or rebuild) so the IDE re-reads `.cursor/rules/` and this repo only.

### Legacy instruction files (audit)

| Item | Status |
|------|--------|
| Root `.cursorrules` | **Absent** — keep absent |
| `master/MASTER_RULES.md` | **Stub** — points at `.cursor/rules/`; full V7 is in `design-system.mdc` |
| `Only for History Use/` | Listed in **`.cursorignore`** (folder may be absent locally; pattern reserved) |
| Conflicting `GLC_MASTER_RULES.md` | **Not found** in workspace |
