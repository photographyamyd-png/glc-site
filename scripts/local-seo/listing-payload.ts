/**
 * Shared listing payload builder for next-listing, Playwright auto-submit, and extension export.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  getGbpDescription,
  getGbpDescriptionMaxLength,
  getListingCategories,
  getListingDescriptions,
  getListingImageUrls,
  getMoneyPageLinks,
  getNap,
} from "@/lib/site/nap";
import { getSiteUrl } from "@/lib/site/metadata";
import {
  DIRECTORY_TARGETS,
  getDirectoryAutomationTier,
  withAutomationTier,
  type AutomationTier,
  type DirectoryTarget,
} from "./directories";
import { getPlatformSteps } from "./generate-submission-guide";
import { readTracker } from "./tracker";

export type ListingPayload = {
  id: string;
  platform: string;
  signupUrl: string;
  tier: number;
  loginRequired: boolean;
  estimatedMinutes: number;
  suggestedCategories: string[];
  automationTier: "playwright" | "manual" | "api";
  notes?: string;
  fieldMap: Record<string, string>;
  autofill: AutofillValues;
  steps: string[];
  images: string[];
  categories: string[];
  serviceAreas: string[];
  deepLinks: Array<{ label: string; url: string }>;
  trackerStatus: string;
};

/** Flat values for heuristic form matching (extension + Playwright). */
export type AutofillValues = {
  businessName: string;
  legalName: string;
  slogan: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  fullAddress: string;
  website: string;
  descriptionShort: string;
  descriptionMedium: string;
  descriptionLong: string;
  serviceAreas: string;
  primaryCategory: string;
};

export const NEXT_LISTING_JSON = join(process.cwd(), "seo", "next-listing.json");
export const EXTENSION_DATA_JSON = join(
  process.cwd(),
  "tools",
  "listing-autofill-extension",
  "listing-data.json",
);

export function buildFieldMap(id: string): Record<string, string> {
  const nap = getNap();
  const desc = getListingDescriptions();
  const gbpDesc = getGbpDescription();
  const gbpMax = getGbpDescriptionMaxLength();

  const base: Record<string, string> = {
    "Business name": nap.name,
    "Slogan / tagline": nap.slogan,
    "Legal name (if asked)": nap.legalName,
    Phone: nap.phone,
    Email: nap.email,
    "Street address": nap.street,
    City: nap.city,
    "Province / region": nap.region,
    "Postal code": nap.postalCode,
    Country: nap.country,
    "Full address (single line)": nap.fullAddress,
    Website: nap.website,
    "Short description (~150 chars)": desc.short,
    "Medium description (~300 chars)": desc.medium,
    "Long description (~500 chars)": desc.long,
    "Service areas": nap.areaServed.join(", "),
  };

  if (id === "gbp") {
    base[`Business description (max ${gbpMax} chars — GBP only)`] = gbpDesc;
  }

  return base;
}

export function buildAutofillValues(target: DirectoryTarget): AutofillValues {
  const nap = getNap();
  const desc = getListingDescriptions();

  return {
    businessName: nap.name,
    legalName: nap.legalName,
    slogan: nap.slogan,
    phone: nap.phone,
    email: nap.email,
    street: nap.street,
    city: nap.city,
    region: nap.region,
    postalCode: nap.postalCode,
    country: nap.country,
    fullAddress: nap.fullAddress,
    website: nap.website,
    descriptionShort: desc.short,
    descriptionMedium: desc.medium,
    descriptionLong: desc.long,
    serviceAreas: nap.areaServed.join(", "),
    primaryCategory: target.suggestedCategories[0] ?? "Excavating contractor",
  };
}

export function pickTarget(
  id?: string,
  tier?: number,
  automationTier?: "playwright" | "manual",
): { target: DirectoryTarget & { automationTier: AutomationTier }; trackerStatus: string } | null {
  const rows = readTracker();

  if (id) {
    const target = DIRECTORY_TARGETS.find((d) => d.id === id);
    if (!target) return null;
    const row = rows.find((r) => r.id === id);
    return { target: withAutomationTier(target), trackerStatus: row?.status ?? "unknown" };
  }

  const pendingIds = new Set(
    rows.filter((r) => r.type === "directory" && r.status === "pending").map((r) => r.id),
  );

  const candidates = DIRECTORY_TARGETS.filter((d) => {
    if (!pendingIds.has(d.id)) return false;
    if (tier !== undefined && d.tier !== tier) return false;
    if (automationTier !== undefined && getDirectoryAutomationTier(d.id) !== automationTier) {
      return false;
    }
    return true;
  })
    .map(withAutomationTier)
    .sort((a, b) => a.tier - b.tier);

  if (candidates.length === 0) return null;

  const target = candidates[0];
  return { target, trackerStatus: "pending" };
}

export function buildPayload(
  target: DirectoryTarget & { automationTier?: AutomationTier },
  trackerStatus: string,
): ListingPayload {
  const nap = getNap();
  const siteUrl = getSiteUrl();
  const images = getListingImageUrls();
  const links = getMoneyPageLinks();

  return {
    id: target.id,
    platform: target.platform,
    signupUrl: target.signupUrl,
    tier: target.tier,
    loginRequired: target.loginRequired,
    estimatedMinutes: target.estimatedMinutes,
    suggestedCategories: target.suggestedCategories,
    automationTier: target.automationTier ?? getDirectoryAutomationTier(target.id),
    notes: target.notes,
    fieldMap: buildFieldMap(target.id),
    autofill: buildAutofillValues(target),
    steps: getPlatformSteps(target.id, nap),
    images: [images.hero, images.logo],
    categories: getListingCategories(),
    serviceAreas: nap.areaServed,
    deepLinks: links.map((l) => ({
      label: l.label,
      url: `${siteUrl}${l.path === "/" ? "/" : l.path}`,
    })),
    trackerStatus,
  };
}

export function writeListingJson(payload: ListingPayload): void {
  const json = JSON.stringify(payload, null, 2);
  writeFileSync(NEXT_LISTING_JSON, json);
  writeFileSync(EXTENSION_DATA_JSON, json);
}

export function getPlaywrightPendingTargets(): DirectoryTarget[] {
  const rows = readTracker();
  const pendingIds = new Set(
    rows.filter((r) => r.type === "directory" && r.status === "pending").map((r) => r.id),
  );
  return DIRECTORY_TARGETS.filter(
    (d) => getDirectoryAutomationTier(d.id) === "playwright" && pendingIds.has(d.id),
  );
}
