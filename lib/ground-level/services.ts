import type { PrimaryServiceSlug } from "@/lib/site/registry";

export type GroundLevelService = {
  slug: PrimaryServiceSlug;
  title: string;
  short: string;
  megaBlurb: string;
};

export const GROUND_LEVEL_SERVICES: GroundLevelService[] = [
  {
    slug: "excavation-site-preparation",
    title: "Excavation & Site Prep",
    short: "Rock, trenching, and production digs for industrial pads.",
    megaBlurb: "Trenching, rock handling, and bulk export for commercial sites.",
  },
  {
    slug: "site-preparation-grading",
    title: "Site Prep & Grading",
    short: "Finished grades, compaction, and build-ready pads.",
    megaBlurb: "Pads, parking courts, and precision finish for civil handoff.",
  },
  {
    slug: "drainage-hardscaping",
    title: "Drainage & Hardscaping",
    short: "Catch basins, culverts, and site drainage that survives freeze–thaw.",
    megaBlurb: "Storm lines, curtain drains, and hardscape-adjacent water management.",
  },
  {
    slug: "foundations-civil-infrastructure",
    title: "Foundations & Civil",
    short: "Footings, frost walls, and coordinated structural excavation.",
    megaBlurb: "Footings, elevator pits, and crane mats with survey-backed tolerances.",
  },
  {
    slug: "hauling-site-clearing-logistics",
    title: "Hauling & Clearing",
    short: "Stone, machine-graded transitions, and clean edges for turnover.",
    megaBlurb: "Armor stone, access drives, and finish details around buildings.",
  },
  {
    slug: "snow-removal",
    title: "Snow Removal",
    short: "Commercial lots, haul routes, and priority industrial access.",
    megaBlurb: "Seasonal contracts, loader + truck teams, and ice control for busy yards.",
  },
];
