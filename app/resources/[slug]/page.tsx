import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResourceArticleJsonLd } from "@/components/seo/ResourceArticleJsonLd";
import { buildPageMetadata } from "@/lib/site/metadata";
import { getResourceArticle, getResourceSlugs } from "@/lib/site/resources-content";

export function generateStaticParams() {
  return getResourceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceArticle(slug);
  if (!article) {
    return buildPageMetadata({
      title: "Resource | Ground Level Contracting",
      description: "Ground Level Contracting field guides and process resources.",
      path: "/resources/",
    });
  }
  return buildPageMetadata({
    title: `${article.title} | Ground Level Contracting`,
    description: article.description,
    path: `/resources/${article.slug}/`,
  });
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getResourceArticle(slug);
  if (!article) notFound();

  return (
    <article className="relative">
      <ResourceArticleJsonLd article={article} />
      <section className="band-dark-field section-major relative border-b border-white/10">
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 pb-12 pt-[calc(var(--header)+2.5rem)] sm:px-6 lg:px-10">
          <p className="eyebrow text-white">{article.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.72] text-white/90 sm:text-base">
            {article.description}
          </p>
        </div>
      </section>

      <section className="section-major band-light">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-10">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-[15px] leading-[1.72] text-ink sm:text-base">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {article.faq?.length ? (
              <div>
                <h2 className="font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
                  FAQ
                </h2>
                <dl className="mt-4 space-y-4">
                  {article.faq.map((item) => (
                    <div key={item.q} className="border-l-4 border-[color:var(--y)] pl-5">
                      <dt className="font-semibold text-ink">{item.q}</dt>
                      <dd className="mt-2 text-[15px] leading-[1.72] text-ink-muted sm:text-base">
                        {item.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}
          </div>

          <div className="mt-12 border-t border-[color:var(--g200)] pt-8">
            <p className="eyebrow text-ink">Related service</p>
            <Link
              href={article.relatedServiceHref}
              className="cta-primary mt-4 inline-flex min-h-[44px] items-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]"
            >
              {article.relatedServiceLabel}
            </Link>
            <p className="mt-6">
              <Link href="/resources/" className="text-sm text-ink-muted underline underline-offset-4 hover:text-ink">
                ← All resources
              </Link>
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
