import { useEffect, useState } from "react";

/**
 * Hook pour afficher le contenu avec un délai (fade-in).
 * @param delay - Délai en ms avant de passer isVisible à true (défaut 500)
 * @returns isVisible - true après le délai
 */
export function useVisibleOnMount(delay = 500): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
}
