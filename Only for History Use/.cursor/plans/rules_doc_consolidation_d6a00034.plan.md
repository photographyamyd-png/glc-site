---
name: Rules Doc Consolidation
overview: Produce a report-only consolidation audit that maps every current design/rules/process doc to a single proposed Source-of-Truth structure, with explicit keep/merge/archive recommendations and zero deletions.
todos:
  - id: classify-docs
    content: Classify each existing doc as normative, process, evidence, or transitional and record primary purpose overlaps.
    status: completed
  - id: map-duplicates-conflicts
    content: Build redundancy and conflict maps with keep/merge/archive recommendations and explicit rationale.
    status: completed
  - id: draft-master-outline
    content: Draft proposed single master Source-of-Truth structure and governance precedence order.
    status: completed
  - id: produce-report-only-artifact
    content: Create a report-only consolidation markdown file with approval-gated cleanup actions (no deletions).
    status: completed
isProject: false
---

# Report-Only Rules Consolidation Plan

## Objective
Create a complete consolidation report (no file merge yet) that shows how to reduce the current brainstorming/rule docs into one operational master Source-of-Truth for rules/design/process, while preserving provenance and avoiding accidental loss.

## Audited Inputs (read)
- Core governance/rules: [AGENTS.md](c:/Users/hutch/OneDrive/Desktop/Testing from Scratch/AGENTS.md), [docs/PROJECT_PRIME_DIRECTIVE_RULES.md](c:/Users/hutch/OneDrive/Desktop/Testing from Scratch/docs/PROJECT_PRIME_DIRECTIVE_RULES.md), [docs/BAND_RHYTHM_AND_CONTRAST.md](c:/Users/hutch/OneDrive/Desktop/Testing from Scratch/docs/BAND_RHYTHM_AND_CONTRAST.md), [docs/COMPLIANCE_EXECUTION_PLAN.md](c:/Users/hutch/OneDrive/Desktop/Testing from Scratch/docs/COMPLIANCE_EXECUTION_PLAN.md)
- Audit/ledger/process logs: [docs/SECTION_RITUAL_LEDGER.md](c:/Users/hutch/OneDrive/Desktop/Testing from Scratch/docs/SECTION_RITUAL_LEDGER.md), [docs/FULL_HOME_SANDBOX_RULE_REAUDIT_2026-04-25.md](c:/Users/hutch/OneDrive/Desktop/Testing from Scratch/docs/FULL_HOME_SANDBOX_RULE_REAUDIT_2026-04-25.md), [docs/HERO_ENTRY_VARIATIONS_RULE_AUDIT.md](c:/Users/hutch/OneDrive/Desktop/Testing from Scratch/docs/HERO_ENTRY_VARIATIONS_RULE_AUDIT.md), [docs/SEQUENCE_HIERARCHY_TRIAL_RULE_AUDIT_2026-04-25.md](c:/Users/hutch/OneDrive/Desktop/Testing from Scratch/docs/SEQUENCE_HIERARCHY_TRIAL_RULE_AUDIT_2026-04-25.md), [docs/TAGGED_SECTION_COMPLIANCE_REPORT.md](c:/Users/hutch/OneDrive/Desktop/Testing from Scratch/docs/TAGGED_SECTION_COMPLIANCE_REPORT.md), [docs/PRIME_DIRECTIVE_LINE_AUDIT.md](c:/Users/hutch/OneDrive/Desktop/Testing from Scratch/docs/PRIME_DIRECTIVE_LINE_AUDIT.md), [docs/DNA_MERGE_PREP.md](c:/Users/hutch/OneDrive/Desktop/Testing from Scratch/docs/DNA_MERGE_PREP.md), [docs/PHASE2_PRODUCTIONIZATION_PLAN_LOG_2026-04-25.md](c:/Users/hutch/OneDrive/Desktop/Testing from Scratch/docs/PHASE2_PRODUCTIONIZATION_PLAN_LOG_2026-04-25.md)

## What the report will contain
- A line-item purpose map for each doc:
  - keep as canonical rule source
  - merge into canonical source
  - retain as historical audit evidence
  - archive candidate (no deletion)
- A redundancy matrix showing duplicate rule statements (for example: typography color-purpose rule repeated in multiple docs) and where each duplicate should live.
- A conflict matrix showing contradictory directives and proposed governance resolution order.
- A proposed one-document master structure (headings + section responsibilities only) without modifying source files yet.
- A “safe cleanup list” of files that are operationally redundant after canonicalization, explicitly marked "approval required before archive/delete".

## Key findings already identified to include in report
- Rule duplication across multiple docs for baseline lock, band rhythm, and `P-VIIIe` typography-role constraints.
- Process/audit evidence mixed into normative rule docs, making source-of-truth boundaries unclear.
- At least one audit file has duplicate stacked content sections (sequence trial audit appears to contain two versions in one file), which should be flagged for normalization in the later implementation pass.
- Strategic direction changed from “no UI kit” to “UI kit replaces baseline for production foundation”; this requires explicit versioned governance note to prevent future conflict with older constraints.

## Proposed canonical governance order (for report recommendation)
1. Master Rules Doc (normative law only)
2. Compliance Execution Playbook (workflow + pass/fail method)
3. Audit Evidence Logs (dated reports only)
4. Migration/transition notes (phase-specific, non-normative)

## Output artifact for this pass
- One new report markdown file under `docs/` that contains:
  - full consolidation map
  - recommended master outline
  - explicit no-delete recommendations pending approval
  - exact next implementation steps once approved

## Approval gates after report delivery
- Gate 1: approve master outline and governance precedence.
- Gate 2: approve exact merge targets and archive candidates.
- Gate 3: approve any deletions (none performed without explicit go-ahead).