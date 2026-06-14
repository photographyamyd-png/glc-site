import { GoogleAnalytics } from "@next/third-parties/google";
import { getGa4MeasurementId, isGa4Enabled } from "@/lib/site/analytics-env";

/** GA4 pageviews — production only when NEXT_PUBLIC_GA4_MEASUREMENT_ID is set. */
export function GlcGoogleAnalytics() {
  if (!isGa4Enabled()) return null;

  const gaId = getGa4MeasurementId();
  if (!gaId) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
