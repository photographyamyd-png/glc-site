import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPageTemplate } from "@/components/templates/LocationPageTemplate";
import { SEO_TITLES, getAllSnowLocationDefs } from "@/lib/site/registry";
import { buildPageMetadata } from "@/lib/site/metadata";

export function generateStaticParams() {
  return getAllSnowLocationDefs().map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getAllSnowLocationDefs().find((entry) => entry.slug === slug);
  if (!location) {
    return buildPageMetadata({
      title: "Location | Ground Level Contracting",
      description: "Ground Level Contracting snow and site service coverage across Central Ontario.",
      path: "/locations/",
    });
  }

  return buildPageMetadata({
    title: SEO_TITLES.locations[location.slug],
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
  const location = getAllSnowLocationDefs().find((entry) => entry.slug === slug);
  if (!location) notFound();

  return <LocationPageTemplate location={location} />;
}
