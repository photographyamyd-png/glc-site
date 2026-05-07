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
| [`app/globals.css`](app/globals.css) | Global tokens, `font-label`, bands, utilities |

## Hooks

Project hooks (if present): [`.cursor/hooks.json`](.cursor/hooks.json) and [`.cursor/hooks/`](.cursor/hooks/). See [`.cursor/hooks/README.md`](.cursor/hooks/README.md).

## Workspace settings

Editor defaults for this repo: [`.vscode/settings.json`](.vscode/settings.json).
