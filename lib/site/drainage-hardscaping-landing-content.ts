/**
 * Drainage & Hardscaping landing — verbatim v2.0 stakeholder copy.
 * Audit reference: docs/content/GLC_DrainageHardscaping_Page_Complete_v2.md
 */
import { PHONE_DISPLAY } from "@/lib/ground-level/homepage-copy";
import { getSiteUrl } from "@/lib/site/metadata";

export const drainagePagePath = "/services/drainage-hardscaping/";

export const DRAINAGE_LANDING_SEO = {
  /** §1.1 Final */
  title: "Drainage, Hardscaping & Landscaping Barrie | Drain Tile, Retaining Walls & Patios",
  description:
    "Drainage, hardscaping & landscaping in Barrie & Simcoe County. Foundation drain tile, armour stone retaining walls, interlock patios & driveways. Free quotes.",
  ogTitle:
    "Drainage, Hardscaping & Landscaping Contractors in Barrie & Simcoe County | Ground Level Contracting",
  ogDescription:
    "Simcoe County's trusted specialists for foundation drain tile, custom site drainage, armour stone retaining walls, interlock patios, driveways & landscaping integration. Serving Barrie, Orillia, Wasaga Beach, Innisfil & beyond.",
  twitterTitle: "Drainage, Hardscaping & Landscaping Contractors | Barrie & Simcoe County",
  twitterDescription:
    "Foundation drain tile, armour stone retaining walls, custom site drainage, interlock patios, driveways & landscaping integration. Serving Barrie, Orillia & Simcoe County.",
  /** Prefer dedicated OG asset when present */
  ogImagePath: "/images/og/drainage-hardscaping-barrie.jpg",
} as const;

export function drainageCanonicalUrl() {
  return `${getSiteUrl()}${drainagePagePath.replace(/\/$/, "")}/`;
}

export function drainageHeroPhoneCta() {
  return `Call Us: ${PHONE_DISPLAY}`;
}

/** Section P alt list — verbatim. */
export const DRAINAGE_IMAGE_ALTS: Record<string, string> = {
  "01":
    "Drainage hardscaping and landscaping contractor Barrie Ontario armour stone retaining wall interlock patio",
  "02":
    "Foundation drain tile installation Barrie Ontario weeping tile sub drain perforated pipe gravel bedding",
  "03":
    "Exterior weeping tile replacement Simcoe County perforated pipe gravel bedding foundation drainage",
  "04": "Interior drain tile installation Orillia Ontario basement waterproofing sump pit",
  "05": "French drain installation yard drainage Barrie Ontario perforated pipe gravel trench",
  "06": "Catch basin installation surface drainage Wasaga Beach Ontario",
  "07": "Corrective grading drainage solution Innisfil Ontario sloped property",
  "08": "Site drainage design sloped property Simcoe County Ontario surface and subsurface",
  "09": "Clogged weeping tile replacement Barrie Ontario foundation drain perforated pipe",
  "10": "Armour stone retaining wall Barrie Ontario natural limestone no-mortar construction",
  "11": "Armour stone retaining wall lakeside property Simcoe County shoreline erosion protection",
  "12": "Block retaining wall installation Orillia Ontario segmental concrete Unilock",
  "13": "Tiered retaining wall with interlock patio Barrie Ontario hardscaping integration",
  "14": "Engineered retaining wall sloped property Simcoe County geogrid reinforced",
  "15": "Retaining wall drainage backfill crushed stone weep holes Barrie Ontario",
  "16": "Waterfront armour stone wall Innisfil Ontario Lake Simcoe shoreline protection",
  "17": "Concrete retaining wall residential Wasaga Beach Ontario",
  "18": "Interlock patio installation Barrie Ontario Unilock paving stone",
  "19": "Natural stone flagstone patio Orillia Simcoe County outdoor living",
  "20": "Exposed aggregate driveway Barrie Ontario concrete residential",
  "21": "Interlock driveway installation Innisfil Ontario paving stone",
  "22": "Stamped concrete patio Barrie Ontario outdoor living",
  "23": "Natural stone steps front entrance Simcoe County hardscaping",
  "24": "Armour stone steps walkway Barrie Ontario hardscaping feature",
  "25": "Lakeside hardscaping landscaping drainage retaining wall Simcoe County Ontario",
  "26": "Sloped property hardscape landscape drainage integration Barrie Ontario",
  "27": "High-end outdoor living space hardscaping landscaping Barrie Ontario patio retaining wall",
  "28": "Drainage retaining wall landscaping integration luxury property Innisfil Ontario",
};

/** Section P + numeric fallback to existing repo naming (drainage-hardscaping-NNN.jpg). */
export function drainageLandingImage(suffix: number, alt: string) {
  const n = Math.min(Math.max(suffix, 1), 48);
  const src = `/images/services/Drainage-and-Hardscaping/drainage-hardscaping-${String(n).padStart(3, "0")}.jpg`;
  return { src, alt };
}

export const DRAINAGE_IMAGES = {
  hero: drainageLandingImage(1, DRAINAGE_IMAGE_ALTS["01"]),
  drainTileMain: drainageLandingImage(2, DRAINAGE_IMAGE_ALTS["02"]),
  drainTileSecondary: drainageLandingImage(3, DRAINAGE_IMAGE_ALTS["03"]),
  introSidecar: drainageLandingImage(8, DRAINAGE_IMAGE_ALTS["08"]),
  siteDrainage1: drainageLandingImage(5, DRAINAGE_IMAGE_ALTS["05"]),
  siteDrainage2: drainageLandingImage(6, DRAINAGE_IMAGE_ALTS["06"]),
  siteDrainage3: drainageLandingImage(7, DRAINAGE_IMAGE_ALTS["07"]),
  wallArmour1: drainageLandingImage(10, DRAINAGE_IMAGE_ALTS["10"]),
  wallArmour2: drainageLandingImage(11, DRAINAGE_IMAGE_ALTS["11"]),
  wallBlock1: drainageLandingImage(12, DRAINAGE_IMAGE_ALTS["12"]),
  wallBlock2: drainageLandingImage(13, DRAINAGE_IMAGE_ALTS["13"]),
  wallLake1: drainageLandingImage(16, DRAINAGE_IMAGE_ALTS["16"]),
  patioInterlock1: drainageLandingImage(18, DRAINAGE_IMAGE_ALTS["18"]),
  patioInterlock2: drainageLandingImage(21, DRAINAGE_IMAGE_ALTS["21"]),
  patioFlagstone: drainageLandingImage(19, DRAINAGE_IMAGE_ALTS["19"]),
  patioConcrete1: drainageLandingImage(20, DRAINAGE_IMAGE_ALTS["20"]),
  patioConcrete2: drainageLandingImage(22, DRAINAGE_IMAGE_ALTS["22"]),
  steps1: drainageLandingImage(23, DRAINAGE_IMAGE_ALTS["23"]),
  steps2: drainageLandingImage(24, DRAINAGE_IMAGE_ALTS["24"]),
  integrationHero: drainageLandingImage(25, DRAINAGE_IMAGE_ALTS["25"]),
  integrationCopy1: drainageLandingImage(26, DRAINAGE_IMAGE_ALTS["26"]),
  integrationCopy2: drainageLandingImage(27, DRAINAGE_IMAGE_ALTS["27"]),
  integrationExpand1: drainageLandingImage(28, DRAINAGE_IMAGE_ALTS["28"]),
  integrationExpand2: drainageLandingImage(26, DRAINAGE_IMAGE_ALTS["26"]),
  integrationExpand3: drainageLandingImage(25, DRAINAGE_IMAGE_ALTS["25"]),
  whyChoose: drainageLandingImage(28, DRAINAGE_IMAGE_ALTS["28"]),
  finalCta: drainageLandingImage(1, DRAINAGE_IMAGE_ALTS["01"]),
  serviceAreaMap: drainageLandingImage(8, DRAINAGE_IMAGE_ALTS["08"]),
} as const;

