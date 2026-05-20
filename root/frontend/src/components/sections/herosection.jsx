import { useEffect, useRef } from "react";

import bgImage from "../../assets/mountain_bg.png";
import midImage from "../../assets/buddha_at_lake.png";
import fgImage from "../../assets/lush_plants.png";

export default function ParallaxHero() {
  const containerRef = useRef(null);
  const layerRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speeds = [0.15, 0.45, 0.65];

      layerRefs.current.forEach((layer, i) => {
        if (layer) {
          layer.style.transform = `translateY(${scrollY * speeds[i]}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: "200vh" }}  
    >
      {/* Hátsó réteg: hegyes táj - a tetején kezdődik */}
      <div
        ref={(el) => (layerRefs.current[0] = el)}
        className="absolute w-full"
        style={{ willChange: "transform", zIndex: 1, top: "0px" }}
      >
        <img src={bgImage} alt="" className="w-full" style={{ height: "auto" }} draggable={false} />
      </div>

      {/* Középső réteg: buddha - középtájon */}
      <div
        ref={(el) => (layerRefs.current[1] = el)}
        className="absolute w-full"
        style={{ willChange: "transform", zIndex: 2, top: "3%" }}
      >
        <img src={midImage} alt="" className="w-full" style={{ height: "auto" }} draggable={false} />
      </div>

      {/* Előtér réteg: növényzet - alul */}
      <div
        ref={(el) => (layerRefs.current[2] = el)}
        className="absolute w-full"
        style={{ willChange: "transform", zIndex: 3, top: "25%" }}
      >
        <img src={fgImage} alt="" className="w-full" style={{ height: "auto" }} draggable={false} />
      </div>

      {/* Szöveg - a viewport tetején marad */}
      <div
        className="sticky top-0 h-screen flex flex-col items-center justify-center"
        style={{ zIndex: 10 }}
      >
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg text-center px-4">
          HeadSpa Félegyháza
        </h1>
        <p className="text-white text-xl mt-4 drop-shadow-md">
          Fedezze fel az igazi kikapcsolódást
        </p>
      </div>

      {/* Scroll jelző */}
      <div
        className="absolute w-full flex justify-center"
        style={{ zIndex: 10, top: "85vh" }}
      >
        <div className="animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}