import { useEffect, useRef, useState } from "react";
import ArriveCard from "../ui/ArriveCard.jsx";

const INFO_CARDS = [
  {
    id: 1,
    icon: "face_6",
    title: "Smink nélkül",
    description: "A kezelésekre lehetőség szerint smink nélkül érkezz a maximális komfort érdekében.",
    // bal oldal
    side: "left",
  },
  {
    id: 2,
    icon: "schedule",
    title: "Pontosan érkezz",
    description: "Kérjük, érkezz pontosan a foglalt időpontodra.",
    // jobb oldal
    side: "right",
  },
  {
    id: 3,
    icon: "door_front",
    title: "Várakozás",
    description: "Korábbi érkezés esetén kérjük, várj az üzlet előtt, amíg érted megyünk.",
    // bal oldal felé ágazik ki
    side: "left",
  },
];

// A 3 megálló a path hosszának hány %-ánál van (0–1)
const STOP_FRACTIONS = [0.37, 0.485, 0.535];

// Elágazó vonal hossza (SVG koordinátában)
const BRANCH_LEN = 90;

const RIBBON_PATH =
  "M 0 900 C 80 820, 60 680, 200 620 S 400 540, 380 400 S 260 220, 440 160 S 620 80, 800 0";

// ─── Elágazási pont kiszámítása a path mentén ─────────────────────────────
// tangent alapján merőleges irányt számolunk, majd a side alapján irányt választunk
function getBranchData(pathEl, fraction, side) {
  const total = pathEl.getTotalLength();
  const t = fraction * total;
  const pt = pathEl.getPointAtLength(t);

  // tangent: kis delta előre-hátra
  const d = 2;
  const p1 = pathEl.getPointAtLength(Math.max(0, t - d));
  const p2 = pathEl.getPointAtLength(Math.min(total, t + d));
  const tx = p2.x - p1.x;
  const ty = p2.y - p1.y;
  const len = Math.sqrt(tx * tx + ty * ty) || 1;

  // merőleges vektor (normalizált)
  const nx = -ty / len;
  const ny = tx / len;

  // side: "left" → pozitív normál irány, "right" → negatív
  const dir = side === "left" ? 1 : -1;

  return {
    x1: pt.x,
    y1: pt.y,
    x2: pt.x + nx * BRANCH_LEN * dir,
    y2: pt.y + ny * BRANCH_LEN * dir,
  };
}