export const DRAINAGE_HERO = {
  h1: "Drainage, Hardscaping & Landscaping Contractors Serving Barrie, Simcoe County & Surrounding Areas",
  sub:
    "We solve the water problems other contractors ignore — and build the hardscapes and landscapes that turn challenging grades into exceptional outdoor spaces.",
  ctaPrimary: "Get Your Free Drainage Assessment",
  ctaSecondary: "Book a Free Site Visit",
  breadcrumbHome: "Home",
  breadcrumbServices: "Services",
  breadcrumbCurrent: "Drainage & Hardscaping",
} as const;

export const DRAINAGE_TRUST_BAR = [
  {
    value: "Drainage, Hardscaping & Landscaping Specialists",
    sub: "Not a generalist — one contractor, complete scope",
  },
  {
    value: "Barrie to Simcoe County",
    sub: "9+ communities served",
  },
  {
    value: "Licensed & Fully Insured",
    sub: "WSIB Compliant",
  },
  {
    value: "Free Site Assessments",
    sub: "No-obligation written quotes",
  },
] as const;

/** First 3 sentences visible; remainder in expand. */
export const DRAINAGE_INTRO_VISIBLE = `Ground Level Contracting is Simcoe County's trusted specialist for complete drainage, hardscaping, and landscaping solutions — from foundation drain tile installation and custom site drainage design, to armour stone retaining walls, interlock patios, natural stone walkways, and fully integrated outdoor environments. We solve the water problems other contractors ignore, and we build the hardscapes and landscapes that turn challenging grades into stunning, functional spaces. Our competitive advantage is the combination most contractors in this region cannot offer: deep drainage expertise paired with professional hardscaping capability and landscaping integration — all under a single contractor.`;

export const DRAINAGE_INTRO_EXPAND = `The 3/4" clear stone going into your french drain, the armour stone wall holding back your slope, the interlock patio at its base, and the planting zones that complete the space — designed together, installed by the same crew, and built to perform for decades.

Many homeowners searching for a landscaping company in Barrie or Simcoe County discover that what they actually need first is a drainage solution. We approach every inquiry that way: drainage informs the grade, the grade defines the hardscape, and the hardscape creates the canvas for the landscape.

We serve Barrie, Orillia, Wasaga Beach, Innisfil, Angus, Springwater, Oro-Medonte, New Tecumseth, and surrounding communities throughout Simcoe County and Central Ontario.

Whether your project starts with a drainage problem or a design vision, it ends with a permanent solution.`;

export const DRAINAGE_INTRO_EXPAND_TRIGGER = "See how our approach is different →";

export const DRAINAGE_INTRO_EYEBROW = "DRAINAGE · HARDSCAPING · LANDSCAPING";
export const DRAINAGE_INTRO_PANEL_EYEBROW = "SERVICES ON THIS PAGE";
export const DRAINAGE_INTRO_PANEL_LIST = [
  "Foundation drain tile & sub drain",
  "Custom site drainage design",
  "Retaining walls",
  "Patios, walkways, driveways & steps",
  "Hardscape & landscape integration",
] as const;

export const DRAINAGE_INTRO_INLINE_CTA =
  "Get your free drainage and landscaping assessment or request a quote today.";

export const DRAINAGE_SERVICE_CARDS_EYEBROW = "WHAT WE BUILD";
export const DRAINAGE_SERVICE_CARDS = [
  {
    title: "Foundation Drain Tile (Sub Drain)",
    body: "Protect your foundation with properly installed weeping tile — perforated pipe, sock wrap, gravel bedding, and a correctly sized outlet connection built to last 25–50+ years. Interior and exterior systems for new builds, older homes, and full foundation remediation.",
    href: "#foundation-drain-tile",
    anchorLabel: "View Foundation Drain Tile Details →",
  },
  {
    title: "Custom Site Drainage Design",
    body: "Surface and subsurface drainage systems — french drains, swales, catch basins, corrective grading, and subsurface interceptor trenches — engineered for your property's specific soil conditions, topography, and seasonal performance requirements.",
    href: "#site-drainage-design",
    anchorLabel: "View Site Drainage Details →",
  },
  {
    title: "Retaining Walls",
    body: "Armour stone, segmental block, concrete, and engineered retaining walls built with proper drainage backfill as standard — walls that hold the grade, drain correctly, and make a visual statement that lasts.",
    href: "#retaining-walls",
    anchorLabel: "View Retaining Wall Details →",
  },
  {
    title: "Patios, Walkways, Driveways & Steps",
    body: "Interlock paving stone, natural flagstone, exposed aggregate concrete, and armour stone steps — all built on properly prepared aggregate bases with integrated drainage, designed to perform through Simcoe County's full frost cycle.",
    href: "#patios-driveways-steps",
    anchorLabel: "View Patios & Driveways Details →",
  },
  {
    title: "Hardscape & Landscape Integration",
    body: "Lakefront, hillside, and high-grade properties require drainage, hardscaping, and landscaping designed as a single cohesive system. We do all three — which is why property owners with the most challenging sites call us first.",
    href: "#hardscape-integration",
    anchorLabel: "View Integration Details →",
  },
  {
    title: "Free Site Assessment",
    body: "Every project starts with a no-obligation site visit. We assess drainage challenges, grade conditions, and hardscaping and landscaping goals — and deliver a written proposal with clear scope and line-item pricing.",
    href: "#cta-assessment",
    anchorLabel: "Book a Free Assessment →",
  },
] as const;

