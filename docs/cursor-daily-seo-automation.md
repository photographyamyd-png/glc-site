# Cursor Daily SEO Automation Draft

## Name
Daily SEO Digest

## Description
Run a weekday morning SEO operations pass for Ground Level Contracting, summarize technical health and local SEO queue status, and post the result to Slack.

## Trigger
- Schedule: Weekdays at 8:00 AM

## Repo Scope
- Repository: this repo
- Branch: current default branch for the repo

## Tools
- Slack

## Command
```bash
npm run seo:daily-digest
```

## Instructions
Run `npm run seo:daily-digest` in the repo and use the output as the primary source of truth.

Post a concise Slack digest with these sections:
1. Technical health issues that need same-day attention.
2. Priority URLs that returned a non-200 response.
3. The next directory listing actions from the tracker.
4. The next backlink and outreach actions from the tracker.
5. Manual Google actions for today, including review replies, GBP hygiene, and Search Console checks.
6. A short "Suggested focus for today" summary.

If the command fails, post a failure message that includes the error and asks for an engineering follow-up.
Do not invent Google Search Console, Google Business Profile, Semrush, or Ahrefs metrics that are not present in the digest output.
Treat the digest's "Not Yet Automated" section as a limitation note, not a failure.

## Slack Notes
- Select the destination channel in the Automations editor.
- Keep the message readable for a non-technical operator.
- Preserve markdown headings and bullets where possible.
