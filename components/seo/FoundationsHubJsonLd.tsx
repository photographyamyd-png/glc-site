import {
  FOUNDATIONS_FAQ,
  FOUNDATIONS_HUB_PATH,
  FOUNDATIONS_HUB_SEO,
  FOUNDATIONS_SERVICE_CARDS,
} from "@/lib/site/foundations-civil-infrastructure-content";
import { getSiteUrl } from "@/lib/site/metadata";

/**
 * Page-scoped JSON-LD: Service (hub URL) + BreadcrumbList + FAQPage + OfferCatalog with per-scope URLs.
 * LocalBusiness is emitted site-wide via layout `SiteJsonLd` — provider references `#business`.
 */
export function FoundationsHubJsonLd() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${FOUNDATIONS_HUB_PATH}`;

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Foundations & Civil Infrastructure",
    serviceType: "Foundation and civil infrastructure contracting",
    description: FOUNDATIONS_HUB_SEO.description,
    url: pageUrl,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: [
      { "@type": "City", name: "Barrie" },
      { "@type": "City", name: "Orillia" },
      { "@type": "City", name: "Wasaga Beach" },
      { "@type": "City", name: "Innisfil" },
      { "@type": "AdministrativeArea", name: "Simcoe County" },
      { "@type": "City", name: "Springwater" },
      { "@type": "City", name: "Collingwood" },
      { "@type": "City", name: "Bradford" },
      { "@type": "City", name: "Midland" },
      { "@type": "City", name: "Angus" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Foundations & Civil Infrastructure Services",
      itemListElement: FOUNDATIONS_SERVICE_CARDS.map((card) => {
        const scopeUrl = `${siteUrl}/services/foundations-civil-infrastructure/${card.slug}/`;
        return {
          "@type": "Offer",
          url: scopeUrl,
          itemOffered: {
            "@type": "Service",
            name: card.title,
            url: scopeUrl,
          },
        };
      }),
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services/` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Foundations & Civil Infrastructure",
        item: pageUrl,
      },
    ],
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: FOUNDATIONS_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [service, breadcrumb, faqPage],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
