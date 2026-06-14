import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPageTemplate } from "@/components/templates/LocationPageTemplate";
import { isServiceGeoLocation, SERVICE_GEO_LOCATION_SEO_TITLES } from "@/lib/site/geo-locations";
import { SEO_TITLES, getAllLocationDefs } from "@/lib/site/registry";
import { buildPageMetadata } from "@/lib/site/metadata";
import type { LocationSlug } from "@/lib/site/geo-locations";

export function generateStaticParams() {
  return getAllLocationDefs().map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getAllLocationDefs().find((entry) => entry.slug === slug);
  if (!location) {
    return buildPageMetadata({
      title: "Location | Ground Level Contracting",
      description: "Ground Level Contracting service coverage across Central Ontario.",
      path: "/locations/",
    });
  }

  const title =
    isServiceGeoLocation(slug)
      ? SERVICE_GEO_LOCATION_SEO_TITLES[slug]
      : SEO_TITLES.locations[location.slug as LocationSlug];

  return buildPageMetadata({
    title,
    description: location.description,
    path: `/locations/${location.slug}/`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getAllLocationDefs().find((entry) => entry.slug === slug);
  if (!location) notFound();

  return <LocationPageTemplate location={location} />;
}
