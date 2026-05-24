import ServicesBgImg from "../../assets/Gemini_Generated_Image_w4oaxjw4oaxjw4oa.png";

const steps = [
  {
    icon: "medical_services",
    title: "1. lépés",
    description: "Fejbőr elemzés & konzultáció",
  },
  {
    icon: "self_care",
    title: "2. lépés",
    description: "Egyedi kezelés összeállítása",
  },
  {
    icon: "spa",
    title: "3. lépés",
    description: "Head spa élmény",
  },
];

export default function WorkflowSection() {
  return (
    <section
      className="py-40 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] services-bg"
      style={{ backgroundImage: `url(${ServicesBgImg})` }}
    >
      <div className="max-w-[var(--spacing-container-max)] mx-auto space-y-16">

        {/* Cím */}
        <div className="text-center space-y-4">
          <h2 className="font-bodoni text-headline-lg" style={{ color: "#01582f" }}>
            Hogyan is épül fel?
          </h2>
        </div>

        {/* Kártyák */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-gutter)] max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group glass-card p-8 rounded-[40px] border border-outline-variant/20 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">
                  {step.icon}
                </span>
              </div>
              <h3 className="font-bodoni text-headline-md text-primary mb-4">
                {step.title}
              </h3>
              <p className="font-manrope text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}