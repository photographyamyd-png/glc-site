# Migration inventory — Phase 1 + Phase 1.5 decisions (updated in Phase 2)

**Generated:** 2026-04-27  
**Task:** Consolidate rule documentation to `GLC_MASTER_RULES.md` + `GLC_GLOBAL_DESIGN_SYSTEM.md` only.  
**Phase 1 status:** Complete. **Phase 1.5 decisions:** Incorporated below (2026-04-27).  
**Phase 2 deliverable:** [`MIGRATION_RULE_MAP.md`](./MIGRATION_RULE_MAP.md) (rule-ID verification + `master-bible-ledger` import audit).

**Never-delete list:** `GLC_MASTER_RULES.md`, `GLC_GLOBAL_DESIGN_SYSTEM.md`, `glc-unified-v2.html`, `README.md`, `package.json`, `package-lock.json`, `tsconfig*.json`, `next.config.*`, `tailwind.config.*`, `postcss.config.*`, `components.json`, and non–`/docs/` code except Phase-3 comment remaps in `/components/` and `/app/`. **Motif authority** is `docs/MOTIF_ACCENT_MANIFEST.json` + `docs/MOTIF_ASSET_PATH_MAPPING.md` (per canonical GLC docs); `GLC-SVG-MOTIF-SYSTEM.md` is **not** required.

**Permanent operational preserves (not “rule docs” — do not delete in migration):**

- `docs/MOTIF_ACCENT_MANIFEST.json`
- `docs/MOTIF_ASSET_PATH_MAPPING.md`
- `docs/GLC_SITE_CLONE_MASTER_MAP.md`

**Phase gate:** Phase 3 Steps 1–6 complete (canonical doc patch + remaps + `MIGRATION_REMAP_DIFF.md`). **HALT for Phase 4** — no legacy file deletions until per-batch approval.

### Phase 1.5 decision log (summary)

| Topic | Decision |
|-------|----------|
| `docs/UI_KIT_BOUNDARIES.md` | **DELETE in Phase 4.** Normative kit content lives in `GLC_MASTER_RULES.md` **Part 3** (§§3.1–3.5). All references **remap** to Part 3. Evidence: `package.json`, `components.json`, `app/globals.css`. |
| `lib/compliance/master-bible-ledger.ts` | **DEFER.** Import graph: **zero TS/TSX importers** → `DEPRECATED-CANDIDATE` in `MIGRATION_RULE_MAP.md`. No code changes without explicit approval. |
| `.cursorrules` | **Do not create.** Use `.cursor/rules/*.mdc` only. Phase 3: rewrite `friction.mdc`, add `handshake.mdc`; Phase 4: delete stale `.cursor/plans/rules_doc_consolidation_d6a00034.plan.md`. |
| `ARCHITECTURE_RULES` / `README_START_HERE` | Absent — **omit** from Phase 4 final-audit grep requirement. |
| `docs/DNA_MERGE_PREP.md` | **DELETE in Phase 4** (transitional artifact). |

---

## 1.1 Markdown files discovered

### `/docs/` (29 `.md` files)

