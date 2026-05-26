/**
 * TestimonialCard
 *
 * Újrafelhasználható vélemény-kártya komponens.
 * Sötét (--color-primary) hátterű szekción belüli használatra hangolva.
 *
 * Props:
 *   - text        {string}  – Az idézet szövege
 *   - name        {string}  – Értékelő neve
 *   - tag         {string}  – Alcím pl. "Törzsvendég"
 *   - stars       {number}  – 1–5, alapértelmezett: 5
 *   - align       {"left"|"right"} – Buborék iránya, alapértelmezett: "left"
 *   - index       {number}  – Sorszám, animáció késleltetéséhez (0-tól)
 */

import { useEffect, useRef, useState } from "react";

export default function TestimonialCard({
  text,
  name,
  tag,
  stars = 5,
  align = "left",
  index = 0,
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const isRight = align === "right";

  const glassBg = "rgba(255,255,255,0.10)";
  const glassBorder = "rgba(255,255,255,0.18)";

  // Animáció állapot
  const wrapperRef = useRef(null);
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [avatarVisible, setAvatarVisible] = useState(false);

  // Kártyánkénti késleltetés: 0→0ms, 1→180ms, 2→360ms
  const cardDelay = index * 180;
  // Az avatar a buborék után jelenik meg
  const avatarDelay = cardDelay + 320;

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setBubbleVisible(true), cardDelay);
          setTimeout(() => setAvatarVisible(true), avatarDelay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [cardDelay, avatarDelay]);

  // Buborék: oldalról csúszik be + rugalmas "pop" easing
  const bubbleTransform = bubbleVisible
    ? "translateX(0) scale(1)"
    : isRight
    ? "translateX(60px) scale(0.92)"
    : "translateX(-60px) scale(0.92)";

  // Avatar: alulról úszik fel
  const avatarTransform = avatarVisible ? "translateY(0)" : "translateY(16px)";

  return (
    <div
      ref={wrapperRef}
      className={`flex w-full ${isRight ? "justify-end" : "justify-start"}`}
    >
      <div className="flex flex-col w-full max-w-[480px]">

        {/* Glass bubble — animált */}
        <div
          className="relative rounded-[32px] p-8"
          style={{
            background: glassBg,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid ${glassBorder}`,
            boxShadow: "0 4px 40px rgba(0,0,0,0.25)",
            zIndex: 1,
            // Animáció
            opacity: bubbleVisible ? 1 : 0,
            transform: bubbleTransform,
            transition: "opacity 0.5s cubic-bezier(0.34,1.56,0.64,1), transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          {/* Idézőjel ikon */}
          <span
            className="material-symbols-outlined block mb-[-20px]"
            style={{
              fontSize: 52,
              color: "var(--color-secondary-fixed-dim)",
              opacity: 0.6,
              fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            }}
          >
            format_quote
          </span>

          {/* Vélemény szövege */}
          <p
            className="pt-5 text-[16px] leading-relaxed italic"
            style={{ color: "var(--color-primary-fixed)" }}
          >
            {text}
          </p>

          {/* Csillagok */}
          <div className="flex gap-0.5 mt-4">
            {Array.from({ length: stars }).map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined"
                style={{
                  fontSize: 16,
                  color: "var(--color-secondary-fixed-dim)",
                  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                }}
              >
                star
              </span>
            ))}
          </div>

          {/* Buborék farok */}
          <div
            className="absolute bottom-[-14px]"
            style={
              isRight
                ? {
                    right: 32,
                    width: 0,
                    height: 0,
                    borderLeft: "16px solid transparent",
                    borderTop: `13px solid ${glassBg}`,
                    borderRight: 0,
                  }
                : {
                    left: 32,
                    width: 0,
                    height: 0,
                    borderRight: "16px solid transparent",
                    borderTop: `13px solid ${glassBg}`,
                    borderLeft: 0,
                  }
            }
          />
        </div>

        {/* Avatar + név blokk — animált */}
        <div
          className={`flex items-center gap-3 mt-6 ${
            isRight
              ? "flex-row-reverse text-right mr-4"
              : "flex-row ml-4"
          }`}
          style={{
            opacity: avatarVisible ? 1 : 0,
            transform: avatarTransform,
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <span
              className="font-['Bodoni_Moda'] text-[18px] font-medium"
              style={{ color: "var(--color-on-primary)" }}
            >
              {initials}
            </span>
          </div>

          <div className="flex flex-col">
            <span
              className="font-['Bodoni_Moda'] text-[17px] font-semibold"
              style={{ color: "var(--color-on-primary)" }}
            >
              {name}
            </span>
            <span
              className="text-[11px] uppercase tracking-[0.15em] mt-0.5"
              style={{ color: "var(--color-secondary-fixed-dim)" }}
            >
              {tag}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}