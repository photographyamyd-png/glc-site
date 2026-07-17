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
npx tsx scripts/local-seo/citation-batch.ts --limit=1
```

Work **one listing at a time**. Prefer any `awaiting_human` row first (batch already does). Open the signup URL, fill NAP from `seo/next-listing.json`, upload hero image when possible.

On CAPTCHA / OTP / verify-human: mark `awaiting_human`, Slack for help, **stop and wait** — do **not** hop to the next site.

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

## Blockers vs pauses

| Situation | Tracker status | Next action |
|-----------|----------------|-------------|
| CAPTCHA / email OTP / SMS / verify-human | `awaiting_human` | Slack human → wait for CONTINUE → **same listing** |
| Paid membership required / permanently broken | `blocked` | Only then move on |
| Submitted / live | `submitted` / `live` | Next listing with `--limit=1` |

```bash
npm run seo:listing-worker -- --id=<id> --mark-awaiting-human --note="CAPTCHA"
```

Never treat first-hit CAPTCHA as `blocked`. Never abandon mid-verify to start another directory.
