import type { ServiceDef } from "@/lib/site/registry";
import { getSiteUrl } from "@/lib/site/metadata";

/**
 * Page-scoped JSON-LD for snow sub-service URLs: Service + BreadcrumbList.
 * LocalBusiness is emitted site-wide via layout `SiteJsonLd` — provider references `#business`.
 */
export function SnowSubServiceJsonLd({ service }: { service: ServiceDef }) {
  if (service.category !== "snow-subservice") return null;

  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/services/${service.slug}/`;
  const snowHubUrl = `${siteUrl}/services/snow-removal/`;

  const serviceNode = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.description,
    url: pageUrl,
    provider: { "@id": `${siteUrl}/#business` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services/` },
      { "@type": "ListItem", position: 3, name: "Commercial Snow Removal", item: snowHubUrl },
      { "@type": "ListItem", position: 4, name: service.title, item: pageUrl },
    ],
  };

  const payload = {
    "@context": "https://schema.org",
    "@graph": [serviceNode, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />
  );
}
