import Lenis from "lenis";
import { useEffect } from "react";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,        // görgetés sebessége (magasabb = lassabb/simább)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // mozgás görbéje
      smoothWheel: true,    // egérgörgő simítása
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}