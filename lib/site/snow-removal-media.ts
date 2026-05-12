/**
 * Snow Removal hub photography and field video — paths under `public/images/services/Snow Removal/`.
 * Filenames contain spaces and punctuation; always build URLs with encodeURIComponent.
 */

export type SnowHubRaster = { readonly src: string; readonly alt: string };

export type SnowHubVideo = {
  readonly src: string;
  readonly title: string;
  readonly description?: string;
  /** Optional poster (raster src) shown before play */
  readonly posterSrc?: string;
};

const BASE = "/images/services/Snow%20Removal";
const VIDEOS_BASE = `${BASE}/Videos`;

function snowRaster(filename: string, alt: string): SnowHubRaster {
  return { src: `${BASE}/${encodeURIComponent(filename)}`, alt };
}

function snowVideo(filename: string, title: string, description?: string, posterSrc?: string): SnowHubVideo {
  return {
    src: `${VIDEOS_BASE}/${encodeURIComponent(filename)}`,
    title,
    description,
    posterSrc,
  };
}

/** Long CTV Barrie stills prefix (matches on-disk filenames). */
const CTV_BARRIE_PREFIX =
  "247 snow service Orillia, commercial salting Barrie, commercial snow removal Barrie, emergency snow removal Simcoe., Ground Level Contracting CTV BARRIE";

/** Industrial series prefix — note comma after "Contracting". */
const INDUSTRIAL_PREFIX =
  "247 snow service Orillia, commercial salting Barrie, commercial snow removal Barrie, emergency snow removal Simcoe., Ground Level Contracting, industrial";

export const SNOW_MEDIA = {
  /** Canonical hub / registry thumbnail — plow clearing a commercial lot. */
  hubDefault: snowRaster(
    "Ground Level Contracting barrie snow removal23.JPG",
    "Ground Level Contracting plow truck clearing snow from a commercial parking lot in winter",
  ),
  barrieSnow2: snowRaster(
    "Ground Level Contracting barrie snow 2.JPG",
    "Ground Level Contracting snow removal truck and loader staged on a cleared commercial lot in daylight",
  ),
  barrieRemoval2: snowRaster(
    "Ground Level Contracting barrie snow removal2.JPG",
    "Branded Ground Level Contracting plow truck with salt spreader on a commercial property in Simcoe County",
  ),
  bedrock2: snowRaster(
    "Ground Level Contracting - Excavation, Foundations, Industrial Construction - Barrie, Orilla, Simcoe County - Muskoka Bedrock (2).JPG",
    "Heavy civil equipment and winter operations context on a Ground Level Contracting commercial site",
  ),
  bedrock3: snowRaster(
    "Ground Level Contracting - Excavation, Foundations, Industrial Construction - Barrie, Orilla, Simcoe County - Muskoka Bedrock (3).JPG",
    "Commercial winter site operations with Ground Level Contracting equipment near Barrie Ontario",
  ),
  bedrock6: snowRaster(
    "Ground Level Contracting - Excavation, Foundations, Industrial Construction - Barrie, Orilla, Simcoe County - Muskoka Bedrock (6).JPG",
    "Industrial-scale machinery on a commercial construction and winter services site in Simcoe County",
  ),
  ctvBarrie: (n: number) =>
    snowRaster(
      `${CTV_BARRIE_PREFIX} ${n}.JPG`,
      `Commercial snow operations in Simcoe County — CTV Barrie coverage still ${n}`,
    ),
  ctvBarrieG: snowRaster(
    `${CTV_BARRIE_PREFIX} g.JPG`,
    "Ground Level Contracting commercial snow fleet during winter operations — press coverage still",
  ),
  ctvBarrieMain: snowRaster(
    `${CTV_BARRIE_PREFIX}.JPG`,
    "Commercial snow removal in Barrie and Simcoe County — Ground Level Contracting field operations",
  ),
  ctvComma: snowRaster(
    "247 snow service Orillia, commercial salting Barrie, commercial snow removal Barrie, emergency snow removal Simcoe., Ground Level Contracting, CTV.JPG",
    "Winter maintenance and commercial salting operations by Ground Level Contracting",
  ),
  industrial: (n: number) =>
    snowRaster(
      `${INDUSTRIAL_PREFIX} ${n}.JPG`,
      `Industrial commercial snow removal equipment on site — Ground Level Contracting operations photo ${n}`,
    ),
  industrialG: snowRaster(
    `${INDUSTRIAL_PREFIX} g.JPG`,
    "Loader and heavy equipment during industrial snow removal and hauling in Simcoe County",
  ),
  industrialS: snowRaster(
    `${INDUSTRIAL_PREFIX} s.JPG`,
    "Nighttime commercial snow clearing with Ground Level Contracting industrial equipment",
  ),
  /** Parkside Plaza — loader and crew clearing retail lot (property-type retail tab). */
  plazaParkside: snowRaster(
    "Ground Level Contracting - Plaza Snow Removal Parkside.png",
    "Yellow loader and crew clearing snow and salting walks at Parkside Plaza retail centre in Simcoe County",
  ),
} as const;

