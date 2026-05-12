"use client";

import Image from "next/image";
import { useCallback, useId, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  embedSrc: string;
  posterSrc: string;
  posterAlt: string;
  iframeTitle: string;
  /** Short line on the poster (e.g. storm context). */
  posterKicker?: string;
  className?: string;
};

/** Loads the YouTube iframe only after explicit play — custom poster, yellow cinema frame, overlays. */
export function CommercialSnowLazyYouTube({ embedSrc, posterSrc, posterAlt, iframeTitle, posterKicker, className }: Props) {
  const [active, setActive] = useState(false);
  const labelId = useId();

  const activate = useCallback(() => {
    setActive(true);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full max-w-4xl rounded-sm bg-[rgb(12_14_13)] p-1 shadow-[0_24px_80px_rgb(0_0_0/0.45)] ring-2 ring-[color:var(--y)] ring-offset-2 ring-offset-[rgb(12_14_13)]",
        className,
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {active ? (
          <iframe
            title={iframeTitle}
            src={`${embedSrc}${embedSrc.includes("?") ? "&" : "?"}autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <>
            <Image src={posterSrc} alt={posterAlt} fill className="object-cover object-center" sizes="(min-width: 1024px) 56rem, 100vw" priority={false} />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.75)] via-[rgb(10_12_11/0.2)] to-transparent" aria-hidden />
            {posterKicker ? (
              <p className="pointer-events-none absolute right-3 top-3 z-[2] max-w-[min(100%,14rem)] text-right font-serif text-xs font-bold uppercase leading-tight tracking-[0.06em] text-white drop-shadow sm:right-4 sm:top-4 sm:text-sm">
                {posterKicker}
              </p>
            ) : null}
            <div
              className="pointer-events-none absolute left-3 top-3 z-[2] rounded-sm border border-[color:var(--y)]/90 bg-[rgb(10_12_11/0.85)] px-2 py-1 sm:left-4 sm:top-4"
              aria-hidden
            >
              <p className="font-label text-[9px] font-semibold uppercase tracking-[0.16em] text-[color:var(--y)]">Media alert</p>
            </div>
            <div className="pointer-events-none absolute bottom-3 right-3 z-[2] text-right sm:bottom-4 sm:right-4" aria-hidden>
              <p className="font-serif text-lg font-bold uppercase leading-none tracking-[0.08em] text-white drop-shadow sm:text-2xl">CTV</p>
              <p className="font-label text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--y)]">News</p>
            </div>
            <button
              type="button"
              className="group absolute inset-0 z-[3] flex flex-col items-center justify-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              onClick={activate}
              aria-labelledby={labelId}
            >
              <span id={labelId} className="sr-only">
                Play video: {iframeTitle}
              </span>
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/90 bg-[rgb(10_12_11/0.55)] text-white shadow-lg backdrop-blur-sm transition-transform group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:h-[72px] sm:w-[72px]"
                aria-hidden
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="eyebrow text-white">Play segment</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
