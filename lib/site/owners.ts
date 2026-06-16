import type { SiteConfig } from "@/content/types";
import site from "@/content/site.json";

const SITE = site as SiteConfig;

export type OwnerContact = {
  name: string;
  title: string;
  telephone: string;
  telephoneDisplay: string;
};

export function getOwners(): OwnerContact[] {
  return SITE.owners.map((owner) => ({ ...owner }));
}

/** Names joined for outreach signatures and guides. */
export function getOwnerNamesJoined(separator = " & "): string {
  return getOwners()
    .map((o) => o.name)
    .join(separator);
}

export function getOwnerPhonesJoined(separator = " | "): string {
  return getOwners()
    .map((o) => o.telephoneDisplay)
    .join(separator);
}

/** Single business inbox — never publish personal owner emails. */
export function getBusinessEmail(): string {
  return SITE.email;
}

/** Standard email sign-off block for directory and partner outreach. */
export function getOwnerOutreachSignature(): string {
  return `${getOwnerNamesJoined()}\nCo-Owners, ${SITE.legalName}\n${getOwnerPhonesJoined()}\n${getBusinessEmail()}`;
}
