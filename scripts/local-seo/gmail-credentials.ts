/**
 * Gmail IMAP credentials for reading signup confirmation emails.
 * NEVER commit real passwords — set these in Cursor Cloud Agent secrets.
 *
 * Setup:
 * 1. Enable 2-Step Verification on the Google account
 * 2. Create an App Password: Google Account → Security → App passwords → Mail
 * 3. Secrets:
 *    - GMAIL_IMAP_USER (or reuse LISTING_SIGNUP_EMAIL)
 *    - GMAIL_APP_PASSWORD (16-char app password, spaces optional)
 */
export type GmailImapCredentials = {
  user: string;
  appPassword: string;
};

export function getGmailImapCredentials(): GmailImapCredentials | null {
  const user =
    process.env.GMAIL_IMAP_USER?.trim() ||
    process.env.LISTING_SIGNUP_EMAIL?.trim() ||
    "";
  const appPassword = (process.env.GMAIL_APP_PASSWORD ?? "").replace(/\s+/g, "");
  if (!user || !appPassword) return null;
  return { user, appPassword };
}
