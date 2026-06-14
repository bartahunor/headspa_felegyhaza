import ServiceTab from "../ui/ServiceTab.jsx";
import premiumHeadSpaImage from "../../assets/premium_headspa.png";
import kariteImage from "../../assets/karite_vaj.png";
import hajhullasImage from "../../assets/hajhullas.png";
// A CSS-t add hozzá a globals.css-hez, vagy importáld közvetlenül:
// import "@/styles/service-animations.css";

const services = [
  {
    title: "RELAX 30' - Fejbőr frissítő Hajrituálé",
    description:
      "Egy rövid, mégis hatékony feltöltő kezelés azok számára, akik szeretnének egy kis kikapcsolódást és frissességet adni hajuknak és fejbőrüknek a rohanó hétköznapokban.",
    duration: "30 perc + hajformázás",
    price: "14 900 Ft",
    items: [
      "Mikrokamerás fejbőr diagnosztika",
      "Fejbőrradír (ha szükséges)",
      "Kényeztető hajmosás",
      "Relaxáló fejbőrmasszázs",
      "Hajformázás ionizáló hajszárítóval",
    ],
    note: "A kezelés egy egész testet átmasszírozó relaxágyon történik.",
    imageSrc: "/images/relax-30.jpg",
    imageAlt: "Fejbőr masszázs",
    reverse: false,
    accentVariant: "top-left",
  },
  {
    title: "Oil Control Scalp - Zsírosodás elleni rituálé",
    description:
      "A fejbőr egyensúlyának helyreállítása. Frissítő, tisztító és faggyúszabályzó kezelés, amely segít normalizálni a túlzott faggyútermelést.",
    duration: "60 perc + hajformázás",
    price: "24 900 Ft",
    items: [
      "Mikrokamerás fejbőrdiagnosztika",
      "Arc-, nyak- és dekoltázsmasszázs + fátyolmaszk",
      "Zsírosodás elleni tisztító agyag",
      "Mélytisztító haj- és fejbőrmasszázs",
      "Faggyúszabályzó fejbőrmasszázs",
      "Hajformázás ionizáló hajszárítóval",
    ],
    note: "A kezelés egy egész testet átmasszírozó relaxágyon történik.",
    imageSrc: "/images/oil-control.jpg",
    imageAlt: "Zsírosodás elleni kezelés",
    reverse: true,
    accentVariant: "bottom-right",
  },
  {
    title: "Healthy Scalp - Korpásodás elleni rituálé",
    description:
      "Gyengéd, mégis hatékony tisztító és nyugtató kezelés, amely segít csökkenteni a korpásodást és támogatja a fejbőr természetes mikrobiomját.",
    duration: "60 perc + hajformázás",
    price: "24 900 Ft",
    items: [
      "Mikrokamerás fejbőrdiagnosztika",
      "Arc-, nyak- és dekoltázsmasszázs + fátyolmaszk",
      "Zsírosodás elleni tisztító agyag",
      "Mélytisztító haj- és fejbőrmasszázs",
      "Faggyúszabályzó fejbőrmasszázs",
      "Hajformázás (ionizáló hajszárítóval történik, a haj minőségének megőrzéséért)"
    ],
    note: "A kezelés egy egész testet átmasszírozó relaxágyon történik.",
    imageSrc: "",
    imageAlt: "Healthy Scalp - Korpásodás elleni rituálé",
    reverse: false,
    accentVariant: "top-left",
  },
  {
    title: "Prémium Head Spa Rituálé",
    description:
      "Egy igazán luxus élmény, ahol a teljes kikapcsolódás és feltöltődés a főszerep. A kezelés során nemcsak a haj és a fejbőr kap kiemelt figyelmet, hanem az arc és a lélek is megpihenhet.",
    duration: "90 perc + hajformázás",
    price: "32 900 Ft",
    items: [
      "Mikrokamerás fejbőrdiagnosztika",
      "Arc-, nyak- és dekoltázsmasszázs",
      "Fejbőrradír",
      "Mélytisztító haj- és fejbőrkezelés",
      "Tápláló hajpakolás",
      "Gőzterápia",
      "Hosszabb, relaxáló arcmasszázs",
      "Arc köpölyözés",
      "Hosszabb fejmasszázs különböző masszírozó eszközökkel",
      "VIO kezelés",
      "Ionizáló hajszárítással történő hajszárítás"
    ],
    note: "A kezelés egy egész testet átmasszírozó relaxágyon történik.",
    imageSrc: premiumHeadSpaImage,
    imageAlt: "Prémium Head Spa Rituálé",
    reverse: true,
    accentVariant: "bottom-right",
  },
  {
    title: "NOURISH – KERATÉ VAJAS Rituálé",
    description:
      "Gazdagon tápláló, hidratáló és lágyító kezelés, amely a keraté vaj jótékony hatásainak köszönhetően igazi megújulást nyújt a száraz, töredezett és sérült haj számára. Védő filmet képez a hajszálakon, így segít megóvni a hajat a külső légköri hatásoktól.",
    duration: "60 perc + hajformázás",
    price: "24 900 Ft",
    items: [
      "Mikrokamerás fejbőrdiagnosztika",
      "Arc-, nyak- és dekoltázsmasszázs + fátyolmaszk",
      "Fejbőrradír",
      "Hidratáló haj- és fejbőrmosás",
      "Tápláló keraté vajas fejbőrmasszázs",
      "Intenzív tápláló pakolás (szérum)",
      "Gőzterápia",
      "Hajformázás (ionizáló hajszárítóval történik, a haj minőségének megőrzéséért)"
    ],
    note: "A kezelés egy egész testet átmasszírozó relaxágyon történik.",
    imageSrc: kariteImage,
    imageAlt: "NOURISH – KERATÉ VAJAS Rituálé",
    reverse: false,
    accentVariant: "top-left",
  },
  {
    title: "ENERGY – Hajhullás elleni rituálé",
    description:
      "Élénkítő, serkentő és tonizáló kezelés, amely a ginzeng kivonat és a koffein hatóerejével támogatja a fejbőr mikrokeringését, erősíti a hajhagymákat, és elősegíti az egészséges, erősebb haj növekedését.",
    duration: "60 perc + hajformázás",
    price: "24 900 Ft",
    items: [
      "Mikrokamerás fejbőrdiagnosztika",
      "Arc-, nyak- és dekoltázsmasszázs + fátyolmaszk",
      "Fejbőrradír",
      "Serkentő haj- és fejbőrmasszázs",
      "Élénkítő fejbőrmasszázs",
      "Energizáló hatóanyagok bevitele",
      "Gőzterápia",
      "Stimuláló szérum bemasszírozása",
      "Hajformázás (ionizáló hajszárítóval történik, a haj minőségének megőrzéséért)"
    ],
    note: "A kezelés egy egész testet átmasszírozó relaxágyon történik.",
    imageSrc: hajhullasImage,
    imageAlt: "ENERGY – Hajhullás elleni rituálé",
    reverse: true,
    accentVariant: "bottom-right",
  }
];

export default function ServiceDetails() {
  return (
    <main className="relative z-10 space-y-40 py-40 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {services.map((service, index) => (
        <ServiceTab key={index} {...service} />
      ))}
    </main>
  );
}