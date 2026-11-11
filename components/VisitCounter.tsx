"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Sends the page path (no query string) to /api/count on each page view, so the site can keep a
// plain daily count per page. No cookies, no storage, nothing about the visitor.
export function VisitCounter() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || typeof navigator === "undefined" || typeof navigator.sendBeacon !== "function") return;
    try {
      navigator.sendBeacon("/api/count", pathname);
    } catch {
      // Counting is best effort; never affect the page.
    }
  }, [pathname]);

  return null;
}
