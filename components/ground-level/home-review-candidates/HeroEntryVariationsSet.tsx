import Image from "next/image";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";

type Tone = "light" | "dark";

function toneClasses(tone: Tone) {
  return {
    root: tone === "light" ? "band-light" : "band-dark",
    field:
      tone === "light"
        ? "bg-[linear-gradient(165deg,rgb(255_255_255),rgb(248_248_246))]"
        : "bg-[linear-gradient(180deg,rgb(18_20_19),rgb(30_33_31))]",
    atmosphere:
      tone === "light"
        ? "bg-[radial-gradient(ellipse_72%_58%_at_84%_12%,color-mix(in_srgb,var(--y)_12%,transparent),transparent_66%)]"
        : "bg-[radial-gradient(ellipse_70%_58%_at_14%_12%,color-mix(in_srgb,var(--y)_11%,transparent),transparent_64%)]",
    shell: tone === "light" ? "bg-[rgb(255_255_255/0.58)] text-ink" : "bg-[rgb(16_18_17/0.52)] text-white",
    shellBorder: tone === "light" ? "border-[color:var(--g200)]" : "border-white/18",
    heading: tone === "light" ? "text-ink" : "text-white",
    body: tone === "light" ? "text-ink-muted" : "text-white/78",
    label: tone === "light" ? "label-overline text-ink-muted" : "label-overline-on-dark",
    meta: tone === "light" ? "text-ink-muted" : "text-white/72",
  };
}

function splitLastWord(text: string) {
  const parts = text.trim().split(/\s+/);
  if (parts.length < 2) return { base: text, accent: "" };
  const accent = parts.pop()!;
  return { base: parts.join(" "), accent };
}

