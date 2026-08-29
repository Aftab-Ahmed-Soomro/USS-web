/**
 * ─── USS Kill Switch ───────────────────────────────────────────────────────
 *
 * Set ENABLED to true  → visitors see the maintenance page
 * Set ENABLED to false → site works normally
 *
 * How to activate:
 *   1. Change `false` to `true` below
 *   2. Save the file
 *   3. git add . && git commit -m "chore: enable kill switch" && git push
 *      (your hosting auto-rebuilds and deploys — done!)
 *
 * ──────────────────────────────────────────────────────────────────────────
 */
export const KILL_SWITCH_ENABLED = false;
