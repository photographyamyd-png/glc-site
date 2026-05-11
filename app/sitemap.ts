import type { MetadataRoute } from "next";
import { FOUNDATIONS_SUB_SLUGS } from "@/lib/site/foundations-civil-infrastructure-content";
import { CORE_ROUTES, PRIMARY_SERVICES, getAllSnowLocationDefs, getAllSnowSubServiceDefs } from "@/lib/site/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://groundlevel.example.com").replace(/\/$/, "");
  const now = new Date();

  const core = CORE_ROUTES.map((route) => ({
    url: `${siteUrl}${route === "/" ? "/" : `${route}/`}`.replace(/\/{2,}$/g, "/"),
    lastModified: now,
  }));

  const primaryServices = PRIMARY_SERVICES.map((service) => ({
    url: `${siteUrl}/services/${service.slug}/`,
    lastModified: now,
  }));

  const snowSubServices = getAllSnowSubServiceDefs().map((service) => ({
    url: `${siteUrl}/services/${service.slug}/`,
    lastModified: now,
  }));

  const locations = getAllSnowLocationDefs().map((location) => ({
    url: `${siteUrl}/locations/${location.slug}/`,
    lastModified: now,
  }));

  const foundationsSubRoutes = FOUNDATIONS_SUB_SLUGS.map((subSlug) => ({
    url: `${siteUrl}/services/foundations-civil-infrastructure/${subSlug}/`,
    lastModified: now,
  }));

  return [...core, ...primaryServices, ...foundationsSubRoutes, ...snowSubServices, ...locations];
}
