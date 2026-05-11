/**
 * Foundations & Civil Infrastructure hub + sub-route copy, paths, and metadata.
 * Visible UI blocks follow ≤2-sentence discipline; lists and headings carry SEO depth.
 */

export const FOUNDATIONS_HUB_SLUG = "foundations-civil-infrastructure" as const;

export const FOUNDATIONS_HUB_PATH = `/services/${FOUNDATIONS_HUB_SLUG}/` as const;

/** Canonical sub-route slugs (under FOUNDATIONS_HUB_PATH). */
export const FOUNDATIONS_SUB_SLUGS = [
  "foundation-excavation-backfilling",
  "concrete-footings-walls-pads-grade-beams",
  "multi-storey-high-rise-foundations",
  "subdivision-site-servicing",
  "earthworks-mass-excavation",
  "commercial-municipal-foundation-work",
  "foundation-repair-underpinning",
  "structural-engineering-foundation-solutions",
] as const;

export type FoundationsSubSlug = (typeof FOUNDATIONS_SUB_SLUGS)[number];

const FOUNDATIONS_PHOTO_PREFIX =
  "Ground Level Contracting - Excavation, Foundations, Industrial Construction - Barrie, Orilla, Simcoe County - Muskoka Bedrock- Drainage,  ";

/** Stable hero/section images per sub-topic (n of 34). */
const SUB_PHOTO_INDEX: Record<FoundationsSubSlug, number> = {
  "foundation-excavation-backfilling": 10,
  "concrete-footings-walls-pads-grade-beams": 11,
  "multi-storey-high-rise-foundations": 15,
  "subdivision-site-servicing": 16,
  "earthworks-mass-excavation": 20,
  "commercial-municipal-foundation-work": 21,
  "foundation-repair-underpinning": 26,
  "structural-engineering-foundation-solutions": 32,
};

export function getFoundationsSubImageSrc(slug: FoundationsSubSlug): string {
  const n = SUB_PHOTO_INDEX[slug];
  const name = `${FOUNDATIONS_PHOTO_PREFIX}(${n} of 34).jpg`;
  return `/images/services/Foundations/${encodeURIComponent(name)}`;
}

export function getFoundationsSubImageAlt(slug: FoundationsSubSlug): string {
  const alts: Record<FoundationsSubSlug, string> = {
    "foundation-excavation-backfilling":
      "foundation excavation contractor operating excavator on commercial project site in Barrie Ontario",
    "concrete-footings-walls-pads-grade-beams":
      "poured concrete foundation walls being formed for new residential build in Simcoe County Ontario",
    "multi-storey-high-rise-foundations":
      "multi-storey foundation excavation and forming for apartment development in Barrie Ontario",
    "subdivision-site-servicing":
      "subdivision site servicing with road grading and utility trench installation in Simcoe County Ontario",
    "earthworks-mass-excavation":
      "mass excavation earthworks for commercial development project near Orillia Simcoe County Ontario",
    "commercial-municipal-foundation-work":
      "commercial foundation and civil crew on municipal-scale jobsite in Barrie Ontario",
    "foundation-repair-underpinning":
      "concrete underpinning repair under existing residential foundation in Barrie Ontario",
    "structural-engineering-foundation-solutions":
      "helical pile installation for engineering-based foundation solution in Simcoe County Ontario",
  };
  return alts[slug];
}

export const FOUNDATIONS_HUB_SEO = {
  title: "Foundations & Civil Infrastructure | Barrie, Simcoe County",
  description:
    "Commercial & civil foundation contractor serving Barrie, Orillia, Innisfil & Simcoe County. Excavation, forming, site servicing & underpinning. Get a quote.",
  ogTitle: "Foundations & Civil Infrastructure | Barrie & Simcoe County",
  ogDescription:
    "Licensed foundation and civil infrastructure contractor serving Barrie, Orillia, Wasaga Beach, Innisfil & Simcoe County. Excavation, forming, grade beams, site servicing, underpinning & more.",
} as const;

export const FOUNDATIONS_COMPANY = "Ground Level Contracting";

