import { useEffect, useRef } from "react";
import BgVideo from "../../assets/Video Project 9.mp4";

export default function ServicesHero() {
    const videoRef = useRef(null);

    // Biztosítja, hogy a videó mindig lejátszódjon oldalra navigáláskor
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.play().catch(() => {
            // Böngésző policy miatt elutasított autoplay esetén csendben kezeljük
        });
    }, []);

    return (
        <header className="relative h-screen flex items-center justify-center overflow-hidden pt-20">

            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                >
                    <source src={BgVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 backdrop-blur-[1px]" />
            </div>

            <div className="relative z-10 text-center px-margin-mobile absolute inset-0 flex flex-col items-center justify-center -mt-20">
                <h1 className="font-display-lg text-surface mb-4 tracking-tighter"
                    style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
                    Szolgáltatásaink
                </h1>
                <p className="font-body-lg text-surface/90 max-w-2xl mx-auto italic"
                    style={{ fontSize: "clamp(1rem, 2.5vw, 1.375rem)" }}>
                    Egy utazás a csend birodalmába...
                </p>
            </div>

        </header>
    );
}