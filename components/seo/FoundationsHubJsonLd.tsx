import { FOUNDATIONS_FAQ, FOUNDATIONS_HUB_PATH, FOUNDATIONS_COMPANY } from "@/lib/site/foundations-civil-infrastructure-content";
import { getSiteUrl } from "@/lib/site/metadata";

function telToSchema(phoneHref: string): string {
  const digits = phoneHref.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  return phoneHref;
}

const OFFER_NAMES = [
  "Foundation Excavation & Backfilling",
  "Concrete Footings, Walls, Pads & Grade Beams",
  "Multi-Storey & High-Rise Foundations",
  "Subdivision Site Servicing",
  "Earthworks & Mass Excavation",
  "Commercial & Municipal Foundation Work",
  "Foundation Repair & Underpinning",
  "Structural & Engineering-Based Foundation Solutions",
] as const;

export function FoundationsHubJsonLd() {
  const site = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${site}${FOUNDATIONS_HUB_PATH}`;
  const telephone = telToSchema("tel:+17056194902");

  const contractor = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: FOUNDATIONS_COMPANY,
    description:
      "Foundations and civil infrastructure contractor serving Barrie, Orillia, Innisfil, Wasaga Beach and Simcoe County Ontario. Foundation excavation, concrete forming, grade beams, subdivision site servicing, mass earthworks, underpinning and structural solutions.",
    telephone,
    url: pageUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barrie",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: [
      "Barrie",
      "Orillia",
      "Wasaga Beach",
      "Innisfil",
      "Simcoe County",
      "Springwater",
      "Collingwood",
      "Bradford",
      "Midland",
      "Angus",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Foundations & Civil Infrastructure Services",
      itemListElement: OFFER_NAMES.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FOUNDATIONS_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contractor) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
