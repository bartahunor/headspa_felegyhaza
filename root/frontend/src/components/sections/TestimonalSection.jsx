import TestimonialCard from "../ui/TestimonialCard";

/**
 * Vélemények tömbje.
 * Bővítés: adj hozzá új objektumot az alábbi tömbhöz.
 *
 * Mezők:
 *   id     – egyedi kulcs
 *   text   – idézet
 *   name   – teljes név
 *   tag    – pl. "Törzsvendég"
 *   stars  – 1–5
 *   align  – "left" | "right"  (alternáló alapértelmezetten)
 */
const TESTIMONIALS = [
  {
    id: 1,
    text: "Életem legjobb fejbőrmasszázsa volt. Teljesen ellazultam, és a hajam is sokkal egészségesebbnek tűnik azóta. Minden hónapban visszajövök!",
    name: "Kovács Mária",
    tag: "Törzsvendég",
    stars: 5,
    align: "left",
  },
  {
    id: 2,
    text: "Először voltam head spa kezelésen és nem hittem volna, hogy ennyire más lehet. Ildikó nagyon figyelmes és professzionális. Csak ajánlani tudom!",
    name: "Szabó Borbála",
    tag: "Első alkalom",
    stars: 5,
    align: "right",
  },
  {
    id: 3,
    text: "A stresszes hetek után ez az egyetlen hely ahol igazán feltöltődtem. A kezelés után napokig tartja magát a könnyedség érzése.",
    name: "Nagy Tímea",
    tag: "Élmény ajándék",
    stars: 5,
    align: "left",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-[120px] px-5 font-['Manrope']"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Fejléc */}
        <header className="text-center mb-20">
          <span
            className="block text-[12px] uppercase tracking-[0.2em] mb-2"
            style={{ color: "var(--color-secondary-fixed-dim)" }}
          >
            Vélemények
          </span>
          <h2
            className="font-['Bodoni_Moda'] text-[48px] font-medium mb-4"
            style={{ color: "var(--color-on-primary)" }}
          >
            Mit mondanak vendégeink?
          </h2>
          <div
            className="w-20 h-[1.5px] mx-auto opacity-30"
            style={{ backgroundColor: "var(--color-on-primary)" }}
          />
        </header>

        {/* Kártyák */}
        <div className="flex flex-col gap-12">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={t.id}
              index={i}
              text={t.text}
              name={t.name}
              tag={t.tag}
              stars={t.stars}
              align={t.align}
            />
          ))}
        </div>
      </div>
    </section>
  );
}