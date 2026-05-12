import type { PrimaryServiceSlug, ServiceDef, SnowSubServiceSlug } from "@/lib/site/registry";

type ServiceImage = {
  src: string;
  alt: string;
};

const HAULING_PRIMARY_FILE =
  "Heavy equipment performing professional site grading and lot leveling in Barrie. Ground Level Contracting provides precise earthmoving and Hauling.jpg";
const HAULING_SECONDARY_FILE =
  "Heavy equipment performing professional site grading and lot leveling in Barrie. Ground Level Contracting provides precise earthmoving and Hauling 2.jpg";

const SERVICE_IMAGES: Record<PrimaryServiceSlug, ServiceImage> = {
  "excavation-site-preparation": {
    src: "/images/services/Excavation/excavation-016.jpg",
    alt: "Commercial excavation equipment preparing an active construction site in Simcoe County",
  },
  "site-preparation-grading": {
    src: "/images/services/Grading/grading-001.jpg",
    alt: "Grading equipment shaping a commercial site pad for construction turnover",
  },
  "foundations-civil-infrastructure": {
    src:
      "/images/services/Foundations/" +
      encodeURIComponent(
        "Ground Level Contracting - Excavation, Foundations, Industrial Construction - Barrie, Orilla, Simcoe County - Muskoka Bedrock- Drainage,  (2 of 34).jpg",
      ),
    alt: "Foundations and civil infrastructure contractor crew on commercial jobsite in Simcoe County Ontario",
  },
  "drainage-hardscaping": {
    src: "/images/services/Drainage-and-Hardscaping/drainage-hardscaping-001.jpg",
    alt:
      "Drainage hardscaping and landscaping contractor Barrie Ontario armour stone retaining wall interlock patio",
  },
  "hauling-site-clearing-logistics": {
    src: `/images/services/Hauling/${encodeURIComponent(HAULING_PRIMARY_FILE)}`,
    alt: "Heavy equipment performing professional site grading and hauling on a commercial construction site in Barrie Ontario",
  },
  "snow-removal": {
    src: "/images/services/Snow%20Removal/Ground%20Level%20Contracting%20barrie%20snow%20removal23.JPG",
    alt: "Ground Level Contracting plow truck clearing a commercial parking lot during winter operations",
  },
};

const SNOW_SUB_SERVICE_IMAGE: ServiceImage = SERVICE_IMAGES["snow-removal"];

export function getServiceImage(slug: ServiceDef["slug"]): ServiceImage {
  if (slug in SERVICE_IMAGES) {
    return SERVICE_IMAGES[slug as PrimaryServiceSlug];
  }

  return SNOW_SUB_SERVICE_IMAGE;
}

export function getServiceImageSrc(slug: ServiceDef["slug"] | SnowSubServiceSlug) {
  return getServiceImage(slug).src;
}

export function getServiceImageAlt(slug: ServiceDef["slug"] | SnowSubServiceSlug) {
  return getServiceImage(slug).alt;
}

/**
 * Raster placeholder when canonical `/images/services/*` files are missing locally.
 * Prefer over placehold.co defaults (often SVG) which break `next/image` and some CSPs.
 */
export function getServiceImageRasterPlaceholder(slug: string): string {
  const label = slug.replace(/-/g, " ").slice(0, 24);
  return `https://dummyimage.com/640x400/1e1c1a/f2b705.png&text=${encodeURIComponent(label)}`;
}

/** Second hauling raster for scope two-up on the hauling service page only. */
export function getHaulingScopeProofImage(): ServiceImage {
  return {
    src: `/images/services/Hauling/${encodeURIComponent(HAULING_SECONDARY_FILE)}`,
    alt: "Commercial hauling and earthmoving equipment staged for site logistics and material movement in Simcoe County",
  };
}

/** Before/after pair for grading conversion proof — distinct rasters (not survey-matched). */
export function getGradingProofSliderImages(): { before: ServiceImage; after: ServiceImage } {
  return {
    before: {
      src: "/images/services/Excavation/excavation-016.jpg",
      alt: "Commercial excavation and rough site conditions on an active Simcoe County construction site before finish grading",
    },
    after: SERVICE_IMAGES["site-preparation-grading"],
  };
}
