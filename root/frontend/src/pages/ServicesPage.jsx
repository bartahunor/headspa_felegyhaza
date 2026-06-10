import { useEffect, useState } from "react";
import ServicesHero from "../components/sections/ServicesHero";
import useLenis from "../hooks/useLenis";

export default function ServicesPage() {
  useLenis();
  return (
    <main>
      <ServicesHero />
    </main>
  );
}