import { useEffect, useRef, useState } from "react";

import bgImage  from "../../assets/mountain_bg2.png";
import midImage from "../../assets/buddha_at_lake5.png";
import fgImage  from "../../assets/lush_plants4.png";

export default function ParallaxHeroSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [midReady, setMidReady]   = useState(false);
  const [fgReady,  setFgReady]    = useState(false);
  const [textReady, setTextReady] = useState(false);
  const [textDone,  setTextDone]  = useState(false); // ← entrance vége

  useEffect(() => {
    const midTimer  = setTimeout(() => setMidReady(true),  600);
    const fgTimer   = setTimeout(() => setFgReady(true),   900);
    const textTimer = setTimeout(() => setTextReady(true), 1300);
    // 1300 + 1400ms transition = ~2700ms után már biztosan kész
    const doneTimer = setTimeout(() => setTextDone(true),  2800);
    return () => {
      clearTimeout(midTimer);
      clearTimeout(fgTimer);
      clearTimeout(textTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect           = section.getBoundingClientRect();
      const sectionHeight  = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled       = -rect.top;
      const scrollable     = sectionHeight - viewportHeight;
      const p              = Math.min(Math.max(scrolled / scrollable, 0), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgY  = progress * -130;
  const midY = progress * -100;
  const fgY  = progress * -60;

  // Csak akkor számít a scroll fade, ha az entrance már lefutott
  const textFade = textDone ? Math.max(0, 1 - progress / 0.3) : 1;

  const layerStyle = (translateY) => ({
    width: "100%",
    height: "auto",
    objectFit: "contain",
    transform: `translateY(calc(-50% + ${translateY}px))`,
    willChange: "transform",
  });

  const wrapperStyle = (ready, top) => ({
    position: "absolute",
    left: 0,
    top: top,
    width: "100%",
    transform: `translateY(${ready ? "0px" : "120px"})`,
    transition: ready ? "transform 1s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
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
        {/* Háttér */}
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

        {/* Középső réteg */}
        <div style={wrapperStyle(midReady, "60%")}>
          <img src={midImage} alt="Middle Layer" style={layerStyle(midY)} />
        </div>

        {/* Előtér */}
        <div style={wrapperStyle(fgReady, "90%")}>
          <img src={fgImage} alt="Foreground" style={layerStyle(fgY)} />
        </div>

        {/* ── Felirat mögötti radial vignette ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 15,
            background: `radial-gradient(
              ellipse 70% 50% at 50% 50%,
              rgba(10, 20, 14, 0.60) 0%,
              rgba(10, 20, 14, 0.30) 55%,
              transparent 100%
            )`,
            opacity: textReady ? textFade : 0,
            transition: !textDone ? "opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
            pointerEvents: "none",
          }}
        />

        {/* ── Hero felirat ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            top: "25%",
            zIndex: 20,
            pointerEvents: "none",
            opacity: textReady ? textFade : 0,
            transform: textReady ? "translateY(0px)" : "translateY(20px)",
            transition: !textDone
              ? "opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)"
              : "none",
          }}
        >
          {/* Dekoratív vonal fölül */}
          <div style={{
            width: "48px",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.6)",
            marginBottom: "18px",
          }} />

          {/* Alcím */}
          <p style={{
            fontFamily: "var(--font-manrope, 'Manrope', sans-serif)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.82)",
            margin: "0 0 14px 0",
            textShadow: "0 1px 8px rgba(0,0,0,0.5)",
          }}>
            Hair Style & Head Spa
          </p>

          {/* Fő név */}
          <h1 style={{
            fontFamily: "var(--font-bodoni, 'Bodoni Moda', serif)",
            fontSize: "clamp(44px, 7vw, 88px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            textAlign: "center",
            margin: 0,
            color: "rgba(255,255,255,0.97)",
            textShadow: `
              0 2px 6px rgba(0,0,0,0.4),
              0 8px 24px rgba(0,0,0,0.4),
              0 20px 60px rgba(0,0,0,0.3)
            `,
          }}>
            GUT ILDI
          </h1>

          {/* Dekoratív vonal alul */}
          <div style={{
            width: "48px",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.6)",
            marginTop: "18px",
          }} />
        </div>
      </div>
    </section>
  );
}