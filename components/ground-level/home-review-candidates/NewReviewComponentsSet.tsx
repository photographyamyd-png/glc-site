import type { ReactNode } from "react";
import Image from "next/image";

type Tone = "light" | "dark";

function splitAccentHeading(text: string) {
  const openParenIdx = text.indexOf("(");
  const core = openParenIdx > -1 ? text.slice(0, openParenIdx).trim() : text;
  const suffix = openParenIdx > -1 ? text.slice(openParenIdx) : "";
  const parts = core.split(" ");
  if (parts.length < 2) {
    return (
      <>
        <span>{core}</span>
        {suffix ? <span className="ml-1 text-[color:var(--y)]">{suffix}</span> : null}
      </>
    );
  }
  const accent = parts.pop()!;
  const base = parts.join(" ");
  return (
    <>
      <span>{base} </span>
      <span className="text-[color:var(--y)]">{accent}</span>
      {suffix ? <span className="ml-1">{suffix}</span> : null}
    </>
  );
}

function NewComponentShell({
  id,
  title,
  tone,
  children,
}: {
  id: string;
  title: string;
  tone: Tone;
  children: ReactNode;
}) {
  const isLight = tone === "light";
  return (
    <section
      id={id}
      className={`section-major relative scroll-mt-[var(--header)] overflow-hidden view-reveal ${
        isLight ? "band-light" : "band-dark"
      }`}
      aria-labelledby={`${id}-heading`}
    >
      <div className={`pointer-events-none absolute inset-0 ${isLight ? "bg-[linear-gradient(165deg,rgb(255_255_255),rgb(248_248_246))]" : "bg-[linear-gradient(180deg,rgb(18_20_19),rgb(31_34_32))]"}`} aria-hidden />
      <div className={`pointer-events-none absolute inset-0 ${isLight ? "bg-[radial-gradient(ellipse_72%_58%_at_84%_12%,color-mix(in_srgb,var(--y)_10%,transparent),transparent_66%)]" : "bg-[radial-gradient(ellipse_70%_58%_at_14%_12%,color-mix(in_srgb,var(--y)_12%,transparent),transparent_68%)]"}`} aria-hidden />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div
          className={`max-w-3xl border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-5 shadow-[0_14px_36px_rgb(0_0_0/0.16)] ${
            isLight ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(21_23_22/0.86)] text-white"
          }`}
        >
          <p className={`${isLight ? "label-overline text-ink-muted" : "label-overline-on-dark"} mb-3`}>New component</p>
          <h2 id={`${id}-heading`} className="font-serif text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
            {splitAccentHeading(title)}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ProductionMetricsBoard({ tone }: { tone: Tone }) {
  const isLight = tone === "light";
  return (
    <NewComponentShell id={`review-new-metrics-board-${tone}`} title={`Production metrics board (${tone})`} tone={tone}>
      <div className="mt-8 grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className={`border border-[color:var(--g200)] p-5 ${isLight ? "bg-white text-ink" : "bg-[rgb(25_28_26/0.84)] text-white"}`}>
          <p className="font-label text-[11px] uppercase tracking-[0.16em] text-[color:var(--y)]">Performance rail</p>
          <p className="mt-2 font-serif text-2xl font-semibold uppercase">
            <span className={isLight ? "text-ink" : "text-white"}>Weekly </span>
            <span className="text-[color:var(--y)]">snapshot</span>
          </p>
        </aside>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["Uptime", "Crew Hours", "On-time", "Incidents"].map((metric, i) => (
          <article
            key={metric}
            className={`border border-[color:var(--g200)] p-5 shadow-[0_10px_24px_rgb(0_0_0/0.14)] ${
              isLight ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(22_24_23/0.84)] text-white"
            } ${i === 1 ? "lg:-translate-y-3" : ""}`}
          >
            <p className="font-label text-[11px] uppercase tracking-[0.16em] text-[color:var(--y)]">{metric}</p>
            <p className={`mt-3 font-serif text-3xl font-semibold ${isLight ? "text-ink" : "text-white"}`}>9{7 + i}%</p>
          </article>
        ))}
        </div>
      </div>
    </NewComponentShell>
  );
}

function BidPackageStrip({ tone }: { tone: Tone }) {
  const isLight = tone === "light";
  return (
    <NewComponentShell id={`review-new-bid-strip-${tone}`} title={`Bid package strip (${tone})`} tone={tone}>
      <div className="mt-8 grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
        <div className={`border border-[color:var(--g200)] p-5 ${isLight ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(24_27_25/0.84)] text-white"}`}>
          <p className="font-serif text-xl font-semibold uppercase">
            <span className={isLight ? "text-ink" : "text-white"}>Downloadables and </span>
            <span className="text-[color:var(--y)]">scope</span>
          </p>
          <ul className={`mt-4 space-y-2 text-sm ${isLight ? "text-ink-muted" : "text-white/74"}`}>
            <li>Scope schedule template</li>
            <li>Site safety checklist</li>
            <li>Procurement notes</li>
          </ul>
        </div>
        <div className="relative min-h-[280px] overflow-hidden border border-[color:var(--g200)]">
          <Image src="/ground-level/equipment-wide.jpg" alt="" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          <div className={`absolute inset-0 ${isLight ? "bg-[rgb(0_0_0/0.45)]" : "bg-[rgb(0_0_0/0.65)]"}`} />
          <p className="absolute bottom-4 left-4 font-label text-[11px] uppercase tracking-[0.16em] text-white">Bid package preview</p>
          <div className="absolute right-4 top-4 h-14 w-14 border border-[color:var(--y)]/70" />
        </div>
      </div>
    </NewComponentShell>
  );
}

function MobilizationStrip({ tone }: { tone: Tone }) {
  const isLight = tone === "light";
  return (
    <NewComponentShell id={`review-new-mobilization-${tone}`} title={`Mobilization strip (${tone})`} tone={tone}>
      <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_290px] lg:items-start">
        <div className="grid gap-3 sm:grid-cols-3">
          {["Dispatch", "Equipment", "Field lead"].map((item, i) => (
            <div key={item} className={`border border-[color:var(--g200)] p-4 ${isLight ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(22_24_23/0.84)] text-white"} ${i === 1 ? "sm:-translate-y-2" : ""}`}>
              <p className="font-label text-[11px] uppercase tracking-[0.14em] text-[color:var(--y)]">{item}</p>
            </div>
          ))}
        </div>
        <div className={`border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-5 ${isLight ? "bg-white text-ink" : "bg-[rgb(22_24_23/0.84)] text-white"}`}>
          <p className="font-label text-[11px] uppercase tracking-[0.16em] text-[color:var(--y)]">Mobilization window</p>
          <p className="mt-2 font-serif text-2xl font-semibold uppercase">
            <span className={isLight ? "text-ink" : "text-white"}>4</span>
            <span className="text-[color:var(--y)]">8</span>
            <span className={isLight ? "text-ink" : "text-white"}>H</span>
          </p>
          <p className={`mt-2 text-xs uppercase tracking-[0.12em] ${isLight ? "text-ink-muted" : "text-white/72"}`}>Rapid deployment target</p>
        </div>
      </div>
    </NewComponentShell>
  );
}

