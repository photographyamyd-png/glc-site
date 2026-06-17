"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type BackgroundLoopVideoProps = {
  src: string;
  posterSrc: string;
  /** Poster alt for reduced-motion fallback and LCP. */
  posterAlt?: string;
  /** Decorative background — hidden from assistive tech when true (default). */
  decorative?: boolean;
  ariaLabel?: string;
  preload?: "none" | "metadata" | "auto";
  /** Defer play until the container intersects the viewport (below-fold sections). */
  playWhenInView?: boolean;
  /** Pass through to poster Image for above-fold heroes. */
  priority?: boolean;
  /** Playback speed (1 = normal). Values below 1 slow the loop for hero backgrounds. */
  playbackRate?: number;
  /** Dark scrim stacked on the video (recommended for text legibility). */
  showOverlay?: boolean;
  /** Heavier scrim for thin-strip ambient loops over busy panning footage. */
  overlayVariant?: "default" | "ambient";
  /** Brief opacity dip on loop seams and hard jump cuts in the source reel. */
  softLoopCrossfade?: boolean;
  /**
   * Keep poster as LCP — mount the video element after idle so large MP4s do not compete on first paint.
   */
  deferVideoMount?: boolean;
  className?: string;
  imageClassName?: string;
};

/** Shared dark scrim — sits on the video plane only, not the whole section. */
export function BackgroundLoopVideoOverlay({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "ambient";
}) {
  const ambient = variant === "ambient";
  return (
    <>
      <div
        className={cn(
          ambient
            ? "absolute inset-0 bg-[rgb(10_12_11/0.34)] md:bg-[rgb(10_12_11/0.52)]"
            : "absolute inset-0 bg-[rgb(10_12_11/0.14)] md:bg-[rgb(10_12_11/0.26)]",
          className,
        )}
        aria-hidden
      />
      <div
        className={cn(
          ambient
            ? "absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.62)] via-[rgb(10_12_11/0.42)] to-[rgb(10_12_11/0.24)] md:from-[rgb(10_12_11/0.72)] md:via-[rgb(10_12_11/0.5)] md:to-[rgb(10_12_11/0.28)]"
            : "absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.38)] via-[rgb(10_12_11/0.22)] to-[rgb(10_12_11/0.1)] md:from-[rgb(10_12_11/0.58)] md:via-[rgb(10_12_11/0.36)] md:to-[rgb(10_12_11/0.18)]",
          className,
        )}
        aria-hidden
      />
      <div
        className={cn(
          ambient
            ? "absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.52)] via-[rgb(10_12_11/0.2)] to-[rgb(10_12_11/0.1)] md:from-[rgb(10_12_11/0.58)] md:via-[rgb(10_12_11/0.22)] md:to-[rgb(10_12_11/0.12)]"
            : "absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.28)] via-[rgb(10_12_11/0.1)] to-transparent md:from-[rgb(10_12_11/0.45)] md:via-[rgb(10_12_11/0.14)] md:to-[rgb(10_12_11/0.08)]",
          className,
        )}
        aria-hidden
      />
    </>
  );
}

export function BackgroundLoopVideo({
  src,
  posterSrc,
  posterAlt = "",
  decorative = true,
  ariaLabel,
  preload = "metadata",
  playWhenInView = false,
  priority = false,
  playbackRate = 1,
  showOverlay = true,
  overlayVariant = "default",
  softLoopCrossfade = false,
  deferVideoMount = false,
  className,
  imageClassName = "object-cover object-center",
}: BackgroundLoopVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [mountVideo, setMountVideo] = useState(!deferVideoMount);

  useEffect(() => {
    if (!deferVideoMount || reduceMotion) return;
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (win.requestIdleCallback) {
      const id = win.requestIdleCallback(() => setMountVideo(true), { timeout: 2500 });
      return () => win.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(() => setMountVideo(true), 1200);
    return () => window.clearTimeout(t);
  }, [deferVideoMount, reduceMotion]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion || playWhenInView || !mountVideo) return;
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => undefined);
  }, [reduceMotion, playWhenInView, mountVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    if (reduceMotion || !playWhenInView) return;
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [reduceMotion, playWhenInView]);

  useEffect(() => {
    if (!softLoopCrossfade || reduceMotion || !mountVideo) return;
    const video = videoRef.current;
    if (!video) return;

    let lastTime = 0;
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;

    const dip = () => {
      video.style.transition = "opacity 0.42s ease";
      video.style.opacity = "0.48";
      fadeTimer = window.setTimeout(() => {
        video.style.transition = "opacity 0.72s ease";
        video.style.opacity = "1";
      }, 260);
    };

    const onTimeUpdate = () => {
      const t = video.currentTime;
      const dur = video.duration;
      if (t < 0.2 && lastTime > Math.max(0, (dur || 0) - 0.55)) {
        dip();
      } else if (t - lastTime > 0.55 && lastTime > 0) {
        dip();
      }
      lastTime = t;
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      if (fadeTimer) window.clearTimeout(fadeTimer);
      video.style.transition = "";
      video.style.opacity = "";
    };
  }, [softLoopCrossfade, reduceMotion, mountVideo]);

  const showPosterOnly = reduceMotion;
  const hidePosterUnderVideo = videoReady && !showPosterOnly;

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        priority={priority}
        sizes="100vw"
        className={cn(
          imageClassName,
          "hero-bg-image h-full w-full transition-opacity duration-500",
          hidePosterUnderVideo ? "opacity-0" : "opacity-100",
        )}
        aria-hidden={decorative ? true : undefined}
      />
      {!showPosterOnly && mountVideo ? (
        <video
          ref={videoRef}
          className={cn("absolute inset-0 h-full w-full", imageClassName)}
          autoPlay={!playWhenInView}
          muted
          loop
          playsInline
          preload={preload}
          poster={posterSrc}
          aria-hidden={decorative ? true : undefined}
          aria-label={decorative ? undefined : ariaLabel}
          onCanPlay={(e) => {
            e.currentTarget.playbackRate = playbackRate;
            setVideoReady(true);
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
      {showOverlay ? <BackgroundLoopVideoOverlay variant={overlayVariant} /> : null}
    </div>
  );
}
