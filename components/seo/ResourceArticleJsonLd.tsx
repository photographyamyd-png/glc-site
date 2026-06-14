import type { ResourceArticle } from "@/lib/site/resources-content";
import { getSiteUrl } from "@/lib/site/metadata";

export function ResourceArticleJsonLd({ article }: { article: ResourceArticle }) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/resources/${article.slug}/`;

  const webPage = {
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: article.title,
    description: article.description,
    url: pageUrl,
    datePublished: article.published,
    author: { "@id": `${siteUrl}/#business` },
    publisher: { "@id": `${siteUrl}/#business` },
    isPartOf: { "@id": `${siteUrl}/#website` },
  };

  const graph: Record<string, unknown>[] = [webPage];

  if (article.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: article.faq.map((item) => ({
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