export const FOUNDATIONS_HUB_HERO = {
  h1: "Foundations & Civil Infrastructure Built to Last — Serving Barrie, Orillia & Simcoe County",
  h2: "From Single-Family Footings to Multi-Storey Groundwork, Subdivision Site Servicing & Municipal Contracts — We Deliver the Structural Integrity Every Project Demands",
  introA:
    "When a project demands precision from the ground up, builders, developers, engineers, and municipalities across Barrie, Orillia, Innisfil, Wasaga Beach, and Simcoe County turn to Ground Level Contracting.",
  introB:
    "We specialize in foundations and civil infrastructure at every scale — from concrete footings and grade beams on residential builds, to mass excavation, subdivision site servicing, and full foundation packages for commercial and high-rise developments.",
  introC:
    "Our crews handle every phase of foundation and civil work: excavation, forming, pouring, backfilling, site servicing, underpinning, and structural solutions.",
  introD:
    "We carry full WSIB registration and liability insurance, and we work directly with structural engineers, general contractors, and municipal project managers.",
  ctaPrimaryLabel: "Request a Project Quote",
  ctaPhoneLabel: "Call Us Now: 705-619-4902",
  microcopy: "No obligation. Licensed & insured. We respond within 1 business day.",
} as const;

/** Bento / overview — each body ≤2 sentences. */
export const FOUNDATIONS_TRUST_BENTO = [
  {
    title: "Fully Licensed & Insured in Ontario",
    body: "We are the civil infrastructure contractor Simcoe County teams call for bonded, insured field leadership on foundations and civil infrastructure. Barrie, Orillia, and regional municipal work stay on one accountable roster.",
  },
  {
    title: "WSIB Registered & In Good Standing",
    body: "WSIB clearance certificates are available for GC and owner files. Field crews operate under documented safety expectations on every site.",
  },
  {
    title: "OBC Compliant — All Work to Code",
    body: "Work aligns with Ontario Building Code requirements and inspection schedules. We coordinate holds before backfill and pour windows close.",
  },
  {
    title: "Engineers, Architects & GCs",
    body: "We work from structural engineer drawings and civil plans with a foundation contractor Barrie Ontario teams can brief quickly. RFIs stay tight when the office and field share one thread.",
  },
  {
    title: "Commercial, Residential & Municipal Experience",
    body: "Heavy civil contractor Barrie developers use for mass cuts also delivers residential footings when schedules stack. One roster, one point of contact.",
  },
] as const;

export const FOUNDATIONS_SERVICES_INTRO =
  "Ground Level Contracting is Simcoe County's civil and foundation contractor of choice for projects that demand more than a residential crew can offer.";

export const FOUNDATIONS_SERVICES_INTRO_B =
  "We bring heavy equipment, engineering-grade precision, and experienced site management to every job — whether that's a concrete footing package for a custom home in Innisfil, a grade beam contractor Simcoe County industrial clients specify, or municipal infrastructure anywhere in the region.";

export const FOUNDATIONS_SERVICE_CARDS: {
  title: string;
  slug: FoundationsSubSlug;
  blurb: string;
}[] = [
  {
    title: "Foundation Excavation & Backfilling",
    slug: "foundation-excavation-backfilling",
    blurb: "Foundation excavation contractor Barrie teams call for tight trenches, engineered backfill, and documented lifts.",
  },
  {
    title: "Concrete Footings, Walls, Pads & Grade Beams",
    slug: "concrete-footings-walls-pads-grade-beams",
    blurb: "Concrete forming contractor Barrie Ontario projects rely on for footings, walls, pads, and grade beams to IFC.",
  },
  {
    title: "Multi-Storey & High-Rise Foundations",
    slug: "multi-storey-high-rise-foundations",
    blurb: "Deep packages for mid- and high-rise work with shoring coordination and single-source accountability.",
  },
  {
    title: "Subdivision Site Servicing",
    slug: "subdivision-site-servicing",
    blurb: "Subdivision site servicing contractor Barrie developers use for storm, sanitary, water, and road subgrade to municipal standards.",
  },
  {
    title: "Earthworks & Mass Excavation",
    slug: "earthworks-mass-excavation",
    blurb: "Mass excavation contractor Barrie Ontario sites need for bulk cut-to-fill, proof rolling, and export discipline.",
  },
  {
    title: "Commercial & Municipal Foundation Work",
    slug: "commercial-municipal-foundation-work",
    blurb: "Bonding-friendly documentation and municipal pacing for public-sector foundation and civil scopes.",
  },
  {
    title: "Foundation Repair & Underpinning",
    slug: "foundation-repair-underpinning",
    blurb: "Foundation underpinning contractor Barrie property owners and engineers specify for settlement, cracks, and upgrades.",
  },
  {
    title: "Structural & Engineering-Based Foundation Solutions",
    slug: "structural-engineering-foundation-solutions",
    blurb: "Helical piles, shoring, and geotechnical-driven details when standard footings are not enough.",
  },
];

