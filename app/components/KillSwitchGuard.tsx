"use client";

/**
 * ─── USS Remote Kill Switch Guard ───────────────────────────────────────────
 *
 * Client-side guard that fetches the kill-switch status via the GitHub API
 * on every page load. Uses the API (not the raw CDN URL) to avoid GitHub's
 * aggressive CDN caching which can serve stale content for ~5 minutes.
 *
 * Compatible with Next.js `output: "export"` (static site).
 *
 * Control Gist:
 *   https://gist.github.com/Aftab-Ahmed-Soomro/2a16aa5eb3bc304e5394d005107744de
 *
 * Set: {"status": "deactivated"}  → site suspended (MaintenancePage shown)
 * Set: {"status": "active"}       → site live
 *
 * Safety: if Gist is unreachable, the site stays live (fail-open).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useEffect, useState } from "react";
import { MaintenancePage } from "./MaintenancePage";

// GitHub REST API — always returns fresh data, bypasses CDN cache
const GIST_API_URL =
  "https://api.github.com/gists/2a16aa5eb3bc304e5394d005107744de";

type Status = "checking" | "active" | "deactivated";

export function KillSwitchGuard({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    let cancelled = false;

    fetch(GIST_API_URL, {
      cache: "no-store",
      headers: {
        // GitHub API v3 recommended header
        Accept: "application/vnd.github+json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((gist) => {
        if (cancelled) return;
        // API response: gist.files["kill-switch.json"].content is a JSON string
        const rawContent = gist?.files?.["kill-switch.json"]?.content ?? "{}";
        const data = JSON.parse(rawContent);
        setStatus(data?.status === "deactivated" ? "deactivated" : "active");
      })
      .catch((err) => {
        // Gist unreachable → fail-open (site stays live)
        console.warn("[Kill Switch] Could not reach GitHub API. Defaulting to active.", err);
        if (!cancelled) setStatus("active");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // While checking: render nothing — prevents content flash before suspension
  if (status === "checking") return null;

  // Deactivated: show maintenance page (covers everything)
  if (status === "deactivated") return <MaintenancePage />;

  // Active: render the real site
  return <>{children}</>;
}
