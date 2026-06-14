import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { TESTIMONIALS } from "@/lib/ground-level/homepage-copy";
import * as CopyLab from "@/lib/ground-level/home-copy-lab-content";
import * as CommercialSnow from "@/lib/site/commercial-snow-page-data";
import { CORE_COPY, SERVICE_DETAILS } from "@/lib/site/copy";
import { DRAINAGE_FINAL_CTA, DRAINAGE_TRUST_SIGNALS } from "@/lib/site/drainage-hardscaping-landing-content";
import { FOUNDATIONS_HUB_SEO } from "@/lib/site/foundations-civil-infrastructure-content";
import { substituteGoogleReviewPlaceholders } from "@/lib/site/google-business-env";
import { getSiteUrl } from "@/lib/site/metadata";

const TOKEN_PATTERN = /\b(TODO|TBD|FIXME)\b/i;
const BRACKET_REVIEW_PATTERN = /\[(Rating|Count)\]/;
const BRACKET_YEAR_PATTERN = /\[YEAR\]/;
const BRACKET_TOKEN_PATTERN = /\[(YEAR|Rating|Count)\]/;

function collectFlaggedStrings(value: unknown, path = "root", acc: string[] = []) {
  if (typeof value === "string" && TOKEN_PATTERN.test(value)) {
    acc.push(path);
    return acc;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectFlaggedStrings(item, `${path}[${index}]`, acc));
    return acc;
  }
  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, child]) => collectFlaggedStrings(child, `${path}.${key}`, acc));
  }
  return acc;
}

function collectBracketReviewTokens(value: unknown, path = "root", acc: string[] = []) {
  if (typeof value === "string" && BRACKET_REVIEW_PATTERN.test(value)) {
    acc.push(path);
    return acc;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectBracketReviewTokens(item, `${path}[${index}]`, acc));
    return acc;
  }
  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, child]) => collectBracketReviewTokens(child, `${path}.${key}`, acc));
  }
  return acc;
}

function collectBracketYearTokens(value: unknown, path = "root", acc: string[] = []) {
  if (typeof value === "string" && BRACKET_YEAR_PATTERN.test(value)) {
    acc.push(path);
    return acc;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectBracketYearTokens(item, `${path}[${index}]`, acc));
    return acc;
  }
  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, child]) => collectBracketYearTokens(child, `${path}.${key}`, acc));
  }
  return acc;
}

function collectAllBracketTokens(value: unknown, path = "root", acc: string[] = []) {
  if (typeof value === "string" && BRACKET_TOKEN_PATTERN.test(value)) {
    acc.push(path);
    return acc;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectAllBracketTokens(item, `${path}[${index}]`, acc));
    return acc;
  }
  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, child]) => collectAllBracketTokens(child, `${path}.${key}`, acc));
  }
  return acc;
}

/** Flat public copy-lab exports for hygiene scanning. */
const COPY_LAB_SCAN_ROOT = {
  COPY_LAB_META: CopyLab.COPY_LAB_META,
  COPY_LAB_HERO: CopyLab.COPY_LAB_HERO,
  COPY_LAB_MARQUEE_ITEMS: CopyLab.COPY_LAB_MARQUEE_ITEMS,
  COPY_LAB_FEATURED_SERVICES: CopyLab.COPY_LAB_FEATURED_SERVICES,
  COPY_LAB_ABOUT: CopyLab.COPY_LAB_ABOUT,
  COPY_LAB_CAPABILITIES_INTRO: CopyLab.COPY_LAB_CAPABILITIES_INTRO,
  COPY_LAB_SERVICE_GRID_SLUGS: CopyLab.COPY_LAB_SERVICE_GRID_SLUGS,
  COPY_LAB_SERVICE_CARDS: CopyLab.COPY_LAB_SERVICE_CARDS,
  COPY_LAB_STATS: CopyLab.COPY_LAB_STATS,
  COPY_LAB_WHY: CopyLab.COPY_LAB_WHY,
  COPY_LAB_PROCESS: CopyLab.COPY_LAB_PROCESS,
  COPY_LAB_COVERAGE: CopyLab.COPY_LAB_COVERAGE,
  COPY_LAB_TESTIMONIALS: CopyLab.COPY_LAB_TESTIMONIALS,
  COPY_LAB_CLOSING_CTA: CopyLab.COPY_LAB_CLOSING_CTA,
  COPY_LAB_AGITATOR: CopyLab.COPY_LAB_AGITATOR,
  COPY_LAB_CAPABILITY_BENTO: CopyLab.COPY_LAB_CAPABILITY_BENTO,
  COPY_LAB_CARD_LINK_LABEL: CopyLab.COPY_LAB_CARD_LINK_LABEL,
  COPY_LAB_PROOF: CopyLab.COPY_LAB_PROOF,
  COPY_LAB_HOME_FAQ: CopyLab.COPY_LAB_HOME_FAQ,
} as const;

