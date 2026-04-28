import type { ReactNode } from "react";
import Image from "next/image";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";

type Tone = "light" | "dark";
type VariantKey = "a" | "b" | "c";
type ConceptKey =
  | "laneb-hero"
  | "laneb-services"
  | "laneb-why"
  | "laneb-process-left"
  | "laneb-process-steps"
  | "laneb-coverage"
  | "laneb-cta-band"
  | "copylab-hero-wrap"
  | "copylab-about";

type Concept = {
  key: ConceptKey;
  title: string;
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  cta: string;
};

function splitLastWord(text: string) {
  const words = text.trim().split(/\s+/);
  if (words.length < 2) return { base: text, accent: "" };
  const accent = words.pop() ?? "";
  return { base: words.join(" "), accent };
}

const CONCEPTS: Concept[] = [
  {
    key: "laneb-hero",
    title: "Lane B Hero concept",
    eyebrow: "Hero structure",
    heading: "From Concept To Creation",
    body: "Full-bleed stage variants with anchored copy island and conversion rail.",
    image: "/ground-level/hero-primary.jpg",
    cta: "Request quote",
  },
  {
    key: "laneb-services",
    title: "Lane B Services concept",
    eyebrow: "Service matrix",
    heading: "Six Core Service Lines",
    body: "Service architecture rebuilt as three distinct composition systems.",
    image: "/ground-level/equipment-wide.jpg",
    cta: "View all services",
  },
  {
    key: "laneb-why",
    title: "Lane B Why header concept",
    eyebrow: "Why choose us",
    heading: "Right Crew For Complex Ground",
    body: "Reason-stack variants with strong split and counterweighted hierarchy.",
    image: "/ground-level/excavation-1.jpg",
    cta: "Talk to team",
  },
  {
    key: "laneb-process-left",
    title: "Lane B Process left panel concept",
    eyebrow: "Process intro",
    heading: "From First Call To Final Grade",
    body: "Lead-panel-first process concepts with varied depth mechanics.",
    image: "/ground-level/hero-primary.jpg",
    cta: "Start process",
  },
  {
    key: "laneb-process-steps",
    title: "Lane B Process steps panel concept",
    eyebrow: "Process steps",
    heading: "Four-Step Delivery Track",
    body: "Stepped timeline and sequence-rail variants.",
    image: "/ground-level/equipment-wide.jpg",
    cta: "Download process",
  },
  {
    key: "laneb-coverage",
    title: "Lane B Coverage concept",
    eyebrow: "Coverage",
    heading: "Serving Simcoe County",
    body: "Coverage figure variants with map mass and orbit markers.",
    image: "/ground-level/excavation-1.jpg",
    cta: "Check area",
  },
  {
    key: "laneb-cta-band",
    title: "Lane B CTA band concept",
    eyebrow: "CTA band",
    heading: "Start With A Site Consultation",
    body: "Interlocking CTA strip variants with opposing action slabs.",
    image: "/ground-level/hero-primary.jpg",
    cta: "Call now",
  },
  {
    key: "copylab-hero-wrap",
    title: "Copy-lab Hero wrapper concept",
    eyebrow: "Copy hero",
    heading: "Commercial Excavation Lead",
    body: "Hero wrappers aligned with approved sandbox hero cadence.",
    image: "/ground-level/hero-primary.jpg",
    cta: "Get estimate",
  },
  {
    key: "copylab-about",
    title: "Copy-lab About concept",
    eyebrow: "About profile",
    heading: "Built On Ground Level",
    body: "Profile-led layouts with asymmetric media/copy counterbalance.",
    image: "/ground-level/excavation-1.jpg",
    cta: "About team",
  },
];

function tone(t: Tone) {
  return {
    root: t === "light" ? "band-light" : "band-dark",
    field:
      t === "light"
        ? "bg-[linear-gradient(165deg,rgb(255_255_255),rgb(248_248_246))]"
        : "bg-[linear-gradient(180deg,rgb(18_20_19),rgb(30_33_31))]",
    atmosphere:
      t === "light"
        ? "bg-[radial-gradient(ellipse_72%_60%_at_84%_10%,color-mix(in_srgb,var(--y)_12%,transparent),transparent_66%)]"
        : "bg-[radial-gradient(ellipse_70%_58%_at_12%_14%,color-mix(in_srgb,var(--y)_11%,transparent),transparent_64%)]",
    shell: t === "light" ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(20_22_21/0.86)] text-white",
    body: t === "light" ? "text-ink-muted" : "text-white/78",
    label: t === "light" ? "label-overline text-ink-muted" : "label-overline-on-dark",
    cta: t === "light" ? "cta-primary" : "border border-white/28 text-white hover:border-[color:var(--y)]",
    heading: t === "light" ? "text-ink" : "text-white",
  };
}

