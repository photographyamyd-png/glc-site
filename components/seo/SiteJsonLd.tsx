/**
 * Master Project Bible §XIV — LocalBusiness + Service + WebSite JSON-LD.
 * Set `NEXT_PUBLIC_SITE_URL` in production (canonical origin, no trailing slash).
 */
import type { SiteConfig } from "@/content/types";
import site from "@/content/site.json";
import { getSiteUrl } from "@/lib/site/metadata";
import { PRIMARY_SERVICES } from "@/lib/site/registry";
import { getSocialProfileUrls } from "@/lib/site/social-profiles";

const SITE = site as SiteConfig;

/** Barrie service-area centroid for LocalBusiness geo (no storefront). */
const BARRIE_GEO = {
  "@type": "GeoCoordinates" as const,
  latitude: 44.3894,
  longitude: -79.6903,
};

function telToSchema(phoneHref: string): string {
  const digits = phoneHref.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  return phoneHref;
}

export function SiteJsonLd() {
  const siteUrl = getSiteUrl();
  const phoneSchema = telToSchema(SITE.telephone);
  const sameAs = getSocialProfileUrls();

  const business = {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    image: `${siteUrl}/images/services/Excavation/excavation-016.jpg`,
    description: SITE.description,
    url: siteUrl,
    telephone: phoneSchema,
    email: SITE.email,
    contactPoint: SITE.owners.map((owner) => ({
      "@type": "ContactPoint" as const,
      contactType: owner.title,
      name: owner.name,
      telephone: telToSchema(owner.telephone),
      areaServed: "CA",
      availableLanguage: "English",
    })),
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    geo: BARRIE_GEO,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    areaServed: SITE.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: SITE.name,
    url: siteUrl,
    publisher: { "@id": `${siteUrl}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/contact/`,
      },
      "query-input": "required name=search_term_string",
    },
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
    "@graph": [website, business, ...serviceNodes],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
