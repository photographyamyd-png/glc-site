/**
 * Project session hook — GLC site.
 * Drains stdin (hook payload) and exits 0. Extend when Cursor documents sessionStart stdout schema.
 */
import { readFileSync } from "node:fs";

readFileSync(0, "utf8");
process.exit(0);
