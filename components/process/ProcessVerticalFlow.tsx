import Image from "next/image";
import Link from "next/link";

import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ProcessSeam } from "@/components/process/ProcessSeam";
import { ShardDataTexture } from "@/components/process/ShardDataTexture";
import { ShardFrame } from "@/components/process/ShardFrame";
import { ShardWatermark } from "@/components/process/ShardWatermark";

import { HOME_COPY } from "@/lib/site/copy";
import { PRIMARY_SERVICES } from "@/lib/site/registry";
import {
  CTA_BAND,
  EMAIL_MAILTO,
  HERO,
  PHONE_TEL,
  PROCESS,
  WHY,
} from "@/lib/ground-level/homepage-copy";

/**
 * V7 vertical design lab — appended to the bottom of /sandbox.
 *
 * Implements the blueprint requested by the user:
 *   Dark Hero -> 1px Seam -> Light Process Split -> 4px Yellow Rail ->
 *   Dark Industries -> Shard Seam -> Light Offers -> Shard Seam ->
 *   Dark Showcase -> 1px Seam -> Light Final CTA
 *
 * Strict V7 enforcement: sharp 90° corners (no rounded-*), tri-color Oswald headlines
 * (yellow primary concept / white|ink secondary / muted tertiary), asymmetric pivot
 * (grid-cols-12 with 6-col copy + 6-col raster anchor) on the Process Split and Final CTA,
 * mandatory raster anchor per major section (§4), shard motifs at -1 (atmosphere) +
 * structure planes only, never as a substitute for a primary asset.
 *
 * NO `id="process"` is rendered here — that anchor is owned by GLProcess on the homepage.
 * The wrapper exposes `data-flow="process-vertical-flow-lab"` and the Hero H2 carries
 * `id="process-vertical-flow-lab-heading"` for sandbox jump links.
 *
 * Self-contained: takes no props. Reuses approved copy from lib/ground-level/homepage-copy
 * and lib/site/copy + lib/site/registry. No edits made to those modules.
 */

const HERO_RASTER =
  "/images/services/Grading/Ground%20Level%20Contracting%20Excavator%20in%20Commercial%20Lot.jpg";
const HERO_RASTER_ALT =
  "Ground Level Contracting excavator working a commercial lot in Simcoe County, monochrome industrial site photograph";

const PROCESS_SPLIT_RASTER =
  "/images/services/Grading/Ground%20Level%20Contracting%20grading.jpg";
const PROCESS_SPLIT_ALT =
  "Crew running GPS-guided fine grading on a commercial pad, monochrome reference";

const SHOWCASE_RASTER =
  "/images/services/Grading/Ground%20Level%20Contracting%20Septic%20Excavation.jpg";
const SHOWCASE_ALT =
  "Finished commercial site after Ground Level Contracting earthwork sign-off";

const FINAL_CTA_RASTER =
  "/images/services/Grading/Excavation%20and%20Site%20Preparation.jpg";
const FINAL_CTA_ALT =
  "Crew preparing a commercial site for foundation work after grading approval";

const INDUSTRY_RASTERS = [
  "/images/services/Grading/Construction%20Excavation%20Ground%20Level%20Contracting%20Barrie%2C%20Simcoe%20County%2C%20Orillia.jpg",
  "/images/services/Grading/Ground%20Level%20Contracting%20grading2.jpg",
  "/images/services/Grading/Residential%20Excavation%20Ground%20Level%20Contracting.jpg",
] as const;

const INDUSTRY_ALTS = [
  "Commercial subdivision excavation and grading scope across Simcoe County",
  "Industrial park grading and pad preparation reference image",
  "Institutional foundation excavation and civil prep reference image",
] as const;

/** PROCESS.steps strings ship in a "(NN) Title — Body" format. Parse in place; do not mutate copy. */
function parseProcessStep(raw: string): { id: string; title: string; body: string } {
  const match = raw.match(/^\(([^)]+)\)\s*([^—]+)\s—\s*(.*)$/);
  if (match) {
    const [, id, title, body] = match;
    return {
      id: id.trim(),
      title: title.trim(),
      body: body.trim(),
    };
  }
  return { id: "", title: raw, body: "" };
}

