/**
 * Optional public env for Google Analytics 4.
 * NEXT_PUBLIC_* vars are inlined at build time.
 */
export function getGa4MeasurementId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim();
  return id?.startsWith("G-") ? id : undefined;
}

export function isGa4Enabled(): boolean {
  return process.env.NODE_ENV === "production" && !!getGa4MeasurementId();
}
