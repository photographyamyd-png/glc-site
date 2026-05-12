/**
 * Commercial snow hub — structured copy for condensed / progressive-disclosure layout.
 * Visible ledes in UI must stay ≤2 sentences; longform lives in accordion/tab bodies (still in DOM).
 */
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/ground-level/homepage-copy";
import { COMMERCIAL_SNOW_FAQS } from "@/lib/site/commercial-snow-faqs";
import {
  SNOW_HUB_DEEP_DIVE_RASTERS,
  SNOW_HUB_PROPERTY_TAB_RASTERS,
  SNOW_HUB_SECTION,
  SNOW_HUB_WHY_CHOOSE_RASTERS,
  SNOW_MEDIA,
} from "@/lib/site/snow-removal-media";

/** Fallback hub raster (cards, JSON consumers, legacy imports). */
export const COMMERCIAL_SNOW_PRIMARY_RASTER_SRC = SNOW_MEDIA.hubDefault.src;

/** Alt aligned with `COMMERCIAL_SNOW_PRIMARY_RASTER_SRC`. */
export const COMMERCIAL_SNOW_PRIMARY_RASTER_ALT = SNOW_MEDIA.hubDefault.alt;

export const COMMERCIAL_SNOW_SEO = {
  title: "Commercial Snow Removal & Winter Risk Control | Barrie, Simcoe County",
  description:
    "SLA-backed commercial winter operations for Simcoe County — proactive dispatch, GPS-verified service, and continuity planning for sites where downtime is not an option.",
} as const;

/** Sticky nav — DOM ids must match `CommercialSnowPage` section anchors. */
export const COMMERCIAL_SNOW_CHAPTERS = [
  { id: "chapter-hero", label: "Overview", shortLabel: "Start" },
  { id: "chapter-pain", label: "Winter risk", shortLabel: "Risk" },
  { id: "chapter-authority", label: "Press proof", shortLabel: "CTV" },
  { id: "chapter-services", label: "Programs", shortLabel: "Programs" },
  { id: "chapter-coverage", label: "Site flow", shortLabel: "Area" },
  { id: "chapter-proof", label: "Proof", shortLabel: "Proof" },
  { id: "chapter-contact", label: "Contract", shortLabel: "CTA" },
  { id: "chapter-seo-basement", label: "Specs & FAQ", shortLabel: "FAQ" },
] as const;

export const COMMERCIAL_SNOW_HERO = {
  h1Id: "commercial-snow-h1",
  sectionAriaLabelledBy: "commercial-snow-h1",
  pressBadgeAriaLabel: "As featured on CTV News Barrie",
  pressBadgeLines: ["Press", "CTV News Barrie"] as const,
  eyebrow: "Operational continuity · Simcoe County",
  breadcrumb: {
    homeHref: "/",
    servicesHref: "/services/",
    currentLabel: "Commercial snow",
  },
  h1: "Commercial Snow Management That Never Sleeps.",
  lede:
    "24/7 proactive monitoring and winter maintenance for high-priority infrastructure — on-site before your first shift, SLA-backed and GPS-verified when downtime is not an option.",
  metricsAriaLabel: "Commercial highlights",
  metrics: [
    { value: "200+", label: "Properties Served" },
    { value: "24/7", label: "Emergency Response" },
    { value: "$5M+", label: "Liability Coverage" },
  ] as const,
  heroImageAriaLabel: SNOW_HUB_SECTION.hero.alt,
  /** Primary = audit entry; secondary = voice; optional text CTA for assessment (not a third button). */
  ctas: {
    primary: { label: "Secure Your 2026 Winter Contract", href: "/contact/?topic=seasonal-snow-contract" },
    secondary: { label: `Call 24/7: ${PHONE_DISPLAY}`, href: PHONE_TEL },
    textCta: { label: "Get a free property assessment", href: "/contact/?topic=property-assessment" },
  },
  /** In-page anchor for CTV authority block (lazy player id stays `#ctv-news-barrie`). */
  authorityChapterAnchor: "chapter-authority",
} as const;

/** Caution-forward pain grid — ≤2 sentences per card body where possible. */
export const COMMERCIAL_SNOW_PAIN_SECTION = {
  h2Id: "commercial-snow-pain-h2",
  eyebrow: "Operational exposure",
  h2: "When Your Lot Fails, Everything Else Does Too",
  visibleLede:
    "Slip-and-fall exposure, blocked docks, and shutdowns compound fast. Every hour buried is lost revenue and a legal clock you cannot rewind.",
  cards: [
    {
      title: "Slip-and-fall liability",
      body: "Uncleared walks and refreeze nights create exposure where documentation matters as much as the blade pass.",
    },
    {
      title: "Forced shutdowns",
      body: "Industrial lots and freight routes that stall mean missed windows — not just inconvenience, but contractual breach risk.",
    },
    {
      title: "Reputation & uptime",
      body: "Retail and medical sites are judged at the curb first; customers, patients, and insurers read the pavement before your lobby.",
    },
  ] as const,
} as const;

export const COMMERCIAL_SNOW_TRUST_STRIP_ARIA = "Commercial trust signals";

export const COMMERCIAL_SNOW_TRUST_ITEMS = [
  { label: "24/7 Emergency Response", sub: "Year-Round Dispatch" },
  { label: "$5M+ Liability Insurance", sub: "Certificates Provided" },
  { label: "GPS-Tracked Fleet", sub: "Every Service Verified" },
  { label: "WSIB Compliant", sub: "Commercial-Ready" },
] as const;

