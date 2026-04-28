/**
 * Master Project Bible §XIV — LocalBusiness + Service JSON-LD.
 * Set `NEXT_PUBLIC_SITE_URL` in production (canonical origin, no trailing slash).
 */
import { PRIMARY_SERVICES } from "@/lib/site/registry";

function telToSchema(phoneHref: string): string {
  const digits = phoneHref.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  return phoneHref;
}

export function SiteJsonLd() {
  const siteUrl =
    (typeof process.env.NEXT_PUBLIC_SITE_URL === "string"
      ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
      : null) ?? "https://groundlevel.example.com";

  const business = {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Ground Level Contracting",
    description:
      "Commercial excavation and site operations across Barrie, Midland, Orillia, and Simcoe County.",
    url: siteUrl,
    telephone: telToSchema("tel:+17056194902"),
    email: "dispatch@groundlevelcontracting.ca",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barrie",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Barrie" },
      { "@type": "AdministrativeArea", name: "Midland" },
      { "@type": "AdministrativeArea", name: "Orillia" },
      { "@type": "AdministrativeArea", name: "Simcoe County" },
    ],
  };

  const serviceNodes = PRIMARY_SERVICES.map((s) => ({
    "@type": "Service",
    "@id": `${siteUrl}/#service-${s.slug}`,
    name: s.title,
    serviceType: s.title,
    provider: { "@id": `${siteUrl}/#business` },
    description: s.description,
    url: `${siteUrl}/services/${s.slug}/`,
  }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [business, ...serviceNodes],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
