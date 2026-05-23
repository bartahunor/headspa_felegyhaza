import { useEffect, useRef, useState } from "react";

import bgImage from "../../assets/mountain_bg.png";
import midImage from "../../assets/buddha_at_lake2.png";
import fgImage from "../../assets/lush_plants3.png";

export default function ParallaxHeroSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const scrollable = sectionHeight - viewportHeight;
      const p = Math.min(Math.max(scrolled / scrollable, 0), 1);

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgY  = progress * -150;
  const midY = progress * -100;
  const fgY  = progress * -60;

  const layerStyle = (translateY) => ({
    position: "absolute",
    left: 0,
    top: "50%",
    width: "100%",
    height: "auto",
    objectFit: "contain",
    transform: `translateY(calc(-50% + ${translateY}px))`,
    willChange: "transform",
  });

  return (
    <>
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
          <img src={bgImage}  alt="Background"    style={layerStyle(bgY)}  />
          <img src={midImage} alt="Middle Layer"  style={layerStyle(midY)} />
          <img src={fgImage} alt="Foreground" style={{
            ...layerStyle(fgY),
            top: "80%",
          }} />
        </div>
      </section>
    </>
  );
}