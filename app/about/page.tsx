import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPageShell } from "@/components/templates/MarketingPageShell";
import { SEO_TITLES } from "@/lib/site/registry";
import { CORE_COPY } from "@/lib/site/copy";

export const metadata: Metadata = {
  title: SEO_TITLES.about,
  description: CORE_COPY.about.body,
};

export default function AboutPage() {
  return (
    <MarketingPageShell
      id="about-company"
      eyebrow={CORE_COPY.about.eyebrow}
      title={
        <>
          About <span className="text-[color:var(--y)]">Ground Level</span>
        </>
      }
      lede={CORE_COPY.about.heading}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-xl border border-[color:var(--g200)] bg-white/80 p-5 backdrop-blur-sm">
          <h2 className="font-serif text-xl font-semibold uppercase tracking-tight text-ink">Operating principle</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{CORE_COPY.about.body}</p>
          <Link href={CORE_COPY.about.primaryCta.href} className="cta-primary mt-4 inline-block px-4 py-2 text-xs tracking-wide">
            {CORE_COPY.about.primaryCta.label}
          </Link>
        </article>
        <article className="rounded-xl border border-[color:var(--g200)] bg-white/80 p-5 backdrop-blur-sm">
          <h2 className="font-serif text-xl font-semibold uppercase tracking-tight text-ink">Credentials</h2>
          <ul className="mt-2 space-y-2">
            {CORE_COPY.about.credentials.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-ink-muted">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {CORE_COPY.about.supportLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-md border border-[color:var(--g200)] px-3 py-2 text-xs text-ink">
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </MarketingPageShell>
  );
}
