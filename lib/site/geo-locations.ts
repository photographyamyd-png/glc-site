import type { PrimaryServiceSlug } from "@/lib/site/registry";

export type GeoLocationKind = "snow" | "excavation" | "grading" | "foundations";

export type GeoLocationDef = {
  slug: string;
  title: string;
  description: string;
  kind: GeoLocationKind;
  placeName: string;
  serviceSlug: PrimaryServiceSlug;
  serviceHubLabel: string;
};

/** Snow location slugs (legacy). */
export type SnowLocationSlug =
  | "commercial-snow-removal-barrie-ontario"
  | "commercial-snow-removal-orillia-ontario"
  | "commercial-snow-removal-innisfil-ontario"
  | "commercial-snow-removal-wasaga-beach-ontario"
  | "commercial-snow-removal-simcoe-county";

export type ServiceGeoLocationSlug =
  | "excavation-site-preparation-barrie-ontario"
  | "excavation-site-preparation-orillia-ontario"
  | "excavation-site-preparation-simcoe-county"
  | "site-preparation-grading-barrie-ontario"
  | "site-preparation-grading-orillia-ontario"
  | "site-preparation-grading-midland-ontario"
  | "foundations-civil-infrastructure-barrie-ontario"
  | "foundations-civil-infrastructure-orillia-ontario"
  | "foundations-civil-infrastructure-simcoe-county";

export type LocationSlug = SnowLocationSlug | ServiceGeoLocationSlug;

export const SNOW_GEO_LOCATIONS: GeoLocationDef[] = [
  {
    slug: "commercial-snow-removal-barrie-ontario",
    title: "Commercial Snow Removal — Barrie, Ontario",
    description: "Commercial winter operations and dispatch support across Barrie service zones.",
    kind: "snow",
    placeName: "Barrie",
    serviceSlug: "snow-removal",
    serviceHubLabel: "Commercial Snow Removal",
  },
  {
    slug: "commercial-snow-removal-orillia-ontario",
    title: "Commercial Snow Removal — Orillia, Ontario",
    description: "Commercial snow response and ongoing winter contract coverage in Orillia.",
    kind: "snow",
    placeName: "Orillia",
    serviceSlug: "snow-removal",
    serviceHubLabel: "Commercial Snow Removal",
  },
  {
    slug: "commercial-snow-removal-innisfil-ontario",
    title: "Commercial Snow Removal — Innisfil, Ontario",
    description: "Snow and ice control services for Innisfil commercial and industrial properties.",
    kind: "snow",
    placeName: "Innisfil",
    serviceSlug: "snow-removal",
    serviceHubLabel: "Commercial Snow Removal",
  },
  {
    slug: "commercial-snow-removal-wasaga-beach-ontario",
    title: "Commercial Snow Removal — Wasaga Beach, Ontario",
    description: "Seasonal snow removal for parking lots and private commercial access in Wasaga Beach.",
    kind: "snow",
    placeName: "Wasaga Beach",
    serviceSlug: "snow-removal",
    serviceHubLabel: "Commercial Snow Removal",
  },
  {
    slug: "commercial-snow-removal-simcoe-county",
    title: "Commercial Snow Removal — Simcoe County",
    description: "Regional Simcoe County winter contract support with priority dispatch workflows.",
    kind: "snow",
    placeName: "Simcoe County",
    serviceSlug: "snow-removal",
    serviceHubLabel: "Commercial Snow Removal",
  },
];

