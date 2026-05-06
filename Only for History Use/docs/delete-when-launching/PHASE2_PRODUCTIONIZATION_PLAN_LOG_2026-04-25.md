# Phase 2 Productionization Plan Log (2026-04-25)

## Purpose

Capture the current plan state before context-switching, so work can resume without losing architectural intent, constraints, or locked decisions.

## Current project state (confirmed)

- Existing lab work remains in place, including:
  - `app/page.tsx` (homepage triage/lab surface)
  - `app/sandbox/page.tsx` (approved/staging surface)
  - `app/sequence-trial/page.tsx` (page-hierarchy alternation trial route)
- Trial route includes 10 sequence sections with strict dark/light alternation and interactive mechanics.
- Lint and build were passing at last verification.

## Locked intent for next phase

Transition from section-lab iteration into a real website build:

- Real navigation
- Real route architecture
- Production IA
- Real service pages/templates
- Promotion pipeline from lab/sandbox into live routes

While doing this:

- Keep current lab routes/pages as inactive working surfaces (not removed yet).
- Delay deletion/cleanup until launch-readiness.

## Architecture policy decisions captured

### 1) Lab retention policy

- Keep `/` and `/sandbox` as working/non-live lab pages for now.
- Do not remove them until final launch cleanup.

### 2) UI kit policy update

- Previous baseline: no UI kit.
- Updated decision: **UI kit will replace baseline for production foundation**.

### 3) Planning timing

- Wait for incoming UI kit + motif/design-accent documentation.
- Then produce updated Phase 2 productionization plan aligned to those assets.

## Planned execution model once docs arrive

1. Map incoming UI kit primitives/components into production architecture.
2. Map motif/accent rules into tokens, component usage, and page-level rhythm rules.
3. Define live route tree and nav IA while preserving lab routes.
4. Build shared service-page system for production routes.
5. Define migration pathway from lab/sandbox sections into production pages.
6. Reserve final removal/cleanup of lab routes for launch phase only.

## Open decisions (to finalize after incoming docs)

- Live entry route strategy (e.g., `/site` vs promoting `/` later).
- Production top-level nav labels and exact IA.
- Service content sourcing mode (existing copy objects vs interim placeholders).
- Route visibility controls (`noindex`, nav exclusion, or both for lab routes).

## Resume checklist

When returning to this plan after diversion:

1. Ingest UI kit documentation.
2. Ingest motif/design accent documentation.
3. Reconcile any conflicts with existing project rule docs.
4. Publish revised Phase 2 implementation plan based on final constraints.
5. Start implementation only after plan confirmation.
