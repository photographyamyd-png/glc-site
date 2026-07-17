# Gmail confirmation emails for directory signups

Most directories email a “confirm your email” link. The citation automation can open those links itself via Gmail IMAP.

## One-time setup (you)

1. Use the same Gmail as `LISTING_SIGNUP_EMAIL` (e.g. Photographyamyd@gmail.com).
2. Turn on **2-Step Verification** for that Google account.
3. Create an **App Password**:
   - Google Account → Security → App passwords
   - App: **Mail** → Generate
   - Copy the 16-character password (spaces are fine)
4. In **Cursor → Cloud Agents → Secrets**, add:
   - `GMAIL_IMAP_USER` = that Gmail address (optional if it matches `LISTING_SIGNUP_EMAIL`)
   - `GMAIL_APP_PASSWORD` = the 16-character app password
5. Keep `LISTING_SIGNUP_EMAIL` / `LISTING_SIGNUP_PASSWORD` as they are for site Create Account forms.

Never paste the app password into chat or commit it.

## What the agent runs

```bash
npx tsx scripts/local-seo/gmail-confirm.ts --wait=180 --from=<directory-domain>
```

It prints JSON with `openFirstLink`. The agent opens that URL in the browser and continues the same listing.

## Notes

- Confirmation emails sometimes land in **Spam** — if poll returns `not_found`, check Spam once in Gmail and mark Not spam for that sender.
- CAPTCHA / SMS still need a human; email confirm is what this unlocks.
- App passwords only work with 2-Step Verification on.