export const SERVICE_GEO_LOCATIONS: GeoLocationDef[] = [
  {
    slug: "excavation-site-preparation-barrie-ontario",
    title: "Excavation & Site Preparation — Barrie, Ontario",
    description:
      "Barrie excavation contractor — commercial site prep, trenching, footing digs, and utility-aware digging for industrial and institutional sites. Free estimates.",
    kind: "excavation",
    placeName: "Barrie",
    serviceSlug: "excavation-site-preparation",
    serviceHubLabel: "Excavation & Site Preparation",
  },
  {
    slug: "excavation-site-preparation-orillia-ontario",
    title: "Excavation & Site Preparation — Orillia, Ontario",
    description:
      "Orillia excavation contractor — commercial site prep, trenching, footing excavations, and disciplined spoils handling. Free on-site estimates.",
    kind: "excavation",
    placeName: "Orillia",
    serviceSlug: "excavation-site-preparation",
    serviceHubLabel: "Excavation & Site Preparation",
  },
  {
    slug: "excavation-site-preparation-simcoe-county",
    title: "Excavation & Site Preparation — Simcoe County",
    description:
      "Regional commercial excavation and site preparation with survey-tied grades across Simcoe County municipalities.",
    kind: "excavation",
    placeName: "Simcoe County",
    serviceSlug: "excavation-site-preparation",
    serviceHubLabel: "Excavation & Site Preparation",
  },
  {
    slug: "site-preparation-grading-barrie-ontario",
    title: "Commercial Site Grading — Barrie, Ontario",
    description:
      "Mass and fine grading, structural fills, and building pad preparation tied to survey and geotech in Barrie.",
    kind: "grading",
    placeName: "Barrie",
    serviceSlug: "site-preparation-grading",
    serviceHubLabel: "Site Preparation & Grading",
  },
  {
    slug: "site-preparation-grading-orillia-ontario",
    title: "Commercial Site Grading — Orillia, Ontario",
    description:
      "Laser and GPS finish grading, compaction, and trade-ready pads for commercial sites in Orillia.",
    kind: "grading",
    placeName: "Orillia",
    serviceSlug: "site-preparation-grading",
    serviceHubLabel: "Site Preparation & Grading",
  },
  {
    slug: "site-preparation-grading-midland-ontario",
    title: "Commercial Site Grading — Midland, Ontario",
    description:
      "Precision earthwork and pad prep aligned to civil IFC drawings for Midland commercial and industrial projects.",
    kind: "grading",
    placeName: "Midland",
    serviceSlug: "site-preparation-grading",
    serviceHubLabel: "Site Preparation & Grading",
  },
  {
    slug: "foundations-civil-infrastructure-barrie-ontario",
    title: "Foundations & Civil Infrastructure — Barrie, Ontario",
    description:
      "Foundation excavation, deep cuts, and civil support work aligned to engineering schedules in Barrie.",
    kind: "foundations",
    placeName: "Barrie",
    serviceSlug: "foundations-civil-infrastructure",
    serviceHubLabel: "Foundations & Civil Infrastructure",
  },
  {
    slug: "foundations-civil-infrastructure-orillia-ontario",
    title: "Foundations & Civil Infrastructure — Orillia, Ontario",
    description:
      "Footings, servicing trenches, and civil excavation packages for Orillia commercial and institutional builds.",
    kind: "foundations",
    placeName: "Orillia",
    serviceSlug: "foundations-civil-infrastructure",
    serviceHubLabel: "Foundations & Civil Infrastructure",
  },
  {
    slug: "foundations-civil-infrastructure-simcoe-county",
    title: "Foundations & Civil Infrastructure — Simcoe County",
    description:
      "Regional foundation and civil excavation support with inspection-ready documentation across Simcoe County.",
    kind: "foundations",
    placeName: "Simcoe County",
    serviceSlug: "foundations-civil-infrastructure",
    serviceHubLabel: "Foundations & Civil Infrastructure",
  },
];

