import { COPY_LAB_HOME_FAQ } from "@/lib/ground-level/home-copy-lab-content";
import { getSiteUrl } from "@/lib/site/metadata";

export function HomeFaqJsonLd() {
  const url = getSiteUrl();
  const pageUrl = `${url}/`;
  const items = COPY_LAB_HOME_FAQ.groups.flatMap((g) => [...g.items]);

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#home-faq`,
    url: pageUrl,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [faqPage],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}
