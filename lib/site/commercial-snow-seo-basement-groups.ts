/**
 * Grouped longform copy for the snow hub SEO basement (`<details>` blocks).
 * Strings are sourced from `commercial-snow-page-data` — single source of truth.
 */
import {
  COMMERCIAL_SNOW_CONTRACTS,
  COMMERCIAL_SNOW_EQUIPMENT,
  COMMERCIAL_SNOW_INFRA_TRUST,
  COMMERCIAL_SNOW_PROCESS,
  COMMERCIAL_SNOW_RISK_SECTION,
  COMMERCIAL_SNOW_SERVICE_AREA,
  COMMERCIAL_SNOW_SERVICE_DEEP_DIVES,
  COMMERCIAL_SNOW_SILENT_SERVICE,
  COMMERCIAL_SNOW_SLA,
  COMMERCIAL_SNOW_VALUE_PROP,
  COMMERCIAL_SNOW_WHY_CHOOSE,
  COMMERCIAL_SNOW_WHY_INTRO,
  COMMERCIAL_SNOW_CLOSING,
} from "@/lib/site/commercial-snow-page-data";

export type CommercialSnowSeoBasementTextGroup = {
  readonly summary: string;
  readonly paragraphs: readonly string[];
};

const RISK_ONLY_TAIL = COMMERCIAL_SNOW_RISK_SECTION.paragraphs.slice(COMMERCIAL_SNOW_VALUE_PROP.paragraphs.length);

const EQUIPMENT_PARAS: readonly string[] = [
  COMMERCIAL_SNOW_EQUIPMENT.intro,
  ...COMMERCIAL_SNOW_EQUIPMENT.items.map((i) => `${i.name}: ${i.desc}`),
  COMMERCIAL_SNOW_EQUIPMENT.outro,
];

const SLA_PARAS: readonly string[] = [
  COMMERCIAL_SNOW_SLA.intro,
  ...COMMERCIAL_SNOW_SLA.items.map((row) => `${row.name}: ${row.desc}`),
  COMMERCIAL_SNOW_SLA.outro,
];

const CONTRACT_PARAS: readonly string[] = [
  COMMERCIAL_SNOW_CONTRACTS.intro,
  `${COMMERCIAL_SNOW_CONTRACTS.seasonal.h3}: ${COMMERCIAL_SNOW_CONTRACTS.seasonal.body} ${COMMERCIAL_SNOW_CONTRACTS.seasonal.recommended}`,
  `${COMMERCIAL_SNOW_CONTRACTS.perEvent.h3}: ${COMMERCIAL_SNOW_CONTRACTS.perEvent.body} ${COMMERCIAL_SNOW_CONTRACTS.perEvent.recommended}`,
  `${COMMERCIAL_SNOW_CONTRACTS.hybrid.h3}: ${COMMERCIAL_SNOW_CONTRACTS.hybrid.body} ${COMMERCIAL_SNOW_CONTRACTS.hybrid.recommended}`,
  COMMERCIAL_SNOW_CONTRACTS.outro,
];

const PROCESS_PARAS: readonly string[] = [
  COMMERCIAL_SNOW_PROCESS.visibleLede,
  ...COMMERCIAL_SNOW_PROCESS.steps.map((s) => `${s.id} ${s.title}: ${s.body}`),
];

const SERVICE_AREA_PARAS: readonly string[] = [
  ...COMMERCIAL_SNOW_SERVICE_AREA.paragraphs,
  ...COMMERCIAL_SNOW_SERVICE_AREA.links.map((l) => `${l.label}: ${l.href}`),
];

const SILENT_PARAS: readonly string[] = [
  COMMERCIAL_SNOW_SILENT_SERVICE.visibleLede,
  ...COMMERCIAL_SNOW_SILENT_SERVICE.pillars.map((p) => `${p.title}: ${p.body}`),
];

const WHY_CHOOSE_PARAS: readonly string[] = COMMERCIAL_SNOW_WHY_CHOOSE.items.map(
  (item) => `${item.title} — ${item.subtitle}. ${item.body}`,
);

/** Narrative + technical blocks (FAQs rendered separately from `COMMERCIAL_SNOW_FAQS`). */
export const COMMERCIAL_SNOW_SEO_TEXTUAL_GROUPS: readonly CommercialSnowSeoBasementTextGroup[] = [
  { summary: COMMERCIAL_SNOW_VALUE_PROP.detailsSummary, paragraphs: COMMERCIAL_SNOW_VALUE_PROP.paragraphs },
  {
    summary: COMMERCIAL_SNOW_RISK_SECTION.detailsSummary,
    paragraphs: RISK_ONLY_TAIL,
  },
  { summary: COMMERCIAL_SNOW_WHY_INTRO.h2, paragraphs: COMMERCIAL_SNOW_WHY_INTRO.paragraphs },
  { summary: COMMERCIAL_SNOW_WHY_CHOOSE.h2, paragraphs: WHY_CHOOSE_PARAS },
  { summary: COMMERCIAL_SNOW_SILENT_SERVICE.h2, paragraphs: SILENT_PARAS },
  { summary: COMMERCIAL_SNOW_INFRA_TRUST.h2, paragraphs: [COMMERCIAL_SNOW_INFRA_TRUST.visibleLede] },
  { summary: COMMERCIAL_SNOW_EQUIPMENT.h2, paragraphs: EQUIPMENT_PARAS },
  { summary: COMMERCIAL_SNOW_SLA.h2, paragraphs: SLA_PARAS },
  { summary: COMMERCIAL_SNOW_CONTRACTS.h2, paragraphs: CONTRACT_PARAS },
  { summary: COMMERCIAL_SNOW_PROCESS.h2, paragraphs: PROCESS_PARAS },
  {
    summary: COMMERCIAL_SNOW_SERVICE_AREA.h2,
    paragraphs: SERVICE_AREA_PARAS,
  },
  ...COMMERCIAL_SNOW_SERVICE_DEEP_DIVES.map((d) => ({
    summary: d.summary,
    paragraphs: d.paragraphs,
  })),
  {
    summary: "Closing detail — winter operations planning",
    paragraphs: COMMERCIAL_SNOW_CLOSING.paragraphs,
  },
];
