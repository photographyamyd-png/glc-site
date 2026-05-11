import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DrainageHardscapingPage } from "@/components/templates/DrainageHardscapingPage";
import { ExcavationSitePreparationPage } from "@/components/templates/ExcavationSitePreparationPage";
import { CommercialSnowPage } from "@/components/templates/CommercialSnowPage";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { SERVICE_DETAILS } from "@/lib/site/copy";
import {
  DRAINAGE_LANDING_SEO,
  drainageCanonicalUrl,
  drainagePagePath,
} from "@/lib/site/drainage-hardscaping-landing-content";
import { ALL_SERVICES, PRIMARY_SERVICES, SEO_TITLES, type PrimaryServiceSlug } from "@/lib/site/registry";
import { buildPageMetadata, getSiteUrl } from "@/lib/site/metadata";

export function generateStaticParams() {
  return ALL_SERVICES.filter((service) => service.slug !== "foundations-civil-infrastructure").map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = ALL_SERVICES.find((entry) => entry.slug === slug);
  if (!service) {
    return buildPageMetadata({
      title: "Service | Ground Level Contracting",
      description: "Ground Level Contracting service information for commercial site operations.",
      path: "/services/",
    });
  }

  if (service.slug === "drainage-hardscaping") {
    const siteUrl = getSiteUrl().replace(/\/$/, "");
    const ogImageUrl = `${siteUrl}${DRAINAGE_LANDING_SEO.ogImagePath}`;
    const canonical = drainageCanonicalUrl();
    return buildPageMetadata({
      title: DRAINAGE_LANDING_SEO.title,
      description: DRAINAGE_LANDING_SEO.description,
      path: drainagePagePath,
      canonicalUrl: canonical,
      alternatesLanguages: {
        "en-CA": canonical,
        "x-default": canonical,
      },
      openGraphExtra: {
        title: DRAINAGE_LANDING_SEO.ogTitle,
        description: DRAINAGE_LANDING_SEO.ogDescription,
        url: canonical,
        images: [{ url: ogImageUrl, width: 1200, height: 630 }],
        locale: "en_CA",
        siteName: "Ground Level Contracting",
      },
      twitterExtra: {
        title: DRAINAGE_LANDING_SEO.twitterTitle,
        description: DRAINAGE_LANDING_SEO.twitterDescription,
        images: [ogImageUrl],
      },
    });
  }

  const primaryTitle =
    service.category === "primary"
      ? (SERVICE_DETAILS[service.slug as PrimaryServiceSlug]?.seoTitle ?? SEO_TITLES.primary[service.slug as PrimaryServiceSlug])
      : `${service.title} | Ground Level Contracting`;
  const description =
    service.category === "primary"
      ? (SERVICE_DETAILS[service.slug as PrimaryServiceSlug]?.seoDescription ?? service.description)
      : service.description;

  return buildPageMetadata({
    title: primaryTitle,
    description,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = ALL_SERVICES.find((entry) => entry.slug === slug);
  if (!service) notFound();

  const related = PRIMARY_SERVICES.filter((entry) => entry.slug !== service.slug).slice(0, 5);

  if (service.slug === "excavation-site-preparation") {
    return <ExcavationSitePreparationPage service={service} related={related} />;
  }

  if (service.slug === "drainage-hardscaping") {
    return <DrainageHardscapingPage service={service} related={related} />;
  }

  if (service.slug === "snow-removal") {
    return <CommercialSnowPage service={service} related={related} />;
  }

  return (
    <ServicePageTemplate service={service} related={related} />
  );
}
