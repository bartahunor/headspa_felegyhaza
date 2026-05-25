import { useEffect, useState } from "react";
import FaqContentSection from "../components/sections/FaqContentSection";
import FaqHeroSection from "../components/sections/FaqHeroSection";
import heroBg from "../assets/mountain_bg2.png";

export default function FaqPage() {
  return (
    <main>
      <FaqHeroSection backgroundImage={heroBg} />
      <FaqContentSection />
    </main>
  );
}