/** High-stakes trust band — ≤2 sentences visible (copy-writing pivot). */
export const COMMERCIAL_SNOW_INFRA_TRUST = {
  eyebrow: "High-stakes validation",
  h2: "Engineered for Critical Infrastructure",
  visibleLede:
    "We specialize in environments where downtime is not an option — utility hubs, medical campuses, and 24-hour industrial facilities. Scale and complexity of work demonstrate authority even when client names stay off the page.",
} as const;

/** Micro-labels paired with 40×40 SVG icons in the hub template. */
export const COMMERCIAL_SNOW_INFRA_ICON_PILLARS = [
  {
    key: "access",
    label: "Emergency access always open",
    sub: "Priority routes for response, freight, and patient movement.",
  },
  {
    key: "slip",
    label: "Zero slip-and-fall policy",
    sub: "Documented clearing standards and ice revisit rules in your SLA.",
  },
  {
    key: "grid",
    label: "Power grid & yard accessibility",
    sub: "Infrastructure-grade sequencing for transmission, gates, and docks.",
  },
] as const;

/** “Silent service” — visible lede ≤2 sentences; operations detail in nested disclosures. */
export const COMMERCIAL_SNOW_SILENT_SERVICE = {
  eyebrow: "Management tax: removed",
  h2: "The Silent Service Framework",
  visibleLede:
    "You should see results before you have to check. Proactive dispatch, meteorological triggers, and GPS-backed verification replace “call us when it piles up.”",
  pillars: [
    {
      title: "GPS-tracked fleet",
      body: "Real-time monitoring of your site with time-stamped, GPS-logged events for every visit — portfolio teams and insurers get proof, not anecdotes.",
    },
    {
      title: "Automated dispatch",
      body: "Service triggers from contract depth and storm conditions — priority tiers define on-site windows so accountability is contractual, not improvised.",
    },
    {
      title: "24/7 on-call maintenance",
      body: "Rotation through active storms keeps salt, refreeze revisits, and loading-dock priorities honest when the region is getting hammered.",
    },
  ] as const,
  operationsDetailsSummary: "Equipment, SLAs, contracts, and delivery process (expand)",
} as const;

/** ≤2 sentences visible; remainder in <details>. */
export const COMMERCIAL_SNOW_VALUE_PROP = {
  visibleLede:
    "Ground Level Contracting is Simcoe County's dedicated commercial snow and ice contractor — retail to industrial, SLA-backed, GPS-verified. We specialize exclusively in commercial operations, not residential routes.",
  detailsSummary: "Read the full commercial positioning statement",
  paragraphs: [
    "Ground Level Contracting is Simcoe County's dedicated commercial snow removal and ice management contractor, serving businesses in Barrie, Orillia, Innisfil, Wasaga Beach, and throughout the region. Unlike competitors who divide their attention between residential driveways and commercial accounts, we specialize exclusively in commercial, industrial, and institutional snow removal—from retail plazas and office complexes to warehouses, distribution centres, and manufacturing facilities.",
    "Our 24/7 emergency response team ensures your parking lots, loading docks, and access routes remain clear and operational for employees, customers, and incoming shipments—regardless of the hour or the severity of the storm. Every service is backed by written service level agreements, GPS-verified completion records, and comprehensive commercial liability coverage.",
    "Business operations cannot afford a snow removal contractor who shows up when it's convenient. With Ground Level Contracting, your Simcoe County commercial property receives guaranteed response times, industrial-grade equipment, and the accountability of a formal SLA—not a verbal commitment.",
  ],
  pullQuote: "Business operations cannot afford a snow removal contractor who shows up when it's convenient.",
  inlineCta: {
    label: "Don't let winter slow your business. Request a free commercial property assessment today.",
    href: "/contact/?topic=property-assessment",
  },
} as const;

/** Liability / documentation spine — longform in <details> (must follow VALUE_PROP — reuses positioning paragraphs). */
export const COMMERCIAL_SNOW_RISK_SECTION = {
  eyebrow: "Safety & liability",
  h2: "Protecting Your People and Your Bottom Line",
  visibleLede:
    "For commercial entities, snow is a legal liability first and a weather event second. Detailed logs and documentation for every site visit support insurance and post-event review.",
  detailsSummary: "Read full risk, documentation, and positioning narrative",
  paragraphs: [
    ...COMMERCIAL_SNOW_VALUE_PROP.paragraphs,
    "Commercial snow removal is not a convenience service — it is an operational requirement with direct implications for liability exposure, employee safety, and continuity. A missed clearing creates slip exposure, missed delivery windows, or forced shutdowns.",
    "Ground Level Contracting was built for business-scale winter management: equipment, scheduling, insurance, and dispatch protocols are calibrated for SLAs that read like legal commitments — because they are.",
  ],
} as const;

export const COMMERCIAL_SNOW_WHY_INTRO = {
  visibleLede:
    "Commercial snow removal is an operational requirement — liability, safety, and uptime hang on documented response. GLC was built for business-scale winter management, not residential squeeze-in routes.",
  h2: "Why Barrie & Simcoe County Businesses Choose Ground Level Contracting for Commercial Snow Removal",
  paragraphs: [
    "Commercial snow removal is not a convenience service—it is an operational requirement with direct implications for your business's liability exposure, employee safety, and bottom line. A missed clearing or delayed response doesn't just create an inconvenience; it creates a slip-and-fall liability, a missed delivery window, or a forced operational shutdown.",
    "Ground Level Contracting was built specifically for commercial clients. Our entire operation—equipment, scheduling systems, insurance coverage, and dispatch protocols—is calibrated for the demands of business-scale snow management. We understand that your SLA is a legal commitment, that your loading dock clears at 5 AM, and that your retail plaza must be accessible before the first customer arrives.",
    "We do not operate a residential route that squeezes in commercial stops. Commercial snow removal in Barrie and Simcoe County is all we do in this vertical, and that singular focus translates directly into better equipment utilization, faster response, and a higher standard of accountability for every property we manage.",
  ],
  figureAriaLabel:
    "Commercial-only snow removal specialist equipment and team focused on business properties",
} as const;

