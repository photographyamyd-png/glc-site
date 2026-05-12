import type { LocationSlug, PrimaryServiceSlug, SnowSubServiceSlug } from "./registry";
import {
  COMMERCIAL_SNOW_CLOSING,
  COMMERCIAL_SNOW_EQUIPMENT,
  COMMERCIAL_SNOW_FAQ_SHORT,
  COMMERCIAL_SNOW_HERO,
  COMMERCIAL_SNOW_MID_LOWER_CTA,
  COMMERCIAL_SNOW_PROCESS,
  COMMERCIAL_SNOW_PROPERTY_TYPES,
  COMMERCIAL_SNOW_SERVICE_DEEP_DIVES,
  COMMERCIAL_SNOW_SEO,
  COMMERCIAL_SNOW_VALUE_PROP,
  COMMERCIAL_SNOW_WHY_CHOOSE,
  COMMERCIAL_SNOW_WHY_INTRO,
} from "./commercial-snow-page-data";

export type HomeCopy = {
  hero: {
    eyebrow: string;
    titleLines: [string, string, string];
    lede: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: Array<{ value: string; label: string }>;
    coverageLabel: string;
    coverageTags: string[];
    serviceBarTitles: string[];
  };
  marquee: string[];
  statsBand: { eyebrow: string; heading: string; headingAccent: string; intro: string };
  accordion: { eyebrow: string; heading: string; intro: string; cta: { label: string; href: string } };
  positioning: { eyebrow: string; heading: string; body: string; chips: string[] };
  about: {
    eyebrow: string;
    heading: string;
    body: string;
    credentials: string[];
    cta: { label: string; href: string };
    mediaStat: string;
    badge: string;
    watermarkText: string;
  };
  stats: Array<{ value: string; label: string; sub: string }>;
  why: {
    eyebrow: string;
    heading: string;
    body: string;
    reasons: Array<{ id: string; title: string; body: string }>;
    cta: { label: string; href: string };
    floatChip: string;
  };
  process: { eyebrow: string; heading: string; steps: Array<{ id: string; title: string; body: string }> };
  coverage: { eyebrow: string; heading: string; body: string; areas: Array<{ label: string; href: string }> };
  testimonials: {
    eyebrow: string;
    heading: string;
    sub: string;
    quotes: Array<{ quote: string; by: string }>;
  };
  testimonialsFeature: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    intro: string;
    featuredQuote: { quote: string; by: string };
    proofPanel: { eyebrow: string; heading: string; items: string[] };
    cta: { label: string; href: string };
  };
  ctaBand: {
    eyebrow: string;
    heading: string;
    sub: string;
    phoneLabel: string;
    phone: { label: string; href: string };
    email: { label: string; href: string };
  };
};

export type CorePageCopy = {
  about: {
    eyebrow: string;
    heading: string;
    body: string;
    credentials: string[];
    primaryCta: { label: string; href: string };
    supportLinks: Array<{ label: string; href: string }>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    /** Full lead for metadata / SEO; same text as `leadIntro` + `leadClosing`. */
    lead: string;
    /** First sentence(s) — left measure when split under shell header. */
    leadIntro: string;
    /** Closing sentence — right measure when split. */
    leadClosing: string;
    phoneHeading: string;
    emailHeading: string;
    phone: { label: string; href: string };
    email: { label: string; href: string };
    addressHeading: string;
    address: string;
    supportLinks: Array<{ label: string; href: string }>;
  };
  servicesIndex: {
    breadcrumb: [string, string];
    title: string;
    /** Single narrative for services index hero, metadata, and summaries. */
    lede: string;
    cardCtaLabel: string;
    cardDescription: string;
  };
  privacy: { title: string; body: string };
  terms: { title: string; body: string };
};

export type ServiceDetailCopy = {
  seoTitle: string;
  seoDescription: string;
  hero: {
    breadcrumbParent: string;
    titleBefore: string;
    titleEmphasis: string;
    lede: string;
    body: string[];
  };
  hubStats: Array<{ value: string; label: string; sub: string }>;
  process: { eyebrow: string; heading: string; steps: Array<{ id: string; title: string; body: string }> };
  scopeStripLabels: string[];
  intro: string[];
  deliverablesHeading: string;
  deliverables: string[];
  closingHeading: string;
  trust: { id: string; heading: string; paragraphs: string[] };
  subServices: Array<{ id: string; heading: string; paragraphs: string[]; closing: string }>;
  faq: Array<{ q: string; a: string }>;
  ctaOverride: { heading: string; buttonLabel: string; supporting: string; trustSignals?: string[] };
  extra?: {
    parallaxBand?: { eyebrow: string; title: string; subtitle: string; imageAlt: string };
    snowHub?: {
      heroHeading: string;
      opening: string;
      valuePropHeading: string;
      valuePropParagraphs: string[];
      lineBlockHeadings: string[];
      whyChooseHeading: string;
      whyChooseItems: string[];
      propertyTypesHeading: string;
      propertyTypes: string[];
      processHeading: string;
      processSteps: string[];
      closingCtaHeading: string;
      closingCtaParagraphs: string[];
      closingCtaLabels: string[];
      faqLongFormTodo: string;
    };
  };
};

export type LocationCopyModel = {
  h1Pattern: string;
  ledePattern: string;
  supportLine: string;
  ctas: Array<{ label: string; href: string }>;
};

