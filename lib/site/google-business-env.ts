/**
 * Optional public env for Google Business / reviews UI (drainage trust section).
 * NEXT_PUBLIC_* vars are inlined at build time.
 */
export function getGoogleReviewScoreDisplay(): string | undefined {
  const v = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_SCORE?.trim();
  return v || undefined;
}

export function getGoogleReviewCountDisplay(): string | undefined {
  const v = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT?.trim();
  return v || undefined;
}

/** Replace [Rating] / [Count] tokens from stakeholder copy when env is set. */
export function substituteGoogleReviewPlaceholders(text: string): string {
  let t = text;
  const score = getGoogleReviewScoreDisplay();
  const count = getGoogleReviewCountDisplay();
  if (score) t = t.replace(/\[Rating\]/g, score);
  if (count) t = t.replace(/\[Count\]/g, count);
  return t;
}
