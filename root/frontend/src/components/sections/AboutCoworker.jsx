import GutIldikoImg from "../../assets/noprofile.jpg";
import WreathImg from "../../assets/Gemini_Generated_Image_dsaos6dsaos6dsao.png";

export default function AboutCoworker() {
  return (
    <section className="py-16 bg-surface-container-low px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] overflow-hidden">
      <div className="max-w-[var(--spacing-container-max)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

          {/* SZÖVEG */}
          <div className="order-1 md:order-1 space-y-8">

            <h2 className="font-bodoni text-headline-lg text-primary">
              XY Adrienn
            </h2>

            <div className="w-20 h-1 bg-secondary opacity-30" />

            <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed">
              Egy igazi energiabomba, aki tele van lelkesedéssel és imádja a fodrász szakmát. Nem rég végzet, de már most folyamatosan képzi magát, egyik tanfolyamról a másikra jár, mert mindig szeretne még többet tanulni és fejlődni.
            </p>

            <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed">
              Nagyon ügyes, talpraesett és ambiciózus, emellett pedig végtelenül kedves és barátságos – garantáltan jó kezekben lesztek nála! A Head Spa képzést együtt végeztük el, így ezen a területen is  közösen várunk titeket egy kis feltöltődésre és kényeztetésre.
            </p>

            <p className="font-manrope text-body-md text-on-surface-variant leading-relaxed">
              Fogadjátok őt sok szeretettel!
            </p>


          </div>

          {/* KÉP */}
          <div className="order-2 md:order-2 relative w-[85%] aspect-square">

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

        </div>
      </div>
    </section>
  );
}