export const HOME_COPY: HomeCopy = {
  hero: {
    eyebrow: "Commercial Excavation & Civil Infrastructure",
    titleLines: ["From", "Concept", "To Creation"],
    lede:
      "Ground Level Contracting prepares land for development — delivering excavation, foundations, drainage, and civil infrastructure exclusively for commercial project managers and site supervisors across Barrie, Midland, Orillia, and Simcoe County.",
    primaryCta: { label: "Request a Quote", href: "tel:+17056194902" },
    secondaryCta: { label: "View Services", href: "/#services" },
    stats: [
      { value: "15+", label: "Years of Field Experience" },
      { value: "500+", label: "Commercial Projects Completed" },
    ],
    coverageLabel: "Service Coverage",
    coverageTags: ["Barrie", "Midland", "Orillia", "Simcoe County"],
    serviceBarTitles: [
      "Excavation & Site Prep",
      "Site Prep & Grading",
      "Foundations & Civil",
      "Drainage & Hardscaping",
      "Hauling & Clearing",
      "Snow Removal",
    ],
  },
  marquee: [
    "Commercial Excavation",
    "Barrie & Simcoe County",
    "Midland & Orillia",
    "Site Preparation",
    "Foundation Specialists",
    "Grading & Pad Prep",
    "Drainage Solutions",
    "Commercial Snow Removal",
    "From Concept to Creation",
  ],
  statsBand: {
    eyebrow: "Field metrics",
    heading: "The baseline we bring to",
    headingAccent: "every mobilization",
    intro:
      "Track record our estimators and site supers use when they scope windows, crews, and equipment — across Barrie, Midland, Orillia, and Simcoe County.",
  },
  accordion: {
    eyebrow: "What We Do",
    heading: "Six Core Service Lines",
    intro:
      "From initial site clearing through drainage, hauling, and winter operations, Ground Level Contracting delivers end-to-end excavation and civil infrastructure services for commercial builds across Barrie, Midland, Orillia, and Simcoe County.",
    cta: { label: "Request a Quote", href: "tel:+17056194902" },
  },
  positioning: {
    eyebrow: "Commercial-Only Positioning",
    heading: "Exclusively Built For Commercial Operators",
    body:
      "Ground Level Contracting serves commercial owners, developers, property managers, and general contractors only. Our crews, equipment planning, and communication model are built for active commercial sites and schedule-critical mobilizations.",
    chips: ["Commercial Projects Only", "GC + PM Workflow", "Schedule-Critical Mobilization", "Simcoe County Coverage"],
  },
  about: {
    eyebrow: "Who We Are",
    heading: "Built On Ground Level — Trusted From Below Up",
    body:
      "Ground Level Contracting is a commercial excavation and civil infrastructure company serving project managers and site supervisors across Barrie, Midland, Orillia, and Simcoe County. We prepare land for development — solving geotechnical challenges efficiently and safely, so your build can proceed on schedule.",
    credentials: [
      "Geotechnical Solutions — Complex site challenges",
      "On-Schedule Delivery — Built around your timeline",
      "Safety First — Licensed & insured crews",
      "B2B Specialists — PM & supervisor trusted",
    ],
    cta: { label: "Discuss Your Project", href: "tel:+17056194902" },
    mediaStat: "15+ — Yrs. Experience",
    badge: "Licensed & Insured",
    watermarkText: "GLC",
  },
  stats: [
    { value: "15+", label: "Years of Experience", sub: "Field-proven expertise" },
    { value: "500+", label: "Projects Completed", sub: "Commercial builds" },
    { value: "4 Areas", label: "Service Coverage", sub: "Barrie, Midland, Orillia & Simcoe" },
    { value: "100%", label: "Project Satisfaction", sub: "On time, every time" },
  ],
  why: {
    eyebrow: "Why Ground Level",
    heading: "The Right Crew For Complex Ground Conditions",
    body:
      "We have the human resources, expertise, experience, and financial stability to respond quickly and complete projects safely and successfully. Our teams are built for commercial-scale work where timelines are non-negotiable and site conditions are rarely simple.",
    reasons: [
      { id: "01", title: "Rapid Mobilization", body: "Equipment and crews on-site fast. Built for urgent commercial dispatch." },
      {
        id: "02",
        title: "Geotechnical Depth",
        body: "We solve challenging ground conditions — rock, clay, high water table — without delaying your build.",
      },
      { id: "03", title: "PM-Friendly Communication", body: "Direct lines, daily updates, and documentation that keeps your project files clean." },
      {
        id: "04",
        title: "Single-Source Accountability",
        body: "One contractor across excavation, drainage, and clearing — fewer handoffs, tighter coordination.",
      },
    ],
    cta: { label: "705-619-4902", href: "tel:+17056194902" },
    floatChip: "Simcoe County's Preferred Excavator",
  },
  process: {
    eyebrow: "How It Works",
    heading: "From First Call to Final Grade",
    steps: [
      {
        id: "01",
        title: "Site Consultation",
        body: "Call or email us with your site address and scope. We review conditions and provide a clear assessment.",
      },
      {
        id: "02",
        title: "Detailed Quote",
        body: "We provide transparent, itemized pricing with no hidden costs. Scope is confirmed before any equipment moves.",
      },
      {
        id: "03",
        title: "Crew Mobilization",
        body: "Our equipment and operators are mobilized to your site efficiently. Safety protocols and site prep completed on day one.",
      },
      {
        id: "04",
        title: "Delivery & Signoff",
        body: "Work completed to spec, site documentation provided, and signoff confirmed. Your build can proceed on schedule.",
      },
    ],
  },
  coverage: {
    eyebrow: "Service Territory",
    heading: "Serving Barrie, Midland, Orillia & Simcoe County",
    body:
      "Ground Level Contracting is based in Barrie and operates commercially throughout our defined service territory. We move quickly across Barrie, Midland, Orillia, and Simcoe County — no extended mobilization delays.",
    areas: [
      { label: "Barrie — Primary base & dispatch", href: "/locations/commercial-snow-removal-barrie-ontario/" },
      { label: "Midland — Commercial & industrial sites", href: "/locations/commercial-snow-removal-simcoe-county/" },
      { label: "Orillia — Lake Country corridor", href: "/locations/commercial-snow-removal-orillia-ontario/" },
      { label: "Simcoe County — County-wide coverage", href: "/locations/commercial-snow-removal-simcoe-county/" },
    ],
  },
  testimonials: {
    eyebrow: "Client Feedback",
    heading: "Trusted by Site Supervisors & PMs",
    sub: "Ground Level Contracting is built for commercial relationships. Here's what the teams we work with have to say.",
    quotes: [
      {
        quote:
          "\"Ground Level mobilized faster than any contractor we'd used before. Site was prepped and ready two days ahead of our concrete pour — that kind of reliability is rare.\"",
        by: "Marcus T., Project Manager — Commercial Developer, Barrie",
      },
      {
        quote:
          "\"We brought them in on a challenging Simcoe County site with heavy rock. They diagnosed the issue, adjusted their approach same day, and kept us on schedule. Exactly who you want on complex ground.\"",
        by: "Diane P., Site Supervisor — General Contractor, Midland",
      },
      {
        quote:
          "\"Professional, communicative, and thorough. The drainage install was clean, documented properly, and the final grading passed inspection first time. Will be using Ground Level on all our Simcoe County projects going forward.\"",
        by: "James R., Construction Coordinator — Simcoe County",
      },
    ],
  },
  testimonialsFeature: {
    eyebrow: "Field-Proven Partnerships",
    heading: "When Schedule Risk",
    headingAccent: "Can’t Slip",
    intro: "Commercial clients rebook us when schedule certainty, clean turnover, and tight coordination matter most.",
    featuredQuote: {
      quote:
        "\"Ground Level hit a compressed mobilization window, delivered an inspection-ready pad, and kept our milestone intact.\"",
      by: "Senior PM - Commercial Build Program, Simcoe County",
    },
    proofPanel: {
      eyebrow: "Why teams rebook",
      heading: "Execution signals",
      items: ["Mobilization windows held", "PM-first daily updates", "Inspection-ready turnover"],
    },
    cta: { label: "Discuss your project", href: "tel:+17056194902" },
  },
  ctaBand: {
    eyebrow: "Ready to Build?",
    heading: "Start With a Site Consultation",
    sub: "Commercial projects across Barrie, Midland, Orillia, and Simcoe County. Affordable, reliable, satisfaction guaranteed.",
    phoneLabel: "Call Direct",
    phone: { label: "705-619-4902", href: "tel:+17056194902" },
    email: { label: "Email Us", href: "mailto:info@groundlevelcontracting.com" },
  },
};

