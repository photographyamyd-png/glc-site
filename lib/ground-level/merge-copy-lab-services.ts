import {
  COPY_LAB_SERVICE_CARDS,
  COPY_LAB_SERVICE_GRID_SLUGS,
} from "@/lib/ground-level/home-copy-lab-content";
import { GROUND_LEVEL_SERVICES, type GroundLevelService } from "@/lib/ground-level/services";

/** Aligns role-map card copy with canonical service slugs/titles for interactive shells. */
export function groundLevelServicesWithCopyLabDescriptions(): GroundLevelService[] {
  return COPY_LAB_SERVICE_GRID_SLUGS.map((slug, i) => {
    const base = GROUND_LEVEL_SERVICES.find((s) => s.slug === slug);
    if (!base) {
      throw new Error(`merge-copy-lab-services: missing slug "${slug}" in GROUND_LEVEL_SERVICES`);
    }
    const card = COPY_LAB_SERVICE_CARDS[i];
    const megaBlurb = card.description;
    const m = megaBlurb.match(/^(.+?[.!?])(\s+|$)/);
    const short = m ? m[1].trim() : `${megaBlurb.slice(0, 120).trim()}${megaBlurb.length > 120 ? "…" : ""}`;
    return { ...base, short, megaBlurb };
  });
}
