import Image from "next/image";

/**
 * Archetype — Watermark index (§X).
 * MOBILE_ALTER_EGO: nav becomes horizontal snap rail first (order-1); coordinates + legal follow — not the same column order as desktop grid.
 */
export function SectionWatermarkIndex() {
  return (
    <footer className="relative mt-12 overflow-hidden border-t-2 border-black/10 bg-canvas px-4 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute -right-32 bottom-0 opacity-[0.06] sm:-right-20">
        <Image
          src="/brand/claude-logic-logo.png"
          alt=""
          width={420}
          height={420}
          className="object-contain"
        />
      </div>

      <div className="view-reveal relative mx-auto max-w-[min(100%,1200px)] pt-4">
        <div className="flex flex-col gap-14 lg:grid lg:grid-cols-12 lg:gap-10">
          <nav
            className="order-1 flex flex-nowrap gap-4 overflow-x-auto pb-2 snap-x snap-mandatory text-sm font-semibold text-ink lg:order-2 lg:col-span-4 lg:flex-wrap lg:overflow-visible lg:pb-0 lg:snap-none"
            aria-label="Footer"
          >
            <a
              href="#impact"
              className="shrink-0 snap-start hover:underline hover:decoration-[color:var(--brand-yellow-deep)] hover:underline-offset-4"
            >
              Home
            </a>
            <a
              href="#spine"
              className="shrink-0 snap-start hover:underline hover:decoration-[color:var(--brand-yellow-deep)] hover:underline-offset-4"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="shrink-0 snap-start hover:underline hover:decoration-[color:var(--brand-yellow-deep)] hover:underline-offset-4"
            >
              Portfolio
            </a>
            <a
              href="#convert"
              className="shrink-0 snap-start hover:underline hover:decoration-[color:var(--brand-yellow-deep)] hover:underline-offset-4"
            >
              Contact
            </a>
          </nav>

          <div className="order-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.24em] text-ink-muted lg:order-1 lg:col-span-4">
            <p>HQ · Industrial District</p>
            <p className="mt-2">Dispatch · 24/7</p>
            <p className="mt-8 text-ink/40">Claude-Logic Construction</p>
          </div>

          <div className="order-3 lg:order-3 lg:col-span-4 lg:text-right">
            <p className="font-serif text-sm text-ink-muted">
              Phase 1 homepage laboratory — design DNA before site expansion (§II).
            </p>
            <p className="mt-4 text-xs text-ink-muted/80">
              © {new Date().getFullYear()} Claude-Logic Construction. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
