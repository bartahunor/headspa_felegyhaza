import { useEffect, useRef } from "react";

/**
 * ServiceTab – újrahasználható szolgáltatás fül komponens
 *
 * Props:
 *  - title         {string}   – A kezelés neve
 *  - description   {string}   – Rövid leírás
 *  - duration      {string}   – Időtartam, pl. "60 perc + hajformázás"
 *  - price         {string}   – Ár, pl. "24 900 Ft"
 *  - items         {string[]} – A kezelés tartalma (lista)
 *  - note          {string}   – Italic megjegyzés alul (opcionális)
 *  - itemsLabel    {string}   – Lista fejléc szövege (alapért. "A kezelés tartalma:")
 *  - imageSrc      {string}   – Kép URL
 *  - imageAlt      {string}   – Kép alt szöveg
 *  - reverse       {boolean}  – Ha true: kép balra, szöveg jobbra (páros soroknál)
 *  - accentVariant {"top-left"|"bottom-right"} – Dekor blob pozíciója
 */
export default function ServiceTab({
  title,
  description,
  duration,
  price,
  items = [],
  note,
  itemsLabel = "A kezelés tartalma:",
  imageSrc,
  imageAlt = "",
  reverse = false,
  accentVariant = "top-left",
}) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  // Intersection Observer – reveal animáció
  useEffect(() => {
    const elements = [cardRef.current, imageRef.current].filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-reveal-active");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const blobClass =
    accentVariant === "top-left"
      ? "-top-10 -left-10 w-32 h-32 bg-secondary/5 group-hover:bg-secondary/10"
      : "-bottom-10 -right-10 w-40 h-40 bg-primary/5 group-hover:bg-primary/10";

  const noteAccent =
    accentVariant === "top-left" ? "bg-secondary/5" : "bg-primary/5";

  return (
    <section
      className={`flex flex-col items-center gap-16 md:gap-24 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Szöveg / kártya oldal */}
      <div
        ref={cardRef}
        className={`service-reveal service-slide-up ${
          reverse ? "flex-1" : "w-full md:w-3/5"
        }`}
      >
        <div className="glass-card p-12 rounded-3xl shadow-xl relative overflow-hidden group">
          {/* Dekor blob */}
          <div
            className={`absolute ${blobClass} rounded-full blur-3xl transition-all duration-700 pointer-events-none`}
          />

          {/* Cím */}
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            {title}
          </h2>

          {/* Leírás */}
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
            {description}
          </p>

          {/* Időtartam + Ár */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-secondary">
              <span className="material-symbols-outlined">schedule</span>
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-3 text-secondary">
              <span className="material-symbols-outlined">payments</span>
              <span>{price}</span>
            </div>
          </div>

          {/* Lista */}
          <h3 className="font-semibold text-primary mb-4">{itemsLabel}</h3>
          <ul className="space-y-3 text-on-surface-variant mb-8">
            {items.map((item, i) => (
              <li key={i}>✓ {item}</li>
            ))}
          </ul>

          {/* Megjegyzés */}
          {note && (
            <div className={`p-4 ${noteAccent} rounded-2xl`}>
              <p className="text-on-surface-variant italic leading-relaxed">
                {note}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Kép oldal */}
      <div
        ref={imageRef}
        className={`service-reveal ${
          reverse
            ? "flex-1 service-slide-left"
            : "w-full md:w-2/5 service-slide-right"
        } h-[500px]`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-[40px] shadow-2xl"
        />
      </div>
    </section>
  );
}