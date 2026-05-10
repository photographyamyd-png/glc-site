import homeContent from "@/lib/glc-dna/home.json";
import navigation from "@/lib/glc-dna/navigation.json";
import type { MegaMenuCard } from "@/lib/glc-dna/types";

export type PerformanceStatCell = {
  target: number;
  afterNumber: string;
  format: string;
  label: string;
  sub: string;
};

function statsCellsFromHome(): PerformanceStatCell[] {
  const sections = homeContent.sections as Array<{
    type: string;
    props?: { cells?: PerformanceStatCell[] };
  }>;
  const stats = sections.find((s) => s.type === "stats");
  return stats?.props?.cells ?? [];
}

/** Mega-menu cards 05 / 06 — matches sandbox services grid reference copy */
export function excavationMetricsServiceCards(): MegaMenuCard[] {
  const cards = navigation.megaMenu.cards as MegaMenuCard[];
  return cards.filter((c) => c.num === "05" || c.num === "06");
}

/** Same four cells as [`lib/glc-dna/home.json`](lib/glc-dna/home.json) Lane B stats block */
export function excavationPerformanceCells(): PerformanceStatCell[] {
  return statsCellsFromHome();
}
