/**
 * Verbatim homepage strings from glc-site `HOMEPAGE_COPY_ROLE_MAP.md`.
 * Used only by `GLHomeCopyLab` (prototype at end of homepage).
 */

export const COPY_LAB_META = {
  documentTitle:
    "Excavation & Site Preparation Barrie | Simcoe County | Orillia | Innisfil",
  metaDescription:
    "Professional excavation, grading, trenching & site prep across Barrie, Orillia, Wasaga Beach, Innisfil & Simcoe County. Residential, commercial & industrial. Free quotes.",
  openGraphTitle: "Expert Excavation & Site Prep — Serving All of Simcoe County",
  openGraphDescription:
    "From single-lot grading to full commercial site prep — we dig deep across Barrie, Orillia, Wasaga Beach & beyond. Call for a free estimate.",
} as const;

export const COPY_LAB_HERO = {
  eyebrow: "Commercial Excavation & Civil Infrastructure",
  h1Line1: "From",
  h1Line2Emphasis: "Concept",
  h1Line3: "To Creation",
  lede:
    "Ground Level Contracting prepares land for development — delivering excavation, foundations, drainage, and civil infrastructure for project managers and site supervisors across Barrie, Midland, Orillia, and Simcoe County.",
  primaryCta: { label: "Request a Quote", href: "tel:+17056194902" },
  secondaryCta: { label: "View Services", href: "#services" },
  stats: [
    { value: "15+", label: "Years of Field Experience" },
    { value: "500+", label: "Commercial Projects Completed" },
  ],
  coverageHeading: "Service Coverage",
  coverageTags: ["Barrie", "Midland", "Orillia", "Simcoe County"] as const,
  /** Order matches role map; slugs align with canonical service detail routes. */
  serviceShortcuts: [
    { label: "Excavation & Site Prep", slug: "excavation-site-preparation" },
    { label: "Site Prep & Grading", slug: "site-preparation-grading" },
    { label: "Foundations & Civil", slug: "foundations-civil-infrastructure" },
    { label: "Drainage & Hardscaping", slug: "drainage-hardscaping" },
    { label: "Hauling & Clearing", slug: "hauling-site-clearing-logistics" },
    { label: "Snow Removal", slug: "snow-removal" },
  ] as const,
} as const;

export const COPY_LAB_MARQUEE_ITEMS = [
  "Commercial Excavation",
  "Barrie & Simcoe County",
  "Midland & Orillia",
  "Site Preparation",
  "Foundation Specialists",
  "Grading & Pad Prep",
  "Drainage Solutions",
  "Commercial Snow Removal",
  "From Concept to Creation",
] as const;

export const COPY_LAB_FEATURED_SERVICES = {
  eyebrow: "What We Do",
  h2Line1: "Six Core",
  h2Line2: "Service Lines",
  body:
    "From initial site clearing through drainage, hauling, and winter operations, Ground Level Contracting delivers end-to-end excavation and civil infrastructure services for commercial builds across Barrie, Midland, Orillia, and Simcoe County.",
  primaryCta: { label: "Request a Quote", href: "tel:+17056194902" },
  itemTitles: [
    "Excavation & Site Prep",
    "Site Prep & Grading",
    "Foundations & Civil",
    "Drainage & Hardscaping",
    "Hauling & Clearing",
    "Snow Removal",
  ] as const,
} as const;

export const COPY_LAB_ABOUT = {
  eyebrow: "Who We Are",
  headline: "Built On Ground Level — Trusted From Below Up",
  body:
    "Ground Level Contracting is a commercial excavation and civil infrastructure company serving project managers and site supervisors across Barrie, Midland, Orillia, and Simcoe County. We prepare land for development — solving geotechnical challenges efficiently and safely, so your build can proceed on schedule.",
  credentials: [
    { title: "Geotechnical Solutions", sub: "Complex site challenges" },
    { title: "On-Schedule Delivery", sub: "Built around your timeline" },
    { title: "Safety First", sub: "Licensed & insured crews" },
    { title: "B2B Specialists", sub: "PM & supervisor trusted" },
  ] as const,
  cta: { label: "Discuss Your Project", href: "tel:+17056194902" },
  mediaStat: { value: "15+", label: "Yrs. Experience" },
  badge: "Licensed & Insured",
  watermark: "GLC",
  imageAlt:
    "Excavation and site work — Ground Level Contracting crew on a commercial site",
} as const;

