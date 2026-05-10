"use client";

import { CTAButton } from "@/components/drainage-hardscaping/primitives";
import { cn } from "@/lib/utils";

const embedSrc = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED_SRC?.trim();
const profileUrl = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL?.trim();
const score = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_SCORE?.trim();
const count = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT?.trim();

export function GoogleReviewsPanel({ className }: { className?: string }) {
  const starLine =
    score && count
      ? `${score} average · ${count} reviews`
      : score
        ? `${score} on Google`
        : count
          ? `${count} Google reviews`
          : null;

  if (embedSrc) {
    return (
      <div
        className={cn(
          "mt-[60px] border border-white/10 bg-[rgb(10_12_11/0.45)] p-4 backdrop-blur-md sm:p-8",
          className,
        )}
      >
        <p className="eyebrow text-[color:var(--y)]">Google Reviews</p>
        {starLine ? <p className="mt-2 font-serif text-lg text-white">{starLine}</p> : null}
        <div className="relative mt-6 min-h-[420px] w-full overflow-hidden">
          <iframe
            title="Google reviews"
            src={embedSrc}
            className="h-[min(70vh,560px)] w-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        {profileUrl ? (
          <p className="mt-4 text-center text-sm text-white/80">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[color:var(--y)] underline-offset-4 hover:text-[color:var(--y)]"
            >
              Open Google Business Profile
            </a>
          </p>
        ) : null}
      </div>
    );
  }

  if (profileUrl) {
    return (
      <div
        className={cn(
          "mt-[60px] border border-white/10 bg-[rgb(10_12_11/0.45)] p-8 backdrop-blur-md",
          className,
        )}
      >
        <p className="eyebrow text-[color:var(--y)]">Google Reviews</p>
        {starLine ? <p className="mt-3 font-serif text-xl text-white">{starLine}</p> : null}
        <p className="mt-4 text-sm text-white/90">
          Read verified reviews and see recent project feedback on our Google Business Profile.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start">
          <CTAButton variant="primary" href={profileUrl} className="min-w-[min(100%,280px)]">
            Read reviews on Google
          </CTAButton>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mt-[60px] border border-white/10 bg-[rgb(10_12_11/0.45)] p-8 backdrop-blur-md",
        className,
      )}
    >
      <p className="eyebrow text-[color:var(--y)]">Google Reviews</p>
      <p className="mt-2 font-serif text-2xl text-white">★★★★★</p>
      <p className="mt-2 text-sm text-white/80">
        Placeholder — set <code className="text-white/90">NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL</code> or{" "}
        <code className="text-white/90">NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED_SRC</code> for production.
      </p>
    </div>
  );
}
