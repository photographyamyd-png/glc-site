import React from "react";
import { motion } from "framer-motion";

type ClassyProps = { className?: string };

/**
 * LogoMark uses logo-derived angular primitives for inline geometry.
 * This is a vector-friendly motif symbol for UI placement, not a replacement
 * for official raster logo assets used in brand lockups.
 */
export const LogoMark = ({ className = "" }: ClassyProps) => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="8" y="8" width="104" height="104" fill="var(--charcoal-deep)" />
    <polygon points="22,94 22,26 38,26 38,80 74,80 74,94" fill="var(--yellow-core)" />
    <polygon points="84,26 102,26 82,52 102,52 102,66 74,66 90,44 74,44 74,26" fill="var(--yellow-core)" />
    <polygon points="16,104 48,72 58,80 34,104" fill="var(--yellow-dark)" opacity="0.8" />
    <polygon points="70,104 112,62 112,72 80,104" fill="var(--yellow-dark)" opacity="0.6" />
  </svg>
);

/** AngleCorner is intended for card/section corner anchoring. */
export const AngleCorner = ({ className = "" }: ClassyProps) => (
  <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,96 96,0 96,96" fill="var(--charcoal-deep)" />
    <polygon points="0,96 70,24 96,36 96,96" fill="var(--yellow-core)" />
    <polygon points="40,70 96,44 96,58 56,82" fill="var(--yellow-dark)" opacity="0.8" />
  </svg>
);

/** AngleAccent is intended for CTA edge treatment and directional motion. */
export const AngleAccent = ({ className = "" }: ClassyProps) => (
  <svg viewBox="0 0 80 48" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon points="0,48 52,0 80,0 28,48" fill="var(--yellow-core)" />
    <polygon points="18,48 62,6 80,6 36,48" fill="var(--yellow-dark)" opacity="0.7" />
  </svg>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const TruckCard = ({ children, className = "" }: CardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className={`relative overflow-hidden rounded-none border border-[color:var(--g200)] bg-[color:var(--charcoal-mid)] p-6 text-white shadow-[0_20px_48px_rgb(0_0_0/0.24)] ${className}`}
  >
    <div className="pointer-events-none absolute right-0 top-0 w-24" data-motif-id="truck-angle-corner" aria-hidden>
      <AngleCorner className="h-full w-full" />
    </div>
    <div className="relative z-10">{children}</div>
  </motion.div>
);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const TruckButton = ({ children, className = "", onClick }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.99 }}
    transition={{ duration: 0.18 }}
    onClick={onClick}
    className={`relative overflow-hidden rounded-none bg-[color:var(--yellow-core)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[color:var(--charcoal-deep)] ${className}`}
  >
    <span className="relative z-10">{children}</span>
    <span className="pointer-events-none absolute right-0 top-0 h-full w-12" data-motif-id="truck-angle-accent" aria-hidden>
      <AngleAccent className="h-full w-full" />
    </span>
  </motion.button>
);

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const TruckSection = ({ children, className = "" }: SectionProps) => (
  <section className={`relative overflow-hidden bg-[color:var(--charcoal-deep)] py-24 text-white ${className}`}>
    <div className="pointer-events-none absolute inset-0 opacity-10" data-motif-id="truck-logo-watermark" aria-hidden>
      <LogoMark className="h-full w-full" />
    </div>
    <div className="relative z-10 mx-auto max-w-6xl px-6">{children}</div>
  </section>
);

export const TruckNavbar = () => (
  <nav className="flex items-center justify-between border-b border-neutral-800 bg-black p-6 text-white">
    <div className="flex items-center gap-3">
      <LogoMark className="w-10" />
      <span className="font-semibold uppercase tracking-wide">Ground Level</span>
    </div>
    <div className="flex gap-6 text-sm">
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);

export const TruckHero = () => (
  <TruckSection>
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="font-serif text-4xl font-semibold uppercase tracking-tight sm:text-5xl"
    >
      Built From the <span className="text-[color:var(--yellow-core)]">Ground Up</span>
    </motion.h1>
    <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
      A geometry-first UI layer that composes with the existing motif system and keeps token-locked brand behavior.
    </p>
    <TruckButton className="mt-8">Get a Quote</TruckButton>
  </TruckSection>
);

export const TruckPricingCard = () => (
  <TruckCard>
    <h3 className="font-serif text-xl font-semibold uppercase tracking-tight">Standard Package</h3>
    <p className="mt-2 text-sm leading-relaxed text-white/75">Perfect for most project mobilization scopes.</p>
    <TruckButton className="mt-4">Choose Plan</TruckButton>
  </TruckCard>
);

export const TruckGeometryDemo = () => (
  <div className="min-h-screen bg-neutral-950">
    <TruckNavbar />
    <TruckHero />
    <div className="grid gap-6 p-10 md:grid-cols-3">
      <TruckPricingCard />
      <TruckPricingCard />
      <TruckPricingCard />
    </div>
  </div>
);
