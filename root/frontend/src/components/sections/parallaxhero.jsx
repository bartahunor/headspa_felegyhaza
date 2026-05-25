import { useEffect, useRef, useState } from "react";

import bgImage  from "../../assets/mountain_bg2.png";
import midImage from "../../assets/buddha_at_lake5.png";
import fgImage  from "../../assets/lush_plants4.png";

export default function ParallaxHeroSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress]     = useState(0);
  const [midReady, setMidReady]     = useState(false);
  const [fgReady,  setFgReady]      = useState(false);

  /* ── Entrance animáció – egymás után csúszik be alulról ── */
  useEffect(() => {
    const midTimer = setTimeout(() => setMidReady(true), 100);   // kis késleltetés hogy a bg már látszódjon
    const fgTimer  = setTimeout(() => setFgReady(true),  300);   // fg 400ms-sel a mid után
    return () => {
      clearTimeout(midTimer);
      clearTimeout(fgTimer);
    };
  }, []);

  /* ── Scroll parallax ── */
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect          = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled   = -rect.top;
      const scrollable = sectionHeight - viewportHeight;
      const p          = Math.min(Math.max(scrolled / scrollable, 0), 1);

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgY  = progress * -130;
  const midY = progress * -100;
  const fgY  = progress * -60;

  /* ── Parallax: a képet pozicionálja scroll alapján ── */
  const layerStyle = (translateY) => ({
    width: "100%",
    height: "auto",
    objectFit: "contain",
    transform: `translateY(calc(-50% + ${translateY}px))`,
    willChange: "transform",
  });

  /* ── Entrance: csak a wrapper div-en van, nem érinti a parallax transform-ot ── */
  const wrapperStyle = (ready, top) => ({
    position: "absolute",
    left: 0,
    top: top,
    width: "100%",
    transform: `translateY(${ready ? "0px" : "120px"})`,
    transition: ready
      ? "transform 1s cubic-bezier(0.22, 1, 0.36, 1)"
      : "none",
  });

  return (
    <section
      ref={sectionRef}
      style={{ height: "300vh", position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Háttér – azonnal látszik, nincs entrance wrapper */}
        <img
          src={bgImage}
          alt="Background"
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            ...layerStyle(bgY),
          }}
        />

        {/* Középső réteg – entrance wrapper + parallax a képen */}
        <div style={wrapperStyle(midReady, "60%")}>
          <img
            src={midImage}
            alt="Middle Layer"
            style={layerStyle(midY)}
          />
        </div>

        {/* Előtér – entrance wrapper + parallax a képen */}
        <div style={wrapperStyle(fgReady, "90%")}>
          <img
            src={fgImage}
            alt="Foreground"
            style={layerStyle(fgY)}
          />
        </div>
      </div>
    </section>
  );
}