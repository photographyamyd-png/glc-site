"use client";

import { useMemo, useState } from "react";

type Tone = "dark" | "light";

function toneClasses(tone: Tone) {
  return {
    root: tone === "dark" ? "band-dark" : "band-light",
    field:
      tone === "dark"
        ? "bg-[linear-gradient(180deg,rgb(17_19_18),rgb(30_33_31))]"
        : "bg-[linear-gradient(180deg,rgb(255_255_255),rgb(248_248_246))]",
    panel:
      tone === "dark"
        ? "border-white/16 bg-[rgb(15_17_16/0.56)] text-white"
        : "border-[color:var(--g200)] bg-[rgb(255_255_255/0.72)] text-ink",
    body: tone === "dark" ? "text-white/78" : "text-ink-muted",
    heading: tone === "dark" ? "text-white" : "text-ink",
    label: tone === "dark" ? "label-overline-on-dark" : "label-overline text-ink-muted",
    chip:
      tone === "dark"
        ? "border-white/16 bg-[rgb(255_255_255/0.06)] text-[color:var(--y)]"
        : "border-[color:var(--g200)] bg-white text-[color:var(--y)]",
  };
}

function splitLastWord(text: string) {
  const parts = text.trim().split(/\s+/);
  if (parts.length < 2) return { base: text, accent: "" };
  const accent = parts.pop()!;
  return { base: parts.join(" "), accent };
}

