import { buildDailySeoDigest } from "./local-seo/daily-digest-report";

async function main(): Promise<void> {
  console.log(await buildDailySeoDigest());
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
