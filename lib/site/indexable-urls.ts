import { FOUNDATIONS_SUB_SLUGS } from "@/lib/site/foundations-civil-infrastructure-content";
import { getResourceSlugs } from "@/lib/site/resources-content";
import {
  CORE_ROUTES,
  PRIMARY_SERVICES,
  getAllGeoLocationDefs,
  getAllSnowSubServiceDefs,
} from "@/lib/site/registry";

/** Pathnames for every public, indexable route (trailing slash except home). */
export function getIndexablePaths(): string[] {
  const core = CORE_ROUTES.map((route) => (route === "/" ? "/" : `${route}/`));
  const primary = PRIMARY_SERVICES.map((s) => `/services/${s.slug}/`);
  const foundationsSubs = FOUNDATIONS_SUB_SLUGS.map(
    (sub) => `/services/foundations-civil-infrastructure/${sub}/`,
  );
  const snowSubs = getAllSnowSubServiceDefs().map((s) => `/services/${s.slug}/`);
  const locations = getAllGeoLocationDefs().map((l) => `/locations/${l.slug}/`);
  const resources = ["/resources/", ...getResourceSlugs().map((s) => `/resources/${s}/`)];
  return [...core, ...primary, ...foundationsSubs, ...snowSubs, ...locations, ...resources];
}

export function getIndexableAbsoluteUrls(origin: string): string[] {
  const base = origin.replace(/\/$/, "");
  return getIndexablePaths().map((path) => `${base}${path}`);
}
