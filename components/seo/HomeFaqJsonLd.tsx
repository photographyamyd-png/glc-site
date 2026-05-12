import { COPY_LAB_HOME_FAQ } from "@/lib/ground-level/home-copy-lab-content";

function siteUrl(): string {
  return (
    (typeof process.env.NEXT_PUBLIC_SITE_URL === "string"
      ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
      : null) ?? "https://groundlevel.example.com"
  );
}

export function HomeFaqJsonLd() {
  const url = siteUrl();
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
