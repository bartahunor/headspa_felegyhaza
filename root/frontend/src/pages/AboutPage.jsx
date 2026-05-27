import { useEffect, useState } from "react";
import AboutGutIldiko from "../components/sections/AboutGutIldiko";
import AboutCoworker from "../components/sections/AboutCoworker";

export default function AboutPage() {
  return (
    <main>
      <AboutGutIldiko />
      <AboutCoworker />
    </main>
  );
}