# Migration rule map — Phase 2

**Generated:** 2026-04-27  
**Inputs:** Phase 1 inventory, [`GLC_MASTER_RULES.md`](../GLC_MASTER_RULES.md), [`GLC_GLOBAL_DESIGN_SYSTEM.md`](../GLC_GLOBAL_DESIGN_SYSTEM.md), and **Phase 1.5 decisions** (UI kit doc deletion, ledger deferral, no `.cursorrules`, motif/IA preserves, `DNA_MERGE_PREP` delete).

**Phase 2 status:** Complete. **Phase 3 (canonical patch + remaps):** Applied 2026-04-27 — `GLC_MASTER_RULES.md` / `GLC_GLOBAL_DESIGN_SYSTEM.md` updated per approved diff; motif authority → manifest + path map; **P-Id** / **D-7** → **RENAMED** to Global DS **Part 4.7** + Master Part 8 amendment.

**Phase gate:** **HALT after** `MIGRATION_REMAP_DIFF.md` — await Phase 4 deletion batches.

---

## A. `master-bible-ledger.ts` — import-graph audit (Phase 2 sub-task)

| Finding | Detail |
|---------|--------|
| **Export surface** | [`lib/compliance/index.ts`](../lib/compliance/index.ts) line 2 re-exports `MASTER_BIBLE_LEDGER` from [`lib/compliance/master-bible-ledger.ts`](../lib/compliance/master-bible-ledger.ts). |
| **Importers (TS/TSX)** | **Zero.** Ripgrep for `@/lib/compliance`, `/lib/compliance`, and `MASTER_BIBLE_LEDGER` across `*.ts` / `*.tsx` / `*.js` / `*.jsx` found **no** imports outside `lib/compliance` itself. |
| **Doc references** | [`docs/COMPLIANCE_EXECUTION_PLAN.md`](COMPLIANCE_EXECUTION_PLAN.md) line 160 mentions `lib/compliance/*` as optional cross-reference. |
| **Classification** | **DEPRECATED-CANDIDATE** — dead export tree for runtime/build; safe to remove or replace in a later phase **after** your explicit approval (per Decision 2: do not modify ledger or consumers without approval). |
| **Halt condition** | **Does not apply** (no importer sites to list). |

**MIGRATION_RULE_MAP row for ledger (conceptual, not P-/B-/D-):**

| Old Rule ID | Old Doc | New Doc | New Section | Status |
|-------------|---------|---------|-------------|--------|
| Bible clause ledger (`I.a` … in `MASTER_BIBLE_LEDGER`) | `lib/compliance/master-bible-ledger.ts` | *n/a — code artifact* | Replace with **GLC_GLOBAL_DESIGN_SYSTEM.md** Part 16 rule index + Part 15 checklist when/if ledger removed | **DEPRECATED-CANDIDATE** |

---

## B. Motif inventory authority — **RESOLVED** (Phase 3)

| Decision | Detail |
|----------|--------|
| **Resolution** | Canonical docs **repointed** to `docs/MOTIF_ACCENT_MANIFEST.json` + `docs/MOTIF_ASSET_PATH_MAPPING.md` (no `GLC-SVG-MOTIF-SYSTEM.md` file required). |
| **Files** | [`GLC_GLOBAL_DESIGN_SYSTEM.md`](../GLC_GLOBAL_DESIGN_SYSTEM.md) Part 8.7; [`GLC_MASTER_RULES.md`](../GLC_MASTER_RULES.md) §2.1 item 3. |
| **Status** | **CLOSED** — do not add `GLC-SVG-MOTIF-SYSTEM.md` unless you later want it as optional narrative. |

---

## C. Intentional drops (do not flag as missing)

Per Master Rules Part 8 and your Phase 1.5 instructions:

