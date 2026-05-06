import type { Metadata } from "next";
import { NAV_LINKS, SEO_TITLES } from "@/lib/site/registry";

export const metadata: Metadata = {
  title: SEO_TITLES.maintenance,
  description:
    "Ground Level Contracting is preparing a new web experience. Commercial excavation, grading, and site operations across Barrie and Simcoe County.",
  robots: { index: false, follow: false },
  openGraph: {
    title: SEO_TITLES.maintenance,
    description:
      "New website coming soon. Ground Level Contracting — Barrie, Simcoe County, Orillia.",
    type: "website",
  },
};

export default function MaintenancePage() {
  const { phoneDisplay, phoneHref } = NAV_LINKS.utility;

  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center bg-ink px-6 py-16 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage: `repeating-linear-gradient(
            -12deg,
            transparent,
            transparent 2px,
            rgba(242, 183, 5, 0.35) 2px,
            rgba(242, 183, 5, 0.35) 3px
          )`,
        }}
      />
      <div className="relative z-10 w-full max-w-lg border-l-4 border-[var(--y)] bg-[rgb(10,12,11,0.45)] px-8 py-10 backdrop-blur-md panel-machined-dark">
        <p className="font-label text-[11px] font-bold tracking-[0.14em] text-white/55">
          Ground Level Contracting
        </p>
        <h1 className="mt-4 font-serif text-3xl font-semibold uppercase leading-tight tracking-[-0.02em] text-white sm:text-4xl">
          New site
          <span className="block font-bold text-[var(--y)]">Coming soon</span>
        </h1>
        <p className="mt-6 text-[15px] leading-[1.72] text-white/90 sm:text-base">
          We are building an updated experience. Operations continue as usual —
          reach us by phone for dispatch and project inquiries.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={phoneHref}
            className="cta-primary inline-flex w-fit items-center gap-2 border border-[var(--y)] bg-[var(--y)] px-6 py-3 font-label text-xs font-extrabold uppercase tracking-[0.12em] text-ink transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--y)]"
          >
            Call {phoneDisplay}
          </a>
          <p className="font-label text-[11px] font-bold tracking-[0.14em] text-white/55">
            Barrie • Simcoe County • Orillia
          </p>
        </div>
      </div>
      <p className="relative z-10 mt-12 max-w-md text-center font-label text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
        Excavation, grading, civil support &amp; commercial snow
      </p>
    </div>
  );
}