function VariantSection({
  id,
  toneMode,
  children,
}: {
  id: string;
  toneMode: Tone;
  children: ReactNode;
}) {
  const c = tone(toneMode);
  return (
    <section
      id={id}
      className={`section-major relative overflow-hidden scroll-mt-[var(--header)] view-reveal ${c.root}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className={`pointer-events-none absolute inset-0 ${c.field}`} aria-hidden />
      <div className={`pointer-events-none absolute inset-0 ${c.atmosphere}`} aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[color:var(--y)]/40" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">{children}</div>
    </section>
  );
}

function HeroLikeVariant({
  concept,
  variant,
  toneMode,
}: {
  concept: Concept;
  variant: VariantKey;
  toneMode: Tone;
}) {
  const id = `review-tagged-${concept.key}-var-${variant}-${toneMode}`;
  const align =
    variant === "a"
      ? "lg:max-w-4xl"
      : variant === "b"
        ? "lg:ml-auto lg:max-w-4xl"
        : "lg:max-w-5xl";
  const ctaOffset = variant === "c" ? "lg:-translate-y-12 lg:ml-16" : variant === "b" ? "lg:translate-y-8" : "lg:-translate-y-8";

  return (
    <VariantSection id={id} toneMode={toneMode}>
      <div className="relative min-h-[96dvh] overflow-hidden border border-[color:var(--g200)]">
        <Image src={concept.image} alt="" fill priority={variant === "a"} className="object-cover object-center" sizes="100vw" />
        <div
          className={`absolute inset-0 ${
            toneMode === "light"
              ? "bg-gradient-to-t from-[rgb(10_12_11/0.86)] via-[rgb(15_18_16/0.46)] to-[rgb(16_18_17/0.2)]"
              : "bg-gradient-to-t from-[rgb(8_10_9/0.92)] via-[rgb(12_15_13/0.58)] to-[rgb(12_15_13/0.3)]"
          }`}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_56%_at_72%_30%,color-mix(in_srgb,var(--y)_8%,transparent),transparent_56%)]"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="bottom-right" className="z-[2]" />

        <div className={`relative z-10 flex min-h-[96dvh] flex-col justify-end px-5 pb-8 pt-24 sm:px-8 lg:px-14 ${align}`}>
          <div className="rounded-sm border border-white/12 bg-[rgb(9_11_10/0.46)] p-6 shadow-[0_28px_84px_rgb(0_0_0/0.38)] backdrop-blur-md sm:p-8">
            <p className="label-overline-on-dark">{concept.eyebrow}</p>
            <h3 id={`${id}-heading`} className="mt-5 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              {concept.heading} <span className="text-[color:var(--y)]">Variant {variant.toUpperCase()}</span>
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/84">{concept.body}</p>
            <div className="mt-6 h-px w-full max-w-sm bg-[color:var(--y)]/38" aria-hidden />
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-white/88">
              <span>15+ years commercial grading</span>
              <span>500+ completed scopes</span>
              <span>Simcoe-wide deployment</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Excavation", "Drainage", "Road Base", "Site Prep"].map((chip) => (
                <span
                  key={`${id}-${chip}`}
                  className="border border-white/16 bg-[rgb(255_255_255/0.06)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/84"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className={`mt-7 flex flex-col gap-3 sm:flex-row sm:items-center ${ctaOffset}`}>
            <a href="#contact" className="cta-hero-fill px-6 py-4 text-center text-sm font-semibold tracking-wide">
              {concept.cta}
            </a>
            <a href="#services" className="cta-outline-light px-6 py-3.5 text-center text-sm font-semibold tracking-wide">
              Service catalog
            </a>
          </div>
          <div className="mt-8 w-full overflow-hidden border-y border-white/10 bg-[rgb(0_0_0/0.35)] py-3 backdrop-blur-sm">
            <div className="flex w-max gap-10 pr-10">
              {["Commercial earthworks", "Civil prep", "Permit-aligned timelines", "Field-led quality"].map((phrase) => (
                <span key={`${id}-${phrase}`} className="font-label text-[10px] uppercase tracking-[0.22em] text-white/65">
                  {phrase}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </VariantSection>
  );
}

function ServicesVariant({ concept, variant, toneMode }: { concept: Concept; variant: VariantKey; toneMode: Tone }) {
  const c = tone(toneMode);
  const id = `review-tagged-${concept.key}-var-${variant}-${toneMode}`;
  const split = splitLastWord(concept.heading);
  const frame =
    variant === "a"
      ? "lg:grid-cols-[320px_minmax(0,1fr)]"
      : variant === "b"
        ? "lg:grid-cols-[minmax(0,1fr)_320px]"
        : "lg:grid-cols-[minmax(0,1fr)]";
  return (
    <VariantSection id={id} toneMode={toneMode}>
      <div className={`grid gap-6 ${frame}`}>
        <aside className={`border border-[color:var(--g200)] p-5 shadow-[0_14px_38px_rgb(0_0_0/0.16)] ${c.shell}`}>
          <p className={c.label}>{concept.eyebrow}</p>
          <h3 id={`${id}-heading`} className={`mt-3 font-serif text-2xl font-semibold uppercase tracking-tight ${c.heading}`}>
            <span className={c.heading}>{split.base} </span>
            <span className="text-[color:var(--y)]">{split.accent}</span>
          </h3>
          <p className={`mt-3 text-sm leading-relaxed ${c.body}`}>{concept.body}</p>
        </aside>
        <div
          className={`grid gap-4 ${
            variant === "c" ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-2"
          }`}
        >
          {["Excavation", "Drainage", "Grading", "Concrete Removal", "Compaction", "Snow Logistics"].map((item, i) => (
            <article
              key={`${id}-${item}`}
              className={`border border-[color:var(--g200)] p-5 shadow-[0_12px_30px_rgb(0_0_0/0.14)] ${
                toneMode === "light" ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(22_24_23/0.84)] text-white"
              } ${variant === "b" && i % 2 === 0 ? "lg:-translate-y-3" : ""} ${variant === "c" && i === 1 ? "lg:translate-y-5" : ""}`}
            >
              <p className="font-label text-[11px] uppercase tracking-[0.16em] text-[color:var(--y)]">Service</p>
              <p className="mt-2 font-serif text-xl font-semibold uppercase">{item}</p>
              <p className={`mt-2 text-xs uppercase tracking-[0.12em] ${toneMode === "light" ? "text-ink-muted" : "text-white/72"}`}>
                field verified
              </p>
            </article>
          ))}
        </div>
      </div>
    </VariantSection>
  );
}

function WhyVariant({ concept, variant, toneMode }: { concept: Concept; variant: VariantKey; toneMode: Tone }) {
  const c = tone(toneMode);
  const id = `review-tagged-${concept.key}-var-${variant}-${toneMode}`;
  const split = splitLastWord(concept.heading);
  return (
    <VariantSection id={id} toneMode={toneMode}>
      <div className={`grid gap-6 ${variant === "b" ? "lg:grid-cols-[minmax(0,1.06fr)_360px]" : "lg:grid-cols-[360px_minmax(0,1.06fr)]"}`}>
        <div className="relative min-h-[340px] overflow-hidden border border-[color:var(--g200)]">
          <Image src={concept.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 42vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(8_10_9/0.74)] to-transparent" />
          <p className="absolute bottom-4 left-4 font-label text-[11px] uppercase tracking-[0.16em] text-white/84">Field credibility</p>
        </div>
        <div className={`grid gap-3 border border-[color:var(--g200)] p-6 ${c.shell}`}>
          <p className={c.label}>{concept.eyebrow}</p>
          <h3 id={`${id}-heading`} className={`font-serif text-3xl font-semibold uppercase tracking-tight ${c.heading}`}>
            <span className={c.heading}>{split.base} </span>
            <span className="text-[color:var(--y)]">{split.accent}</span>
          </h3>
          {["PM-facing communication cadence", "Crew-first safety discipline", "Material and timeline transparency"].map((reason, i) => (
            <article key={`${id}-${reason}`} className={`border-l-[4px] border-l-[color:var(--y)] border border-[color:var(--g200)] p-4 ${toneMode === "light" ? "bg-white/70 text-ink" : "bg-[rgb(29_32_30/0.8)] text-white"} ${variant === "c" && i === 1 ? "lg:translate-x-5" : ""}`}>
              <p className="font-serif text-lg font-semibold uppercase">{reason}</p>
              <p className={`mt-2 text-xs uppercase tracking-[0.12em] ${toneMode === "light" ? "text-ink-muted" : "text-white/72"}`}>
                risk control
              </p>
            </article>
          ))}
        </div>
      </div>
    </VariantSection>
  );
}

function ProcessLeftVariant({ concept, variant, toneMode }: { concept: Concept; variant: VariantKey; toneMode: Tone }) {
  const c = tone(toneMode);
  const id = `review-tagged-${concept.key}-var-${variant}-${toneMode}`;
  const split = splitLastWord(concept.heading);
  return (
    <VariantSection id={id} toneMode={toneMode}>
      <div className={`grid gap-6 ${variant === "a" ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"}`}>
        <article className={`border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-6 shadow-[0_14px_36px_rgb(0_0_0/0.18)] ${c.shell}`}>
          <p className={c.label}>{concept.eyebrow}</p>
          <h3 id={`${id}-heading`} className={`mt-3 font-serif text-2xl font-semibold uppercase tracking-tight ${c.heading}`}>
            <span className={c.heading}>{split.base} </span>
            <span className="text-[color:var(--y)]">{split.accent}</span>
          </h3>
          <p className={`mt-3 text-sm leading-relaxed ${c.body}`}>{concept.body}</p>
          <a href="#contact" className={`mt-5 inline-block px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] ${c.cta}`}>
            {concept.cta}
          </a>
        </article>
        <div className="grid gap-3">
          {["Pre-construction call", "Site walk + constraints", "Execution schedule", "Handover"].map((step, i) => (
            <div key={`${id}-${step}`} className={`border border-[color:var(--g200)] p-4 ${toneMode === "light" ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(22_25_23/0.84)] text-white"} ${variant === "b" && i % 2 === 1 ? "lg:ml-8" : ""}`}>
              <p className="font-label text-[11px] uppercase tracking-[0.16em] text-[color:var(--y)]">Step {i + 1}</p>
              <p className="mt-2 font-serif text-lg font-semibold uppercase">{step}</p>
              <p className={`mt-2 text-xs uppercase tracking-[0.12em] ${toneMode === "light" ? "text-ink-muted" : "text-white/72"}`}>
                milestone
              </p>
            </div>
          ))}
        </div>
      </div>
    </VariantSection>
  );
}

function ProcessStepsVariant({ concept, variant, toneMode }: { concept: Concept; variant: VariantKey; toneMode: Tone }) {
  const c = tone(toneMode);
  const id = `review-tagged-${concept.key}-var-${variant}-${toneMode}`;
  const split = splitLastWord(concept.heading);
  return (
    <VariantSection id={id} toneMode={toneMode}>
      <div className={`border border-[color:var(--g200)] p-6 ${c.shell}`}>
        <p className={c.label}>{concept.eyebrow}</p>
        <h3 id={`${id}-heading`} className={`mt-3 font-serif text-2xl font-semibold uppercase tracking-tight ${c.heading}`}>
          <span className={c.heading}>{split.base} </span>
          <span className="text-[color:var(--y)]">{split.accent}</span>
        </h3>
        <div className={`mt-6 grid gap-4 ${variant === "c" ? "lg:grid-cols-4" : "lg:grid-cols-2"}`}>
          {["Intake", "Planning", "Execution", "Closeout"].map((step, i) => (
            <article key={`${id}-${step}`} className={`relative border border-[color:var(--g200)] p-5 ${toneMode === "light" ? "bg-white/80 text-ink" : "bg-[rgb(29_32_30/0.84)] text-white"} ${variant === "a" && i === 1 ? "lg:-translate-y-4" : ""} ${variant === "b" && i === 2 ? "lg:translate-y-4" : ""}`}>
              <span className="absolute -top-3 left-4 rounded-full border border-[color:var(--y)] bg-[color:var(--brand-canvas)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-ink">
                {i + 1}
              </span>
              <p className="mt-2 font-serif text-lg font-semibold uppercase">{step}</p>
              <p className={`mt-2 text-sm leading-relaxed ${c.body}`}>Defined owner, deliverable, and acceptance marker.</p>
            </article>
          ))}
        </div>
      </div>
    </VariantSection>
  );
}

function CoverageVariant({ concept, variant, toneMode }: { concept: Concept; variant: VariantKey; toneMode: Tone }) {
  const c = tone(toneMode);
  const id = `review-tagged-${concept.key}-var-${variant}-${toneMode}`;
  const split = splitLastWord(concept.heading);
  return (
    <VariantSection id={id} toneMode={toneMode}>
      <div className={`grid gap-6 ${variant === "b" ? "lg:grid-cols-[minmax(0,1fr)_340px]" : "lg:grid-cols-[340px_minmax(0,1fr)]"}`}>
        <div className={`border border-[color:var(--g200)] p-6 ${c.shell}`}>
          <p className={c.label}>{concept.eyebrow}</p>
          <h3 id={`${id}-heading`} className={`mt-3 font-serif text-2xl font-semibold uppercase tracking-tight ${c.heading}`}>
            <span className={c.heading}>{split.base} </span>
            <span className="text-[color:var(--y)]">{split.accent}</span>
          </h3>
          <p className={`mt-3 text-sm leading-relaxed ${c.body}`}>{concept.body}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Barrie", "Innisfil", "Orillia", "Midland"].map((city) => (
              <span key={`${id}-${city}`} className={`border border-[color:var(--g200)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${toneMode === "light" ? "bg-white text-[color:var(--y)]" : "bg-[rgb(29_32_30/0.86)] text-[color:var(--y)]"}`}>
                {city}
              </span>
            ))}
          </div>
        </div>
        <div className="relative min-h-[320px] overflow-hidden border border-[color:var(--g200)]">
          <Image src={concept.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 56vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(0_0_0/0.2)] to-[rgb(0_0_0/0.62)]" />
          <div className={`absolute ${variant === "c" ? "left-5 top-5" : "right-5 top-5"} h-20 w-20 border-2 border-[color:var(--y)]/75`} />
        </div>
      </div>
    </VariantSection>
  );
}

