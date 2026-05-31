import { useEffect, useState } from "react";
import ParallaxHeroSection from "../components/sections/parallaxhero.jsx";
import ParallaxHeroMobile from "../components/sections/ParallaxHeroMobile.jsx";
import WorkflowSection from "../components/sections/Workflow.jsx";
import TestimonialSection from "../components/sections/TestimonalSection.jsx";
import WhatIsHeadSpa from "../components/sections/WhatIsHeadSpa.jsx";
import ServicesSection from "../components/sections/ServicesSection.jsx";
import ArriveSection from "../components/sections/ArriveSection.jsx";
import useLenis from "../hooks/useLenis";
import ServicesSectionNew from "../components/sections/ServicesSectionNew.jsx";
import HowToArrive from "../components/sections/HowToArrive.jsx";

export default function HomePage() {
  useLenis();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <main>
      {isMobile ? <ParallaxHeroMobile /> : <ParallaxHeroSection />}
      <ServicesSectionNew />
      <WhatIsHeadSpa />
      <HowToArrive />
      <WorkflowSection />
      <TestimonialSection />
    </main>
  );
}