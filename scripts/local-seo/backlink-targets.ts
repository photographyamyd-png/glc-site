import site from "@/content/site.json";

export type BacklinkTargetType =
  | "chamber"
  | "association"
  | "supplier"
  | "partner"
  | "media"
  | "resource";

export type BacklinkTarget = {
  id: string;
  name: string;
  type: BacklinkTargetType;
  url: string;
  priority: 1 | 2 | 3;
  suggestedAnchor: string;
  notes?: string;
};

export const BACKLINK_TARGETS: BacklinkTarget[] = [
  {
    id: "barrie-chamber",
    name: "Barrie Chamber of Commerce",
    type: "chamber",
    url: "https://www.barriechamber.com",
    priority: 1,
    suggestedAnchor: "Ground Level Contracting",
    notes: "Member directory link after joining.",
  },
  {
    id: "orillia-chamber",
    name: "Orillia & District Chamber of Commerce",
    type: "chamber",
    url: "https://www.orillia.com/chamber",
    priority: 1,
    suggestedAnchor: "Excavation Orillia",
    notes: "Member directory link after joining.",
  },
  {
    id: "ogca",
    name: "Ontario General Contractors Association",
    type: "association",
    url: "https://ogca.ca",
    priority: 2,
    suggestedAnchor: "Ground Level Contracting",
    notes: "Membership or subcontractor listing.",
  },
  {
    id: "simcoe-construction",
    name: "Local GC / builder partners (Simcoe County)",
    type: "partner",
    url: "https://groundlevelcontracting.ca/contact/",
    priority: 1,
    suggestedAnchor: "Excavation Barrie",
    notes: "Ask permission for project credit + reciprocal link to geo page.",
  },
  {
    id: "aggregate-suppliers",
    name: "Aggregate / equipment suppliers in Central Ontario",
    type: "supplier",
    url: "https://groundlevelcontracting.ca/services/excavation-site-preparation/",
    priority: 2,
    suggestedAnchor: "commercial excavation contractor",
    notes: "Preferred contractor or customer showcase pages.",
  },
  {
    id: "barrie-today",
    name: "Barrie Today / local news (project features)",
    type: "media",
    url: "https://www.barrietoday.com",
    priority: 3,
    suggestedAnchor: "Ground Level Contracting",
    notes: "Pitch community or project story with link to Barrie geo page.",
  },
  {
    id: "resource-excavation-barrie",
    name: "Resource article outreach — excavation Barrie guide",
    type: "resource",
    url: "https://groundlevelcontracting.ca/resources/excavation-barrie-commercial-mobilization/",
    priority: 2,
    suggestedAnchor: "Excavation in Barrie guide",
    notes: "Share with local builders associations and municipal economic development contacts.",
  },
];

export function getBacklinksByPriority(priority: 1 | 2 | 3): BacklinkTarget[] {
  return BACKLINK_TARGETS.filter((b) => b.priority === priority);
}

export const OUTREACH_TEMPLATES = {
  chamberShort: `Subject: Ground Level Contracting — member directory listing

Hello,

I'm reaching out from Ground Level Contracting Inc. — ${site.slogan}. We provide commercial excavation, grading, foundations, and civil infrastructure across Barrie and Simcoe County.

We'd like to confirm our member directory profile lists our website as https://groundlevelcontracting.ca and our primary category as excavation/site preparation.

Happy to provide logo assets or project photos if helpful.

Thank you,
Terry King
Ground Level Contracting Inc.
(705) 619-4902`,

  partnerLink: `Subject: Project credit / website link

Hello,

Ground Level Contracting completed excavation and site prep on [project name]. With your permission, we'd like to reference the project on our site and welcome a reciprocal link to our Barrie excavation page if your team lists trade partners:

https://groundlevelcontracting.ca/locations/excavation-site-preparation-barrie-ontario/

Let me know if that works for you.

Best,
Terry King
(705) 619-4902`,

  resourcePitch: `Subject: Simcoe County excavation mobilization guide

Hello,

We published a short guide for GCs and developers planning excavation in Barrie and Simcoe County:

https://groundlevelcontracting.ca/resources/excavation-barrie-commercial-mobilization/

If it's useful for your members or project partners, feel free to share. Happy to answer technical questions about commercial site prep in the region.

Regards,
Ground Level Contracting Inc. — ${site.slogan}`,
};
