# Phase 3 — Google Search Console metrics

## Goal
Replace generic “check Search Console” reminders with real numbers in the daily digest.

## What it replaces from Semrush
- Search performance snapshots
- Low-CTR page lists (partial)
- Indexing/coverage alerts (partial)

## Prerequisites
- Search Console API enabled in Google Cloud
- Service account or OAuth with access to `https://groundlevelcontracting.ca/`
- Property URL verified (already is on live site)

## Metrics to pull daily
| Metric | Use |
|--------|-----|
| Clicks / impressions / CTR / position (7d vs prior 7d) | Trend line in Slack |
| Top queries | Spot-check rank terms vs manual list |
| Top pages | Prioritize metadata rewrites |
| Coverage / indexing errors | Engineering follow-up |

## Implementation steps
1. Add `scripts/seo-search-console-report.ts` using Search Analytics API
2. Cache last run in `seo/gsc-snapshot.json` for deltas
3. Merge summary into daily digest “Measured Search Console” section
4. Flag priority money pages from [scripts/local-seo/daily-digest-report.ts](../scripts/local-seo/daily-digest-report.ts) if impressions drop

## Not in scope
- Full Semrush keyword gap analysis
- Competitor SERP tracking without a paid API

## Cursor Automation
Same daily cron as digest; no browser required; read-only API calls only.
