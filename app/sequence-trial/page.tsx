import { SequenceHierarchyTrialSet } from "@/components/ground-level/home-review-candidates/SequenceHierarchyTrialSet";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Sequence Trial | Ground Level Contracting",
  description: "Experimental Ground Level Contracting section sequence trial for internal review.",
  path: "/sequence-trial/",
  noIndex: true,
});

export default function SequenceTrialPage() {
  if (process.env.NODE_ENV === "production" && process.env.ENABLE_EXPERIMENTAL_ROUTES !== "true") {
    notFound();
  }

  return (
    <div className="relative z-10">
      <section
        id="sequence-trial-divider"
        className="border-y-2 border-[color:var(--y)]/45 bg-[linear-gradient(180deg,rgb(255_255_255),rgb(248_248_246))]"
        aria-labelledby="sequence-trial-divider-heading"
      >
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 py-8 sm:px-6 sm:py-10">
          <p className="label-overline mb-2 text-ink-muted">Trial route — page hierarchy mode</p>
          <h1 id="sequence-trial-divider-heading" className="font-serif text-2xl font-semibold uppercase tracking-tight text-ink sm:text-3xl">
            <span className="text-ink">Sequence hierarchy </span>
            <span className="text-[color:var(--y)]">build set</span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Ten sequence sections arranged in strict dark/light alternation to test live page rhythm and promotion readiness.
          </p>
        </div>
      </section>
      <SequenceHierarchyTrialSet />
    </div>
  );
}
