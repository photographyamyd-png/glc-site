/**
 * Upload listing hero/logo images to visible file inputs on the current page.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Page } from "playwright";
import { getListingImageUrls } from "@/lib/site/nap";

const TMP_DIR = join(process.cwd(), "seo", "tmp");

async function downloadToTemp(url: string, filename: string): Promise<string> {
  if (!existsSync(TMP_DIR)) {
    mkdirSync(TMP_DIR, { recursive: true });
  }

  const dest = join(TMP_DIR, filename);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download ${url} (${res.status})`);
  }

  writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  return dest;
}

export type ImageUploadResult = {
  attempted: number;
  uploaded: number;
  paths: string[];
};

export async function uploadListingImages(page: Page): Promise<ImageUploadResult> {
  const images = getListingImageUrls();
  const localPath = await downloadToTemp(images.hero, "listing-hero.jpg");

  const inputs = page.locator('input[type="file"]');
  const count = await inputs.count();
  const result: ImageUploadResult = { attempted: count, uploaded: 0, paths: [localPath] };

  for (let i = 0; i < count; i++) {
    const input = inputs.nth(i);
    const visible = await input.isVisible().catch(() => false);
    if (!visible) continue;

    try {
      await input.setInputFiles(localPath);
      result.uploaded++;
    } catch {
      // Some sites use custom widgets; skip silently
    }
  }

  return result;
}
