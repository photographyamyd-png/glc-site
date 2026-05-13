/**
 * Route → layout template map for imagery audits and QA.
 * Update when adding new App Router page modules under app/.
 */
export const ROUTE_TEMPLATE_INVENTORY = [
  { path: "/", template: "GLHomeCopyLab", notes: "GLHero / copy-lab sections" },
  { path: "/about/", template: "about/page", notes: "Verify local imagery" },
  { path: "/contact/", template: "contact/page", notes: "Verify local imagery" },
  { path: "/services/", template: "services/page", notes: "Service index" },
  { path: "/services/[slug]/", template: "ServicePageTemplate | ExcavationSitePreparationPage | DrainageHardscapingPage | CommercialSnowPage | HaulingGlcDnaLane | GradingConversionLane", notes: "Slug-specific" },
  { path: "/services/foundations-civil-infrastructure/", template: "Foundations hub", notes: "Hub layout" },
  { path: "/services/foundations-civil-infrastructure/[subSlug]/", template: "Foundations sub", notes: "Sub hub" },
  { path: "/locations/[slug]/", template: "LocationPageTemplate", notes: "Snow locations" },
  { path: "/privacy/", template: "privacy/page", notes: "Static" },
  { path: "/terms/", template: "terms/page", notes: "Static" },
  { path: "/maintenance/", template: "maintenance/page", notes: "Placeholder" },
  { path: "/sandbox/", template: "dev-only", notes: "Optional audit" },
] as const;
