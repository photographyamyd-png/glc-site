import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/site/metadata";
import { NAV_LINKS } from "@/lib/site/registry";
import styles from "./preview.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Eyebrow weight preview | Sandbox",
  description:
    "Side-by-side preview of 700 vs 600 condensed label weight (sandbox only, no global CSS change).",
  path: "/sandbox/eyebrow-weight-preview/",
  noIndex: true,
});

const SAMPLE_ATTRIBUTION =
  "Marcus T., Project Manager — Commercial Developer, Barrie";

function sandboxHidden() {
  const isVercelPreview =
    process.env.VERCEL === "1" && process.env.VERCEL_ENV === "preview";
  return (
    process.env.NODE_ENV === "production" &&
    process.env.ENABLE_EXPERIMENTAL_ROUTES !== "true" &&
    !isVercelPreview
  );
}

function UtilityRailMock({ proposed }: { proposed: boolean }) {
  const inner = (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.1] py-2">
      <p className="eyebrow text-white">{NAV_LINKS.utility.location}</p>
      <div className="flex items-center gap-4 eyebrow text-white">
        <span className="text-white">{NAV_LINKS.utility.phoneDisplay}</span>
        <span className="hidden text-white/70 sm:inline">{NAV_LINKS.utility.rotator[2]}</span>
      </div>
    </div>
  );
  if (proposed) {
    return <div className={styles.proposed}>{inner}</div>;
  }
  return inner;
}

function TabMock({ proposed }: { proposed: boolean }) {
  const inner = (
    <button
      type="button"
      className="min-h-[44px] border border-[color:var(--y)] bg-[color:var(--ink-deep)] px-3 py-2 text-left text-white transition-colors sm:px-4 eyebrow"
      aria-hidden
    >
      <span className="block tracking-[0.18em] opacity-90">Quote 01</span>
      <span className="mt-1 block line-clamp-2 tracking-[0.14em]">{SAMPLE_ATTRIBUTION}</span>
    </button>
  );
  if (proposed) {
    return <div className={styles.proposed}>{inner}</div>;
  }
  return inner;
}

function LinkAffordanceMock({ proposed }: { proposed: boolean }) {
  const inner = (
    <a
      href="#preview"
      className="previewLink mt-2 inline-block text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--y)] underline decoration-[color:var(--y)]/40 underline-offset-4"
    >
      View service details
    </a>
  );
  if (proposed) {
    return <div className={styles.proposed}>{inner}</div>;
  }
  return inner;
}

function ChipMock({ proposed }: { proposed: boolean }) {
  const inner = (
    <span className="previewChip font-label text-[10px] font-bold uppercase tracking-wide text-ink">
      Field note
    </span>
  );
  if (proposed) {
    return (
      <div className={styles.chipStrip}>
        <div className={styles.proposed}>{inner}</div>
      </div>
    );
  }
  return <div className={styles.chipStrip}>{inner}</div>;
}

export default function EyebrowWeightPreviewPage() {
  if (sandboxHidden()) {
    notFound();
  }

  return (
    <main
      id="preview"
      className="mx-auto max-w-[min(100%,var(--max))] px-4 py-10 sm:px-6"
    >
      <p className="eyebrow text-[color:var(--y)]">Sandbox preview</p>
      <h1 className="mt-2 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
        Condensed label weight
      </h1>
      <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-ink-muted sm:text-base">
        Left: production tokens (700 on <code className="text-ink">.eyebrow</code> / overlines from{" "}
        <code className="text-ink">globals.css</code>). Right: same markup with scoped{" "}
        <code className="text-ink">font-weight: 600</code> inside this route only — no change to
        site-wide CSS until you approve.
      </p>
      <p className="mt-4 font-sans text-sm text-ink-muted">
        Local URL:{" "}
        <code className="text-ink">/sandbox/eyebrow-weight-preview/</code> — same visibility rules
        as{" "}
        <Link className="text-[color:var(--y)] underline underline-offset-2" href="/sandbox/">
          /sandbox/
        </Link>{" "}
        (404 in production unless Preview or{" "}
        <code className="text-ink">ENABLE_EXPERIMENTAL_ROUTES=true</code>).
      </p>

      <section className="mt-12 space-y-3">
        <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-ink">
          1. Utility rail (dark)
        </h2>
        <div className={styles.grid}>
          <div>
            <p className={styles.sectionLabel}>Current (700)</p>
            <div className={styles.darkBand}>
              <UtilityRailMock proposed={false} />
            </div>
          </div>
          <div>
            <p className={styles.sectionLabel}>Proposed (600, scoped)</p>
            <div className={styles.darkBand}>
              <UtilityRailMock proposed />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-ink">
          2. Section eyebrow (light band)
        </h2>
        <div className={styles.grid}>
          <div>
            <p className={styles.sectionLabel}>Current</p>
            <div className={styles.lightBand}>
              <p className="eyebrow text-ink">Operating principle</p>
              <p className="mt-2 font-sans text-sm text-ink-muted">Body line for contrast only.</p>
            </div>
          </div>
          <div>
            <p className={styles.sectionLabel}>Proposed</p>
            <div className={styles.lightBand}>
              <div className={styles.proposed}>
                <p className="eyebrow text-ink">Operating principle</p>
              </div>
              <p className="mt-2 font-sans text-sm text-ink-muted">Body line for contrast only.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-ink">
          3. Label overline on dark
        </h2>
        <div className={styles.grid}>
          <div>
            <p className={styles.sectionLabel}>Current</p>
            <div className={styles.darkBand}>
              <p className="label-overline-on-dark">Website refresh</p>
            </div>
          </div>
          <div>
            <p className={styles.sectionLabel}>Proposed</p>
            <div className={styles.darkBand}>
              <div className={styles.proposed}>
                <p className="label-overline-on-dark">Website refresh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-ink">
          4. Testimonials tab strip (dark panel)
        </h2>
        <div className={styles.grid}>
          <div>
            <p className={styles.sectionLabel}>Current</p>
            <div className={styles.tabPanel}>
              <TabMock proposed={false} />
            </div>
          </div>
          <div>
            <p className={styles.sectionLabel}>Proposed</p>
            <div className={styles.tabPanel}>
              <TabMock proposed />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-ink">
          5. Link affordance (0.14em tracking)
        </h2>
        <div className={styles.grid}>
          <div>
            <p className={styles.sectionLabel}>Current</p>
            <div className={styles.lightBand}>
              <LinkAffordanceMock proposed={false} />
            </div>
          </div>
          <div>
            <p className={styles.sectionLabel}>Proposed</p>
            <div className={styles.lightBand}>
              <LinkAffordanceMock proposed />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-ink">
          6. font-label chip (10px bold)
        </h2>
        <div className={styles.grid}>
          <div>
            <p className={styles.sectionLabel}>Current</p>
            <div className={styles.lightBand}>
              <ChipMock proposed={false} />
            </div>
          </div>
          <div>
            <p className={styles.sectionLabel}>Proposed</p>
            <div className={styles.lightBand}>
              <ChipMock proposed />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
