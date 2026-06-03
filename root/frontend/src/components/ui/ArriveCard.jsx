// ArriveCard.jsx
// Használat: <ArriveCard icon="schedule" title="Pontos érkezés" description="Kérjük, érkezz pontosan..." />

export default function ArriveCard({ icon, title, description }) {
  return (
    <div className="floating-ritual-card p-6 md:p-10 bg-background/30 rounded-[40px] border border-outline-variant/10 text-center flex flex-col items-center w-full md:max-w-[400px]">
      <div className="mb-6">
        <span className="material-symbols-outlined text-on-tertiary-container text-5xl">
          {icon}
        </span>
      </div>
      <h3 className="font-headline-md text-headline-md text-primary mb-4">{title}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}