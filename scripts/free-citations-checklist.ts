/**
 * Free local SEO citation checklist — uses shared NAP from lib/site/nap.ts.
 * Run: npm run seo:citations
 */
import { getNap, getListingDescriptions } from "@/lib/site/nap";
import { DIRECTORY_TARGETS, getDirectoriesByTier } from "./local-seo/directories";

function main(): void {
  const nap = getNap();
  const desc = getListingDescriptions();

  console.log("\n=== Ground Level Contracting — Citation Checklist ===\n");
  console.log("Use this exact NAP on every listing:\n");
  console.log(`  Name:    ${nap.name}`);
  console.log(`  Slogan:  ${nap.slogan}`);
  console.log(`  Phone:   ${nap.phone}`);
  console.log(`  Email:   ${nap.email}`);
  console.log(`  Address: ${nap.fullAddress}`);
  console.log(`  Web:     ${nap.website}\n`);
  console.log("Short description:\n  " + desc.short + "\n");

  for (const tier of [1, 2, 3, 4] as const) {
    const items = getDirectoriesByTier(tier);
    if (items.length === 0) continue;
    console.log(`--- Tier ${tier} ---`);
    items.forEach((t) => {
      console.log(`  ${t.platform}`);
      console.log(`    ${t.signupUrl}`);
      if (t.notes) console.log(`    Note: ${t.notes}`);
    });
    console.log("");
  }

  console.log("Generate full copy-paste pack: npm run seo:listing-pack");
  console.log("Track progress in: seo/listings-tracker.csv\n");
  console.log("After GBP is live, set in Vercel:");
  console.log("  NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL");
  console.log("  NEXT_PUBLIC_GOOGLE_REVIEW_SCORE / NEXT_PUBLIC_GOOGLE_REVIEW_COUNT\n");
}

main();
