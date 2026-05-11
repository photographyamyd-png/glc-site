/**
 * FAQPage + HowTo JSON-LD for `/services/snow-removal/` only.
 */
import type { CommercialSnowFaq } from "@/lib/site/commercial-snow-faqs";

type ProcessStep = { id: string; title: string; body: string };

function siteUrl(): string {
  return (
    (typeof process.env.NEXT_PUBLIC_SITE_URL === "string"
      ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
      : null) ?? "https://groundlevel.example.com"
  );
}

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
  const url = siteUrl();
  const pageUrl = `${url}/services/snow-removal/`;

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${url}/services/` },
      { "@type": "ListItem", position: 3, name: "Commercial Snow Removal", item: pageUrl },
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
    "@graph": [breadcrumb, faqPage, howTo],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