export type SnowServiceCard = {
  anchor: string;
  num: string;
  title: string;
  teaser: string;
};

export const COMMERCIAL_SNOW_SERVICE_CARDS: SnowServiceCard[] = [
  {
    anchor: "svc-parking-lot",
    num: "01",
    title: "Commercial Parking Lot Snow Plowing",
    teaser:
      "Parking lot accessibility is the first operational checkpoint of every business day — retail to office, cleared to standard before staff and customers arrive.",
  },
  {
    anchor: "svc-industrial",
    num: "02",
    title: "Industrial Snow Removal",
    teaser:
      "Loaders and heavy plow trucks for 24/7 access, shift-change coordination, and loading dock priority at warehouses and distribution centres.",
  },
  {
    anchor: "svc-ice",
    num: "03",
    title: "Commercial Ice Management & De-Icing",
    teaser:
      "Pre-storm anti-icing and reactive de-icing across the freeze-thaw cycle — beyond what plowing alone can address.",
  },
  {
    anchor: "svc-emergency",
    num: "04",
    title: "24/7 Emergency Snow Removal",
    teaser:
      "Automatic dispatch at your trigger depth — priority clients on-site within SLA windows defined in writing.",
  },
  {
    anchor: "svc-hauling",
    num: "05",
    title: "Commercial Snow Hauling & Off-Site Removal",
    teaser:
      "Loader and dump operations when on-site storage runs out — reclaim parking capacity and reduce ice hazard pockets.",
  },
  {
    anchor: "svc-retail",
    num: "06",
    title: "Retail & Shopping Plaza Snow Removal",
    teaser:
      "Customer accessibility first — professional, safe, and open before the first customer arrives.",
  },
  {
    anchor: "svc-property-management",
    num: "07",
    title: "Property Management Snow Removal",
    teaser:
      "Standardized SLAs across portfolios — centralized billing, consolidated reporting, one dedicated contact.",
  },
  {
    anchor: "svc-office-campus",
    num: "08",
    title: "Office Building & Corporate Campus",
    teaser:
      "Executive and visitor areas cleared to professional standards with GPS-verified documentation.",
  },
];

export const COMMERCIAL_SNOW_SERVICES_CHAPTER = {
  visibleLede:
    "Eight commercial programs — each scoped for operations, liability control, and documented service. Expand a service for full scope or jump to its deep dive below.",
  h2: "Complete Commercial Snow Removal and Ice Management Solutions",
} as const;

export type SnowServiceDeepDive = {
  anchor: string;
  summary: string;
  paragraphs: string[];
  propertyTypes?: string;
  learnMoreHref: string;
  learnMoreLabel: string;
  imageSrc: string;
  imageAlt: string;
  /** Vary focal plane when sharing one raster across programs. */
  imageObjectClass?: string;
};

