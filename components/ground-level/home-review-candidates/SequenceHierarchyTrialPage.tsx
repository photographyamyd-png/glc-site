"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Tone = "dark" | "light";

type Marker = { id: string; label: string; x: number; y: number; note: string };

function toneClasses(tone: Tone) {
  return {
    root: tone === "dark" ? "band-dark" : "band-light",
    field:
      tone === "dark"
        ? "bg-[linear-gradient(180deg,rgb(14_16_15),rgb(26_29_27))]"
        : "bg-[linear-gradient(180deg,rgb(255_255_255),rgb(248_248_246))]",
    panel: tone === "dark" ? "bg-[rgb(20_23_21/0.84)] text-white" : "bg-white text-ink",
    panelSoft: tone === "dark" ? "bg-[rgb(255_255_255/0.08)] text-white" : "bg-[color:var(--brand-canvas)] text-ink",
    border: tone === "dark" ? "border-white/16" : "border-[color:var(--g200)]",
    heading: tone === "dark" ? "text-white" : "text-ink",
    body: tone === "dark" ? "text-white/78" : "text-ink-muted",
    label: tone === "dark" ? "label-overline-on-dark" : "label-overline text-ink-muted",
  };
}

function splitLastWord(text: string) {
  const parts = text.trim().split(/\s+/);
  if (parts.length < 2) return { base: text, accent: "" };
  const accent = parts.pop()!;
  return { base: parts.join(" "), accent };
}

function SequenceShell({
  id,
  title,
  subtitle,
  tone,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  tone: Tone;
  children: React.ReactNode;
}) {
  const c = toneClasses(tone);
  const split = splitLastWord(title);
  return (
    <section id={id} className={`section-major relative overflow-hidden ${c.root}`} aria-labelledby={`${id}-heading`}>
      <div className={`pointer-events-none absolute inset-0 ${c.field}`} aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_78%_12%,color-mix(in_srgb,var(--y)_12%,transparent),transparent_68%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[color:var(--y)]/45" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-14 sm:px-6 sm:py-16">
        <p className={c.label}>Sequence trial block</p>
        <h2 id={`${id}-heading`} className={`mt-2 font-serif text-3xl font-bold uppercase tracking-tight sm:text-4xl ${c.heading}`}>
          <span className={c.heading}>{split.base} </span>
          <span className="text-[color:var(--y)]">{split.accent}</span>
        </h2>
        <p className={`mt-3 max-w-3xl text-sm leading-relaxed sm:text-base ${c.body}`}>{subtitle}</p>
        {children}
      </div>
    </section>
  );
}

