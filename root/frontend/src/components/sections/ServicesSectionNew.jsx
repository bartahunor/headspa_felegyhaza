import { useState, useRef, useEffect, useCallback } from "react";
import ServiceOneCard from "../ui/ServiceOneCard";

// ─── Adatok ────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: 1,
    title: "RELAX 30' - Fejbőr frissítő Hajrituálé",
    duration: "30 perc + hajformázás",
    price: "14 990 Ft",
    icon: "spa",
  },
  {
    id: 2,
    title: "Oil Control Scalp - Zsírosodás elleni rituálé",
    duration: "60 perc + hajformázás",
    price: "24 900 Ft",
    icon: "spa",
  },
  {
    id: 3,
    title: "Healthy Scalp - Korpásodás elleni rituálé",
    duration: "60 perc + hajformázás",
    price: "24 900 Ft",
    icon: "spa",
  },
  {
    id: 4,
    title: "Prémium Head Spa Rituálé - 90 perc",
    duration: "90 perc + hajformázás",
    price: "32 900 Ft",
    icon: "spa",
  },
  {
    id: 5,
    title: "NOURISH – KERATÉ VAJAS Rituálé",
    duration: "60 perc + hajformázás",
    price: "24 900 Ft",
    icon: "spa",
  },
  {
    id: 6,
    title: "RELAX 30' - Fejbőr frissítő Hajrituálé",
    duration: "30 perc + hajformázás",
    price: "14 990 Ft",
    icon: "spa",
  },
];

// ─── Light Mote hook ────────────────────────────────────────────────────────
function useLightMotes(containerRef) {
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const createMote = () => {
      const mote = document.createElement("div");
      mote.classList.add("light-mote");

      const size = Math.random() * 6 + 3;
      mote.style.width = `${size}px`;
      mote.style.height = `${size}px`;
      mote.style.left = `${Math.random() * 100}%`;
      mote.style.top = `${Math.random() * 100}%`;

      const duration = Math.random() * 8000 + 8000;
      mote.style.animationDuration = `${duration}ms`;

      const driftX = (Math.random() - 0.5) * 120;
      const driftY = (Math.random() - 0.5) * 120;
      mote.style.setProperty("--driftX", `${driftX}px`);
      mote.style.setProperty("--driftY", `${driftY}px`);

      container.appendChild(mote);
      setTimeout(() => mote.remove(), duration);
    };

    const intervalId = setInterval(createMote, 180);
    return () => clearInterval(intervalId);
  }, [containerRef]);
}