function CtaBandVariant({ concept, variant, toneMode }: { concept: Concept; variant: VariantKey; toneMode: Tone }) {
  const c = tone(toneMode);
  const id = `review-tagged-${concept.key}-var-${variant}-${toneMode}`;
  const split = splitLastWord(concept.heading);
  return (
    <VariantSection id={id} toneMode={toneMode}>
      <div className={`grid gap-5 ${variant === "a" ? "lg:grid-cols-[minmax(0,1.2fr)_300px]" : "lg:grid-cols-[300px_minmax(0,1.2fr)]"}`}>
        <div className={`border border-[color:var(--g200)] p-6 ${c.shell}`}>
          <p className={c.label}>{concept.eyebrow}</p>
          <h3 id={`${id}-heading`} className={`mt-3 font-serif text-3xl font-semibold uppercase tracking-tight ${c.heading}`}>
            <span className={c.heading}>{split.base} </span>
            <span className="text-[color:var(--y)]">{split.accent}</span>
          </h3>
          <p className={`mt-3 text-sm leading-relaxed ${c.body}`}>{concept.body}</p>
        </div>
        <div className={`border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-6 ${toneMode === "light" ? "bg-white text-ink" : "bg-[rgb(26_29_27/0.9)] text-white"} ${variant === "c" ? "lg:-translate-y-5" : ""}`}>
          <p className="font-label text-[11px] uppercase tracking-[0.16em] text-[color:var(--y)]">Immediate action</p>
          <p className={`mt-2 text-xs uppercase tracking-[0.12em] ${toneMode === "light" ? "text-ink-muted" : "text-white/72"}`}>
            conversion lane
          </p>
          <a href="#contact" className={`mt-4 inline-block px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] ${c.cta}`}>
            {concept.cta}
          </a>
        </div>
      </div>
    </VariantSection>
  );
}

