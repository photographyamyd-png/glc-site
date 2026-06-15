import type { GeoLocationKind } from "@/lib/site/geo-locations";

export type GeoLocationExtendedContent = {
  localParagraphs: string[];
  capabilityBullets: string[];
  faq: { q: string; a: string }[];
  seoSections: { title: string; paragraphs: string[] }[];
  resourceLink?: { href: string; label: string };
};

const EXCAVATION_BARRIE: GeoLocationExtendedContent = {
  localParagraphs: [
    "Barrie excavation projects span industrial parks south of the 400, institutional campuses, and infill commercial sites where utility congestion and tight staging are normal. We mobilize with locate-confirmed digging, export plans, and survey-tied rough grades so forming and civil trades start on verified control.",
    "Seasonal frost heave, variable glacial till, and municipal ESC requirements shape how we sequence stripping, structural fills, and fine grading on Barrie commercial sites. Our operators know local haul routes, tip approvals, and inspection hold patterns that keep GC schedules intact.",
    "From trenching and footing excavations to multi-acre site clearing and hydrovac support along Hwy 400 corridors, Ground Level Contracting delivers Barrie excavation with disciplined spoils handling and documented turnover for consultants and building officials.",
  ],
  capabilityBullets: [
    "Commercial site clearing and mass excavation",
    "Utility trenching with locate and hydrovac support",
    "Footing and foundation excavations",
    "Structural fill placement and compaction coordination",
    "Survey-tied rough and fine grading",
    "Spoils export and haul logistics",
  ],
  faq: [
    {
      q: "How much does excavation cost in Barrie?",
      a: "Scope drives cost — soil type, access, depth, export volume, and utility density all matter. We provide free on-site estimates with transparent pricing for Barrie commercial and institutional sites.",
    },
    {
      q: "Do you handle excavation permits in Barrie?",
      a: "We coordinate with your consultant team on municipal permits, locates, ESC plans, and haul approvals. Requirements vary by site; we build lead time into the mobilization schedule.",
    },
    {
      q: "What areas of Barrie do you serve?",
      a: "We support industrial, commercial, and institutional projects across Barrie and dispatch regionally across Simcoe County from our Barrie-area base.",
    },
    {
      q: "Can you work on schedule-critical Barrie sites?",
      a: "Yes — we align crew and equipment allocation to your lookahead, with daily communication to supers and project managers on production and holds.",
    },
    {
      q: "Do you also provide excavation in Orillia?",
      a: "Yes — we dispatch the same commercial excavation scope to Orillia from our Barrie-area base. See our Orillia excavation page for lake-country drainage and corridor access context.",
    },
  ],
  seoSections: [
    {
      title: "Why Barrie excavation needs a local partner",
      paragraphs: [
        "Barrie's growth along the 400 corridor and in established industrial zones means excavation crews routinely work around live utilities, tight lot lines, and phased building programs. A contractor who knows Barrie soils, municipal processes, and haul constraints reduces rework and inspection delays.",
        "Ground Level Contracting supports general contractors, developers, and institutional owners who need excavation in Barrie with documented grades, compaction coordination, and clean handoffs to forming and civil trades.",
      ],
    },
    {
      title: "Commercial excavation services in Barrie",
      paragraphs: [
        "Our Barrie excavation scope includes site clearing, mass cut and fill, trenching for site services, footing excavations, pool and deep-feature digs where applicable, and hydrovac support for tight utility clearance.",
        "We integrate with your survey and geotech partners so structural fills, proof rolls, and fine grading meet engineer specifications before slabs, utilities, and paving lock geometry.",
      ],
    },
  ],
  resourceLink: {
    href: "/resources/excavation-barrie-commercial-mobilization/",
    label: "Excavation in Barrie — mobilization guide",
  },
};

