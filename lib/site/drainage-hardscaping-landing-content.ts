/**
 * Drainage & Hardscaping landing — verbatim v2.0 stakeholder copy.
 * Audit reference: docs/content/GLC_DrainageHardscaping_Page_Complete_v2.md
 */
import { PHONE_DISPLAY } from "@/lib/ground-level/homepage-copy";
import { getSiteUrl } from "@/lib/site/metadata";

export const drainagePagePath = "/services/drainage-hardscaping/";

export const DRAINAGE_LANDING_SEO = {
  /** Align with visible split-hero H1 + lede (seo-strategy). */
  title: "End Standing Water & Foundation Risks | Drainage & Hardscaping Barrie & Simcoe County",
  description:
    "Commercial and residential drainage in Barrie & Simcoe County: culverts, french drains, catch basins, grading tie-ins, and hardscapes built on dry subgrades. Request a drainage assessment.",
  ogTitle:
    "Drainage Solutions — Barrie & Simcoe County | Ground Level Contracting",
  ogDescription:
    "Stop ponding and basement symptoms with engineered surface and subsurface drainage — french drains, catch basins, culvert runs, and grades tied to storm. Serving Barrie, Orillia, Wasaga Beach, Innisfil & Simcoe County.",
  twitterTitle: "Drainage Solutions — Barrie & Simcoe County | Ground Level Contracting",
  twitterDescription:
    "Culverts, french drains, catch basins, and grading corrections for dry foundations and pavements. Barrie, Orillia & Simcoe County.",
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
  /** Proof slider: saturated / failed perimeter vs corrected grade and conveyance. */
  proofBefore: drainageLandingImage(9, DRAINAGE_IMAGE_ALTS["09"]),
  proofAfter: drainageLandingImage(7, DRAINAGE_IMAGE_ALTS["07"]),
} as const;

/** Funnel pain — dark-to-light band (copy-writing: split columns for multi-sentence body). */
export const DRAINAGE_FUNNEL_PAIN = {
  eyebrow: "Risk",
  h2: "A wet basement isn't the problem; it's a symptom of failed site grading.",
  colLeft:
    "Standing water and sheet flow toward the structure saturate soils, accelerate erosion, and load footings in ways the original grade never accounted for.",
  colRight:
    "When storm tie-ins, trench slopes, and finished grades do not match the site, finishes fail season after season while the real failure stays underground.",
} as const;

/** Three-lane systems story — imagery keys reference `DRAINAGE_IMAGES` (drainage-hardscaping-landing-content). */
export const DRAINAGE_SYSTEMS_SOLUTION = {
  eyebrow: "Systems",
  h2: "Culverts, french drains & catch basins — installed to move water on purpose",
  intro: "Heavy typography below pairs each system with field photography from Simcoe County installs.",
  steps: [
    {
      title: "Culverts & storm conveyance",
      body: "Rigid and corrugated runs, bedding, and structure tie-ins sized for peak flows — sequenced before pavements and hardscape so buried work carries load and frost.",
      imageField: "drainTileMain" as const,
    },
    {
      title: "French & trench drains",
      body: "Perimeter and yard interceptors with geotextile, clean stone, and positive outlet to daylight or storm — protecting envelopes while keeping walks and turf usable.",
      imageField: "siteDrainage1" as const,
    },
    {
      title: "Catch basins & surface collection",
      body: "Inlets, grates, and lead-ins set to survey so sheet flow reaches the network your civil plan expects — not the neighbour's lawn.",
      imageField: "siteDrainage2" as const,
    },
  ],
} as const;

export const DRAINAGE_PROOF_BEFORE_AFTER = {
  eyebrow: "Proof",
  heading: "Flooded conditions vs. engineered dry finish",
  caption:
    "Drag the divider to compare a saturated perimeter / failed drainage context with a corrected grade and conveyance package ready for inspection and cover scopes.",
} as const;