const PRODUCTION_PAGE_EXCLUDE = /(?:^|[\\/])(sandbox|sequence-trial|maintenance)(?:[\\/]|$)/;

const HOME_COPY_LAB_COMPONENT_DIR = join(process.cwd(), "components/ground-level/home-copy-lab");
const TEMPLATES_DIR = join(process.cwd(), "components/templates");
const APP_DIR = join(process.cwd(), "app");

const DISALLOWED_HOMEPAGE_TSX_PHRASES = [/Slider compares/i, /georeferenced survey pair/i, /\bClient signal\b/] as const;
const DISALLOWED_SITE_TSX_PHRASES = [
  ...DISALLOWED_HOMEPAGE_TSX_PHRASES,
  /View Service →/,
  /View service →/,
] as const;

function readTsxFilesFromDir(dir: string, acc: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (PRODUCTION_PAGE_EXCLUDE.test(full)) continue;
      readTsxFilesFromDir(full, acc);
      continue;
    }
    if (name.endsWith(".tsx")) acc.push(readFileSync(full, "utf8"));
  }
  return acc;
}

function readHomeCopyLabTsxSources(): string[] {
  return readdirSync(HOME_COPY_LAB_COMPONENT_DIR)
    .filter((name) => name.endsWith(".tsx"))
    .map((name) => readFileSync(join(HOME_COPY_LAB_COMPONENT_DIR, name), "utf8"));
}

function readProductionTemplateTsxSources(): string[] {
  return readdirSync(TEMPLATES_DIR)
    .filter((name) => name.endsWith(".tsx"))
    .map((name) => readFileSync(join(TEMPLATES_DIR, name), "utf8"));
}

function readProductionAppPageTsxSources(): string[] {
  return readTsxFilesFromDir(APP_DIR);
}

function collectDisallowedPhraseHits(sources: string[], patterns: readonly RegExp[]): string[] {
  const hits: string[] = [];
  for (const source of sources) {
    for (const pattern of patterns) {
      if (pattern.test(source)) hits.push(pattern.source);
    }
  }
  return hits;
}

