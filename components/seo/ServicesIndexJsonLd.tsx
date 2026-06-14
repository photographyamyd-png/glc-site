import { getSiteUrl } from "@/lib/site/metadata";
import { PRIMARY_SERVICES } from "@/lib/site/registry";

export function ServicesIndexJsonLd() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/services/`;

  const collectionPage = {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    name: "Ground Level Contracting Services",
    description:
      "Commercial excavation, grading, foundations, drainage, hauling, and snow removal across Barrie and Simcoe County.",
    url: pageUrl,
    isPartOf: { "@id": `${siteUrl}/#website` },
  };

  const itemList = {
    "@type": "ItemList",
    itemListElement: PRIMARY_SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${siteUrl}/services/${s.slug}/`,
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [collectionPage, itemList],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