/** SEO basement — educational; defer to engineer / OBC / geotech (no project guarantees). */
export const DRAINAGE_SEO_BASEMENT = {
  sectionEyebrow: "Reference library",
  sectionTitle: "Technical specifications & drainage context",
  sectionIntro:
    "Expand for crawlable depth on soils, pipe sizing, and grades. Field targets always follow signed drawings and municipal direction — not marketing tables.",
  blocks: [
    {
      summary: "Soil saturation and infiltration",
      paragraphs: [
        "Clay-heavy profiles near Barrie hold pore pressure longer than sandier strips toward Wasaga; seasonal highs change how quickly subsurface drains must pull water away from footings.",
        "Saturation rates inform trench depth, stone volume, and whether interceptors belong upgradient of the structure. Geotechnical input and OBC exposure assumptions govern design — we execute to that brief.",
      ],
    },
    {
      summary: "Pipe diameters, slopes, and materials",
      paragraphs: [
        "Carrier diameters, material class (PVC, HDPE, concrete), jointing, and minimum slopes are set by civil drawings and municipal storm standards — not a one-size table in marketing copy.",
        "Cleanouts, structure connections, and bedding classes are part of the same IFC package; field changes route through RFI so capacity and cover stay traceable at inspection.",
      ],
    },
    {
      summary: "Grading percentages and sheet flow",
      paragraphs: [
        "Finished and interim grades target designer cross-slopes and longitudinal slopes so sheet flow reaches catchments without ponding on structural fills or against walls.",
        "Percentages tie to hardscape and landscape cover: what reads flat on paper must still move water when pavers, asphalt, or turf are in place — we lock tie-ins before those scopes close the surface.",
      ],
    },
  ],
} as const;

