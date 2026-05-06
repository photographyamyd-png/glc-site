import { CORE_ROUTES, PRIMARY_SERVICES, getAllSnowLocationDefs } from "@/lib/site/registry";

export const HOME_SECTION_IDS = [
  "hero",
  "services",
  "about",
  "metrics",
  "capabilities",
  "why",
  "process",
  "coverage",
  "testimonials",
  "cta-band",
  "ghost-test",
] as const;

export const HOME_HASH_ROUTES = HOME_SECTION_IDS.map((id) => `/#${id}` as const);

export const CANONICAL_SERVICE_ROUTES = PRIMARY_SERVICES.map(
  (service) => `/services/${service.slug}` as const,
);

export const CANONICAL_LOCATION_ROUTES = getAllSnowLocationDefs().map(
  (location) => `/locations/${location.slug}` as const,
);

export const CANONICAL_INTERNAL_ROUTES = [
  ...CORE_ROUTES,
  ...CANONICAL_SERVICE_ROUTES,
  ...CANONICAL_LOCATION_ROUTES,
  ...HOME_HASH_ROUTES,
] as const;