export const DRAINAGE_DRAIN_TILE = {
  id: "foundation-drain-tile",
  eyebrow: "FOUNDATION DRAIN TILE & SUB DRAIN",
  h2: "Foundation Drain Tile Installation & Replacement (Sub Drain) — Protecting Barrie & Simcoe County Homes",
  summary: `Your foundation's first line of defence is a properly functioning drain tile system. Also called weeping tile or a sub drain, this perforated piping runs around your foundation footings to intercept groundwater and redirect it away from your basement before it can cause structural damage, mould, or flooding.`,
  expandTrigger: "See the full drain tile detail — symptoms, process & options →",
  ghostCta: "Get a Free Assessment →",
  subPageHref: "/services/foundation-drain-tile-barrie",
  subPageLabel: "Learn more about our Foundation Drain Tile service page",
  h3WhatIs: "What Is Foundation Drain Tile (Weeping Tile / Sub Drain)?",
  whatIsBody: `Your foundation's first line of defence is a properly functioning drain tile system. Also called weeping tile or a sub drain, this perforated piping runs around your foundation footings to intercept groundwater and redirect it away from your basement before it can cause structural damage, mould, or flooding.

Hydrostatic pressure — the force that builds when saturated soil pushes water against your foundation walls — is one of the primary causes of basement water infiltration throughout Central Ontario. A properly installed drain tile system relieves this pressure continuously, 24 hours a day, protecting your foundation from the outside in.

At Ground Level Contracting, we install and replace both interior and exterior foundation drain tile systems throughout Barrie, Orillia, and Simcoe County. Whether you're dealing with a failed clay tile system in an older home, a clogged perforated pipe, or a property that was never properly drained at the foundation, our team designs and installs a durable, engineered solution: sock-wrapped perforated PVC pipe, proper washed gravel bedding, and a correctly sized connection to a sump pit or daylight outlet — built to protect your home for decades. Where drain tile work connects to wider yard drainage or a landscaping project, we coordinate the full scope as a single system.`,
  h3Signs: "Signs Your Drain Tile Needs Replacement in Barrie",
  signsIntro: `If your home is showing any of the following, a drain tile inspection should be your first call:`,
  signsBullets: [
    "Wet or damp basement after heavy rain or spring thaw",
    "Water stains or white powder (efflorescence) on foundation walls",
    "Musty odour in basement or crawlspace",
    "Soggy, saturated ground along the foundation perimeter",
    "Sump pump running constantly or cycling more than it should",
    "Visible cracks in foundation walls or basement floor slab",
    "Standing water in window wells",
  ],
  signsClosing: `Homes in Barrie and Simcoe County built before the 1980s frequently still have original clay tile systems. These systems have a finite service life — clay tiles crack, collapse, and clog with root intrusion over decades. If your home is in this age range and you have not had your drain tile inspected, proactive replacement before failure occurs is significantly less expensive than reactive repair after foundation damage has begun.`,
  h3InteriorExterior: "Interior vs. Exterior Drain Tile — Which Is Right For You?",
  interiorExteriorParas: [
    `Exterior drain tile is installed around the perimeter of your foundation footings from the outside. It is the most comprehensive solution — intercepting groundwater before it ever contacts your foundation wall — and is the preferred method for new construction and full foundation remediation projects. Exterior installation also creates the opportunity to repair any landscaping, grading, or surface drainage issues in the same scope of work.`,
    `Interior drain tile systems are installed inside your basement at the perimeter, channelling water that has infiltrated the wall to a sump pit for removal. Interior systems are a practical solution where full exterior excavation is not feasible due to cost, site access, or existing landscaping investment. They do not stop water from entering the wall but manage it effectively before it damages your living space.`,
    `The right choice depends on your foundation type, the source of the water infiltration, your site's access constraints, and your project budget. We assess each situation individually and recommend the approach that provides the most effective long-term protection for your specific property.`,
  ],
  h3Process: "Drain Tile Installation Process",
  processSteps: [
    "Site assessment — Identify source and pattern of water infiltration, assess existing system condition",
    "Excavation — Dig to footing level around the affected perimeter",
    "Pipe installation — Lay sock-wrapped perforated PVC pipe in a bed of washed gravel at the correct slope",
    "Gravel bedding — Surround pipe with minimum 150mm of washed 3/4\" clear stone for optimal drainage performance",
    "Outlet connection — Connect to sump pit, weeping bed, or daylight outlet as site conditions allow",
    "Backfill & grade restoration — Clean backfill compacted in lifts, surface grade restored to direct water away from foundation",
    "Surface restoration — Hardscaping, lawn, or landscaping reinstated as required",
  ],
} as const;

