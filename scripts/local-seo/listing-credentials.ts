/**
 * Account-creation credentials for directory signup flows.
 * NEVER commit real passwords — set these in Cursor Automation / Cloud Agent secrets.
 *
 * LISTING_SIGNUP_PASSWORD must be a unique directory-only password.
 * Do NOT reuse the real Gmail password or GMAIL_APP_PASSWORD — this value is typed into third-party sites.
 */
export type ListingSignupCredentials = {
  email: string;
  password: string;
};

export function getListingSignupCredentials(): ListingSignupCredentials | null {
  const email = process.env.LISTING_SIGNUP_EMAIL?.trim() ?? "";
  const password = process.env.LISTING_SIGNUP_PASSWORD?.trim() ?? "";
  if (!email || !password) return null;
  return { email, password };
}

export function getListingSignupEmailOrFallback(businessEmail: string): string {
  return process.env.LISTING_SIGNUP_EMAIL?.trim() || businessEmail;
}
