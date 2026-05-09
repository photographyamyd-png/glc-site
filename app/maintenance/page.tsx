import type { Metadata } from "next";
import Image from "next/image";
import { footerCloneSiteData } from "@/content/footer-clone-data";
import { NAV_LINKS, SEO_TITLES } from "@/lib/site/registry";

const HERO_IMAGE_SRC = "/images/services/Excavation/excavation-016.jpg";
const LOGO_MARK_SRC = "/images/Logos/ground-level-mark.png";

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
  const { name, slogan } = footerCloneSiteData;

  return (
    <section
      className="hero-stage band-dark-field relative isolate min-h-[100dvh] overflow-hidden"
      aria-labelledby="maintenance-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_IMAGE_SRC}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-bg-image object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.94)] via-[rgb(10_12_11/0.82)] to-[rgb(10_12_11/0.35)] lg:via-[rgb(10_12_11/0.68)] lg:to-[rgb(10_12_11/0.22)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.78)] via-transparent to-[rgb(10_12_11/0.38)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            background:
              "radial-gradient(ellipse 82% 66% at 72% 38%, rgb(242 183 5 / 0.38) 0%, transparent 58%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          aria-hidden
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[min(100%,var(--max-bleed))] flex-col justify-center px-7 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto w-full max-w-4xl lg:mx-0">
          <div className="mb-10 flex flex-col items-center gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-start">
            <div className="relative shrink-0">
              <div
                className="pointer-events-none absolute -inset-3 opacity-70 sm:-inset-4"
                aria-hidden
                style={{
                  background:
                    "linear-gradient(135deg, rgb(199 120 26 / 0.22), rgb(44 74 56 / 0.08), transparent 62%)",
                }}
              />
              <Image
                src={LOGO_MARK_SRC}
                alt={name}
                width={200}
                height={80}
                priority
                unoptimized
                className="relative h-14 w-auto max-h-[4.5rem] object-contain object-left sm:h-[4.5rem] sm:max-h-[5rem]"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="font-serif text-xl font-semibold uppercase leading-tight tracking-[-0.02em] text-white sm:text-2xl">
                {name}
              </p>
              <p className="mt-1.5 eyebrow text-[color:var(--y)]">
                {slogan}
              </p>
            </div>
          </div>

          <div className="border border-white/10 border-l-4 border-l-[var(--y)] bg-[rgb(10_12_11/0.5)] px-8 py-10 shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md panel-machined-dark sm:px-10">
            <p className="eyebrow text-white">
              Website refresh
            </p>
            <h1
              id="maintenance-heading"
              className="mt-4 font-serif text-3xl font-semibold uppercase leading-tight tracking-[-0.02em] text-white sm:text-4xl"
            >
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
              <p className="eyebrow text-white">
                Barrie • Simcoe County • Orillia
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-xl text-center eyebrow text-white lg:text-left">
            Excavation, grading, civil support &amp; commercial snow
          </p>
        </div>
      </div>
    </section>
  );
}