export const DRAINAGE_SITE_DRAINAGE = {
  id: "site-drainage-design",
  eyebrow: "CUSTOM SITE DRAINAGE DESIGN",
  h2: "Custom Site Drainage Design — Surface, Subsurface & Grading Solutions for Simcoe County Properties",
  summary: `Water always finds its way — the goal is to control where it goes. Poor drainage is rarely a single-point problem.`,
  summaryCont: `It is a systemic failure: the wrong grade directing surface runoff toward the foundation, subsurface water with no clear path to a proper outlet, compacted soil preventing infiltration, and a yard that holds water in low spots after every rain event.`,
  expandTrigger: "See what's included in a custom drainage design →",
  expandNarrative: `Ground Level Contracting designs drainage systems that address the complete picture — surface flow, subsurface movement, and outlet strategy — in a permanent, engineered solution.

We design and install french drains, swales, catch basins, channel drains, and corrective grading systems that prevent water from pooling around foundations, flooding yards, eroding slopes, or migrating onto neighbouring properties. When drainage design is paired with hardscaping or landscaping work, it is incorporated from the start — not retrofitted afterward. Serving properties across Barrie, Wasaga Beach, Innisfil, and rural Simcoe County, our team understands the local soil conditions, frost depth requirements, clay content in native soils, and municipal drainage standards that determine what will work on your specific site — not just in theory, but through a Simcoe County winter and spring thaw cycle.`,
  whatsIncludedHeader: "What's Included in a Custom Drainage Design:",
  whatsIncluded: [
    "Site grading assessment and slope analysis",
    "Surface drainage planning — swales, channels, grade corrections",
    "Subsurface drainage planning — french drains, perforated pipe trenches, catch basins",
    "Foundation drainage integration with existing or new weeping tile",
    "Outlet determination — municipal storm sewer connection, weeping bed, or daylight outlet",
    "Soil condition and infiltration assessment",
    "Coordination with retaining wall, hardscaping, and landscaping work as part of an integrated project scope",
  ],
  solutionsIntro: "Our Drainage Solutions — What We Install:",
  solutions: [
    {
      label: "French Drain",
      text: "A trench filled with gravel and perforated pipe that intercepts subsurface water moving through the soil and redirects it to a proper outlet. Used for yard drainage, foundation perimeter relief, slope drainage management, and as part of landscaped planting zones where soil saturation is a concern.",
    },
    {
      label: "Swale",
      text: "Engineered shallow channels — either open or planted — that intercept and redirect surface water flow. A properly designed swale is invisible when dry and highly effective when wet. Planted swales can double as a landscaping feature while doing meaningful drainage work.",
    },
    {
      label: "Catch Basin",
      text: "Point-collection drainage structures installed at low spots, at the base of slopes, or at hard surface edges to capture surface water before it pools or infiltrates uncontrolled areas. Essential at transitions between hardscaping and landscaped zones.",
    },
    {
      label: "Corrective Grading",
      text: "Re-sloping the ground surface around your home or property to redirect water away from foundations, toward drainage outlets, and away from neighbouring properties. Often the most cost-effective single intervention for surface drainage problems and the essential first step in any serious landscaping project on a challenging grade.",
    },
    {
      label: "Interceptor Trench",
      text: "For properties where water moves laterally through the soil toward a structure or low point, interceptor trenches with perforated pipe capture this flow upslope and redirect it before it reaches the problem area.",
    },
  ],
  solutionStripLabels: ["French Drain", "Swale", "Catch Basin", "Corrective Grading", "Interceptor Trench"] as const,
  subPageHref: "/services/site-drainage-design-barrie",
} as const;

export const DRAINAGE_RETAINING_WALLS = {
  id: "retaining-walls",
  eyebrow: "RETAINING WALLS",
  h2: "Retaining Walls in Barrie & Simcoe County — Armour Stone, Block, Concrete & Engineered Solutions",
  intro: `A retaining wall does two jobs simultaneously: it holds back earth and it makes a statement. At Ground Level Contracting, we design and build retaining walls that accomplish both — from natural armour stone walls that integrate seamlessly into rural and lakeside landscapes, to precision-engineered block systems suited to residential grade changes and commercial applications, to structural concrete walls for high-load and high-height requirements.`,
  intro2: `Every retaining wall we build includes proper drainage behind the wall — because without it, even the most well-built wall will eventually fail. Hydrostatic pressure from water trapped in saturated backfill is responsible for the majority of premature retaining wall failures in Ontario. We size our walls correctly for the load they carry, prepare our base to the depth the site requires, and install crushed stone drainage backfill, weep holes, and perforated pipe as standard practice on every wall — regardless of height or material. Where a wall is part of a broader hardscaping and landscaping project, we integrate the drainage system across the full site from day one.`,
  tabs: [
    {
      label: "Armour Stone",
      summary: `Armour stone retaining walls are among the most durable and visually compelling options available in Central Ontario. Each large natural limestone or granite stone — typically weighing hundreds to thousands of kilograms — is set precisely to lock the wall together without mortar, distributing load evenly and allowing natural drainage through the structure.`,
      expandTrigger: "Read the full armour stone detail →",
      expand: `Armour stone retaining walls are among the most durable and visually compelling options available in Central Ontario. Each large natural limestone or granite stone — typically weighing hundreds to thousands of kilograms — is set precisely to lock the wall together without mortar, distributing load evenly and allowing natural drainage through the structure. The result is a wall that will not shift, will not sag, and looks better with every passing year as it weathers into the landscape.

Armour stone is ideally suited for lakeside properties, rural estates, sloped driveways, and high-end residential landscaping projects where a natural, substantial, permanently stable wall is the priority. The scale and weight of the material makes it inherently resistant to frost heave and lateral soil pressure — the two forces that destroy smaller-scale wall systems over time. When combined with terraced planting zones or natural stone steps, armour stone walls become defining features of a landscape rather than functional afterthoughts.

We source armour stone from regional quarries where possible, and our equipment is rated for the placement precision and weight management that armour stone installation requires.`,
      subHref: "/services/retaining-walls-barrie",
    },
    {
      label: "Block & Concrete",
      summary: `Segmental concrete block retaining walls — manufactured by brands including Unilock, Risi, and Allan Block — offer engineered performance, clean modern lines, and structural load ratings for walls up to and beyond 1.2 metres.`,
      expandTrigger: "See block, concrete & engineered wall details →",
      expand: `Segmental concrete block retaining walls — manufactured by brands including Unilock, Risi, and Allan Block — offer engineered performance, clean modern lines, and structural load ratings for walls up to and beyond 1.2 metres. Ideal for residential grade separations, garden terracing, pool surrounds, and commercial applications where a uniform, refined appearance integrates well with surrounding hardscaping and landscaping, block walls can be curved, stepped, or built in tiers to suit complex site geometries.

Block wall systems are engineered products with published installation specifications. We follow manufacturer guidelines for base preparation, geogrid reinforcement schedules, and drainage requirements — ensuring the warranty and structural performance the product is rated for.

For applications requiring maximum structural strength — steep slopes carrying heavy surcharge loads, walls in close proximity to structures or utilities, or sites with complex geotechnical conditions — poured concrete and precast concrete retaining walls deliver the structural performance that other materials cannot match.`,
      subHref: "/services/retaining-walls-barrie",
    },
    {
      label: "Engineered",
      summary: `Walls exceeding standard height thresholds, walls supporting structures, roads, or driveways, or sites with complex loading conditions require engineer-stamped design drawings under the Ontario Building Code.`,
      expandTrigger: "See engineered wall requirements & our process →",
      expand: `Walls exceeding standard height thresholds, walls supporting structures, roads, or driveways, or sites with complex loading conditions require engineer-stamped design drawings under the Ontario Building Code. Ground Level Contracting coordinates with structural engineers to design and build retaining walls that meet code requirements — including geogrid-reinforced earth systems, sheet pile solutions, and modular gravity wall systems — and obtains the required permits and inspections as part of the project scope.

If your project requires a building permit for a retaining wall, we manage that process on your behalf.`,
      subHref: "/services/retaining-walls-barrie",
    },
    {
      label: "Lakeside & Waterfront",
      summary: `Shoreline and waterfront retaining walls on Lake Simcoe, Kempenfelt Bay, and throughout Simcoe County serve a dual purpose: they protect the land from erosion while defining the boundary between improved property and the water.`,
      expandTrigger: "Read the full lakeside wall detail →",
      expand: `Shoreline and waterfront retaining walls on Lake Simcoe, Kempenfelt Bay, and throughout Simcoe County serve a dual purpose: they protect the land from erosion while defining the boundary between improved property and the water. Armour stone is the preferred material for most shoreline applications — its mass, permeability, and natural appearance make it structurally suited to wave and ice pressure and aesthetically appropriate for waterfront landscaping settings.

We regularly build and rebuild shoreline retaining walls for lakefront homeowners across the Simcoe County region. These projects often require site-specific engineering, environmental consideration for materials near the water, and coordination with applicable regulatory requirements. We have experience navigating these requirements and can advise on the permitting process as part of the project planning phase.`,
      subHref: "/services/retaining-walls-barrie",
    },
  ],
} as const;

