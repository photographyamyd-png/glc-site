# Phase 2 — Google Business Profile automation

## Goal
Pull real GBP signals into the daily digest and draft (later publish) Business Profile updates.

## What it replaces from Semrush
- Manual “post an update this week” reminders
- Review response task lists (partial — drafts first)

## Prerequisites
- Google Cloud project with Business Profile APIs enabled
- OAuth consent + refresh token for the account that owns the profile
- Location ID for Ground Level Contracting
- Secrets stored outside the repo (Cursor Automation env / Vercel — not committed)

## Phase 2A — Read-only (build first)
1. Fetch unreplied reviews → daily Slack section “Reviews needing reply”
2. Fetch profile fields (hours, phone, website) → flag drift vs [lib/site/nap.ts](../lib/site/nap.ts)
3. Fetch last post date → remind if older than 7 days

## Phase 2B — Draft posts
1. Generate GBP post from seasonal/service templates (no auto-publish)
2. Include project photo URL from [lib/site/nap.ts](../lib/site/nap.ts) listing images
3. Human approves in Slack before publish

## Phase 2C — Auto-publish (only after 2+ weeks of good drafts)
- Publish approved posts via API
- Guardrails: policy-safe copy only, no phone/URL spam in description field

## Script placeholders (future)
- `scripts/seo-gbp-reviews.ts`
- `scripts/seo-gbp-draft-post.ts`
- Merge into [scripts/local-seo/daily-digest-report.ts](../scripts/local-seo/daily-digest-report.ts)

## Cursor Automation
Cron agent runs read-only scripts daily; draft posts on weekdays only; never auto-publish until explicitly enabled.
