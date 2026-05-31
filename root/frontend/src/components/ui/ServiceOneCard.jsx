import { forwardRef } from "react";

/**
 * @typedef {Object} Service
 * @property {string} title
 * @property {string} duration
 * @property {string} price
 * @property {string} [icon]
 */

const ServiceOneCard = forwardRef(function ServiceOneCard(
  { service, isActive, onClick },
  ref
) {
  const { title, duration, price, icon = "spa" } = service;

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={[
        "cinematic-card",
        isActive ? "cinematic-card--active" : "",
        // dark-glass-card: sage-dark háttéren a fehér glass-card helyett
        "dark-glass-card",
        "flex-none w-[350px] h-[420px]",
        "rounded-[50px] p-12",
        "flex flex-col justify-between",
        "cursor-pointer",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Top: ikon + cím */}
      <div className="space-y-12">
        <span className="material-symbols-outlined text-5xl text-champagne">
          {icon}
        </span>
        <h3 className="font-headline-md text-2xl text-white">{title}</h3>
      </div>

      {/* Bottom: időtartam + ár */}
      <div className="border-t border-white/10 pt-6">
        <div className="space-y-4">
          <MetaItem label="Időtartam" value={duration} />
          <MetaItem label="Ár" value={price} />
        </div>
      </div>
    </div>
  );
});

function MetaItem({ label, value }) {
  return (
    <div>
      <span className="text-[12px] uppercase tracking-[0.2em] text-champagne/50 block mb-1">
        {label}
      </span>
      <p className="text-lg text-white font-light">{value}</p>
    </div>
  );
}

export default ServiceOneCard;