export const FOUNDATIONS_WHY = [
  {
    heading: "Scale & Equipment",
    body: "Most foundation contractors in Simcoe County are set up for residential work. Our equipment fleet and crew depth take on commercial and municipal scale — multi-storey packages, subdivision site servicing, and mass earthworks smaller operators cannot absorb.",
  },
  {
    heading: "Engineering-Grade Precision",
    body: "We work directly from structural engineering drawings and civil plans. Every dig, pour, and compaction lift tracks spec so your foundation passes inspection the first time.",
  },
  {
    heading: "Single-Source Accountability",
    body: "From the first bucket to final backfill, one crew and one contract cover the foundation and civil scope. That keeps schedules and budgets predictable for your superintendent.",
  },
] as const;

export const FOUNDATIONS_SERVICE_AREA = {
  heading: "Foundation & Civil Infrastructure Services Across Simcoe County & Central Ontario",
  intro:
    "Ground Level Contracting is based in Simcoe County and operates throughout the region. We are local, we know the soil conditions, the municipalities, and the projects in this area.",
  introB:
    "Our equipment and teams are available across all of the following communities — foundations and civil infrastructure Barrie projects stay on the same dispatch rhythm as Orillia and Wasaga Beach calls.",
  closing: "Working on a project outside these areas? Call us — if it's within reach, we want to hear about it.",
  cities: [
    "Barrie",
    "Orillia",
    "Innisfil",
    "Wasaga Beach",
    "Springwater",
    "Angus",
    "Collingwood",
    "Midland",
    "Penetanguishene",
    "Bradford",
    "Cookstown",
    "Essa",
    "Oro-Medonte",
    "New Tecumseth",
    "Alcona",
    "Stroud",
    "Thornton",
    "Minesing",
    "Churchill",
    "Gilford",
  ] as const,
} as const;

export const FOUNDATIONS_FAQ = [
  {
    q: "What types of foundation work do you handle?",
    a: "We handle foundation excavation, concrete forming, footings, poured walls, grade beams, slabs, and flatwork for residential, commercial, and industrial projects. We also deliver subdivision site servicing, mass earthworks, foundation repair, and underpinning.",
  },
  {
    q: "Do you work with structural engineers and general contractors?",
    a: "Yes — most work runs from structural engineering drawings and civil plans. We coordinate with your engineer, GC, and municipal inspector throughout the job.",
  },
  {
    q: "Can you handle large commercial and multi-storey foundation packages?",
    a: "Yes — we carry the equipment depth, crew capacity, and project management experience for multi-storey residential, mixed-use commercial, and industrial foundation packages from excavation through final backfill.",
  },
  {
    q: "Are you WSIB covered and fully insured?",
    a: "Yes — WSIB registration stays in good standing and liability insurance is active. Certificates are available for municipal, commercial, or residential files, and work follows Ontario Building Code expectations.",
  },
  {
    q: "What areas do you serve for foundation and civil work?",
    a: "We serve Barrie, Orillia, Innisfil, Wasaga Beach, Collingwood, Midland, Bradford, Angus, Springwater, Essa, Oro-Medonte, and throughout Simcoe County and Central Ontario.",
  },
] as const;

export const FOUNDATIONS_MID_CTA = {
  heading: "Have a Project in Barrie or Simcoe County? Let's Talk.",
  sub: "Foundations, Civil Infrastructure, Earthworks & Site Servicing — Commercial, Residential & Municipal. Free consultations. Detailed project quotes.",
  microcopy: "No obligation. We respond within 1 business day.",
} as const;

