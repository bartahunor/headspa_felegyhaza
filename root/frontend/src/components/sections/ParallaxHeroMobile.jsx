import { useEffect, useRef, useState } from "react";

import bgImage from "../../assets/mountain_bg.png";
import midImage from "../../assets/buddha_at_lake2.png";
import fgImage from "../../assets/lush_plants3.png";

export default function ParallaxHeroMobile() {
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

  // Mobilon kisebb szorzók — kisebb képernyő, finomabb mozgás
  const bgY  = progress * -60;
  const midY = progress * -40;
  const fgY  = progress * -20;

  const layerStyle = (translateY) => ({
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transform: `translateY(${translateY}px)`,
    willChange: "transform",
  });

  return (
    <>
      <section
        ref={sectionRef}
        style={{ height: "250vh", position: "relative", backgroundColor: "#803b3b" }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <img src={bgImage}  alt="Background"   style={layerStyle(bgY)}  />
          <img src={midImage} alt="Middle Layer"  style={layerStyle(midY)} />
          <img src={fgImage} alt="Foreground" style={{
            ...layerStyle(fgY),
            objectPosition: "center bottom",
          }} />
        </div>
      </section>
    </>
  );
}