/**
 * ─── USS Remote Kill Switch ──────────────────────────────────────────────────
 *
 * Fetches the kill-switch status from a GitHub Gist on every server request.
 * No redeploy needed — just edit the Gist to activate/deactivate the site.
 *
 * Control Gist (raw):
 *   https://gist.githubusercontent.com/Aftab-Ahmed-Soomro/2a16aa5eb3bc304e5394d005107744de/raw/kill-switch.json
 *
 * To DEACTIVATE the site → set Gist content to: {"status": "deactivated"}
 * To ACTIVATE  the site → set Gist content to: {"status": "active"}
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Always-latest URL (no commit hash) so every Gist edit is reflected instantly
const GIST_RAW_URL =
  "https://gist.githubusercontent.com/Aftab-Ahmed-Soomro/2a16aa5eb3bc304e5394d005107744de/raw/kill-switch.json";

/**
 * Returns true if the site should be suspended (kill switch active).
 * Falls back to false (site stays live) if the Gist is unreachable.
 */
export async function isSiteDeactivated(): Promise<boolean> {
  try {
    const res = await fetch(GIST_RAW_URL, {
      // Never cache — always fetch fresh on every incoming request
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn(`[Kill Switch] Gist fetch failed with status ${res.status}. Defaulting to active.`);
      return false;
    }

    const data = await res.json();
    return data?.status === "deactivated";
  } catch (err) {
    // Network error, Gist down, etc. — fail open (site stays live)
    console.warn("[Kill Switch] Could not reach control Gist. Defaulting to active.", err);
    return false;
  }
}
