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
  steps,
}: {
  faq: CommercialSnowFaq[];
  processHeading: string;
  steps: ProcessStep[];
}) {
  const url = siteUrl();
  const pageUrl = `${url}/services/snow-removal/`;

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

  const graph = {
    "@context": "https://schema.org",
    "@graph": [faqPage, howTo],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
