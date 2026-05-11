/**
 * Commercial snow hub — structured copy for condensed / progressive-disclosure layout.
 * Visible ledes in UI must stay ≤2 sentences; longform lives in accordion/tab bodies (still in DOM).
 */
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/ground-level/homepage-copy";
import { COMMERCIAL_SNOW_FAQS } from "@/lib/site/commercial-snow-faqs";

/** Canonical snow service photography (encoded path); used when per-section assets are not available. */
export const COMMERCIAL_SNOW_PRIMARY_RASTER_SRC =
  "/images/services/Snow%20Removal/Ground%20Level%20Contracting%20barrie%20snow%20removal23.JPG" as const;

/** Factual alt for `COMMERCIAL_SNOW_PRIMARY_RASTER_SRC` — keep in sync with visible scene. */
export const COMMERCIAL_SNOW_PRIMARY_RASTER_ALT =
  "Commercial snow removal contractor clearing large business parking lot with industrial equipment in Barrie Ontario" as const;

export const COMMERCIAL_SNOW_SEO = {
  title: "Commercial Snow Removal Contractors | Barrie, Simcoe County",
  description:
    "24/7 commercial snow removal for businesses in Barrie & Simcoe County. Industrial, retail & warehouse. Licensed, insured, guaranteed SLA response.",
} as const;

export const COMMERCIAL_SNOW_CHAPTERS = [
  { id: "chapter-overview", label: "Overview", shortLabel: "Overview" },
  { id: "chapter-services", label: "Services", shortLabel: "Services" },
  { id: "chapter-proof", label: "Proof", shortLabel: "Proof" },
  { id: "chapter-operations", label: "Operations", shortLabel: "Ops" },
  { id: "chapter-coverage", label: "Coverage", shortLabel: "Area" },
  { id: "chapter-assurance", label: "FAQ", shortLabel: "FAQ" },
  { id: "chapter-contact", label: "Contact", shortLabel: "Contact" },
] as const;

export const COMMERCIAL_SNOW_HERO = {
  h1Id: "commercial-snow-h1",
  sectionAriaLabelledBy: "commercial-snow-h1",
  pressBadgeAriaLabel: "As featured on CTV News Barrie",
  pressBadgeLines: ["Press", "CTV News Barrie"] as const,
  eyebrow: "Commercial-only · 24/7 · Simcoe County",
  breadcrumb: {
    homeHref: "/",
    servicesHref: "/services/",
    currentLabel: "Commercial snow",
  },
  h1: "24/7 Commercial Snow Removal and Ice Management Services in Barrie, Orillia and Simcoe County",
  lede: "Guaranteed response times. SLA-backed contracts. Industrial-scale equipment. Protecting your operations all winter.",
  metricsAriaLabel: "Commercial highlights",
  metrics: [
    { value: "200+", label: "Properties Served" },
    { value: "24/7", label: "Emergency Response" },
    { value: "$5M+", label: "Liability Coverage" },
  ] as const,
  heroImageAriaLabel: COMMERCIAL_SNOW_PRIMARY_RASTER_ALT,
  ctas: {
    primary: { label: "Request Commercial Quote", href: "/contact/" },
    secondary: { label: `Call 24/7: ${PHONE_DISPLAY}`, href: PHONE_TEL },
    tertiary: { label: "Get Free Property Assessment", href: "/contact/" },
  },
} as const;

export const COMMERCIAL_SNOW_TRUST_STRIP_ARIA = "Commercial trust signals";

export const COMMERCIAL_SNOW_TRUST_ITEMS = [
  { label: "24/7 Emergency Response", sub: "Year-Round Dispatch" },
  { label: "$5M+ Liability Insurance", sub: "Certificates Provided" },
  { label: "GPS-Tracked Fleet", sub: "Every Service Verified" },
  { label: "WSIB Compliant", sub: "Commercial-Ready" },
] as const;

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
    href: "/contact/",
  },
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
  /** Optional override when a distinct raster exists; otherwise hub primary src is used. */
  imageSrc?: string;
  /** Vary focal plane when sharing one raster across programs. */
  imageObjectClass?: string;
};

