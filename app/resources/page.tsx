import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/site/metadata";
import { RESOURCE_ARTICLES } from "@/lib/site/resources-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Resources | Ground Level Contracting",
  description:
    "Process guides and compliance notes for commercial excavation, grading, foundations, and snow operations across Barrie and Simcoe County.",
  path: "/resources/",
});

export default function ResourcesIndexPage() {
  return (
    <>
      <section className="band-dark-field section-major relative border-b border-white/10">
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 pb-12 pt-[calc(var(--header)+2.5rem)] sm:px-6 lg:px-10">
          <p className="eyebrow text-white">Resources</p>
          <h1 className="mt-3 max-w-4xl font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            Field guides for commercial site teams
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.72] text-white/90 sm:text-base">
            Authoritative process and compliance notes for developers, GCs, and property managers across Simcoe County.
          </p>
        </div>
      </section>

      <section className="section-major band-light">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <ul className="grid gap-6 md:grid-cols-2">
            {RESOURCE_ARTICLES.map((article) => (
              <li
                key={article.slug}
                className="bespoke-surface panel-machined border border-[color:var(--g200)] bg-white p-6 sm:p-8"
              >
                <p className="eyebrow text-ink">{article.eyebrow}</p>
                <h2 className="mt-3 font-serif text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                  <Link
                    href={`/resources/${article.slug}/`}
                    className="hover:text-[color:var(--y)]"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 text-[15px] leading-[1.72] text-ink-muted sm:text-base">
                  {article.description}
                </p>
                <Link
                  href={`/resources/${article.slug}/`}
                  className="cta-primary mt-6 inline-flex min-h-[44px] items-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]"
                >
                  Read guide
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
