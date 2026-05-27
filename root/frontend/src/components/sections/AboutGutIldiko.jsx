import GutIldikoImg from "../../assets/Gemini_Generated_Image_vvi8pbvvi8pbvvi8.png";
import WreathImg from "../../assets/Gemini_Generated_Image_dsaos6dsaos6dsao.png";

export default function AboutGutIldiko() {
  return (
    <section className="py-16 bg-surface-container-low px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] overflow-hidden">
      <div className="max-w-[var(--spacing-container-max)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

          {/* KÉP */}
          <div className="order-2 md:order-1 relative w-[85%] aspect-square">

            {/* Háttér leveles díszítés */}
            <img
              src={WreathImg}
              alt=""
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         w-[170%] max-w-none object-contain z-0 about-wreath-float pointer-events-none"
            />

            {/* Fő kép – blob formában */}
            <div className="w-full h-full about-blob overflow-hidden border-[16px] border-[#F5F3EE] shadow-xl relative z-10">
                <img
                    src={GutIldikoImg}
                    alt="Illóolajok és spa hangulat"
                    className="w-full h-full object-cover scale-[1.02]"
                />
            </div>

            {/* Glass-card */}
            <div className="absolute -top-12 -left-12 p-8 glass-card rounded-3xl max-w-[240px]" />

          </div>

          {/* SZÖVEG */}
          <div className="order-1 md:order-2 space-y-8">

            <h2 className="font-bodoni text-headline-lg text-primary">
              Palástiné Gut Ildikó
            </h2>

            <div className="w-20 h-1 bg-secondary opacity-30" />

            <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed">
              Palástiné Gut Ildikó vagyok, női-, férfi- és gyermekfodrász.
              2003-ban végeztem női, férfi és gyermek fodrászként, és azóta is ugyanolyan szeretettel végzem a
              munkámat, mint az első napon. Szerencsés embernek tartom magam, hiszen a hivatásom egyben a
              hobbim is. Számomra a szépségápolás nem csupán munka, hanem egy olyan alkotó folyamat, ahol a
              vendégek testi-lelki feltöltődése is fontos szerepet kap.
            </p>

            <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed">
              Munkám során kiemelten figyelek a minőségre és a természetességre. Professzionális, növényi
              összetevőket tartalmazó hajápoló termékekkel dolgozom, melyeket a Kemon biztosít számomra.
              Emellett volt szerencsém megismerkedni a Norann arcápolási termékcsaláddal is, amely szintén
              természetes összetevőkre épül, így tökéletesen illeszkedik a szemléletemhez.
            </p>

            <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed">
              Hiszem, hogy a mai rohanó
              világban mindannyiunknak szüksége van arra, hogy időnként megálljunk, lelassuljunk, és újra
              önmagunkra figyeljünk. Ez a kezelés nemcsak a haj és a fejbőr ápolásáról szól, hanem a
              relaxációról, a feltöltődésről és a belső harmónia megteremtéséről is.
            </p>

            <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed">
              Saját életemben is megtapasztaltam, mennyire fontos a lassítás és az egyensúly megtalálása,
              ezért különösen fontos számomra, hogy a vendégeim is nyugalmat, pihenést és törődést kapjanak
              minden kezelés során.
            </p>

            <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed">
              Szeretettel várlak egy olyan környezetben, ahol a szépségápolás élménnyé válik.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}