export const DRAINAGE_MID_CTA = {
  headline: "Have a retaining wall, drainage, or landscaping project in mind?",
  sub: "Get a free written quote — no obligation, no pressure.",
  primary: "Book a Free Site Assessment",
  secondary: `Call: ${PHONE_DISPLAY}`,
} as const;

export const DRAINAGE_PATIOS = {
  id: "patios-driveways-steps",
  eyebrow: "PATIOS · DRIVEWAYS · STEPS",
  h2: "Patios, Walkways, Driveways & Steps — Stone, Interlock & Concrete in Barrie & Simcoe County",
  intro: `The hardscape surfaces on your property are where function meets lifestyle. A well-designed interlock patio, natural stone walkway, or exposed aggregate driveway doesn't just add curb appeal and outdoor living space — it solves drainage and grade challenges at the same time, and it creates the framework within which landscaping comes to life.`,
  intro2: `Every hardscape project we build starts with proper base preparation: the right excavation depth, the right compacted aggregate layers, and the right drainage integration so your surfaces perform as beautifully in year fifteen as they do on installation day.`,
  tabs: [
    {
      label: "Interlock",
      summary: `Interlocking concrete paving stone is the most versatile and widely specified hardscape surface in the Barrie and Simcoe County market. Available in hundreds of sizes, profiles, colours, and textures from manufacturers including Unilock, Permacon, and Cambridge, interlock allows virtually unlimited design flexibility.`,
      expandTrigger: "Read the full interlock detail →",
      expand: `Interlocking concrete paving stone is the most versatile and widely specified hardscape surface in the Barrie and Simcoe County market. Available in hundreds of sizes, profiles, colours, and textures from manufacturers including Unilock, Permacon, and Cambridge, interlock allows virtually unlimited design flexibility — from traditional herringbone driveways to contemporary large-format patio systems that integrate seamlessly with surrounding landscaping and planting zones.

The structural performance of an interlock installation is entirely dependent on base preparation. We excavate to the correct depth for the soil conditions and frost exposure on your specific site, compact Granular A base in mechanically compacted lifts, and install a calibrated bedding sand layer before setting paving units. This base system is what separates an interlock installation that lasts 20 years from one that settles and shifts within a season.

Drainage integration — whether that means a positive cross-slope, a perforated edge pipe, or a channel drain at a transition point — is assessed and incorporated into every interlock project. Edge restraints are installed to manufacturer specification, and we manage the interface between hardscape and landscaping so the finished result is clean, permanent, and well-drained.`,
      subHref: "/services/interlock-patios-barrie",
    },
    {
      label: "Natural Stone",
      summary: `Natural flagstone — limestone, granite, slate, and sandstone — creates a hardscape surface that is genuinely irreplaceable in its visual character.`,
      expandTrigger: "See natural stone and flagstone detail →",
      expand: `Natural flagstone — limestone, granite, slate, and sandstone — creates a hardscape surface that is genuinely irreplaceable in its visual character. No manufactured product fully replicates the variation, texture, and warmth of real stone. At Ground Level Contracting, we source and install natural flagstone patios, walkways, and feature areas throughout Simcoe County, cutting and fitting stone for consistent joint spacing and a finished surface that rewards closer inspection.

Natural stone installations require more skilled labour than interlock and command a premium, but they deliver an aesthetic outcome and a permanence that elevates a property distinctly — particularly when paired with a well-designed retaining wall, planting beds, or a broader landscaping program.`,
      subHref: "/services/interlock-patios-barrie",
    },
    {
      label: "Concrete",
      summary: `Concrete offers strength, longevity, and design versatility in a single material.`,
      expandTrigger: "Read the full concrete finishes detail →",
      expand: `Concrete offers strength, longevity, and design versatility in a single material. Exposed aggregate concrete — where the surface paste is washed away to reveal the stone aggregate beneath — provides a slip-resistant, textured finish suited to driveways, pool surrounds, and walkways. Stamped concrete applies embossed pattern and colour to create the appearance of natural stone, brick, or wood plank at a lower material cost than the real thing.

Both finishes require skilled formwork, proper mix design, and controlled curing. We manage the full process: subgrade preparation, form installation, reinforcing, pour, finish, and sealing — delivering a concrete installation that performs structurally and integrates cleanly with adjacent landscaping and hardscape elements.`,
      subHref: "/services/interlock-patios-barrie",
    },
    {
      label: "Steps & Walkways",
      summary: `Steps, stairways, and walkways are the connective tissue of an outdoor living space — and when built in natural stone or armour stone, they become features in their own right that define the character of the entire landscape.`,
      typeLabels: [
        "Armour Stone Steps",
        "Interlock Steps",
        "Concrete Steps",
        "Flagstone Path",
      ] as const,
      expandTrigger: "See all step and walkway options →",
      expand: `Steps, stairways, and walkways are the connective tissue of an outdoor living space — and when built in natural stone or armour stone, they become features in their own right that define the character of the entire landscape. We design and build:

- **Natural stone and armour stone steps** — Set into grade for a permanent, natural appearance that integrates directly with retaining walls and landscaping. No mortar required.
- **Interlock paving stone steps** — Engineered step units in block or paving stone for a clean, contemporary aesthetic suited to modern residential landscaping projects.
- **Poured concrete steps and staircases** — Structurally engineered, reinforced, and finished to match adjacent hard surfaces.
- **Flagstone stepping stone paths** — Informal pathways set in gravel, mulch, or turf for connecting garden and landscaping zones.

Grade change and step integration is an area where drainage planning is critical — water must be directed away from and off step surfaces, not allowed to pond or infiltrate behind risers. This is standard in our design process, not an afterthought.`,
      subHref: "/services/interlock-patios-barrie",
    },
  ],
} as const;

