# Delete When Launching Manifest

Date: 2026-04-25

This file tracks items moved into launch-hold staging folders instead of hard deletion.

## Reason categories

- `unused`: currently unreferenced by app/runtime flows.
- `duplicate`: superseded by canonical equivalent.
- `obsolete-trial`: experimental/trial-only artifact not needed in live build path.
- `launch-only-artifact`: planning/reporting artifact retained temporarily for traceability.

## Moved items

| Original path | New path | Reason | Confidence |
|---|---|---|---|
| `components/lab` | `delete-when-launching/root-audit/components/lab` | `unused` (no active imports in current `app/page.tsx` architecture) | High |
| `public/Drainage and Hardscaping Meta4q/*` | `public/images/services/Drainage-and-Hardscaping/*` | `launch-only-artifact` (asset structure normalization under one `public/images` tree) | High |
| `public/brand/Excavation Page/*` | `public/images/services/Excavation/*` | `launch-only-artifact` (service image normalization) | High |
| `public/images/motifs/*` | `public/images/Accents-and-Motifs/*` | `launch-only-artifact` (motif organization) | High |
| `public/brand/*` (logo files) | `public/images/Logos/*` | `launch-only-artifact` (logo centralization) | High |

## Runtime/generated review policy (not moved)

- Runtime/generated folders are reviewed but not staged here as source cleanup:
  - `.next`
  - `node_modules`
  - future transient folders: `coverage`, `out`, `build`, `.vercel`
- Policy:
  - keep ignored by git
  - clean with tool/runtime workflows when needed
  - do not treat as archival source files

## Reviewed and kept (for now)

| Path | Why kept |
|---|---|
| `app/sandbox/page.tsx` | Active review/staging route retained until launch cleanup. |
| `app/sequence-trial/page.tsx` | Active trial route retained for review and comparison. |
| `components/ground-level/home-review-candidates/*` | Still rendered by current homepage triage route. |
| `.cursor/plans/*.plan.md` | Planning artifacts do not affect build output; retained for traceability. |
| Root PDFs/images (`Master_Project_Bible.pdf`, `Cursor_Initialization_Directive.pdf`, root PNGs) | Referenced as process/source artifacts; not runtime-critical but intentionally preserved for now. |

## Image rename mapping

| Original filename | New filename | Destination |
|---|---|---|
| Batch mapping logged | See `delete-when-launching/image-move-map.csv` | `public/images/services/*`, `public/images/Logos/*` |