/** Role-map order for grid cards → `services/[slug]`. */
/** Verbatim capability band supporting lines from the former `CopyLabServicesGrid` intro. */
export const COPY_LAB_CAPABILITIES_INTRO =
  "Detailed capabilities by line. Each card links to its service page." as const;

export const COPY_LAB_SERVICE_GRID_SLUGS = [
  "excavation-site-preparation",
  "site-preparation-grading",
  "foundations-civil-infrastructure",
  "drainage-hardscaping",
  "hauling-site-clearing-logistics",
  "snow-removal",
] as const;

export const COPY_LAB_SERVICE_CARDS = [
  {
    titleLine1: "Excavation &",
    titleLine2: "Site Preparation",
    description:
      "Mass grading, cut-and-fill operations, topsoil stripping, and site clearing for commercial development projects of all scales.",
    linkLabel: "Learn More",
  },
  {
    titleLine1: "Site Preparation",
    titleLine2: "& Grading",
    description:
      "Rough and fine grading, pad and building line preparation, compaction coordination, and survey-driven finish tolerances for commercial sites.",
    linkLabel: "Learn More",
  },
  {
    titleLine1: "Foundations &",
    titleLine2: "Civil Infrastructure",
    description:
      "Footing trenches, frost wall excavation, shoring, and civil infrastructure installation for commercial and industrial construction.",
    linkLabel: "Learn More",
  },
  {
    titleLine1: "Drainage &",
    titleLine2: "Hardscaping",
    description:
      "Grading for surface drainage, storm pipe installation, catch basins, armor stone, interlock pavers, and retaining structures.",
    linkLabel: "Learn More",
  },
  {
    titleLine1: "Hauling, Site Clearing",
    titleLine2: "& Logistics",
    description:
      "Material hauling, demolition debris removal, tree clearing, rock breaking, and full site logistics management.",
    linkLabel: "Learn More",
  },
  {
    titleLine1: "Snow Removal",
    titleLine2: "Services",
    description:
      "Commercial snow plowing, salting, and site management contracts for parking lots, roadways, and commercial properties across Barrie, Midland, Orillia, and Simcoe County.",
    linkLabel: "Learn More",
  },
] as const;

export const COPY_LAB_STATS = {
  /** Section kicker (Barlow `.eyebrow`), not the H2. */
  eyebrow: "Performance",
  /** Oswald section title — matches “field metrics” bands elsewhere. */
  heading: "Field metrics",
  metrics: [
    {
      value: "15+",
      label: "Years of Experience",
      sub: "Field-proven expertise",
    },
    {
      value: "500+",
      label: "Projects Completed",
      sub: "Commercial builds",
    },
    {
      value: "4 Areas",
      label: "Service Coverage",
      sub: "Barrie, Midland, Orillia & Simcoe",
    },
    {
      value: "100%",
      label: "Project Satisfaction",
      sub: "On time, every time",
    },
  ] as const,
} as const;

