# Cursor Daily SEO Automation Draft

## Name
Daily SEO Digest

## Description
Weekday morning SEO briefing for Ground Level Contracting. Runs the daily digest and posts a short Slack/Linear summary.

## Trigger
- Schedule: Weekdays at 8:00 AM

## Repo Scope
- Repository: photographyamyd-png/glc-site
- Branch: main

## Tools
- Slack
- Linear

## Agent instructions (paste this exactly)

You are running the daily SEO operations pass for Ground Level Contracting.

IMPORTANT:
- Repo must be photographyamyd-png/glc-site
- Branch must be main
- Do NOT conclude the digest is missing just by guessing. Check files first.

Steps:
1. Confirm you are in the repo root.
2. Print these diagnostics before running anything else:
   - git rev-parse --short HEAD
   - git branch --show-current
   - ls scripts/seo-daily-digest.ts scripts/local-seo/daily-digest-report.ts
   - node -e "const p=require('./package.json'); console.log(p.scripts['seo:daily-digest'] || 'SCRIPT_KEY_MISSING')"
3. Run the digest with this exact command (preferred):
   npx tsx scripts/seo-daily-digest.ts
   Fallback if needed:
   npm run seo:daily-digest
4. Use the command output as the source of truth.

Then:
5. Post a concise Slack summary with:
   - Technical health issues needing same-day attention
   - Priority URLs that returned a non-200 response
   - Next directory listing actions from the tracker
   - Next backlink / outreach actions from the tracker
   - Manual Google actions for today (reviews, GBP hygiene, Search Console)
   - A short suggested focus for today
6. If Linear is connected, create or update one Linear issue titled "Daily SEO Digest - YYYY-MM-DD" with the same summary.

Rules:
- Only report failure if the digest command itself fails, or if scripts/seo-daily-digest.ts is actually missing from the checkout.
- If package.json is confusing but scripts/seo-daily-digest.ts exists, still run npx tsx scripts/seo-daily-digest.ts.
- Do NOT invent Google Search Console, Google Business Profile, Semrush, or Ahrefs numbers that are not in the digest output.
- Treat any Not Yet Automated section as a limitation note, not a failure.
- Keep the Slack message readable for a non-technical operator.