| Path |
|------|
| `docs/UI_KIT_BOUNDARIES.md` |
| `docs/BAND_RHYTHM_AND_CONTRAST.md` |
| `docs/PROJECT_PRIME_DIRECTIVE_RULES.md` |
| `docs/MASTER_DESIGN_BUILD_COMPLIANCE.md` |
| `docs/MASTER_RULES_SOURCE_OF_TRUTH.md` |
| `docs/COMPLIANCE_EXECUTION_PLAN.md` |
| `docs/GLC_SITE_CLONE_MASTER_MAP.md` |
| `docs/PHASE2_MASTER_GATE_CHECKLIST.md` |
| `docs/UI_INTERACTION_AUDIT_2026-04-26.md` |
| `docs/UI_INTERACTION_RULES.md` |
| `docs/MOTIF_SYSTEM_AUDIT_2026-04-26.md` |
| `docs/MOTIF_ASSET_PATH_MAPPING.md` |
| `docs/MOTIF_ACCENT_AUDIT_CHECKLIST.md` |
| `docs/MOTIF_ACCENT_RULES.md` |
| `docs/DNA_MERGE_PREP.md` |
| `docs/design-references/README.md` |
| `docs/design-references/01-layered-header-floating-nav-hero-island-services-grid.md` |
| `docs/design-references/02-hero-asymmetric-split-layered-visual-cluster.md` |
| `docs/design-references/03-interlocking-rail-staggered-cards-zigzag.md` |
| `docs/design-references/04-hero-fullbleed-offset-copy-services-foundation-grid.md` |
| `docs/design-references/05-overlap-card-geometric-accents-orbitals-tabs.md` |
| `docs/delete-when-launching/SEQUENCE_HIERARCHY_TRIAL_RULE_AUDIT_2026-04-25.md` |
| `docs/delete-when-launching/RULES_CONSOLIDATION_REPORT_2026-04-25.md` |
| `docs/delete-when-launching/PHASE2_PRODUCTIONIZATION_PLAN_LOG_2026-04-25.md` |
| `docs/delete-when-launching/FULL_HOME_SANDBOX_RULE_REAUDIT_2026-04-25.md` |
| `docs/delete-when-launching/SECTION_RITUAL_LEDGER.md` |
| `docs/delete-when-launching/HERO_ENTRY_VARIATIONS_RULE_AUDIT.md` |
| `docs/delete-when-launching/TAGGED_SECTION_COMPLIANCE_REPORT.md` |
| `docs/delete-when-launching/PRIME_DIRECTIVE_LINE_AUDIT.md` |

**Note:** `docs/MIGRATION_INVENTORY.md` (this file) was created in Phase 1 as the required deliverable.

### Repo root (`.md` excluding `docs/`)

| Path | Notes |
|------|--------|
| `GLC_MASTER_RULES.md` | Canonical **new** governance doc — preserve; Phase 3 says do not modify. |
| `GLC_GLOBAL_DESIGN_SYSTEM.md` | Canonical **new** design-system doc — preserve; Phase 3 says do not modify. |
| `AGENTS.md` | Cursor/agent workspace rules; links to legacy `docs/*.md`. |
| `CLAUDE.md` | Pointer: `@AGENTS.md` only. |
| `README.md` | Never-delete. |
| `delete-when-launching/manifest.md` | Outside `docs/`; audit/manifest style content. |

### `/components/` — no standalone `.md`

Rule references appear in **comments / JSDoc** in `.tsx` (see §1.3 table). No `.md` under `components/`.

### `/app/` — no standalone `.md`

Rule references in `app/globals.css` (treated as app-level per task scope for comments). See table.

---

## 1.2 `.cursorrules` and Cursor / AI config

| Path | Finding |
|------|---------|
| **`.cursorrules`** (repo root) | **Not present** — **do not create** (Decision 1.5); use `.cursor/rules/*.mdc` only. |
| `.cursor/rules/friction.mdc` | Present — references **B-Ia**, **B-XI**, **P-IVa** and legacy doc paths (`docs/PROJECT_PRIME_DIRECTIVE_RULES.md`, `docs/design-references/04-*.md`, `05-*.md`). | **remap** Phase 3 per `MIGRATION_RULE_MAP.md` §H |
| `.cursor/plans/rules_doc_consolidation_d6a00034.plan.md` | Plan artifact; references legacy docs. | **delete Phase 4** (stale planning artifact) |

**Not searched:** Editor-global Cursor settings outside repo.

---

## 1.3 Grep coverage (patterns from task)

Patterns used (ripgrep-style, repo-wide where practical):