function AboutVariant({ concept, variant, toneMode }: { concept: Concept; variant: VariantKey; toneMode: Tone }) {
  const c = tone(toneMode);
  const id = `review-tagged-${concept.key}-var-${variant}-${toneMode}`;
  const split = splitLastWord(concept.heading);
  return (
    <VariantSection id={id} toneMode={toneMode}>
      <div className={`grid gap-6 ${variant === "c" ? "lg:grid-cols-[minmax(0,1fr)]" : "lg:grid-cols-[380px_minmax(0,1fr)]"}`}>
        <div className="relative min-h-[340px] overflow-hidden border border-[color:var(--g200)]">
          <Image src={concept.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 38vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(8_10_9/0.72)] to-transparent" />
        </div>
        <article className={`border border-[color:var(--g200)] p-6 ${c.shell}`}>
          <p className={c.label}>{concept.eyebrow}</p>
          <h3 id={`${id}-heading`} className={`mt-3 font-serif text-3xl font-semibold uppercase tracking-tight ${c.heading}`}>
            <span className={c.heading}>{split.base} </span>
            <span className="text-[color:var(--y)]">{split.accent}</span>
          </h3>
          <p className={`mt-4 text-sm leading-relaxed ${c.body}`}>{concept.body}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["Owner-led bids", "Field-managed QA", "Commercial reporting"].map((chip, i) => (
              <div key={`${id}-${chip}`} className={`border border-[color:var(--g200)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] ${toneMode === "light" ? "bg-white text-[color:var(--y)]" : "bg-[rgb(30_33_31/0.84)] text-[color:var(--y)]"} ${variant === "b" && i === 1 ? "sm:-translate-y-2" : ""}`}>
                {chip}
              </div>
            ))}
          </div>
        </article>
      </div>
    </VariantSection>
  );
}