export const GEO_LOCATION_COPY = {
  snow: {
    h1Pattern: "Commercial snow removal — {PlaceName}",
    ledePattern:
      "Ground Level Contracting provides commercial snow removal and ice management for businesses and institutional sites across {PlaceName}, with SLAs and GPS-tracked service options.",
    supportLine: "Coverage details, highways, and industrial corridors are summarized on the main commercial snow hub.",
    hubHref: "/services/snow-removal/#chapter-coverage",
    hubCtaLabel: "Service area on hub",
    serviceAreaEyebrow: "Service Area",
    localCoverageEyebrow: "Local Coverage",
    localCoverageHeadingPattern: "Dispatch coverage for {PlaceName}",
  },
  excavation: {
    h1Pattern: "Excavation in {PlaceName}, Ontario",
    ledePattern:
      "Commercial excavation contractor in {PlaceName} — trenching, footing excavations, and build-ready site preparation with utility-aware digging and disciplined spoils handling.",
    supportLine: "Scope, capabilities, and process details are on the main excavation & site preparation hub.",
    hubHref: "/services/excavation-site-preparation/",
    hubCtaLabel: "Excavation hub",
    serviceAreaEyebrow: "Service Area",
    localCoverageEyebrow: "Local Coverage",
    localCoverageHeadingPattern: "Excavation coverage for {PlaceName}",
  },
  grading: {
    h1Pattern: "Commercial site grading — {PlaceName}",
    ledePattern:
      "Mass and fine grading, structural fills, and building pad preparation tied to survey and geotech across {PlaceName} commercial sites.",
    supportLine: "Technical specifications, FAQ, and grading process are on the main site preparation & grading hub.",
    hubHref: "/services/site-preparation-grading/",
    hubCtaLabel: "Grading hub",
    serviceAreaEyebrow: "Service Area",
    localCoverageEyebrow: "Local Coverage",
    localCoverageHeadingPattern: "Grading coverage for {PlaceName}",
  },
  foundations: {
    h1Pattern: "Foundations & civil infrastructure — {PlaceName}",
    ledePattern:
      "Foundation excavation, deep cuts, servicing, and civil support work aligned to engineering and schedule constraints in {PlaceName}.",
    supportLine: "Full foundations scope, sub-services, and FAQ are on the main foundations & civil infrastructure hub.",
    hubHref: "/services/foundations-civil-infrastructure/",
    hubCtaLabel: "Foundations hub",
    serviceAreaEyebrow: "Service Area",
    localCoverageEyebrow: "Local Coverage",
    localCoverageHeadingPattern: "Foundations coverage for {PlaceName}",
  },
} as const;

export function getAllGeoLocationDefs(): GeoLocationDef[] {
  return [...SNOW_GEO_LOCATIONS, ...SERVICE_GEO_LOCATIONS];
}

export function getGeoLocationCopy(kind: GeoLocationKind) {
  return GEO_LOCATION_COPY[kind];
}

export function isServiceGeoLocation(slug: string): slug is ServiceGeoLocationSlug {
  return SERVICE_GEO_LOCATIONS.some((l) => l.slug === slug);
}

export function getServiceGeoLocation(slug: string): GeoLocationDef | undefined {
  return SERVICE_GEO_LOCATIONS.find((l) => l.slug === slug);
}

export const SERVICE_GEO_LOCATION_SEO_TITLES: Record<ServiceGeoLocationSlug, string> = {
  "excavation-site-preparation-barrie-ontario":
    "Excavation Barrie Ontario | Commercial Excavation Contractor | GLC",
  "excavation-site-preparation-orillia-ontario":
    "Excavation Orillia Ontario | Commercial Excavation Contractor | GLC",
  "excavation-site-preparation-simcoe-county":
    "Excavation Contractor Simcoe County | Ground Level Contracting",
  "site-preparation-grading-barrie-ontario":
    "Commercial Grading Barrie Ontario | Ground Level Contracting",
  "site-preparation-grading-orillia-ontario":
    "Commercial Grading Orillia Ontario | Ground Level Contracting",
  "site-preparation-grading-midland-ontario":
    "Commercial Grading Midland Ontario | Ground Level Contracting",
  "foundations-civil-infrastructure-barrie-ontario":
    "Foundation Contractor Barrie Ontario | Ground Level Contracting",
  "foundations-civil-infrastructure-orillia-ontario":
    "Foundation Contractor Orillia Ontario | Ground Level Contracting",
  "foundations-civil-infrastructure-simcoe-county":
    "Foundation Contractor Simcoe County | Ground Level Contracting",
};
