import type { SiteConfig } from "@/content/types";
import site from "@/content/site.json";
import { getSiteUrl } from "@/lib/site/metadata";

const SITE = site as SiteConfig;

export type NapRecord = {
  name: string;
  legalName: string;
  phone: string;
  phoneTel: string;
  email: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  fullAddress: string;
  website: string;
  areaServed: string[];
  slogan: string;
  description: string;
};

/** Single source for NAP used in directory listings, outreach, and scripts. */
export function getNap(): NapRecord {
  const website = getSiteUrl();
  const city = SITE.address.addressLocality;
  const region = SITE.address.addressRegion;
  const postalCode = SITE.address.postalCode;

  return {
    name: SITE.name,
    legalName: SITE.legalName,
    phone: SITE.telephoneDisplay,
    phoneTel: SITE.telephone,
    email: SITE.email,
    street: SITE.address.streetAddress,
    city,
    region,
    postalCode,
    country: SITE.address.addressCountry,
    fullAddress: `${SITE.address.streetAddress}, ${city}, ${region} ${postalCode}`,
    website,
    areaServed: [...SITE.areaServed],
    slogan: SITE.slogan,
    description: SITE.description,
  };
}

function trimToLength(text: string, max: number): string {
  const t = text.trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

/** Pre-written listing descriptions at common directory length limits. */
export function getListingDescriptions(): { short: string; medium: string; long: string } {
  const nap = getNap();
  const base =
    `${nap.name} — ${nap.slogan}. Commercial excavation, site grading, foundations, drainage, hauling, and winter snow operations across Barrie, Orillia, Innisfil, Wasaga Beach, Midland, and Simcoe County. Licensed and insured. Free estimates.`;

  return {
    short: trimToLength(base, 150),
    medium: trimToLength(base, 300),
    long: trimToLength(
      `${base} Utility-aware digging, survey-tied grades, disciplined spoils handling, and schedule-critical mobilization for contractors, developers, and institutional sites.`,
      500,
    ),
  };
}

const GBP_DESCRIPTION_MAX = 750;

/**
 * Google Business Profile business description (750-character limit).
 * Policy-safe: factual services copy only — no phone, URLs, offers, or keyword repetition.
 * Mentions construction company once; Barrie/Orillia ranking leans on categories, service areas, and Services.
 */
export function getGbpDescription(): string {
  const nap = getNap();
  const text = `${nap.name} — ${nap.slogan}. A commercial construction company providing excavation, site grading, foundations, drainage, hauling, and civil infrastructure across Barrie, Orillia, Innisfil, Midland, Wasaga Beach, and Simcoe County. We support general contractors, developers, and institutional clients with site preparation, utility-aware digging, survey-tied grades, and disciplined spoils handling.

The company also performs commercial snow removal for Barrie and Orillia properties, including lots, laneways, docks, and priority winter access routes. Earthworks and winter operations are planned around project schedules throughout Central Ontario.`;

  if (text.length <= GBP_DESCRIPTION_MAX) return text;
  return trimToLength(text, GBP_DESCRIPTION_MAX);
}

/** Ultra-minimal GBP description if the standard version is rejected again. */
export function getGbpDescriptionFallback(): string {
  const nap = getNap();
  return `${nap.name} — ${nap.slogan}. A commercial construction company providing excavation, grading, foundations, drainage, hauling, and snow removal for contractors and property owners in Barrie, Orillia, and Simcoe County.`;
}

export function getGbpDescriptionMaxLength(): number {
  return GBP_DESCRIPTION_MAX;
}

export function getListingCategories(): string[] {
  return [
    "Excavating contractor",
    "Earth works company",
    "Civil engineering company",
    "Construction company",
    "Demolition contractor",
    "Snow removal service",
  ];
}

export function getMoneyPageLinks(): Array<{ label: string; path: string }> {
  return [
    { label: "Home", path: "/" },
    { label: "Excavation & Site Preparation", path: "/services/excavation-site-preparation/" },
    {
      label: "Excavation Barrie",
      path: "/locations/excavation-site-preparation-barrie-ontario/",
    },
    {
      label: "Excavation Orillia",
      path: "/locations/excavation-site-preparation-orillia-ontario/",
    },
    { label: "Contact", path: "/contact/" },
  ];
}

export function getListingImageUrls(): { logo: string; hero: string } {
  const origin = getSiteUrl();
  return {
    logo: `${origin}/images/services/Excavation/excavation-016.jpg`,
    hero: `${origin}/images/services/Excavation/excavation-016.jpg`,
  };
}