export const COMMERCIAL_SNOW_SERVICE_DEEP_DIVES: SnowServiceDeepDive[] = [
  {
    anchor: "svc-parking-lot",
    summary: "Commercial Parking Lot Snow Plowing — Barrie & Simcoe County",
    imageSrc: SNOW_HUB_DEEP_DIVE_RASTERS[0]!.src,
    imageAlt: SNOW_HUB_DEEP_DIVE_RASTERS[0]!.alt,
    imageObjectClass: "object-[center_40%]",
    paragraphs: [
      "Parking lot accessibility is the first operational checkpoint of every business day. We clear retail plazas, shopping centres, and office building lots to an operationally accessible standard before your first staff and customers arrive.",
      "Blade patterns, island clearance, and refreeze treatment are sequenced to reduce residual hazards and keep fire routes and priority aisles open under contract definitions.",
    ],
    propertyTypes:
      "Retail plazas, shopping centres, office buildings, medical facilities, multi-unit commercial complexes, business parks.",
    learnMoreHref: "/services/commercial-parking-lot-snow-plowing-barrie/",
    learnMoreLabel: "Learn more about our commercial parking lot snow removal services",
  },
  {
    anchor: "svc-industrial",
    summary: "Industrial Snow Removal — 24/7 Operational Access for Simcoe County Facilities",
    imageSrc: SNOW_HUB_DEEP_DIVE_RASTERS[1]!.src,
    imageAlt: SNOW_HUB_DEEP_DIVE_RASTERS[1]!.alt,
    imageObjectClass: "object-[center_52%]",
    paragraphs: [
      "Industrial facilities operate on schedules that do not accommodate winter delays. Our service deploys loaders and heavy-duty plow trucks for 24/7 operational access, shift-change coordination, and loading dock priority at warehouses and distribution centres.",
      "We align clearing order to inbound freight, outbound lanes, and yard circulation so equipment and personnel are not trapped by drifts or unsafe gradients.",
      "Documentation supports facility managers and insurers with GPS-verified timing and completion notes tied to SLA checkpoints.",
    ],
    propertyTypes:
      "Warehouses, distribution centres, manufacturing facilities, industrial parks, logistics hubs, factories.",
    learnMoreHref: "/services/industrial-snow-removal-simcoe-county/",
    learnMoreLabel: "Explore our industrial snow removal services",
  },
  {
    anchor: "svc-ice",
    summary: "Commercial Ice Management & De-Icing — Barrie, Orillia & Simcoe County",
    imageSrc: SNOW_HUB_DEEP_DIVE_RASTERS[2]!.src,
    imageAlt: SNOW_HUB_DEEP_DIVE_RASTERS[2]!.alt,
    imageObjectClass: "object-[center_35%]",
    paragraphs: [
      "Snow removal clears what you can see. Ice management protects against what you cannot—our program addresses pre-storm anti-icing and reactive de-icing across the full freeze-thaw cycle.",
      "Application methods match surface type, environmental constraints, and your risk tolerance — from bulk salt to liquid systems where precision drives efficiency.",
      "Unlimited revisit rules within contract parameters are spelled out so refreeze nights do not become liability gaps.",
    ],
    learnMoreHref: "/services/commercial-ice-management-deicing-simcoe-county/",
    learnMoreLabel: "View our ice management and de-icing solutions",
  },
  {
    anchor: "svc-emergency",
    summary: "24/7 Emergency Snow Removal — Commercial Response Across Barrie & Simcoe County",
    imageSrc: SNOW_HUB_DEEP_DIVE_RASTERS[3]!.src,
    imageAlt: SNOW_HUB_DEEP_DIVE_RASTERS[3]!.alt,
    imageObjectClass: "object-[center_48%]",
    paragraphs: [
      "Weather does not operate on a business schedule, nor do we. Automatic dispatch at your trigger depth—no call required. Priority clients receive on-site response within the windows defined in their SLA.",
      "Storm monitoring and supervisor updates keep route priority honest during widespread regional events.",
    ],
    learnMoreHref: "/services/247-emergency-snow-removal-barrie/",
    learnMoreLabel: "Learn about our 24/7 emergency response capabilities",
  },
  {
    anchor: "svc-hauling",
    summary: "Commercial Snow Hauling & Off-Site Removal — Simcoe County",
    imageSrc: SNOW_HUB_DEEP_DIVE_RASTERS[4]!.src,
    imageAlt: SNOW_HUB_DEEP_DIVE_RASTERS[4]!.alt,
    imageObjectClass: "object-[center_58%]",
    paragraphs: [
      "Urban commercial properties frequently run out of on-site storage by mid-season. Loader and dump truck operations reclaim parking capacity and eliminate ice hazard concentrations.",
      "Hauling is coordinated with municipal expectations and site logistics so piles do not return as melt-refreeze problems at pedestrian zones.",
    ],
    learnMoreHref: "/services/commercial-snow-hauling-removal-simcoe-county/",
    learnMoreLabel: "Discover our snow hauling and relocation services",
  },
  {
    anchor: "svc-retail",
    summary: "Retail Plaza & Shopping Centre Snow Removal — Customer Access, All Season",
    imageSrc: SNOW_HUB_DEEP_DIVE_RASTERS[5]!.src,
    imageAlt: SNOW_HUB_DEEP_DIVE_RASTERS[5]!.alt,
    imageObjectClass: "object-[center_44%]",
    paragraphs: [
      "Customer accessibility is the single most critical operational metric for retail businesses during a winter storm. Your property is accessible, professional, and safe before the first customer arrives.",
      "We coordinate corrals, cart returns, and high-foot-traffic paths with store operations where required.",
    ],
    learnMoreHref: "/services/retail-plaza-snow-removal-barrie/",
    learnMoreLabel: "See our retail and plaza snow removal expertise",
  },
  {
    anchor: "svc-property-management",
    summary: "Multi-Site Property Management Snow Removal — Barrie & Simcoe County",
    imageSrc: SNOW_HUB_DEEP_DIVE_RASTERS[6]!.src,
    imageAlt: SNOW_HUB_DEEP_DIVE_RASTERS[6]!.alt,
    imageObjectClass: "object-[center_50%]",
    paragraphs: [
      "Standardized SLAs across your entire portfolio. Centralized billing, consolidated service reporting, and one dedicated account contact for all winter maintenance logistics.",
      "Escalation paths are consistent site-to-site so regional storms do not fragment communication.",
    ],
    learnMoreHref: "/services/property-management-snow-removal-contracts/",
    learnMoreLabel: "Explore our property management snow services",
  },
  {
    anchor: "svc-office-campus",
    summary: "Office Building & Corporate Campus Snow Removal — Professional Standards, Guaranteed",
    imageSrc: SNOW_HUB_DEEP_DIVE_RASTERS[7]!.src,
    imageAlt: SNOW_HUB_DEEP_DIVE_RASTERS[7]!.alt,
    imageObjectClass: "object-[center_46%]",
    paragraphs: [
      "Your corporate property's first impression is formed before a client steps inside. Professional clearing standards for executive and visitor areas with GPS-verified documentation.",
      "Sidewalk and entrance priorities align with tenant safety expectations and contractual opening times.",
    ],
    learnMoreHref: "/services/office-building-corporate-campus-snow-removal-barrie/",
    learnMoreLabel: "Learn about our office and corporate snow services",
  },
];

/** Compact hub ladder — full program copy lives on child service routes. */
export const COMMERCIAL_SNOW_PROGRAM_LADDER = COMMERCIAL_SNOW_SERVICE_CARDS.map((c) => {
  const dive = COMMERCIAL_SNOW_SERVICE_DEEP_DIVES.find((d) => d.anchor === c.anchor);
  if (!dive) throw new Error(`Missing deep dive for anchor ${c.anchor}`);
  return { title: c.title, teaser: c.teaser, href: dive.learnMoreHref };
});

