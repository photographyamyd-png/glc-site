import { GROUND_LEVEL_SERVICES } from "@/lib/ground-level/services";
import { getServiceImageSrc } from "@/lib/site/service-images";

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
  (s) => ({
    ...s,
    imageUrl: getServiceImageSrc(s.slug),
    fallbackImageUrl: placeholdForSlug(s.slug),
  }),
);
