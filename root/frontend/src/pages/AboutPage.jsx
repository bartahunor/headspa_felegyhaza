import { useEffect, useState } from "react";
import AboutGutIldiko from "../components/sections/AboutGutIldiko";

export default function AboutPage() {
  return (
    <main>
      <AboutGutIldiko />
      <section
        className="relative min-h-screen bg-stone-100 flex items-center justify-center"
        style={{ zIndex: -10 }}
      >
        <h2 className="text-4xl text-stone-600">Teszt szekció</h2>
      </section>
    </main>
  );
}