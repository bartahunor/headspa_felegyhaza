import { useEffect, useRef } from "react";
import BgImg from "../../assets/kenyeztetes.png";

export default function WhatIsHeadSpa() {
    const panelRef = useRef(null);

    useEffect(() => {
        const el = panelRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");
                    observer.disconnect(); // többé nem figyeli
                }
            },
            { rootMargin: "-50px 0px 0px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative h-[600px] flex items-center overflow-hidden px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Head Spa Experience"
                    className="w-full h-full object-cover object-center"
                    src={BgImg}
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="max-w-container-max mx-auto w-full relative z-10">
                <div
                    ref={panelRef}
                    className="reveal-on-scroll glass-card p-10 md:p-16 rounded-[40px] max-w-2xl bg-white/40 backdrop-blur-md border border-white/30 shadow-2xl"
                >
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                        Mi is az a Head Spa?
                    </h2>
                    <div className="w-20 h-1 bg-secondary opacity-30 mb-8"></div>
                    <p className="font-body-lg text-body-lg text-primary leading-relaxed">
                        A Head Spa nem csupán egy fejbőrápolási folyamat, hanem egy holisztikus japán rituálé, amely
                        egyesíti a mélytisztító bőrgyógyászati technikákat a meditatív relaxációval.
                    </p>
                    <p className="font-body-lg text-body-lg text-primary mt-4 leading-relaxed">
                        Speciális technológiánk segítségével eltávolítjuk a lerakódásokat, serkentjük a mikrokeringést,
                        miközben a vízi terápia és a pontmasszázs segít az idegrendszer teljes lecsendesítésében. Ez az út a
                        fejbőr egészségéhez és a lélek békéjéhez.
                    </p>
                </div>
            </div>
        </section>
    );
}