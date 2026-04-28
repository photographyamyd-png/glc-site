import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardSurfaceProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "li";
  id?: string;
};

export function CardSurface({ children, className, as = "article", id }: CardSurfaceProps) {
  const Comp = as;
  return (
    <Comp id={id} className={cn("rounded-xl border border-[color:var(--g200)] bg-white/80 p-5 backdrop-blur-sm", className)}>
      {children}
    </Comp>
  );
}