export const DRAINAGE_INTEGRATION = {
  id: "hardscape-integration",
  eyebrow: "HARDSCAPE & LANDSCAPE INTEGRATION",
  h2: "Hardscape & Landscape Integration — Drainage-First Design for Lakeside, High-Grade & High-End Properties",
  visibleParas: [
    `Not every property is a flat, easy build. Some of the most striking properties in Simcoe County — lakefront homes on Lake Simcoe, hillside properties in Oro-Medonte, sloped rural lots near Wasaga Beach and Innisfil — present real engineering and design challenges. These are the projects we approach with the most enthusiasm.`,
    `When a site has significant grade changes, drainage complexity, or waterfront conditions, the integration of drainage systems, retaining walls, terraced hardscaping, and planting zones must be designed as a single cohesive system — not assembled from separate contractor scopes that don't communicate with each other.`,
  ],
  listLeadIn: "What We Deliver on Challenging Properties:",
  condensedList: [
    {
      title: "Terraced hardscaping and landscaping on sloped lots",
      desc: "Converting unusable slope into functional outdoor levels connected by stone steps and retaining walls; planting zones at each terrace.",
    },
    {
      title: "Lakeside and waterfront integration",
      desc: "Armour stone shoreline walls, natural stone patio terraces, drainage against upland runoff and shoreline erosion.",
    },
    {
      title: "High-end design execution",
      desc: "Finished quality for luxury properties — hardscaping as foundation, landscaping as finish.",
    },
    {
      title: "Drainage-first design methodology",
      desc: "Drainage resolved before hardscaping; hardscaping before final landscaping — the only sequence that lasts.",
    },
    {
      title: "Full excavation and grade management",
      desc: "Hauling, spoils, import material, and finishing grade as one integrated scope.",
    },
  ],
  ctaEyebrow: "Talk to us about your challenging property →",
  expandTrigger: "See our full approach to complex properties →",
  expandBody: `Many homeowners search for a landscaping contractor in Barrie and discover mid-project that the landscaping can't happen until the drainage is resolved, or that the retaining wall needs to be in before the grade is set. Ground Level Contracting understands this sequence because we do all of it. We arrive with the full picture already in mind.

A retaining wall that is not drained correctly will fail. A patio that is not graded correctly will flood. A landscaping program built on top of a drainage problem will look good for one season and deteriorate from there. We resolve the drainage, establish the grade, build the hardscaping, and integrate the landscape — in the correct order, by the same team, under one project scope.

**Terraced hardscaping and landscaping on sloped lots** — Converting unusable slope into a series of functional, beautifully hardscaped and landscaped outdoor levels connected by stone steps and retaining walls. Planting zones integrated at each terrace to soften the walls and complete the landscape.

**Lakeside and waterfront integration** — Armour stone shoreline walls, natural stone patio terraces stepping down to the water, drainage systems protecting against both upland runoff and shoreline erosion, and landscaping designed to stabilize and beautify the transition zone.

**High-end design execution** — For properties where the design vision is as important as the engineering, we deliver finished quality to the level that luxury properties in Simcoe County require. The hardscaping is the foundation; the landscaping is the finish.

**Drainage-first design methodology** — For every project, drainage is resolved before hardscaping begins, and hardscaping is established before final landscaping is placed. This is the correct sequence. It is the only sequence that produces outcomes that last.

**Full excavation and grade management** — We bring our hauling capability to every project, managing spoils, importing material, and finishing grade as an integrated part of the project scope.

When a project requires drainage to be the foundation on which exceptional hardscaping and landscaping is built, Ground Level Contracting is the team Simcoe County property owners trust to get it right.`,
} as const;

export const DRAINAGE_WHY_CHOOSE = {
  eyebrow: "WHY GROUND LEVEL CONTRACTING",
  h2: "Why Choose Ground Level Contracting for Drainage, Hardscaping & Landscaping in Simcoe County?",
  points: [
    {
      title: "The Combination No One Else in This Market Owns",
      summary:
        "Drainage, hardscaping, and landscaping together — one contractor instead of three schedules.",
      expandTrigger: "Read more →",
      body: `No single contractor in the Barrie and Simcoe County market currently combines deep, documented drainage expertise — weeping tile, foundation drain tile, french drains, custom site drainage design — with full-service hardscaping capability in armour stone walls, interlock, natural stone, and concrete, and the integrated landscaping perspective to bring the full project together. Most drainage contractors don't build patios. Most hardscapers don't install weeping tile. Most landscaping companies in Barrie aren't equipped to resolve the drainage problem before they plant. Ground Level Contracting does all three at a high level, which means your project doesn't require multiple contractors, multiple scopes of work, and multiple sets of scheduling headaches.`,
    },
    {
      title: "Local Knowledge That Changes Outcomes",
      summary: "Simcoe County soils and topography — experience that changes what we specify.",
      expandTrigger: "Read more →",
      body: `Simcoe County soil — heavy clay near Barrie, sandy loam near Wasaga Beach, rocky till in Oro-Medonte — behaves differently under a foundation and responds differently to drainage intervention. Our team has worked across this region's full soil and topographic range, from lakefront properties to rural hillside estates. That experience changes the designs we specify and the outcomes our clients receive.`,
    },
    {
      title: "Drainage-First Design Philosophy",
      summary: "We find the water before we put stone in the ground.",
      expandTrigger: "Read more →",
      body: `Every project we build — whether it starts as a drainage call, a hardscaping inquiry, or a request for landscaping — begins with a drainage assessment. We find the water before we put stone in the ground. This approach prevents the most common and expensive failure mode in outdoor construction: beautiful work that creates a drainage problem or fails because it was built on top of one.`,
    },
    {
      title: "Honest Scoping, Written Proposals",
      summary: "Clear scope, line-item pricing, and frank conversation — no unnecessary upsells.",
      expandTrigger: "Read more →",
      body: `Every project begins with a free site assessment, a written proposal with clear scope and line-item pricing, and a frank conversation about what is and isn't necessary. We do not upsell drainage systems that aren't needed or propose hardscaping and landscaping that doesn't serve a functional purpose. What's in the proposal is what gets built.`,
    },
    {
      title: "Fully Licensed, Insured & WSIB Compliant",
      summary: "Certificates of insurance and WSIB clearance available on request.",
      expandTrigger: "Read more →",
      body: `We carry comprehensive commercial liability insurance, maintain current WSIB compliance, and are fully licensed for the work we perform in Ontario. Certificates of insurance and WSIB clearance are available on request.`,
    },
    {
      title: "Warranty-Backed Work",
      summary: "Ask us for current warranty terms on your specific project type at the time of quoting.",
      expandTrigger: "Read more →",
      body: `Our hardscaping and drainage installations are backed by a workmanship warranty. Ask us for current warranty terms on your specific project type at the time of quoting.`,
    },
  ],
} as const;

