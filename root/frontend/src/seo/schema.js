export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
  "@id": "https://headspa-felegyhaza.hu/#business", //URL  a weboldal gyökerére mutatva, #business azonosítóval
  "name": "Gut Ildi Hair Style & Head Spa",
  "description": "Professzionális fejbőr-kezelések és head spa szolgáltatások Kiskunfélegyházán.",
  "url": "https://headspa-felegyhaza.hu", // URL
  "telephone": "+36-70-886-0021",
  "email": "",
  "priceRange": "20000 - 40 000 HUF",
  "currenciesAccepted": "HUF",
  "paymentAccepted": "Cash, Credit Card",
  "image": "https://headspa-felegyhaza.hu/og-image.jpg", // URL egy reprezentatív képre a szolgáltatásról
  "logo": "https://headspa-felegyhaza.hu/logo.png", // URL a vállalkozás logójára
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Klapka utca 24.",
    "addressLocality": "Kiskunfélegyháza",
    "postalCode": "6100",
    "addressCountry": "HU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.708874266748126,
    "longitude": 19.85302170543183
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Based on registration in advance",
      "opens": "",
      "closes": ""
    }
  ],
  "hasOfferCatalog": {  // Szolgáltatások listája
    "@type": "OfferCatalog",
    "name": "Head Spa Kezelések",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Alap Head Spa kezelés",
          "description": "Fejbőr-masszázs és mélytisztítás"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Prémium Head Spa",
          "description": "Teljes fejbőr-regeneráló kezelés"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/gutildihairstyle",
    "https://www.tiktok.com/@ildigut"
  ]
};