function Shell({
  id,
  tone,
  title,
  kicker,
  children,
}: {
  id: string;
  tone: Tone;
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  const c = toneClasses(tone);
  const split = splitLastWord(title);
  return (
    <section id={id} className={`section-major relative overflow-hidden scroll-mt-[var(--header)] ${c.root}`} aria-labelledby={`${id}-heading`}>
      <div className={`pointer-events-none absolute inset-0 ${c.field}`} aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_56%_at_86%_14%,color-mix(in_srgb,var(--y)_14%,transparent),transparent_66%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[color:var(--y)]/38" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-12 sm:px-6 sm:py-14">
        <div className={`max-w-4xl border ${c.panel} border-l-[5px] border-l-[color:var(--y)] p-5 backdrop-blur-md`}>
          <p className={c.label}>{kicker}</p>
          <h2 id={`${id}-heading`} className={`mt-2 font-serif text-3xl font-bold uppercase tracking-tight sm:text-4xl ${c.heading}`}>
            <span className={c.heading}>{split.base} </span>
            <span className="text-[color:var(--y)]">{split.accent}</span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function KineticSpineHero({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  return (
    <Shell id="sequence-kinetic-spine-hero" tone={tone} title="The Kinetic Spine Hero" kicker="01 Sequence section">
      <div className="mt-8 grid gap-7 lg:grid-cols-[250px_minmax(0,1fr)] lg:items-end">
        <div className="relative min-h-[560px] overflow-hidden border border-[color:var(--g200)]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(56_60_58),rgb(20_22_21))]" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(180deg,transparent,rgb(0_0_0/0.6))]" />
        </div>
        <div>
          <p className={c.label}>5:1 type ratio</p>
          <h3 className={`mt-2 font-serif text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-7xl ${c.heading}`}>Ground command in <span className="text-[color:var(--y)]">motion</span></h3>
          <p className={`mt-4 max-w-2xl text-base leading-relaxed ${c.body}`}>A fixed visual spine anchors heavy equipment imagery while the command headline reads as a scrolling narrative plane.</p>
        </div>
      </div>
    </Shell>
  );
}

function PedigreeLedger({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const logos = ["Barrie", "Orillia", "Muskoka", "Simcoe", "Collingwood", "Midland"];
  return (
    <Shell id="sequence-pedigree-ledger" tone={tone} title="The Pedigree Ledger" kicker="02 Sequence section">
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {logos.map((logo) => (
            <article key={logo} className={`border p-4 ${c.panel} grayscale`}>
              <p className="eyebrow text-[color:var(--y)]">{logo}</p>
              <p className={`mt-2 text-xs ${c.body}`}>Regional partner lane</p>
            </article>
          ))}
        </div>
        <aside className={`border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-5 ${c.panel}`}>
          <p className={c.label}>High-impact stats</p>
          <p className={`mt-3 font-serif text-4xl font-bold leading-none tracking-[-0.04em] ${c.heading}`}>500+</p>
          <p className={c.body}>Completed commercial scopes</p>
          <p className={`mt-3 font-serif text-4xl font-bold leading-none tracking-[-0.04em] ${c.heading}`}>15+</p>
          <p className={c.body}>Years of delivery continuity</p>
        </aside>
      </div>
    </Shell>
  );
}

function ServiceMatrix({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const services = ["Excavation", "Grading", "Trenching", "Drainage", "Road Base", "Backfill", "Demolition", "Site Prep"];
  return (
    <Shell id="sequence-service-matrix" tone={tone} title="The Service Matrix" kicker="03 Sequence section">
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <article key={service} className={`border p-4 ${c.panel} ${i % 3 === 0 ? "lg:-translate-y-4" : i % 3 === 1 ? "lg:translate-y-3" : ""}`}>
            <p className="eyebrow text-[color:var(--y)]">{`0${i + 1}`}</p>
            <h3 className={`mt-2 font-serif text-xl font-bold uppercase leading-tight tracking-[0.04em] ${c.heading}`}>{service}</h3>
            <p className={`mt-2 text-sm ${c.body}`}>Non-standard cluster position balances optical weight across the field.</p>
          </article>
        ))}
      </div>
    </Shell>
  );
}

function StowContentBlock({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const [open, setOpen] = useState(0);
  const blocks = [
    { title: "Who we are", body: "Ground-level commercial specialists focused on graded delivery systems." },
    { title: "What we do", body: "Excavation, road base, drainage, trenching, and phased mobilization programs." },
    { title: "Why stow works", body: "Long-form SEO copy stays in DOM while interaction keeps the visual layer clean." },
  ];
  return (
    <Shell id="sequence-stow-content-block" tone={tone} title='The "Stow" Content Block' kicker="04 Sequence section">
      <div className="mt-8 space-y-3">
        {blocks.map((block, i) => {
          const isOpen = open === i;
          return (
            <article key={block.title} className={`border ${c.panel}`}>
              <button type="button" className="flex w-full items-center justify-between px-5 py-4 text-left" onClick={() => setOpen(i)} aria-expanded={isOpen}>
                <span className={`font-serif text-xl font-bold uppercase leading-tight tracking-[0.04em] ${c.heading}`}>
                  <span className={c.heading}>{block.title.split(" ")[0]} </span>
                  <span className="text-[color:var(--y)]">{block.title.split(" ").slice(1).join(" ")}</span>
                </span>
                <span className="eyebrow text-[color:var(--y)]">{isOpen ? "Close" : "Open"}</span>
              </button>
              {isOpen ? <p className={`px-5 pb-5 text-sm leading-relaxed ${c.body}`}>{block.body}</p> : null}
            </article>
          );
        })}
      </div>
    </Shell>
  );
}

function BlueprintReveal({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const [split, setSplit] = useState(50);
  return (
    <Shell id="sequence-blueprint-reveal" tone={tone} title="The Blueprint Reveal" kicker="05 Sequence section">
      <div className="mt-8">
        <div className="relative min-h-[360px] overflow-hidden border border-[color:var(--g200)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(83_76_69),rgb(55_50_46))]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(182_191_195),rgb(123_138_146))]" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }} />
          <div className="absolute inset-y-0 w-[2px] bg-[color:var(--y)]" style={{ left: `${split}%` }} />
          <div className={`absolute left-4 top-4 border px-3 py-1 text-xs ${c.chip}`}>Raw site</div>
          <div className={`absolute right-4 top-4 border px-3 py-1 text-xs ${c.chip}`}>Finished foundation</div>
        </div>
        <label className="mt-4 block">
          <span className={`text-sm ${c.body}`}>Wipe position</span>
          <input className="mt-2 w-full accent-[color:var(--y)]" type="range" min={0} max={100} value={split} onChange={(e) => setSplit(Number(e.target.value))} />
        </label>
      </div>
    </Shell>
  );
}

function InkMotifQuote({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  return (
    <Shell id="sequence-ink-motif-quote" tone={tone} title='The "Ink" Motif Quote' kicker="06 Sequence section">
      <blockquote className="mt-8 border border-[color:var(--g200)] bg-white px-6 py-10 sm:px-10 sm:py-14">
        <p className="font-serif text-4xl font-bold uppercase leading-none tracking-[-0.04em] text-[color:var(--ink-deep)] sm:text-6xl">
          Every grade cut becomes a measurable commitment to timeline, safety, and structural confidence.
        </p>
        <p className={`mt-4 text-sm ${c.body}`}>Obsidian typography on white canvas with yellow accent punctuation.</p>
      </blockquote>
    </Shell>
  );
}

function TechnicalCapabilities({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const rows = [
    ["Dozer Grade Tolerance", "+/- 9mm", "Calibrated weekly"],
    ["Excavator Fleet", "6 units", "Tracked + wheeled mix"],
    ["Compaction Verification", "98%", "Field density checks"],
    ["Safety Certificates", "COR + WSIB", "Current + verified"],
  ];
  return (
    <Shell id="sequence-technical-capabilities" tone={tone} title="The Technical Capabilities" kicker="07 Sequence section">
      <div className={`mt-8 overflow-hidden border ${c.panel}`}>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[color:var(--g200)]">
              <th className="px-4 py-3 text-left eyebrow text-[color:var(--y)]">Capability</th>
              <th className="px-4 py-3 text-left eyebrow text-[color:var(--y)]">Value</th>
              <th className="px-4 py-3 text-left eyebrow text-[color:var(--y)]">Verification</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-[color:var(--g200)]/70 last:border-b-0">
                <td className="px-4 py-3">{row[0]}</td>
                <td className="px-4 py-3 font-semibold">{row[1]}</td>
                <td className={`px-4 py-3 ${c.body}`}>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}

function RegionalImpactMap({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const markers = useMemo(
    () => [
      { id: "Barrie", x: 38, y: 42, note: "Municipal road base package" },
      { id: "Orillia", x: 54, y: 28, note: "Drainage + trench expansion" },
      { id: "Muskoka", x: 67, y: 16, note: "Foundation prep sequence" },
    ],
    [],
  );
  const [active, setActive] = useState(markers[0]);
  return (
    <Shell id="sequence-regional-impact-map" tone={tone} title="The Regional Impact Map" kicker="08 Sequence section">
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="relative min-h-[340px] overflow-hidden border border-[color:var(--g200)]">
          <svg viewBox="0 0 100 60" className="h-full w-full bg-[linear-gradient(180deg,rgb(25_30_28),rgb(48_58_53))]">
            <path d="M4 47L18 22L33 19L52 8L74 14L91 33L77 54L44 56L24 53Z" fill="rgb(218 221 214 / 0.35)" stroke="rgb(247 197 32 / 0.55)" strokeWidth="0.7" />
            {markers.map((m) => (
              <g key={m.id}>
                <circle cx={m.x} cy={m.y} r="1.8" fill="rgb(247 197 32)" />
                <text x={m.x + 2.2} y={m.y - 0.8} fill="white" fontSize="3.1">
                  {m.id}
                </text>
              </g>
            ))}
          </svg>
          {markers.map((m) => (
            <button
              key={m.id}
              type="button"
              aria-label={`Coordinate ${m.id}`}
              onClick={() => setActive(m)}
              className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--y)] bg-[rgb(255_255_255/0.24)] backdrop-blur-md"
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
            />
          ))}
        </div>
        <aside className={`border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-5 ${c.panel}`}>
          <p className={c.label}>Coordinate entry marker</p>
          <p className={`mt-2 font-sans text-2xl font-semibold uppercase ${c.heading}`}>
            <span className={c.heading}>{active.id.split(" ")[0]} </span>
            <span className="text-[color:var(--y)]">{active.id.split(" ").slice(1).join(" ")}</span>
          </p>
          <p className={`mt-3 text-sm ${c.body}`}>{active.note}</p>
        </aside>
      </div>
    </Shell>
  );
}

function SocialProofSpine({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  const quotes = [
    "Tightest mobilization handoff we have seen in Simcoe.",
    "Schedule variance stayed below tolerance all phase long.",
    "Field reporting was clean and decision-ready by noon daily.",
  ];
  return (
    <Shell id="sequence-social-proof-spine" tone={tone} title="The Social Proof Spine" kicker="09 Sequence section">
      <div className="relative mt-8 min-h-[420px] overflow-hidden border border-[color:var(--g200)]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgb(37_42_40),rgb(13_15_14))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_52%_at_78%_28%,rgb(247_197_32/0.16),transparent_66%)]" />
        <div className="relative z-10 grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((quote, i) => (
            <article key={quote} className={`border p-4 backdrop-blur-lg ${c.panel} ${i === 1 ? "lg:translate-y-8" : i === 2 ? "lg:-translate-y-6" : ""}`}>
              <p className="eyebrow text-[color:var(--y)]">{`Field note 0${i + 1}`}</p>
              <p className={`mt-2 text-sm leading-relaxed ${c.body}`}>{quote}</p>
            </article>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function TerminalCta({ tone }: { tone: Tone }) {
  const c = toneClasses(tone);
  return (
    <Shell id="sequence-terminal-cta" tone={tone} title="The Terminal CTA" kicker="10 Sequence section">
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
        <div className={`border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-6 ${c.panel}`}>
          <p className={c.label}>70/30 balance</p>
          <h3 className={`mt-2 font-serif text-3xl font-bold uppercase sm:text-4xl ${c.heading}`}>
            <span className={c.heading}>Book the field </span>
            <span className="text-[color:var(--y)]">walkthrough</span>
          </h3>
          <p className={`mt-3 text-sm ${c.body}`}>Dispatch window, scope package, and site constraints can be aligned in one planning call.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className={`border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] ${c.chip}`}>Call 705-555-0183</span>
            <span className={`border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] ${c.chip}`}>ops@groundlevel.ca</span>
          </div>
        </div>
        <div className="min-h-[240px] border border-dashed border-[color:var(--g200)] bg-[rgb(255_255_255/0.06)]" />
      </div>
    </Shell>
  );
}

export function SequenceHierarchyTrialSet() {
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