const PROCESS_OFFERINGS = PROCESS.steps.map(parseProcessStep);

/** Three industry cards from existing copy — no new strings introduced. */
const INDUSTRIES = [0, 1, 2].map((i) => ({
  label: HERO.serviceBarLabels[i],
  description: PRIMARY_SERVICES[i].description,
  href: `/services/${PRIMARY_SERVICES[i].slug}/`,
  raster: INDUSTRY_RASTERS[i],
  rasterAlt: INDUSTRY_ALTS[i],
}));

/** Heading splitter — paint a substring `accent` in `--y` and the rest in the band's primary text color. */
function PaintedHeading({
  text,
  accent,
  className,
  baseColor,
}: {
  text: string;
  accent: string;
  className: string;
  baseColor: string;
}) {
  const idx = text.toLowerCase().indexOf(accent.toLowerCase());
  if (idx < 0) {
    return <span className={`${baseColor} ${className}`}>{text}</span>;
  }
  const before = text.slice(0, idx);
  const middle = text.slice(idx, idx + accent.length);
  const after = text.slice(idx + accent.length);
  return (
    <span className={className}>
      {before ? <span className={baseColor}>{before}</span> : null}
      <span className="text-[color:var(--y)]">{middle}</span>
      {after ? <span className={baseColor}>{after}</span> : null}
    </span>
  );
}