/** First N FAQs render expanded-by-default pattern; remainder in one disclosure (all stay in DOM). */
export const COMMERCIAL_SNOW_FAQ_FIRST_COUNT = 5;

export const COMMERCIAL_SNOW_MID_SERVICE_CTA = {
  text: "Seen enough? Request your free commercial property assessment.",
  buttonLabel: "Request Commercial Quote",
  href: "/contact/",
} as const;

export const COMMERCIAL_SNOW_EQUIPMENT = {
  visibleLede:
    "Dedicated commercial fleet: loaders, plows, spreaders, liquid systems, haulers, and GPS-backed dispatch — maintained preseason with backup unit protocols.",
  h2: "Commercial-Grade Equipment for Reliable Snow Removal",
  intro:
    "Ground Level Contracting operates a dedicated fleet of commercial and industrial snow removal equipment maintained to the highest operational standard for year-round reliability. Every piece of equipment assigned to a commercial account undergoes pre-season inspection and is covered by backup unit protocols—ensuring that a mechanical issue never translates to a missed service obligation on your property.",
  items: [
    {
      name: "Heavy-Duty Loaders & Wheel Loaders",
      desc: "Large industrial footprints, pile consolidation, and off-site hauling — speeds and volumes beyond plow trucks alone.",
    },
    {
      name: "Commercial-Grade Plow Trucks",
      desc: "Multi-blade configurations for efficient lot clearing; GPS-tracked with time-stamped route logging.",
    },
    {
      name: "Industrial Salt Spreaders",
      desc: "High-capacity bulk spreaders for uniform application — reducing waste and over-salting on large surfaces.",
    },
    {
      name: "Liquid De-Icer Application Systems",
      desc: "Pre-storm anti-icing and targeted post-storm de-icing with precision in many applications.",
    },
    {
      name: "Snow Hauling Trucks (Tandem & Tri-Axle)",
      desc: "Coordinated with loaders for off-site removal on space-limited urban commercial properties.",
    },
    {
      name: "Bobcats & Skid Steers",
      desc: "Tight access, between parked vehicles, walkways, and entrances where larger equipment cannot manoeuvre.",
    },
    {
      name: "Commercial Snow Blowers",
      desc: "Sidewalks and pedestrian zones to clean-surface standards at entries and high-traffic paths.",
    },
    {
      name: "GPS Tracking & Dispatch Systems",
      desc: "Real-time fleet monitoring, automated logging, and client-facing verification records for every visit.",
    },
  ],
  outro:
    "All equipment is maintained on a documented service schedule. Backup units are pre-assigned to commercial accounts to eliminate single-point-of-failure risk.",
  figureAriaLabel:
    "Commercial snow removal equipment fleet including loaders plow trucks and salt spreaders ready for service in Barrie",
} as const;

export const COMMERCIAL_SNOW_SLA = {
  visibleLede:
    "SLAs turn marketing language into contractual metrics — triggers, response windows, clearing standards, and GPS proof. Custom-built for your risk profile and opening requirements.",
  h2: "Service Level Agreements Built for Business Reliability",
  intro:
    "A service level agreement is not a marketing promise. It is a contractual commitment with defined performance metrics, response time guarantees, and documented accountability—the standard that separates a professional commercial snow removal contractor from an informal service provider.",
  figureAriaLabel:
    "GPS tracking system showing commercial snow removal service verification and response times",
  items: [
    {
      name: "Trigger Depth Specification",
      desc: "The precise accumulation threshold for service start — typically 2.5 cm to 5 cm depending on property type.",
    },
    {
      name: "Guaranteed Response Times",
      desc: "Emergency clients: on-site targets after trigger (e.g. 1–2 hours for priority tiers). Standard accounts align to specified opening times (often 7 AM). All in writing.",
    },
    {
      name: "Clearing Standards",
      desc: "Surface condition on completion — residual snow expectations and ice-free standards for pedestrian zones.",
    },
    {
      name: "Ice Management Frequency",
      desc: "Unlimited revisit rules within contract parameters for refreeze cycles.",
    },
    {
      name: "GPS Verification",
      desc: "Time-stamped, GPS-logged events; documentation of arrival, completion, and scope executed.",
    },
    {
      name: "Service Completion Notification",
      desc: "Real-time or end-of-event notification to your facilities contact.",
    },
    {
      name: "Performance Accountability",
      desc: "Remedies for non-performance, including priority call-back and credits as negotiated.",
    },
  ],
  outro: "Our SLA framework ensures that your operations planning is based on certainty, not hope.",
} as const;

export const COMMERCIAL_SNOW_CONTRACTS = {
  visibleLede:
    "Three primary frameworks — seasonal, per-event, and hybrid — all with SLA, GPS documentation, and commercial liability coverage.",
  h2: "Flexible Commercial Snow Removal Contract Options",
  intro:
    "Commercial operations have different risk tolerances and budget structures. Ground Level Contracting offers three primary contract frameworks to match your financial and operational priorities.",
  seasonal: {
    h3: "Seasonal Contracts",
    body: "Predictable seasonal pricing with defined service windows, trigger depths, and capacity reservation. Best when you need budget certainty and guaranteed mobilization through the winter cycle.",
    recommended: "Recommended for multi-site portfolios and high-liability properties that require opening-time guarantees.",
  },
  perEvent: {
    h3: "Per-Event Contracts",
    body: "Billing tied to dispatch events and storm response. Useful when you want to align spend directly to usage while still maintaining documented service standards per event.",
    recommended: "Recommended for sites with variable occupancy or seasonal operations that do not require full-season lock-in.",
  },
  hybrid: {
    h3: "Hybrid Contracts",
    body: "Combines a base seasonal retainer with per-event components for overflow work, hauling, or extraordinary storm cycles.",
    recommended: "Recommended when you need core coverage plus flexibility for extreme weather or variable pile management.",
  },
  outro:
    "All contract types include SLA guarantees, GPS-verified service documentation, and comprehensive commercial liability coverage.",
} as const;