export const COMMERCIAL_SNOW_SERVICE_DEEP_DIVES: SnowServiceDeepDive[] = [
  {
    anchor: "svc-parking-lot",
    summary: "Commercial Parking Lot Snow Plowing — Barrie & Simcoe County",
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
    imageObjectClass: "object-[center_46%]",
    paragraphs: [
      "Your corporate property's first impression is formed before a client steps inside. Professional clearing standards for executive and visitor areas with GPS-verified documentation.",
      "Sidewalk and entrance priorities align with tenant safety expectations and contractual opening times.",
    ],
    learnMoreHref: "/services/office-building-corporate-campus-snow-removal-barrie/",
    learnMoreLabel: "Learn about our office and corporate snow services",
  },
];

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
  h2: "Commercial Snow Removal for Every Business Type in Simcoe County",
  tablistAria: "Property type tabs",
  visibleLede:
    "One program does not fit every asset class — select a property type to see how we align clearing, ice, and documentation.",
  types: [
    {
      id: "retail",
      label: "Retail Plazas and Shopping Centres",
      imageAlt: "Retail plaza winter clearing and ice management in Simcoe County",
      body: "High-traffic lots, cart corrals, and storefront approaches are sequenced for opening-time access and slip prevention. Ice revisit rules align to retail peaks and municipal expectations.",
    },
    {
      id: "office",
      label: "Office Buildings and Corporate Campuses",
      imageAlt: "Office campus parking and walkway snow removal",
      body: "Executive entrances, visitor parking, and ADA-sensitive routes are prioritized per SLA. Documentation supports tenant communication and insurer requests.",
    },
    {
      id: "industrial",
      label: "Industrial Facilities and Warehouses",
      imageAlt: "Industrial yard and dock snow removal",
      body: "Yards, docks, and shift-change windows drive blade order. Loader-led clearing supports freight timelines and emergency access.",
    },
    {
      id: "manufacturing",
      label: "Manufacturing and Production Facilities",
      imageAlt: "Manufacturing plant access and yard snow operations",
      body: "Production schedules and inbound raw material paths inform route priority. We coordinate with security and shipping for 24/7 operational windows where required.",
    },
    {
      id: "multires",
      label: "Multi-Residential Properties — Condominiums and Apartments",
      imageAlt: "Condo and apartment commercial snow clearing",
      body: "Portfolio-standard SLAs, consolidated reporting, and resident-safe pedestrian standards across multi-building sites.",
    },
    {
      id: "medical",
      label: "Medical Facilities and Healthcare Properties",
      imageAlt: "Healthcare campus access and patient drop-off clearing",
      body: "Ambulance routes, patient drop-offs, and staff parking are sequenced for continuous access. Ice control emphasizes pedestrian safety at transitions.",
    },
    {
      id: "education",
      label: "Educational Institutions",
      imageAlt: "School and campus snow removal",
      body: "Bus lanes, staff lots, and primary walkways align to class schedules and event calendars with documented completion times.",
    },
    {
      id: "hospitality",
      label: "Hospitality and Entertainment Venues",
      imageAlt: "Hospitality venue parking and entry snow service",
      body: "Guest arrival lanes, valet zones, and high-visibility entries are maintained to brand standards during storms and refreeze nights.",
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
      imageAlt: "Commercial snow fleet staged for business property service",
    },
    {
      title: "24/7 Emergency Response with Guaranteed Dispatch Times",
      subtitle: "Storm monitoring with accountable dispatch.",
      body: "Monitoring ties triggers to dispatch rules in your SLA so accountability is contractual, not anecdotal.",
      imageAlt: "Night operations snow crew dispatching to commercial site",
    },
    {
      title: "Industrial and Warehouse Operational Expertise",
      subtitle: "Loading docks, yards, and shift coordination.",
      body: "Loader-led sequences and dock-first priorities keep freight moving when storms stack.",
      imageAlt: "Loader clearing industrial yard and dock apron",
    },
    {
      title: "GPS-Tracked Fleet with Verified Service Documentation",
      subtitle: "Accountability for insurers and asset teams.",
      body: "Time and location data support portfolio reporting and post-event audits without reconstructing verbal logs.",
      imageAlt: "GPS fleet tracking display for snow operations",
    },
    {
      title: "$5 Million Commercial Liability Insurance — Certificates on Request",
      subtitle: "$5M+ programs with certificates on request.",
      body: "Certificates are issued to align with your risk and vendor file requirements at contract execution.",
      imageAlt: "Commercial insurance documentation folder",
    },
    {
      title: "Seasonal Contracts with Written SLA Guarantees",
      subtitle: "Budget certainty and performance clarity.",
      body: "Triggers, standards, and remedies are explicit so finance and operations plan from the same document.",
      imageAlt: "Signed commercial snow contract and SLA document",
    },
    {
      title: "Snow Hauling and Off-Site Removal Capabilities",
      subtitle: "Space-limited sites and municipal compliance.",
      body: "When piles constrain parking or violate local rules, hauling reclaims safe capacity.",
      imageAlt: "Dump truck and loader hauling snow off-site",
    },
    {
      title: "Comprehensive Ice Management—Anti-Icing and De-Icing",
      subtitle: "Anti-icing, de-icing, and refreeze revisits.",
      body: "Programs address what plowing cannot see — thin ice and refreeze after melt.",
      imageAlt: "De-icing application on commercial sidewalk",
    },
    {
      title: "Property Management and Multi-Site Portfolio Experience",
      subtitle: "Portfolios, condos, and centralized reporting.",
      body: "One escalation path and consistent standards across sites reduce storm-night chaos for regional managers.",
      imageAlt: "Property manager reviewing snow service reports",
    },
    {
      title: "Safety-Certified Operators and Compliance-Conscious Operations",
      subtitle: "Trained operators and commercial safety protocols.",
      body: "Field protocols align to WSIB and site rules so commercial sites meet supervisor expectations.",
      imageAlt: "Safety-certified equipment operators on commercial site",
    },
  ],
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
  headline: "Ready to Secure Your Commercial Snow Removal Contract?",
  sub: "Limited seasonal placements available. Book early for priority service tier and early-commitment pricing.",
  primary: { label: "Request Free Commercial Assessment", href: "/contact/" },
  secondary: { label: `Call 24/7: ${PHONE_DISPLAY}`, href: PHONE_TEL },
} as const;

export const COMMERCIAL_SNOW_FAQ_SECTION = {
  h2: "Commercial Snow Removal FAQs — Barrie and Simcoe County",
  visibleLede: "Eighteen common questions — full answers in-page for search and procurement review.",
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
  h2: "Ready to Ensure Your Business is Winter-Ready?",
  visibleLede:
    "Book assessment, call dispatch, or request sample contract language — seasonal capacity is limited.",
  paragraphs: [
    "Winter is an operational risk for commercial portfolios — downtime, slip exposure, and tenant complaints escalate when service is late or undocumented.",
    "We build contracts around SLAs, GPS verification, and equipment scale suited to your property class.",
    "Procurement and facilities teams get consistent reporting and a single escalation path for storm cycles.",
    "Start with a commercial property assessment to align triggers, routes, and ice programs before first snow.",
  ],
  urgency: "Limited seasonal contracts available. Book now for guaranteed priority service and early-commitment pricing.",
  ctas: [
    { label: "Request Free Commercial Assessment", href: "/contact/" },
    { label: `Call 24/7: ${PHONE_DISPLAY}`, href: PHONE_TEL },
    { label: "Download Contract Sample", href: "/contact/?topic=contract-sample" },
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
