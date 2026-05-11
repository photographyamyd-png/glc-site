import type { LocationDef } from "@/lib/site/registry";
import { getSiteUrl } from "@/lib/site/metadata";

/**
 * Page-scoped JSON-LD for snow location landers: WebPage + BreadcrumbList.
 */
export function SnowLocationJsonLd({ location }: { location: LocationDef }) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/locations/${location.slug}/`;
  const snowHubUrl = `${siteUrl}/services/snow-removal/`;

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: location.title,
    description: location.description,
    url: pageUrl,
    isPartOf: { "@type": "WebSite", url: siteUrl },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services/` },
      { "@type": "ListItem", position: 3, name: "Commercial Snow Removal", item: snowHubUrl },
      { "@type": "ListItem", position: 4, name: location.title, item: pageUrl },
    ],
  };

  const payload = {
    "@context": "https://schema.org",
    "@graph": [webPage, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />
  );
}