| Old ID | Status | Notes |
|--------|--------|-------|
| **P-Ia** | **DROPPED-INTENTIONALLY** | Homepage Laboratory First — removed per amendment 2026-04-27 ([`GLC_MASTER_RULES.md`](../GLC_MASTER_RULES.md) Part 8). |
| **P-Ib** | **DROPPED-INTENTIONALLY** | Zero-Creation / secondary routes gate — removed per same amendment. |
| **P-Ic** | **DROPPED-INTENTIONALLY** | DNA extraction sequencing — GLC Global DS is canonical DNA ([`GLC_MASTER_RULES.md`](../GLC_MASTER_RULES.md) Part 8). |
| **P-IIc** “no prefab UI kits” (historic)** | **DROPPED-INTENTIONALLY** | Reversed; operative kit law is **Part 3** approved stack ([`GLC_MASTER_RULES.md`](../GLC_MASTER_RULES.md) Part 8 + Part 3). |
| **“No color anchors as large background fills”** (historic)** | **DROPPED-INTENTIONALLY** | Removed per amendment 2026-04-27; usage governed by **GLC_GLOBAL_DESIGN_SYSTEM.md** Part 5 + Part 2.1. |

---

## D. Filename / doc-level remap (legacy → two-doc target)

All legacy **files** below are **Phase 4 delete candidates** after Phase 3 remaps references. **`UI_KIT_BOUNDARIES.md`** is legacy per Decision 1 — remap all pointers to **Master Rules Part 3** subsections.

| Old filename / path | New doc | New section (target for Phase 3 links) | Status |
|---------------------|---------|------------------------------------------|--------|
| `docs/UI_KIT_BOUNDARIES.md` | `GLC_MASTER_RULES.md` | **Part 3.1** Allowed / **3.2** Disallowed / **3.3** Token mapping / **3.4** Where shadcn vs raw composition / **3.5** Expansion (user numbering; file uses **§3.5 Expansion Process** — align comment text to **Part 3.5**) | **PRESERVED** (intent) → **DELETE file Phase 4** |
| `docs/MASTER_RULES_SOURCE_OF_TRUTH.md` | `GLC_MASTER_RULES.md` | Part 1–2, 8 (amendments), 10 | **PRESERVED** |
| `docs/MASTER_DESIGN_BUILD_COMPLIANCE.md` | `GLC_GLOBAL_DESIGN_SYSTEM.md` + `GLC_MASTER_RULES.md` | Split: tokens/layout → Global DS; gate/process → Master | **PRESERVED** (split) |
| `docs/PROJECT_PRIME_DIRECTIVE_RULES.md` | Same two | P-table → Master Part 10 MR-* + Global Part 16; D/B tables → Global Parts 2–6, 5, 9, 11, 12, 14 + Master Part 6–7 | **PRESERVED** |
| `docs/BAND_RHYTHM_AND_CONTRAST.md` | `GLC_GLOBAL_DESIGN_SYSTEM.md` | **Part 5** | **PRESERVED** |
| `docs/MOTIF_ACCENT_RULES.md` | `GLC_GLOBAL_DESIGN_SYSTEM.md` | **Part 8** (+ manifest operational) | **PRESERVED** |
| `docs/MOTIF_ACCENT_AUDIT_CHECKLIST.md` | `GLC_GLOBAL_DESIGN_SYSTEM.md` | Part 8 + **Part 15** (motif bullets) | **PRESERVED** (process evidence, not normative stack) |
| `docs/UI_INTERACTION_RULES.md` | `GLC_GLOBAL_DESIGN_SYSTEM.md` | **Part 11** (+ Part 13–14 interaction bullets) | **PRESERVED** |
| `docs/COMPLIANCE_EXECUTION_PLAN.md` | `GLC_MASTER_RULES.md` | **Part 4** (five-pass), **Part 7** (gate) | **PRESERVED** (matrix rows remap to rule IDs in two docs) |
| `docs/PHASE2_MASTER_GATE_CHECKLIST.md` | `GLC_MASTER_RULES.md` | **Part 7** | **PRESERVED** |
| `docs/design-references/*.md` | `GLC_GLOBAL_DESIGN_SYSTEM.md` | **Part 3–5, 4.4** (archetypes / structure-only intent) | **PRESERVED** (structure-only; may delete Phase 4 if redundant) |
| `docs/delete-when-launching/*.md` | *Evidence only* | Dated audits — not normative | **PRESERVED** as history until Phase 4 delete |
| `docs/DNA_MERGE_PREP.md` | *n/a* | Transitional artifact | **DELETE Phase 4** (per your decision) |
| `docs/MOTIF_SYSTEM_AUDIT_2026-04-26.md`, `docs/UI_INTERACTION_AUDIT_2026-04-26.md` | Evidence | Optional pointer to Part 15 | **DELETE Phase 4** (typical) |
| `docs/GLC_SITE_CLONE_MASTER_MAP.md` | **PRESERVE** (operational) | Out of rule-doc migration | **PRESERVE** (not mapped to rule IDs) |
| `docs/MOTIF_ASSET_PATH_MAPPING.md` | **PRESERVE** (operational) | Motif assets | **PRESERVE** |
| `docs/MOTIF_ACCENT_MANIFEST.json` | **PRESERVE** (data) | Motif inventory | **PRESERVE** |
| `.cursor/plans/rules_doc_consolidation_d6a00034.plan.md` | *n/a* | Stale artifact | **DELETE Phase 4** (per Decision 3c) |

