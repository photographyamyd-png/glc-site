import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

export const SESSIONS_DIR = join(process.cwd(), "seo", "browser-sessions");

export function sessionPath(id: string): string {
  return join(SESSIONS_DIR, `${id}.json`);
}

export function ensureSessionsDir(): void {
  if (!existsSync(SESSIONS_DIR)) {
    mkdirSync(SESSIONS_DIR, { recursive: true });
  }
}

export function hasSession(id: string): boolean {
  return existsSync(sessionPath(id));
}
