import { useEffect, useState } from "react";
import ParallaxHeroSection from "../components/sections/parallaxhero.jsx";
import ParallaxHeroMobile from "../components/sections/ParallaxHeroMobile.jsx";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <main>
      {isMobile ? <ParallaxHeroMobile /> : <ParallaxHeroSection />}
      <section
        className="relative min-h-screen bg-stone-100 flex items-center justify-center"
        style={{ zIndex: -10 }}
      >
        <h2 className="text-4xl text-stone-600">Teszt szekció</h2>
      </section>
    </main>
  );
}