function CalloutRail({ tone }: { tone: Tone }) {
  const isLight = tone === "light";
  return (
    <NewComponentShell id={`review-new-callout-rail-${tone}`} title={`Callout rail (${tone})`} tone={tone}>
      <div className="mt-8 grid gap-4 lg:grid-cols-[420px_minmax(0,1fr)]">
        <div className="relative min-h-[280px] overflow-hidden border border-[color:var(--g200)]">
          <Image src="/ground-level/hero-primary.jpg" alt="" fill className="object-cover" sizes="(min-width: 1024px) 36vw, 100vw" />
          <div className={`absolute inset-0 ${isLight ? "bg-[rgb(0_0_0/0.4)]" : "bg-[rgb(0_0_0/0.6)]"}`} />
        </div>
        <div className="space-y-3">
          {["Geotech awareness", "Schedule integrity", "Cost transparency"].map((item, i) => (
            <div key={item} className={`border-l-[5px] border-[color:var(--y)] border border-[color:var(--g200)] p-4 ${isLight ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(22_24_23/0.84)] text-white"} ${i === 1 ? "lg:translate-x-3" : ""}`}>
              <p className="font-serif text-lg font-semibold uppercase">
                <span className={isLight ? "text-ink" : "text-white"}>{item.split(" ")[0]} </span>
                <span className="text-[color:var(--y)]">{item.split(" ").slice(1).join(" ")}</span>
              </p>
              <p className={`mt-2 text-xs uppercase tracking-[0.12em] ${isLight ? "text-ink-muted" : "text-white/72"}`}>Assurance line</p>
            </div>
          ))}
        </div>
      </div>
    </NewComponentShell>
  );
}

function ProcurementFaq({ tone }: { tone: Tone }) {
  const isLight = tone === "light";
  return (
    <NewComponentShell id={`review-new-procurement-faq-${tone}`} title={`Procurement FAQ (${tone})`} tone={tone}>
      <div className="mt-8 grid gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className={`border border-[color:var(--g200)] p-5 ${isLight ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(24_27_25/0.84)] text-white"}`}>
          <p className="font-label text-[11px] uppercase tracking-[0.16em] text-[color:var(--y)]">Procurement support</p>
          <p className="mt-2 font-serif text-2xl font-semibold uppercase">
            <span className={isLight ? "text-ink" : "text-white"}>FAQ </span>
            <span className="text-[color:var(--y)]">stack</span>
          </p>
        </aside>
        <div className="grid gap-4">
        {["Insurance and certs?", "How fast can you mobilize?", "Who is PM contact?"].map((q, i) => (
          <article key={q} className={`border border-[color:var(--g200)] p-5 ${isLight ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(22_24_23/0.84)] text-white"} ${i === 1 ? "lg:ml-8 lg:mr-8" : ""}`}>
            <p className="font-serif text-lg font-semibold uppercase">
              <span className={isLight ? "text-ink" : "text-white"}>{q.split(" ").slice(0, 2).join(" ")} </span>
              <span className="text-[color:var(--y)]">{q.split(" ").slice(2).join(" ")}</span>
            </p>
            <p className={`${isLight ? "text-ink-muted" : "text-white/76"} mt-2 text-sm leading-relaxed`}>
              Structured answer area for pre-award conversations and stakeholder confidence.
            </p>
          </article>
        ))}
        </div>
      </div>
    </NewComponentShell>
  );
}

export function NewReviewComponentsSet() {
  return (
    <section id="review-new-components-set" className="border-t-4 border-[color:var(--y)]/38">
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 py-10 sm:px-6 sm:py-12">
        <p className="label-overline mb-2 text-ink-muted">Five new review components</p>
      </div>
      <ProductionMetricsBoard tone="light" />
      <ProductionMetricsBoard tone="dark" />
      <BidPackageStrip tone="light" />
      <BidPackageStrip tone="dark" />
      <MobilizationStrip tone="light" />
      <MobilizationStrip tone="dark" />
      <CalloutRail tone="light" />
      <CalloutRail tone="dark" />
      <ProcurementFaq tone="light" />
      <ProcurementFaq tone="dark" />
    </section>
  );
}

