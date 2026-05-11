import type { Metadata } from "next";
import { FoundationsHubJsonLd } from "@/components/seo/FoundationsHubJsonLd";
import { FoundationsCivilInfrastructureHubPage } from "@/components/templates/FoundationsCivilInfrastructureHubPage";
import { FOUNDATIONS_HUB_SEO } from "@/lib/site/foundations-civil-infrastructure-content";
import { buildPageMetadata, getSiteUrl } from "@/lib/site/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl().replace(/\/$/, "");
  return buildPageMetadata({
    title: FOUNDATIONS_HUB_SEO.title,
    description: FOUNDATIONS_HUB_SEO.description,
    path: "/services/foundations-civil-infrastructure/",
    openGraphExtra: {
      title: FOUNDATIONS_HUB_SEO.ogTitle,
      description: FOUNDATIONS_HUB_SEO.ogDescription,
      type: "website",
      locale: "en_CA",
      url: `${siteUrl}/services/foundations-civil-infrastructure/`,
    },
  });
}

export default function FoundationsCivilInfrastructureHubRoutePage() {
  return (
    <>
      <FoundationsHubJsonLd />
      <FoundationsCivilInfrastructureHubPage />
    </>
  );
}
