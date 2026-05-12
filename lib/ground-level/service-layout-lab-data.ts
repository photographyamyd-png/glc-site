import { GROUND_LEVEL_SERVICES } from "@/lib/ground-level/services";
import { getServiceImageRasterPlaceholder, getServiceImageSrc } from "@/lib/site/service-images";

function placeholdForSlug(slug: string): string {
  return getServiceImageRasterPlaceholder(slug);
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
