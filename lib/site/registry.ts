export type PrimaryServiceSlug =
  | "excavation-site-preparation"
  | "site-preparation-grading"
  | "foundations-civil-infrastructure"
  | "drainage-hardscaping"
  | "hauling-site-clearing-logistics"
  | "snow-removal";

export type SnowSubServiceSlug =
  | "commercial-parking-lot-snow-plowing-barrie"
  | "industrial-snow-removal-simcoe-county"
  | "commercial-ice-management-deicing-simcoe-county"
  | "247-emergency-snow-removal-barrie"
  | "commercial-snow-hauling-removal-simcoe-county"
  | "retail-plaza-snow-removal-barrie"
  | "property-management-snow-removal-contracts"
  | "office-building-corporate-campus-snow-removal-barrie";

export type {
  GeoLocationDef,
  GeoLocationKind,
  LocationSlug,
  ServiceGeoLocationSlug,
  SnowLocationSlug,
} from "@/lib/site/geo-locations";
export {
  SERVICE_GEO_LOCATIONS,
  SERVICE_GEO_LOCATION_SEO_TITLES,
  getAllGeoLocationDefs,
  getGeoLocationCopy,
  getServiceGeoLocation,
  isServiceGeoLocation,
} from "@/lib/site/geo-locations";

import type { GeoLocationDef, LocationSlug, SnowLocationSlug } from "@/lib/site/geo-locations";
import { getAllGeoLocationDefs, SERVICE_GEO_LOCATION_SEO_TITLES } from "@/lib/site/geo-locations";

/** @deprecated Use GeoLocationDef */
export type LocationDef = GeoLocationDef;

export type ServiceDef = {
  slug: PrimaryServiceSlug | SnowSubServiceSlug;
  title: string;
  description: string;
  category: "primary" | "snow-subservice";
  moreHref?: string;
};

export const CORE_ROUTES = ["/", "/about", "/contact", "/services", "/privacy", "/terms"] as const;

export const PRIMARY_SERVICES: ServiceDef[] = [
  {
    slug: "excavation-site-preparation",
    title: "Excavation & Site Preparation",
    description: "Commercial excavation, trenching, and site prep for build-ready mobilization.",
    category: "primary",
  },
  {
    slug: "site-preparation-grading",
    title: "Site Preparation & Grading",
    description: "Precision grading, compaction, and civil-ready site shaping for reliable turnover.",
    category: "primary",
  },
  {
    slug: "foundations-civil-infrastructure",
    title: "Foundations & Civil Infrastructure",
    description: "Foundation excavation and civil support work aligned to engineering and schedule constraints.",
    category: "primary",
  },
  {
    slug: "drainage-hardscaping",
    title: "Drainage & Hardscaping",
    description: "Drainage systems and hardscape-adjacent civil details for long-term site durability.",
    category: "primary",
  },
  {
    slug: "hauling-site-clearing-logistics",
    title: "Hauling, Site Clearing & Logistics",
    description: "Material movement, clearing operations, and site logistics for continuous production flow.",
    category: "primary",
  },
  {
    slug: "snow-removal",
    title: "Commercial Snow Removal",
    description: "Commercial winter operations for parking lots, industrial yards, and priority access routes.",
    category: "primary",
  },
];

