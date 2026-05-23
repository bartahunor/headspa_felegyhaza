import { Link } from 'react-router-dom'

const footerLinks = [
  { label: "Adatkezelés", to: "/adatkezeles" },
  { label: "Impresszum", to: "/impresszum" },
  { label: "Kapcsolat", to: "/kapcsolat" },
]

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant/30 pt-20 pb-10 px-margin-mobile md:px-margin-desktop relative z-10">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-16 text-center">

        {/* Logó / Névjegy */}
        <div className="space-y-4">
          <Link to="/" className="block font-[Bodoni_Moda] text-headline-md tracking-[0.3em] text-primary uppercase">
            Gut Ildi
          </Link>
          <p className="font-manrope text-label-sm font-semibold text-on-surface-variant uppercase tracking-widest">
            Hair Style &amp; Head Spa
          </p>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full py-12 border-y border-outline-variant/20">
          <div className="space-y-4">
            <p className="font-manrope text-label-sm font-bold text-primary uppercase">Cím</p>
            <p className="font-manrope text-body-md text-on-surface-variant">
              6100 Kiskunfélegyháza,<br />Klapka utca 24.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-manrope text-label-sm font-bold text-primary uppercase">Elérhetőség</p>
            <div className="flex flex-col items-center gap-3">
              <p className="font-manrope text-body-md text-on-surface-variant">+36 70 886 0021</p>
              <a
                href="https://www.facebook.com/gutildihairstyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors duration-300"
                aria-label="Facebook oldalunk"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <p className="font-manrope text-label-sm font-bold text-primary uppercase">Nyitvatartás</p>
            <p className="font-manrope text-body-md text-on-surface-variant">
              Bejelentkezés szerint
            </p>
          </div>
        </div>

        {/* Jogi linkek */}
        <div className="flex flex-wrap justify-center gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link font-manrope text-label-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="font-manrope text-label-sm text-on-surface-variant/60">
          © {new Date().getFullYear()} Gut Ildi Hair Style &amp; Head Spa. Minden jog fenntartva.
        </div>

      </div>
    </footer>
  )
}