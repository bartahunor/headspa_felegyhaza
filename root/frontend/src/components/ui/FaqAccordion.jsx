import { useState } from "react";

/**
 * FaqAccordion – újrafelhasználható lenyíló FAQ lista
 *
 * Props:
 *  items: Array<{ q: string, a: string }>  – kérdés-válasz párok
 *
 * Használat:
 *  <FaqAccordion items={[{ q: "Kérdés?", a: "Válasz." }]} />
 */

export default function FaqAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`
              glass-card rounded-[40px] px-8 py-6 cursor-pointer
              border transition-all duration-300
              ${isOpen
                ? "border-primary/30 shadow-md"
                : "border-outline-variant/20 hover:border-primary/20"}
            `}
            onClick={() => toggle(index)}
          >
            {/* Kérdés sor */}
            <div className="flex justify-between items-center gap-4">
              <h3 className="font-bodoni text-body-lg md:text-headline-md text-primary">
                {item.q}
              </h3>
              <span
                className={`
                  material-symbols-outlined text-secondary flex-shrink-0
                  transition-transform duration-300
                  ${isOpen ? "rotate-180" : "rotate-0"}
                `}
              >
                expand_more
              </span>
            </div>

            {/* Válasz – CSS max-height animációval */}
            <div
              className="overflow-hidden transition-all duration-400 ease-in-out"
              style={{
                maxHeight: isOpen ? "500px" : "0px",
                opacity: isOpen ? 1 : 0,
                paddingTop: isOpen ? "1rem" : "0",
                transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, padding 0.3s ease",
              }}
            >
              <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}