export const SNOW_SUB_SERVICES: ServiceDef[] = [
  {
    slug: "commercial-parking-lot-snow-plowing-barrie",
    title: "Commercial Parking Lot Snow Plowing",
    description: "Plowing and lane management for busy commercial lots in Barrie.",
    category: "snow-subservice",
    moreHref: "/services/snow-removal/#svc-parking-lot",
  },
  {
    slug: "industrial-snow-removal-simcoe-county",
    title: "Industrial Snow Removal",
    description: "Industrial winter clearing for yards, loading areas, and heavy-traffic access.",
    category: "snow-subservice",
    moreHref: "/services/snow-removal/#svc-industrial",
  },
  {
    slug: "commercial-ice-management-deicing-simcoe-county",
    title: "Commercial Ice Management & Deicing",
    description: "Deicing programs and hazard-response planning for safer winter operations.",
    category: "snow-subservice",
    moreHref: "/services/snow-removal/#svc-ice",
  },
  {
    slug: "247-emergency-snow-removal-barrie",
    title: "24/7 Emergency Snow Removal",
    description: "Rapid emergency dispatch to recover access during severe weather events.",
    category: "snow-subservice",
    moreHref: "/services/snow-removal/#svc-emergency",
  },
  {
    slug: "commercial-snow-hauling-removal-simcoe-county",
    title: "Commercial Snow Hauling & Removal",
    description: "Snow relocation and hauling where on-site pile storage is not viable.",
    category: "snow-subservice",
    moreHref: "/services/snow-removal/#svc-hauling",
  },
  {
    slug: "retail-plaza-snow-removal-barrie",
    title: "Retail Plaza Snow Removal",
    description: "Retail-oriented snow clearing focused on customer access and safety windows.",
    category: "snow-subservice",
    moreHref: "/services/snow-removal/#svc-retail",
  },
  {
    slug: "property-management-snow-removal-contracts",
    title: "Property Management Snow Contracts",
    description: "Seasonal contract programs for managed portfolios and multi-site operators.",
    category: "snow-subservice",
    moreHref: "/services/snow-removal/#svc-property-management",
  },
  {
    slug: "office-building-corporate-campus-snow-removal-barrie",
    title: "Office & Campus Snow Removal",
    description: "Campus and office winter service balancing access, safety, and tenant continuity.",
    category: "snow-subservice",
    moreHref: "/services/snow-removal/#svc-office-campus",
  },
];

export const ALL_SERVICES: ServiceDef[] = [...PRIMARY_SERVICES, ...SNOW_SUB_SERVICES];

export const SEO_TITLES = {
  home: "Excavation & Site Preparation Barrie | Simcoe County | Orillia | Innisfil",
  maintenance: "Coming Soon | Ground Level Contracting",
  services: "Services | Ground Level Contracting",
  about: "About | Ground Level Contracting",
  contact: "Contact | Ground Level Contracting",
  privacy: "Privacy | Ground Level Contracting",
  terms: "Terms | Ground Level Contracting",
  snowHub: "Commercial Snow Removal Contractors | Barrie, Simcoe County",
  primary: {
    "excavation-site-preparation":
      "Excavation & Site Preparation Barrie | Simcoe County Contractor",
    "site-preparation-grading": "Commercial Site Grading & Pad Prep | Barrie, Midland, Orillia | GLC",
    "foundations-civil-infrastructure": "Foundations & Civil Infrastructure | Barrie, Simcoe County",
    "drainage-hardscaping":
      "Drainage & Hardscaping Barrie | Simcoe County | Ground Level Contracting",
    "hauling-site-clearing-logistics":
      "Demolition Hauling & Site Logistics | Barrie, Simcoe County | GLC",
    "snow-removal": "Commercial Snow Removal Contractors | Barrie, Simcoe County",
  } as Record<PrimaryServiceSlug, string>,
  locations: {
    "commercial-snow-removal-barrie-ontario":
      "Commercial Snow Removal Barrie Ontario | Ground Level Contracting",
    "commercial-snow-removal-orillia-ontario":
      "Commercial Snow Removal Orillia Ontario | Ground Level Contracting",
    "commercial-snow-removal-innisfil-ontario":
      "Commercial Snow Removal Innisfil Ontario | Ground Level Contracting",
    "commercial-snow-removal-wasaga-beach-ontario":
      "Commercial Snow Removal Wasaga Beach Ontario | Ground Level Contracting",
    "commercial-snow-removal-simcoe-county":
      "Commercial Snow Removal Simcoe County | Ground Level Contracting",
    ...SERVICE_GEO_LOCATION_SEO_TITLES,
  } as Record<LocationSlug, string>,
};

export const NAV_LINKS = {
  utility: {
    location: "Barrie • Midland • Orillia • Simcoe County",
    phoneDisplay: "(705) 619-4902",
    phoneHref: "tel:+17056194902",
    rotator: [
      "Available for Site Dispatch — Commercial Projects",
      "Licensed & Insured — Barrie, Midland, Orillia & Simcoe County",
      "From Concept to Creation",
    ],
  },
};

export function getAllSnowSubServiceDefs() {
  return SNOW_SUB_SERVICES;
}

export function getAllSnowLocationDefs() {
  return getAllGeoLocationDefs().filter((l) => l.kind === "snow");
}

export function getAllLocationDefs() {
  return getAllGeoLocationDefs();
}
