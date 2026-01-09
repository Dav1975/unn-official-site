import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si une ancre (hash) est présente, tenter de scroller vers l'élément ciblé.
    if (hash) {
      // small timeout to wait for element to be in the DOM after route change
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        // fallback to top
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 50);
      return;
    }

    // Par défaut, remonter en haut de la page en smooth
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