- **P-series:** `P-[IVX]{1,3}[a-z]{1,3}` and explicit mentions in tables.  
- **D-series:** `D-MANDATE`, `D-[0-9][a-z]?` boundaries.  
- **B-series:** `B-[IVX]{1,3}[a-z]{0,3}\b` (tuned to reduce noise).  
- **Doc filenames:** `MASTER_RULES_SOURCE_OF_TRUTH`, `MASTER_DESIGN_BUILD_COMPLIANCE`, `PROJECT_PRIME_DIRECTIVE_RULES`, `BAND_RHYTHM_AND_CONTRAST`, `MOTIF_ACCENT_*`, `UI_INTERACTION_RULES`, `UI_KIT_BOUNDARIES`, `PHASE2_MASTER_GATE_CHECKLIST`, `COMPLIANCE_EXECUTION_PLAN`, `ARCHITECTURE_RULES`, `README_START_HERE`.  
- **ARCHITECTURE_RULES / README_START_HERE:** **No matches** (files not present in repo).  
- **Lab IDs (A1–P):** Concentrated in **`GLC_GLOBAL_DESIGN_SYSTEM.md`** (rules **C1–C6**, **D1–D5**, **E1–E5**, **F1–F4**, **G1/G6**, **H1–H4**, **I1–I5**, **K1–K6**, **L1–L7**, **M1–M4** in headings and appendix). Additional lab-style tags (e.g. **A-3LAYER**, **A-REG**) appear in `docs/delete-when-launching/FULL_HOME_SANDBOX_RULE_REAUDIT_2026-04-25.md`.

**Dense files (match counts for P-/D-/B-style tokens — approximate):**

| File | Approx. matches |
|------|-----------------|
| `docs/PROJECT_PRIME_DIRECTIVE_RULES.md` | 92 |
| `docs/COMPLIANCE_EXECUTION_PLAN.md` | 82 |
| `docs/delete-when-launching/FULL_HOME_SANDBOX_RULE_REAUDIT_2026-04-25.md` | Very high (full pass listing) |

For those files, **every line is not duplicated below**; Phase 2 should treat the file as a single mapping source.

---

## 1.4 Inventory table (path | type | excerpt | proposed action)

**Legend — Proposed action:** `remap` = Phase 3 retarget to `GLC_MASTER_RULES.md` / `GLC_GLOBAL_DESIGN_SYSTEM.md` + section; `delete` = Phase 4 after approval; `preserve` = keep permanently; `flag-for-review` = needs human call.

### A. Canonical new docs (preserve)

| File Path | Reference Type | Match Excerpt | Proposed Action |
|-----------|----------------|---------------|-----------------|
| `GLC_MASTER_RULES.md` | filename + `UI_KIT_BOUNDARIES` | Still cites `UI_KIT_BOUNDARIES.md` for kit stack / MUI gate | **preserve** — Phase 2 decides whether kit detail stays only in `UI_KIT_BOUNDARIES` or is inlined; **Phase 3 forbids editing this file per task** |
| `GLC_GLOBAL_DESIGN_SYSTEM.md` | Lab rule IDs C1–M4, companion link | `**Companion:** GLC_MASTER_RULES.md` | **preserve** |

### B. Agent / Cursor / root pointers (Phase 3 remap targets)

| File Path | Reference Type | Match Excerpt (line) | Proposed Action |
|-----------|----------------|----------------------|-----------------|
| `AGENTS.md` | doc links + **P-IIa** | L7–L9: `MASTER_RULES_SOURCE_OF_TRUTH`, `PROJECT_PRIME_DIRECTIVE_RULES`, `BAND_RHYTHM`; L17: `BAND_RHYTHM` | **remap** to two-doc sections + handshake |
| `CLAUDE.md` | `@AGENTS.md` | L1 | **remap** indirect via `AGENTS.md` update |
| `.cursor/rules/friction.mdc` | rule IDs + doc paths | L2: B-Ia; L27–L33: B-Ia, B-XI, P-IVa + `PROJECT_PRIME_DIRECTIVE_RULES`, `design-references/04-*.md` | **remap** |
| `.cursor/plans/rules_doc_consolidation_d6a00034.plan.md` | doc paths + P-VIIIe | Links to legacy docs | **flag-for-review** (plan artifact; delete or archive in Phase 4?) |

