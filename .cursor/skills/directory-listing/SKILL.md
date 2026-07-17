# Directory Listing Agent — GLC Local SEO

Use this skill when the user asks to submit, complete, or verify **directory listings** or **local citations** for Ground Level Contracting (GLC).

## Source of truth

- NAP: [`lib/site/nap.ts`](../../lib/site/nap.ts)
- Registry: [`scripts/local-seo/directories.ts`](../../scripts/local-seo/directories.ts) (~161 targets = core + 150-list expansion)
- Expansion list: [`scripts/local-seo/citation-targets-150.ts`](../../scripts/local-seo/citation-targets-150.ts)
- Tracker: [`seo/listings-tracker.csv`](../../seo/listings-tracker.csv)

## Preferred path: Cursor Automation (not human CLI)

Daily automation should:

```bash
npx tsx scripts/local-seo/seed-citation-queue.ts
npx tsx scripts/seo-daily-digest.ts
npx tsx scripts/local-seo/citation-batch.ts --limit=3
```

Then for each batch item, open the signup URL with browser tools, fill NAP from `seo/next-listing.json`, upload hero image when possible, and stop only for login / CAPTCHA / payment.

Instructions: [`docs/cursor-daily-seo-automation.md`](../../docs/cursor-daily-seo-automation.md)

## Fallback local commands

```bash
npm run seo:seed-citations
npm run seo:citation-batch -- --limit=3
npm run seo:listing-worker -- --id=barrie-chamber --headed
npm run seo:verify-listings -- --id=<id>
```

## NAP rules (non-negotiable)

| Field | Value |
|-------|-------|
| Business name | Ground Level Contracting |
| Phone | (705) 619-4902 |
| Email | groundlevelcontracting@outlook.com |
| Website | https://groundlevelcontracting.ca |
| Address | PO BOX 193 STN Main, Barrie, ON L4M 4T2 |

## Blockers

CAPTCHA, 2FA, chamber membership payment, GBP verification — set tracker `status=blocked` and note in `agent_notes`. Continue other pending citations in the same run.