export const DRAINAGE_PROCESS = {
  eyebrow: "OUR PROCESS",
  h2: "Our Drainage & Hardscaping Process — From Assessment to Completion",
  steps: [
    {
      title: "Free Site Assessment",
      body: `We visit your property at no charge. Our goal is to understand what you're experiencing — whether that's water in the basement, a drainage problem in the yard, a slope you want to retain, a hardscaping project you want to design, or a landscaping vision you want to realize. We assess existing conditions, identify drainage challenges, and listen to your goals before we say anything about solutions. A good assessment is the difference between a proposal that fixes the problem and one that addresses the symptom.`,
    },
    {
      title: "Written Proposal",
      body: `Within a few business days of your site visit, you receive a written proposal with a clearly defined scope of work, line-item pricing, and a project timeline. We walk through every element with you — materials, scope boundaries, sequence of work, and what to expect during the project. No surprises.`,
    },
    {
      title: "Scheduling & Pre-Project Planning",
      body: `Once you accept the proposal, we schedule your project and confirm all material orders, equipment bookings, and utility locates. On projects requiring permits — retaining walls above code height thresholds, drainage alterations near property lines — we manage the permit application as part of our pre-project process.`,
    },
    {
      title: "Site Preparation & Excavation",
      body: `Excavation is performed to the depth required for your specific project — whether that's footing-level for drain tile, subgrade depth for base preparation, or full excavation for grade correction. Spoils are managed through our integrated hauling capability — removed from site, stockpiled, or redistributed as the project requires.`,
    },
    {
      title: "Drainage Infrastructure First",
      body: `Drainage systems — perforated pipe, gravel bedding, catch basins, outlet connections — are installed before any hardscaping surfaces go down. Drainage infrastructure is always buried. Once it is covered, it must work correctly for decades without access. This is where craftsmanship in concealed work matters most.`,
    },
    {
      title: "Hardscaping Installation",
      body: `Retaining walls are built on properly prepared and compacted bases with drainage backfill installed as the wall rises. Hard surfaces — interlock, natural stone, concrete — are laid on mechanically compacted aggregate bases to the depth required for the load and frost exposure on your site.`,
    },
    {
      title: "Final Grade, Cleanup & Restoration",
      body: `Final grade is established to direct surface water correctly away from structures and toward drainage outlets. Site cleanup, topsoil restoration, and any seed, sod, or landscaping reinstatement are completed. The project is not done until the site looks as though we were never there — except for the permanent solution that remains.`,
    },
  ],
} as const;

export const DRAINAGE_SERVICE_AREAS = {
  eyebrow: "WHERE WE WORK",
  h2: "Areas We Serve Across Central Ontario",
  intro: `Ground Level Contracting provides drainage, hardscaping, and landscaping services throughout a broad territory centred on Barrie, Ontario, covering the full geographic range of Simcoe County and its surrounding communities.`,
  primaryHeading: "Primary Service Areas",
  primary: [
    { city: "Barrie, Ontario", note: "Full service. All drainage, hardscaping, and landscaping services." },
    { city: "Innisfil, Ontario", note: "Residential, lakefront, and waterfront properties." },
    { city: "Orillia, Ontario", note: "Drainage, retaining walls, interlock, and hardscaping." },
    { city: "Wasaga Beach, Ontario", note: "Drainage and hardscaping in residential and cottage-area settings." },
    { city: "Angus / Essa Township", note: "Residential drainage and hardscaping services." },
    { city: "Springwater Township", note: "Rural residential drainage, hardscaping, and landscaping." },
    { city: "Oro-Medonte", note: "Lakeside, hillside, and rural estate properties." },
  ],
  extendedHeading: "Extended Service Areas",
  extendedInline:
    "New Tecumseth / Alliston, Midland & Penetanguishene, Bradford West Gwillimbury, Collingwood & The Blue Mountains, Ramara & surrounding Simcoe County townships",
  lakesideNote: `We regularly work on waterfront properties around Lake Simcoe, Kempenfelt Bay, and throughout the Simcoe County cottage belt. Armour stone shoreline walls, drainage integration for seasonal properties, and hardscaping and landscaping on challenging lakefront grades are all within our scope.`,
} as const;