export function ProcessVerticalFlow() {
  return (
    <div
      data-flow="process-vertical-flow-lab"
      className="relative isolate text-ink"
      aria-label="V7 vertical process flow design lab"
    >
      {/* ============================================================
          1. HERO — band-dark-field, full-bleed B&W raster, tri-color
             Oswald H2, 3-stat cluster on shard texture, dual CTA row
         ============================================================ */}
      <section
        className="hero-stage section-major band-dark-field relative min-h-[min(100dvh,860px)] overflow-hidden"
        aria-labelledby="process-vertical-flow-lab-heading"
      >
        {/* Substrate (1): full-bleed B&W raster anchor */}
        <Image
          src={HERO_RASTER}
          alt={HERO_RASTER_ALT}
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center grayscale"
        />

        {/* Treatment scrims (1): vertical + diagonal washes for legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.92)] via-[rgb(10_12_11/0.7)] to-[rgb(10_12_11/0.35)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.78)] via-transparent to-[rgb(10_12_11/0.25)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_72%_28%,rgb(255_255_255/0.06),transparent_55%)]"
          aria-hidden
        />

        {/* Atmosphere (-1): shard watermark + Claude Logic mark */}
        <ShardWatermark
          placement="bottom-right"
          opacity={0.05}
          className="text-[#f2b705]"
        />
        <ClaudeLogicWatermark
          placement="top-left"
          mode="on-dark"
          className="opacity-[0.10]"
        />

        {/* Structural rail (2): yellow side accent */}
        <div
          className="pointer-events-none absolute left-0 top-1/4 h-1/2 w-1 bg-[color:var(--y)]/80"
          aria-hidden
        />

        {/* Interaction plane (10+): glass shell with copy + stats + CTAs */}
        <div className="relative z-10 mx-auto flex min-h-[min(100dvh,860px)] max-w-[min(100%,var(--max-bleed))] flex-col justify-end px-6 pb-12 pt-28 sm:px-10 sm:pb-16 lg:justify-between lg:px-20 lg:pt-[calc(var(--header)+3rem)]">
          <div className="max-w-3xl border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-8 lg:p-10">
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
              {HERO.eyebrow}
            </p>
            <h2
              id="process-vertical-flow-lab-heading"
              className="mt-[var(--s7)] font-serif text-[clamp(2.4rem,6vw,5.2rem)] font-semibold uppercase leading-[0.92] tracking-tight"
            >
              <PaintedHeading
                text={`${HERO.titleLine1} ${HERO.titleLine2} ${HERO.titleLine3}`}
                accent={HERO.titleLine2}
                baseColor="text-white"
                className=""
              />
            </h2>

            <div className="hero-rule mt-6 h-px w-full max-w-md bg-[color:var(--y)]/70" aria-hidden />

            <p className="mt-6 max-w-[36rem] text-[15px] leading-[1.72] text-white/90 sm:text-base">
              {HERO.lede}
            </p>

            {/* Hero stat cluster on machined shard texture */}
            <div className="relative mt-8 border border-white/14 bg-[rgb(0_0_0/0.32)] p-5 sm:p-6">
              <ShardDataTexture tone="yellow" opacity={0.1} />
              <div className="relative grid gap-6 sm:grid-cols-3">
                {HOME_COPY.stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="border-l-2 border-[color:var(--y)] pl-4">
                    <p className="font-serif text-3xl font-bold leading-none tracking-[-0.04em] text-[color:var(--y)] sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white/90">
                      {stat.label}
                    </p>
                    <p className="mt-1 font-label text-[10px] uppercase tracking-[0.2em] text-white/55">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact/"
                className="cta-primary inline-flex min-h-[44px] items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-[0.14em]"
              >
                Get project quote
              </Link>
              <Link
                href="/services/"
                className="cta-outline-light inline-flex min-h-[44px] items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-[0.14em]"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProcessSeam variant="thin" label="hero-to-process" />

      {/* ============================================================
          2. ZERO-TOLERANCE PROCESS — band-light, asymmetric 6/6 split
             (>2 sentences triggers compositional pivot per §1)
         ============================================================ */}
      <section
        className="section-major band-light relative overflow-hidden"
        aria-labelledby="process-vertical-flow-lab-split-heading"
      >
        {/* Atmosphere: ghost shard watermark in ink for the light band */}
        <ShardWatermark
          placement="top-right"
          opacity={0.04}
          className="text-[color:var(--ink,#1e1c1a)]"
        />

        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Copy column: 6/12 (measure safety) */}
            <div className="lg:col-span-6">
              <div className="border-l-4 border-[color:var(--y)] pl-5">
                <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                  {PROCESS.eyebrow}
                </p>
                <h2
                  id="process-vertical-flow-lab-split-heading"
                  className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl"
                >
                  <PaintedHeading
                    text={PROCESS.heading}
                    accent="Final Grade"
                    baseColor="text-ink"
                    className=""
                  />
                </h2>
              </div>

              <div className="mt-[var(--s7)] space-y-6">
                <p className="text-[15px] leading-[1.72] text-ink sm:text-base">
                  {WHY.body}
                </p>
                <p className="text-[15px] leading-[1.72] text-ink sm:text-base">
                  {HOME_COPY.statsBand.intro}
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact/"
                  className="cta-primary inline-flex min-h-[44px] items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-[0.14em]"
                >
                  {HERO.primaryCta}
                </Link>
              </div>
            </div>

            {/* Raster anchor side-car: 6/12, B&W, breaks the frame slightly via lg:-mr offset */}
            <div className="lg:col-span-6">
              <div className="bespoke-surface panel-machined relative aspect-[4/5] w-full overflow-hidden border border-[color:var(--g200)] bg-white lg:-mr-6">
                <Image
                  src={PROCESS_SPLIT_RASTER}
                  alt={PROCESS_SPLIT_ALT}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover grayscale"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgb(10_12_11/0.55)] to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[color:var(--y)]"
                  aria-hidden
                />
                <div className="absolute bottom-5 left-5 max-w-[80%] border border-white/30 bg-[rgb(10_12_11/0.62)] p-4 backdrop-blur-sm">
                  <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    {WHY.eyebrow}
                  </p>
                  <p className="mt-1 font-serif text-lg font-semibold uppercase leading-tight tracking-tight text-white sm:text-xl">
                    {WHY.heading}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSeam variant="yellow-rail" label="process-to-industries" />

      {/* ============================================================
          3. INDUSTRIES WE SERVE — band-dark, 3 cards
         ============================================================ */}
      <section
        className="section-major band-dark relative overflow-hidden"
        aria-labelledby="process-vertical-flow-lab-industries-heading"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.04),transparent_42%)]"
          aria-hidden
        />
        <ShardWatermark
          placement="bottom-left"
          opacity={0.05}
          className="text-[#f2b705]"
        />

        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="border-l-4 border-[color:var(--y)] pl-5">
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
              Industries
            </p>
            <h2
              id="process-vertical-flow-lab-industries-heading"
              className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl"
            >
              <span className="text-white">Industries we </span>
              <span className="text-[color:var(--y)]">serve</span>
            </h2>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {INDUSTRIES.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group relative flex h-full flex-col border border-white/15 bg-[rgb(255_255_255/0.05)] p-0 text-left text-white backdrop-blur-sm transition-colors hover:border-[color:var(--y)]/60 hover:bg-[rgb(255_255_255/0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--y)]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/15">
                    <Image
                      src={item.raster}
                      alt={item.rasterAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover grayscale transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgb(10_12_11/0.65))]"
                      aria-hidden
                    />
                    <span
                      className="pointer-events-none absolute left-0 top-0 h-1 w-12 bg-[color:var(--y)]"
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
                      Sector
                    </span>
                    <span className="mt-2 font-serif text-xl font-bold uppercase tracking-[0.02em] text-white group-hover:text-[color:var(--y)] sm:text-2xl">
                      {item.label}
                    </span>
                    <span className="mt-3 text-[15px] leading-[1.72] text-white/90 sm:text-base">
                      {item.description}
                    </span>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--y)]">
                      Open scope <span aria-hidden>{"->"}</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSeam variant="shard-interlock" label="industries-to-offers" />

      {/* ============================================================
          4. PROCESS OFFERINGS — band-light, 4 cards w/ ShardFrame
         ============================================================ */}
      <section
        className="section-major band-light relative overflow-hidden"
        aria-labelledby="process-vertical-flow-lab-offers-heading"
      >
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="border-l-4 border-[color:var(--y)] pl-5">
              <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                {PROCESS.eyebrow}
              </p>
              <h2
                id="process-vertical-flow-lab-offers-heading"
                className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl"
              >
                <span className="text-ink">Site process </span>
                <span className="text-[color:var(--y)]">offerings</span>
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-[1.72] text-ink sm:text-base lg:text-right">
              Four production phases sequenced so survey, geotech, and trade scopes line up
              with the GLC field discipline.
            </p>
          </div>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_OFFERINGS.map((step) => (
              <li
                key={step.id || step.title}
                className="bespoke-surface panel-machined relative overflow-hidden border border-[color:var(--g200)] bg-white p-5 sm:p-6"
              >
                <ShardFrame tone="on-light" />
                <div className="relative">
                  <p className="font-serif text-4xl font-bold leading-none tracking-[-0.04em] text-[color:var(--y)]">
                    {step.id || "00"}
                  </p>
                  <p className="mt-3 font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink sm:text-2xl">
                    {step.title}
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.72] text-ink sm:text-base">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProcessSeam variant="shard-interlock" label="offers-to-showcase" />

      {/* ============================================================
          5. FINISHED AUTHORITY SHOWCASE — band-dark, full-bleed B&W
         ============================================================ */}
      <section
        className="section-major band-dark relative min-h-[560px] overflow-hidden"
        aria-labelledby="process-vertical-flow-lab-showcase-heading"
      >
        <Image
          src={SHOWCASE_RASTER}
          alt={SHOWCASE_ALT}
          fill
          sizes="100vw"
          className="object-cover object-center grayscale"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.92)] via-[rgb(10_12_11/0.6)] to-[rgb(10_12_11/0.35)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.7)] via-transparent to-[rgb(10_12_11/0.2)]"
          aria-hidden
        />
        <ShardWatermark
          placement="top-right"
          opacity={0.06}
          className="text-[#f2b705]"
        />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[min(100%,var(--max))] flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
          <div className="max-w-3xl border border-white/12 bg-[rgb(10_12_11/0.5)] p-6 backdrop-blur-md sm:p-8 lg:p-10">
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
              {HOME_COPY.testimonialsFeature.eyebrow}
            </p>
            <h2
              id="process-vertical-flow-lab-showcase-heading"
              className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              <span className="text-white">{HOME_COPY.testimonialsFeature.heading} </span>
              <span className="text-[color:var(--y)]">
                {HOME_COPY.testimonialsFeature.headingAccent}
              </span>
            </h2>
            <div className="mt-6 h-px max-w-md bg-[color:var(--y)]/55" aria-hidden />
            <p className="mt-6 max-w-[36rem] text-[15px] leading-[1.72] text-white/90 sm:text-base">
              {HOME_COPY.testimonialsFeature.intro}
            </p>
            <blockquote className="mt-8 border-l-4 border-[color:var(--y)] pl-5">
              <p className="font-serif text-lg italic leading-snug text-white/90 sm:text-xl">
                {HOME_COPY.testimonialsFeature.featuredQuote.quote}
              </p>
              <footer className="mt-3 font-label text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
                {HOME_COPY.testimonialsFeature.featuredQuote.by}
              </footer>
            </blockquote>
            <div className="mt-8">
              <Link
                href={HOME_COPY.testimonialsFeature.cta.href}
                className="cta-primary inline-flex min-h-[44px] items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-[0.14em]"
              >
                {HOME_COPY.testimonialsFeature.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProcessSeam variant="thin" label="showcase-to-final" />

      {/* ============================================================
          6. SECURE YOUR SITE PLAN — band-light, asymmetric split
         ============================================================ */}
      <section
        className="section-major band-light relative overflow-hidden"
        aria-labelledby="process-vertical-flow-lab-final-heading"
      >
        <ShardWatermark
          placement="bottom-left"
          opacity={0.04}
          className="text-[color:var(--ink,#1e1c1a)]"
        />

        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Raster anchor side-car: 5/12 on desktop, sits LEFT to vary rhythm vs. Process Split */}
            <div className="lg:col-span-5">
              <div className="bespoke-surface panel-machined relative aspect-[4/5] w-full overflow-hidden border border-[color:var(--g200)] bg-white lg:-ml-6">
                <Image
                  src={FINAL_CTA_RASTER}
                  alt={FINAL_CTA_ALT}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover grayscale"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgb(10_12_11/0.55)] to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute right-0 top-0 h-full w-1 bg-[color:var(--y)]"
                  aria-hidden
                />
              </div>
            </div>

            {/* Copy column: 7/12 with measure-safe inner cap */}
            <div className="lg:col-span-7">
              <div className="border-l-4 border-[color:var(--y)] pl-5">
                <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                  {CTA_BAND.eyebrow}
                </p>
                <h2
                  id="process-vertical-flow-lab-final-heading"
                  className="mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                >
                  <PaintedHeading
                    text={CTA_BAND.heading}
                    accent={CTA_BAND.headingAccentKey}
                    baseColor="text-ink"
                    className=""
                  />
                </h2>
              </div>

              <p className="mt-[var(--s7)] max-w-[40rem] text-[15px] leading-[1.72] text-ink sm:text-base">
                {CTA_BAND.sub}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={PHONE_TEL}
                  className="cta-primary inline-flex min-h-[44px] items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-[0.14em]"
                >
                  {CTA_BAND.phoneLabel}
                </Link>
                <Link
                  href={EMAIL_MAILTO}
                  className="cta-outline-light inline-flex min-h-[44px] items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-[0.14em]"
                >
                  {CTA_BAND.emailCta}
                </Link>
              </div>

              <div className="mt-8 border-t border-[color:var(--g200)] pt-6">
                <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                  Sandbox lab
                </p>
                <p className="mt-2 text-[13px] leading-[1.65] text-ink-muted">
                  This is the V7 vertical flow design lab on /sandbox. The homepage `#process`
                  section is unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
