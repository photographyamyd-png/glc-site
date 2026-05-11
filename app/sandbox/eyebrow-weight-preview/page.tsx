import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/site/metadata";
import { NAV_LINKS } from "@/lib/site/registry";
import styles from "./preview.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Eyebrow weight preview | Sandbox",
  description:
    "Reference strip for condensed chrome after global eyebrow / overline weight 600 rollout (sandbox).",
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
        Production stack: <code className="text-ink">.eyebrow</code>,{" "}
        <code className="text-ink">.label-overline</code>, and{" "}
        <code className="text-ink">.label-overline-on-dark</code> in{" "}
        <code className="text-ink">globals.css</code> use Barlow Condensed at{" "}
        <code className="text-ink">font-weight: 600</code>. Link affordances at{" "}
        <code className="text-ink">tracking-[0.14em]</code> and tiny{" "}
        <code className="text-ink">font-label</code> chips use{" "}
        <code className="text-ink">font-semibold</code> so they stay aligned with that default.
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
        <p className={styles.sectionLabel}>Live</p>
        <div className={styles.darkBand}>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.1] py-2">
            <p className="eyebrow text-white">{NAV_LINKS.utility.location}</p>
            <div className="flex items-center gap-4 eyebrow text-white">
              <span className="text-white">{NAV_LINKS.utility.phoneDisplay}</span>
              <span className="hidden text-white/70 sm:inline">{NAV_LINKS.utility.rotator[2]}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-ink">
          2. Section eyebrow (light band)
        </h2>
        <p className={styles.sectionLabel}>Live</p>
        <div className={styles.lightBand}>
          <p className="eyebrow text-ink">Operating principle</p>
          <p className="mt-2 font-sans text-sm text-ink-muted">Body line for contrast only.</p>
        </div>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-ink">
          3. Label overline on dark
        </h2>
        <p className={styles.sectionLabel}>Live</p>
        <div className={styles.darkBand}>
          <p className="label-overline-on-dark">Website refresh</p>
        </div>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-ink">
          4. Testimonials tab strip (dark panel)
        </h2>
        <p className={styles.sectionLabel}>Live</p>
        <div className={styles.tabPanel}>
          <button
            type="button"
            className="min-h-[44px] border border-[color:var(--y)] bg-[color:var(--ink-deep)] px-3 py-2 text-left text-white transition-colors sm:px-4 eyebrow"
            aria-hidden
          >
            <span className="block tracking-[0.18em] opacity-90">Quote 01</span>
            <span className="mt-1 block line-clamp-2 tracking-[0.14em]">{SAMPLE_ATTRIBUTION}</span>
          </button>
        </div>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-ink">
          5. Link affordance (0.14em tracking)
        </h2>
        <p className={styles.sectionLabel}>Live</p>
        <div className={styles.lightBand}>
          <a
            href="#preview"
            className="mt-2 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--y)] underline decoration-[color:var(--y)]/40 underline-offset-4"
          >
            View service details
          </a>
        </div>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-ink">
          6. font-label chip (10px)
        </h2>
        <p className={styles.sectionLabel}>Live</p>
        <div className={styles.lightBand}>
          <div className={styles.chipStrip}>
            <span className="font-label text-[10px] font-semibold uppercase tracking-wide text-ink">
              Field note
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
