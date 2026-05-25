/**
 * FaqHeroSection – A FAQ oldal hero szekciója
 *
 * Props:
 *  backgroundImage : string – importált kép vagy URL (kötelező)
 *
 * Használat:
 *  import heroBg from "../../assets/your-image.jpg";
 *  <FaqHeroSection backgroundImage={heroBg} />
 */

export default function FaqHeroSection({ backgroundImage }) {
  return (
    <section className="relative h-[614px] flex items-center justify-center overflow-hidden">

      {/* Háttérkép */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-surface" />
      </div>

      {/* Szöveg */}
      <div className="relative z-10 text-center px-[var(--spacing-margin-mobile)]">
        <p className="font-manrope text-label-sm tracking-[0.2em] text-secondary uppercase mb-4">
          Tudnivalók
        </p>
        <h1 className="font-bodoni text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
          Gyakori kérdések
        </h1>
        <div className="w-20 h-1 bg-secondary opacity-30 mx-auto" />
      </div>

    </section>
  );
}