# Codebase Hygiene Execution

This document captures the implemented hygiene pass from the approved discovery plan.

## 1) Baseline Health Audit (Read-only Results)

- `npm run lint`: pass.
- `npx tsc --noEmit`: pass.
- `npm audit --omit=dev`: reports 2 moderate vulnerabilities inherited through Next.js transitive `postcss`.
- `npm outdated`: minor/major updates available (`react`, `react-dom`, `typescript`, `eslint`, etc.).
- `npx depcheck`: flagged `lucide-react` and `shadcn` as unused runtime dependencies.

## 2) Content Readiness Inventory

### Findings

- Canonical TODO placeholder was present in [`lib/site/copy.ts`](../lib/site/copy.ts) under `SERVICE_DETAILS.snow-removal.extra.snowHub.faqLongFormTodo`.

### Implemented

- Replaced TODO placeholder text with production-safe copy so unresolved placeholder tokens are no longer shipped in the canonical service content model.

## 3) Config and Dependency Deltas

### Implemented

- Removed unused dependencies from runtime:
  - `lucide-react`
  - `shadcn`
- Added explicit package manager intent in [`package.json`](../package.json):
  - `"packageManager": "npm@11.9.0"`
- Added test scripts in [`package.json`](../package.json):
  - `test`
  - `test:watch`
- Expanded lint scope by removing `scripts/**` from global ignores in [`eslint.config.mjs`](../eslint.config.mjs).

### Notes

- `app/glc-dna-extracted.css` remains intentionally retained as generator input for `scripts/scope-glc-dna-css.cjs` and is referenced in [`docs/DNA_MERGE_PREP.md`](./DNA_MERGE_PREP.md).
- Prettier is still intentionally not introduced in this pass; formatting remains ESLint/TypeScript-driven.

## 4) Structural Refactor Map (Execution-Oriented)

### `app/page.tsx`

- Extract additional section wrappers incrementally into `components/home/*` (services grid, why/process band pair, coverage, testimonials, CTA band).
- Keep page file as orchestration-only composition layer.

### `components/templates/ServicePageTemplate.tsx`

- Split by section blocks:
  - `ServiceOverviewSection`
  - `ServiceScopeSection`
  - `ServiceCapabilitiesSection`
  - `ServiceProcessSection`
  - `ServiceFaqSection`
  - `ServiceRelatedSection`
  - `ServiceSnowModulesSection`
  - `ServiceRequestSiteVisitSection`
- Preserve current route-level behavior and data signatures.

### `lib/site/copy.ts`

- Split into stable modules while preserving exports:
  - `lib/site/copy/home.ts`
  - `lib/site/copy/services.ts`
  - `lib/site/copy/nav.ts`
  - `lib/site/copy/locations.ts`
  - `lib/site/copy/index.ts` (facade re-export for compatibility)

### Implemented Partial Refactor

- Added reusable card primitive [`components/ui/CardSurface.tsx`](../components/ui/CardSurface.tsx).
- Replaced repeated card surface classes in:
  - [`app/page.tsx`](../app/page.tsx)
  - [`components/templates/ServicePageTemplate.tsx`](../components/templates/ServicePageTemplate.tsx)

## 5) Test Foundation Scope and Implementation

### Minimal Matrix

- Content integrity tests:
  - No unresolved placeholder tokens in canonical copy structures.
- Registry integrity tests:
  - Every primary service slug has a service detail mapping.
  - Every snow sub-service points to a valid snow-hub anchor path.

### Implemented

- Added Vitest harness:
  - [`vitest.config.ts`](../vitest.config.ts)
  - [`vitest.setup.ts`](../vitest.setup.ts)
- Added first-party tests:
  - [`lib/site/copy.test.ts`](../lib/site/copy.test.ts)
  - [`lib/site/registry.test.ts`](../lib/site/registry.test.ts)

## 6) Experimental Surface Policy

### Policy

- Non-production environments: experimental routes may stay enabled.
- Production: experimental routes must be explicitly enabled with `ENABLE_EXPERIMENTAL_ROUTES=true`.

### Implemented

- Added production guardrails using `notFound()` in:
  - [`app/sandbox/page.tsx`](../app/sandbox/page.tsx)
  - [`app/sequence-trial/page.tsx`](../app/sequence-trial/page.tsx)

This keeps routes available for dev/staging while preventing accidental production exposure by default.