export const DRAINAGE_FAQ = {
  eyebrow: "FREQUENTLY ASKED QUESTIONS",
  h2: "Drainage, Hardscaping & Landscaping FAQs — Barrie and Simcoe County",
  items: [
    {
      q: "What is foundation drain tile and how does it work?",
      a: `Foundation drain tile — also called weeping tile or a sub drain — is a perforated pipe installed around the base of your foundation footings. It collects groundwater that moves through the surrounding soil and directs it away from your home to a sump pit or a daylight outlet, preventing hydrostatic pressure from building against your foundation walls and causing leaks, cracks, or basement flooding. Modern systems use sock-wrapped perforated PVC pipe bedded in washed clear stone for maximum longevity and drainage performance.`,
    },
    {
      q: "How do I know if my weeping tile needs to be replaced in Barrie?",
      a: `Common signs include a chronically wet basement, water stains or white powder — called efflorescence — on your foundation walls, a sump pump that runs constantly or cycles more than it should, soggy saturated ground along your foundation perimeter, or a persistent musty smell in the basement or crawlspace. Homes in Barrie and Simcoe County built before the 1980s may still have original clay tile systems. These systems have a finite service life — they crack, collapse, and clog with root intrusion over time — and should be inspected and replaced before failure causes costly foundation damage. If your home is in this age range, proactive replacement is almost always less expensive than reactive repair after water infiltration has begun.`,
    },
    {
      q: "What type of retaining wall is best for my property in Simcoe County?",
      a: `The right retaining wall depends on your site conditions, height requirements, aesthetic goals, and budget. Armour stone is the ideal choice for natural, rural, lakeside, and high-load applications — it is durable, requires no mortar, drains naturally, and integrates beautifully into most Simcoe County landscaping settings. Segmental concrete block suits residential grade changes, garden terracing, and projects where a clean, contemporary aesthetic is the priority. Poured concrete or engineered wall systems are required for walls exceeding standard height thresholds, walls supporting structures or driveways, or sites with complex load conditions that require stamped engineer drawings. We assess every site individually and recommend the approach that best suits your property and budget.`,
    },
    {
      q: "Does a retaining wall need drainage behind it?",
      a: `Absolutely — and this is one of the most commonly skipped steps by less experienced contractors. Without proper drainage, water from the backfill zone has nowhere to go. It accumulates, saturates the soil, and creates hydrostatic pressure against the back of the wall — one of the leading causes of retaining wall failure in Ontario. Every wall we build includes appropriate drainage as standard practice: a minimum backfill zone of washed crushed stone, weep holes at the base of the wall face, and perforated pipe where conditions require. This is not an upgrade. It is a baseline requirement for a wall that will perform over its intended service life.`,
    },
    {
      q: "Can you fix drainage problems on a sloped property near Barrie?",
      a: `Yes — and sloped, challenging properties are a project type we actively specialize in. Sloped lots create concentrated runoff at the base of the grade, erosion on exposed surfaces, and often direct water toward foundation walls or neighbouring properties. We design and install custom surface and subsurface drainage systems — french drains, swales, catch basins, and corrective grading — combined where appropriate with retaining walls, terraced hardscaping, and landscaping to manage water permanently and create a usable, beautiful outdoor environment. The goal is not just to address the visible symptom but to engineer a solution that works through every season, including Simcoe County's heavy spring thaw.`,
    },
    {
      q: "Do you build retaining walls on waterfront and lakeside properties in Simcoe County?",
      a: `Yes. We regularly work on lakeside and waterfront properties around Lake Simcoe, Kempenfelt Bay, and throughout Simcoe County. Armour stone walls are particularly well-suited to shoreline applications — the mass and permeability of the material provides erosion and wave protection while blending naturally into the waterfront landscape. Shoreline wall projects near the water's edge may require coordination with municipal or conservation authority permitting, and we have experience navigating those requirements as part of the project planning process.`,
    },
    {
      q: "What areas do you serve for drainage, hardscaping and landscaping?",
      a: `We serve Barrie, Orillia, Wasaga Beach, Innisfil, Angus, Springwater, Oro-Medonte, New Tecumseth (Alliston), Midland, Penetanguishene, Bradford West Gwillimbury, and surrounding communities throughout Simcoe County and Central Ontario. If your property is within the Simcoe County region and you're not sure whether we serve your specific area, call or submit a quote request and we'll confirm.`,
    },
    {
      q: "How long does a drain tile system last?",
      a: `A properly installed modern system — sock-wrapped perforated PVC pipe, washed 3/4" clear stone bedding, correctly sloped to a properly sized outlet — can last 25 to 50 or more years with minimal maintenance. The longevity of a drain tile system is directly tied to the quality of the installation: pipe sizing, gravel depth, slope, and outlet capacity all affect long-term performance. Older clay tile systems common in pre-1980s Barrie homes are past their engineered service life. Clay tiles collapse under soil pressure, crack along joint lines, and are highly susceptible to root intrusion. If your home has an original clay system and you have not had it inspected, it should be evaluated before it fails — proactive replacement is a fraction of the cost of reactive foundation repair.`,
    },
  ],
} as const;

export const DRAINAGE_TRUST_SIGNALS = {
  eyebrow: "LICENSED · INSURED · LOCAL",
  h2: "Licensed, Insured & Locally Trusted in Simcoe County",
  items: [
    { label: "Fully Licensed & Insured", sub: "Commercial general liability coverage on every project" },
    { label: "WSIB Compliant", sub: "Current WSIB clearance certificates available on request" },
    { label: "Locally Owned & Operated", sub: "Based in Barrie, serving Simcoe County since [YEAR]" },
    { label: "Warranty-Backed Workmanship", sub: "Ask about warranty terms for your project type" },
    { label: "Free Site Assessments", sub: "No-obligation site visits and written proposals" },
    { label: "Transparent, Written Quotes", sub: "Line-item pricing with no surprises at invoice" },
    { label: "Licensed for Permits", sub: "We manage permit applications for regulated wall and drainage work" },
    { label: "Real Project Photos", sub: "Before & after documentation from properties across Simcoe County" },
    { label: "Google Reviewed", sub: "[Rating] stars, [Count] reviews from verified local clients" },
  ],
} as const;

/** Position 15 — titles/descriptors verbatim; hrefs mapped to registry (plan). */
export const DRAINAGE_RELATED_CARDS = [
  {
    title: "Hauling & Material Delivery",
    body: "Stone, aggregate & spoils hauling integrated with every drainage and hardscaping project.",
    href: "/services/hauling-site-clearing-logistics/",
  },
  {
    title: "Commercial Snow Removal",
    body: "Year-round property maintenance for commercial clients.",
    href: "/services/snow-removal/",
  },
  {
    title: "Free Site Assessment",
    body: "Book a no-obligation site visit and written quote for your drainage, hardscaping, or landscaping project.",
    href: "/contact/",
  },
] as const;

export const DRAINAGE_FINAL_CTA = {
  id: "cta-assessment",
  line1: "Stop the Water. Fix the Grade.",
  line2: "Build Something Exceptional.",
  sub: `Ground Level Contracting provides complete drainage, hardscaping, and landscaping solutions across Barrie, Orillia, Simcoe County, Wasaga Beach & Innisfil. Every project starts with a free site assessment and a written quote.`,
  ctaPrimary: "Get Your Free Drainage Assessment",
  ctaSecondary: "Book a Free Site Visit",
  ctaPhone: `Call: ${PHONE_DISPLAY}`,
  finePrint: "Licensed & insured. WSIB compliant. Serving Simcoe County since [YEAR].",
} as const;

export const DRAINAGE_JSONLD_FAQ = DRAINAGE_FAQ.items.map((item) => ({
  "@type": "Question" as const,
  name: item.q,
  acceptedAnswer: { "@type": "Answer" as const, text: item.a },
}));