export const COMMERCIAL_SNOW_SERVICE_AREA = {
  visibleLede:
    "Commercial dispatch across Barrie, Orillia, Innisfil, Wasaga Beach, and Simcoe County — centralized reporting and consistent SLAs for regional portfolios.",
  h2: "Serving Commercial Properties Throughout Barrie, Orillia and Simcoe County",
  paragraphs: [
    "Our commercial snow removal operations are headquartered to support fast dispatch across Barrie and surrounding Simcoe County business corridors.",
    "Orillia and lake-country commercial zones receive the same SLA discipline and equipment standards as core Barrie accounts.",
    "Innisfil and growth-corridor properties benefit from route designs that account for commuter timing and retail peaks.",
    "Wasaga Beach and seasonal commercial footprints receive scoped programs that align ice management with tourism and access patterns.",
  ],
  links: [
    { label: "commercial snow removal in Barrie", href: "/locations/commercial-snow-removal-barrie-ontario/" },
    { label: "serving Orillia businesses", href: "/locations/commercial-snow-removal-orillia-ontario/" },
    { label: "Innisfil commercial properties", href: "/locations/commercial-snow-removal-innisfil-ontario/" },
    { label: "Wasaga Beach business snow services", href: "/locations/commercial-snow-removal-wasaga-beach-ontario/" },
    { label: "throughout Simcoe County", href: "/locations/commercial-snow-removal-simcoe-county/" },
  ],
  figureAriaLabel:
    "Commercial snow removal service area map covering Barrie, Orillia, and Simcoe County business districts in Ontario",
} as const;

export const COMMERCIAL_SNOW_PROPERTY_TYPES = {
  sectionEyebrow: "Tailored solutions",
  h2: "Custom Site Flow & Critical Paths",
  tablistAria: "Primary commercial property programs",
  visibleLede:
    "Every site is a different puzzle. We map critical zones — ER entrances, loading docks, transformer gates, and high-liability walks — so the most vital areas stay clear first and emergency vehicles and heavy transport keep safe flow.",
  types: [
    {
      id: "retail",
      label: "Retail, Plazas & Shopping Centres",
      imageSrc: SNOW_HUB_PROPERTY_TAB_RASTERS[0]!.src,
      imageAlt: SNOW_HUB_PROPERTY_TAB_RASTERS[0]!.alt,
      overlayKicker: "Retail & malls",
      overlayTitle: "Opening-time clearing",
      body: "High-traffic lots, cart corrals, and storefront approaches are sequenced for opening-time access and slip prevention. Ice revisit rules align to retail peaks and municipal expectations.",
    },
    {
      id: "utilities",
      label: "Utilities & Critical Infrastructure",
      imageSrc: SNOW_HUB_PROPERTY_TAB_RASTERS[1]!.src,
      imageAlt: SNOW_HUB_PROPERTY_TAB_RASTERS[1]!.alt,
      overlayKicker: "Infrastructure",
      overlayTitle: "Uptime-first routes",
      body: "Regional utilities, transmission and yard access, and other infrastructure-grade sites get blade order and ice programs that respect security, escorted access, and documented completion — built for operators who cannot afford down-time after a storm.",
    },
    {
      id: "manufacturing",
      label: "Manufacturing & Heavy Industry",
      imageSrc: SNOW_HUB_PROPERTY_TAB_RASTERS[2]!.src,
      imageAlt: SNOW_HUB_PROPERTY_TAB_RASTERS[2]!.alt,
      overlayKicker: "Manufacturing",
      overlayTitle: "Yards & docks clear",
      body: "Plants, mills, warehouses, and logistics yards share the same pressure: inbound raw material paths, shift changes, and loading docks that must stay open. Loader-led clearing and hauling options align to freight timelines and emergency access.",
    },
    {
      id: "healthcare",
      label: "Healthcare & Medical Facilities",
      imageSrc: SNOW_HUB_PROPERTY_TAB_RASTERS[3]!.src,
      imageAlt: SNOW_HUB_PROPERTY_TAB_RASTERS[3]!.alt,
      overlayKicker: "Healthcare",
      overlayTitle: "24/7 access clear",
      body: "Ambulance routes, patient drop-offs, staff parking, and high-liability walks are sequenced for continuous access. Ice control emphasizes pedestrian safety at transitions and refreeze nights.",
    },
    {
      id: "corporate",
      label: "Corporate Campuses & Headquarters",
      imageSrc: SNOW_HUB_PROPERTY_TAB_RASTERS[4]!.src,
      imageAlt: SNOW_HUB_PROPERTY_TAB_RASTERS[4]!.alt,
      overlayKicker: "Corporate",
      overlayTitle: "Campus-wide SLAs",
      body: "Executive entrances, visitor parking, structured parking ramps, and ADA-sensitive links are prioritized per SLA. Documentation supports tenant communication, insurer requests, and multi-building portfolios that need one accountable winter partner.",
    },
  ],
} as const;