---

## E. Exhaustive P-ID map (PROJECT_PRIME_DIRECTIVE_RULES → two docs)

| Old Rule ID | Old Doc | New Doc | New Section | Status |
|-------------|---------|---------|-------------|--------|
| P-Ia | PROJECT_PRIME… | — | — | **DROPPED-INTENTIONALLY** |
| P-Ib | PROJECT_PRIME… | — | — | **DROPPED-INTENTIONALLY** |
| P-Ic | PROJECT_PRIME… | — | — | **DROPPED-INTENTIONALLY** |
| P-Id | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 4.7** (archetype coverage + D5 adjacency; no absolute section-count floor) + [`GLC_MASTER_RULES.md`](../GLC_MASTER_RULES.md) Part 8 amendment **2026-04-27: Section Count Minimum Replaced** | **RENAMED** |
| P-IIa | PROJECT_PRIME… | GLC_MASTER_RULES.md | **§2.2** Socratic Handshake | **RENAMED** → MR-2 (Part 10 index) |
| P-IIb | PROJECT_PRIME… | GLC_MASTER_RULES.md | **§2.3** Aesthetic Friction | **RENAMED** → MR-3 |
| P-IIc | PROJECT_PRIME… | GLC_MASTER_RULES.md | **Part 3** Approved stack | **RENAMED** → MR-5 / MR-6 / MR-7 / MR-8 |
| P-IIIa | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 2.1**–**2.5** + **Part 5** surfaces | **PRESERVED** |
| P-IIIb | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 5** + **Part 2.1** | **PRESERVED** |
| P-IIIc | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 2.1** (accent usage) | **PRESERVED** |
| P-IVa | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 3** C2, **Part 3.2** two-method depth; **H1–H4** Part 16 | **PRESERVED** |
| P-IVb | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 7** + toolkit rows **TK-*** Part 16 | **PRESERVED** |
| P-Va | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 4** G1, **Part 3** C4 | **PRESERVED** |
| P-Vb | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 5** D5 + bleed/interlock mechanics | **PRESERVED** |
| P-VIa | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 9** I1 | **PRESERVED** |
| P-VIb | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 9** I2–I3 | **PRESERVED** |
| P-VIc | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 9** I4 | **PRESERVED** |
| P-VIIa | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 12** | **PRESERVED** |
| P-VIIb | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 12** + **Part 8** M* | **PRESERVED** |
| P-VIIc | PROJECT_PRIME… | GLC_MASTER_RULES.md | **§6.1** Two-scroll | **PRESERVED** → MR-15 |
| P-VIIIa | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 6** E5 / registers | **PRESERVED** |
| P-VIIIb | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 6** (5:1 hero vs body) | **PRESERVED** |
| P-VIIIc | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 6** (1:3 rhythm) | **PRESERVED** |
| P-VIIId | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 2.2** forbidden fonts | **PRESERVED** |
| P-VIIIe | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 6** E1, E3 + Master Part 8 amendment 2026-04-25 | **PRESERVED** |
| P-IXa | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 14** | **PRESERVED** |
| P-IXb | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 11** L* | **PRESERVED** |
| P-IXc | PROJECT_PRIME… | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 2.3** + **Part 14** | **PRESERVED** |
| P-Xa | PROJECT_PRIME… | GLC_MASTER_RULES.md | **§6.4** App Router | **PRESERVED** → MR-18 |
| P-Xb | PROJECT_PRIME… | GLC_MASTER_RULES.md | **§6.1–6.2** links | **PRESERVED** → MR-15–16 |
| P-Xc | PROJECT_PRIME… | GLC_MASTER_RULES.md | **§6.4** JSON-LD | **PRESERVED** → MR-18 |
| P-Xd | PROJECT_PRIME… | GLC_MASTER_RULES.md | **§6.5** performance | **PRESERVED** → MR-19 |
| P-XIa | PROJECT_PRIME… | GLC_MASTER_RULES.md | **§4.4** justification | **PRESERVED** → MR-12 |
| P-XIb | PROJECT_PRIME… | GLC_MASTER_RULES.md | **Part 4.1** five-pass evidence | **PRESERVED** → MR-9 |
| P-XIc | PROJECT_PRIME… | GLC_MASTER_RULES.md | **§4.5** remediation | **PRESERVED** → MR-13 |