function renderConceptVariant(concept: Concept, variant: VariantKey, toneMode: Tone) {
  if (concept.key === "laneb-hero" || concept.key === "copylab-hero-wrap") {
    return <HeroLikeVariant concept={concept} variant={variant} toneMode={toneMode} />;
  }
  if (concept.key === "laneb-services") return <ServicesVariant concept={concept} variant={variant} toneMode={toneMode} />;
  if (concept.key === "laneb-why") return <WhyVariant concept={concept} variant={variant} toneMode={toneMode} />;
  if (concept.key === "laneb-process-left") return <ProcessLeftVariant concept={concept} variant={variant} toneMode={toneMode} />;
  if (concept.key === "laneb-process-steps") return <ProcessStepsVariant concept={concept} variant={variant} toneMode={toneMode} />;
  if (concept.key === "laneb-coverage") return <CoverageVariant concept={concept} variant={variant} toneMode={toneMode} />;
  if (concept.key === "laneb-cta-band") return <CtaBandVariant concept={concept} variant={variant} toneMode={toneMode} />;
  return <AboutVariant concept={concept} variant={variant} toneMode={toneMode} />;
}

function ConceptGroup({ concept }: { concept: Concept }) {
  const words = concept.title.split(" ");
  const accent = words.pop() ?? concept.title;
  const base = words.join(" ");
  return (
    <div id={`review-tagged-group-${concept.key}`} className="border-t-4 border-[color:var(--y)]/35">
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 py-10 sm:px-6 sm:py-12">
        <p className="label-overline mb-2 text-ink-muted">Tagged concept set</p>
        <h2 className="font-serif text-2xl font-semibold uppercase tracking-tight text-ink sm:text-3xl">
          <span className="text-ink">{base} </span>
          <span className="text-[color:var(--y)]">{accent}</span>
        </h2>
      </div>
      {(["a", "b", "c"] as VariantKey[]).map((variant) => (
        <div key={`${concept.key}-${variant}`}>
          {renderConceptVariant(concept, variant, "light")}
          {renderConceptVariant(concept, variant, "dark")}
        </div>
      ))}
    </div>
  );
}

export function TaggedSectionVariationSet() {
  return (
    <section id="review-tagged-variation-set" className="border-t-4 border-[color:var(--y)]/40">
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 py-10 sm:px-6 sm:py-12">
        <p className="label-overline mb-2 text-ink-muted">Tagged section variation set</p>
        <p className="max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
          Every concept now uses distinct structural archetypes per A/B/C while preserving Light/Dark tone rules and namespaced IDs.
        </p>
      </div>
      {CONCEPTS.map((concept) => (
        <ConceptGroup key={concept.key} concept={concept} />
      ))}
    </section>
  );
}

