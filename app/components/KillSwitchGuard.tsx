"use client";

/**
 * ─── USS Remote Kill Switch Guard ───────────────────────────────────────────
 *
 * Client-side guard that fetches the kill-switch Gist on every page load.
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

// Always-latest URL (no commit hash) so edits to the Gist are instant
const GIST_RAW_URL =
  "https://gist.githubusercontent.com/Aftab-Ahmed-Soomro/2a16aa5eb3bc304e5394d005107744de/raw/kill-switch.json";

type Status = "checking" | "active" | "deactivated";

export function KillSwitchGuard({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    let cancelled = false;

    fetch(`${GIST_RAW_URL}?_=${Date.now()}`, {
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) {
          setStatus(data?.status === "deactivated" ? "deactivated" : "active");
        }
      })
      .catch((err) => {
        // Gist unreachable → fail-open (site stays live)
        console.warn("[Kill Switch] Could not reach control Gist. Defaulting to active.", err);
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
