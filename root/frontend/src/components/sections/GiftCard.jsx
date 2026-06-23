import giftCardImage from "../../assets/szalon.jpeg";
export default function GiftCard() {
    return (
        <section
            className="min-h-screen flex items-center py-20 px-margin-mobile md:px-margin-desktop relative overflow-hidden"
            style={{ backgroundColor: "var(--color-primary)" }}
        >
            {/* Háttér dekor blob */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-fixed via-transparent to-transparent"></div>
            </div>

            <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* ── Bal oldal: szöveg kártya ── */}
                <div
                    className="relative p-10 md:p-16 rounded-[40px] animate-fade-in"
                    style={{
                        background: "rgba(255,255,255,0.10)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        boxShadow: "0 4px 40px rgba(0,0,0,0.25)",
                    }}
                >
                    {/* Eyebrow */}
                    <p
                        className="font-label-sm text-label-sm uppercase tracking-[0.3em] mb-6"
                        style={{ color: "var(--color-secondary-fixed-dim)" }}
                    >
                        Ajándékozzon élményt
                    </p>

                    {/* Cím */}
                    <h1
                        className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6"
                        style={{ color: "var(--color-on-primary)" }}
                    >
                        Head Spa Ajándékutalvány
                    </h1>

                    {/* Elválasztó */}
                    <div
                        className="w-24 h-[1.5px] mb-10 opacity-40"
                        style={{ backgroundColor: "var(--color-secondary-fixed-dim)" }}
                    />

                    {/* Leírás */}
                    <p
                        className="font-body-lg text-body-lg mb-12 leading-relaxed"
                        style={{ color: "var(--color-primary-fixed)" }}
                    >
                        Lepje meg szeretteit a teljes ellazulás és kényeztetés élményével.
                        Utalványaink bármely kezelésünkre beválthatóak, megnyitva az utat a belső
                        béke és a fizikai felfrissülés felé.
                    </p>

                    {/* CTA blokk */}
                    <div className="space-y-8">
                        <p
                            className="font-label-sm text-label-sm"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                        >
                            Vásárláshoz vegye fel velünk a kapcsolatot:
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            {/* Elsődleges gomb – világos kitöltött */}
                            <a
                                className="group flex items-center gap-4 px-8 py-5 rounded-full transition-all duration-300 shadow-lg"
                                href="tel:+36708860021"
                                style={{
                                    backgroundColor: "var(--color-primary-fixed)",
                                    color: "var(--color-primary)",
                                }}
                                onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                            >
                                <span className="material-symbols-outlined text-[20px]">call</span>
                                <span className="font-body-md text-body-md font-semibold">+36 70 886 0021</span>
                            </a>

                            {/* Másodlagos gomb – outline */}
                            <a
                                className="group flex items-center gap-4 px-8 py-5 rounded-full transition-all duration-300"
                                href="https://www.facebook.com/gutildihairstyle"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    border: "1.5px solid var(--color-secondary-fixed-dim)",
                                    color: "var(--color-secondary-fixed-dim)",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.backgroundColor = "var(--color-secondary-fixed-dim)";
                                    e.currentTarget.style.color = "var(--color-primary)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                    e.currentTarget.style.color = "var(--color-secondary-fixed-dim)";
                                }}
                            >
                                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                                <span className="font-body-md text-body-md font-semibold">Facebook üzenetben</span>
                            </a>
                        </div>
                    </div>

                    
                </div>

                {/* ── Jobb oldal: kép + lebegő kártya ── */}
                <div className="relative flex justify-center items-center">

                    {/* Fő kép */}
                    <div className="pebble-shape w-full max-w-[500px] aspect-[4/5] overflow-hidden shadow-2xl z-0">
                        <img
                            alt="Luxury Spa Environment"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                            src={giftCardImage}
                        />
                    </div>

                    {/* Lebegő mini kártya */}
                    <div
                        className="absolute -bottom-10 -left-10 md:left-0 p-8 rounded-[32px] max-w-[280px] shadow-xl z-20"
                        style={{
                            background: "rgba(255,255,255,0.10)",
                            backdropFilter: "blur(24px)",
                            WebkitBackdropFilter: "blur(24px)",
                            border: "1px solid rgba(255,255,255,0.18)",
                        }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span
                                className="material-symbols-outlined"
                                style={{ color: "var(--color-secondary-fixed-dim)" }}
                            >
                                card_giftcard
                            </span>
                            <span
                                className="font-label-sm text-label-sm"
                                style={{ color: "var(--color-on-primary)" }}
                            >
                                GUT ILDI HEAD SPA GIFT
                            </span>
                        </div>
                        <p
                            className="font-body-md text-body-md leading-tight italic"
                            style={{ color: "var(--color-primary-fixed)" }}
                        >
                            "A nyugalom nem egy hely, hanem egy állapot, amit most ajándékba adhat."
                        </p>
                    </div>

                    {/* Dekor blur körök */}
                    <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl -z-10 opacity-20"
                        style={{ backgroundColor: "var(--color-secondary-fixed-dim)" }} />
                    <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full blur-2xl -z-10 opacity-15"
                        style={{ backgroundColor: "var(--color-primary-fixed)" }} />
                </div>

            </div>
        </section>
    );
}