/**
 * FAQPage + HowTo + Service JSON-LD for `/services/excavation-site-preparation/` only.
 * No AggregateRating (stakeholder testimonial module uses homepage quotes).
 */
import { getSiteUrl } from "@/lib/site/metadata";

type FaqItem = { q: string; a: string };
type ProcessStep = { id: string; title: string; body: string };

export function ExcavationJsonLd({
  faq,
  processHeading,
  steps,
}: {
  faq: FaqItem[];
  processHeading: string;
  steps: ProcessStep[];
}) {
  const url = getSiteUrl();
  const pageUrl = `${url}/services/excavation-site-preparation/`;

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const howTo = {
    "@type": "HowTo",
    "@id": `${pageUrl}#process`,
    name: processHeading,
    description: processHeading,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.body,
    })),
  };

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Excavation & Site Preparation",
    serviceType: "Commercial excavation contractor",
    description:
      "Barrie and Orillia excavation — commercial site prep, trenching, footing excavations, and survey-tied grading across Simcoe County.",
    provider: { "@id": `${url}/#business` },
    url: pageUrl,
    areaServed: [
      { "@type": "City", name: "Barrie, Ontario" },
      { "@type": "City", name: "Orillia, Ontario" },
      { "@type": "AdministrativeArea", name: "Simcoe County, Ontario" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Local excavation coverage",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Excavation in Barrie",
            url: `${url}/locations/excavation-site-preparation-barrie-ontario/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Excavation in Orillia",
            url: `${url}/locations/excavation-site-preparation-orillia-ontario/`,
          },
        },
      ],
    },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [faqPage, howTo, service],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