export const COMMERCIAL_SNOW_WHY_CHOOSE = {
  h2: "Why Simcoe County Businesses Choose Ground Level Contracting for Snow Removal",
  visibleLede:
    "Ten decision-grade reasons — commercial-only focus, emergency dispatch, industrial expertise, GPS proof, insurance, SLAs, hauling, ice programs, portfolios, and safety culture.",
  items: [
    {
      title: "Commercial-Only Specialization",
      subtitle: "Business-focused fleets—not residential routes.",
      body: "Equipment, routing, and insurance are sized for commercial liability and access windows — not mixed with driveway routes that dilute response.",
      imageSrc: SNOW_HUB_WHY_CHOOSE_RASTERS[0]!.src,
      imageAlt: SNOW_HUB_WHY_CHOOSE_RASTERS[0]!.alt,
    },
    {
      title: "24/7 Emergency Response with Guaranteed Dispatch Times",
      subtitle: "Storm monitoring with accountable dispatch.",
      body: "Monitoring ties triggers to dispatch rules in your SLA so accountability is contractual, not anecdotal.",
      imageSrc: SNOW_HUB_WHY_CHOOSE_RASTERS[1]!.src,
      imageAlt: SNOW_HUB_WHY_CHOOSE_RASTERS[1]!.alt,
    },
    {
      title: "Industrial and Warehouse Operational Expertise",
      subtitle: "Loading docks, yards, and shift coordination.",
      body: "Loader-led sequences and dock-first priorities keep freight moving when storms stack.",
      imageSrc: SNOW_HUB_WHY_CHOOSE_RASTERS[2]!.src,
      imageAlt: SNOW_HUB_WHY_CHOOSE_RASTERS[2]!.alt,
    },
    {
      title: "GPS-Tracked Fleet with Verified Service Documentation",
      subtitle: "Accountability for insurers and asset teams.",
      body: "Time and location data support portfolio reporting and post-event audits without reconstructing verbal logs.",
      imageSrc: SNOW_HUB_WHY_CHOOSE_RASTERS[3]!.src,
      imageAlt: SNOW_HUB_WHY_CHOOSE_RASTERS[3]!.alt,
    },
    {
      title: "$5 Million Commercial Liability Insurance — Certificates on Request",
      subtitle: "$5M+ programs with certificates on request.",
      body: "Certificates are issued to align with your risk and vendor file requirements at contract execution.",
      imageSrc: SNOW_HUB_WHY_CHOOSE_RASTERS[4]!.src,
      imageAlt: SNOW_HUB_WHY_CHOOSE_RASTERS[4]!.alt,
    },
    {
      title: "Seasonal Contracts with Written SLA Guarantees",
      subtitle: "Budget certainty and performance clarity.",
      body: "Triggers, standards, and remedies are explicit so finance and operations plan from the same document.",
      imageSrc: SNOW_HUB_WHY_CHOOSE_RASTERS[5]!.src,
      imageAlt: SNOW_HUB_WHY_CHOOSE_RASTERS[5]!.alt,
    },
    {
      title: "Snow Hauling and Off-Site Removal Capabilities",
      subtitle: "Space-limited sites and municipal compliance.",
      body: "When piles constrain parking or violate local rules, hauling reclaims safe capacity.",
      imageSrc: SNOW_HUB_WHY_CHOOSE_RASTERS[6]!.src,
      imageAlt: SNOW_HUB_WHY_CHOOSE_RASTERS[6]!.alt,
    },
    {
      title: "Comprehensive Ice Management—Anti-Icing and De-Icing",
      subtitle: "Anti-icing, de-icing, and refreeze revisits.",
      body: "Programs address what plowing cannot see — thin ice and refreeze after melt.",
      imageSrc: SNOW_HUB_WHY_CHOOSE_RASTERS[7]!.src,
      imageAlt: SNOW_HUB_WHY_CHOOSE_RASTERS[7]!.alt,
    },
    {
      title: "Property Management and Multi-Site Portfolio Experience",
      subtitle: "Portfolios, condos, and centralized reporting.",
      body: "One escalation path and consistent standards across sites reduce storm-night chaos for regional managers.",
      imageSrc: SNOW_HUB_WHY_CHOOSE_RASTERS[8]!.src,
      imageAlt: SNOW_HUB_WHY_CHOOSE_RASTERS[8]!.alt,
    },
    {
      title: "Safety-Certified Operators and Compliance-Conscious Operations",
      subtitle: "Trained operators and commercial safety protocols.",
      body: "Field protocols align to WSIB and site rules so commercial sites meet supervisor expectations.",
      imageSrc: SNOW_HUB_WHY_CHOOSE_RASTERS[9]!.src,
      imageAlt: SNOW_HUB_WHY_CHOOSE_RASTERS[9]!.alt,
    },
  ],
} as const;

/** Rebuilt `chapter-assurance` — short visible band; longform in two disclosures (no ten inline images). */
export const COMMERCIAL_SNOW_ASSURANCE_BAND = {
  eyebrow: "Assurance",
  h2: "One Accountable Winter Partner",
  caption:
    "Same commercial-only focus and SLA discipline — presented once up front. Open the blocks below when you need the full narrative or every decision-grade reason.",
  narrativeSummary: "Full positioning narrative",
  reasonsSummary: "All ten reasons (full text, no gallery)",
} as const;

