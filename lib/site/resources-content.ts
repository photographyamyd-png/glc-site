export type ResourceArticle = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  published: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  faq?: Array<{ q: string; a: string }>;
  relatedServiceHref: string;
  relatedServiceLabel: string;
};

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    slug: "excavation-barrie-commercial-mobilization",
    title: "Excavation in Barrie: What GCs Should Know Before Mobilization",
    description:
      "Barrie excavation planning for commercial GCs — locates, permits, haul routes, frost considerations, and mobilization checklists for Simcoe County developers.",
    eyebrow: "Process guide",
    published: "2026-06-14",
    relatedServiceHref: "/locations/excavation-site-preparation-barrie-ontario/",
    relatedServiceLabel: "Excavation in Barrie",
    sections: [
      {
        heading: "Confirm scope before blades move",
        paragraphs: [
          "Barrie commercial excavation succeeds when the latest civil IFC issue, geotech report, and benchmark control are on site before mobilization. Working from superseded drawings or unverified control creates rework that shows up at inspection holds.",
          "Walk the footprint with survey and your superintendent to flag utilities, soft zones, unsuitable organics, and phasing constraints — especially on industrial sites south of the 400 where corridor access and staging windows are tight.",
        ],
      },
      {
        heading: "Locates, permits, and municipal coordination",
        paragraphs: [
          "Build Ontario One Call lead times into your schedule. Mechanical excavation near marked utilities still demands hand expose, vacuum support, or hydrovac where clearance is tight.",
          "Barrie and Simcoe County municipalities may require erosion control, haul route approvals, or traffic plans before mass excavation. Align permit submissions with your consultant team early.",
        ],
      },
      {
        heading: "Production and turnover",
        paragraphs: [
          "Sequence stripping, structural fills, and fine grading so haul routes stay productive and compaction testing represents real production lifts — not cherry-picked test pads.",
          "Turnover should include photos, elevation records, and hold summaries so forming, utilities, and paving trades start on verified grades.",
        ],
      },
    ],
    faq: [
      {
        q: "How early should we engage an excavation contractor in Barrie?",
        a: "As soon as civil drawings and site access are firm — early engagement helps secure equipment, plan export routes, and align with forming milestones.",
      },
      {
        q: "Does Ground Level Contracting serve Barrie commercial sites only?",
        a: "We focus on commercial, industrial, and institutional excavation across Barrie and Simcoe County.",
      },
    ],
  },
  {
    slug: "excavation-orillia-commercial-site-prep",
    title: "Excavation in Orillia: Commercial Site Prep Planning Guide",
    description:
      "Orillia excavation planning for commercial builds — lake-country drainage, corridor access, spoils export, and inspection-ready turnover for Simcoe County GCs.",
    eyebrow: "Process guide",
    published: "2026-06-14",
    relatedServiceHref: "/locations/excavation-site-preparation-orillia-ontario/",
    relatedServiceLabel: "Excavation in Orillia",
    sections: [
      {
        heading: "Orillia site conditions and scope",
        paragraphs: [
          "Orillia commercial excavation succeeds when civil IFC drawings, geotech recommendations, and benchmark control are confirmed before mobilization. Lake-adjacent drainage sensitivity and corridor access constraints often change how stripping, structural fills, and fine grading are sequenced.",
          "Walk the footprint with survey and your superintendent to flag soft zones, unsuitable organics, utility conflicts, and phasing constraints that affect production and export routes.",
        ],
      },
      {
        heading: "Locates, permits, and haul logistics",
        paragraphs: [
          "Build Ontario One Call lead times into your Orillia schedule. Mechanical excavation near marked utilities still demands hand expose, vacuum support, or hydrovac where clearance is tight.",
          "Coordinate erosion control, haul route approvals, and municipal permits with your consultant team early — especially when export volumes or staging windows are limited.",
        ],
      },
      {
        heading: "Production and turnover",
        paragraphs: [
          "Sequence stripping, structural fills, and fine grading so haul routes stay productive and compaction testing represents real production lifts.",
          "Turnover should include photos, elevation records, and hold summaries so forming, utilities, and paving trades start on verified grades.",
        ],
      },
    ],
    faq: [
      {
        q: "Does Ground Level Contracting provide excavation in Orillia?",
        a: "Yes — we serve Orillia commercial, industrial, and institutional sites with full excavation and site preparation scope from our Barrie-area dispatch base.",
      },
      {
        q: "How early should we book Orillia excavation?",
        a: "Contact us as soon as civil drawings and site access are firm — early engagement helps secure equipment and align with forming milestones.",
      },
    ],
  },
  {
    slug: "commercial-pad-prep-checklist-barrie",
    title: "Commercial Pad Prep Checklist for Barrie Industrial Sites",
    description:
      "A procurement-ready checklist for commercial building pad preparation — grading, compaction, survey tie-in, and turnover documentation in Barrie and Simcoe County.",
    eyebrow: "Process guide",
    published: "2026-06-14",
    relatedServiceHref: "/services/site-preparation-grading/",
    relatedServiceLabel: "Site Preparation & Grading",
    sections: [
      {
        heading: "Before blades move",
        paragraphs: [
          "Confirm the latest civil IFC issue, geotech report, and benchmark control are on site. Pad prep fails when field crews work from superseded drawings or unverified control.",
          "Walk the footprint with survey and your superintendent to flag soft zones, unsuitable organics, and utility conflicts that change the earthwork sequence.",
        ],
      },
      {
        heading: "Rough grade and structural lifts",
        paragraphs: [
          "Sequence stripping, rough shaping, and structural fills so haul routes stay productive and inspection holds are predictable.",
          "Track lift thickness, moisture windows, and compaction testing — density results should represent real production, not cherry-picked test pads.",
        ],
      },
      {
        heading: "Fine grade and turnover",
        paragraphs: [
          "Finish to survey tolerances with documented elevations before forming, utilities, and paving lock geometry.",
          "Turnover should include photos, hold summaries, and the next trade access plan — not only a signed drawing.",
        ],
      },
    ],
    faq: [
      {
        q: "What documents should a GC provide before grading mobilization?",
        a: "Latest civil model or staking, geotech report, ESC plan, and a realistic lookahead for forming and utility milestones.",
      },
      {
        q: "When should compaction testing be scheduled?",
        a: "Align tests with approved lift thickness and moisture targets — notify the testing firm before production shifts change.",
      },
    ],
  },
  {
    slug: "ontario-excavation-permit-basics-simcoe-county",
    title: "Ontario Excavation Permit Basics for Simcoe County Developers",
    description:
      "What commercial developers and GCs should know about excavation permits, utility locates, and municipal coordination across Simcoe County municipalities.",
    eyebrow: "Compliance",
    published: "2026-06-14",
    relatedServiceHref: "/services/excavation-site-preparation/",
    relatedServiceLabel: "Excavation & Site Preparation",
    sections: [
      {
        heading: "Permits and locates",
        paragraphs: [
          "Excavation scope often triggers municipal permits and mandatory utility locates. Build locate lead times into the mobilization schedule — especially on corridors with buried telecom and hydro.",
          "Confirm whether your municipality requires erosion control, haul route approvals, or traffic plans before mass excavation begins.",
        ],
      },
      {
        heading: "Utility-aware digging",
        paragraphs: [
          "Mechanical excavation near marked utilities still demands hand expose, vacuum support, or hydrovac where clearance is tight.",
          "Document depth checks and any field deviations — downstream trades and consultants need traceability when as-builts are assembled.",
        ],
      },
      {
        heading: "Working with your excavation partner",
        paragraphs: [
          "Share the full drawing set, phasing plan, and export/tip approvals early so spoils handling does not stall production.",
          "Licensed, insured contractors familiar with Simcoe County soils and municipal processes reduce rework and schedule risk on commercial sites.",
        ],
      },
    ],
    faq: [
      {
        q: "Do all excavation projects require a permit?",
        a: "Requirements vary by municipality and scope. Your civil engineer and local building department confirm what applies to your site.",
      },
      {
        q: "How early should utility locates be requested?",
        a: "Request locates as soon as scope and access are confirmed — allow buffer before the first trench or footing dig.",
      },
    ],
  },
  {
    slug: "commercial-snow-contract-timing-barrie",
    title: "When to Sign Commercial Snow Contracts in Barrie",
    description:
      "Seasonal planning for commercial snow and ice management — contract timing, SLA expectations, and dispatch readiness for Barrie and Simcoe County properties.",
    eyebrow: "Seasonal",
    published: "2026-06-14",
    relatedServiceHref: "/services/snow-removal/",
    relatedServiceLabel: "Commercial Snow Removal",
    sections: [
      {
        heading: "Why early contracts matter",
        paragraphs: [
          "Priority dispatch and route density are planned before the first storm. Properties that wait until November often face limited crew availability and weaker SLA options.",
          "Early contracts allow walkthroughs, pile plans, and salt inventory aligned to your lot geometry and traffic patterns.",
        ],
      },
      {
        heading: "What to define in scope",
        paragraphs: [
          "Clarify trigger depths, plow frequency, deicing products, sidewalk responsibility, and after-hours access for retail or industrial tenants.",
          "Document pile storage, hauling thresholds, and emergency escalation paths before winter events stress the schedule.",
        ],
      },
      {
        heading: "Regional coverage",
        paragraphs: [
          "Ground Level Contracting supports commercial lots and industrial yards across Barrie, Orillia, Innisfil, Wasaga Beach, and Simcoe County with GPS-tracked service options where required.",
        ],
      },
    ],
    faq: [
      {
        q: "When is the best time to sign a winter contract?",
        a: "Late summer through early fall is ideal — before route planning and equipment allocation lock for the season.",
      },
      {
        q: "Can emergency-only coverage be added mid-season?",
        a: "Availability varies by storm load and routing. Early contracts receive priority over ad-hoc emergency requests.",
      },
    ],
  },
  {
    slug: "foundation-excavation-coordination-simcoe-county",
    title: "Foundation Excavation Coordination for Simcoe County Commercial Builds",
    description:
      "How GCs align foundation excavation, servicing trenches, and inspection holds with structural schedules across Simcoe County commercial projects.",
    eyebrow: "Process guide",
    published: "2026-06-14",
    relatedServiceHref: "/services/foundations-civil-infrastructure/",
    relatedServiceLabel: "Foundations & Civil Infrastructure",
    sections: [
      {
        heading: "IFC alignment",
        paragraphs: [
          "Foundation excavation should track the latest structural and civil IFC issues. RFIs that change footing depths or trench routes must reach the field before production resumes.",
          "Coordinate elevator pits, dock pits, and deep utilities in one lookahead so cranes and forming crews are not waiting on isolated digs.",
        ],
      },
      {
        heading: "Inspection and backfill holds",
        paragraphs: [
          "Stage trenches and footings for geotech and building inspection windows — keep lifts accessible and documented.",
          "Backfill sequences should protect waterproofing, underslab plumbing, and anchor bolt templates before slab trades mobilize.",
        ],
      },
      {
        heading: "Documentation for turnover",
        paragraphs: [
          "Elevation records, photos, and hold summaries support consultants and owners who need traceability at substantial completion.",
          "Clear communication with your excavation partner reduces costly re-digs when drawings and field conditions diverge.",
        ],
      },
    ],
    faq: [
      {
        q: "Can excavation and foundations scope be combined under one contractor?",
        a: "Yes — integrated civil packages reduce handoff gaps between mass excavation, footing digs, and backfill.",
      },
      {
        q: "What regions does GLC serve for foundations work?",
        a: "Barrie, Orillia, Innisfil, Wasaga Beach, Midland, and Simcoe County commercial and institutional sites.",
      },
    ],
  },
];

export function getResourceSlugs(): string[] {
  return RESOURCE_ARTICLES.map((a) => a.slug);
}

export function getResourceArticle(slug: string): ResourceArticle | undefined {
  return RESOURCE_ARTICLES.find((a) => a.slug === slug);
}
