/** Map glc-site / mega-menu slugs → `GROUND_LEVEL_SERVICES` slugs. */
export const GLC_DNA_SERVICE_SLUG_ALIASES: Record<string, string> = {
  "excavation-site-preparation": "excavation",
  "site-preparation-grading": "grading",
  "foundations-civil-infrastructure": "foundations",
  "drainage-hardscaping": "drainage",
  "hauling-site-clearing-logistics": "hardscaping",
  "snow-removal": "snow-removal",
};

export function resolveGroundLevelServiceSlug(slug: string): string {
  return GLC_DNA_SERVICE_SLUG_ALIASES[slug] ?? slug;
}
