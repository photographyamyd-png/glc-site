/**
 * Verbatim homepage strings from glc-site `HOMEPAGE_COPY_ROLE_MAP.md`.
 * Used only by `GLHomeCopyLab` (prototype at end of homepage).
 */
import { EMAIL_MAILTO, PHONE_DISPLAY, PHONE_TEL } from "@/lib/ground-level/homepage-copy";

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
  primaryCta: {
    label: "Request a Quote",
    href: PHONE_TEL,
    sub: "CALL NOW — FREE ESTIMATE",
  },
  secondaryCta: {
    label: "View Services",
    href: "#services",
    sub: "SCROLL TO SERVICE LINES",
  },
  stats: [
    { value: "15+", label: "Years of Field Experience" },
    { value: "500+", label: "Commercial Projects Completed" },
  ],
  coverageHeading: "Service Coverage",
  coverageTags: ["Barrie", "Midland", "Orillia", "Simcoe County"] as const,
  /** Order matches role map; slugs align with canonical service detail routes. */
  serviceShortcuts: [
    {
      label: "Excavation & Site Prep",
      slug: "excavation-site-preparation",
      sub: "DIGS · CLEARING · MOBILIZATION",
    },
    {
      label: "Site Prep & Grading",
      slug: "site-preparation-grading",
      sub: "PADS · ROADS · FINISH GRADE",
    },
    {
      label: "Foundations & Civil",
      slug: "foundations-civil-infrastructure",
      sub: "FOOTINGS · UTILITIES · CIVIL",
    },
    {
      label: "Drainage & Hardscaping",
      slug: "drainage-hardscaping",
      sub: "WATER · WALLS · HARDSCAPE",
    },
    {
      label: "Hauling & Clearing",
      slug: "hauling-site-clearing-logistics",
      sub: "AGGREGATE · SPOILS · LOGISTICS",
    },
    { label: "Snow Removal", slug: "snow-removal", sub: "COMMERCIAL WINTER OPS" },
  ] as const,
  /** Distinct from featured-bento excavation canonical (`016`) and other homepage field rasters. */
  fieldImageSrc: "/images/services/Excavation/excavation-015.jpg" as const,
  fieldImageAlt:
    "Heavy excavation equipment stripping topsoil on a commercial development site in Simcoe County Ontario",
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
  primaryCta: { label: "Request a Quote", href: PHONE_TEL },
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
  cta: { label: "Discuss Your Project", href: PHONE_TEL },
  mediaStat: { value: "15+", label: "Yrs. Experience" },
  badge: "Licensed & Insured",
  watermark: "GLC",
  imageSrc:
    "/images/services/Foundations/" +
    encodeURIComponent(
      "Ground Level Contracting - Excavation, Foundations, Industrial Construction - Barrie, Orilla, Simcoe County - Muskoka Bedrock- Drainage,  (5 of 34).jpg",
    ),
  imageAlt:
    "Foundation excavation and forming crew on a commercial civil site — Ground Level Contracting Simcoe County",
} as const;

/** FAQ bookend field — distinct from `#hero` default excavation-016. */
export const COPY_LAB_FAQ_BACKDROP = {
  imageSrc: "/images/services/Excavation/excavation-012.jpg" as const,
  imageAlt:
    "Trench and earthwork on a commercial development site — Ground Level Contracting field operations in Simcoe County",
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
  /** Section kicker (Barlow Condensed `.eyebrow`), not the H2. */
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
  ctaLabel: PHONE_DISPLAY,
  ctaHref: PHONE_TEL,
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
      titleAccentKey: "Consultation",
    },
    {
      index: "02",
      title: "Detailed Quote",
      body: "We provide transparent, itemized pricing with no hidden costs. Scope is confirmed before any equipment moves.",
      titleAccentKey: "Quote",
    },
    {
      index: "03",
      title: "Crew Mobilization",
      body: "Our equipment and operators are mobilized to your site efficiently. Safety protocols and site prep completed on day one.",
      titleAccentKey: "Mobilization",
    },
    {
      index: "04",
      title: "Delivery & Signoff",
      body: "Work completed to spec, site documentation provided, and signoff confirmed. Your build can proceed on schedule.",
      titleAccentKey: "Signoff",
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
  eyebrow: "Dispatch-ready crews",
  /** Split for display: line 1 ink-white, line 2 yellow accent (single logical H2). */
  headlineLine1: "Commercial sites — delivered",
  headlineLine2: "Without the vanishing act",
  supporting:
    "Barrie-based dispatch for excavation, civil, drainage, hauling, and winter operations across Midland, Orillia, and Simcoe County.",
  primaryCtaLabel: "Start Your Project On Time",
  primaryCtaHref: PHONE_TEL,
  secondaryCtaLabel: "Email scope & drawings",
  secondaryCtaHref: EMAIL_MAILTO,
  phoneLabel: "Call Direct",
  phoneDisplay: PHONE_DISPLAY,
  phoneHref: PHONE_TEL,
  emailLabel: "Email Us",
  emailHref: EMAIL_MAILTO,
} as const;

