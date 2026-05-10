import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function YellowRule({ width = "4px", className }: { width?: "4px" | "2px"; className?: string }) {
  const h = width === "4px" ? "h-1" : "h-0.5";
  return (
    <div
      className={cn("w-8 shrink-0 bg-[color:var(--y)]", h, className)}
      aria-hidden
    />
  );
}

export function SectionEyebrow({
  text,
  band,
  className,
}: {
  text: string;
  band: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "eyebrow",
        band === "dark" ? "text-white" : "text-ink",
        className,
      )}
    >
      {text}
    </p>
  );
}

export function CTAButton({
  variant,
  href,
  children,
  className,
  icon,
}: {
  variant: "primary" | "secondary" | "ghost";
  href: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center gap-2 px-6 text-center font-label text-xs font-bold uppercase tracking-[0.08em] transition-[transform,box-shadow] duration-200 ease-out";
  const styles =
    variant === "primary"
      ? "bg-[color:var(--y)] text-ink hover:brightness-105"
      : variant === "secondary"
        ? "border-2 border-white bg-transparent text-white hover:bg-white/10"
        : "border-0 bg-transparent text-white hover:text-[color:var(--y)]";

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {icon}
      {children}
    </Link>
  );
}