// ─── Component ──────────────────────────────────────────────────────────────
export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const motesRef = useRef(null);
  const cardRefs = useRef([]);

  // Swipe tracking
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isSwiping = useRef(false);

  useLightMotes(motesRef);

  const scrollToCard = useCallback((index) => {
    const carousel = carouselRef.current;
    const card = cardRefs.current[index];
    if (!carousel || !card) return;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const carouselCenter = carousel.offsetWidth / 2;
    carousel.scrollTo({ left: cardCenter - carouselCenter, behavior: "smooth" });
  }, []);

  const goTo = useCallback(
    (index) => {
      const clamped = (index + SERVICES.length) % SERVICES.length;
      setActiveIndex(clamped);
      scrollToCard(clamped);
    },
    [scrollToCard]
  );

  // ── Első kártya középre igazítása betöltéskor ──
  // A kártyák mérete csak mount után ismert, ezért rövid delay kell
  useEffect(() => {
    const timer = setTimeout(() => scrollToCard(0), 50);
    return () => clearTimeout(timer);
  }, [scrollToCard]);

  // ── Natív touchmove listener passive:false-szal ──
  // React onTouchMove nem tudja meghívni e.preventDefault()-t (passive listener),
  // ezért natívan regisztráljuk, hogy az oldalsó page-scroll tiltható legyen
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onMove = (e) => {
      if (touchStartX.current === null) return;
      const dx = e.touches[0].clientX - touchStartX.current;
      const dy = e.touches[0].clientY - touchStartY.current;
      if (!isSwiping.current && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
        isSwiping.current = true;
      }
      if (isSwiping.current) e.preventDefault();
    };
    el.addEventListener("touchmove", onMove, { passive: false });
    return () => el.removeEventListener("touchmove", onMove);
  }, []);

  // ── Touch / swipe kezelés ──
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (touchStartX.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;

    // Ha dominánsan vízszintes a mozgás, megakadályozzuk az oldalsó page-scrollt
    if (!isSwiping.current && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
      isSwiping.current = true;
    }
    if (isSwiping.current) {
      e.preventDefault(); // oldalsó oldal-scroll tiltása
    }
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;

      // Csak ha dominánsan vízszintes és elég hosszú a swipe (>40px)
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) {
          goTo(activeIndex + 1); // balra swipe → következő
        } else {
          goTo(activeIndex - 1); // jobbra swipe → előző
        }
      }

      touchStartX.current = null;
      touchStartY.current = null;
      isSwiping.current = false;
    },
    [activeIndex, goTo]
  );

  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const progressPct = ((activeIndex + 1) / SERVICES.length) * 100;

  return (
    <section
      id="services"
      className="py-56 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #172c21 0%, #2d4236 50%, #1d2c1c 100%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 120px)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 120px)",
        marginTop: "-120px",
        zIndex: 10,
      }}
    >
      {/* ── Háttér dekoratív blur foltok ── */}
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none z-0"
        style={{ background: "rgba(77, 99, 86, 0.25)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full blur-2xl pointer-events-none z-0"
        style={{ background: "rgba(45, 66, 54, 0.4)" }}
        aria-hidden="true"
      />

      {/* ── Fényrészecskék ── */}
      <div
        ref={motesRef}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* ── Háttér nagy szám ── */}
      <div className="bg-number" aria-hidden="true">
        {String(activeIndex + 1).padStart(2, "0")}
      </div>

      {/* ── Cím ── */}
      <div
        ref={titleRef}
        className="relative z-300 flex flex-col items-center text-center mb-6 reveal-on-scroll"
        style={{
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <h2 className="font-headline-lg text-[36px] md:text-[64px] text-white leading-none mb-5 italic">
          Szolgáltatásaink
        </h2>
      </div>

      {/* ── Carousel wrapper ── */}
      <div className="relative z-10 min-h-[350px] flex items-center">
        {/* Scrollable track — touch handlerekkel */}
        <div
          ref={carouselRef}
          className="flex gap-10 overflow-x-auto no-scrollbar scroll-smooth py-16 px-[10vw] items-center w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {SERVICES.map((service, i) => (
            <ServiceOneCard
              key={service.id}
              service={service}
              isActive={i === activeIndex}
              onClick={() => goTo(i)}
              ref={(el) => (cardRefs.current[i] = el)}
            />
          ))}
        </div>

        {/* ── Navigáció — mobilon rejtve, md felett látható ── */}
        <div className="absolute inset-x-0 bottom-0 hidden md:flex justify-between px-5 items-center pointer-events-none">
          <button
            onClick={() => goTo(activeIndex - 1)}
            className="w-14 h-14 rounded-full dark-glass-card border border-white/10 flex items-center justify-center text-white/50 hover:text-white pointer-events-auto hover:bg-white/10 transition-all"
            aria-label="Előző"
          >
            <span className="material-symbols-outlined text-3xl">west</span>
          </button>

          <div className="flex gap-4 items-center pointer-events-auto">
            <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-champagne transition-all duration-700 rounded-full"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => goTo(activeIndex + 1)}
            className="w-14 h-14 rounded-full dark-glass-card border border-white/10 flex items-center justify-center text-white/50 hover:text-white pointer-events-auto hover:bg-white/10 transition-all"
            aria-label="Következő"
          >
            <span className="material-symbols-outlined text-3xl">east</span>
          </button>
        </div>

        {/* ── Mobil progress bar — nyilak nélkül ── */}
        <div className="absolute inset-x-0 bottom-0 flex md:hidden justify-center px-5 items-center pointer-events-none">
          <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-champagne transition-all duration-700 rounded-full"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}