export const FOUNDATIONS_FINAL_CTA = {
  heading: "Request a Project Quote — We Respond Within 1 Business Day",
  bodyA:
    "Whether you're a developer planning a subdivision in Innisfil, a GC needing a foundation package for a commercial build in Barrie, an engineer looking for a civil contractor for a municipal contract in Orillia, or a homeowner dealing with a foundation repair in Wasaga Beach — we want to hear about your project.",
  bodyB:
    "Call us or send us a message. We provide free consultations, detailed project quotes, and a straight answer on whether we're the right fit for your scope.",
  tagline: "Proudly serving Barrie, Orillia, Innisfil, Wasaga Beach & Simcoe County, Ontario",
} as const;

export type FoundationsSubPageContent = {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  h2: string;
  heroLead: string;
  heroMore: string[];
  servicesHeading: string;
  bullets: string[];
  ctaParagraph: string;
  ctaButtonLabel: string;
};

export const FOUNDATIONS_SUBPAGE_COPY: Record<FoundationsSubSlug, FoundationsSubPageContent> = {
  "foundation-excavation-backfilling": {
    seoTitle: "Foundation Excavation & Backfilling | Barrie ON",
    seoDescription:
      "Professional foundation excavation and backfilling for residential & commercial projects in Barrie, Orillia & Simcoe County. Compliant, precise, on schedule.",
    h1: "Foundation Excavation & Backfilling — Barrie, Simcoe County & Surrounding Areas",
    h2: "Precise Digs. Clean Grades. Backfill Done to Spec. Every Time.",
    heroLead:
      "A precise foundation excavation is the most important first step in any build. Ground Level Contracting provides professional foundation excavation and backfilling for residential, commercial, industrial, and multi-unit developments throughout Barrie, Orillia, Innisfil, Wasaga Beach, and Simcoe County.",
    heroMore: [
      "Our operators work from engineered drawings and hold tight grade tolerances while protecting everything around the dig site. We coordinate directly with your structural engineer or general contractor so every dig is to spec before forming starts.",
      "Once the foundation is poured and waterproofed, our team handles all backfill and compaction to Ontario Building Code standards.",
    ],
    servicesHeading: "What's Included in Our Foundation Excavation & Backfilling Service",
    bullets: [
      "Bulk foundation excavation — all soil conditions, all depths",
      "Haul-off and spoil disposal",
      "Granular base preparation under footings and slabs",
      "Perimeter drain installation coordination",
      "Engineered backfill — granular A, B, and structural fill",
      "Compaction in lifts — plate compactor and drum roller",
      "Density testing available where specified by your engineer",
      "Rock breaking and removal where required",
    ],
    ctaParagraph:
      "Planning a foundation dig in Barrie, Orillia, Innisfil, or anywhere across Simcoe County? Call Ground Level Contracting for a free on-site consultation and detailed project quote. We respond within 1 business day.",
    ctaButtonLabel: "Request a Free Project Quote",
  },
  "concrete-footings-walls-pads-grade-beams": {
    seoTitle: "Concrete Forming: Footings, Walls & Grade Beams | Barrie",
    seoDescription:
      "Expert concrete forming in Barrie & Simcoe County. Footings, poured walls, grade beams, steps, pads & flatwork for residential and commercial builds.",
    h1: "Concrete Forming — Footings, Foundation Walls, Grade Beams & Flatwork in Barrie & Simcoe County",
    h2: "Residential Footings to Commercial Grade Beams — We Form It, Pour It, and Get It Right",
    heroLead:
      "From concrete footings and poured foundation walls to grade beams, equipment pads, exterior steps, and commercial flatwork — Ground Level Contracting handles the full range of concrete forming across Barrie, Orillia, and Simcoe County.",
    heroMore: [
      "Our forming crews are experienced with conventional plywood-and-steel systems and engineered forming systems for complex commercial applications. We pour to structural specs, coordinate inspections with your engineer, strip and cure per their direction, and deliver finished concrete that meets or exceeds Ontario Building Code.",
      "Whether it's a single residential footing or a full commercial grade beam package — the standard doesn't change.",
    ],
    servicesHeading: "What We Form & Pour",
    bullets: [
      "Concrete footings — residential and commercial, all sizes",
      "Poured concrete foundation walls — ICF coordination available",
      "Grade beams — slab-on-grade and modular construction",
      "Concrete pads — equipment, mechanical, transformer, utility",
      "Exterior concrete steps and landings",
      "Flatwork — floors, aprons, tipping pads, loading docks",
      "Column pads and piers",
      "Concrete curbs, retaining walls, and barrier systems",
    ],
    ctaParagraph:
      "Need concrete forming in Barrie, Innisfil, Orillia, or Wasaga Beach? Ground Level Contracting provides free project consultations and detailed quotes for all concrete forming work across Simcoe County. Call today or send us your drawings.",
    ctaButtonLabel: "Request a Free Quote",
  },
  "multi-storey-high-rise-foundations": {
    seoTitle: "High-Rise & Multi-Storey Foundations | Simcoe County ON",
    seoDescription:
      "Full-scope foundation packages for multi-storey and high-rise buildings in Barrie & Central Ontario. Engineered, single-source, scalable. Contact us today.",
    h1: "Multi-Storey & High-Rise Foundation Contractor — Barrie & Central Ontario",
    h2: "When the Scale Exceeds What a Residential Crew Can Deliver — Call Us",
    heroLead:
      "Large-scale building starts at the ground. Ground Level Contracting has the equipment depth, crew experience, and project management capability to execute complete foundation packages for multi-storey residential, mixed-use, and commercial high-rise developments.",
    heroMore: [
      "We coordinate with structural engineers and project owners from pre-construction through to substantial completion of all groundwork — managing excavation, shoring, forming, concrete placement, waterproofing, and backfill as a single-source contractor.",
      "Developers and general contractors across Barrie, Orillia, Innisfil, and Simcoe County call us when the complexity of a foundation package goes beyond what a residential operator can handle.",
    ],
    servicesHeading: "Our Multi-Storey Foundation Capabilities",
    bullets: [
      "Deep foundation excavation — multi-level underground parking, below-grade mechanical rooms",
      "Shoring and lagging systems for adjacent structure protection",
      "Engineered concrete wall and column systems",
      "Grade beam and slab packages for multi-unit structures",
      "Waterproofing and drainage coordination",
      "Multi-trade and schedule coordination across all groundwork phases",
      "Single-source contract from excavation through final backfill",
    ],
    ctaParagraph:
      "Developing a multi-storey or high-rise project in Barrie, Orillia, or Simcoe County? Ground Level Contracting offers free project consultations and has the capacity to execute full foundation packages at any scale. Contact us early in your planning process — we work best when we're involved from the start.",
    ctaButtonLabel: "Request a Project Consultation",
  },
  "subdivision-site-servicing": {
    seoTitle: "Subdivision Site Servicing | Barrie & Simcoe County",
    seoDescription:
      "Roads, utilities, storm & sanitary sewer systems for subdivision development in Simcoe County. Civil infrastructure built to municipal standards.",
    h1: "Subdivision Site Servicing — Roads, Utilities & Drainage Infrastructure in Simcoe County",
    h2: "From Raw Land to a Fully Serviced Subdivision — We Handle Every Underground Phase",
    heroLead:
      "Turning raw land into a serviced subdivision takes a civil contractor with the capacity, equipment, and technical knowledge to deliver every component of underground infrastructure — on time, on budget, and to municipal standards.",
    heroMore: [
      "Ground Level Contracting provides complete subdivision site servicing for residential and mixed-use developments across Simcoe County, including Barrie, Orillia, Innisfil, Wasaga Beach, and surrounding municipalities.",
      "We work from civil engineering drawings to install road subgrades, water mains, sanitary sewers, storm sewers, catch basins, manholes, gas utility corridors, and surface drainage systems. Every scope is executed to municipal standards and coordinated directly with your engineers and inspectors.",
    ],
    servicesHeading: "Subdivision Site Servicing — What We Install",
    bullets: [
      "Road base and subgrade construction",
      "Watermain installation — all diameters and materials",
      "Sanitary sewer systems — mains, laterals, manholes",
      "Storm sewer and drainage infrastructure",
      "Catch basin and manhole installation",
      "Grading and roadside ditching",
      "Utility corridor preparation — gas, telecom, electrical",
      "As-built survey coordination",
    ],
    ctaParagraph:
      "Developing a residential or mixed-use subdivision in Barrie, Innisfil, Orillia, or anywhere in Simcoe County? Ground Level Contracting provides free project consultations and competitive pricing for full subdivision site servicing packages. Get in touch early — site servicing planning starts well before ground break.",
    ctaButtonLabel: "Get a Site Servicing Quote",
  },
  "earthworks-mass-excavation": {
    seoTitle: "Mass Excavation & Earthworks Contractor | Barrie ON",
    seoDescription:
      "Large-scale earthworks and mass excavation for commercial, subdivision and municipal projects in Barrie, Orillia & Simcoe County. Free project quote.",
    h1: "Mass Excavation & Commercial Earthworks Contractor — Barrie, Orillia & Simcoe County",
    h2: "Large-Scale Earth Movement Done Efficiently, Accurately, and On Schedule",
    heroLead:
      "When a project calls for moving a lot of earth fast and precisely, Ground Level Contracting brings the equipment fleet and experienced operators to get it done. We serve commercial developers, subdivision builders, industrial clients, and municipalities requiring bulk earthworks across Barrie, Orillia, Wasaga Beach, Innisfil, and all of Simcoe County.",
    heroMore: [
      "Our earthworks capability covers site stripping, cut-and-fill operations, bulk excavation, subgrade preparation, material haulage, and engineered fill placement. Every earthworks project is completed with grade control and documented compaction — because what we build on top depends entirely on what we do below.",
    ],
    servicesHeading: "Our Earthworks & Mass Excavation Capabilities",
    bullets: [
      "Topsoil stripping and stockpiling",
      "Bulk cut-and-fill operations to engineered grades",
      "Commercial and industrial site grading",
      "Subgrade preparation for roads, buildings, and parking",
      "Rock breaking and removal",
      "Engineered fill placement and compaction",
      "Material haulage — on-site and off-site",
      "Erosion and sediment control installation",
    ],
    ctaParagraph:
      "Planning a large earthworks scope in Barrie, Orillia, Wasaga Beach, or across Simcoe County? Ground Level Contracting offers free project consultations and equipment-capacity quotes. Contact us to discuss your timeline, volume requirements, and site conditions.",
    ctaButtonLabel: "Request a Free Quote",
  },
  "commercial-municipal-foundation-work": {
    seoTitle: "Commercial & Municipal Foundation Work | Barrie ON",
    seoDescription:
      "Foundation contractor for commercial and city contracts in Barrie & Simcoe County. Bonded, insured, prequalified for municipal and public sector projects.",
    h1: "Commercial & Municipal Foundation Contractor — Barrie & Simcoe County",
    h2: "Bonded, Insured & Prequalified for Commercial and Public Sector Foundation Contracts",
    heroLead:
      "Commercial and municipal foundation work demands a different level of accountability than a residential project. Tighter schedules, engineering oversight, documentation requirements, bonding, and multi-trade coordination are table stakes.",
    heroMore: [
      "Ground Level Contracting is set up to meet those requirements for foundation and civil contracts in Barrie, Simcoe County, and surrounding municipalities. We work with general contractors, developers, facility managers, and municipal project managers on commercial and public-sector foundation scopes — from single-building commercial pad foundations to multi-phase civil infrastructure for city contracts.",
      "All work is WSIB-covered, fully insured, and executed to the documentation standards your project requires.",
    ],
    servicesHeading: "Commercial & Municipal Foundation Work We Do",
    bullets: [
      "Commercial building pad and strip foundations",
      "Industrial facility foundation packages",
      "Institutional foundations — schools, municipal facilities, arenas",
      "Underground parking structure foundations",
      "Utility and public infrastructure civil work",
      "Municipal road and servicing contracts",
      "Prequalified contractor for bid submissions — bonding and insurance documentation available",
    ],
    ctaParagraph:
      "Working on a commercial or municipal project in Barrie, Orillia, Wasaga Beach, or Simcoe County? Ground Level Contracting is available for tender packages, prequalification submissions, and direct sub-contract discussions. Contact our commercial project team to discuss scope, capacity, and scheduling.",
    ctaButtonLabel: "Contact Our Commercial Team",
  },
  "foundation-repair-underpinning": {
    seoTitle: "Foundation Repair & Underpinning | Barrie, Simcoe County",
    seoDescription:
      "Foundation repair and underpinning for all building types in Barrie & Simcoe County. Structural solutions engineered and contractor-installed. Call today.",
    h1: "Foundation Repair & Underpinning — All Building Types in Barrie & Simcoe County",
    h2: "Foundation Moving, Cracking, or Settling? We Fix It Right — Engineered, Documented, Done.",
    heroLead:
      "Foundation movement, settlement, cracking, or inadequate bearing capacity isn't something you patch and hope for the best. It needs to be assessed properly and fixed correctly.",
    heroMore: [
      "Ground Level Contracting provides foundation repair and underpinning services for residential, commercial, industrial, and heritage buildings across Barrie, Orillia, Innisfil, Wasaga Beach, and Simcoe County.",
      "We work from a structural engineering assessment to design and execute the right repair method for your situation — whether that's mass concrete underpinning, a beam-and-base system, mini-pile solutions, or helical pier installation. Every repair is documented and signed off by the project engineer.",
    ],
    servicesHeading: "Foundation Repair & Underpinning Services",
    bullets: [
      "Mass concrete underpinning — residential and commercial",
      "Beam and base underpinning systems",
      "Helical pier and micro-pile installation",
      "Foundation crack repair and injection",
      "Interior and exterior waterproofing coordination",
      "Lowering basement floors to increase headroom",
      "Commercial and industrial foundation remediation",
      "Heritage and legacy building foundation support",
    ],
    ctaParagraph:
      "Noticing cracks, settlement, or movement in your foundation in Barrie, Orillia, or anywhere across Simcoe County? Don't wait — foundation issues don't fix themselves. Contact Ground Level Contracting for a free consultation. We'll review your situation and recommend the right solution.",
    ctaButtonLabel: "Book a Free Foundation Consultation",
  },
  "structural-engineering-foundation-solutions": {
    seoTitle: "Structural Foundation Solutions | Barrie Ontario",
    seoDescription:
      "Engineering-based foundation solutions for complex soil and structural challenges in Barrie, Orillia & Simcoe County. Helical piles, shoring, deep foundations.",
    h1: "Structural & Engineering-Based Foundation Solutions — Barrie & Simcoe County",
    h2: "Complex Soil Conditions. Unusual Structures. Engineered Solutions That Last.",
    heroLead:
      "Not every foundation situation fits a standard approach. Unstable soils, high groundwater, adjacency to existing structures, tight site constraints, or unusual load requirements all call for engineering-based solutions that go beyond what a standard forming crew is equipped to handle.",
    heroMore: [
      "Ground Level Contracting works alongside structural engineers and geotechnical consultants to design and install the right deep or complex foundation solution for challenging conditions in Barrie, Orillia, Innisfil, Wasaga Beach, and across Simcoe County.",
      "From helical piles and grade beams to temporary shoring systems and engineered deep foundations — we execute the plan your engineer designs.",
    ],
    servicesHeading: "Engineering-Based Foundation Solutions We Install",
    bullets: [
      "Helical pile foundation systems — residential and commercial",
      "Grade beam systems over pile caps",
      "Temporary and permanent shoring — soldier piles, lagging, tiebacks",
      "Deep foundation excavation for below-grade structures",
      "Engineered fill systems for soft or variable soil conditions",
      "Dewatering coordination for high-groundwater sites",
      "Geotechnical recommendation implementation",
      "Foundation load transfer and underpinning for structural modifications",
    ],
    ctaParagraph:
      "Have a foundation challenge in Barrie, Simcoe County, or Central Ontario that doesn't fit the standard playbook? Ground Level Contracting works alongside your structural engineer to find the right solution and execute it precisely. Contact us for a free consultation on complex scope.",
    ctaButtonLabel: "Discuss Your Project",
  },
};

export function isFoundationsSubSlug(s: string): s is FoundationsSubSlug {
  return (FOUNDATIONS_SUB_SLUGS as readonly string[]).includes(s);
}

/*
 * STEP 29 — Heading outline (all 9 pages, single H1 each; H2 follows H1 on subs):
 * Hub: H1 hero; H2 hero subhead; tab panels use H2 for panel titles where needed; FAQ H2; service area H2.
 * Subs: H1 page title; H2 subhead; H2 services list; no H3 required.
 * STEP 30 — Pre-publish: hub has trust bento, 8 service links, why accordion, areas text, FAQ visible, CTAs + tel, JSON-LD; subs have bullets, CTA, back link, unique meta.
 */
