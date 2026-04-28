# Rules Consolidation Report (Report-Only)

Date: 2026-04-25  
Mode: Report-only (no merges, no deletions)  
Goal: Consolidate brainstorming/rules/process docs into one practical Source-of-Truth model with explicit approval gates.

## 1) Executive summary

- The repository currently has one strong canonical rule candidate (`docs/PROJECT_PRIME_DIRECTIVE_RULES.md`) but governance is fragmented by duplicated rule statements spread across process and audit logs.
- The highest-value cleanup is not deletion; it is **separating normative law from workflow and evidence**.
- Recommended governance order:
  1) Master Rules Doc (normative only),
  2) Compliance Playbook (how to evaluate/apply),
  3) Audit Evidence Logs (dated outcomes),
  4) Transitional/Migration notes (phase-specific planning).
- No files should be deleted in this pass.

## 2) Classification map (line-item purpose + overlap)

### Canonical normative (keep as rule law)

- `docs/PROJECT_PRIME_DIRECTIVE_RULES.md`
  - Role: consolidated directive law, P-/D-/B- indexing, baseline lock, conflict notes.
  - Keep status: `KEEP AS CANONICAL`.
  - Overlap present with: `AGENTS.md`, `docs/BAND_RHYTHM_AND_CONTRAST.md`, `docs/COMPLIANCE_EXECUTION_PLAN.md`.

- `AGENTS.md`
  - Role: workspace operational constraints + non-negotiable section minima.
  - Keep status: `KEEP AS EXECUTION GUARDRAIL`.
  - Overlap present with: `docs/PROJECT_PRIME_DIRECTIVE_RULES.md` (P-IIa, baseline lock, 3-layer/typography constraints), `docs/BAND_RHYTHM_AND_CONTRAST.md` (rhythm/typography-role detail).

- `docs/BAND_RHYTHM_AND_CONTRAST.md`
  - Role: specialized field-rhythm + intra-section typography contrast + candidate guardrails.
  - Keep status: `KEEP AS SPECIALIZED RULE SUPPLEMENT`.
  - Overlap present with: `AGENTS.md` and `docs/PROJECT_PRIME_DIRECTIVE_RULES.md` on typography-role and rhythm assertions.

### Process / playbook (keep as workflow)

- `docs/COMPLIANCE_EXECUTION_PLAN.md`
  - Role: audit workflow, matrix, evidence discipline, gating procedure.
  - Keep status: `KEEP AS PROCESS PLAYBOOK`.
  - Overlap present with: normative rules copied/rephrased from `PROJECT_PRIME_DIRECTIVE_RULES.md`.

### Audit evidence (keep as dated evidence, non-normative)

- `docs/FULL_HOME_SANDBOX_RULE_REAUDIT_2026-04-25.md`
- `docs/HERO_ENTRY_VARIATIONS_RULE_AUDIT.md`
- `docs/SEQUENCE_HIERARCHY_TRIAL_RULE_AUDIT_2026-04-25.md`
- `docs/TAGGED_SECTION_COMPLIANCE_REPORT.md`
- `docs/PRIME_DIRECTIVE_LINE_AUDIT.md`
- `docs/SECTION_RITUAL_LEDGER.md`
  - Role: dated findings, verdicts, correction history, proof artifacts.
  - Keep status: `KEEP AS EVIDENCE LOGS`.
  - Overlap present with: rules repeated as text in each report.

### Transitional / migration / planning notes (keep as transitional)

- `docs/DNA_MERGE_PREP.md`
  - Role: migration checklist for Lane A/B merge and purge.
  - Keep status: `KEEP AS TRANSITION CHECKLIST`.

- `docs/PHASE2_PRODUCTIONIZATION_PLAN_LOG_2026-04-25.md`
  - Role: decision snapshot and resume notes.
  - Keep status: `KEEP AS TEMPORAL PLAN LOG`.

### Design reference guides (keep as structure references)

- `docs/design-references/README.md`
- `docs/design-references/01-layered-header-floating-nav-hero-island-services-grid.md`
- `docs/design-references/02-hero-asymmetric-split-layered-visual-cluster.md`
- `docs/design-references/03-interlocking-rail-staggered-cards-zigzag.md`
- `docs/design-references/04-hero-fullbleed-offset-copy-services-foundation-grid.md`
- `docs/design-references/05-overlap-card-geometric-accents-orbitals-tabs.md`
  - Role: structure-only implementation references.
  - Keep status: `KEEP AS REFERENCE LIBRARY`.

## 3) Redundancy matrix (what repeats and where it should live)

