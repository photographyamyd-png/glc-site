import {
  CITATION_EXPANSION_TARGETS,
  EXPANSION_PLAYWRIGHT_IDS,
} from "./citation-targets-150";

export type DirectoryTier = 1 | 2 | 3 | 4;
export type AutomationTier = "playwright" | "manual" | "api";

export type DirectoryTarget = {
  id: string;
  platform: string;
  signupUrl: string;
  tier: DirectoryTier;
  estimatedMinutes: number;
  loginRequired: boolean;
  suggestedCategories: string[];
  notes?: string;
};

/** Tier 3 free directories suitable for Playwright + saved session automation. */
export const PLAYWRIGHT_AUTO_IDS = new Set<string>([
  "brownbook",
  "cylex-ca",
  "hotfrog-ca",
  "iglobal",
  "cybo",
  "manta",
  "411-ca",
  "canpages",
  "profile-canada",
  "ibegin",
  "tupalo",
  "showmelocal",
  "ezlocal",
  "find-open",
  "localsearch411",
  "n49",
  "yalwa-ca",
  "tuugo-ca",
  ...EXPANSION_PLAYWRIGHT_IDS,
]);

/** Tier 1–2 and social listings: headed browser + human login/submit gates. */
export const ASSISTED_HEADED_IDS = new Set([
  "apple-business",
  "canada411",
  "homestars",
  "houzz",
  "barrie-chamber",
  "orillia-chamber",
  "midland-chamber",
  "bbb-central-ontario",
  "trustedpros",
  "facebook",
  "linkedin",
  "yelp-ca",
  "kompass-ca",
  "foursquare",
  "alignable",
  "homeguide-ca",
  "renovationfind",
  "barrie-chamber-directory",
  "barrie-today-directory",
  "city-barrie-business-directory",
  "invest-barrie",
]);

export function getDirectoryAutomationTier(id: string): AutomationTier {
  if (PLAYWRIGHT_AUTO_IDS.has(id)) return "playwright";
  if (ASSISTED_HEADED_IDS.has(id)) return "manual";
  return "manual";
}

export function withAutomationTier(target: DirectoryTarget): DirectoryTarget & {
  automationTier: AutomationTier;
} {
  return { ...target, automationTier: getDirectoryAutomationTier(target.id) };
}

