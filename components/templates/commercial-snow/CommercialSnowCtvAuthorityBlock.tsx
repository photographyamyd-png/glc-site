import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { CommercialSnowLazyYouTube } from "@/components/templates/commercial-snow/CommercialSnowLazyYouTube";
import { COMMERCIAL_SNOW_AUTHORITY_TRUST_CHIPS } from "@/lib/site/commercial-snow-page-data";
import { ctvSnowFeature } from "@/lib/site/ctv-snow-feature";
import { SNOW_HUB_CTV_POSTER } from "@/lib/site/snow-removal-media";

function ChipIcon({ kind }: { kind: (typeof COMMERCIAL_SNOW_AUTHORITY_TRUST_CHIPS)[number]["icon"] }) {
  if (kind === "headset") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[color:var(--y)]" aria-hidden>
        <path d="M5 16v-3a7 7 0 0114 0v3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 16h2.5a1 1 0 011 1V19a2 2 0 01-2 2H6a3 3 0 01-3-3v-1a1 1 0 011-1zm14 0h-2.5a1 1 0 00-1 1V19a2 2 0 002 2h0.5a3 3 0 003-3v-1a1 1 0 00-1-1z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[color:var(--y)]" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CommercialSnowCtvAuthorityBlock() {
  const iframeTitle = `${ctvSnowFeature.segmentTitle} — ${ctvSnowFeature.ctvBodyParagraphs[0]}`;

  return (
    <section
      id="chapter-authority"
      className="section-major relative scroll-mt-[var(--header)] overflow-hidden border-t border-white/10 bg-[rgb(12_14_13)] view-reveal"
      aria-labelledby="commercial-snow-authority-h2"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgb(242_183_5/0.06),transparent_48%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgb(255_255_255/0.04),transparent_55%)]" aria-hidden />
      <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] opacity-[0.12]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--section-v)] sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-[color:var(--y)]">{ctvSnowFeature.eyebrow}</p>
          <h2 id="commercial-snow-authority-h2" className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
            {ctvSnowFeature.authorityH2}
          </h2>
          <p className="mt-[var(--s7)] text-[15px] leading-[1.72] text-white/90 sm:text-base">{ctvSnowFeature.authoritySub}</p>
        </div>

        <div className="relative mx-auto mt-10 max-w-4xl">
          <div id="ctv-news-barrie" className="relative z-10 mx-auto flex flex-col items-center">
            <CommercialSnowLazyYouTube
              embedSrc={ctvSnowFeature.segmentEmbedSrc}
              posterSrc={SNOW_HUB_CTV_POSTER.src}
              posterAlt={SNOW_HUB_CTV_POSTER.alt}
              iframeTitle={iframeTitle}
              posterKicker={ctvSnowFeature.posterKicker}
            />
          </div>

          <div className="relative z-10 mx-auto mt-4 grid max-w-4xl gap-3 sm:grid-cols-2">
            {COMMERCIAL_SNOW_AUTHORITY_TRUST_CHIPS.map((c) => (
              <div
                key={c.title}
                className="flex gap-4 border border-[color:var(--y)]/70 bg-[rgb(10_12_11/0.65)] p-4 shadow-[inset_0_0_0_1px_rgb(242_183_5/0.15)] backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-[rgb(0_0_0/0.35)]">
                  <ChipIcon kind={c.icon} />
                </div>
                <div>
                  <p className="font-serif text-sm font-bold uppercase tracking-[0.04em] text-white sm:text-base">{c.title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-white/75 sm:text-[14px]">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 mx-auto mt-4 flex max-w-4xl flex-wrap items-center justify-between gap-4 border border-[color:var(--g200)] bg-white px-4 py-3 sm:px-6">
            <div className="flex min-h-[44px] flex-wrap items-center gap-4">
              <span className="font-serif text-lg font-bold uppercase tracking-[0.08em] text-ink sm:text-xl" aria-hidden>
                CTV
              </span>
              <span className="hidden h-8 w-px bg-[color:var(--g200)] sm:block" aria-hidden />
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.06em] text-ink sm:text-base">{ctvSnowFeature.asFeaturedOnLabel}</p>
            </div>
            {ctvSnowFeature.mediaBarPartnerSrcs.length ? (
              <div className="flex flex-wrap items-center gap-4">
                {ctvSnowFeature.mediaBarPartnerSrcs.map((src) => (
                  <Image key={src} src={src} alt="" width={120} height={40} className="h-8 w-auto object-contain" />
                ))}
              </div>
            ) : null}
          </div>

          <div className="mx-auto mt-6 max-w-2xl text-center">
            <p className="border-l-[3px] border-[color:var(--y)] pl-4 text-left font-sans text-[15px] font-medium italic leading-relaxed text-white/90 sm:text-base">
              {ctvSnowFeature.ctvBodyParagraphs[0]}
            </p>
            <p className="mt-2 text-center text-[12px] font-semibold uppercase tracking-[0.06em] text-white/55">{ctvSnowFeature.ctvBodyParagraphs[1]}</p>
            <p className="mt-4 text-[13px] leading-snug text-white/75">
              <span className="font-semibold text-white">Source — </span>
              <Link
                href={ctvSnowFeature.ctvArticleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--y)] underline-offset-2 hover:underline"
              >
                CTV News Barrie: full segment and article
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
