import Link from "next/link";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { IconArrow } from "@/components/ui/icon-arrow";
import { ABOUT, STATS_LINES } from "@/lib/ground-level/homepage-copy";
import { getServiceImage } from "@/lib/site/service-images";
import { cn } from "@/lib/utils";

export type GLWhoCredential = string | { title: string; sub: string };

export type GLWhoMediaStat = string | { value: string; label: string };

export type GLWhoWeServeContent = {
  eyebrow: string;
  heading: string;
  body: string;
  credentials: readonly GLWhoCredential[];
  cta: string | { label: string; href: string };
  mediaStat: GLWhoMediaStat;
  badge: string;
  imageAlt: string;
  imageSrc?: string;
  /** Ghost watermark (DNA `ab3__wm`). Default `GLC`. */
  watermark?: string;
};

function defaultAbout(): GLWhoWeServeContent {
  return {
    eyebrow: ABOUT.eyebrow,
    heading: ABOUT.heading,
    body: ABOUT.body,
    credentials: ABOUT.credentials,
    cta: ABOUT.cta,
    mediaStat: ABOUT.mediaStat,
    badge: ABOUT.badge,
    imageAlt: getServiceImage("excavation-site-preparation").alt,
    imageSrc: getServiceImage("excavation-site-preparation").src,
    watermark: "GLC",
  };
}

export type GLWhoWeServeProps = {
  sectionId?: string;
  headingId?: string;
  content?: GLWhoWeServeContent;
  /** Default true. Set false when a separate stats band follows (e.g. copy lab). */
  showStatsStrip?: boolean;
};

function splitHeading(heading: string): { before: string; accent: string; after: string } {
  const m = heading.match(/^(.+?)\s+[—–-]\s+(.+)$/u);
  if (!m) return { before: heading, accent: "", after: "" };
  return { before: m[1].trim(), accent: m[2].trim(), after: "" };
}

function normalizeMediaStat(stat: GLWhoMediaStat): { value: string; label: string } {
  if (typeof stat === "object") return stat;
  const parts = stat.trim().split(/\s+/);
  const value = parts[0] ?? stat;
  const label = parts.slice(1).join(" ");
  return { value, label };
}

function normalizeCredential(c: GLWhoCredential): { title: string; sub: string } {
  if (typeof c === "object") return c;
  const m = c.match(/^(.+?)\s+[—–-]\s+(.+)$/u);
  if (m) return { title: m[1].trim(), sub: m[2].trim() };
  return { title: c, sub: "" };
}

export function GLWhoWeServe({
  sectionId = "about",
  headingId = "about-heading",
  content,
  showStatsStrip = true,
}: GLWhoWeServeProps = {}) {
  const a = content ?? defaultAbout();
  const ctaLabel = typeof a.cta === "string" ? a.cta : a.cta.label;
  const ctaHref = typeof a.cta === "string" ? "/contact" : a.cta.href;
  const imgSrc = a.imageSrc ?? getServiceImage("excavation-site-preparation").src;
  const isInternalRoute = ctaHref.startsWith("/") || ctaHref.startsWith("#");
  const media = normalizeMediaStat(a.mediaStat);
  const { before, accent, after } = splitHeading(a.heading);
  const watermark = a.watermark ?? "GLC";

  return (
    <section
      id={sectionId}
      className={cn("gl-who-ab3 relative scroll-mt-[var(--site-header-offset)] view-reveal")}
      aria-labelledby={headingId}
      data-accent-family="about"
      data-accent-zone="brand-story"
    >
      <div className="ab3__section-break" aria-hidden />

      <span className="ab3__wm" aria-hidden>
        {watermark}
      </span>

      <div className="ab3__layout">
        <div className="ab3__copy">
          <div className="ab3__top-row">
            <span className="eyebrow">{a.eyebrow}</span>
            <span className="ab3__since" aria-label={`${media.value} ${media.label}`.trim()}>
              {media.value}
              {media.label ? (
                <>
                  &thinsp;
                  <span>{media.label}</span>
                </>
              ) : null}
            </span>
          </div>

          <div className="ab3__heading-wrap">
            <h2 id={headingId} className="ab3__heading">
              {before}
              {accent ? <em className="ab3__heading-em">{accent}</em> : null}
              {after}
            </h2>
            <span className="ab3__heading-rule" aria-hidden />
          </div>

          <div className="ab3__body">
            <ExpandableCopy text={a.body} className="text-sm leading-relaxed text-ink-muted sm:text-base" />
          </div>

          <div className="ab3__creds">
            {a.credentials.map((raw, i) => {
              const c = normalizeCredential(raw);
              return (
                <div key={i} className="ab3__cred">
                  <div className="ab3__cred-idx" aria-hidden>
                    0{i + 1}
                  </div>
                  <div className="ab3__cred-body">
                    <div className="ab3__cred-title">{c.title}</div>
                    {c.sub ? <div className="ab3__cred-sub">{c.sub}</div> : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="ab3__cta-wrap">
            {isInternalRoute ? (
              <Link href={ctaHref} className="btn-primary">
                {ctaLabel}
                <IconArrow />
              </Link>
            ) : (
              <a href={ctaHref} className="btn-primary">
                {ctaLabel}
                <IconArrow />
              </a>
            )}
          </div>
        </div>

        <div className="ab3__media">
          <div className="ab3__badge" aria-hidden>
            <span>{a.badge}</span>
          </div>
          <div
            className="ab3__photo"
            role="img"
            aria-label={a.imageAlt}
            style={{ backgroundImage: `url(${JSON.stringify(imgSrc)})` }}
          />
          <div className="ab3__chip" aria-hidden>
            <div className="ab3__chip-num">{media.value}</div>
            {media.label ? <div className="ab3__chip-lbl">{media.label}</div> : null}
          </div>
          <div className="ab3__corner-mark" aria-hidden />
        </div>
      </div>

      {showStatsStrip ? (
        <div className="gl-who-ab3__stats mt-14 lg:mt-16">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS_LINES.map((line, i) => (
              <li
                key={line}
                className={cn(
                  "border px-4 py-5 text-center text-sm font-medium leading-snug text-[color:var(--ink-deep)] transition-[transform,box-shadow,border-color]",
                  i === 0
                    ? "relative z-[1] border-[color:var(--y)]/45 bg-[rgb(255_255_255/0.92)] shadow-[0_18px_44px_rgb(0_0_0/0.12)] sm:py-6 lg:scale-[1.03] lg:-translate-y-1"
                    : "border-[color:var(--g200)] bg-[rgb(255_255_255/0.72)]",
                )}
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
