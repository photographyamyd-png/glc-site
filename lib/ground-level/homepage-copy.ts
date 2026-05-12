/**
 * Canonical homepage copy — verbatim stakeholder strings. Do not paraphrase.
 */
import type { GLProcessStructuredStep } from "@/lib/ground-level/process-step-types";

export const PAGE_TITLE =
  "Excavation & Site Preparation Barrie | Simcoe County | Orillia | Innisfil";

export const META_DESCRIPTION =
  "Professional excavation, grading, trenching & site prep across Barrie, Orillia, Wasaga Beach, Innisfil & Simcoe County. Residential, commercial & industrial. Free quotes.";

export const OG_TITLE = "Expert Excavation & Site Prep — Serving All of Simcoe County";

export const OG_DESCRIPTION =
  "From single-lot grading to full commercial site prep — we dig deep across Barrie, Orillia, Wasaga Beach & beyond. Call for a free estimate.";

export const PHONE_DISPLAY = "705-619-4902";
export const PHONE_TEL = "tel:+17056194902";
export const EMAIL_ADDRESS = "bids@groundlevel.example";
export const EMAIL_MAILTO = `mailto:${EMAIL_ADDRESS}`;

export const HERO = {
  eyebrow: "Commercial Excavation & Civil Infrastructure",
  titleLine1: "From",
  titleLine2: "Concept",
  titleLine3: "To Creation",
  lede:
    "Ground Level Contracting prepares land for development — delivering excavation, foundations, drainage, and civil infrastructure for project managers and site supervisors across Barrie, Midland, Orillia, and Simcoe County.",
  primaryCta: "Request a Quote",
  secondaryCta: "View Services",
  stats: ["15+ Years of Field Experience", "500+ Commercial Projects Completed"] as const,
  serviceCoverageLabel: "Service Coverage — Barrie, Midland, Orillia, Simcoe County",
  serviceBarLabels: [
    "Excavation & Site Prep",
    "Site Prep & Grading",
    "Foundations & Civil",
    "Drainage & Hardscaping",
    "Hauling & Clearing",
    "Snow Removal",
  ] as const,
} as const;

export const MARQUEE_PHRASES = [
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

export const FEATURED_SERVICES = {
  eyebrow: "What We Do",
  heading: "Six Core / Service Lines",
  intro:
    "From initial site clearing through drainage, hauling, and winter operations, Ground Level Contracting delivers end-to-end excavation and civil infrastructure services for commercial builds across Barrie, Midland, Orillia, and Simcoe County.",
  cta: "Request a Quote",
} as const;

/** Visible label for the dark capabilities grid (formerly sr-only). */
export const SERVICES_GRID = {
  eyebrow: "Capabilities",
  heading: "Service lines",
} as const;

export const ABOUT = {
  eyebrow: "Who We Are",
  heading: "Built On Ground Level — Trusted From Below Up",
  body:
    "Ground Level Contracting is a commercial excavation and civil infrastructure company serving project managers and site supervisors across Barrie, Midland, Orillia, and Simcoe County. We prepare land for development — solving geotechnical challenges efficiently and safely, so your build can proceed on schedule.",
  credentials: [
    "Geotechnical Solutions — Complex site challenges",
    "On-Schedule Delivery — Built around your timeline",
    "Safety First — Licensed & insured crews",
    "B2B Specialists — PM & supervisor trusted",
  ] as const,
  cta: "Discuss Your Project",
  mediaStat: "15+ Yrs. Experience",
  badge: "Licensed & Insured",
} as const;

export const STATS_LINES = [
  "15+ Years of Experience — Field-proven expertise",
  "500+ Projects Completed — Commercial builds",
  "4 Areas Service Coverage — Barrie, Midland, Orillia & Simcoe",
  "100% Project Satisfaction — On time, every time",
] as const;

export const WHY = {
  eyebrow: "Why Ground Level",
  heading: "The Right Crew For Complex Ground Conditions",
  body:
    "We have the human resources, expertise, experience, and financial stability to respond quickly and complete projects safely and successfully. Our teams are built for commercial-scale work where timelines are non-negotiable and site conditions are rarely simple.",
  reasons: [
    "(01) Rapid Mobilization — Equipment and crews on-site fast. Built for urgent commercial dispatch.",
    "(02) Geotechnical Depth — We solve challenging ground conditions — rock, clay, high water table — without delaying your build.",
    "(03) PM-Friendly Communication — Direct lines, daily updates, and documentation that keeps your project files clean.",
    "(04) Single-Source Accountability — One contractor across excavation, drainage, and clearing — fewer handoffs, tighter coordination.",
  ] as const,
  cta: "705-619-4902",
  floatChipLine1: "Simcoe County's",
  floatChipLine2: "Preferred Excavator",
} as const;

export const PROCESS = {
  eyebrow: "How It Works",
  heading: "From First Call to Final Grade",
  steps: [
    {
      index: "01",
      title: "Site Consultation",
      body: "Call or email us with your site address and scope. We review conditions and provide a clear assessment.",
      titleAccentKey: "Consultation",
      motif: "consultation",
    },
    {
      index: "02",
      title: "Detailed Quote",
      body: "We provide transparent, itemized pricing with no hidden costs. Scope is confirmed before any equipment moves.",
      titleAccentKey: "Quote",
      motif: "quote",
    },
    {
      index: "03",
      title: "Crew Mobilization",
      body: "Our equipment and operators are mobilized to your site efficiently. Safety protocols and site prep completed on day one.",
      titleAccentKey: "Mobilization",
      motif: "mobilization",
    },
    {
      index: "04",
      title: "Delivery & Signoff",
      body: "Work completed to spec, site documentation provided, and signoff confirmed. Your build can proceed on schedule.",
      titleAccentKey: "Signoff",
      motif: "signoff",
    },
  ] as const satisfies readonly GLProcessStructuredStep[],
} as const;

export const COVERAGE = {
  eyebrow: "Service Territory",
  heading: "Serving Barrie, Midland, Orillia & Simcoe County",
  body:
    "Ground Level Contracting is based in Barrie and operates commercially throughout our defined service territory. We move quickly across Barrie, Midland, Orillia, and Simcoe County — no extended mobilization delays.",
  areas: [
    "Barrie — Primary base & dispatch",
    "Midland — Commercial & industrial sites",
    "Orillia — Lake Country corridor",
    "Simcoe County — County-wide coverage",
  ] as const,
} as const;

export const TESTIMONIALS = {
  eyebrow: "Client Feedback",
  heading: "Trusted by Site Supervisors & PMs",
  sub: "Ground Level Contracting is built for commercial relationships. Here's what the teams we work with have to say.",
  entries: [
    {
      attribution: "Marcus T., Project Manager — Commercial Developer, Barrie",
      quote: "",
    },
    {
      attribution: "Diane P., Site Supervisor — General Contractor, Midland",
      quote: "",
    },
    {
      attribution: "James R., Construction Coordinator — Simcoe County",
      quote: "",
    },
  ] as const,
} as const;

export const CTA_BAND = {
  eyebrow: "Ready to Build?",
  heading: "Start With a Site Consultation",
  /** Substring of `heading` rendered in `--y` for typographic contrast. */
  headingAccentKey: "Site Consultation",
  sub:
    "Commercial projects across Barrie, Midland, Orillia, and Simcoe County. Affordable, reliable, satisfaction guaranteed.",
  phoneLabel: "Call Direct — 705-619-4902",
  emailCta: "Email Us",
} as const;
