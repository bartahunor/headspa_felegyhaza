import FaqAccordion from "../ui/FaqAccordion";

const faqItems = [
  {
    q: "Mi az a Head Spa kezelés?",
    a: "A Head Spa egy japán gyökerű, komplex fejbőr- és hajápoló kezelés, amely ötvözi a mélytisztítást, a masszázst és a relaxációt. A kezelés során speciális termékekkel és technikákkal gondoskodunk a fejbőr egészségéről, miközben Ön teljesen ellazul.",
  },
  {
    q: "Mennyi ideig tart egy kezelés?",
    a: "Egy teljes Head Spa kezelés általában 60–90 percet vesz igénybe, az egyéni igényektől és a választott kezeléstől függően. Az első alkalom előtt egy rövid konzultációval kezdünk, hogy tökéletesen az Ön fejbőrének szükségleteihez szabjuk a kezelést.",
  },
  {
    q: "Kinek ajánlott a Head Spa?",
    a: "Nálunk nincs korosztáylbeli vagy nemek közötti megkülönböztetés, a Head Spa élmény nőknek, férfiaknak és gyermekeknek egyaránt elérhető. A kezelések 7 éves kortól vehetőek igénybe, a kicsik számára gyengéd, kellmes és relaxáló élményt nyújtva. A kismamák esetében a kezelésel orvosi konzultáció mellet vehetőek igénybe, a biztonságot és a maximális komfortot szem előtt tartva.",
  },
  {
    q: "Milyen termékeket használnak a kezelések során?",
    a: "Kizárólag professzionális, növényi összetevőket tartalmazó termékekkel dolgozunk. ",
  },
  {
    q: "Hogyan tudok időpontot foglalni?",
    a: "Időpontot telefonon vagy Facebook oldalunkon keresztül üzenetben lehet foglalni. Az elérhetőségeket a weboldal alján találja. Kérjük, legalább 24 órával előre jelezze, ha le kell mondania a foglalását.",
  },
  {
    q: "Szükséges-e előkészület a kezelés előtt?",
    a: "Különösebb előkészület nem szükséges, csupán smink nélkül kell érkezni. Érdemes tiszta hajjal érkezni, és kerülje a hajformázó termékek túlzott használatát a kezelés előtti napon. Ha bármilyen fejbőrpanasza van, azt jelezze előre. Üzletünkben egyszerre egy vendéggel foglalkozunk, így a pontos érkezésre kérjük, ügyeljen.",
  },
];

export default function FaqContentSection() {
  return (
    <section className="py-24 md:py-40 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] bg-surface-container-low">
      <div className="max-w-[var(--spacing-container-max)] mx-auto flex flex-col items-center">
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}