| Redundant topic | Currently repeated in | Recommended single owner | Action recommendation |
|---|---|---|---|
| Baseline lock (colors/type/spacing) | `AGENTS.md`, `PROJECT_PRIME_DIRECTIVE_RULES.md`, `COMPLIANCE_EXECUTION_PLAN.md` | `PROJECT_PRIME_DIRECTIVE_RULES.md` | Keep detailed law in master; other docs only link/reference |
| Typography role-color minimum (`P-VIIIe`) | `AGENTS.md`, `BAND_RHYTHM_AND_CONTRAST.md`, `PROJECT_PRIME_DIRECTIVE_RULES.md`, multiple audits | `PROJECT_PRIME_DIRECTIVE_RULES.md` + short implementation rule in `BAND_RHYTHM_AND_CONTRAST.md` | Keep canonical definition once; keep concise practical checklist in band doc |
| Band rhythm prohibition / separators | `AGENTS.md`, `BAND_RHYTHM_AND_CONTRAST.md`, audits | `BAND_RHYTHM_AND_CONTRAST.md` | Treat AGENTS line as quick pointer only |
| Candidate guardrails | `BAND_RHYTHM_AND_CONTRAST.md`, audit reports | `BAND_RHYTHM_AND_CONTRAST.md` | Reports should cite, not restate full guardrails |
| Rule indices and status snippets | `PROJECT_PRIME_DIRECTIVE_RULES.md`, `COMPLIANCE_EXECUTION_PLAN.md`, `PRIME_DIRECTIVE_LINE_AUDIT.md` | `PROJECT_PRIME_DIRECTIVE_RULES.md` (index), `COMPLIANCE_EXECUTION_PLAN.md` (status workflow) | Keep index in master, matrix in playbook; audit file becomes evidence-only |

## 4) Conflict map (contradictions and resolution order)

### Conflict A: UI kit prohibition vs new direction

- Historic rule: no prefab UI kits (`P-IIc`/legacy statements).
- New direction captured in plan log: UI kit will replace baseline for production foundation.
- Resolution recommendation:
  - Add a dated governance amendment section in the future master stating:
    - Phase 1/lab rules prohibited UI kits,
    - Phase 2 production policy is explicitly amended by stakeholder approval.
  - Do not silently override old text.

### Conflict B: white canvas baseline wording

- Exhaustive text references `#FFFFFF`.
- Implemented baseline lock uses `#fafafa`.
- Resolution recommendation:
  - Keep existing explicit baseline exception pattern (already present),
  - Ensure all process docs reference that exception, not restate competing defaults.

### Conflict C: phase gate strictness vs active secondary routes

- Zero-creation wording conflicts with existing route expansion and trial routes.
- Resolution recommendation:
  - Preserve as documented exception model:
    - governance text remains,
    - project state tracked as exception with rationale in playbook/audits.

### Conflict D: normative content mixed into evidence reports

- Multiple audit docs repeat and mutate rule text.
- Resolution recommendation:
  - enforce rule: evidence docs may cite rule IDs and short snippets only; no full normative restatement.

## 5) Quality flags from line-by-line review

- `docs/SEQUENCE_HIERARCHY_TRIAL_RULE_AUDIT_2026-04-25.md` contains two stacked audit versions in the same file (duplicate top-level title/sections).  
  Recommendation: normalize in a later cleanup pass (approval required before editing if treated as historical artifact).

- `docs/SECTION_RITUAL_LEDGER.md` contains both preserve/reject ritual data and broad operational audit changelog entries.  
  Recommendation: keep as evidence ledger, avoid using it as rule source.

## 6) Proposed one-document master structure (outline only)

This is the proposed structure for a future single master rule doc (not implemented in this pass):

1. **Scope and authority**
   - document precedence and binding scope
2. **Normative directives**
   - governance, composition, typography, rhythm, SEO, interaction, performance
3. **Token/baseline lock**
   - canonical color/type/spacing lock and exception handling
4. **Rule index**
   - P-/D-/B- crosswalk
5. **Amendments log**
   - dated approved overrides (for example UI-kit policy shift)
6. **Cross-reference pointers**
   - links to playbook and evidence logs
7. **Appendices**
   - source provenance text where required

## 7) Recommended governance precedence

1. Master Rules (normative law)
2. Compliance Execution Playbook (method + matrix)
3. Audit Evidence Reports (dated proof)
4. Transition/Migration Docs (temporary operational notes)
5. Design References (structure inspiration only)

## 8) Safe cleanup list (approval required before any action)

No deletions recommended at this stage.

Potential future archive candidates after canonicalization:
- `docs/PRIME_DIRECTIVE_LINE_AUDIT.md` (if matrix content is fully represented in playbook + dated audits)
- `docs/TAGGED_SECTION_COMPLIANCE_REPORT.md` (if retained in a central audit index)
- redundant sections inside `docs/SEQUENCE_HIERARCHY_TRIAL_RULE_AUDIT_2026-04-25.md` (duplicate version block only)

All archive/delete operations require explicit approval.

## 9) Next implementation steps (post-approval)

1. Approve governance precedence and master outline.
2. Approve canonical owners for each repeated topic.
3. Approve file-by-file merge targets (no delete yet).
4. Execute merge pass into one master rules doc.
5. Normalize evidence docs to citation-only rule references.
6. Propose archive list and request explicit approval before any delete.
