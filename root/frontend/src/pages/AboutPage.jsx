import { useEffect, useState } from "react";
import AboutGutIldiko from "../components/sections/AboutGutIldiko";
import AboutCoworker from "../components/sections/AboutCoworker";
import useLenis from "../hooks/useLenis";

export default function AboutPage() {
  useLenis();
  return (
    <main>
      <AboutGutIldiko />
      <AboutCoworker />
    </main>
  );
}