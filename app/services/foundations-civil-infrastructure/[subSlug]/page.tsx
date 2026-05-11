import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FoundationsCivilInfrastructureSubPage } from "@/components/templates/FoundationsCivilInfrastructureSubPage";
import {
  FOUNDATIONS_SUBPAGE_COPY,
  FOUNDATIONS_SUB_SLUGS,
  getFoundationsSubImageAlt,
  getFoundationsSubImageSrc,
  isFoundationsSubSlug,
  type FoundationsSubSlug,
} from "@/lib/site/foundations-civil-infrastructure-content";
import { buildPageMetadata } from "@/lib/site/metadata";

export function generateStaticParams() {
  return FOUNDATIONS_SUB_SLUGS.map((subSlug) => ({ subSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subSlug: string }>;
}): Promise<Metadata> {
  const { subSlug } = await params;
  if (!isFoundationsSubSlug(subSlug)) {
    return buildPageMetadata({
      title: "Service | Ground Level Contracting",
      description: "Ground Level Contracting foundations and civil infrastructure.",
      path: "/services/foundations-civil-infrastructure/",
    });
  }
  const c = FOUNDATIONS_SUBPAGE_COPY[subSlug as FoundationsSubSlug];
  return buildPageMetadata({
    title: c.seoTitle,
    description: c.seoDescription,
    path: `/services/foundations-civil-infrastructure/${subSlug}/`,
  });
}

export default async function FoundationsSubRoutePage({ params }: { params: Promise<{ subSlug: string }> }) {
  const { subSlug } = await params;
  if (!isFoundationsSubSlug(subSlug)) notFound();

  const content = FOUNDATIONS_SUBPAGE_COPY[subSlug];
  const imageSrc = getFoundationsSubImageSrc(subSlug);
  const imageAlt = getFoundationsSubImageAlt(subSlug);

  return <FoundationsCivilInfrastructureSubPage content={content} imageSrc={imageSrc} imageAlt={imageAlt} />;
}