export const DRAINAGE_HERO = {
  /** Full phrase for audits / JSON-LD-adjacent reference. */
  h1: "End Standing Water & Foundation Risks — Drainage & Hardscaping in Barrie & Simcoe County",
  h1LineBefore: "End Standing Water",
  h1LineAccent: "& Foundation Risks",
  /** Service scope line under H1 (still drainage-led). */
  kicker: "Drainage, hardscaping & landscaping · Simcoe County",
  sub: "We engineer surface and subsurface drainage — culverts, french drains, catch basins, and grades tied to storm — so hardscapes and foundations stay dry through freeze-thaw.",
  ctaPrimary: "Request a Drainage Assessment",
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

/** Intro lede — one or two sentences per paragraph (copy-writing G-CW-1); remainder in expand. */
export const DRAINAGE_INTRO_VISIBLE_P1 = `Ground Level Contracting is Simcoe County's trusted specialist for complete drainage, hardscaping, and landscaping — from foundation drain tile and site drainage design to armour stone walls, interlock, natural stone, and integrated outdoor environments.`;

export const DRAINAGE_INTRO_VISIBLE_P2 = `We solve the water problems other contractors ignore, and we build hardscapes and landscapes that turn challenging grades into functional, lasting spaces.`;

export const DRAINAGE_INTRO_VISIBLE_P3 = `Our edge is simple: deep drainage skill, full hardscaping capability, and landscaping integration — one contractor, one schedule.`;

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
  "Request a drainage assessment or send drawings — we confirm scope, sequencing, and fit before hardscape or landscape cover closes your grades.";

export const DRAINAGE_SERVICE_CARDS_EYEBROW = "WHAT WE BUILD";
export const DRAINAGE_SERVICE_CARDS = [
  {
    title: "Foundation Drain Tile (Sub Drain)",
    paras: [
      "Protect your foundation with weeping tile done right: perforated pipe, sock wrap, gravel bedding, and a correctly sized outlet built to last 25–50+ years.",
      "We install interior and exterior systems for new builds, older homes, and full remediation.",
    ],
    href: "#foundation-drain-tile",
    anchorLabel: "View Foundation Drain Tile Details →",
  },
  {
    title: "Custom Site Drainage Design",
    paras: [
      "We engineer surface and subsurface drainage for your soil, slope, and seasons — french drains, swales, basins, grading, and interceptor trenches.",
      "Every plan targets where water enters, how it moves, and where it must exit.",
    ],
    href: "#site-drainage-design",
    anchorLabel: "View Site Drainage Details →",
  },
  {
    title: "Retaining Walls",
    paras: [
      "Armour stone, segmental block, concrete, and engineered walls — each with drainage backfill, weeps, and stone zones as standard.",
      "Walls must hold the load, shed water, and still look intentional twenty years out.",
    ],
    href: "#retaining-walls",
    anchorLabel: "View Retaining Wall Details →",
  },
  {
    title: "Patios, Walkways, Driveways & Steps",
    paras: [
      "Interlock, flagstone, exposed aggregate, and armour stone steps on compacted bases with drainage tied into the wider site.",
      "Surfaces are detailed for Simcoe County frost, load, and finish — not just day-one appearance.",
    ],
    href: "#patios-driveways-steps",
    anchorLabel: "View Patios & Driveways Details →",
  },
  {
    title: "Hardscape & Landscape Integration",
    paras: [
      "Lakefront, hillside, and high-grade lots need drainage, walls, and finish landscape as one system.",
      "One crew sequence means fewer gaps between engineering, execution, and long-term performance.",
    ],
    href: "#hardscape-integration",
    anchorLabel: "View Integration Details →",
  },
  {
    title: "Free Site Assessment",
    paras: [
      "Every project starts with a no-obligation visit: we document drainage, grade, and your goals.",
      "You get a written scope with line-item pricing — no surprises at invoice.",
    ],
    href: "#cta-assessment",
    anchorLabel: "Book a Free Assessment →",
  },
] as const;

export const DRAINAGE_DRAIN_TILE = {
  id: "foundation-drain-tile",
  eyebrow: "FOUNDATION DRAIN TILE & SUB DRAIN",
  h2: "Foundation Drain Tile Installation & Replacement (Sub Drain) — Protecting Barrie & Simcoe County Homes",
  summaryParas: [
    "Your foundation's first line of defence is a properly functioning drain tile system.",
    "Also called weeping tile or sub drain, perforated pipe around footings intercepts groundwater and moves it away from the basement before damage or flooding occurs.",
  ] as const,
  expandTrigger: "See the full drain tile detail — symptoms, process & options →",
  ghostCta: "Get a Free Assessment →",
  subPageHref: "/services/foundation-drain-tile-barrie",
  subPageLabel: "Learn more about our Foundation Drain Tile service page",
  h3WhatIs: "What Is Foundation Drain Tile (Weeping Tile / Sub Drain)?",
  whatIsParas: [
    "Your foundation's first line of defence is a properly functioning drain tile system. Also called weeping tile or sub drain, perforated pipe runs around footings to intercept groundwater and redirect it before structural damage, mould, or flooding.",
    "Hydrostatic pressure — saturated soil pushing water against foundation walls — drives much of the basement infiltration we see across Central Ontario. A properly installed drain tile system relieves that pressure continuously and protects the foundation from the outside in.",
    "At Ground Level Contracting, we install and replace interior and exterior foundation drain tile throughout Barrie, Orillia, and Simcoe County.",
    "Whether you have failed clay tile, a clogged perforated run, or a foundation that was never drained correctly, we specify sock-wrapped perforated PVC, washed gravel bedding, and a correctly sized sump or daylight outlet — built to last decades.",
    "Where drain tile ties into yard drainage or landscaping, we coordinate the full scope as one system.",
  ] as const,
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
  signsClosingParas: [
    "Homes in Barrie and Simcoe County built before the 1980s often still run original clay tile.",
    "Those systems have a finite life: tiles crack, collapse, and clog with roots.",
    "If you are in that age bracket and have not been inspected, proactive replacement usually costs far less than repair after water has damaged the foundation.",
  ] as const,
  h3InteriorExterior: "Interior vs. Exterior Drain Tile — Which Is Right For You?",
  interiorExteriorParas: [
    "Exterior drain tile sits at the footing perimeter from the outside. It is the most comprehensive fix — groundwater is intercepted before it reaches the wall — and it is the go-to for new builds and full remediation.",
    "Exterior work also lets us correct landscaping, grading, and surface drainage in the same mobilization.",
    "Interior systems run along the basement perimeter inside, feeding a sump. They fit when exterior dig is not practical because of access, cost, or mature landscape you want to preserve.",
    "Interior runs manage water after it reaches the wall; they do not stop infiltration at the face, but they protect finished space reliably.",
    "The right path depends on foundation type, water source, access, and budget. We assess each site and recommend the approach that delivers the strongest long-term protection.",
  ] as const,
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
  eyebrow: "SURFACE · SUBSURFACE · GRADING",
  h2: "Custom Site Drainage Design — Surface, Subsurface & Grading Solutions for Simcoe County Properties",
  summary: `Water always finds its way — the goal is to control where it goes. Poor drainage is rarely a single-point problem.`,
  summaryCont: `It is a systemic failure: the wrong grade directing surface runoff toward the foundation, subsurface water with no clear path to a proper outlet, compacted soil preventing infiltration, and a yard that holds water in low spots after every rain event.`,
  expandTrigger: "See what's included in a custom drainage design →",
  expandNarrativeParas: [
    "Ground Level Contracting designs drainage for surface flow, subsurface movement, and outlet strategy in one engineered plan.",
    "We install french drains, swales, catch basins, channel drains, and grading that stop pooling, erosion, and uncontrolled runoff.",
    "When drainage pairs with hardscape or landscape, we design it in from the start — not bolted on later.",
    "Across Barrie, Wasaga Beach, Innisfil, and rural Simcoe County we match soil, frost, clay, and municipal standards to what survives a full winter cycle.",
  ] as const,
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
      textParas: [
        "A gravel trench with perforated pipe intercepts subsurface flow and routes it to a legal outlet.",
        "We use it for yards, foundation relief, slopes, and saturated planting zones.",
      ] as const,
    },
    {
      label: "Swale",
      textParas: [
        "Shallow channels — open or planted — catch and steer surface runoff before it accelerates.",
        "A good swale reads as landscape when dry and works hard when it rains.",
      ] as const,
    },
    {
      label: "Catch Basin",
      textParas: [
        "Basins sit at lows, slope toes, and hardscape edges to collect water before it ponds or spreads.",
        "They are critical where paving meets planting or turf.",
      ] as const,
    },
    {
      label: "Corrective Grading",
      textParas: [
        "Re-grading moves surface water away from foundations and toward the right outlets.",
        "It is often the fastest win for wet yards and the right first move on tough grades.",
      ] as const,
    },
    {
      label: "Interceptor Trench",
      textParas: [
        "When subsurface flow tracks toward a structure or low spot, an upslope trench with pipe cuts that path off.",
        "Water is redirected before it reaches the problem zone.",
      ] as const,
    },
  ],
  solutionStripLabels: ["French Drain", "Swale", "Catch Basin", "Corrective Grading", "Interceptor Trench"] as const,
  subPageHref: "/services/site-drainage-design-barrie",
} as const;

