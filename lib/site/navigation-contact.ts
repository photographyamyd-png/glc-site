import type { NavigationConfig } from "@/content/types";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site/site-contact";

/** Overlay header/nav phone fields from site.json so navigation.json cannot drift. */
export function applySiteContactToNavigation(nav: NavigationConfig): NavigationConfig {
  return {
    ...nav,
    utility: {
      ...nav.utility,
      phoneDisplay: SITE_PHONE_DISPLAY,
      phoneHref: SITE_PHONE_TEL,
    },
    companyMega: {
      ...nav.companyMega,
      dispatchBand: {
        ...nav.companyMega.dispatchBand,
        phoneDisplay: SITE_PHONE_DISPLAY,
        phoneHref: SITE_PHONE_TEL,
      },
    },
  };
}
