import type { ReactNode } from "react";
import Image from "next/image";
import { EMAIL_ADDRESS, PHONE_DISPLAY } from "@/lib/ground-level/homepage-copy";

type Tone = "light" | "dark";

function CandidateShell({
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
      {/* Layer 1: field wash */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          isLight
            ? "bg-[linear-gradient(160deg,rgb(255_255_255),rgb(248_248_246))]"
            : "bg-[linear-gradient(180deg,rgb(17_19_18),rgb(22_24_23))]"
        }`}
        aria-hidden
      />
      {/* Layer 2: accent atmosphere */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          isLight
            ? "bg-[radial-gradient(ellipse_68%_60%_at_82%_8%,color-mix(in_srgb,var(--y)_12%,transparent),transparent_62%)]"
            : "bg-[radial-gradient(ellipse_72%_58%_at_10%_12%,color-mix(in_srgb,var(--y)_10%,transparent),transparent_65%)]"
        }`}
        aria-hidden
      />
      {/* Layer 3: structural seam */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
          isLight ? "bg-[color:var(--y)]/45" : "bg-[color:var(--y)]/35"
        }`}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div
          className={`max-w-3xl border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-5 shadow-[0_16px_42px_rgb(0_0_0/0.14)] ${
            isLight ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(20_22_21/0.86)] text-white"
          }`}
        >
          <p className={`${isLight ? "label-overline text-ink-muted" : "label-overline-on-dark"} mb-3`}>Review candidate</p>
          <h2 id={`${id}-heading`} className={`font-serif text-2xl font-bold uppercase tracking-tight sm:text-3xl`}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ServiceLandingHeroCandidate({ tone }: { tone: Tone }) {
  const isLight = tone === "light";
  return (
    <CandidateShell
      id={`review-service-landing-hero-${tone}`}
      title={`Service landing hero (${tone})`}
      tone={tone}
    >
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-end">
        <div className="relative min-h-[380px] overflow-hidden border border-[color:var(--g200)] shadow-[0_22px_58px_rgb(0_0_0/0.24)]">
          <Image src="/ground-level/hero-primary.jpg" alt="" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          <div
            className={`absolute inset-0 ${
              isLight
                ? "bg-gradient-to-t from-[rgb(10_12_11/0.62)] via-[rgb(10_12_11/0.22)] to-transparent"
                : "bg-gradient-to-t from-[rgb(8_10_9/0.84)] via-[rgb(8_10_9/0.36)] to-transparent"
            }`}
            aria-hidden
          />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="eyebrow text-white">Commercial service page</p>
            <p className="mt-2 font-sans text-2xl font-semibold uppercase text-white sm:text-3xl">Excavation and Site Prep</p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80">
              Directly inspired by the approved hero: image-led authority, layered atmospherics, and one decisive conversion route.
            </p>
          </div>
          <div className="absolute top-5 right-5 h-16 w-16 border border-[color:var(--y)]/65" aria-hidden />
        </div>
        <div
          className={`-translate-y-8 border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-6 shadow-[0_16px_40px_rgb(0_0_0/0.16)] ${
            isLight ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(24_26_25/0.9)] text-white"
          }`}
        >
          <p className="eyebrow text-[color:var(--y)]">Landing conversion stack</p>
          <p className={`mt-2 font-sans text-xl font-semibold uppercase ${isLight ? "text-ink" : "text-white"}`}>Built for PM-ready intake</p>
          <p className={`text-sm leading-relaxed ${isLight ? "text-ink-muted" : "text-white/78"}`}>
            Built for service landers with region-first context, credential cues, and immediate quote/consult action.
          </p>
          <div className="mt-4 h-px w-full bg-[color:var(--y)]/35" aria-hidden />
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${isLight ? "text-ink" : "text-white/86"}`}>15+ Years field execution</p>
            <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${isLight ? "text-ink" : "text-white/86"}`}>500+ Commercial projects</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#contact" className="cta-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]">
              Request estimate
            </a>
            <a
              href="#coverage"
              className={`px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] ${
                isLight ? "border border-ink text-ink" : "border border-white/28 text-white"
              }`}
            >
              Coverage
            </a>
          </div>
        </div>
      </div>
    </CandidateShell>
  );
}

function AboutMeCandidate({ tone }: { tone: Tone }) {
  const isLight = tone === "light";
  return (
    <CandidateShell id={`review-about-me-${tone}`} title={`About me (${tone})`} tone={tone}>
      <div className="mt-8 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
        <div className="relative ml-0 h-72 overflow-hidden border border-[color:var(--g200)] lg:ml-6 shadow-[0_20px_48px_rgb(0_0_0/0.22)]">
          <Image src="/ground-level/excavation-1.jpg" alt="" fill className="object-cover" sizes="280px" />
          <div className={`absolute inset-0 ${isLight ? "bg-gradient-to-t from-[rgb(0_0_0/0.36)] to-transparent" : "bg-gradient-to-t from-[rgb(0_0_0/0.62)] to-transparent"}`} aria-hidden />
          <div className="absolute left-0 top-0 h-20 w-20 border-r border-b border-[color:var(--y)]/70" aria-hidden />
          <p className="absolute bottom-4 left-4 eyebrow text-white">Founder profile</p>
        </div>
        <div className={`relative border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-6 shadow-[0_14px_34px_rgb(0_0_0/0.12)]`}>
          <p className="eyebrow text-[color:var(--y)]">Founder story</p>
          <p className="mt-3 font-sans text-2xl font-semibold uppercase text-ink">From field operator to project lead</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            A profile-style section for trust pages with chronology, credentials, and why the leadership approach matters for delivery.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            <li className="border border-[color:var(--g200)] p-3 text-xs text-ink">15+ years in excavation logistics</li>
            <li className="border border-[color:var(--g200)] p-3 text-xs text-ink">Focused on schedule certainty</li>
          </ul>
        </div>
      </div>
    </CandidateShell>
  );
}

function FooterCandidate({ tone }: { tone: Tone }) {
  const panel = tone === "light" ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(19_21_20/0.82)] text-white";
  return (
    <CandidateShell id={`review-footer-${tone}`} title={`Footer (${tone})`} tone={tone}>
      <footer className={`relative mt-8 overflow-hidden border border-[color:var(--g200)] ${panel}`}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[color:var(--y)]/45" aria-hidden />
        <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
          <div className="relative">
            <p className="font-sans text-xl font-semibold uppercase">Ground Level Contracting</p>
            <p className={`mt-3 text-sm ${tone === "light" ? "text-ink-muted" : "text-white/70"}`}>
              Footer candidate with uneven column masses, map/contact emphasis, and a legal rail.
            </p>
          </div>
          <div>
            <p className="eyebrow text-[color:var(--y)]">Services</p>
            <ul className={`mt-3 space-y-2 text-sm ${tone === "light" ? "text-ink-muted" : "text-white/78"}`}>
              <li>Excavation</li>
              <li>Grading</li>
              <li>Drainage</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-[color:var(--y)]">Company</p>
            <ul className={`mt-3 space-y-2 text-sm ${tone === "light" ? "text-ink-muted" : "text-white/78"}`}>
              <li>About</li>
              <li>Safety</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="border-l border-[color:var(--g200)] pl-5">
            <p className="eyebrow text-[color:var(--y)]">Contact</p>
            <p className="mt-3 text-sm">{PHONE_DISPLAY}</p>
            <p className={`mt-2 text-sm ${tone === "light" ? "text-ink-muted" : "text-white/78"}`}>{EMAIL_ADDRESS}</p>
          </div>
        </div>
      </footer>
    </CandidateShell>
  );
}

function PortfolioGalleryCandidate({ tone }: { tone: Tone }) {
  const isLight = tone === "light";
  return (
    <CandidateShell id={`review-portfolio-${tone}`} title={`Portfolio gallery (${tone})`} tone={tone}>
      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="relative min-h-[300px] overflow-hidden border border-[color:var(--g200)] lg:col-span-7">
          <Image src="/ground-level/equipment-wide.jpg" alt="" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
          <div className={`absolute inset-0 ${isLight ? "bg-gradient-to-t from-[rgb(0_0_0/0.35)] to-transparent" : "bg-gradient-to-t from-[rgb(0_0_0/0.72)] to-transparent"}`} />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="eyebrow text-ink">Featured project</p>
            <p className="mt-2 font-sans text-xl font-semibold uppercase">Industrial pad expansion</p>
          </div>
        </div>
        <div className="grid gap-4 lg:col-span-5">
          {["/ground-level/hero-primary.jpg", "/ground-level/excavation-1.jpg"].map((src) => (
            <div key={src} className="relative min-h-[140px] overflow-hidden border border-[color:var(--g200)]">
              <Image src={src} alt="" fill className="object-cover" sizes="(min-width: 1024px) 38vw, 100vw" />
            </div>
          ))}
          <div className="border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-4 text-ink shadow-[0_10px_24px_rgb(0_0_0/0.1)]">
            <p className="eyebrow text-[color:var(--y)]">Project tags</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">Mass grading · Utility prep · Drainage tie-ins</p>
          </div>
        </div>
      </div>
    </CandidateShell>
  );
}

function WhyChooseUsCandidate({ tone }: { tone: Tone }) {
  const itemTone = tone === "light" ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(24_26_25/0.82)] text-white";
  return (
    <CandidateShell id={`review-why-choose-us-${tone}`} title={`Why choose us (${tone})`} tone={tone}>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <article key={n} className={`relative border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-5 shadow-[0_12px_30px_rgb(0_0_0/0.14)] ${itemTone} ${n === 2 ? "lg:-translate-y-3" : ""}`}>
            <p className="eyebrow text-[color:var(--y)]">0{n}</p>
            <p className="mt-2 font-sans text-lg font-semibold uppercase">Reason headline</p>
            <p className={`mt-3 text-sm leading-relaxed ${tone === "light" ? "text-ink-muted" : "text-white/76"}`}>
              Benefit-oriented reason card with asymmetrical offset rhythm and clear scan hierarchy.
            </p>
          </article>
        ))}
      </div>
    </CandidateShell>
  );
}

function ParallaxHeroCandidate({ tone }: { tone: Tone }) {
  const isLight = tone === "light";
  return (
    <CandidateShell id={`review-parallax-hero-${tone}`} title={`Parallax hero full width (${tone})`} tone={tone}>
      <div className="relative mt-8 min-h-[72vh] overflow-hidden border border-[color:var(--g200)]">
        <Image src="/ground-level/hero-primary.jpg" alt="" fill className="object-cover object-center [transform:scale(1.1)]" sizes="100vw" />
        <div
          className={`absolute inset-0 ${
            isLight
              ? "bg-gradient-to-t from-[rgb(9_12_11/0.58)] via-[rgb(10_12_11/0.24)] to-[rgb(255_255_255/0.04)]"
              : "bg-gradient-to-t from-[rgb(7_9_8/0.84)] via-[rgb(8_10_9/0.45)] to-transparent"
          }`}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_56%_at_76%_20%,color-mix(in_srgb,var(--y)_14%,transparent),transparent_68%)]"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[color:var(--y)]/45" aria-hidden />

        <div className="absolute bottom-8 left-8 right-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div className="max-w-2xl rounded-sm border border-white/12 bg-[rgb(10_12_11/0.48)] p-6 text-white shadow-[0_24px_70px_rgb(0_0_0/0.38)] backdrop-blur-md">
            <p className="eyebrow text-white">Parallax concept</p>
            <p className="mt-3 font-sans text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
              Full-width momentum section
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/82">
              Refactored to match approved hero inspiration: cinematic media field, layered darkness, yellow punctuation, and an offset conversion slab.
            </p>
            <div className="mt-6 h-px w-full max-w-md bg-[color:var(--y)]/42" aria-hidden />
          </div>
          <div
            className={`border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-5 shadow-[0_18px_44px_rgb(0_0_0/0.2)] ${
              isLight ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(24_26_25/0.9)] text-white"
            }`}
          >
            <p className="eyebrow text-[color:var(--y)]">Deployment CTA</p>
            <p className={`mt-2 font-sans text-xl font-semibold uppercase ${isLight ? "text-ink" : "text-white"}`}>Book site review call</p>
            <a href="#contact" className="cta-primary mt-5 inline-block px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em]">
              Start consultation
            </a>
          </div>
        </div>
      </div>
    </CandidateShell>
  );
}

function CinematicVideoCtaCandidate({ tone }: { tone: Tone }) {
  const isLight = tone === "light";
  return (
    <CandidateShell id={`review-cinematic-video-cta-${tone}`} title={`Cinematic video CTA (${tone})`} tone={tone}>
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
        <div className="relative min-h-[300px] overflow-hidden border border-[color:var(--g200)]">
          <Image src="/ground-level/equipment-wide.jpg" alt="" fill className="object-cover" sizes="(min-width: 1024px) 64vw, 100vw" />
          <div className={`absolute inset-0 ${isLight ? "bg-[rgb(0_0_0/0.28)]" : "bg-[rgb(0_0_0/0.64)]"}`} />
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[color:var(--y)] bg-[rgb(0_0_0/0.55)] px-6 py-5 eyebrow text-white">
            Play reel
          </button>
        </div>
        <div
          className={`border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-6 shadow-[0_14px_36px_rgb(0_0_0/0.16)] ${
            isLight ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(24_26_25/0.9)] text-white"
          }`}
        >
          <p className={`font-sans text-xl font-semibold uppercase ${isLight ? "text-ink" : "text-white"}`}>Ready to move from concept to excavation?</p>
          <p className={`mt-3 text-sm leading-relaxed ${isLight ? "text-ink-muted" : "text-white/78"}`}>CTA-focused companion panel with action-first hierarchy for video-led sections.</p>
          <a href="#contact" className="cta-primary mt-6 inline-block px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em]">Book consultation</a>
        </div>
      </div>
    </CandidateShell>
  );
}

function CoverageMapCandidate({ tone }: { tone: Tone }) {
  const panelTone = tone === "light" ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(20_22_21/0.82)] text-white";
  return (
    <CandidateShell id={`review-coverage-map-${tone}`} title={`Coverage map (${tone})`} tone={tone}>
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(300px,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div className={`border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] p-6 ${panelTone}`}>
          <p className="eyebrow text-[color:var(--y)]">Service territory</p>
          <p className="mt-2 font-sans text-xl font-semibold uppercase">Barrie, Midland, Orillia, Simcoe County</p>
          <ul className={`mt-4 space-y-2 text-sm ${tone === "light" ? "text-ink-muted" : "text-white/78"}`}>
            <li>Rapid dispatch lanes</li>
            <li>Commercial-first scheduling</li>
            <li>Regional project support</li>
          </ul>
        </div>
        <div className="relative min-h-[280px] overflow-hidden border border-[color:var(--g200)] bg-[color:var(--g100)]">
          <Image src="/ground-level/equipment-wide.jpg" alt="" fill className="object-cover opacity-45" sizes="(min-width: 1024px) 52vw, 100vw" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-[70%] w-[78%] border-2 border-dashed border-[color:var(--y)]/65" />
          </div>
        </div>
      </div>
    </CandidateShell>
  );
}

function BadgesOfTrustCandidate({ tone }: { tone: Tone }) {
  const tileTone = tone === "light" ? "bg-[color:var(--brand-canvas)] text-ink" : "bg-[rgb(20_22_21/0.84)] text-white";
  return (
    <CandidateShell id={`review-badges-trust-${tone}`} title={`Badges of trust (${tone})`} tone={tone}>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {["Insured", "Safety", "Compliance", "Equipment", "Dispatch"].map((badge, i) => (
          <div
            key={badge}
            className={`border border-[color:var(--g200)] border-t-[4px] border-t-[color:var(--y)] p-4 text-center shadow-[0_8px_22px_rgb(0_0_0/0.12)] ${tileTone} ${i === 2 ? "lg:-translate-y-3" : ""}`}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center border border-[color:var(--g200)] bg-[color:var(--g100)] text-[color:var(--y)]">
              ✓
            </div>
            <p className="mt-3 eyebrow text-ink">{badge}</p>
          </div>
        ))}
      </div>
    </CandidateShell>
  );
}

function EstimatorBandCandidate() {
  return (
    <CandidateShell id="review-estimator-band" title="Rapid estimator band" tone="light">
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-center">
        <div className="relative border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] p-6 shadow-[0_16px_40px_rgb(0_0_0/0.14)]">
          <div className="absolute -top-3 right-6 border border-[color:var(--y)]/50 bg-[color:var(--brand-canvas)] px-3 py-1 eyebrow text-[color:var(--y)]">
            24-hour turnaround
          </div>
          <p className="font-sans text-2xl font-semibold uppercase text-ink">Project estimator intake</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Form-first conversion section for budgets, timelines, and scope categories with quick routing into quote workflows.
          </p>
        </div>
        <div className="grid gap-3">
          {["Project type", "Site location", "Target start window"].map((field) => (
            <div key={field} className="border border-[color:var(--g200)] bg-white px-4 py-3 text-sm text-ink">
              {field}
            </div>
          ))}
          <a href="#contact" className="cta-primary mt-2 inline-block px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
            Submit pre-brief
          </a>
        </div>
      </div>
    </CandidateShell>
  );
}

function BeforeAfterSliderCandidate() {
  return (
    <CandidateShell id="review-before-after-slider" title="Before/after comparison rail" tone="dark">
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div className="relative min-h-[320px] overflow-hidden border border-[color:var(--g200)]">
          <Image src="/ground-level/excavation-1.jpg" alt="" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          <div className="absolute inset-y-0 left-1/2 w-[2px] bg-[color:var(--y)]" aria-hidden />
          <div className="absolute left-[calc(50%-20px)] top-1/2 -translate-y-1/2 rounded-full border border-[color:var(--y)] bg-[rgb(0_0_0/0.65)] px-3 py-2 eyebrow text-white">
            Drag
          </div>
          <div className="absolute left-4 top-4 border border-white/30 bg-[rgb(0_0_0/0.45)] px-3 py-1.5 eyebrow text-white">
            Before
          </div>
          <div className="absolute right-4 top-4 border border-white/30 bg-[rgb(0_0_0/0.45)] px-3 py-1.5 eyebrow text-white">
            After
          </div>
        </div>
        <div className="border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[rgb(24_26_25/0.84)] p-6 text-white shadow-[0_16px_40px_rgb(0_0_0/0.24)]">
          <p className="font-sans text-xl font-semibold uppercase">Visual proof section</p>
          <p className="mt-3 text-sm leading-relaxed text-white/78">
            A conversion-oriented trust block for showcasing measurable transformation from rough ground to ready-build condition.
          </p>
        </div>
      </div>
    </CandidateShell>
  );
}

function EquipmentFleetCandidate() {
  return (
    <CandidateShell id="review-equipment-fleet" title="Equipment fleet showcase" tone="light">
      <div className="mt-8 grid gap-5 lg:grid-cols-12">
        <div className="border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] p-6 lg:col-span-5">
          <p className="eyebrow text-[color:var(--y)]">Fleet readiness</p>
          <p className="mt-2 font-sans text-2xl font-semibold uppercase text-ink">Iron matched to scope</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Useful for capability pages where procurement teams want machine class confidence and uptime positioning.
          </p>
        </div>
        <div className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
          {["Excavators", "Dozers", "Compactors", "Haul units"].map((item, i) => (
            <div key={item} className={`relative min-h-[150px] overflow-hidden border border-[color:var(--g200)] ${i === 1 ? "sm:-translate-y-2" : ""}`}>
              <Image src="/ground-level/equipment-wide.jpg" alt="" fill className="object-cover" sizes="(min-width: 640px) 40vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.65)] to-transparent" />
              <p className="absolute bottom-3 left-3 eyebrow text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </CandidateShell>
  );
}

function SafetyTimelineCandidate() {
  return (
    <CandidateShell id="review-safety-timeline" title="Safety and QA timeline" tone="dark">
      <div className="relative mt-8">
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[color:var(--y)]/50 sm:left-6" aria-hidden />
        <ol className="space-y-4">
          {["Pre-task hazard review", "Daily site walk", "Compaction and grade checks", "Closeout and handoff"].map((step, i) => (
            <li key={step} className="relative pl-12 sm:pl-16">
              <span className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--y)] bg-[rgb(0_0_0/0.45)] eyebrow text-white sm:left-2">
                {i + 1}
              </span>
              <div className="border border-[color:var(--g200)] bg-[rgb(22_24_23/0.82)] p-4 text-white shadow-[0_10px_28px_rgb(0_0_0/0.2)]">
                <p className="font-sans text-lg font-semibold uppercase">{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </CandidateShell>
  );
}

function SectorGridCandidate() {
  return (
    <CandidateShell id="review-sector-grid" title="Industries served grid" tone="light">
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["Industrial", "Commercial", "Civil", "Institutional"].map((sector, i) => (
          <article key={sector} className={`relative overflow-hidden border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] p-5 shadow-[0_12px_28px_rgb(0_0_0/0.1)] ${i === 2 ? "lg:-translate-y-2" : ""}`}>
            <div className="absolute right-0 top-0 h-12 w-12 border-l border-b border-[color:var(--y)]/50" aria-hidden />
            <p className="font-sans text-lg font-semibold uppercase text-ink">{sector}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">Sector-specific constraints, sequencing, and delivery expectations.</p>
          </article>
        ))}
      </div>
      <div className="mt-6 max-w-2xl border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-4 text-ink shadow-[0_10px_24px_rgb(0_0_0/0.1)]">
        <p className="text-sm leading-relaxed text-ink-muted">
          Secondary narrative rail balances the 4-card grid and prevents a flat, evenly tiled appearance.
        </p>
      </div>
    </CandidateShell>
  );
}

function TestimonialWallCandidate() {
  return (
    <CandidateShell id="review-testimonial-wall" title="Testimonial wall mosaic" tone="dark">
      <div className="mt-8 grid gap-4 lg:grid-cols-6">
        <article className="border border-[color:var(--g200)] bg-[rgb(22_24_23/0.86)] p-5 text-white shadow-[0_10px_26px_rgb(0_0_0/0.22)] lg:col-span-4">
          <p className="text-sm leading-relaxed text-white/85">
            “Their crew coordinated utilities, earthworks, and schedule pressure without losing quality. Site readiness happened ahead of our critical path.”
          </p>
          <p className="mt-4 eyebrow text-[color:var(--y)]">Project manager, Barrie</p>
        </article>
        <article className="border border-[color:var(--g200)] bg-[rgb(22_24_23/0.86)] p-5 text-white shadow-[0_10px_26px_rgb(0_0_0/0.22)] lg:col-span-2 lg:-translate-y-3">
          <p className="text-sm leading-relaxed text-white/85">“Documentation and closeout were as strong as execution.”</p>
          <p className="mt-4 eyebrow text-[color:var(--y)]">Site supervisor</p>
        </article>
      </div>
    </CandidateShell>
  );
}

function SpecDownloadCandidate() {
  return (
    <CandidateShell id="review-spec-download" title="Spec and compliance download block" tone="light">
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-center">
        <div className="border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-6">
          <p className="font-sans text-2xl font-semibold uppercase text-ink">Spec package access</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Download-ready section for insurance certs, WSIB letters, safety outlines, and method summaries.
          </p>
        </div>
        <div className="grid gap-3">
          {["Insurance certificate", "Safety program summary", "Method statement template"].map((doc) => (
            <button key={doc} type="button" className="flex items-center justify-between border border-[color:var(--g200)] bg-white px-4 py-3 text-left text-sm text-ink">
              <span>{doc}</span>
              <span className="eyebrow text-[color:var(--y)]">PDF</span>
            </button>
          ))}
        </div>
      </div>
    </CandidateShell>
  );
}

function PartnerStripCandidate() {
  return (
    <CandidateShell id="review-partner-strip" title="Partner and supplier strip" tone="dark">
      <div className="mt-8 border border-[color:var(--g200)] bg-[rgb(20_22_21/0.82)] p-6">
        <p className="eyebrow text-[color:var(--y)]">Supplier ecosystem</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {["Aggregate", "Concrete", "Trucking", "Utilities", "Survey", "Traffic"].map((name, i) => (
            <div key={name} className={`border border-white/14 px-3 py-4 text-center text-sm text-white/84 ${i % 2 === 1 ? "sm:-translate-y-1" : ""}`}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </CandidateShell>
  );
}

export function HomeReviewCandidates() {
  return (
    <div id="home-review-candidates" className="border-t-4 border-[color:var(--y)]/40">
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 py-10 sm:px-6 sm:py-12">
        <p className="label-overline mb-2 text-ink-muted">Home review candidates</p>
        <h2 className="font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
          <span className="text-ink">Candidate </span>
          <span className="text-[color:var(--y)]">library</span>
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
          Candidate-only section library for approve/reject passes. Each section type includes a Light and Dark variant.
        </p>
      </div>

      <ServiceLandingHeroCandidate tone="light" />
      <ServiceLandingHeroCandidate tone="dark" />
      <AboutMeCandidate tone="light" />
      <AboutMeCandidate tone="dark" />
      <FooterCandidate tone="light" />
      <FooterCandidate tone="dark" />
      <PortfolioGalleryCandidate tone="light" />
      <PortfolioGalleryCandidate tone="dark" />
      <WhyChooseUsCandidate tone="light" />
      <WhyChooseUsCandidate tone="dark" />
      <ParallaxHeroCandidate tone="light" />
      <ParallaxHeroCandidate tone="dark" />
      <CinematicVideoCtaCandidate tone="light" />
      <CinematicVideoCtaCandidate tone="dark" />
      <CoverageMapCandidate tone="light" />
      <CoverageMapCandidate tone="dark" />
      <BadgesOfTrustCandidate tone="light" />
      <BadgesOfTrustCandidate tone="dark" />

      {/* Additional brainstorming sections */}
      <EstimatorBandCandidate />
      <BeforeAfterSliderCandidate />
      <EquipmentFleetCandidate />
      <SafetyTimelineCandidate />
      <SectorGridCandidate />
      <TestimonialWallCandidate />
      <SpecDownloadCandidate />
      <PartnerStripCandidate />
    </div>
  );
}