---

## F. D-* and B-* legacy index (PDF-derived table in PROJECT_PRIME…)

**Rule of thumb:** Layout / canvas / type / depth / mobile / trust → **GLC_GLOBAL_DESIGN_SYSTEM.md** Parts 2–6, 9–12, 14; conversion / gate / grill process → **GLC_MASTER_RULES.md** Parts 2–4, 6–7.

| Old Rule ID | Old Doc | New Doc | New Section | Status |
|-------------|---------|---------|-------------|--------|
| D-MANDATE | PROJECT_PRIME / COMPLIANCE | GLC_MASTER_RULES.md | **§2.2–2.3** (handshake + friction) | **PRESERVED** |
| D-1a | PROJECT_PRIME | GLC_MASTER_RULES.md | **§2.3** + Global **Part 3** C3 | **PRESERVED** |
| D-1b | PROJECT_PRIME | GLC_MASTER_RULES.md | **Part 3** (operative kit supersedes PDF) | **PRESERVED** (PDF wording historic only) |
| D-2a–b | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 4** G1, G6; **Part 3** C4 | **PRESERVED** |
| D-3a | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 2.1** + **Part 2.5** surfaces | **PRESERVED** |
| D-3b | PROJECT_PRIME / COMPLIANCE | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 5** + **Part 2.1** (marketing wash vs structural ink) | **PRESERVED** (reconciled; not the dropped “color anchor fill” ban in same form) |
| D-3c | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 3** C2; **Part 7**; **H** | **PRESERVED** |
| D-4a–b | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 6** | **PRESERVED** |
| D-5a | PROJECT_PRIME | GLC_MASTER_RULES.md | **§6.1** | **PRESERVED** → MR-15 |
| D-5b | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 12** | **PRESERVED** |
| D-6a | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 14** | **PRESERVED** |
| D-6b | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 2.3** spacing | **PRESERVED** |
| D-7 | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 4.7** + **Part 5.5** (Rule D5) + Master Part 8 amendment 2026-04-27 | **RENAMED** (former “10 unique archetypes” numeric gate replaced by 5-of-6 archetype coverage + adjacency) |
| B-Ia | PROJECT_PRIME | GLC_MASTER_RULES.md | **§2.3** Aesthetic friction (“Grill”) | **PRESERVED** → MR-3 |
| B-Ib | PROJECT_PRIME | GLC_MASTER_RULES.md | **§2.3** | **PRESERVED** → MR-3 |
| B-Ic | PROJECT_PRIME | GLC_MASTER_RULES.md | **Part 3** | **PRESERVED** (same as D-1b operative) |
| B-IIa | PROJECT_PRIME | — | — | **DROPPED-INTENTIONALLY** (ties to P-Ia lab ordering) |
| B-IIb | PROJECT_PRIME | GLC_MASTER_RULES.md | **Part 8** amendment (parallel Phase 2) + **§6.3** IA | **PRESERVED** (stakeholder route exceptions — document in amendment / gate) |
| B-IIc | PROJECT_PRIME | — | — | **DROPPED-INTENTIONALLY** (DNA extraction sequencing) |
| B-IIIa–b | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 12** | **PRESERVED** |
| B-IVa–b | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 2.5** + **Part 5** | **PRESERVED** |
| B-Va–b | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 2.1** + **Part 5** | **PRESERVED** |
| B-VIa–d | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 4** G1, G6; **Part 3** | **PRESERVED** |
| B-VIIa–b | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 4.4** + **Part 5** D5 | **PRESERVED** |
| B-VIIIa–c | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 6** | **PRESERVED** |
| B-IXa–b | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 6** | **PRESERVED** |
| B-Xa–b | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 8** M* + **Part 10** | **PRESERVED** |
| B-XIa–c | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 3** C2; **Part 7**; **H** | **PRESERVED** |
| B-XIIa–b | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 11** L*; **Part 14** | **PRESERVED** |
| B-XIIIa–b | PROJECT_PRIME | GLC_GLOBAL_DESIGN_SYSTEM.md | **Part 2.3**; **Part 6** | **PRESERVED** |
| B-XIVa–b | PROJECT_PRIME | GLC_MASTER_RULES.md | **§6.4** | **PRESERVED** → MR-18 |

