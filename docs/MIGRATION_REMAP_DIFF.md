# Migration remap diff — Phase 3 (Steps 3–6)

**Date:** 2026-04-27  
**Scope:** Reference remapping + Cursor rules per migration plan. **No legacy doc deletions** (Phase 4).

## Status

Phase 3 reference remap **complete** on disk (including items previously blocked in Plan mode).

---

## Applied (Phase 3)

| File | Summary |
|------|---------|
| [`GLC_MASTER_RULES.md`](../GLC_MASTER_RULES.md) | §2.1: removed `UI_KIT_BOUNDARIES` + `GLC-SVG-MOTIF-SYSTEM`; added manifest + path map tier; renumbered. Part 3: icons → lucide/`components.json`; MUI note → Part 3 tables; token paragraph → `app/globals.css` + `package.json`/`components.json`; expansion step 3 → Part 3.1–3.2. Part 7: “kit boundary documentation” → “**Part 3** stack documentation”. Part 8: new amendment **2026-04-27: Section Count Minimum Replaced**. |
| [`GLC_GLOBAL_DESIGN_SYSTEM.md`](../GLC_GLOBAL_DESIGN_SYSTEM.md) | §4.7: 10-section floor → 5-of-6 archetypes + D5 + content-driven count. §8.7: motif pointer → `docs/MOTIF_ACCENT_MANIFEST.json` + `docs/MOTIF_ASSET_PATH_MAPPING.md`. |
| [`docs/MIGRATION_INVENTORY.md`](MIGRATION_INVENTORY.md) | Never-delete list: removed required `GLC-SVG-MOTIF-SYSTEM.md`; motif authority note; phase gate → HALT Phase 4; STOP section updated. |
| [`docs/MIGRATION_RULE_MAP.md`](MIGRATION_RULE_MAP.md) | §B resolved; **P-Id** / **D-7** → **RENAMED** to Part 4.7 + Master amendment; §H marked applied; §J closed blockers; header Phase 3 note. |
| [`AGENTS.md`](../AGENTS.md) | Legacy `docs/MASTER_*`, `PROJECT_PRIME_*`, `BAND_RHYTHM` links → `GLC_MASTER_RULES.md` + `GLC_GLOBAL_DESIGN_SYSTEM.md`; handshake cites §2.2; band rhythm → Global Part 5 + Master Part 4.3; design-references cross-check → Global Parts 3–5, 4.4. |
| [`app/globals.css`](../app/globals.css) | Comments: stagger → Global Part 3/4.4; shadcn block → Master Part 3.3; band rhythm → Global Part 5; bespoke-surface → Global Part 3.2 C2; CTA → Global Part 2.1 + Part 5. |
| [`components/ground-level/GLPedigree.tsx`](../components/ground-level/GLPedigree.tsx) | File header → Global Part 12 + Part 5 (D5). |
| [`components/ui/ClaudeLogicWatermark.tsx`](../components/ui/ClaudeLogicWatermark.tsx) | Docblock → Global Part 8 (M1–M4). |
| [`components/ui/StructuralFragments.tsx`](../components/ui/StructuralFragments.tsx) | File header → Global Part 8 (motif traceability). |
| [`.cursor/rules/friction.mdc`](../.cursor/rules/friction.mdc) | Full rewrite: only GLC Master §2.3 + Global Part 3/7/16; no legacy IDs or `docs/PROJECT_PRIME_*`. |
| [`.cursor/rules/handshake.mdc`](../.cursor/rules/handshake.mdc) | **New:** Master §2.2 + Global Part 15; `alwaysApply: true`. |

---

## Not touched (per your constraints)

- `lib/compliance/master-bible-ledger.ts`, `lib/compliance/index.ts`
- `docs/MOTIF_ACCENT_MANIFEST.json`, `docs/MOTIF_ASSET_PATH_MAPPING.md`, `docs/GLC_SITE_CLONE_MASTER_MAP.md`
- `CLAUDE.md` (still `@AGENTS.md` only — inherits updated agent rules)

---

## HALT

**Phase 4:** await your approval for legacy doc deletion batches.