/** Post-`#about` homepage stack — agitator band (contractor reliability narrative). */
export const COPY_LAB_AGITATOR = {
  eyebrow: "Site Reality",
  heading: "When Contractors Ghost, Schedules Bleed",
  lede:
    "No-shows, radio silence, and iron that never arrives turn tight pours into expensive standby days. Ground Level is built for dispatch-first commercial work.",
  cards: [
    {
      title: "The Silent No-Show",
      body: "Crews that disappear mid-sequence leave supers guessing and concrete windows collapsing.",
      accent: "01",
    },
    {
      title: "Schedule Drift",
      body: "Every unanswered call stacks delay fees, inspection re-books, and downstream trades idle on your dime.",
      accent: "02",
    },
    {
      title: "Iron Failure",
      body: "Wrong-class equipment or dead mobilization turns a one-day dig into a multi-day recovery.",
      accent: "03",
    },
  ] as const,
  imageAlt:
    "Heavy civil equipment staged for commercial site preparation — Ground Level Contracting Simcoe County",
} as const;

/** Second capability surface after `#services` intro bento — depth + asymmetric spans. */
export const COPY_LAB_CAPABILITY_BENTO = {
  eyebrow: "Capability Depth",
  heading: "Heavy Lifts Where Deadlines Tighten",
  intro:
    "Detailed scopes by line — excavation and winter operations run wide because most schedules break there first. Each row expands on the featured cards above with field-level detail and links to the same canonical service pages.",
} as const;

/** Before/after uses two distinct on-site rasters; slider compares compositionally (not pixel-matched survey pair). */
export const COPY_LAB_PROOF = {
  eyebrow: "Field Proof",
  heading: "Rough Site To Ready-Build Condition",
  caption:
    "Commercial earthworks and finish prep across Barrie and Simcoe County — same dispatch discipline we bring to every mobilization.",
  beforeSrc: "/images/services/Excavation/excavation-007.jpg",
  beforeAlt:
    "Commercial excavation equipment preparing rough site conditions in Simcoe County — before finish grading phase",
  afterSrc: "/images/services/Grading/Ground%20Level%20Contracting%20grading.jpg",
  afterAlt:
    "Grading equipment shaping a commercial site pad — finish prep and turnover-ready surface",
  pullQuote:
    "Ground Level mobilized faster than any contractor we'd used before. Site was prepped and ready two days ahead of our concrete pour — that kind of reliability is rare.",
  pullAttribution: "Marcus T., Project Manager — Commercial Developer, Barrie",
} as const;

export type HomeFaqGroup = {
  /** In-page hash targets for legacy nav (`/#why`, `/#process`, `/#coverage`). */
  anchorId?: "why" | "process" | "coverage";
  sectionTitle?: string;
  items: readonly { q: string; a: string }[];
};

export const COPY_LAB_HOME_FAQ = {
  eyebrow: "Reference",
  heading: "Service Area & Capability FAQ",
  intro:
    "Answers compiled from our commercial positioning, process, coverage, metrics, and client feedback — all retained in-page for search clarity.",
  groups: [
    {
      anchorId: "why",
      sectionTitle: "Why Ground Level",
      items: [
        {
          q: "Why choose Ground Level for commercial excavation and civil work?",
          a:
            `${COPY_LAB_WHY.body} Rapid mobilization, geotechnical depth, PM-friendly communication, and single-source accountability across excavation, drainage, and clearing keep handoffs tight.`,
        },
      ],
    },
    {
      anchorId: "process",
      sectionTitle: "How we work",
      items: [
        {
          q: "What happens after the first call?",
          a: `${COPY_LAB_PROCESS.intro} ${COPY_LAB_PROCESS.steps.map((s) => `${s.index} ${s.title}: ${s.body}`).join(" ")}`,
        },
      ],
    },
    {
      anchorId: "coverage",
      sectionTitle: "Service territory",
      items: [
        {
          q: "Where does Ground Level operate commercially?",
          a: `${COPY_LAB_COVERAGE.body} Territory highlights: ${COPY_LAB_COVERAGE.regions.map((r) => `${r.name} — ${r.sub}`).join("; ")}.`,
        },
      ],
    },
    {
      items: [
        {
          q: "What does Ground Level Contracting provide end-to-end?",
          a: `${COPY_LAB_FEATURED_SERVICES.body} ${COPY_LAB_CAPABILITIES_INTRO}`,
        },
        {
          q: "What field metrics reflect your commercial track record?",
          a: COPY_LAB_STATS.metrics.map((m) => `${m.value} ${m.label}: ${m.sub}`).join(". ") + ".",
        },
        {
          q: "What does excavation and site preparation include?",
          a: COPY_LAB_SERVICE_CARDS[0].description,
        },
        {
          q: "What does site preparation and grading cover?",
          a: COPY_LAB_SERVICE_CARDS[1].description,
        },
        {
          q: "What foundations and civil infrastructure scopes do you take on?",
          a: COPY_LAB_SERVICE_CARDS[2].description,
        },
        {
          q: "How do drainage and hardscaping services support commercial sites?",
          a: COPY_LAB_SERVICE_CARDS[3].description,
        },
        {
          q: "What hauling, clearing, and logistics capabilities are available?",
          a: COPY_LAB_SERVICE_CARDS[4].description,
        },
        {
          q: "How does commercial snow removal operate across Simcoe County?",
          a: COPY_LAB_SERVICE_CARDS[5].description,
        },
      ],
    },
    {
      items: [
        {
          q: "What are commercial clients saying about mobilization and quality?",
          a: `Client feedback snapshot: ${COPY_LAB_TESTIMONIALS.items.map((t) => `“${t.quote}” — ${t.name}, ${t.role}`).join(" ")}`,
        },
      ],
    },
  ] satisfies readonly HomeFaqGroup[],
} as const;