### C. Application code & CSS (Phase 3 comment remap)

| File Path | Reference Type | Match Excerpt | Proposed Action |
|-----------|----------------|---------------|-----------------|
| `app/globals.css` | doc path + **P-IVa** + **B-Va** + **P-III** | L88: `P-IVa`; L205: `docs/BAND_RHYTHM_AND_CONTRAST.md`; L354: `P-IVa`; L378: `B-Va`, `P-III` | **remap** |
| `components/ground-level/GLPedigree.tsx` | rule IDs | L4: `D-5b / B-IIIa–b` | **remap** |
| `components/ui/ClaudeLogicWatermark.tsx` | rule ID | L19: `B-Xa` | **remap** |
| `components/ui/StructuralFragments.tsx` | rule ID | L2: `B-Xb` | **remap** |
| `lib/compliance/master-bible-ledger.ts` | legacy Bible clause IDs (I.a– style) | L1–80: Roman clause ledger; comment says “Master Project Bible” | **DEPRECATED-CANDIDATE** — zero TS/TSX importers (`MIGRATION_RULE_MAP.md` §A); no edit without explicit approval |

### D. Legacy governance & compliance (`docs/` — delete in Phase 4 after remap)

| File Path | Reference Type | Match Excerpt | Proposed Action |
|-----------|----------------|---------------|-----------------|
| `docs/MASTER_RULES_SOURCE_OF_TRUTH.md` | doc cross-links + **P-IIc**, **P-VIIIe** | Full precedence stack; links to all sibling docs | **delete** (Phase 4) after references gone |
| `docs/MASTER_DESIGN_BUILD_COMPLIANCE.md` | doc list + **P-IIc** | L12–30: seven-doc stack; §4.2 `UI_KIT_BOUNDARIES` | **delete** (Phase 4) |
| `docs/PROJECT_PRIME_DIRECTIVE_RULES.md` | Full **P-Ia–P-XIc**, **D-***, **B-*** tables + links | ~92 token matches; Appendix + conflicts | **delete** (Phase 4) — primary P/B/D source for Phase 2 map |
| `docs/BAND_RHYTHM_AND_CONTRAST.md` | doc links | `PROJECT_PRIME_DIRECTIVE_RULES`, `AGENTS.md` | **delete** (Phase 4) |
| `docs/COMPLIANCE_EXECUTION_PLAN.md` | matrix **D-***, **B-***, **P-*** + legacy filenames | ~82 token matches | **delete** (Phase 4) or **preserve** excerpt in master? → **flag-for-review** if any matrix must survive as non-normative appendix |
| `docs/PHASE2_MASTER_GATE_CHECKLIST.md` | legacy doc list | L150–155 | **delete** (Phase 4) |
| `docs/UI_INTERACTION_RULES.md` | (implicit cross-links in other docs) | Cited from COMPLIANCE, MOTIF rules | **delete** (Phase 4) after content mapped to `GLC_GLOBAL_DESIGN_SYSTEM` interaction section |
| `docs/UI_KIT_BOUNDARIES.md` | legacy authority links + **P-IIc**, **P-VIIIe** | Links to MASTER / PRIME / COMPLIANCE / MOTIF / UI_INTERACTION | **remap** all citations → `GLC_MASTER_RULES.md` **Part 3.1–3.5**; **delete file Phase 4** (Decision 1.5) |
| `docs/UI_INTERACTION_AUDIT_2026-04-26.md` | dated audit + doc refs | MASTER, COMPLIANCE, MOTIF | **delete** (Phase 4) |
| `docs/MOTIF_ACCENT_RULES.md` | `UI_INTERACTION_RULES` | L9, L141 | **delete** (Phase 4) |
| `docs/MOTIF_ACCENT_AUDIT_CHECKLIST.md` | cross-refs | Cited from MASTER, COMPLIANCE | **delete** (Phase 4) |
| `docs/MOTIF_ACCENT_MANIFEST.json` | JSON (not .md) | Inventory §1.1 scoped `.md`; manifest referenced by rules | **flag-for-review** — never-delete list did not mention JSON; likely **preserve** with motif system |
| `docs/MOTIF_SYSTEM_AUDIT_2026-04-26.md` | dated audit | MOTIF_*, MASTER | **delete** (Phase 4) |
| `docs/MOTIF_ASSET_PATH_MAPPING.md` | (no legacy string hits in quick grep) | Path mapping | **delete** (Phase 4) if content absorbed or **preserve** if operational |

