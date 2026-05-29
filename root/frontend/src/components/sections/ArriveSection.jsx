export default function ArriveSection() {
    return (
        <section className="py-40 px-margin-mobile md:px-margin-desktop bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <span class="material-symbols-outlined text-[120px] text-on-tertiary-container">eco</span>
        </div>
        <div className="absolute bottom-0 left-0 p-12 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[100px] text-on-tertiary-container rotate-45">eco</span>
        </div>
        <div className="max-w-container-max mx-auto">
            <div className="text-center space-y-4 mb-20">
                <h2 className="font-headline-lg text-headline-lg text-primary">Hogyan érkezz hozzánk?</h2>
                <div className="w-24 h-[1px] bg-on-tertiary-container mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <div
                    className=" floating-ritual-card p-10 bg-background/30 rounded-[40px] border border-outline-variant/10 text-center flex flex-col items-center">
                    <div className="mb-6">
                        <span className="material-symbols-outlined text-on-tertiary-container text-5xl">schedule</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-4">Pontos érkezés</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Kérjük, érkezz pontosan a foglalt időpontodra.
                    </p>
                </div>
                <div
                    className=" floating-ritual-card p-10 bg-background/30 rounded-[40px] border border-outline-variant/10 text-center flex flex-col items-center">
                    <div className="mb-6">
                        <span className="material-symbols-outlined text-on-tertiary-container text-5xl">door_front</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-4">Várakozás</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Korábbi érkezés esetén kérjük, várj az üzlet előtt, amíg érted megyünk.
                    </p>
                </div>
                <div
                    className=" floating-ritual-card p-10 bg-background/30 rounded-[40px] border border-outline-variant/10 text-center flex flex-col items-center">
                    <div className="mb-6">
                        <span className="material-symbols-outlined text-on-tertiary-container text-5xl">face_6</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-4">Smink nélkül</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        A kezelésekre lehetőség szerint smink nélkül érkezz a maximális komfort érdekében.
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
}