export const DRAINAGE_RETAINING_WALLS = {
  id: "retaining-walls",
  eyebrow: "ARMOUR · BLOCK · ENGINEERED",
  h2: "Retaining Walls in Barrie & Simcoe County — Armour Stone, Block, Concrete & Engineered Solutions",
  intro: `A retaining wall does two jobs simultaneously: it holds back earth and it makes a statement. At Ground Level Contracting, we design and build retaining walls that accomplish both — from natural armour stone walls that integrate seamlessly into rural and lakeside landscapes, to precision-engineered block systems suited to residential grade changes and commercial applications, to structural concrete walls for high-load and high-height requirements.`,
  intro2: `Every retaining wall we build includes proper drainage behind the wall — because without it, even the most well-built wall will eventually fail. Hydrostatic pressure from water trapped in saturated backfill is responsible for the majority of premature retaining wall failures in Ontario.`,
  intro3: `We size our walls correctly for the load they carry, prepare our base to the depth the site requires, and install crushed stone drainage backfill, weep holes, and perforated pipe as standard practice on every wall — regardless of height or material. Where a wall is part of a broader hardscaping and landscaping project, we integrate the drainage system across the full site from day one.`,
  tabs: [
    {
      label: "Armour Stone",
      summary: `Armour stone retaining walls are among the most durable and visually compelling options available in Central Ontario. Each large natural limestone or granite stone — typically weighing hundreds to thousands of kilograms — is set precisely to lock the wall together without mortar, distributing load evenly and allowing natural drainage through the structure.`,
      expandTrigger: "Read the full armour stone detail →",
      expand: `The result is a wall that will not shift, will not sag, and looks better with every passing year as it weathers into the landscape.

Armour stone is ideally suited for lakeside properties, rural estates, sloped driveways, and high-end residential landscaping projects where a natural, substantial, permanently stable wall is the priority. The scale and weight of the material makes it inherently resistant to frost heave and lateral soil pressure — the two forces that destroy smaller-scale wall systems over time. When combined with terraced planting zones or natural stone steps, armour stone walls become defining features of a landscape rather than functional afterthoughts.

We source armour stone from regional quarries where possible, and our equipment is rated for the placement precision and weight management that armour stone installation requires.`,
      subHref: "/services/retaining-walls-barrie",
    },
    {
      label: "Block & Concrete",
      summary: `Segmental concrete block retaining walls — manufactured by brands including Unilock, Risi, and Allan Block — offer engineered performance, clean modern lines, and structural load ratings for walls up to and beyond 1.2 metres.`,
      expandTrigger: "See block, concrete & engineered wall details →",
      expand: `Ideal for residential grade separations, garden terracing, pool surrounds, and commercial applications where a uniform, refined appearance integrates well with surrounding hardscaping and landscaping, block walls can be curved, stepped, or built in tiers to suit complex site geometries.

Block wall systems are engineered products with published installation specifications. We follow manufacturer guidelines for base preparation, geogrid reinforcement schedules, and drainage requirements — ensuring the warranty and structural performance the product is rated for.

For applications requiring maximum structural strength — steep slopes carrying heavy surcharge loads, walls in close proximity to structures or utilities, or sites with complex geotechnical conditions — poured concrete and precast concrete retaining walls deliver the structural performance that other materials cannot match.`,
      subHref: "/services/retaining-walls-barrie",
    },
    {
      label: "Engineered",
      summary: `Walls exceeding standard height thresholds, walls supporting structures, roads, or driveways, or sites with complex loading conditions require engineer-stamped design drawings under the Ontario Building Code.`,
      expandTrigger: "See engineered wall requirements & our process →",
      expand: `Ground Level Contracting coordinates with structural engineers to design and build retaining walls that meet code requirements — including geogrid-reinforced earth systems, sheet pile solutions, and modular gravity wall systems — and obtains the required permits and inspections as part of the project scope.

If your project requires a building permit for a retaining wall, we manage that process on your behalf.`,
      subHref: "/services/retaining-walls-barrie",
    },
    {
      label: "Lakeside & Waterfront",
      summary: `Shoreline and waterfront retaining walls on Lake Simcoe, Kempenfelt Bay, and throughout Simcoe County serve a dual purpose: they protect the land from erosion while defining the boundary between improved property and the water.`,
      expandTrigger: "Read the full lakeside wall detail →",
      expand: `Armour stone is the preferred material for most shoreline applications — its mass, permeability, and natural appearance make it structurally suited to wave and ice pressure and aesthetically appropriate for waterfront landscaping settings.

We regularly build and rebuild shoreline retaining walls for lakefront homeowners across the Simcoe County region. These projects often require site-specific engineering, environmental consideration for materials near the water, and coordination with applicable regulatory requirements. We have experience navigating these requirements and can advise on the permitting process as part of the project planning phase.`,
      subHref: "/services/retaining-walls-barrie",
    },
  ],
} as const;