function KineticSpineHero({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  return (
    <SequenceShell
      id="sequence-kinetic-spine-hero"
      tone={tone}
      title="The Kinetic Spine Hero"
      subtitle="5:1 hierarchy emphasis with a fixed vertical machinery spine and a scrolling command headline."
    >
      <div className="mt-8 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="relative h-[72vh] min-h-[560px] overflow-hidden border border-[color:var(--g200)]">
          <Image src="/ground-level/hero-primary.jpg" alt="" fill className="object-cover" sizes="320px" />
          <div className="absolute inset-0 bg-[rgb(0_0_0/0.4)]" aria-hidden />
        </div>
        <div className="grid gap-6 lg:items-end">
          <h3 className={`sticky top-[calc(var(--header)+20px)] font-serif text-5xl font-bold uppercase leading-[0.85] tracking-[0.04em] sm:text-7xl ${c.heading}`}>
            <span className={c.heading}>Ground moves at </span>
            <span className="text-[color:var(--y)]">speed</span>
          </h3>
          <div className={`max-w-lg border ${c.border} border-l-[5px] border-l-[color:var(--y)] bg-[rgb(255_255_255/0.14)] p-5 backdrop-blur-lg`}>
            <p className="eyebrow text-[color:var(--y)]">Kinetic translucency</p>
            <p className={`mt-2 text-sm leading-relaxed ${c.body}`}>Floating slab samples image color while preserving contrast and text hierarchy.</p>
          </div>
        </div>
      </div>
    </SequenceShell>
  );
}

function PedigreeLedger({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  return (
    <SequenceShell
      id="sequence-pedigree-ledger"
      tone={tone}
      title="The Pedigree Ledger"
      subtitle="Monochrome partner/region stamps with high-impact metrics and ledger-style authority framing."
    >
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className={`grid grid-cols-3 gap-3 border ${c.border} p-4 ${c.panelSoft}`}>
          {["Barrie", "Orillia", "Muskoka", "Industrial", "Municipal", "Private"].map((item) => (
            <div key={item} className="border border-[color:var(--g200)] px-3 py-6 text-center text-xs font-semibold uppercase tracking-[0.14em] grayscale">
              <span className={tone === "dark" ? "text-white/76" : "text-ink-muted"}>{item}</span>
            </div>
          ))}
        </div>
        <div className={`border ${c.border} border-l-[5px] border-l-[color:var(--y)] p-5 ${c.panel}`}>
          <p className="eyebrow text-[color:var(--y)]">Performance ledger</p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { value: "500+", label: "Scopes delivered" },
              { value: "15+", label: "Years in region" },
              { value: "48h", label: "Mobilization target" },
            ].map((stat) => (
              <div key={stat.label} className={`border ${c.border} p-3`}>
                <p className={`font-sans text-3xl font-semibold uppercase ${c.heading}`}>
                  <span className={c.heading}>{stat.value.slice(0, Math.max(1, stat.value.length - 1))}</span>
                  <span className="text-[color:var(--y)]">{stat.value.slice(-1)}</span>
                </p>
                <p className={`mt-1 text-xs uppercase tracking-[0.12em] ${c.body}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SequenceShell>
  );
}

function ServiceMatrix({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const [active, setActive] = useState("Excavation");
  const services = useMemo(
    () => ["Excavation", "Grading", "Drainage", "Road Base", "Shoring", "Backfill", "Site Prep", "Haul-off"],
    []
  );
  return (
    <SequenceShell
      id="sequence-service-matrix"
      tone={tone}
      title="The Service Matrix"
      subtitle="Asymmetric offset clustering with an interactive service highlight rail."
    >
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {services.map((service, idx) => (
            <button
              key={service}
              type="button"
              onClick={() => setActive(service)}
              className={`border ${c.border} p-4 text-left transition ${
                idx % 3 === 1 ? "sm:translate-y-5" : idx % 3 === 2 ? "sm:-translate-y-3" : ""
              } ${active === service ? "border-[color:var(--y)] bg-[color:var(--y)]/10" : c.panelSoft}`}
            >
              <p className="eyebrow text-[color:var(--y)]">Sub-service</p>
              <p className={`mt-2 font-sans text-lg font-semibold uppercase ${c.heading}`}>{service}</p>
            </button>
          ))}
        </div>
        <aside className={`border ${c.border} border-l-[5px] border-l-[color:var(--y)] p-5 ${c.panel}`}>
          <p className="eyebrow text-[color:var(--y)]">Selected scope</p>
          <p className={`mt-2 font-sans text-3xl font-semibold uppercase ${c.heading}`}>{active}</p>
          <p className={`mt-3 text-sm leading-relaxed ${c.body}`}>Clustered cards intentionally offset optical mass while preserving scan clarity.</p>
        </aside>
      </div>
    </SequenceShell>
  );
}

function StowContentBlock({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const [open, setOpen] = useState(false);
  return (
    <SequenceShell
      id="sequence-stow-content-block"
      tone={tone}
      title='The "Stow" Content Block'
      subtitle="SEO-ready about content with a sliding drawer interaction to keep first view concise."
    >
      <div className={`relative mt-8 overflow-hidden border ${c.border} ${c.panel}`}>
        <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow text-[color:var(--y)]">About cadence</p>
            <p className={`mt-3 text-base leading-relaxed ${c.body}`}>Ground Level Commercial handles excavation, grading, and municipal-ready mobilization across Simcoe and adjacent regions.</p>
            <button type="button" onClick={() => setOpen((v) => !v)} className="mt-5 border border-[color:var(--g200)] bg-[color:var(--y)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
              {open ? "Close details" : "Open details"}
            </button>
          </div>
          <div className={`border ${c.border} p-4 ${c.panelSoft}`}>
            <p className={`font-sans text-2xl font-semibold uppercase ${c.heading}`}>
              <span className={c.heading}>Clean first </span>
              <span className="text-[color:var(--y)]">view</span>
            </p>
          </div>
        </div>
        <div className={`border-t ${c.border} transition-all duration-300 ${open ? "max-h-[340px] p-6 opacity-100" : "max-h-0 overflow-hidden p-0 opacity-0"}`}>
          <p className={`text-sm leading-relaxed ${c.body}`}>Detailed capability copy, compliance language, process notes, and location details live here for SEO density without crowding the hero viewport.</p>
        </div>
      </div>
    </SequenceShell>
  );
}

function BlueprintReveal({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const [position, setPosition] = useState(52);
  return (
    <SequenceShell
      id="sequence-blueprint-reveal"
      tone={tone}
      title="The Blueprint Reveal"
      subtitle="Interactive before/after wipe for raw-site to finished-foundation comparison."
    >
      <div className={`mt-8 border ${c.border} p-4 ${c.panelSoft}`}>
        <div className="relative h-[420px] overflow-hidden border border-[color:var(--g200)]">
          <Image src="/ground-level/excavation-1.jpg" alt="Raw site" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <Image src="/ground-level/equipment-wide.jpg" alt="Finished foundation phase" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-y-0 w-[2px] bg-[color:var(--y)]" style={{ left: `${position}%` }} />
        </div>
        <label className="mt-4 block">
          <span className={`text-xs uppercase tracking-[0.12em] ${c.body}`}>Reveal position</span>
          <input type="range" min={0} max={100} value={position} onChange={(e) => setPosition(Number(e.target.value))} className="mt-2 w-full accent-[color:var(--y)]" />
        </label>
      </div>
    </SequenceShell>
  );
}

function InkMotifQuote({ tone }: { tone: Tone }) {
  return (
    <SequenceShell
      id="sequence-ink-motif-quote"
      tone={tone}
      title='The "Ink" Motif Quote'
      subtitle="Single-sentence value proposition with oversized obsidian typography over white-canvas treatment."
    >
      <div className="mt-8 border border-[color:var(--g200)] bg-white p-8 sm:p-12">
        <p className="eyebrow text-[color:var(--y)]">Value motif</p>
        <p className="mt-4 font-serif text-4xl font-bold uppercase leading-none tracking-[-0.04em] text-[color:var(--ink-deep)] sm:text-6xl">
          We engineer grade, drainage, and schedule integrity into every site before concrete ever lands.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">Obsidian display + yellow accent token + muted supporting line keeps role contrast compliant.</p>
      </div>
    </SequenceShell>
  );
}

function TechnicalCapabilities({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const [expanded, setExpanded] = useState<string | null>(null);
  const rows = [
    { id: "gps", cap: "GPS Grade Control", spec: "Sub-25mm elevation tolerance", cert: "OPS certified workflow" },
    { id: "safety", cap: "Safety Program", spec: "Daily toolbox + lift plans", cert: "COR-aligned reporting" },
    { id: "fleet", cap: "Fleet Readiness", spec: "Tracked and wheeled deployment", cert: "Service logs weekly" },
  ];
  return (
    <SequenceShell
      id="sequence-technical-capabilities"
      tone={tone}
      title="The Technical Capabilities"
      subtitle="Machined-border capability table for specs, certifications, and expandable detail."
    >
      <div className={`mt-8 border ${c.border} ${c.panel}`}>
        {rows.map((row) => (
          <button key={row.id} type="button" onClick={() => setExpanded(expanded === row.id ? null : row.id)} className={`block w-full border-b ${c.border} p-5 text-left last:border-b-0`}>
            <div className="grid gap-3 sm:grid-cols-[1.1fr_1fr_1fr]">
              <p className={`font-sans text-lg font-semibold uppercase ${c.heading}`}>{row.cap}</p>
              <p className={`text-sm ${c.body}`}>{row.spec}</p>
              <p className="text-sm text-[color:var(--y)]">{row.cert}</p>
            </div>
            {expanded === row.id ? <p className={`mt-3 text-sm leading-relaxed ${c.body}`}>Expanded detail for procurement and compliance review.</p> : null}
          </button>
        ))}
      </div>
    </SequenceShell>
  );
}

function RegionalImpactMap({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const markers: Marker[] = [
    { id: "barrie", label: "Barrie", x: 38, y: 55, note: "Commercial foundations" },
    { id: "orillia", label: "Orillia", x: 56, y: 42, note: "Municipal grading" },
    { id: "muskoka", label: "Muskoka", x: 65, y: 24, note: "Site prep package" },
  ];
  const [active, setActive] = useState(markers[0]);
  return (
    <SequenceShell
      id="sequence-regional-impact-map"
      tone={tone}
      title="The Regional Impact Map"
      subtitle="Stylized SVG map with coordinate markers and interactive project metadata."
    >
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className={`relative border ${c.border} p-4 ${c.panelSoft}`}>
          <svg viewBox="0 0 100 70" className="h-[360px] w-full border border-[color:var(--g200)] bg-[rgb(16_18_17)]/5">
            <path d="M10 50 L22 42 L34 44 L48 30 L58 34 L70 20 L84 18 L90 34 L80 52 L62 60 L44 56 L30 62 Z" fill="rgb(255 255 255 / 0.08)" stroke="var(--y)" strokeWidth="0.8" />
            {markers.map((m) => (
              <g key={m.id} onClick={() => setActive(m)} className="cursor-pointer">
                <circle cx={m.x} cy={m.y} r="1.8" fill="var(--y)" />
                <text x={m.x + 2.5} y={m.y - 1.5} fill="currentColor" className={tone === "dark" ? "text-white" : "text-ink"} fontSize="2.8">
                  {m.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <aside className={`border ${c.border} border-l-[5px] border-l-[color:var(--y)] p-5 ${c.panel}`}>
          <p className="eyebrow text-[color:var(--y)]">Coordinate entry</p>
          <p className={`mt-2 font-sans text-3xl font-semibold uppercase ${c.heading}`}>{active.label}</p>
          <p className={`mt-2 text-sm leading-relaxed ${c.body}`}>{active.note}</p>
        </aside>
      </div>
    </SequenceShell>
  );
}

function SocialProofSpine({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const [index, setIndex] = useState(0);
  const quotes = [
    "They hit grading tolerances on a compressed timeline.",
    "Coordination with utilities was clean and proactive.",
    "Mobilization and closeout reporting were both strong.",
  ];
  return (
    <SequenceShell
      id="sequence-social-proof-spine"
      tone={tone}
      title="The Social Proof Spine"
      subtitle="Floating testimonials layered over a parallax media field."
    >
      <div className="relative mt-8 min-h-[520px] overflow-hidden border border-[color:var(--g200)]">
        <Image src="/ground-level/equipment-wide.jpg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[rgb(0_0_0/0.56)]" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <article className={`max-w-xl border ${c.border} bg-[rgb(255_255_255/0.16)] p-6 text-white backdrop-blur-lg`}>
            <p className="eyebrow text-[color:var(--y)]">Client signal</p>
            <p className="mt-3 font-sans text-3xl font-semibold uppercase tracking-tight">
              <span className="text-white">Proof in </span>
              <span className="text-[color:var(--y)]">motion</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/84">{quotes[index]}</p>
            <div className="mt-4 flex gap-2">
              {quotes.map((_, i) => (
                <button key={i} type="button" onClick={() => setIndex(i)} className={`h-2 w-8 ${i === index ? "bg-[color:var(--y)]" : "bg-white/35"}`} aria-label={`Show quote ${i + 1}`} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </SequenceShell>
  );
}

function TerminalCta({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  return (
    <SequenceShell
      id="sequence-terminal-cta"
      tone={tone}
      title="The Terminal CTA"
      subtitle="70/30 optical balance: heavy contact block left and whitespace/action field right."
    >
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className={`border ${c.border} border-l-[5px] border-l-[color:var(--y)] p-6 ${c.panel}`}>
          <p className="eyebrow text-[color:var(--y)]">Contact command</p>
          <p className={`mt-2 font-sans text-3xl font-semibold uppercase ${c.heading}`}>
            <span className={c.heading}>Book your </span>
            <span className="text-[color:var(--y)]">pre-con</span>
          </p>
          <p className={`mt-3 text-sm leading-relaxed ${c.body}`}>Dispatch-ready scheduling and bid package alignment in one intake flow.</p>
        </div>
        <div className={`border ${c.border} p-6 ${c.panelSoft}`}>
          <button type="button" className="w-full border border-[color:var(--g200)] bg-[color:var(--y)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
            Start intake
          </button>
        </div>
      </div>
    </SequenceShell>
  );
}

export function SequenceHierarchyTrialPage() {
  return (
    <>
      <KineticSpineHero tone="dark" />
      <PedigreeLedger tone="light" />
      <ServiceMatrix tone="dark" />
      <StowContentBlock tone="light" />
      <BlueprintReveal tone="dark" />
      <InkMotifQuote tone="light" />
      <TechnicalCapabilities tone="dark" />
      <RegionalImpactMap tone="light" />
      <SocialProofSpine tone="dark" />
      <TerminalCta tone="light" />
    </>
  );
}
