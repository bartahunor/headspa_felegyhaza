import { useEffect } from "react";

export function useJsonLd(schema) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "json-ld-schema";
    script.textContent = JSON.stringify(schema);
    
    // Ha már létezik, frissítsük
    const existing = document.getElementById("json-ld-schema");
    if (existing) {
      existing.textContent = JSON.stringify(schema);
    } else {
      document.head.appendChild(script);
    }

    return () => {
      const el = document.getElementById("json-ld-schema");
      if (el) el.remove();
    };
  }, [schema]);
}