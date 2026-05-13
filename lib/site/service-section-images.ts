import type { ServiceDef } from "@/lib/site/registry";
import { SNOW_SUB_SERVICES } from "@/lib/site/registry";
import { SNOW_REMOVAL_HUB_GALLERY } from "@/lib/site/snow-removal-media";

export type ServiceRaster = { readonly src: string; readonly alt: string };

const FOUNDATIONS_PREFIX =
  "Ground Level Contracting - Excavation, Foundations, Industrial Construction - Barrie, Orilla, Simcoe County - Muskoka Bedrock- Drainage,  ";

function foundationsJpg(n: number, alt: string): ServiceRaster {
  return {
    src: `/images/services/Foundations/${encodeURIComponent(`${FOUNDATIONS_PREFIX}(${n} of 34).jpg`)}`,
    alt,
  };
}

const MAX_CAPABILITY_CARD_IMAGES = 6;

/**
 * Distinct rasters for `#scope` and `#field-capabilities` on {@link ServicePageTemplate}.
 * Hero stays on {@link getServiceImage}; these slots must not reuse the hero URL.
 */
export function getServicePageSectionRasters(service: ServiceDef, hero: ServiceRaster): {
  scope: ServiceRaster;
  cards: ServiceRaster[];
} {
  if (service.slug === "foundations-civil-infrastructure" && service.category === "primary") {
    return {
      scope: foundationsJpg(
        3,
        "Foundation wall forming and excavation crew on a commercial civil jobsite in Simcoe County Ontario",
      ),
      cards: [
        foundationsJpg(4, "Commercial foundation excavation and utility trenching in Barrie Ontario"),
        foundationsJpg(5, "Structural concrete foundation prep and forming on an active building site"),
        foundationsJpg(6, "Earth retention and deep excavation for multi-storey commercial construction"),
        foundationsJpg(7, "Site servicing and road subgrade work for subdivision development"),
        foundationsJpg(8, "Mass excavation and haul coordination on a large commercial pad"),
        foundationsJpg(9, "Finish grading and handoff documentation at a civil infrastructure project"),
      ],
    };
  }

  const snowIdx = SNOW_SUB_SERVICES.findIndex((s) => s.slug === service.slug);
  if (snowIdx >= 0) {
    const pool = SNOW_REMOVAL_HUB_GALLERY.filter((r) => r.src !== hero.src);
    if (pool.length === 0) {
      const fallback = hero;
      return {
        scope: fallback,
        cards: Array.from({ length: MAX_CAPABILITY_CARD_IMAGES }, () => fallback),
      };
    }
    const scope = pool[0]!;
    const cards: ServiceRaster[] = [];
    for (let j = 1; j < pool.length && cards.length < MAX_CAPABILITY_CARD_IMAGES; j++) {
      cards.push(pool[j]!);
    }
    return { scope, cards };
  }

  return {
    scope: hero,
    cards: Array.from({ length: MAX_CAPABILITY_CARD_IMAGES }, () => hero),
  };
}

export function getCapabilityCardRaster(
  section: ReturnType<typeof getServicePageSectionRasters>,
  index: number,
): ServiceRaster {
  return section.cards[index] ?? section.scope;
}