/** Core high-priority registry (pre-expansion). */
export const CORE_DIRECTORY_TARGETS: DirectoryTarget[] = [
  {
    id: "gbp",
    platform: "Google Business Profile",
    signupUrl: "https://business.google.com",
    tier: 1,
    estimatedMinutes: 20,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor", "Construction company", "Snow removal service"],
    notes: "Verify ownership; set website to .ca; add service areas and photos. Paste the 750-char GBP description from listing-pack.md.",
  },
  {
    id: "bing-places",
    platform: "Bing Places",
    signupUrl: "https://www.bingplaces.com",
    tier: 1,
    estimatedMinutes: 15,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor"],
  },
  {
    id: "apple-business",
    platform: "Apple Business Connect",
    signupUrl: "https://businessconnect.apple.com",
    tier: 1,
    estimatedMinutes: 15,
    loginRequired: true,
    suggestedCategories: ["Construction"],
  },
  {
    id: "yellow-pages-ca",
    platform: "Yellow Pages Canada",
    signupUrl: "https://www.yellowpages.ca",
    tier: 1,
    estimatedMinutes: 10,
    loginRequired: true,
    suggestedCategories: ["Excavation Contractors"],
  },
  {
    id: "canada411",
    platform: "Canada411",
    signupUrl: "https://www.canada411.ca",
    tier: 1,
    estimatedMinutes: 10,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor"],
  },
  {
    id: "homestars",
    platform: "HomeStars",
    signupUrl: "https://www.homestars.com",
    tier: 1,
    estimatedMinutes: 15,
    loginRequired: true,
    suggestedCategories: ["Excavation"],
    notes: "Upload project photos; request reviews after jobs.",
  },
  {
    id: "houzz",
    platform: "Houzz Pro",
    signupUrl: "https://www.houzz.com/pro",
    tier: 1,
    estimatedMinutes: 15,
    loginRequired: true,
    suggestedCategories: ["Excavation"],
  },
  {
    id: "barrie-chamber",
    platform: "Barrie Chamber of Commerce",
    signupUrl: "https://www.barriechamber.com",
    tier: 2,
    estimatedMinutes: 20,
    loginRequired: true,
    suggestedCategories: ["Construction / Excavation"],
    notes: "Membership may be required for directory link.",
  },
  {
    id: "orillia-chamber",
    platform: "Orillia & District Chamber of Commerce",
    signupUrl: "https://www.orillia.com/chamber",
    tier: 2,
    estimatedMinutes: 20,
    loginRequired: true,
    suggestedCategories: ["Construction"],
    notes: "Membership may be required for directory link.",
  },
  {
    id: "bbb-central-ontario",
    platform: "BBB Central Ontario",
    signupUrl: "https://www.bbb.org",
    tier: 2,
    estimatedMinutes: 15,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor"],
  },
  {
    id: "trustedpros",
    platform: "TrustedPros",
    signupUrl: "https://www.trustedpros.ca",
    tier: 2,
    estimatedMinutes: 10,
    loginRequired: true,
    suggestedCategories: ["Excavation"],
  },
  {
    id: "facebook",
    platform: "Facebook Business Page",
    signupUrl: "https://www.facebook.com/pages/create",
    tier: 3,
    estimatedMinutes: 10,
    loginRequired: true,
    suggestedCategories: ["Construction Company"],
  },
  {
    id: "linkedin",
    platform: "LinkedIn Company Page",
    signupUrl: "https://www.linkedin.com/company/setup/new",
    tier: 3,
    estimatedMinutes: 10,
    loginRequired: true,
    suggestedCategories: ["Construction"],
  },
  {
    id: "yelp-ca",
    platform: "Yelp Canada",
    signupUrl: "https://biz.yelp.ca",
    tier: 3,
    estimatedMinutes: 10,
    loginRequired: true,
    suggestedCategories: ["Excavation Services"],
  },
  {
    id: "brownbook",
    platform: "Brownbook.net",
    signupUrl: "https://www.brownbook.net",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor"],
  },
  {
    id: "cylex-ca",
    platform: "Cylex Canada",
    signupUrl: "https://www.cylex-canada.ca",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor"],
  },
  {
    id: "hotfrog-ca",
    platform: "Hotfrog Canada",
    signupUrl: "https://www.hotfrog.ca",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavation"],
  },
  {
    id: "iglobal",
    platform: "iGlobal",
    signupUrl: "https://www.iglobal.co/canada",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Construction"],
  },
  {
    id: "cybo",
    platform: "Cybo",
    signupUrl: "https://www.cybo.com",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor"],
  },
  {
    id: "manta",
    platform: "Manta",
    signupUrl: "https://www.manta.com/add-your-business",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavation contractor"],
  },
  {
    id: "ogca",
    platform: "Ontario General Contractors Association",
    signupUrl: "https://ogca.ca",
    tier: 4,
    estimatedMinutes: 25,
    loginRequired: true,
    suggestedCategories: ["Subcontractor / Supplier"],
    notes: "Explore membership or supplier directory eligibility.",
  },
  {
    id: "411-ca",
    platform: "411.ca",
    signupUrl: "https://www.411.ca/business/add",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor", "Construction company"],
    notes: "Major Canadian directory; confirm Barrie locality.",
  },
  {
    id: "canpages",
    platform: "Canpages",
    signupUrl: "https://www.canpages.ca",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavation Contractors"],
  },
  {
    id: "profile-canada",
    platform: "ProfileCanada",
    signupUrl: "https://www.profilecanada.com/addbusiness.aspx",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor"],
  },
  {
    id: "ibegin",
    platform: "iBegin",
    signupUrl: "https://www.ibegin.com/directory/add/",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Construction"],
  },
  {
    id: "tupalo",
    platform: "Tupalo",
    signupUrl: "https://www.tupalo.co/en/account/signup",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor"],
  },
  {
    id: "showmelocal",
    platform: "ShowMeLocal",
    signupUrl: "https://www.showmelocal.com/addbusiness.aspx",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavation contractor"],
  },
  {
    id: "ezlocal",
    platform: "EZlocal",
    signupUrl: "https://www.ezlocal.com/addbusiness/",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor"],
  },
  {
    id: "find-open",
    platform: "FindOpen Canada",
    signupUrl: "https://ca.findopen.ca",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Construction"],
  },
  {
    id: "kompass-ca",
    platform: "Kompass Canada",
    signupUrl: "https://ca.kompass.com/register/",
    tier: 3,
    estimatedMinutes: 10,
    loginRequired: true,
    suggestedCategories: ["Earth works company", "Construction company"],
    notes: "B2B industrial directory; emphasize commercial excavation.",
  },
  {
    id: "dnb-canada",
    platform: "Dun & Bradstreet Canada",
    signupUrl: "https://www.dnb.com/duns-number/get-a-duns.html",
    tier: 4,
    estimatedMinutes: 15,
    loginRequired: true,
    suggestedCategories: ["Construction"],
    notes: "D-U-N-S profile for B2B trust; not a traditional citation.",
  },
  {
    id: "foursquare",
    platform: "Foursquare",
    signupUrl: "https://foursquare.com/venue/add",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Construction"],
    notes: "Service-area business; hide street address if option exists.",
  },
  {
    id: "alignable",
    platform: "Alignable",
    signupUrl: "https://www.alignable.com/biz",
    tier: 3,
    estimatedMinutes: 10,
    loginRequired: true,
    suggestedCategories: ["Construction company"],
  },
  {
    id: "homeguide-ca",
    platform: "HomeGuide Canada",
    signupUrl: "https://homeguide.com/pro",
    tier: 3,
    estimatedMinutes: 10,
    loginRequired: true,
    suggestedCategories: ["Excavation"],
  },
  {
    id: "renovationfind",
    platform: "RenovationFind",
    signupUrl: "https://www.renovationfind.com/contractors/join",
    tier: 3,
    estimatedMinutes: 10,
    loginRequired: true,
    suggestedCategories: ["Excavation", "Site preparation"],
  },
  {
    id: "midland-chamber",
    platform: "Midland-Penetanguishene & District Chamber of Commerce",
    signupUrl: "https://www.midlandchamber.com",
    tier: 2,
    estimatedMinutes: 20,
    loginRequired: true,
    suggestedCategories: ["Construction / Excavation"],
    notes: "Membership may be required for directory link.",
  },
  {
    id: "cca",
    platform: "Canadian Construction Association",
    signupUrl: "https://www.cca-acc.com",
    tier: 4,
    estimatedMinutes: 25,
    loginRequired: true,
    suggestedCategories: ["Subcontractor / Supplier"],
    notes: "National trade association; explore member directory eligibility.",
  },
  {
    id: "localsearch411",
    platform: "LocalSearch411",
    signupUrl: "https://www.localsearch411.com/add-your-business",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor"],
  },
  {
    id: "n49",
    platform: "n49",
    signupUrl: "https://www.n49.com",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Construction"],
  },
  {
    id: "yalwa-ca",
    platform: "Yalwa Canada",
    signupUrl: "https://www.yalwa.ca",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Excavating contractor"],
  },
  {
    id: "tuugo-ca",
    platform: "Tuugo Canada",
    signupUrl: "https://www.tuugo.ca",
    tier: 3,
    estimatedMinutes: 8,
    loginRequired: true,
    suggestedCategories: ["Construction"],
  },
];

function mergeDirectoryTargets(): DirectoryTarget[] {
  const byId = new Map<string, DirectoryTarget>();
  for (const target of CORE_DIRECTORY_TARGETS) {
    byId.set(target.id, target);
  }
  for (const target of CITATION_EXPANSION_TARGETS) {
    if (!byId.has(target.id)) {
      byId.set(target.id, target);
    }
  }
  return [...byId.values()].sort((a, b) => a.tier - b.tier || a.platform.localeCompare(b.platform));
}

/** Full citation registry: core + 150-list expansion (deduped by id). */
export const DIRECTORY_TARGETS: DirectoryTarget[] = mergeDirectoryTargets();

export function getDirectoriesByTier(tier: DirectoryTier): DirectoryTarget[] {
  return DIRECTORY_TARGETS.filter((d) => d.tier === tier);
}
