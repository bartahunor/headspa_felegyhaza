import { useEffect, useState } from "react";
import ServicesHero from "../components/sections/ServicesHero";
import ServiceDetails from "../components/sections/ServiceDetails";
import GiftCard from "../components/sections/GiftCard";
import useLenis from "../hooks/useLenis";

export default function ServicesPage() {
  useLenis();
  return (
    <main>
      <ServicesHero />
      <ServiceDetails />
      <GiftCard />
    </main>
  );
}