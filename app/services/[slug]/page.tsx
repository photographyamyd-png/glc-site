import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DrainageHardscapingPage } from "@/components/templates/DrainageHardscapingPage";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { SERVICE_DETAILS } from "@/lib/site/copy";
import { ALL_SERVICES, PRIMARY_SERVICES, SEO_TITLES, type PrimaryServiceSlug } from "@/lib/site/registry";

export function generateStaticParams() {
  return ALL_SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = ALL_SERVICES.find((entry) => entry.slug === slug);
  if (!service) return { title: "Service | Ground Level Contracting" };

  const primaryTitle =
    service.category === "primary"
      ? (SERVICE_DETAILS[service.slug as PrimaryServiceSlug]?.seoTitle ?? SEO_TITLES.primary[service.slug as PrimaryServiceSlug])
      : `${service.title} | Ground Level Contracting`;

  return {
    title: primaryTitle,
    description:
      service.category === "primary"
        ? (SERVICE_DETAILS[service.slug as PrimaryServiceSlug]?.seoDescription ?? service.description)
        : service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = ALL_SERVICES.find((entry) => entry.slug === slug);
  if (!service) notFound();

  const related = PRIMARY_SERVICES.filter((entry) => entry.slug !== service.slug).slice(0, 4);

  if (service.slug === "drainage-hardscaping") {
    return <DrainageHardscapingPage service={service} related={related} />;
  }

  return (
    <ServicePageTemplate service={service} related={related} />
  );
}
