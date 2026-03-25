import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top on client-side route changes (e.g. footer links).
 */
export function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

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
  }, [pathname, search, hash]);

  return null;
}
