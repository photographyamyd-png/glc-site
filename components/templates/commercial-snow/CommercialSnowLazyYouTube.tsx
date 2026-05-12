"use client";

import Image from "next/image";
import { useCallback, useId, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  embedSrc: string;
  posterSrc: string;
  posterAlt: string;
  iframeTitle: string;
  className?: string;
};

/** Loads the YouTube iframe only after explicit play — custom poster, lighter first paint. */
export function CommercialSnowLazyYouTube({ embedSrc, posterSrc, posterAlt, iframeTitle, className }: Props) {
  const [active, setActive] = useState(false);
  const labelId = useId();

  const activate = useCallback(() => {
    setActive(true);
  }, []);

  return (
    <div className={cn("relative aspect-video w-full max-w-4xl overflow-hidden bg-black shadow-[0_24px_80px_rgb(0_0_0/0.45)]", className)}>
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
          <button
            type="button"
            className="group absolute inset-0 flex flex-col items-center justify-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
  );
}
