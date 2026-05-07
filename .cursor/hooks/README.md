# Project Cursor hooks (glc-site)

- **`hooks.json`** — registers hooks for this repository (version-controlled).
- **`glc-session-rules-context.mjs`** — runs on **`sessionStart`**, drains stdin, exits cleanly. Extend this script if your Cursor version supports returning structured context from this event.

To add more hooks, follow [Cursor hooks](https://docs.cursor.com) / your team’s conventions. Prefer **fail-open** behavior unless a hook is explicitly **failClosed** for safety.
