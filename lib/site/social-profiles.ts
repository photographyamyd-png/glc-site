/** Free social / GBP URLs for LocalBusiness `sameAs` — set via env in production. */

export function getSocialProfileUrls(): string[] {
  const urls: string[] = [];
  const gbp = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL?.trim();
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_URL?.trim();
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_PAGE_URL?.trim();
  if (gbp) urls.push(gbp);
  if (facebook) urls.push(facebook);
  if (linkedin) urls.push(linkedin);
  return urls;
}