function SectionShell({
  id,
  title,
  tone,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  tone: Tone;
  subtitle: string;
  children: React.ReactNode;
}) {
  const c = toneClasses(tone);
  const split = splitLastWord(title);
  return (
    <section id={id} className={`section-major relative overflow-hidden scroll-mt-[var(--header)] view-reveal ${c.root}`} aria-labelledby={`${id}-heading`}>
      <div className={`pointer-events-none absolute inset-0 ${c.field}`} aria-hidden />
      <div className={`pointer-events-none absolute inset-0 ${c.atmosphere}`} aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[color:var(--y)]/42" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className={`max-w-4xl border ${c.shellBorder} border-l-[5px] border-l-[color:var(--y)] p-5 backdrop-blur-md ${c.shell}`}>
          <p className={c.label}>Hero entry variation</p>
          <h2 id={`${id}-heading`} className={`mt-2 font-serif text-3xl font-bold uppercase tracking-tight sm:text-4xl ${c.heading}`}>
            <span className={c.heading}>{split.base} </span>
            <span className="text-[color:var(--y)]">{split.accent}</span>
          </h2>
          <p className={`mt-3 max-w-2xl text-sm leading-relaxed sm:text-base ${c.body}`}>{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function KineticSpine({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  return (
    <SectionShell
      id={`review-hero-entry-kinetic-spine-${tone}`}
      title={`Kinetic Spine (${tone})`}
      tone={tone}
      subtitle="Tall anchored visual spine on the left, with oversized right-hand typography and whitespace counterweight."
    >
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="relative min-h-[640px] overflow-hidden border border-[color:var(--g200)] shadow-[0_22px_56px_rgb(0_0_0/0.24)]">
          <Image src="/ground-level/hero-primary.jpg" alt="" fill className="object-cover" sizes="(min-width:1024px) 46vw,100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.56)] to-transparent" aria-hidden />
        </div>
        <div className="pl-0 lg:pl-10">
          <p className={c.label}>Optical counterweight</p>
          <h3 className={`mt-2 font-serif text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl ${c.heading}`}>
            <span className={c.heading}>Mass on the </span>
            <span className="text-[color:var(--y)]">left</span>
          </h3>
          <p className={`mt-5 max-w-xl text-base leading-relaxed ${c.body}`}>
            This variation uses extreme right-side whitespace and monumental type to balance the dense media spine.
          </p>
          {/* Kinetic translucency: floating slab picks up image tonality */}
          <div className={`mt-8 max-w-md border ${c.shellBorder} border-l-[5px] border-l-[color:var(--y)] bg-[rgb(255_255_255/0.16)] p-5 backdrop-blur-lg ${tone === "light" ? "text-ink" : "text-white"}`}>
            <p className="eyebrow text-[color:var(--y)]">Kinetic translucency</p>
            <p className={`mt-2 text-sm leading-relaxed ${c.meta}`}>Floating panel samples underlying color while preserving readability.</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function AtmosphericLoop({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  return (
    <SectionShell
      id={`review-hero-entry-atmospheric-loop-${tone}`}
      title={`Atmospheric Loop (${tone})`}
      tone={tone}
      subtitle="Full-bleed moving-mood treatment with letterbox framing and translucent overlay slabs."
    >
      <div className="relative mt-8 overflow-hidden border border-[color:var(--g200)]">
        <div className="relative min-h-[70vh]">
          <Image src="/ground-level/equipment-wide.jpg" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.65),rgb(0_0_0/0.35),rgb(0_0_0/0.7))]" />
          <div className="absolute left-0 right-0 top-0 h-14 bg-[rgb(0_0_0/0.7)]" aria-hidden />
          <div className="absolute left-0 right-0 bottom-0 h-14 bg-[rgb(0_0_0/0.7)]" aria-hidden />
          <ClaudeLogicWatermark placement="top-right" mode="on-dark" />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-[560px] items-center pr-6">
            <div className="w-full border border-white/18 bg-[rgb(255_255_255/0.14)] p-6 text-white backdrop-blur-lg">
              <p className="eyebrow text-[color:var(--y)]">Mood entry</p>
              <p className="mt-2 font-serif text-4xl font-bold uppercase leading-none tracking-[-0.04em]">
                <span className="text-white">Atmosphere </span>
                <span className="text-[color:var(--y)]">first</span>
              </p>
              <p className={`mt-3 text-sm leading-relaxed ${c.meta}`}>Letterbox framing keeps motion cinematic without UI clutter.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function SplitShiftHero({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  return (
    <SectionShell
      id={`review-hero-entry-split-shift-${tone}`}
      title={`Split-Shift Hero (${tone})`}
      tone={tone}
      subtitle="A 70/30 left-heavy visual split with a stuck overlap headline slab to break default grid expectations."
    >
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:items-stretch">
        <div className="relative min-h-[520px] overflow-hidden border border-[color:var(--g200)]">
          <Image src="/ground-level/excavation-1.jpg" alt="" fill className="object-cover" sizes="(min-width:1024px) 64vw,100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(0_0_0/0.46)] to-[rgb(0_0_0/0.15)]" aria-hidden />
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-[min(90%,480px)] border border-white/20 bg-[rgb(255_255_255/0.14)] p-6 text-white backdrop-blur-lg shadow-[0_20px_52px_rgb(0_0_0/0.34)]">
            <p className="eyebrow text-[color:var(--y)]">Split overlay</p>
            <h3 className="mt-2 font-serif text-4xl font-bold uppercase leading-tight">
              <span className="text-white">Shift the </span>
              <span className="text-[color:var(--y)]">grid</span>
            </h3>
            <p className={`mt-3 text-sm leading-relaxed ${c.meta}`}>Translucent slab remains legible while inheriting image temperature.</p>
          </div>
        </div>
        <aside className={`border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-6 ${tone === "light" ? "bg-white text-ink" : "bg-[rgb(23_26_24/0.9)] text-white"}`}>
          <p className={c.label}>Sticky detail rail</p>
          <p className={`mt-3 font-sans text-2xl font-semibold uppercase ${c.heading}`}>
            <span className={c.heading}>30% command </span>
            <span className="text-[color:var(--y)]">panel</span>
          </p>
          <p className={`mt-4 text-sm leading-relaxed ${c.body}`}>Dense imagery left, governance typography right.</p>
        </aside>
      </div>
    </SectionShell>
  );
}

function CoordinatesEntry({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  return (
    <SectionShell
      id={`review-hero-entry-coordinates-${tone}`}
      title={`Coordinates Entry (${tone})`}
      tone={tone}
      subtitle="Technical coordinate typography with large right-side command text and translucent data cards."
    >
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="relative min-h-[500px] overflow-hidden border border-[color:var(--g200)]">
          <Image src="/ground-level/hero-primary.jpg" alt="" fill className="object-cover" sizes="(min-width:1024px) 54vw,100vw" />
          <div className="absolute inset-0 bg-[rgb(0_0_0/0.48)]" aria-hidden />
          <div className="absolute left-6 top-6 border border-white/20 bg-[rgb(255_255_255/0.12)] px-4 py-3 text-white backdrop-blur-md">
            <p className="eyebrow text-[color:var(--y)]">N44.3894 W79.6903</p>
            <p className="mt-1 text-xs text-white/78">Barrie dispatch point</p>
          </div>
          <div className="absolute left-6 bottom-6 border border-white/20 bg-[rgb(255_255_255/0.12)] px-4 py-3 text-white backdrop-blur-md">
            <p className="eyebrow text-[color:var(--y)]">ETA 00:48</p>
            <p className="mt-1 text-xs text-white/78">Mobilization projection</p>
          </div>
        </div>
        <div className="pt-4 lg:pt-10">
          <p className={c.label}>Technical authority</p>
          <h3 className={`mt-2 font-serif text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl ${c.heading}`}>
            <span className={c.heading}>Coordinates as </span>
            <span className="text-[color:var(--y)]">entry</span>
          </h3>
          <p className={`mt-5 max-w-lg text-base leading-relaxed ${c.body}`}>
            Dense data left, giant command typography right. Every floating data tile uses backdrop-blur translucency.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

export function HeroEntryVariationsSet() {
  return (
    <section id="review-hero-entry-variations-set" className="border-t-4 border-[color:var(--y)]/45">
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 py-10 sm:px-6 sm:py-12">
        <p className="label-overline mb-2 text-ink-muted">Hero & entry variation block</p>
        <h2 className="font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
          <span className="text-ink">Optical weight </span>
          <span className="text-[color:var(--y)]">balancing</span>
        </h2>
      </div>
      <KineticSpine tone="light" />
      <KineticSpine tone="dark" />
      <AtmosphericLoop tone="light" />
      <AtmosphericLoop tone="dark" />
      <SplitShiftHero tone="light" />
      <SplitShiftHero tone="dark" />
      <CoordinatesEntry tone="light" />
      <CoordinatesEntry tone="dark" />
    </section>
  );
}