describe("extended copy hygiene", () => {
  it("homepage-copy-lab bundle has no TODO/TBD/FIXME tokens", () => {
    const flagged = collectFlaggedStrings(COPY_LAB_SCAN_ROOT, "COPY_LAB");
    expect(flagged, flagged.join(", ")).toEqual([]);
  });

  it("home-copy-lab TSX shells do not ship known template disclaimer phrases", () => {
    const hits = collectDisallowedPhraseHits(readHomeCopyLabTsxSources(), DISALLOWED_HOMEPAGE_TSX_PHRASES);
    expect(hits, hits.join(", ")).toEqual([]);
  });

  it("production templates and app pages do not ship known template disclaimer phrases", () => {
    const sources = [...readProductionTemplateTsxSources(), ...readProductionAppPageTsxSources()];
    const hits = collectDisallowedPhraseHits(sources, DISALLOWED_SITE_TSX_PHRASES);
    expect(hits, hits.join(", ")).toEqual([]);
  });

  it("CORE_COPY and SERVICE_DETAILS have no TODO/TBD/FIXME tokens", () => {
    const flagged = [
      ...collectFlaggedStrings(CORE_COPY, "CORE_COPY"),
      ...collectFlaggedStrings(SERVICE_DETAILS, "SERVICE_DETAILS"),
    ];
    expect(flagged, flagged.join(", ")).toEqual([]);
  });

  it("documents bracket tokens flagged for audit (no removal in this pass)", () => {
    const reviewPaths = collectBracketReviewTokens(DRAINAGE_TRUST_SIGNALS, "DRAINAGE_TRUST_SIGNALS");
    const yearPaths = collectBracketYearTokens(DRAINAGE_FINAL_CTA, "DRAINAGE_FINAL_CTA");
    expect(reviewPaths.length).toBeGreaterThan(0);
    expect(yearPaths.length).toBeGreaterThan(0);
    expect(collectAllBracketTokens({ DRAINAGE_TRUST_SIGNALS, DRAINAGE_FINAL_CTA }).length).toBeGreaterThan(0);
  });

  it("commercial snow page data exports have no TODO/TBD/FIXME tokens", () => {
    const snowScan = Object.fromEntries(
      Object.entries(CommercialSnow).filter(([, v]) => typeof v === "object" && v !== null),
    );
    const flagged = collectFlaggedStrings(snowScan, "COMMERCIAL_SNOW");
    expect(flagged, flagged.join(", ")).toEqual([]);
  });

  it("foundations hub SEO strings have no TODO/TBD/FIXME tokens", () => {
    const flagged = collectFlaggedStrings(FOUNDATIONS_HUB_SEO, "FOUNDATIONS_HUB_SEO");
    expect(flagged, flagged.join(", ")).toEqual([]);
  });

  it("homepage TESTIMONIALS entries have non-empty quote bodies", () => {
    const empty = TESTIMONIALS.entries.filter((e) => !e.quote.trim());
    expect(empty, `Empty quote(s): ${empty.map((e) => e.attribution).join("; ")}`).toHaveLength(0);
  });

  it("drainage trust signals: review bracket tokens are replaced when public env is set", () => {
    const paths = collectBracketReviewTokens(DRAINAGE_TRUST_SIGNALS, "DRAINAGE_TRUST_SIGNALS");
    expect(paths.length).toBeGreaterThan(0);
    const raw =
      DRAINAGE_TRUST_SIGNALS.items.find((i) => i.label === "Google Reviewed")?.sub ?? "";
    expect(raw).toMatch(/\[Rating\]/);
    const prevScore = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_SCORE;
    const prevCount = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT;
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_SCORE = "4.9";
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT = "127";
    try {
      expect(substituteGoogleReviewPlaceholders(raw)).not.toMatch(/\[Rating\]|\[Count\]/);
    } finally {
      if (prevScore === undefined) delete process.env.NEXT_PUBLIC_GOOGLE_REVIEW_SCORE;
      else process.env.NEXT_PUBLIC_GOOGLE_REVIEW_SCORE = prevScore;
      if (prevCount === undefined) delete process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT;
      else process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT = prevCount;
    }
  });

  it("getSiteUrl falls back to site.json origin when NEXT_PUBLIC_SITE_URL is unset", () => {
    const prev = process.env.NEXT_PUBLIC_SITE_URL;
    delete process.env.NEXT_PUBLIC_SITE_URL;
    try {
      expect(getSiteUrl()).toBe("https://groundlevelcontracting.ca");
    } finally {
      if (prev === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
      else process.env.NEXT_PUBLIC_SITE_URL = prev;
    }
  });
});
