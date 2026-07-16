# Daily SEO Google Integration Phase Two

## Goal
Upgrade the daily SEO digest from a reminder-based workflow into a measured reporting workflow by connecting first-party Google data before any auto-publishing behavior is introduced.

## Phase 2A: Google Search Console API

### Outcome
Add real daily measurements for:
- clicks
- impressions
- CTR
- average position
- top queries
- top pages
- indexing or coverage deltas that can be reconciled against the existing priority URL list

### Required setup
- A Google Cloud project with the Search Console API enabled.
- Authentication that the automation can use safely.
- The production property for `https://groundlevelcontracting.ca/` verified in Search Console.
- Secret storage for Google credentials and property identifiers.

### Expected implementation
- Add a script such as `scripts/seo-search-console-report.ts` that fetches the last 1-7 days of Search Console performance data.
- Merge those metrics into `scripts/local-seo/daily-digest-report.ts` so the digest can report movement instead of generic reminders.
- Promote low-CTR pages and query opportunities into the digest's daily action queue.

## Phase 2B: Google Business Profile API

### Outcome
Add real daily measurements for:
- new reviews that need replies
- profile visibility and interaction trends when available
- post cadence tracking
- draft recommendations for the next Google Business Profile post

### Required setup
- A Google Cloud project with the Business Profile APIs enabled.
- OAuth credentials with access to the business account and location.
- Stable account and location identifiers for the live profile.
- Secret storage for OAuth client credentials and refresh tokens.

### Expected implementation
- Add a review fetcher that flags unreplied reviews in the daily digest.
- Add a lightweight profile report for business hours, website, and recent content hygiene.
- Generate a draft GBP post from current service, seasonal, or project data, but keep publishing manual until the data flow has proven reliable.

## Publishing Guardrail
Do not auto-publish Google Business Profile posts until all of the following are true:
- the draft content has been reviewed for policy compliance,
- the business account and location mapping have been validated,
- the automation has produced correct drafts for at least two weeks,
- and a human owner explicitly approves automatic posting.

## Optional Phase 2C: Third-Party Signals
Only add these if credentials and API access are available:
- Semrush site audit or AI-search readiness metrics
- Ahrefs or Semrush backlink health and toxicity signals
- PageSpeed Insights API measurements for key landing pages

If third-party APIs are unavailable, continue using repo-native checks plus manual review workflows.