export const COMMERCIAL_SNOW_PROCESS = {
  h2: "Our Commercial Snow Removal Process — From Initial Assessment to Season-End Review",
  visibleLede:
    "Seven steps from assessment through renewal — each documented so winter planning is repeatable, not improvised.",
  steps: [
    {
      id: "01",
      title: "Free Commercial Property Assessment",
      body: "Walk the lot, map priorities, hazards, pile strategy, and ice risk zones before contract language is drafted.",
    },
    {
      id: "02",
      title: "Contract and SLA Development",
      body: "Triggers, response tiers, clearing standards, ice revisits, and notification paths are written to match operations and budget.",
    },
    {
      id: "03",
      title: "Pre-Season Site Preparation",
      body: "Stake mapping, equipment assignment, and backup unit pairing are completed before first snow.",
    },
    {
      id: "04",
      title: "Storm Monitoring and Dispatch",
      body: "Weather triggers route activation; supervisors align crews to SLA priority and refreeze risk.",
    },
    {
      id: "05",
      title: "Snow Removal and Ice Management Execution",
      body: "Plowing, stacking, treating, and hauling execute per route plan with GPS logging.",
    },
    {
      id: "06",
      title: "Service Verification and Documentation",
      body: "Completion records and notifications close the loop for facilities and asset teams.",
    },
    {
      id: "07",
      title: "Season-End Review and Renewal Planning",
      body: "Performance review, pile lessons, and renewal terms align before next winter.",
    },
  ],
} as const;

/** Proof band — stats + field MP4s (CTV lives in `chapter-authority`). */
export const COMMERCIAL_SNOW_MEDIA_PROOF = {
  eyebrow: "Commercial proof",
  h2: "On-Site in Two Hours or Less — Verified Winter Performance",
  visibleLede:
    "Credentials, response discipline, and field footage from Simcoe County operations — evidence procurement and risk teams can evaluate before contract execution.",
} as const;

export const COMMERCIAL_SNOW_CREDENTIALS = {
  h2: "Licensed, Insured & Built for Commercial Operations",
  visibleLede:
    "Credentials that match how procurement and risk teams evaluate winter vendors — scale, insurance, proof, and focus.",
  badges: [
    { stat: "200+", label: "Commercial Properties Served", detail: "Active commercial accounts across Simcoe County" },
    { stat: "24/7", label: "Emergency Response", detail: "Year-round dispatch, no exceptions" },
    { stat: "$5M+", label: "Liability Insurance", detail: "Certificates provided at contract execution" },
    { stat: "GPS", label: "Tracked Fleet", detail: "Every service event time-stamped and logged" },
    { stat: "~90 min", label: "Average Emergency Response", detail: "Priority SLA tier guarantee" },
    { stat: "WSIB", label: "Compliant", detail: "Current clearance on all field personnel" },
    { stat: "Zero", label: "Missed SLAs — 2024/25 Season", detail: "Verified by GPS service records" },
    { stat: "Simcoe County", label: "Commercial Focus", detail: "Established local commercial contractor" },
  ],
} as const;

export const COMMERCIAL_SNOW_MID_LOWER_CTA = {
  className: "glc-snow-midlower-cta",
  headline: "Secure Your 2026 Winter Contract",
  sub: "Partnership, not a one-off push. Limited seasonal placements — book early for priority tier, documented SLAs, and GPS-verified winter coverage.",
  primary: { label: "Request a Seasonal Contract Consultation", href: "/contact/?topic=seasonal-snow-contract" },
  secondary: { label: `Call 24/7: ${PHONE_DISPLAY}`, href: PHONE_TEL },
} as const;

export const COMMERCIAL_SNOW_FAQ_SECTION = {
  eyebrow: "FAQ",
  h2: "Commercial Snow Removal FAQs — Barrie and Simcoe County",
  visibleLede:
    "Five fast answers below; expand “More questions” for the full procurement set — every answer stays on-page for search visibility.",
} as const;

export const COMMERCIAL_SNOW_RELATED = {
  eyebrow: "Also from Ground Level Contracting",
  cards: [
    {
      title: "Commercial Ice Management & De-Icing",
      href: "/services/commercial-ice-management-deicing-simcoe-county/",
      sub: "Related Service",
    },
    {
      title: "Hauling & Site Services",
      href: "/services/hauling-site-clearing-logistics/",
      sub: "Related Service",
    },
    {
      title: "Commercial Property Assessment",
      href: "/contact/",
      sub: "Get Started",
    },
  ],
} as const;

export const COMMERCIAL_SNOW_CLOSING = {
  h2: "Peace of Mind for Your Winter Operations",
  visibleLede:
    "Start with a priority site audit, then lock a management plan that matches your liability profile — one accountable partner for storm cycles.",
  paragraphs: [
    "Winter is an operational risk for commercial portfolios — downtime, slip exposure, and tenant complaints escalate when service is late or undocumented.",
    "We build contracts around SLAs, GPS verification, and equipment scale suited to your property class.",
    "Procurement and facilities teams get consistent reporting and a single escalation path for storm cycles.",
    "Start with a commercial property assessment to align triggers, routes, and ice programs before first snow.",
  ],
  urgency: "Limited seasonal contracts available. Book now for guaranteed priority service and early-commitment pricing.",
  ctas: [
    { label: "Secure Your 2026 Winter Contract", href: "/contact/?topic=seasonal-snow-contract" },
    { label: `Call 24/7: ${PHONE_DISPLAY}`, href: PHONE_TEL },
  ],
} as const;

/** Registry + metadata bridge: first 4 FAQs keep legacy shape; full list used on hub + JSON-LD. */
export const COMMERCIAL_SNOW_FAQ_SHORT = COMMERCIAL_SNOW_FAQS.slice(0, 4);

/** HowTo + on-page process — full step bodies for JSON-LD. */
export function getCommercialSnowProcessStepsForJsonLd() {
  return COMMERCIAL_SNOW_PROCESS.steps.map((s) => ({
    id: s.id,
    title: s.title,
    body: s.body,
  }));
}