const EXCAVATION_ORILLIA: GeoLocationExtendedContent = {
  localParagraphs: [
    "Orillia excavation work often balances lake-adjacent drainage sensitivity, corridor access constraints, and commercial pad programs that must tie cleanly to civil IFC drawings. We plan spoils handling, export routes, and inspection windows before blades move.",
    "Ground Level Contracting supports Orillia commercial and institutional sites with utility-aware digging, trenching for site services, and foundation excavations aligned to engineering schedules.",
    "Whether your project sits near waterfront-influenced soils or inland commercial zones, our Orillia excavation crews deliver survey-tied grades and documented turnover for consultants and building officials.",
    "Barrie-based dispatch keeps mobilization efficient for Orillia GCs — the same excavation discipline we apply on Hwy 400 corridor industrial sites extends to Orillia pad programs and institutional expansions.",
  ],
  capabilityBullets: [
    "Commercial pad and footing excavation",
    "Site service trenching",
    "Mass grading and structural fills",
    "Hydrovac and utility clearance support",
    "Spoils export and haul coordination",
    "Inspection-ready documentation",
  ],
  faq: [
    {
      q: "Do you provide excavation in Orillia?",
      a: "Yes — we serve Orillia commercial, industrial, and institutional sites with full excavation and site preparation scope, including trenching, footing digs, and survey-tied grading.",
    },
    {
      q: "How much does excavation cost in Orillia?",
      a: "Orillia excavation pricing depends on scope, soil conditions, access, export volume, and utility density. We provide free on-site estimates with transparent pricing for commercial and institutional projects.",
    },
    {
      q: "How far in advance should we book Orillia excavation?",
      a: "Contact us as early as your civil drawings and locates allow. Lead time helps secure equipment and align with your forming and utility milestones.",
    },
    {
      q: "Can you coordinate with Orillia municipal requirements?",
      a: "We work with your consultant team on permits, ESC, locates, and haul approvals that apply to your municipality and site conditions.",
    },
    {
      q: "Do you also serve Barrie excavation projects?",
      a: "Yes — we are Barrie-based and dispatch excavation crews across Barrie, Orillia, and Simcoe County. See our Barrie excavation page for industrial corridor and 400-series staging context.",
    },
  ],
  seoSections: [
    {
      title: "Orillia excavation for commercial builds",
      paragraphs: [
        "Orillia developers and GCs need excavation partners who respect schedule holds, utility locates, and geotech specifications on every lift. We sequence earthworks so trades downstream are not waiting on undocumented field changes.",
        "From servicing trenches to multi-lot staging, Ground Level Contracting delivers Orillia excavation with the same discipline we apply across Simcoe County.",
      ],
    },
    {
      title: "Orillia excavation contractor scope",
      paragraphs: [
        "Our Orillia excavation services include commercial pad and footing excavation, site service trenching, mass grading, structural fills, hydrovac support, and spoils export with haul coordination.",
        "We integrate with survey and geotech partners so proof rolls, compaction testing, and fine grading meet engineer specifications before slabs, utilities, and paving lock geometry.",
      ],
    },
  ],
  resourceLink: {
    href: "/resources/excavation-orillia-commercial-site-prep/",
    label: "Excavation in Orillia — site prep guide",
  },
};

const BY_SLUG: Record<string, GeoLocationExtendedContent> = {
  "excavation-site-preparation-barrie-ontario": EXCAVATION_BARRIE,
  "excavation-site-preparation-orillia-ontario": EXCAVATION_ORILLIA,
};

/** Extended city-specific content when available; otherwise undefined (template-only page). */
export function getGeoLocationExtended(slug: string): GeoLocationExtendedContent | undefined {
  return BY_SLUG[slug];
}

export function getGeoLinkLabel(kind: GeoLocationKind, placeName: string): string {
  if (kind === "excavation") return `Excavation in ${placeName}`;
  if (kind === "grading") return `Grading in ${placeName}`;
  if (kind === "foundations") return `Foundations in ${placeName}`;
  return placeName;
}

/** Sibling excavation geo lander for cross-linking Barrie ↔ Orillia. */
export function getExcavationGeoCrossLink(slug: string): { href: string; label: string } | undefined {
  if (slug === "excavation-site-preparation-barrie-ontario") {
    return {
      href: "/locations/excavation-site-preparation-orillia-ontario/",
      label: "Excavation in Orillia",
    };
  }
  if (slug === "excavation-site-preparation-orillia-ontario") {
    return {
      href: "/locations/excavation-site-preparation-barrie-ontario/",
      label: "Excavation in Barrie",
    };
  }
  return undefined;
}
