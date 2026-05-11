import {
  FOUNDATIONS_HUB_PATH,
  FOUNDATIONS_SERVICE_CARDS,
  FOUNDATIONS_SUBPAGE_COPY,
  foundationsSubFullTitle,
  type FoundationsSubSlug,
} from "@/lib/site/foundations-civil-infrastructure-content";
import { getSiteUrl } from "@/lib/site/metadata";

function scopeListName(slug: FoundationsSubSlug): string {
  const card = FOUNDATIONS_SERVICE_CARDS.find((c) => c.slug === slug);
  return card?.title ?? foundationsSubFullTitle(FOUNDATIONS_SUBPAGE_COPY[slug]);
}

/**
 * Scope route JSON-LD: Service + BreadcrumbList (Home → Services → Hub → this scope).
 */
export function FoundationsSubPageJsonLd({ subSlug }: { subSlug: FoundationsSubSlug }) {
  const siteUrl = getSiteUrl();
  const hubUrl = `${siteUrl}${FOUNDATIONS_HUB_PATH}`;
  const pageUrl = `${siteUrl}/services/foundations-civil-infrastructure/${subSlug}/`;
  const c = FOUNDATIONS_SUBPAGE_COPY[subSlug];
  const name = scopeListName(subSlug);

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name,
    description: c.seoDescription,
    url: pageUrl,
    provider: { "@id": `${siteUrl}/#business` },
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
        item: hubUrl,
      },
      { "@type": "ListItem", position: 4, name, item: pageUrl },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [service, breadcrumb],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
