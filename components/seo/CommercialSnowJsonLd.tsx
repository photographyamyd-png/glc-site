import type { CommercialSnowFaq } from "@/lib/site/commercial-snow-faqs";
import { getSiteUrl } from "@/lib/site/metadata";

type ProcessStep = { id: string; title: string; body: string };

/** Page-scoped service, breadcrumb, FAQ and process structured data for the commercial snow hub. */
export function CommercialSnowJsonLd({
  faq,
  processHeading,
  processDescription,
  steps,
}: {
  faq: CommercialSnowFaq[];
  processHeading: string;
  /** Summary for HowTo `description` (distinct from step titles). */
  processDescription: string;
  steps: ProcessStep[];
}) {
  const url = getSiteUrl();
  const pageUrl = `${url}/services/snow-removal/`;

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Commercial Snow Removal",
    serviceType: "Commercial snow removal and ice management",
    provider: { "@id": `${url}/#business` },
    areaServed: [
      { "@type": "City", name: "Barrie" },
      { "@type": "City", name: "Orillia" },
      { "@type": "AdministrativeArea", name: "Simcoe County" },
    ],
    description:
      "Commercial snow plowing, salting, ice management and snow hauling for plazas, industrial yards and multi-site property portfolios.",
    url: pageUrl,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${url}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${url}/services/` },
      { "@type": "ListItem", position: 3, name: "Snow Removal", item: pageUrl },
    ],
  };

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
    description: processDescription,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.body,
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [service, breadcrumb, faqPage, howTo],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