export const DRAINAGE_MID_CTA = {
  headline: "Have a retaining wall, drainage, or landscaping project in mind?",
  subParas: ["Get a free written quote — no obligation, no pressure."] as const,
  primary: "Book a Free Site Assessment",
  secondary: `Call: ${PHONE_DISPLAY}`,
} as const;

export const DRAINAGE_PATIOS = {
  id: "patios-driveways-steps",
  eyebrow: "PATIOS · DRIVEWAYS · STEPS",
  h2: "Patios, Walkways, Driveways & Steps — Stone, Interlock & Concrete in Barrie & Simcoe County",
  intro: `The hardscape surfaces on your property are where function meets lifestyle.`,
  intro2: `A well-designed interlock patio, natural stone walkway, or exposed aggregate driveway doesn't just add curb appeal and outdoor living space — it solves drainage and grade challenges at the same time, and it creates the framework within which landscaping comes to life.`,
  intro3: `Every hardscape project we build starts with proper base preparation: the right excavation depth, the right compacted aggregate layers, and the right drainage integration so your surfaces perform as beautifully in year fifteen as they do on installation day.`,
  tabs: [
    {
      label: "Interlock",
      summary: `Interlocking concrete paving stone is the most versatile and widely specified hardscape surface in the Barrie and Simcoe County market. Available in hundreds of sizes, profiles, colours, and textures from manufacturers including Unilock, Permacon, and Cambridge, interlock allows virtually unlimited design flexibility.`,
      expandTrigger: "Read the full interlock detail →",
      expand: `From traditional herringbone driveways to contemporary large-format patio systems that integrate seamlessly with surrounding landscaping and planting zones, interlock allows virtually unlimited design flexibility.

The structural performance of an interlock installation is entirely dependent on base preparation. We excavate to the correct depth for the soil conditions and frost exposure on your specific site, compact Granular A base in mechanically compacted lifts, and install a calibrated bedding sand layer before setting paving units. This base system is what separates an interlock installation that lasts 20 years from one that settles and shifts within a season.

Drainage integration — whether that means a positive cross-slope, a perforated edge pipe, or a channel drain at a transition point — is assessed and incorporated into every interlock project. Edge restraints are installed to manufacturer specification, and we manage the interface between hardscape and landscaping so the finished result is clean, permanent, and well-drained.`,
      subHref: "/services/interlock-patios-barrie",
    },
    {
      label: "Natural Stone",
      summary: `Natural flagstone — limestone, granite, slate, and sandstone — creates a hardscape surface that is genuinely irreplaceable in its visual character.`,
      expandTrigger: "See natural stone and flagstone detail →",
      expand: `No manufactured product fully replicates the variation, texture, and warmth of real stone. At Ground Level Contracting, we source and install natural flagstone patios, walkways, and feature areas throughout Simcoe County, cutting and fitting stone for consistent joint spacing and a finished surface that rewards closer inspection.

Natural stone installations require more skilled labour than interlock and command a premium, but they deliver an aesthetic outcome and a permanence that elevates a property distinctly — particularly when paired with a well-designed retaining wall, planting beds, or a broader landscaping program.`,
      subHref: "/services/interlock-patios-barrie",
    },
    {
      label: "Concrete",
      summary: `Concrete offers strength, longevity, and design versatility in a single material.`,
      expandTrigger: "Read the full concrete finishes detail →",
      expand: `Exposed aggregate concrete — where the surface paste is washed away to reveal the stone aggregate beneath — provides a slip-resistant, textured finish suited to driveways, pool surrounds, and walkways. Stamped concrete applies embossed pattern and colour to create the appearance of natural stone, brick, or wood plank at a lower material cost than the real thing.

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
      expand: `We design and build:

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
    `Not every property is a flat, easy build.`,
    `Some of the most striking properties in Simcoe County — lakefront homes on Lake Simcoe, hillside properties in Oro-Medonte, sloped rural lots near Wasaga Beach and Innisfil — present real engineering and design challenges. These are the projects we approach with the most enthusiasm.`,
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
  expandBodyLead: `Many homeowners search for a landscaping contractor in Barrie and discover mid-project that the landscaping can't happen until the drainage is resolved, or that the retaining wall needs to be in before the grade is set. Ground Level Contracting understands this sequence because we do all of it. We arrive with the full picture already in mind.

A retaining wall that is not drained correctly will fail. A patio that is not graded correctly will flood. A landscaping program built on top of a drainage problem will look good for one season and deteriorate from there. We resolve the drainage, establish the grade, build the hardscaping, and integrate the landscape — in the correct order, by the same team, under one project scope.`,
  expandBodyRest: `**Terraced hardscaping and landscaping on sloped lots** — Converting unusable slope into a series of functional, beautifully hardscaped and landscaped outdoor levels connected by stone steps and retaining walls. Planting zones integrated at each terrace to soften the walls and complete the landscape.

**Lakeside and waterfront integration** — Armour stone shoreline walls, natural stone patio terraces stepping down to the water, drainage systems protecting against both upland runoff and shoreline erosion, and landscaping designed to stabilize and beautify the transition zone.

**High-end design execution** — For properties where the design vision is as important as the engineering, we deliver finished quality to the level that luxury properties in Simcoe County require. The hardscaping is the foundation; the landscaping is the finish.

**Drainage-first design methodology** — For every project, drainage is resolved before hardscaping begins, and hardscaping is established before final landscaping is placed. This is the correct sequence. It is the only sequence that produces outcomes that last.

**Full excavation and grade management** — We bring our hauling capability to every project, managing spoils, importing material, and finishing grade as an integrated part of the project scope.

When a project requires drainage to be the foundation on which exceptional hardscaping and landscaping is built, Ground Level Contracting is the team Simcoe County property owners trust to get it right.`,
} as const;

export const DRAINAGE_WHY_CHOOSE = {
  eyebrow: "SIMCOE COUNTY · ONE CONTRACTOR",
  h2: "Why Choose Ground Level Contracting for Drainage, Hardscaping & Landscaping in Simcoe County?",
  points: [
    {
      title: "The Combination No One Else in This Market Owns",
      summary:
        "Drainage, hardscaping, and landscaping together — one contractor instead of three schedules.",
      expandTrigger: "Read more →",
      bodyParas: [
        "Few Barrie-area contractors combine documented drainage — weeping tile, foundation drain, french drains, site design — with full hardscaping in armour stone, interlock, natural stone, and concrete.",
        "Most drainage crews do not build patios. Most hardscapers do not install weeping tile. Many landscapers plant before the water story is solved.",
        "We run all three disciplines, so you are not juggling separate scopes, crews, and schedules.",
      ] as const,
    },
    {
      title: "Local Knowledge That Changes Outcomes",
      summary: "Simcoe County soils and topography — experience that changes what we specify.",
      expandTrigger: "Read more →",
      bodyParas: [
        "Clay near Barrie, sandier profiles toward Wasaga, rocky till in Oro-Medonte — each responds differently under footings and to drainage fixes.",
        "We have worked lakefront to hillside across that range, and that history changes what we specify and how we phase work.",
      ] as const,
    },
    {
      title: "Drainage-First Design Philosophy",
      summary: "We find the water before we put stone in the ground.",
      expandTrigger: "Read more →",
      bodyParas: [
        "Every engagement — drainage, hardscape, or landscape — starts with where water is coming from and where it must go.",
        "That sequence avoids the expensive pattern of beautiful work that fails because it ignored drainage or was built on top of a problem.",
      ] as const,
    },
    {
      title: "Honest Scoping, Written Proposals",
      summary: "Clear scope, line-item pricing, and frank conversation — no unnecessary upsells.",
      expandTrigger: "Read more →",
      bodyParas: [
        "You get a free site visit, written scope with line items, and straight talk about what is essential versus optional.",
        "We do not upsell systems you do not need. What you approve is what we build.",
      ] as const,
    },
    {
      title: "Fully Licensed, Insured & WSIB Compliant",
      summary: "Certificates of insurance and WSIB clearance available on request.",
      expandTrigger: "Read more →",
      bodyParas: [
        "We carry commercial liability coverage, maintain WSIB compliance, and hold the licences required for our Ontario work.",
        "Certificates and clearance letters are available on request.",
      ] as const,
    },
    {
      title: "Warranty-Backed Work",
      summary: "Ask us for current warranty terms on your specific project type at the time of quoting.",
      expandTrigger: "Read more →",
      bodyParas: [
        "Drainage and hardscape installs ship with workmanship warranty coverage.",
        "Ask for the current terms for your project type when we quote.",
      ] as const,
    },
  ],
} as const;

export const DRAINAGE_PROCESS = {
  eyebrow: "OUR PROCESS",
  h2: "How we execute — from assessment through final grade",
  steps: [
    {
      title: "Free Site Assessment",
      paras: [
        "We visit your property at no charge.",
        "We document what you are seeing — basement water, yard drainage, slopes to hold, hardscape goals, or landscape vision.",
        "We assess before we prescribe. That discipline separates fixes from symptom patches.",
      ],
    },
    {
      title: "Written Proposal",
      paras: [
        "Within a few business days you receive scope, line-item pricing, and a timeline.",
        "We review materials, boundaries, sequence, and site expectations together — no surprises.",
      ],
    },
    {
      title: "Scheduling & Pre-Project Planning",
      paras: [
        "After acceptance we lock the schedule and confirm materials, equipment, and locates.",
        "When permits apply — tall walls or drainage near limits — we run the application as part of prep.",
      ],
    },
    {
      title: "Site Preparation & Excavation",
      paras: [
        "Excavation reaches footing depth for drain tile, subgrade for bases, or full cuts for grade fixes.",
        "Spoils move by our hauling: off-site, stockpiled, or redistributed to match the plan.",
      ],
    },
    {
      title: "Drainage Infrastructure First",
      paras: [
        "Pipe, gravel beds, basins, and outlets go in before any hardscape surface.",
        "Once buried, this work has to perform for decades with no access — detail matters here.",
      ],
    },
    {
      title: "Hardscaping Installation",
      paras: [
        "Walls rise on compacted bases with drainage zones installed as we build.",
        "Interlock, stone, and concrete land on aggregate lifts sized for frost and load at your site.",
      ],
    },
    {
      title: "Final Grade, Cleanup & Restoration",
      paras: [
        "Finish grade moves surface water away from structures toward the right outlets.",
        "We restore soil and turf, clean the site, and leave only the permanent work behind.",
      ],
    },
  ],
} as const;

export const DRAINAGE_SERVICE_AREAS = {
  eyebrow: "WHERE WE WORK",
  h2: "Areas We Serve Across Central Ontario",
  intro: `Ground Level Contracting serves drainage, hardscaping, and landscaping from a Barrie base across Simcoe County and nearby communities.`,
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
  lakesideParas: [
    "We work lakefront and seasonal properties across Lake Simcoe, Kempenfelt Bay, and the cottage belt.",
    "Shoreline armour stone, seasonal drainage, and hardscape plus landscape on steep lake grades stay in our wheelhouse.",
  ],
} as const;

export const DRAINAGE_FAQ = {
  eyebrow: "FREQUENTLY ASKED QUESTIONS",
  h2: "Drainage, Hardscaping & Landscaping FAQs — Barrie and Simcoe County",
  items: [
    {
      q: "What is foundation drain tile and how does it work?",
      aParas: [
        "Foundation drain tile — weeping tile or sub drain — is perforated pipe at the footing perimeter that collects groundwater and routes it to a sump or daylight outlet.",
        "That lowers hydrostatic pressure against the wall and reduces leaks, cracks, and basement flooding.",
        "Modern installs use sock-wrapped perforated PVC in washed clear stone for long service life.",
      ],
    },
    {
      q: "How do I know if my weeping tile needs to be replaced in Barrie?",
      aParas: [
        "Watch for wet basements, efflorescence, constant sump cycling, soggy perimeter soil, musty air, or cracks that track with storms.",
        "Pre-1980s homes often still run clay tile that cracks, collapses, and roots into.",
        "Inspect before failure — proactive replacement is usually cheaper than foundation repair after chronic infiltration.",
      ],
    },
    {
      q: "What type of retaining wall is best for my property in Simcoe County?",
      aParas: [
        "Material follows height, load, look, and budget — there is no one-size label for every lot.",
        "Armour stone fits natural, rural, lakeside, and heavy-load cases: mass, drainage, and longevity without mortar.",
        "Segmental block suits residential grade changes and clean contemporary lines. Poured or engineered systems cover tall walls, surcharges, and stamped-design sites.",
        "We recommend after a site walk — not from a brochure photo alone.",
      ],
    },
    {
      q: "Does a retaining wall need drainage behind it?",
      aParas: [
        "Yes — skipping drainage is how walls die early in Ontario.",
        "Saturated backfill drives hydrostatic load into the stem until something gives.",
        "We install crushed stone drainage zones, weeps, and pipe where the section demands it — baseline practice, not an upsell.",
      ],
    },
    {
      q: "Can you fix drainage problems on a sloped property near Barrie?",
      aParas: [
        "Sloped lots are a core specialty: concentrated runoff, erosion, and water aimed at foundations or neighbours.",
        "We combine grading, french drains, swales, basins, and walls or terraces when the grade needs structure.",
        "The target is a system that survives spring thaw — not a one-season patch.",
      ],
    },
    {
      q: "Do you build retaining walls on waterfront and lakeside properties in Simcoe County?",
      aParas: [
        "Yes — Lake Simcoe, Kempenfelt Bay, and the wider county shoreline are regular project ground for us.",
        "Armour stone’s mass and permeability usually fit wave, ice, and erosion loads while reading as landscape.",
        "Water’s-edge work may need municipal or conservation permits — we fold that guidance into planning.",
      ],
    },
    {
      q: "What areas do you serve for drainage, hardscaping and landscaping?",
      aParas: [
        "We cover Barrie, Orillia, Wasaga Beach, Innisfil, Angus, Springwater, Oro-Medonte, New Tecumseth, Midland, Penetanguishene, Bradford West Gwillimbury, and nearby Central Ontario townships.",
        "Unsure on your address? Call or request a quote and we will confirm coverage.",
      ],
    },
    {
      q: "How long does a drain tile system last?",
      aParas: [
        "A correctly built PVC run in clear stone, with proper slope and outlet sizing, often lasts 25–50+ years with little maintenance.",
        "Life tracks installation quality: pipe size, stone depth, grade, and outlet capacity.",
        "Original clay systems in older Barrie stock are past typical design life — collapse, joint cracking, and roots are common. Evaluate before catastrophic failure; replacement beats emergency foundation work on price and stress.",
      ],
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
    paras: [
      "Stone, aggregate, and spoils move with our drainage and hardscape crews — fewer handoffs, cleaner sites.",
      "Ask how hauling slots into your excavation or import schedule.",
    ] as const,
    href: "/services/hauling-site-clearing-logistics/",
  },
  {
    title: "Commercial Snow Removal",
    paras: [
      "Commercial clients pair winter clearing with the same team that knows their grades and drains.",
      "One relationship from hardscape season to plow season.",
    ] as const,
    href: "/services/snow-removal/",
  },
  {
    title: "Free Site Assessment",
    paras: [
      "Book a no-obligation walkthrough for drainage, hardscape, or landscape scope.",
      "You leave with a written quote and clear next steps.",
    ] as const,
    href: "/contact/",
  },
] as const;

export const DRAINAGE_FINAL_CTA = {
  id: "cta-assessment",
  line1: "Stop the Water. Fix the Grade.",
  line2: "Build Something Exceptional.",
  subParas: [
    "Complete drainage, hardscaping, and landscaping for Barrie, Orillia, Simcoe County, Wasaga Beach, and Innisfil.",
    "Every project starts with a free site assessment and a written quote.",
  ],
  ctaPrimary: "Request a Drainage Assessment",
  ctaSecondary: "Book a Free Site Visit",
  ctaPhone: `Call: ${PHONE_DISPLAY}`,
  finePrint: "Licensed & insured. WSIB compliant. Serving Simcoe County since [YEAR].",
} as const;

export const DRAINAGE_JSONLD_FAQ = DRAINAGE_FAQ.items.map((item) => ({
  "@type": "Question" as const,
  name: item.q,
  acceptedAnswer: { "@type": "Answer" as const, text: item.aParas.join(" ") },
}));