export const COPY_LAB_WHY = {
  eyebrow: "Why Ground Level",
  headline: "The Right Crew For Complex Ground Conditions",
  body:
    "We have the human resources, expertise, experience, and financial stability to respond quickly and complete projects safely and successfully. Our teams are built for commercial-scale work where timelines are non-negotiable and site conditions are rarely simple.",
  reasons: [
    {
      index: "01",
      title: "Rapid Mobilization",
      body: "Equipment and crews on-site fast. Built for urgent commercial dispatch.",
    },
    {
      index: "02",
      title: "Geotechnical Depth",
      body: "We solve challenging ground conditions — rock, clay, high water table — without delaying your build.",
    },
    {
      index: "03",
      title: "PM-Friendly Communication",
      body: "Direct lines, daily updates, and documentation that keeps your project files clean.",
    },
    {
      index: "04",
      title: "Single-Source Accountability",
      body: "One contractor across excavation, drainage, and clearing — fewer handoffs, tighter coordination.",
    },
  ] as const,
  ctaLabel: "705-619-4902",
  ctaHref: "tel:+17056194902",
  chipLine1: "Simcoe County's",
  chipLine2: "Preferred Excavator",
} as const;

export const COPY_LAB_PROCESS = {
  eyebrow: "How It Works",
  headline: "From First Call to Final Grade",
  intro:
    "We move fast. Every project begins with a site call, gets a clean quote, and ends with signed-off documentation. No surprises.",
  steps: [
    {
      index: "01",
      title: "Site Consultation",
      body: "Call or email us with your site address and scope. We review conditions and provide a clear assessment.",
    },
    {
      index: "02",
      title: "Detailed Quote",
      body: "We provide transparent, itemized pricing with no hidden costs. Scope is confirmed before any equipment moves.",
    },
    {
      index: "03",
      title: "Crew Mobilization",
      body: "Our equipment and operators are mobilized to your site efficiently. Safety protocols and site prep completed on day one.",
    },
    {
      index: "04",
      title: "Delivery & Signoff",
      body: "Work completed to spec, site documentation provided, and signoff confirmed. Your build can proceed on schedule.",
    },
  ] as const,
} as const;

export const COPY_LAB_COVERAGE = {
  eyebrow: "Service Territory",
  headline: "Serving Barrie, Midland, Orillia & Simcoe County",
  body:
    "Ground Level Contracting is based in Barrie and operates commercially throughout our defined service territory. We move quickly across Barrie, Midland, Orillia, and Simcoe County — no extended mobilization delays.",
  regions: [
    { name: "Barrie", sub: "Primary base & dispatch" },
    { name: "Midland", sub: "Commercial & industrial sites" },
    { name: "Orillia", sub: "Lake Country corridor" },
    { name: "Simcoe County", sub: "County-wide coverage" },
  ] as const,
} as const;

export const COPY_LAB_TESTIMONIALS = {
  eyebrow: "Client Feedback",
  headline: "Trusted by Site Supervisors & PMs",
  intro:
    "Ground Level Contracting is built for commercial relationships. Here's what the teams we work with have to say.",
  items: [
    {
      quote:
        "Ground Level mobilized faster than any contractor we'd used before. Site was prepped and ready two days ahead of our concrete pour — that kind of reliability is rare.",
      name: "Marcus T.",
      role: "Project Manager — Commercial Developer, Barrie",
    },
    {
      quote:
        "We brought them in on a challenging Simcoe County site with heavy rock. They diagnosed the issue, adjusted their approach same day, and kept us on schedule. Exactly who you want on complex ground.",
      name: "Diane P.",
      role: "Site Supervisor — General Contractor, Midland",
    },
    {
      quote:
        "Professional, communicative, and thorough. The drainage install was clean, documented properly, and the final grading passed inspection first time. Will be using Ground Level on all our Simcoe County projects going forward.",
      name: "James R.",
      role: "Construction Coordinator — Simcoe County",
    },
  ] as const,
} as const;

export const COPY_LAB_CLOSING_CTA = {
  eyebrow: "Ready to Build?",
  headline: "Start With a Site Consultation",
  supporting:
    "Commercial projects across Barrie, Midland, Orillia, and Simcoe County. Affordable, reliable, satisfaction guaranteed.",
  phoneLabel: "Call Direct",
  phoneDisplay: "705-619-4902",
  phoneHref: "tel:+17056194902",
  emailLabel: "Email Us",
  emailHref: "mailto:info@groundlevelcontracting.com",
} as const;
