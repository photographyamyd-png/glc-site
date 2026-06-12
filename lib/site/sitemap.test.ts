import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { FOUNDATIONS_SUB_SLUGS } from "@/lib/site/foundations-civil-infrastructure-content";
import { getSiteUrl } from "@/lib/site/metadata";
import {
  CORE_ROUTES,
  PRIMARY_SERVICES,
  getAllSnowLocationDefs,
  getAllSnowSubServiceDefs,
} from "@/lib/site/registry";

function expectedIndexablePaths(): string[] {
  const core = CORE_ROUTES.map((route) => (route === "/" ? "/" : `${route}/`));
  const primary = PRIMARY_SERVICES.map((s) => `/services/${s.slug}/`);
  const foundationsSubs = FOUNDATIONS_SUB_SLUGS.map(
    (sub) => `/services/foundations-civil-infrastructure/${sub}/`,
  );
  const snowSubs = getAllSnowSubServiceDefs().map((s) => `/services/${s.slug}/`);
  const locations = getAllSnowLocationDefs().map((l) => `/locations/${l.slug}/`);
  return [...core, ...primary, ...foundationsSubs, ...snowSubs, ...locations];
}

describe("sitemap coverage", () => {
  it("lists every indexable route from the registry", () => {
    const siteUrl = getSiteUrl();
    const urls = new Set(sitemap().map((entry) => entry.url.replace(siteUrl, "")));

    expectedIndexablePaths().forEach((path) => {
      expect(urls.has(path), `missing sitemap entry for ${path}`).toBe(true);
    });
    expect(urls.size).toBe(expectedIndexablePaths().length);
  });

  it("uses absolute URLs on the configured site origin", () => {
    const siteUrl = getSiteUrl();
    sitemap().forEach((entry) => {
      expect(entry.url.startsWith(`${siteUrl}/`) || entry.url === `${siteUrl}/`).toBe(true);
    });
  });
});
