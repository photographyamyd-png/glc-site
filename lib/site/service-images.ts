import type { PrimaryServiceSlug, ServiceDef, SnowSubServiceSlug } from "@/lib/site/registry";

type ServiceImage = {
  src: string;
  alt: string;
};

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
    src: "/images/services/Hauling/hauling-001.jpg",
    alt: "Hauling and site clearing equipment supporting commercial construction logistics",
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
