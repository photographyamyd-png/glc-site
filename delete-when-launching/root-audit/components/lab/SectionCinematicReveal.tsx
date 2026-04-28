import Image from "next/image";
import { siteImages } from "@/lib/site-images";

/**
 * Archetype — Cinematic reveal (§VI).
 * MOBILE_ALTER_EGO: horizontal snap reel; desktop = clipped polygon row.
 */
const frames = [
  { id: "01", label: "Mid-rise core", image: siteImages.portfolio01 },
  { id: "02", label: "Field operations", image: siteImages.portfolio02 },
  { id: "03", label: "Earthwork tempo", image: siteImages.portfolio03 },
];

export function SectionCinematicReveal() {
  return (
    <section id="portfolio" className="section-major scroll-mt-24 bg-canvas px-0 sm:px-8">
      <div className="view-reveal mx-auto max-w-[min(100%,1200px)] px-4 sm:px-0">
        <div className="mb-12 flex flex-col gap-6 border-b border-black/10 pb-10 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl border-l-4 border-structural/35 pl-6 sm:pl-8">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-4xl sm:leading-tight">
              Portfolio — field, not renders
            </h2>
            <p className="mt-6 font-serif text-base leading-[1.75] text-ink-muted sm:text-lg">
              Clipped masks on desktop; mobile horizontal reel — not three identical
              stacks.
            </p>
          </div>
          <p className="shrink-0 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-ink/50">
            Scroll X · mobile
          </p>
        </div>
      </div>

      <div className="view-reveal snap-strip flex gap-6 overflow-x-auto px-4 pb-6 sm:hidden">
        {frames.map((f) => (
          <div
            key={f.id}
            className="relative h-60 w-[78vw] max-w-[300px] shrink-0 overflow-hidden border border-black/12 bg-white panel-machined"
            style={{ clipPath: "inset(0)" }}
          >
            <Image
              src={f.image.src}
              alt={f.image.alt}
              fill
              className="object-cover"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/55 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 font-mono text-[10px] text-white/85">
              {f.id}
            </span>
            <span className="absolute bottom-4 left-4 text-sm font-semibold text-white">
              {f.label}
            </span>
          </div>
        ))}
      </div>

      <div className="view-reveal mx-auto hidden max-w-[min(100%,1200px)] grid-cols-3 gap-8 px-4 sm:grid sm:px-0">
        {frames.map((f, i) => (
          <div
            key={f.id}
            className={`relative h-72 overflow-hidden border border-black/12 bg-white shadow-lg ${
              i === 0 ? "translate-y-4" : i === 1 ? "-translate-y-3" : "translate-y-8"
            }`}
            style={{
              clipPath:
                i === 0
                  ? "polygon(0 8%, 100% 0, 100% 92%, 0 100%)"
                  : i === 1
                    ? "polygon(0 0, 100% 6%, 100% 100%, 0 94%)"
                    : "polygon(4% 0, 100% 0, 96% 100%, 0 100%)",
            }}
          >
            <Image
              src={f.image.src}
              alt={f.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/45 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 font-mono text-[10px] text-white/85">
              {f.id}
            </span>
            <span className="absolute bottom-4 left-4 text-sm font-semibold text-white">
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