/** Ordered gallery for deterministic `pick(i)` patterns (SSR-stable). */
export const SNOW_REMOVAL_HUB_GALLERY: readonly SnowHubRaster[] = [
  SNOW_MEDIA.hubDefault,
  SNOW_MEDIA.barrieSnow2,
  SNOW_MEDIA.barrieRemoval2,
  SNOW_MEDIA.ctvBarrie(1),
  SNOW_MEDIA.ctvBarrie(2),
  SNOW_MEDIA.ctvBarrie(5),
  SNOW_MEDIA.ctvBarrie(6),
  SNOW_MEDIA.ctvBarrie(7),
  SNOW_MEDIA.ctvBarrie(8),
  SNOW_MEDIA.ctvBarrie(9),
  SNOW_MEDIA.ctvBarrie(10),
  SNOW_MEDIA.ctvBarrieG,
  SNOW_MEDIA.ctvBarrieMain,
  SNOW_MEDIA.ctvComma,
  SNOW_MEDIA.industrial(0),
  SNOW_MEDIA.industrial(1),
  SNOW_MEDIA.industrial(2),
  SNOW_MEDIA.industrial(3),
  SNOW_MEDIA.industrial(4),
  SNOW_MEDIA.industrial(5),
  SNOW_MEDIA.industrial(6),
  SNOW_MEDIA.industrial(7),
  SNOW_MEDIA.industrial(8),
  SNOW_MEDIA.industrial(9),
  SNOW_MEDIA.industrialG,
  SNOW_MEDIA.industrialS,
  SNOW_MEDIA.bedrock2,
  SNOW_MEDIA.bedrock3,
  SNOW_MEDIA.bedrock6,
];

export function snowRemovalPhotoByIndex(i: number): SnowHubRaster {
  return SNOW_REMOVAL_HUB_GALLERY[i % SNOW_REMOVAL_HUB_GALLERY.length]!;
}

/** Section-specific rasters for the commercial snow hub (distinct scenes where possible). */
export const SNOW_HUB_SECTION = {
  hero: SNOW_MEDIA.barrieSnow2,
  valueProp: SNOW_MEDIA.ctvBarrie(1),
  equipment: SNOW_MEDIA.industrialG,
  sla: SNOW_MEDIA.industrialS,
  contracts: SNOW_MEDIA.bedrock2,
  coverage: SNOW_MEDIA.barrieRemoval2,
  assuranceNarrative: SNOW_MEDIA.ctvBarrie(10),
} as const;

/** Eight service deep dives — parking through office campus. */
export const SNOW_HUB_DEEP_DIVE_RASTERS: readonly SnowHubRaster[] = [
  SNOW_MEDIA.hubDefault,
  SNOW_MEDIA.industrial(3),
  SNOW_MEDIA.industrial(1),
  SNOW_MEDIA.industrial(7),
  SNOW_MEDIA.industrial(4),
  SNOW_MEDIA.ctvBarrie(2),
  SNOW_MEDIA.ctvBarrie(7),
  SNOW_MEDIA.bedrock3,
];

/** Property-type tab imagery (order matches COMMERCIAL_SNOW_PROPERTY_TYPES.types). */
export const SNOW_HUB_PROPERTY_TAB_RASTERS: readonly SnowHubRaster[] = [
  SNOW_MEDIA.plazaParkside,
  SNOW_MEDIA.bedrock6,
  SNOW_MEDIA.industrial(6),
  SNOW_MEDIA.industrial(8),
  SNOW_MEDIA.ctvBarrie(8),
  SNOW_MEDIA.ctvBarrie(9),
  SNOW_MEDIA.ctvBarrieMain,
  SNOW_MEDIA.ctvComma,
];

/** Why-choose accordion imagery (order matches COMMERCIAL_SNOW_WHY_CHOOSE.items). */
export const SNOW_HUB_WHY_CHOOSE_RASTERS: readonly SnowHubRaster[] = [
  SNOW_MEDIA.barrieRemoval2,
  SNOW_MEDIA.industrial(7),
  SNOW_MEDIA.industrial(3),
  SNOW_MEDIA.ctvBarrie(5),
  SNOW_MEDIA.bedrock2,
  SNOW_MEDIA.hubDefault,
  SNOW_MEDIA.industrial(4),
  SNOW_MEDIA.industrial(2),
  SNOW_MEDIA.ctvBarrie(6),
  SNOW_MEDIA.industrial(0),
];

const posterCtv = SNOW_MEDIA.ctvBarrie(1).src;

/** Local MP4s for proof / media chapter — controls only, no autoplay. */
export const SNOW_HUB_FIELD_VIDEOS: readonly SnowHubVideo[] = [
  snowVideo(
    "247 snow service Orillia, commercial salting Barrie, commercial snow removal Barrie, emergency snow removal Simcoe., Ground Level Contracting CTV.MP4",
    "CTV — Ground Level Contracting winter operations",
    "Full segment clip — commercial snow and salting across Simcoe County.",
    posterCtv,
  ),
  snowVideo(
    "247 snow service Orillia, commercial salting Barrie, commercial snow removal Barrie, emergency snow removal Simcoe., Ground Level Contracting CTV s.MP4",
    "CTV — Short field cut",
    "B-roll and on-site winter service coverage.",
    posterCtv,
  ),
  snowVideo(
    "247 snow service Orillia, commercial salting Barrie, commercial snow removal Barrie, emergency snow removal Simcoe., Ground Level Contracting CTV 3.MP4",
    "CTV — Extended coverage",
    "Additional context from the Barrie newscast package.",
    posterCtv,
  ),
  snowVideo(
    "Ground Level Contracting - Project Video.MP4",
    "Project video — Ground Level Contracting",
    "Commercial construction and site operations reel.",
    SNOW_MEDIA.bedrock3.src,
  ),
  snowVideo(
    "Ground Level Clip.MP4",
    "Ground Level clip",
    "Quick brand and equipment highlight.",
    SNOW_MEDIA.barrieSnow2.src,
  ),
];
