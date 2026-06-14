import type { Metadata } from "next";
import type { PrimaryServiceSlug } from "@/lib/site/registry";
import { getServiceImage } from "@/lib/site/service-images";

type OgImageDescriptor = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

/** Reuses existing service photography — no paid stock assets. */
export function ogImageForPrimaryService(slug: PrimaryServiceSlug): OgImageDescriptor[] {
  const img = getServiceImage(slug);
  return [
    {
      url: img.src,
      width: 1200,
      height: 630,
      alt: img.alt,
    },
  ];
}

export const HOME_OG_IMAGE: OgImageDescriptor = {
  url: "/images/services/Excavation/excavation-016.jpg",
  width: 1200,
  height: 630,
  alt: "Ground Level Contracting commercial excavation and site preparation in Barrie and Simcoe County",
};

export function openGraphWithServiceImage(
  slug: PrimaryServiceSlug,
): Pick<Metadata, "openGraph" | "twitter"> {
  const images = ogImageForPrimaryService(slug);
  const imageUrl = images[0]?.url ?? "";
  return {
    openGraph: { images },
    twitter: { images: [imageUrl] },
  };
}
