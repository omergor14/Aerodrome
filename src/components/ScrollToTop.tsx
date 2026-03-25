import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top when the route pathname (or hash target) changes.
 * Query-string-only updates (e.g. ?tab= on /product) are omitted so in-page UI
 * can control scroll without fighting this effect.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
