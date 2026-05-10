import {
  DRAINAGE_JSONLD_FAQ,
  drainageCanonicalUrl,
} from "@/lib/site/drainage-hardscaping-landing-content";
import { getSiteUrl } from "@/lib/site/metadata";

/**
 * Page-scoped JSON-LD: Service (this URL) + BreadcrumbList + FAQPage in one graph.
 * LocalBusiness is emitted site-wide via layout `SiteJsonLd` — provider references `#business`.
 */
export function DrainageHardscapingJsonLd() {
  const siteUrl = getSiteUrl();
  const pageUrl = drainageCanonicalUrl();

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    serviceType: "Drainage, Hardscaping and Landscaping",
    name: "Drainage, Hardscaping & Landscaping Services",
    description:
      "Ground Level Contracting provides complete drainage, hardscaping, and landscaping integration services throughout Barrie and Simcoe County, Ontario — including foundation drain tile installation and replacement, custom site drainage design, french drains, retaining walls in armour stone, segmental block and concrete, interlock patios, driveways, natural stone walkways, steps, and hardscape and landscape integration for sloped, lakeside, and challenging-grade properties.",
    url: pageUrl,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: [
      { "@type": "City", name: "Barrie" },
      { "@type": "City", name: "Orillia" },
      { "@type": "City", name: "Innisfil" },
      { "@type": "City", name: "Wasaga Beach" },
      { "@type": "City", name: "Angus" },
      { "@type": "City", name: "Springwater" },
      { "@type": "City", name: "Oro-Medonte" },
      { "@type": "City", name: "New Tecumseth" },
      { "@type": "City", name: "Midland" },
      { "@type": "City", name: "Penetanguishene" },
      { "@type": "City", name: "Bradford West Gwillimbury" },
      { "@type": "City", name: "Collingwood" },
      { "@type": "AdministrativeArea", name: "Simcoe County" },
    ],
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services/` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Drainage & Hardscaping",
        item: pageUrl,
      },
    ],
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: DRAINAGE_JSONLD_FAQ,
  };

  const payload = {
    "@context": "https://schema.org",
    "@graph": [service, breadcrumb, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