export default function HowToArrive() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [pathLength, setPathLength] = useState(0);
  const [branches, setBranches] = useState([]);
  const [cardsVisible, setCardsVisible] = useState(false);

  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    if (pathRef.current) {
      const total = pathRef.current.getTotalLength();
      setPathLength(total);

      // Elágazási pontok kiszámítása
      const b = INFO_CARDS.map((card, i) =>
        getBranchData(pathRef.current, STOP_FRACTIONS[i], card.side)
      );
      setBranches(b);
    }
  }, []);

  // IntersectionObserver
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Kártyák késleltetett megjelenése: szalag animáció (2.4s) + kis delay
  useEffect(() => {
    if (!revealed) return;
    const timer = setTimeout(() => setCardsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, [revealed]);

  // SVG viewport mérete (a preserveAspectRatio="none" miatt ez relatív)
  // A kártyák % pozícióját az SVG viewBox koordinátákból számoljuk
  const VB_W = 700;
  const VB_H = 900;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-8 pb-40 px-[20px] md:px-[80px]"
      style={{ background: "#172c21", minHeight: "120vh" }}
    >
      {/* ── Cím ── */}
      <div
        ref={titleRef}
        className="relative z-20 flex flex-col items-center text-center mb-16"
        style={{
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <span
          className="block text-[12px] uppercase tracking-[0.2em] mb-2"
          style={{ color: "var(--color-secondary-fixed-dim)" }}
        >
          Fontos tudnivalók
        </span>
        <h2
          className="font-['Bodoni_Moda'] text-[48px] font-medium mb-4"
          style={{ color: "var(--color-on-primary)" }}
        >
          Hogyan érkezz?
        </h2>
        <div
          className="w-20 h-[1.5px] mx-auto opacity-30"
          style={{ backgroundColor: "var(--color-on-primary)" }}
        />
      </div>
      {/* ── Animált szalag + elágazások — csak desktopOn ── */}
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
        style={{ zIndex: 0 }}
      >
        {/* Szalag árnyék */}
        <path
          d={RIBBON_PATH}
          fill="none"
          stroke="rgba(77, 160, 100, 0.12)"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Fő szalag */}
        <path
          ref={pathRef}
          d={RIBBON_PATH}
          fill="none"
          stroke="#4ade80"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: pathLength || 2000,
            strokeDashoffset: revealed ? 0 : pathLength || 2000,
            transition: revealed
              ? "stroke-dashoffset 2.4s cubic-bezier(0.22, 1, 0.36, 1)"
              : "none",
            opacity: 0.45,
          }}
        />

        {/* Belső fényes csík */}
        <path
          d={RIBBON_PATH}
          fill="none"
          stroke="rgba(187, 247, 208, 0.45)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: pathLength || 2000,
            strokeDashoffset: revealed ? 0 : pathLength || 2000,
            transition: revealed
              ? "stroke-dashoffset 2.4s cubic-bezier(0.22, 1, 0.36, 1) 0.1s"
              : "none",
          }}
        />

        {/* Elágazó vonalak + pontok */}
        {branches.map((b, i) => (
          <g key={i}>
            {/* Elágazó vonal */}
            <line
              x1={b.x1} y1={b.y1}
              x2={b.x2} y2={b.y2}
              stroke="rgba(187, 247, 208, 0.5)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="60"
              strokeDashoffset={cardsVisible ? 0 : 60}
              style={{
                transition: cardsVisible
                  ? `stroke-dashoffset 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s`
                  : "none",
              }}
            />
            {/* Pont a fővonalon */}
            <circle
              cx={b.x1} cy={b.y1} r="5"
              fill="#4ade80"
              opacity={cardsVisible ? 0.9 : 0}
              style={{
                transition: cardsVisible
                  ? `opacity 0.3s ease ${i * 0.15}s`
                  : "none",
              }}
            />
            {/* Pont az elágazás végén */}
            <circle
              cx={b.x2} cy={b.y2} r="3"
              fill="rgba(187, 247, 208, 0.7)"
              opacity={cardsVisible ? 1 : 0}
              style={{
                transition: cardsVisible
                  ? `opacity 0.3s ease ${0.3 + i * 0.15}s`
                  : "none",
              }}
            />
          </g>
        ))}
      </svg>

      {/* ── Lebegő kártyák — csak desktopOn ── */}
      {branches.map((b, i) => {
        const card = INFO_CARDS[i];
        // SVG viewBox koordinátát % pozícióvá alakítjuk
        const xPct = (b.x2 / VB_W) * 100;
        const yPct = (b.y2 / VB_H) * 100;
        const isLeft = card.side === "left";

        return (
          <div
            key={card.id}
            className="absolute z-10 hidden md:block"
            style={{
              left: `${xPct}%`,
              top: `${yPct}%`,
              // Kártya igazítása: bal oldali kártya jobbra nyúlik, jobb oldali balra
              transform: isLeft
                ? "translate(8px, -50%)"
                : "translate(calc(-100% - 8px), -50%)",
              opacity: cardsVisible ? 1 : 0,
              transition: cardsVisible
                ? `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.4 + i * 0.18}s,
                   transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.4 + i * 0.18}s`
                : "none",
              ...(cardsVisible
                ? {}
                : { transform: isLeft ? "translate(24px, -50%)" : "translate(calc(-100% - 24px), -50%)" }),
            }}
          >
            <ArriveCard
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </div>
        );
      })}

      {/* ── Mobil lista — csak mobilon látszik ── */}
      <div className="md:hidden flex flex-col gap-4 relative z-10">
        {/* Dekoratív függőleges vonal bal oldalon */}
        <div
          className="absolute left-[18px] top-0 bottom-0 w-[2px] rounded-full"
          style={{ background: "rgba(74, 222, 128, 0.2)" }}
        />

        {INFO_CARDS.map((card, i) => (
          <div
            key={card.id}
            className="flex items-start gap-4 pl-1"
            style={{
              opacity: cardsVisible ? 1 : 0,
              transform: cardsVisible ? "translateX(0)" : "translateX(16px)",
              transition: cardsVisible
                ? `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.2 + i * 0.15}s,
                   transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.2 + i * 0.15}s`
                : "none",
            }}
          >
            {/* Dot a vonalra */}
            <div
              className="relative z-10 mt-[22px] w-[10px] h-[10px] rounded-full flex-shrink-0"
              style={{ background: "#4ade80" }}
            />
            <ArriveCard
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}