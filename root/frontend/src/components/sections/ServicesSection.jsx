import { useEffect, useRef } from "react";
import ServiceCard from "../ui/ServiceCards";


const services = [
  {
    id: 1,
    icon: "bath_private",
    title: "RELAX 30' – Fejbőr frissítő Hajrituálé",
    duration: "30 perc + hajformázás",
    price: "14 900,-Ft"
  },
  {
    id: 2,
    icon: "self_care",
    title: "Oil Control Scalp – Zsírosodás elleni rituálé",
    duration: "60 perc + hajformázás",
    price: "24 900,-Ft"
  },
  {
    id: 3,
    icon: "waves",
    title: "Healthy Scalp – Korpásodás elleni rituálé",
    duration: "60 perc + hajformázás",
    price: "24 900,-Ft"
  },
  {
    id: 4,
    icon: "psychiatry",
    title: "Prémium Head Spa Rituálé – 90 perc",
    duration: "90 perc + hajformázás",
    price: "32 900,-Ft"
  },
  {
    id: 5,
    icon: "auto_awesome",
    title: "NOURISH – Keraté Vajas Rituálé",
    duration: "60 perc + hajformázás",
    price: "24 900,-Ft"
  },
  {
    id: 6,
    icon: "water_drop",
    title: "ENERGY – Hajhullás elleni rituálé",
    duration: "60 perc + hajformázás",
    price: "24 900,-Ft"
  },
];

export default function ServicesSection() {
  return (
    
      <section
        className="py-40 px-[20px] md:px-[80px] relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #172c21 0%, #2d4236 50%, #1d2c1c 100%)",
        }}
      >
        {/* Háttér dekoratív blur foltok */}
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full -z-0 blur-3xl pointer-events-none"
          style={{ background: "rgba(77,99,86,0.25)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-64 h-64 rounded-full -z-0 blur-2xl pointer-events-none"
          style={{ background: "rgba(45,66,54,0.4)" }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Szekció fejléc */}
          <div className="text-center space-y-4 mb-20">
            <h2
              className="font-headline-lg text-headline-lg"
              style={{ color: "#d0e8d7" }}
            >
              Szolgáltatásaink
            </h2>
            <div
              className="w-24 h-[1px] mx-auto"
              style={{ background: "rgba(208,232,215,0.3)" }}
            />
          </div>

          {/* Kártyák rács */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
   
  );
}