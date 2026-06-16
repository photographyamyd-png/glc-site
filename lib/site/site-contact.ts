import type { SiteConfig } from "@/content/types";
import site from "@/content/site.json";

const SITE = site as SiteConfig;

/** Primary business line — single source from content/site.json. */
export const SITE_PHONE_DISPLAY = SITE.telephoneDisplay;
export const SITE_PHONE_TEL = `tel:${SITE.telephone}` as const;
export const SITE_EMAIL = SITE.email;
export const SITE_EMAIL_MAILTO = `mailto:${SITE.email}` as const;

export function getSiteOwners(): SiteConfig["owners"] {
  return SITE.owners.map((owner) => ({ ...owner }));
}

export type OwnerPhoneCta = {
  firstName: string;
  display: string;
  href: string;
};

/** Co-owner direct lines for dispatch CTAs (order matches site.json owners). */
export function getOwnerPhoneCtas(): OwnerPhoneCta[] {
  return getSiteOwners().map((owner) => ({
    firstName: owner.name.split(" ")[0] ?? owner.name,
    display: owner.telephoneDisplay,
    href: `tel:${owner.telephone}`,
  }));
}
