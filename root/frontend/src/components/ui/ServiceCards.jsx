export default function ServiceCard({ service }) {
    return (

        <div
            className="reveal-on-scroll group relative bg-white/60 backdrop-blur-sm p-10 rounded-[40px] border border-outline-variant/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div
                className="absolute -right-8 -bottom-8 w-40 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity pointer-events-none rotate-12">
                <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "120px", color: "rgba(255,255,255,0.15)" }}
                >
                    eco
                </span>
            </div>
            <div className="relative z-10">
                <div
                    className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 text-primary">
                    <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">{service.title}</h3>

                <div
                    className="flex items-center gap-2 text-primary font-bold font-label-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    {service.duration}
                </div>
                <div
                    className="flex items-center gap-2 text-primary font-bold font-label-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm">paid</span>
                    {service.price}
                </div>
            </div>
        </div>

    );
}