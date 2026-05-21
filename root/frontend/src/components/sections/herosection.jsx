import { useEffect, useRef, useState } from "react";

import bgImage from "../../assets/mountain_bg.png";
import midImage from "../../assets/buddha_at_lake2.png";
import fgImage from "../../assets/lush_plants.png";

const LAYERS = [
  { speed: 0.0,  alignBottom: false, initialOffset: 0    }, // háttér — fix
  { speed: 0.3, alignBottom: false, initialOffset: 0  }, // buddha — közepes
  { speed: 0.60, alignBottom: true                        }, // növényzet
];

export default function ParallaxHero() {
  const containerRef = useRef(null);
  const layerRefs    = useRef([]);
  const rafRef       = useRef(null);
  const bgImgRef     = useRef(null);

  // Konténer magassága = háttérkép renderelt magassága
  const updateContainerHeight = () => {
    if (bgImgRef.current && containerRef.current) {
      containerRef.current.style.height =
        `${bgImgRef.current.offsetHeight}px`;
    }
  };

  useEffect(() => {
    const getH = () => containerRef.current?.offsetHeight ?? window.innerHeight;

    const update = () => {
      const scrollY = window.scrollY;
      const h = getH();
      layerRefs.current.forEach((layer, i) => {
        if (!layer) return;
        const { speed, alignBottom, initialOffset } = LAYERS[i];
        const img = layer.querySelector("img");

        let startY;
        if (alignBottom) {
          const imgH = img?.offsetHeight ?? 0;
          startY = window.innerHeight - imgH + 50;
        } else {
          startY = (initialOffset ?? 0) * h;
        }

        layer.style.transform =
          `translate3d(0, ${startY + scrollY * speed}px, 0)`;
      });
      rafRef.current = null;
    };

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => { updateContainerHeight(); update(); }, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      // Nincs fix height — a bgImgRef.onLoad beállítja dinamikusan
    >
      {[bgImage, midImage, fgImage].map((src, i) => (
        <div
          key={i}
          ref={(el) => (layerRefs.current[i] = el)}
          className="absolute w-full top-0"
          style={{ willChange: "transform", zIndex: i + 1 }}
        >
          <img
            src={src}
            alt=""
            draggable={false}
            className="w-full"
            style={{ display: "block", height: "auto" }}
            // Csak a háttérképnél kell az onLoad és a ref
            {...(i === 0 ? {
              ref: bgImgRef,
              onLoad: updateContainerHeight,
            } : {})}
          />
        </div>
      ))}
    </section>
  );
}