### E. Design references (`docs/design-references/`)

| File Path | Reference Type | Match Excerpt | Proposed Action |
|-----------|----------------|---------------|-----------------|
| `docs/design-references/README.md` | doc links + **B-/P-** context | `PROJECT_PRIME_DIRECTIVE_RULES`, `BAND_RHYTHM` | **remap** or **delete** if structure-only absorbed into `GLC_GLOBAL_DESIGN_SYSTEM` |
| `docs/design-references/01-*.md` | **B-***, **D-*** | B-VIb/c, B-XIb, D-2a, D-3c | **remap** references in Phase 3 for any TS/CSS pointing here; doc set **delete** Phase 4 if folded |
| `docs/design-references/02-*.md` | **B-*** | B-VIb, B-VId, B-XIb, B-Xb | same |
| `docs/design-references/03-*.md` | **B-***, **D-*** | D-5b, B-IVb, B-VIc, B-VIIb | same |
| `docs/design-references/04-*.md` | **D-***, **B-*** | D-3b, B-Vb, D-5a, B-IXb | same |
| `docs/design-references/05-*.md` | **B-***, **D-*** | B-Xa–b, B-XIc, D-1b | same |

### F. `docs/delete-when-launching/` (dated audits — strong delete candidates)

| File Path | Reference Type | Match Excerpt | Proposed Action |
|-----------|----------------|---------------|-----------------|
| `docs/delete-when-launching/*.md` (9 files) | P-series lists, AGENTS, COMPLIANCE, BAND, lab tags | e.g. `FULL_HOME_SANDBOX_RULE_REAUDIT_2026-04-25.md` lines 19–36 P-ID inventory | **delete** (Phase 4) per folder name; confirm no unique normative text not in GLC_* |

### G. Other `docs/` misc

| File Path | Reference Type | Match Excerpt | Proposed Action |
|-----------|----------------|---------------|-----------------|
| `docs/GLC_SITE_CLONE_MASTER_MAP.md` | self + routes | Clone map | **preserve** (operational IA; not listed as rule doc — **flag-for-review** vs migration scope) |
| `docs/DNA_MERGE_PREP.md` | — | No legacy grep hits | **delete Phase 4** (Decision 1.5) |

---

## STOP — Phase 3 (Steps 1–6) complete

**Deliverables:** This file + [`docs/MIGRATION_RULE_MAP.md`](./MIGRATION_RULE_MAP.md) + [`docs/MIGRATION_REMAP_DIFF.md`](./MIGRATION_REMAP_DIFF.md).

**Next:** Human **Phase 4** approval (per-batch deletions of legacy rule docs).

**Resolved:** Canonical GLC docs repointed motif authority to manifest + path map; **P-Id / D-7** superseded by Global DS **Part 4.7** (see `MIGRATION_RULE_MAP.md` and Master Rules Part 8 amendment 2026-04-27).

**Still deferred:** `lib/compliance/master-bible-ledger.ts` — **DEPRECATED-CANDIDATE**; no edit without explicit approval.