export const CORE_COPY: CorePageCopy = {
  about: {
    eyebrow: "Who We Are",
    heading: "Built On Ground Level — Trusted From Below Up",
    body: HOME_COPY.about.body,
    credentials: HOME_COPY.about.credentials,
    primaryCta: { label: "Discuss Your Project", href: "tel:+17056194902" },
    supportLinks: [
      { label: "Coverage area", href: "/#coverage" },
      { label: "Our process", href: "/#process" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  contact: {
    eyebrow: "Ready to Build?",
    heading: "Start With a Site Consultation",
    leadIntro: "Commercial projects across Barrie, Midland, Orillia, and Simcoe County.",
    leadClosing: "Affordable, reliable, satisfaction guaranteed.",
    lead:
      "Commercial projects across Barrie, Midland, Orillia, and Simcoe County. Affordable, reliable, satisfaction guaranteed.",
    phoneHeading: "Call direct",
    emailHeading: "Email",
    phone: { label: "705-619-4902", href: "tel:+17056194902" },
    email: { label: "Email Us", href: "mailto:info@groundlevelcontracting.com" },
    addressHeading: "Mailing address",
    address: "PO BOX 193 STN Main, Barrie, ON L4M 4T2",
    supportLinks: [
      { label: "How we work", href: "/#process" },
      { label: "All services", href: "/services/" },
    ],
  },
  servicesIndex: {
    breadcrumb: ["Home", "Services"],
    title: "Six core service lines",
    lede:
      "Commercial excavation, site grading, civil infrastructure, drainage, hauling, and winter snow operations for schedule-critical sites across Barrie, Midland, Orillia, and Simcoe County.",
    cardCtaLabel: "Open",
    cardDescription:
      "Detailed scope, deliverables, and how we support PMs and site supers.",
  },
  privacy: {
    title: "Privacy Policy",
    body: "Ground Level Contracting collects only the contact and project details needed to respond to service inquiries, coordinate dispatch, and maintain operational records.",
  },
  terms: {
    title: "Terms of Use",
    body: "Use of this website is limited to service information and inquiry pathways; project commitments begin only after scope, schedule, and contract terms are confirmed.",
  },
};

export const LOCATION_COPY_MODEL: LocationCopyModel = {
  h1Pattern: "Commercial snow removal — {PlaceName}",
  ledePattern:
    "Ground Level Contracting provides commercial snow removal and ice management for businesses and institutional sites across {PlaceName}, with SLAs and GPS-tracked service options.",
  supportLine: "Coverage details, highways, and industrial corridors are summarized on the main commercial snow hub.",
  ctas: [
    { label: "Service area on hub", href: "/services/snow-removal/#chapter-coverage" },
    { label: "Contact", href: "/contact/" },
  ],
};

export const SERVICE_DETAILS: Record<PrimaryServiceSlug, ServiceDetailCopy> = {
  "excavation-site-preparation": {
    seoTitle: "Excavation & Site Preparation Barrie | Simcoe County Contractor",
    seoDescription:
      "Expert excavation & site preparation across Barrie, Orillia, Wasaga Beach, Innisfil & Simcoe County. Grading, clearing, trenching, pool digging, hydrovac & more. Free estimates.",
    hero: {
      breadcrumbParent: "Services",
      titleBefore: "Professional Excavation & Site Preparation — Barrie, Orillia, Wasaga Beach &",
      titleEmphasis: "Simcoe County",
      lede: "From single-lot custom home builds to full subdivision development — we move the earth that moves your project forward.",
      body: [
        "Serving contractors, developers & homeowners across all of Simcoe County with precision excavation and site preparation.",
        "Licensed, insured and locally trusted — delivering exceptional results on residential, commercial and industrial projects of all scales.",
        "When your project demands precision, experience and reliable equipment, you need an excavation partner who knows the soils, topography and permit requirements of Simcoe County inside and out. We provide professional excavation and site preparation services across Barrie, Orillia, Wasaga Beach, Innisfil, Midland, Collingwood, Bradford and surrounding communities — handling everything from residential lot clearing and pool digs to large-scale commercial site prep and heavy civil grading.",
        "Whether you're a homeowner planning a new build, a custom home builder working a complex sloped lot, or a developer breaking ground on a multi-lot subdivision, our experienced operators and modern equipment fleet deliver the grading accuracy, compaction quality and project timelines your job demands.",
        "We operate under a strict standard of workmanship, safety and communication — because in this industry, the groundwork you lay at the start determines everything that gets built on top of it.",
      ],
    },
    hubStats: [
      { value: "500+", label: "Projects", sub: "Commercial scale" },
      { value: "15+", label: "Years", sub: "Field leadership" },
      { value: "4", label: "Regions", sub: "Central Ontario" },
    ],
    process: {
      eyebrow: "Field process",
      heading: "From mobilization to final grade",
      steps: [
        { id: "01", title: "Site review", body: "Benchmarks, access, utilities, and geotech context before the first machine moves." },
        { id: "02", title: "Cut & shape", body: "Rough grading, trenching, and structural digs to engineered tolerances." },
        { id: "03", title: "Backfill & compaction", body: "Correct lifts, moisture control, and testing coordination." },
        { id: "04", title: "Handoff", body: "Fine grading, inspection-ready documentation, and clean turnover to trades." },
      ],
    },
    scopeStripLabels: ["Overview", "Scope", "Capabilities", "Process", "FAQ", "Related", "Request a site visit"],
    intro: [
      "We mobilize excavators, dozers, and hauling assets to prepare raw land for commercial construction — from initial tree and stump removal through precision rough grading.",
      "Our crews coordinate with your surveyor and GC to maintain pad elevations, manage spoils, and keep haul routes efficient so your foundation contractor can start on time.",
    ],
    deliverablesHeading: "What we deliver",
    deliverables: [
      "Commercial mass grading and fine grading",
      "Topsoil stripping and stockpiling",
      "Rock breaking and trench work",
      "Erosion control and silt management",
      "Cut-and-fill balanced to geotech specs",
    ],
    closingHeading: "Ready to scope your site?",
    trust: {
      id: "trust-authority",
      heading: "Trust & Authority",
      paragraphs: [
        "Our work spans the full spectrum of excavation and earthworks — from hydrovac precision digs around buried utilities to multi-acre commercial site clearing. We understand the drainage challenges unique to Simcoe County's terrain, the seasonal window pressures contractors face, and the quality standards demanded by engineers, municipalities and building inspectors across Barrie, Orillia and beyond.",
        "We work directly with homeowners, GCs, land developers, site engineers and municipal contractors — becoming the excavation partner that keeps your project moving without surprises.",
      ],
    },
    subServices: [
      {
        id: "residential-commercial-excavation",
        heading: "Residential & Commercial Excavation",
        paragraphs: [
          "Whether it's a full basement dig on a residential lot or the structural foundation for a commercial building, our excavation crews bring the precision and power to handle jobs at any depth and scale.",
          "Our fleet includes machines ranging from compact excavators for tight residential access to full-size equipment for deep commercial foundation work.",
        ],
        closing:
          "Key Work: Basement excavation, commercial footings, foundation digs, cut-and-fill grading, rock breaking, soil removal and haulage.",
      },
      {
        id: "subdivision-grading",
        heading: "Grading for New Subdivisions",
        paragraphs: [
          "Subdivision development demands a level of precision and coordination that only experienced grading contractors can deliver.",
          "We coordinate directly with engineers, developers and municipal inspectors to ensure every phase meets subdivision control requirements.",
        ],
        closing:
          "Serving subdivision developers in Barrie, Innisfil, Bradford, Angus, Midland, Penetanguishene, Wasaga Beach and throughout Simcoe County.",
      },
      {
        id: "custom-home-grading",
        heading: "Grading for Custom Homes & High-End Builds",
        paragraphs: [
          "Custom home builds — especially on sloped, ravine or lakefront lots — require a grading specialist who understands the relationship between drainage, landscaping and structural integrity.",
          "We handle complex topography including steep slopes, rock outcroppings, tight setbacks and finished grade coordination with retaining walls, pool decks, driveways and landscaping elements.",
        ],
        closing:
          "Serving custom home builders and owners in Barrie, Collingwood, Wasaga Beach, Oro-Medonte, Springwater, Innisfil and throughout Simcoe County.",
      },
      {
        id: "pool-excavation",
        heading: "Pool Excavation & Digging for Custom Pools",
        paragraphs: [
          "An inground pool starts with the right excavation — and in Simcoe County's varied soils, that means working with an operator who understands clay subsoil, high water tables and tight residential lots.",
          "Our pool excavation service includes precise depth control, side-slope stability, proper soil management and spoil removal so your pool contractor steps in to a clean, accurate dig.",
        ],
        closing: "Pool excavation in Barrie, Innisfil, Wasaga Beach, Angus, Oro-Medonte, Orillia and surrounding Simcoe County areas.",
      },
      {
        id: "trenching-utilities",
        heading: "Trenching for Utilities, Services, Water & Sanitary Lines",
        paragraphs: [
          "Underground utility work requires more than just digging a trench — it demands accurate depth control, proper bedding, code-compliant backfill and compaction.",
          "We provide trenching services across Simcoe County for water mains, sanitary sewer lines, storm drains, hydro conduit, gas line installations and communication ducts.",
        ],
        closing:
          "Trenching for residential, commercial and municipal projects in Barrie, Orillia, Collingwood, Midland, Wasaga Beach, Innisfil, Bradford and across Simcoe County.",
      },
      {
        id: "site-preparation",
        heading: "Site Preparation for Residential, Commercial & Multi-Unit Construction",
        paragraphs: [
          "Proper site preparation sets the foundation for everything that follows — cutting corners here costs significantly more later.",
          "Our site prep services cover the full pre-construction scope: clearing, topsoil stripping, rough grading, subgrade preparation, compaction and drainage establishment.",
        ],
        closing:
          "Full site preparation for developers, builders and GCs across Barrie, Orillia, Wasaga Beach, Innisfil, Angus, Midland, Penetanguishene and all of Simcoe County.",
      },
      {
        id: "lot-land-clearing",
        heading: "Lot & Land Clearing",
        paragraphs: [
          "Before a shovel touches the ground on your new build, the lot needs to be prepared — and that starts with clearing.",
          "We provide complete lot and land clearing across Simcoe County, removing trees, stumps, brush, demolition debris, surface vegetation and organic materials.",
        ],
        closing:
          "Lot clearing and land clearing for residential builders, landowners and developers in Barrie, Innisfil, Wasaga Beach, Oro-Medonte, Springwater, Midland, Bradford and throughout Simcoe County.",
      },
      {
        id: "hydrovac-excavation",
        heading: "Hydro & Vacuum Excavation (Hydrovac)",
        paragraphs: [
          "When you're digging near buried utilities, tree roots, or environmentally sensitive areas, conventional excavation isn't the safe choice — hydrovac is.",
          "Hydrovac is the industry standard for utility locating, slot trenching, daylighting buried pipes, exposing conduit and working in congested utility corridors.",
        ],
        closing:
          "Hydrovac excavation across Barrie, Orillia, Wasaga Beach, Innisfil and Simcoe County for utility contractors, municipalities, arborists, engineers and general contractors.",
      },
      {
        id: "heavy-civil-site-prep",
        heading: "Heavy Civil & Commercial Site Preparation",
        paragraphs: [
          "Industrial parks, commercial complexes, multi-unit residential and institutional builds require site preparation at a scale and precision level that demands proven experience and serious equipment.",
          "We handle heavy civil site preparation projects across Simcoe County — including mass grading, road base preparation, parking lot sub-base, structural fill placement and large-scale drainage system installation.",
        ],
        closing:
          "Heavy civil site prep for commercial, institutional and industrial projects in Barrie, Orillia, Angus, Bradford, Midland, Collingwood and across Simcoe County.",
      },
      {
        id: "backfilling-compaction",
        heading: "Backfilling & Compaction",
        paragraphs: [
          "Proper backfilling and compaction is one of the most overlooked — and most critical — phases of any excavation project.",
          "Our service ensures every void, trench and excavated area is filled with the correct material, placed in proper lifts, and compacted to required density.",
        ],
        closing:
          "Backfill and compaction for residential, commercial, municipal and industrial projects across Barrie, Orillia, Innisfil, Wasaga Beach and all of Simcoe County.",
      },
      {
        id: "final-subgrade-lot-grading",
        heading: "Lot Grading — Final & Subgrade",
        paragraphs: [
          "Final lot grading is the last earthwork step before landscaping, sod, driveway and exterior finish work begins.",
          "Our team reads grading plans, works to survey benchmarks, and delivers precise finished grades that pass the first time.",
        ],
        closing:
          "Final lot grading and subgrade preparation across Barrie, Orillia, Innisfil, Wasaga Beach, Angus, Midland, Bradford, Springwater, Oro-Medonte and all of Simcoe County.",
      },
    ],
    faq: [
      { q: "How much does excavation cost in Barrie, Ontario?", a: "Excavation costs vary based on scope, soil, access, depth, and export volume. We provide free on-site estimates with transparent pricing." },
      { q: "Do you serve areas outside of Barrie?", a: "Yes — we operate throughout Simcoe County including Orillia, Wasaga Beach, Innisfil, Collingwood, Midland, and surrounding communities." },
      { q: "Are you licensed and insured for excavation work in Ontario?", a: "Yes. We are fully licensed, insured, and compliant with Ontario excavation and grading requirements." },
      { q: "How far in advance do I need to book?", a: "Lead times vary by season; spring through fall is busiest. Contact us 3–6 weeks ahead where possible." },
      { q: "What is the difference between rough grading and final grading?", a: "Rough grading sets base elevations. Final grading brings the lot to permit-ready finished grades for drainage and landscaping." },
      { q: "What is hydrovac excavation and when should I use it?", a: "Hydrovac uses pressurized water and vacuum extraction for safer digging near buried utilities and sensitive roots." },
      { q: "Can you handle both residential and commercial jobs?", a: "Yes — from pool digs and basements to commercial foundations and subdivision grading." },
      { q: "Do you provide free estimates?", a: "Yes. We offer free, no-obligation on-site estimates across Simcoe County." },
    ],
    ctaOverride: {
      heading: "Request a Site Visit",
      buttonLabel: "Request a Site Visit",
      supporting:
        "Ready to break ground? Our team will visit your site, review the scope and deliver a clear, no-obligation quote.",
      trustSignals: [
        "Licensed & Fully Insured — Ontario Compliant",
        "Residential, Commercial & Industrial — All Project Scales",
        "GPS-Assisted Grading Equipment for Precision Results",
        "Free On-Site Estimates — No Obligation",
        "Locally Owned & Operated — Serving Simcoe County Since [Year]",
        "All Soil Types & Conditions — Including Rock & High Water Table",
        "Competitive Rates — Reliable Scheduling — Transparent Communication",
      ],
    },
  },
  "site-preparation-grading": {
    seoTitle: "Site Preparation & Grading | Ground Level Contracting",
    seoDescription:
      "Commercial site grading, pad prep, compaction, and finish tolerances for Barrie, Midland, Orillia, and Simcoe County.",
    hero: {
      breadcrumbParent: "Services",
      titleBefore: "Site Preparation",
      titleEmphasis: "& Grading",
      lede:
        "Rough and fine grading, structural fills, and building pad preparation tied to survey, geotech, and civil IFC.",
      body: [
        "We translate civil drawings into field grades that concrete, utility, and paving crews can trust — managing moisture, compaction, and spoils so your schedule is not lost to re-work.",
        "From mass grading through GPS or laser finish work, our operators coordinate inspection holds across Barrie, Midland, Orillia, and Simcoe County.",
      ],
    },
    hubStats: [
      { value: "GPS", label: "Survey tie-in", sub: "Machine control" },
      { value: "Spec", label: "Compaction", sub: "Geotech aligned" },
      { value: "Pad", label: "Building lines", sub: "Trade-ready" },
    ],
    process: {
      eyebrow: "Grading sequence",
      heading: "Rough in, prove grades, finish tight",
      steps: [
        { id: "01", title: "Model & strip", body: "Align benchmarks, strip organics, and balance cut-fill to the earthwork plan." },
        { id: "02", title: "Rough grade", body: "Shape pads, roadways, and swales to design elevations with haul routes that keep production moving." },
        { id: "03", title: "Proof & lift", body: "Proof-roll sensitive zones; place and compact structural fills to geotech lifts and moisture targets." },
        { id: "04", title: "Fine grade", body: "Surface to survey tolerances for forming, utilities, and paving with clean turnover documentation." },
      ],
    },
    scopeStripLabels: ["Overview", "Scope", "Capabilities", "Process", "FAQ", "Related", "Get a quote"],
    intro: [
      "Commercial sites need disciplined earthwork — not approximate grades that force trades to shim and patch.",
      "We stage roughing, structural lifts, and fine work so survey sign-off, compaction reports, and paving anchors line up with your critical path.",
    ],
    deliverablesHeading: "What we deliver",
    deliverables: [
      "Mass and fine grading to civil models",
      "Building pad and slab-on-grade prep",
      "Structural fill placement and compaction",
      "Parking and loading area subgrades",
      "Erosion control and interim surface management",
    ],
    closingHeading: "Ready to scope your site?",
    trust: {
      id: "trust-grading",
      heading: "Grades that hold through the next trade",
      paragraphs: [
        "When pads wander or subgrades soften, every downstream scope pays for it. We work to designer and geotech intent — with lifts, moisture, and proof tests treated as contract requirements, not suggestions.",
        "Tight sites, winter windows, and high traffic corridors get the same discipline: clear communication with survey and your superintendent before blades move.",
      ],
    },
    subServices: [
      { id: "mass-grading", heading: "Mass grading & earth balance", paragraphs: ["Cut-and-fill is sequenced to keep equipment productive and haul distances honest against the model.", "We flag unsuitable materials early and coordinate export or burial with your environmental and geotech teams."], closing: "Commercial and industrial greenfield sites." },
      { id: "pad-prep", heading: "Building pads & slab prep", paragraphs: ["Pads are worked to elevation and compaction spec with clear bench marks for forming and anchor bolts.", "We protect finished pads from site traffic and weather so concrete crews start on a surface that matches the drawings."], closing: "Shell and tilt-up ready grades." },
      { id: "structural-fill", heading: "Structural fill & proof rolling", paragraphs: ["Approved sources, lift thickness, and moisture windows are tracked so density tests represent real production.", "Soft spots are undercut and replaced rather than bridged with a thin lift."], closing: "Geotech-driven placement." },
      { id: "lot-road-subgrade", heading: "Parking & roadway subgrades", paragraphs: ["Cross-slopes and high/low points are set before curb and storm trades lock geometry.", "We coordinate tie-ins to existing pavements and temporary haul routes without wrecking finished stone."], closing: "Commercial lot and yard grading." },
      { id: "fine-finish", heading: "Fine grading & surface tolerance", paragraphs: ["Finish blades follow survey stakes or machine control files so sidewalks, pavers, and asphalt get consistent cover.", "We leave clean, drained surfaces that shed water the way the civil model expects."], closing: "Laser and GPS finish capable." },
      { id: "topsoil-stocking", heading: "Topsoil strip & stockpile", paragraphs: ["Stripping depths and stockpile locations are planned so later landscape placement is economical.", "We separate organics from structural soils to avoid contamination of approved fills."], closing: "Site clearing integration." },
      { id: "documentation-turnover", heading: "QC documentation & turnover", paragraphs: ["Elevation checks, photos, and test hold summaries are organized for consultants who need traceability.", "Turnover conversations include the next trade’s access plan — not just a signed drawing."], closing: "PM-friendly closeouts." },
    ],
    faq: [
      { q: "Can you work directly from our civil 3D model or GPS files?", a: "Yes — with control points and current model issues, we align machine guidance and field checks to reduce rework." },
      { q: "How do you handle unsuitable soils discovered during grading?", a: "We isolate soft zones, document extents, and execute geotech-directed undercuts or replacement before continuing." },
      { q: "Do you coordinate compaction testing?", a: "We stage lifts and notify testing firms so results reflect real production moisture and compaction." },
      { q: "What regions do you cover for grading scope?", a: "Barrie, Midland, Orillia, and Simcoe County for commercial sites requiring disciplined earthwork." },
    ],
    ctaOverride: {
      heading: "Book a grading walkthrough",
      buttonLabel: "Call dispatch",
      supporting:
        "Share your civil IFC, geotech report, and schedule — we will align mass grading, fills, and fine work with your forming and utility milestones.",
    },
  },
  "foundations-civil-infrastructure": {
    seoTitle: "Foundations & Civil Infrastructure | Barrie, Simcoe County",
    seoDescription:
      "Commercial & civil foundation contractor serving Barrie, Orillia, Innisfil & Simcoe County. Excavation, forming, site servicing & underpinning. Get a quote.",
    hero: {
      breadcrumbParent: "Services",
      titleBefore: "Commercial Foundation & Civil Infrastructure Excavation —",
      titleEmphasis: "Barrie, Orillia & Simcoe County",
      lede:
        "IFC-driven footing trenches, frost walls, shoring, site servicing, and structural backfill for commercial GCs, developers, and consultants across Simcoe County.",
      body: [
        "Ground Level excavates to structural drawings with tight tolerances for footings, elevator pits, and mechanical trenches. We coordinate penetrations and backfill schedules with your structural and MEP trades so concrete, steel, and underground scopes stay on schedule.",
        "From site servicing to storm and sanitary laterals, we install the underground infrastructure your build depends on — documented, compacted, and inspection-ready across Barrie, Midland, Orillia, and Simcoe County.",
      ],
    },
    hubStats: [
      { value: "200+", label: "Foundations", sub: "Field-delivered" },
      { value: "100%", label: "QC documentation", sub: "Civil certified" },
      { value: "All", label: "Soil types", sub: "Engineered specs" },
    ],
    process: {
      eyebrow: "Civil sequence",
      heading: "Structure-ready excavation and backfill",
      steps: [
        { id: "01", title: "Set benchmarks", body: "Survey, shoring plan review, and trench safety setup before spoils move." },
        { id: "02", title: "Structural dig", body: "Footings, pits, and trenches to structural drawings with tight tolerances." },
        { id: "03", title: "Utilities & bedding", body: "Storm, sanitary, and water runs with code-compliant bedding and compaction lifts." },
        { id: "04", title: "Inspection handoff", body: "Geotech-ready surfaces, documented placements, and clean access for trades." },
      ],
    },
    scopeStripLabels: ["Overview", "Scope", "Capabilities", "Process", "FAQ", "Related", "Get a quote"],
    intro: [
      "Ground Level excavates to structural drawings with tight tolerances for footings, elevator pits, and mechanical trenches.",
      "From site servicing to storm and sanitary laterals, we install the underground infrastructure your build depends on — documented and inspection-ready.",
    ],
    deliverablesHeading: "What we deliver",
    deliverables: [
      "Footing and frost wall excavation",
      "Shoring and benching for deep excavations",
      "Elevator pit and loading dock excavation",
      "Utility trenching for site servicing",
      "Structural backfill and compaction",
      "Mass excavation and pad preparation",
    ],
    closingHeading: "Ready to scope your site?",
    trust: {
      id: "trust-foundations",
      heading: "Engineered digs with commercial discipline",
      paragraphs: [
        "We work from IFC sets, geotech reports, and inspection schedules — not guesses.",
        "Whether it is a multi-level parkade or a single-storey industrial shell, our crews keep elevations honest, utilities separated, and backfill lifts verifiable when testing is required.",
      ],
    },
    subServices: [
      { id: "footing-frost-excavation", heading: "Footing & frost wall excavation", paragraphs: ["We excavate strip footings, pad footings, and frost walls to structural tolerances with clear spoil management and survey checks at critical lifts.", "Cold-climate details are executed to drawings so your foundation contractor forms against true lines and levels."], closing: "Commercial and industrial foundations across Simcoe County." },
      { id: "shoring-benching", heading: "Shoring, benching & deep excavations", paragraphs: ["Deep cuts are staged with benching or shoring coordination so slopes stay safe while maintaining access for trades and inspections.", "We align with temporary works designers and site supers to sequence excavation, support installation, and backfill."], closing: "Deep utility and foundation digs with documented safety plans." },
      { id: "elevator-pit-dock", heading: "Elevator pits & loading docks", paragraphs: ["Pits and dock trenches demand tight dimensional control and clean corners for waterproofing and anchor placement.", "We coordinate sump locations, drain leads, and slab ties so vertical transportation and receiving areas meet requirements."], closing: "Precision pits for commercial cores and logistics facilities." },
      { id: "site-servicing-trenches", heading: "Site servicing trenches", paragraphs: ["Storm, sanitary, and water runs are trenched with accurate grades, separation from parallel utilities, and proper bedding material.", "We protect existing services and stage backfill so inspections can occur without re-digging."], closing: "Municipal and private site servicing for new builds and expansions." },
      { id: "structural-backfill", heading: "Structural backfill & compaction", paragraphs: ["Backfill around foundations and utilities uses engineered materials, moisture control, and lifts that match geotech specifications.", "We coordinate proof rolling and density testing when required so slabs and pavements perform long term."], closing: "Compaction-focused crews for commercial slabs and heavy loads." },
      { id: "civil-coordination", heading: "Civil coordination with trades", paragraphs: ["We align dig windows with forming, waterproofing, and underground mechanical scopes to avoid idle crews and rework.", "Clear communication on penetrations, sleeves, and tie-in locations keeps the civil package moving in order."], closing: "Integrated scheduling with GC and trade partners." },
      { id: "qa-documentation", heading: "QA & documentation", paragraphs: ["Elevation shots, trench photos, and as-built sketches are organized for consultants and owners needing traceability.", "When specifications call for third-party verification, we stage work so tests happen without delaying the critical path."], closing: "Inspection-ready documentation on request." },
      { id: "mass-excavation-pad-prep", heading: "Mass excavation & pad preparation", paragraphs: ["Bulk cut-to-fill and pad prep establish subgrade and platform levels for commercial shells and industrial additions.", "We coordinate rough grading and pad certification with survey and geotechnical consultants."], closing: "Mass excavation for commercial developments across Simcoe County." },
    ],
    faq: [
      { q: "Do you only excavate elevator and dock pits?", a: "No. We deliver the full civil excavation package: footings, deep cuts, servicing, backfill, and mass pad work." },
      { q: "Can you work directly from structural IFC drawings?", a: "Yes. We plan dig, trench, and backfill from the latest IFC issue, RFIs, and geotech reports." },
      { q: "How do you manage inspection holds?", a: "We coordinate windows, keep trenches accessible, and stage lifts for required testing." },
      { q: "Do you provide documentation for consultants and owners?", a: "Yes. Elevation records, photos, and as-built notes can be organized for turnover traceability." },
      { q: "What regions do you serve?", a: "Barrie, Orillia, Innisfil, Wasaga Beach, Midland, and Simcoe County." },
    ],
    ctaOverride: {
      heading: "Book a foundations walkthrough",
      buttonLabel: "Call dispatch",
      supporting:
        "Share your structural drawings and schedule — we will align excavation, utilities, and backfill with your concrete and steel milestones.",
    },
    extra: {
      parallaxBand: {
        eyebrow: "Civil discipline",
        title: "Structure-ready digs & backfill",
        subtitle:
          "IFC-driven sequencing, geotech holds, and trade coordination for commercial shells across Barrie, Orillia, and Simcoe County.",
        imageAlt: "Commercial foundation excavation trenching civil infrastructure Barrie Ontario Simcoe County",
      },
    },
  },
  "drainage-hardscaping": {
    seoTitle: "Drainage & Hardscaping | Ground Level Contracting",
    seoDescription:
      "Drainage & Hardscaping — commercial excavation and civil services for Barrie, Midland, Orillia, and Simcoe County.",
    hero: {
      breadcrumbParent: "Services",
      titleBefore: "Drainage &",
      titleEmphasis: "Hardscaping",
      lede: "Surface grading, storm infrastructure, and hardscape prep for commercial lots and exteriors.",
      body: [
        "We establish positive drainage away from structures, install catch basins and storm pipe runs, and prepare subgrades for pavers, asphalt, and retaining walls.",
        "Armor stone, interlock, and segmental retaining walls are supported by proper excavation, geotextile, and drainage detail — executed to engineer drawings across Barrie, Midland, Orillia, and Simcoe County.",
      ],
    },
    hubStats: [
      { value: "Storm +", label: "Surface", sub: "Integrated systems" },
      { value: "Armor", label: "Stone ready", sub: "Heavy loads" },
      { value: "Interlock", label: "Base prep", sub: "Engineer lines" },
    ],
    process: {
      eyebrow: "Drainage workflow",
      heading: "Grade, drain, protect — then pave",
      steps: [
        { id: "01", title: "Analyze flow", body: "Grading plans, catchment, and tie-ins to municipal storm networks." },
        { id: "02", title: "Excavate runs", body: "Swales, trench drains, and pipe runs with proper fall and bedding." },
        { id: "03", title: "Structure prep", body: "Wall footings, paver bases, and armor placement to specification." },
        { id: "04", title: "Finish coordination", body: "Top course elevations for asphalt, concrete, or landscape trades." },
      ],
    },
    scopeStripLabels: ["Overview", "Scope", "Capabilities", "Process", "FAQ", "Related", "Get a quote"],
    intro: [
      "We establish positive drainage away from structures, install catch basins and storm pipe runs, and prepare subgrades for pavers, asphalt, and retaining walls.",
      "Armor stone, interlock, and segmental retaining walls are supported by proper excavation, geotextile, and drainage detail — executed to engineer drawings.",
    ],
    deliverablesHeading: "What we deliver",
    deliverables: [
      "Storm and French drain systems",
      "Catch basins and manhole leads",
      "Grading for parking and loading areas",
      "Retaining wall and paver base prep",
      "Erosion protection and swales",
    ],
    closingHeading: "Ready to scope your site?",
    trust: {
      id: "trust-drainage",
      heading: "Drainage that protects the pavement investment",
      paragraphs: [
        "Water always wins when grades are lazy or subs are soft. We shape surfaces, install conveyance, and build bases so hardscape and asphalt last.",
        "From commercial lots to tight urban sites, we coordinate tie-ins, erosion control, and inspection holds so your landscape and paving scopes stay on schedule.",
      ],
    },
    subServices: [
      { id: "storm-pipe-runs", heading: "Storm pipe & catchment", paragraphs: ["Catch basins, manhole leads, and lateral runs are set to design invert with stable bedding and joint integrity.", "We sequence tie-ins to avoid flooding work areas and protect adjacent pavements during open-trench phases."], closing: "Storm conveyance for lots and roadways." },
      { id: "french-drains", heading: "French & trench drains", paragraphs: ["Perimeter and interior trench drains are excavated to width and slope with geotextile and clean stone placement.", "We protect building envelopes and footings while maintaining positive flow to daylight or storm connections."], closing: "Foundation and plaza drainage solutions." },
      { id: "lot-grading", heading: "Parking & loading grades", paragraphs: ["Mass grading establishes sheet flow and cross-slope before curb, island, and pavement scopes begin.", "We coordinate spot elevations with survey so catch basins land where drainage models expect them."], closing: "Commercial lot grading for pavements." },
      { id: "retaining-base", heading: "Retaining wall base prep", paragraphs: ["Footing trenches for segmental and concrete walls are over-excavated and replaced with structural fills where geotech requires.", "Drainage behind walls is coordinated before block or panel placement."], closing: "Structural fills per geotech." },
      { id: "paver-asphalt-base", heading: "Paver & asphalt subgrade", paragraphs: ["Interlock and asphalt bases are shaped in layers with compaction checkpoints for pavement designers.", "Edge restraints, geogrid, and separation fabrics are installed where drawings call for them."], closing: "Hardscape-ready subgrades." },
      { id: "erosion-swales", heading: "Erosion control & swales", paragraphs: ["Swales and berms are cut to convey water without saturating building pads or sensitive soils.", "We stage topsoil, silt fence, and inlet protection to match inspection expectations during active earthwork."], closing: "Erosion plans executed in the field." },
      { id: "armor-interlock", heading: "Armor stone & interlock readiness", paragraphs: ["Heavy-use areas get crushed stone profiles and compaction levels that support loaders and seasonal movement.", "We leave surfaces ready for fine grading or paver crews with clear elevation benchmarks and clean transitions."], closing: "Commercial entries and yards." },
    ],
    faq: [
      { q: "Can you tie into existing municipal storm?", a: "Yes — we coordinate depths, easements, and connection details with your civil engineer and municipality." },
      { q: "Do you install geotextile and drainage aggregate?", a: "We place separation fabrics, clear stone, and drainage layers per specification." },
      { q: "How do you protect adjacent pavement during trenching?", a: "We saw-cut, support, and backfill carefully at interfaces; staging plates when needed." },
      { q: "What regions do you cover for drainage scope?", a: "Barrie, Midland, Orillia, and Simcoe County for commercial sites, plazas, and industrial yards." },
    ],
    ctaOverride: {
      heading: "Book a drainage review",
      buttonLabel: "Call dispatch",
      supporting:
        "Share civil and landscape drawings — we will align grading, trenching, and base prep with your paving and wall scopes.",
    },
    extra: {
      parallaxBand: {
        eyebrow: "Field execution",
        title: "Drainage & hardscape integration",
        subtitle:
          "Storm conveyance, wall drainage, and paver-ready subgrades sequenced for commercial sites across Barrie, Midland, Orillia, and Simcoe County.",
        imageAlt:
          "Commercial drainage and hardscape civil work catch basins trenching Simcoe County Ontario",
      },
    },
  },
  "hauling-site-clearing-logistics": {
    seoTitle: "Hauling, Site Clearing & Logistics | Ground Level Contracting",
    seoDescription:
      "Hauling, Site Clearing & Logistics — commercial excavation and civil services for Barrie, Midland, Orillia, and Simcoe County.",
    hero: {
      breadcrumbParent: "Services",
      titleBefore: "Hauling, Clearing &",
      titleEmphasis: "Logistics",
      lede: "Material import and export, demolition debris, tree clearing, and day-to-day site logistics for active commercial jobs.",
      body: [
        "Our fleet supports ongoing excavation with tri-axle and dump truck hauling for topsoil, fill, granular, and export spoils — paced to your earthwork schedule.",
        "We clear vegetation, remove stumps, and manage debris streams so your site stays organized, safe, and inspection-ready while foundations and utilities advance.",
      ],
    },
    hubStats: [
      { value: "All", label: "Materials", sub: "Import / export" },
      { value: "Full", label: "Logistics", sub: "Site coordination" },
      { value: "Same-day", label: "Dispatch", sub: "When scheduled" },
    ],
    process: {
      eyebrow: "Site logistics",
      heading: "Move material, clear lines, keep pace",
      steps: [
        { id: "01", title: "Waste streams", body: "Segregate spoils, demo debris, and brush for efficient haul-out and tipping." },
        { id: "02", title: "Import schedule", body: "Granular and structural fill coordinated with your geotech and placement plan." },
        { id: "03", title: "Clear & stage", body: "Vegetation, stumps, and obstructions removed to keep production lanes open." },
        { id: "04", title: "Traffic control", body: "Truck routes, pile locations, and dust control aligned with site rules." },
      ],
    },
    scopeStripLabels: ["Overview", "Scope", "Capabilities", "Process", "FAQ", "Related", "Get a quote"],
    intro: [
      "Our fleet supports ongoing excavation with tri-axle and dump truck hauling for topsoil, fill, granular, and export spoils.",
      "We clear vegetation, remove stumps, and manage debris streams so your site stays organized and inspection-ready.",
    ],
    deliverablesHeading: "What we deliver",
    deliverables: [
      "Import and export of granular and fill",
      "Demolition and concrete debris hauling",
      "Tree clearing and brush removal",
      "Rock breaking and hammer work",
      "Site traffic and staging coordination",
    ],
    closingHeading: "Ready to scope your site?",
    trust: {
      id: "trust-logistics",
      heading: "Logistics that keep civil crews productive",
      paragraphs: [
        "A stalled haul route stops every trade downstream. We sequence trucks, stockpiles, and clearances so excavation never waits on a bin or a dump cycle.",
        "From greenfield clearing to tight urban infill, we manage noise, dust, and neighbor interfaces with practical routing and disciplined staging.",
      ],
    },
    subServices: [
      { id: "granular-import-export", heading: "Granular import & export", paragraphs: ["Structural fills and road bases arrive on pace with placement plans.", "Export spoils route to approved tips with load tracking that supports reporting when required."], closing: "Tri-axle and dump fleets for commercial sites." },
      { id: "demolition-concrete-debris", heading: "Demolition & concrete debris", paragraphs: ["Demo streams are separated where recycling credits exist and hauled on schedules that match clearing milestones.", "We coordinate bin swaps or live load trucks for tight footprints where piles cannot linger."], closing: "Commercial interior and selective demolition support." },
      { id: "tree-clearing-stumps", heading: "Tree clearing & stumps", paragraphs: ["Clearing is sequenced ahead of grading so equipment paths stay efficient and protected trees remain undamaged.", "Stumps and root masses are removed to subgrade expectations so fine grading crews are not fighting organics."], closing: "Greenfield and expansion clearing." },
      { id: "rock-breaking-hammer-work", heading: "Rock breaking & hammer work", paragraphs: ["Ledges and obstructions are reduced with hydraulic hammer and hoe-ram support tied to excavation schedules.", "We manage vibration interfaces near structures and utilities with practical standoffs and inspection pauses."], closing: "Rock and ledge reduction for trenches and pads." },
      { id: "staging-traffic-plans", heading: "Staging & traffic plans", paragraphs: ["Laydown and stockpile zones are placed to preserve crane paths, concrete washout, and emergency access.", "We adjust on the fly when weather or trade shifts change the daily plan without losing site rules."], closing: "Active commercial job coordination." },
      { id: "dust-mud-control", heading: "Dust & mud control", paragraphs: ["Wheel washes, dampening, and entrance stone are maintained so haul routes stay neighbor-friendly and safe.", "We coordinate with paving and landscape scopes so temporary surfaces transition cleanly to finals."], closing: "Urban and suburban commercial sites." },
      { id: "rush-dispatch-windows", heading: "Rush dispatch windows", paragraphs: ["When a trench opens unexpectedly or a bridge inspection fails, we prioritize trucks to keep concrete and utility crews moving.", "Same-day availability is subject to fleet load and realistic ETAs."], closing: "Priority response for active sites." },
    ],
    faq: [
      { q: "Can you haul to specific certified fills or tips?", a: "Yes — provide approved sources and tipping requirements; we route trucks and documentation accordingly." },
      { q: "Do you handle night or weekend loads?", a: "Where bylaws and site rules allow, we schedule off-hours hauling for critical path support." },
      { q: "Can you separate clean fill from contaminated spoils?", a: "We segregate streams per environmental plans and haul to the appropriate facilities." },
      { q: "What coverage area do you haul in?", a: "Barrie, Midland, Orillia, and Simcoe County." },
    ],
    ctaOverride: {
      heading: "Line up trucks for your site",
      buttonLabel: "Call dispatch",
      supporting:
        "Tell us material types, volumes, and windows — we will align trucks, routes, and tipping with your superintendent’s plan.",
    },
  },
  "snow-removal": {
    seoTitle: COMMERCIAL_SNOW_SEO.title,
    seoDescription: COMMERCIAL_SNOW_SEO.description,
    hero: {
      breadcrumbParent: "Services",
      titleBefore: "Commercial",
      titleEmphasis: "Snow Removal",
      lede: COMMERCIAL_SNOW_HERO.lede,
      body: COMMERCIAL_SNOW_VALUE_PROP.paragraphs.slice(0, 2),
    },
    hubStats: COMMERCIAL_SNOW_HERO.metrics.map((m) => ({
      value: m.value,
      label: m.label,
      sub: "Commercial snow",
    })),
    process: {
      eyebrow: "Commercial process",
      heading: COMMERCIAL_SNOW_PROCESS.h2,
      steps: COMMERCIAL_SNOW_PROCESS.steps.map((s) => ({ id: s.id, title: s.title, body: s.body })),
    },
    scopeStripLabels: ["Overview", "Services", "Proof", "Operations", "Coverage", "FAQ", "Contact"],
    intro: [COMMERCIAL_SNOW_VALUE_PROP.visibleLede],
    deliverablesHeading: COMMERCIAL_SNOW_EQUIPMENT.h2,
    deliverables: COMMERCIAL_SNOW_EQUIPMENT.items.map((i) => i.name),
    closingHeading: COMMERCIAL_SNOW_CLOSING.h2,
    trust: {
      id: "trust-snow",
      heading: COMMERCIAL_SNOW_WHY_INTRO.h2,
      paragraphs: COMMERCIAL_SNOW_WHY_INTRO.paragraphs.slice(0, 2),
    },
    subServices: COMMERCIAL_SNOW_SERVICE_DEEP_DIVES.map((d) => ({
      id: d.anchor,
      heading: d.summary,
      paragraphs: d.paragraphs,
      closing: d.learnMoreLabel,
    })),
    faq: COMMERCIAL_SNOW_FAQ_SHORT,
    ctaOverride: {
      heading: COMMERCIAL_SNOW_MID_LOWER_CTA.headline,
      buttonLabel: COMMERCIAL_SNOW_HERO.ctas.secondary.label,
      supporting: COMMERCIAL_SNOW_MID_LOWER_CTA.sub,
    },
    extra: {
      snowHub: {
        heroHeading: COMMERCIAL_SNOW_HERO.h1,
        opening: COMMERCIAL_SNOW_VALUE_PROP.paragraphs[0] ?? COMMERCIAL_SNOW_VALUE_PROP.visibleLede,
        valuePropHeading: COMMERCIAL_SNOW_WHY_INTRO.h2,
        valuePropParagraphs: [...COMMERCIAL_SNOW_WHY_INTRO.paragraphs],
        lineBlockHeadings: COMMERCIAL_SNOW_SERVICE_DEEP_DIVES.map((d) => d.summary),
        whyChooseHeading: COMMERCIAL_SNOW_WHY_CHOOSE.h2,
        whyChooseItems: COMMERCIAL_SNOW_WHY_CHOOSE.items.map((i) => i.title),
        propertyTypesHeading: COMMERCIAL_SNOW_PROPERTY_TYPES.h2,
        propertyTypes: COMMERCIAL_SNOW_PROPERTY_TYPES.types.map((t) => t.label),
        processHeading: COMMERCIAL_SNOW_PROCESS.h2,
        processSteps: COMMERCIAL_SNOW_PROCESS.steps.map((s) => s.title),
        closingCtaHeading: COMMERCIAL_SNOW_CLOSING.h2,
        closingCtaParagraphs: [...COMMERCIAL_SNOW_CLOSING.paragraphs],
        closingCtaLabels: COMMERCIAL_SNOW_CLOSING.ctas.map((c) => c.label),
        faqLongFormTodo: "",
      },
    },
  },
};

export const LOCATION_NAMES: Record<LocationSlug, string> = {
  "commercial-snow-removal-barrie-ontario": "Barrie",
  "commercial-snow-removal-orillia-ontario": "Orillia",
  "commercial-snow-removal-innisfil-ontario": "Innisfil",
  "commercial-snow-removal-wasaga-beach-ontario": "Wasaga Beach",
  "commercial-snow-removal-simcoe-county": "Simcoe County",
};

export function getSnowSubServiceInternalHref(slug: SnowSubServiceSlug) {
  return `/services/${slug}/`;
}