---

## G. Lab-style IDs in new doc (Part 16)

Legacy audits used tags like **A-3LAYER**, **A-REG**. Canonical lab IDs **C1–M4** (and **LM-***, **AR-***, **TK-***) live in **GLC_GLOBAL_DESIGN_SYSTEM.md Part 16**. Phase 3 should replace audit-only tags with **Part 16** IDs where possible, or mark **RENAMED** in evidence logs.

---

## H. Cursor rules — **APPLIED** (Phase 3)

| File | Action |
|------|--------|
| `.cursor/rules/friction.mdc` | Rewritten: only [`GLC_MASTER_RULES.md`](../GLC_MASTER_RULES.md) §2.3 (aesthetic friction / MR-3) + [`GLC_GLOBAL_DESIGN_SYSTEM.md`](../GLC_GLOBAL_DESIGN_SYSTEM.md) Part 3 (C2, C3), Part 7, Part 16 (H1–H4); legacy doc paths and P-/B- IDs removed. |
| `.cursor/rules/handshake.mdc` | **Created:** Socratic Handshake ([`GLC_MASTER_RULES.md`](../GLC_MASTER_RULES.md) §2.2 / MR-2) + pre-submit checklist ([`GLC_GLOBAL_DESIGN_SYSTEM.md`](../GLC_GLOBAL_DESIGN_SYSTEM.md) Part 15). |

---

## I. Phase 4 final audit — grep scope adjustment

Per Decision 4: **Do not** require zero matches for `ARCHITECTURE_RULES` or `README_START_HERE` (files absent). All **other** Phase 1.3 patterns remain in the final stale-reference sweep after deletions.

---

## J. Post–Phase 3 notes

1. **Motif SVG file:** Closed via manifest + path mapping (§B).  
2. **P-Id / D-7:** **RENAMED** to **Part 4.7** + Master Part 8 amendment (not DROPPED-INTENTIONALLY).  
3. **DEPRECATED-CANDIDATE:** `MASTER_BIBLE_LEDGER` — unchanged pending your explicit approval.

---

**STOP — Phase 3 Steps 1–6 complete.** Phase 4: legacy doc deletions per your batches.
