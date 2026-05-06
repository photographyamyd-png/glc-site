# DNA merge preparation (Lane A vs Lane B)

Use this when you are ready to **promote** chosen work and **delete** the sandbox.

## Before merge (comparison phase)

- Lane B styles load only via `components/glc-dna/GlcDnaLaneStyles.tsx` (client); do not add Lane B CSS to `app/layout.tsx` or `app/globals.css`.
- If you edit the **unscoped** source `app/glc-dna-extracted.css`, regenerate the scoped bundle:

  `npm run scope:glc-dna`

- Keep a **decision log** (table or sheet): for each slice (hero, stats, services grid, …), record the winner (Lane A, Lane B, or hybrid), canonical component path after merge, and a one-line rationale.

## Merge order

1. Tokens (only into `globals.css` with explicit baseline / sign-off where your project locks colors, typography, or spacing).
2. Components (single canonical implementation; retire the duplicate).
3. Content (one JSON or TS source per section).
4. Anchors and routes (one owner per public `id`; service URLs aligned with `app/services/`).

## Purge checklist (after merge)

- Remove `<GLCDnaSandbox />` from `app/page.tsx`.
- Delete `components/glc-dna/` except anything you moved into canonical paths.
- Delete `app/glc-dna-extracted.css` if you no longer need the unscoped source, plus `scripts/scope-glc-dna-css.cjs` and the `scope:glc-dna` script if unused.
- Remove `lib/glc-dna/` when nothing imports it.
- Grep for `glc-dna`, `GLCDnaSandbox`, `GlcDnaLaneStyles`.
- Run `npm run lint` and `npm run build`.
