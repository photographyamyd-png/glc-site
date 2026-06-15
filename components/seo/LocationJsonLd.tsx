import type { GeoLocationDef } from "@/lib/site/geo-locations";
import { getGeoLinkLabel } from "@/lib/site/geo-location-content";
import { getSiteUrl } from "@/lib/site/metadata";

type FaqItem = { q: string; a: string };

/**
 * Page-scoped JSON-LD for all location landers (snow + service geo pages).
 */
export function LocationJsonLd({
  location,
  faq,
}: {
  location: GeoLocationDef;
  faq?: FaqItem[];
}) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/locations/${location.slug}/`;
  const serviceHubUrl = `${siteUrl}/services/${location.serviceSlug}/`;
  const serviceName =
    location.kind === "excavation" || location.kind === "grading" || location.kind === "foundations"
      ? getGeoLinkLabel(location.kind, location.placeName)
      : location.title;

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: serviceName,
    description: location.description,
    url: pageUrl,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` },
  };

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: serviceName,
    serviceType: location.serviceHubLabel,
    description: location.description,
    provider: { "@id": `${siteUrl}/#business` },
    url: serviceHubUrl,
    areaServed: {
      "@type": "City",
      name: `${location.placeName}, Ontario`,
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services/` },
      { "@type": "ListItem", position: 3, name: location.serviceHubLabel, item: serviceHubUrl },
      { "@type": "ListItem", position: 4, name: location.title, item: pageUrl },
    ],
  };

  const graph: object[] = [webPage, service, breadcrumb];

  if (faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />
  );
}
