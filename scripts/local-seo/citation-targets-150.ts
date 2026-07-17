/**
 * Expanded Barrie / Canada citation footprint (150-directory campaign).
 * Merged into DIRECTORY_TARGETS; existing ids are not duplicated.
 *
 * Note: DirectoryTarget shape is duplicated here to avoid a circular import
 * with directories.ts.
 */

type ExpansionTarget = {
  id: string;
  platform: string;
  signupUrl: string;
  tier: 1 | 2 | 3 | 4;
  estimatedMinutes: number;
  loginRequired: boolean;
  suggestedCategories: string[];
  notes?: string;
};

const CAT = ["Excavating contractor", "Construction company"];

function entry(
  id: string,
  platform: string,
  signupUrl: string,
  tier: 1 | 2 | 3 | 4,
  estimatedMinutes = 8,
  notes?: string,
): ExpansionTarget {
  return {
    id,
    platform,
    signupUrl,
    tier,
    estimatedMinutes,
    loginRequired: true,
    suggestedCategories: CAT,
    notes,
  };
}

/**
 * New citation targets from the 150-list that are not already in the core registry.
 * Phase mapping: 1=Canadian core, 2=hyper-local, 3=trades, 4=national, 5=global/B2B.
 */
export const CITATION_EXPANSION_TARGETS: ExpansionTarget[] = [
  // Phase 1 — Canadian core (gaps)
  entry("infobel-ca", "Infobel Canada", "https://www.infobel.com/en/canada", 1, 8),
  entry("weblocal-ca", "WebLocal Canada", "https://www.weblocal.ca/", 1, 8),
  entry("salespider", "SaleSpider", "https://www.salespider.com/", 3, 8),
  entry("ourbis", "OurBis", "https://www.ourbis.ca/", 3, 8),
  entry("fyple-ca", "Fyple Canada", "https://www.fyple.ca/", 3, 8),
  entry("opendi-ca", "Opendi Canada", "https://www.opendi.ca/", 3, 8),
  entry("locanto-ca", "Locanto Canada", "https://www.locanto.ca/", 3, 10),
  entry("zipleaf-ca", "Zipleaf Canada", "https://www.zipleaf.ca/", 3, 8),

  // Phase 2 — Hyper-local Barrie / Simcoe
  entry(
    "barrie-chamber-directory",
    "Barrie Chamber Directory",
    "https://business.barriechamber.com/list",
    2,
    20,
    "Member directory list — membership may be required.",
  ),
  entry(
    "barrie-today-directory",
    "BarrieToday Business Directory",
    "https://www.barrietoday.com/directory",
    2,
    15,
  ),
  entry(
    "city-barrie-business-directory",
    "City of Barrie Business Directory",
    "https://www.barrie.ca/business-economy/business-employer-data-directory",
    2,
    15,
  ),
  entry("invest-barrie", "Invest Barrie", "https://www.investbarrie.ca/", 2, 15),
  entry(
    "simcoe-community-reach",
    "Simcoe County Community Services Directory",
    "https://communityreach.cioc.ca/",
    2,
    15,
  ),
  entry(
    "innisfil-today-directory",
    "Innisfil Today Directory",
    "https://www.innisfiltoday.com/directory",
    2,
    12,
  ),
  entry(
    "orillia-matters-directory",
    "OrilliaMatters Business Directory",
    "https://www.orilliamatters.com/directory",
    2,
    12,
  ),
  entry(
    "collingwood-today-directory",
    "CollingwoodToday Business Directory",
    "https://www.collingwoodtoday.com/directory",
    2,
    12,
  ),
  entry(
    "midland-today-directory",
    "MidlandToday Business Directory",
    "https://www.midlandtoday.com/directory",
    2,
    12,
  ),
  entry(
    "bradford-today-directory",
    "BradfordToday Business Directory",
    "https://www.bradfordtoday.com/directory",
    2,
    12,
  ),
  entry(
    "simcoe-com-directory",
    "Simcoe.com Business Directory",
    "https://www.simcoe.com/directory/",
    2,
    12,
  ),
  entry(
    "ontario-business-registry",
    "Ontario Business Registry",
    "https://www.ontario.ca/page/ontario-business-registry",
    2,
    20,
    "Government registry — not a classic citation; confirm listing eligibility.",
  ),
  entry("nextdoor-barrie", "Nextdoor Business", "https://nextdoor.com/business/", 2, 12),
  entry(
    "kijiji-barrie-services",
    "Kijiji Barrie Local Services",
    "https://www.kijiji.ca/b-services/barrie/c640l1700006",
    2,
    15,
  ),
  entry("localsin-barrie", "LocalsIn Barrie Directory", "https://www.localsin.com/", 2, 10),

  // Phase 3 — Construction / trades niches
  entry("handyamerican", "HandyAmerican Contractor Directory", "https://www.handyamerican.com/", 4, 10),
  entry("buildzoom", "BuildZoom", "https://www.buildzoom.com/", 4, 12),
  entry("contractor-directory-ca", "Contractor Directory Canada", "https://www.contractordirectory.ca/", 4, 10),
  entry("renofiles", "RenoFiles Canada", "https://www.renofiles.com/", 4, 10),
  entry("smartrenovations", "SmartRenovations Directory", "https://www.smartrenovations.com/", 4, 10),
  entry("econtractor-ca", "EContractor", "https://www.econtractor.ca/", 4, 10),
  entry("gottarenovate", "GottaRenovate", "https://www.gottarenovate.com/", 4, 10),
  entry("contractorall", "ContractorAll", "https://www.contractorall.com/", 4, 10),
  entry("chba", "Canadian Home Builders' Association Directory", "https://www.chba.ca/", 4, 25, "Membership may be required."),
  entry("ohba", "Ontario Home Builders' Association Directory", "https://www.ohba.ca/", 4, 25, "Membership may be required."),
  entry("bild-gta", "BILD Member Directory", "https://bildgta.ca/", 4, 25, "GTA-focused; explore supplier/partner listing."),
  entry("renomark", "RenoMark Canada", "https://www.renomark.ca/", 4, 20),
  entry("porch", "Porch Contractor Network", "https://porch.com/", 4, 12),
  entry("mybuilder-ca", "MyBuilder Canada", "https://www.mybuilder.ca/", 4, 12),
  entry("contractorhub", "ContractorHub", "https://www.contractorhub.com/", 4, 10),
  entry("constructionlinks", "ConstructionLinks Network", "https://constructionlinks.ca/", 4, 12),
  entry("canadian-business-directory", "Canadian Business Directory", "https://www.canadianbusinessdirectory.ca/", 3, 10),
  entry("homeimprovement411", "HomeImprovement411", "https://www.homeimprovement411.ca/", 4, 10),
  entry("buildcanada", "BuildCanada Directory", "https://www.buildcanada.com/", 4, 12),
  entry("construction-canada", "Construction Canada Registry", "https://www.constructioncanada.net/", 4, 12),
  entry("architectural-digest-pro", "Architectural Digest Pro Directory", "https://www.architecturaldigest.com/", 4, 15),
  entry("concrete-contractors-assoc", "Concrete & Masonry Contractors Association", "https://www.concretecontractors.org/", 4, 20),
  entry("general-contractors-assoc", "General Contractors Association Directory", "https://www.generalcontractors.org/", 4, 20),
  entry("sweets-construction", "Sweet's Construction Network", "https://sweets.construction.com/", 4, 20),
  entry("bluebook", "Blue Book Building & Construction Network", "https://www.thebluebook.com/", 4, 20),
  entry("fixr", "Fixr Professional Network", "https://www.fixr.com/", 4, 12),
  entry("promatcher", "ProMatcher Construction Services", "https://promatcher.com/", 4, 12),
  entry("bob-vila", "Bob Vila Approved Contractors", "https://www.bobvila.com/", 4, 15),
  entry("fine-homebuilding", "Fine Homebuilding Directory", "https://www.finehomebuilding.com/", 4, 15),
  entry("equipmentworld", "EquipmentWorld Contractor Network", "https://www.equipmentworld.com/", 4, 15),
  entry("constructconnect", "ConstructConnect Project Network", "https://www.constructconnect.com/", 4, 20),
  entry("dcn-constructconnect", "Daily Commercial News Construction Directory", "https://canada.constructconnect.com/dcn", 4, 15),

  // Phase 4 — Canadian national / general
  entry("canadaone", "Canada One Business Directory", "https://www.canadaone.com/business/", 3, 10),
  entry("trycanada", "Try Canada", "https://www.trycanada.com/", 3, 8),
  entry("canada-co", "Canada-Co Directory", "https://www.canada-co.com/", 3, 8),
  entry("canadawebdir", "Canada Web Dir", "https://www.canadawebdir.com/", 3, 8),
  entry("shopincanada", "Shop In Canada", "https://www.shopincanada.com/", 3, 8),
  entry("business-directory-canada", "Business Directory Canada", "https://www.businessdirectorycanada.com/", 3, 8),
  entry("contactcanada", "Contact Canada", "https://www.contactcanada.com/", 3, 8),
  entry("enrollbusiness-ca", "Enroll Business Canada", "https://ca.enrollbusiness.com/", 3, 8),
  entry("misterwhat-ca", "MisterWhat Canada", "https://ca.misterwhat.com/", 3, 8),
  entry("mysheriff-ca", "My Sheriff Canada", "https://www.mysheriff.ca/", 3, 8),
  entry("phonepages-ca", "Phone Pages Canada", "https://www.phonepages.ca/", 3, 8),
  entry("relevant-directory-ca", "Relevant Directory Canada", "https://www.relevantdirectory.ca/", 3, 8),
  entry("canadian-directory-submission", "Canadian Directory Submission", "https://www.canadiandirectorysubmission.com/", 3, 8),
  entry("black-business-direct-ca", "Black Business Direct Canada", "https://www.blackbusinessdirect.ca/", 3, 10),
  entry("iwebdirectory-ca", "iWebDirectory Canada", "https://www.iwebdirectory.ca/", 3, 8),
  entry("directory-central-ca", "Directory Central Canada", "https://www.directorycentral.com/Canada", 3, 8),
  entry("storeboard-ca", "Storeboard Canada", "https://www.storeboard.com/canada", 3, 8),
  entry("cityfos", "CityFOS Canada", "https://www.cityfos.com/", 3, 8),
  entry("techdirectory", "TechDirectory", "https://www.techdirectory.io/", 3, 10),
  entry("canadaspace", "Canada Space", "http://canadaspace.com/", 3, 8),
  entry("dakitaki", "DakiTaki", "http://dakitaki.com/", 3, 8),
  entry("businessmention-ca", "Business Mention Canada", "http://businessmention.ca/", 3, 8),
  entry("clickblue-ca", "ClickBlue Canada", "http://ca.clickblue.co/", 3, 8),
  entry("getfreelisting", "Get Free Listing", "http://getfreelisting.com/", 3, 8),
  entry("bdpages", "BD Pages", "http://bdpages.com/", 3, 8),
  entry("localbiznetwork-ca", "Local Biz Network Canada", "https://www.localbiznetwork.com/canada", 3, 8),
  entry("canadian-business-network", "Canadian Business Network", "https://www.canadianbusinessnetwork.com/", 3, 8),
  entry("goldbook-ca", "Goldbook Canada", "https://www.goldbook.ca/", 3, 10),
  entry("icri-ca", "ICRI Canadian Business Directory", "https://www.icri.ca/", 3, 15),
  entry("yellowplace", "YellowPlace", "https://yellow.place/", 3, 8),
  entry("2findlocal-ca", "2FindLocal Canada", "https://www.2findlocal.com/en/ca", 3, 8),
  entry("callupcontact", "CallUpContact", "https://www.callupcontact.com/", 3, 8),
  entry("bizmap-ca", "BizMap Canada", "https://www.bizmap.ca/", 3, 8),

  // Phase 5 — Global / B2B / maps
  entry("capterra-ca", "Capterra Canada", "https://www.capterra.ca/", 4, 15, "Only if commercial software/services fit."),
  entry("yext", "Yext Network Portal", "https://www.yext.com/", 3, 20, "Aggregator — may be paid."),
  entry("freeindex", "FreeIndex", "https://www.freeindex.com/", 3, 10),
  entry("merchantcircle", "MerchantCircle", "https://www.merchantcircle.com/", 3, 8),
  entry("bizwiki", "BizWiki", "https://www.bizwiki.co.uk/", 3, 10),
  entry("cylex-international", "Cylex International", "https://www.cylex-international.com/", 3, 8),
  entry("citysquares", "CitySquares", "https://citysquares.com/", 3, 8),
  entry("local-com", "Local.com Marketplace", "https://www.local.com/", 3, 8),
  entry("uscity", "USCity Network", "https://uscity.net/", 3, 8),
  entry("superpages", "SuperPages Global", "https://www.superpages.com/", 3, 8),
  entry("yellowbot", "YellowBot", "https://www.yellowbot.com/", 3, 8),
  entry("dexknows", "DexKnows Marketplace", "https://www.dexknows.com/", 3, 8),
  entry("insiderpages", "InsiderPages", "https://www.insiderpages.com/", 3, 8),
  entry("kudzu", "Kudzu Local Business Hub", "https://www.kudzu.com/", 3, 8),
  entry("mapquest-business", "MapQuest Business Listings", "https://www.mapquest.com/", 3, 12),
  entry("tomtom-mapshare", "TomTom Map Share Reporter", "https://www.tomtom.com/mapshare/tools/reporter/", 3, 12),
  entry("here-mapcreator", "HERE Technologies Map Creator", "https://mapcreator.here.com/", 3, 15),
  entry("angi", "Angi Professional", "https://www.angi.com/", 4, 15),
  entry("homeadvisor", "HomeAdvisor Pro", "https://www.homeadvisor.com/", 4, 15),
  entry("thumbtack", "Thumbtack for Professionals", "https://www.thumbtack.com/", 4, 15),
  entry("taskrabbit", "TaskRabbit Tasker Registry", "https://www.taskrabbit.com/", 4, 15),
  entry("bark-ca", "Bark Canada Trades Directory", "https://www.bark.com/en/ca/", 4, 12),
  entry("aboutme", "About.me Business Profiles", "https://about.me/", 3, 10),
  entry("spoke", "Spoke Business Directory", "https://www.spoke.com/", 3, 8),
  entry("crunchbase", "Crunchbase Company Registry", "https://www.crunchbase.com/", 4, 15),
  entry("zoominfo", "ZoomInfo Business Index", "https://www.zoominfo.com/", 4, 15),
  entry("firmscan", "Firmscan", "https://www.firmscan.com/", 3, 10),
  entry("allpages", "AllPages Business Directory", "https://www.allpages.com/", 3, 8),
  entry("hubbiz", "Hubbiz", "https://hubbiz.com/", 3, 8),
  entry("whereto", "WhereTo", "https://www.whereto.org/", 3, 8),
  entry("b2b-yellowpages", "B2B Yellow Pages", "https://www.b2byellowpages.com/", 3, 10),
  entry("smartbusinessguide", "SmartBusiness Guide", "https://www.smartbusinessguide.com/", 3, 8),
];

/** Free / low-friction directories suitable for Playwright after auth-save. */
export const EXPANSION_PLAYWRIGHT_IDS = [
  "infobel-ca",
  "weblocal-ca",
  "salespider",
  "ourbis",
  "fyple-ca",
  "opendi-ca",
  "zipleaf-ca",
  "ezlocal",
  "brownbook",
  "cylex-ca",
  "hotfrog-ca",
  "manta",
  "n49",
  "yalwa-ca",
  "tuugo-ca",
  "ibegin",
  "showmelocal",
  "enrollbusiness-ca",
  "misterwhat-ca",
  "2findlocal-ca",
  "merchantcircle",
  "citysquares",
  "yellowbot",
  "allpages",
  "hubbiz",
] as const;
