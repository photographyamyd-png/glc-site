import { GROUND_LEVEL_SERVICES } from "@/lib/ground-level/services";

/** Files under `public/images/services/Excavation/` (normalized set). */
function excavationPhoto(n: number): string {
  return `/images/services/Excavation/excavation-${String(n).padStart(3, "0")}.jpg`;
}

/** Files under `public/images/services/Drainage-and-Hardscaping/` (normalized set). */
function drainageHardscapePhoto(n: number): string {
  return `/images/services/Drainage-and-Hardscaping/drainage-hardscaping-${String(n).padStart(3, "0")}.jpg`;
}

/**
 * One real image per service line (order matches GROUND_LEVEL_SERVICES).
 * Images are sourced from normalized service image folders under `public/images/services`.
 */
const BRAND_LAB_IMAGE_URLS = [
  excavationPhoto(1),
  excavationPhoto(2),
  drainageHardscapePhoto(1),
  excavationPhoto(3),
  drainageHardscapePhoto(2),
  excavationPhoto(4),
] as const;

function placeholdForSlug(slug: string): string {
  return `https://placehold.co/640x400/1e1c1a/f2b705?text=${encodeURIComponent(slug)}`;
}

export type ServiceLayoutLabItem = {
  slug: string;
  title: string;
  short: string;
  megaBlurb: string;
  imageUrl: string;
  fallbackImageUrl: string;
};

export const SERVICE_LAYOUT_LAB_ITEMS: ServiceLayoutLabItem[] = GROUND_LEVEL_SERVICES.map(
  (s, i) => ({
    ...s,
    imageUrl: BRAND_LAB_IMAGE_URLS[i] ?? BRAND_LAB_IMAGE_URLS[0],
    fallbackImageUrl: placeholdForSlug(s.slug),
  }),
);
