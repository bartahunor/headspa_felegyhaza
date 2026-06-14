import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: "Főoldal", to: "/" },
  { label: "Rólunk", to: "/rolunk" },
  { label: "Szolgáltatások", to: "/szolgaltatasok" },
  { label: "GYIK", to: "/gyik" },
]

export default function NavBar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Oldal váltásakor zárd be a menüt
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Scroll letiltása nyitott menünél
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className="bg-surface/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm shadow-primary/5">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto">

        {/* Logo */}
        <Link to="/" className="font-[Bodoni_Moda] text-headline-md tracking-widest text-primary uppercase">
          Gut Ildi
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link text-label-sm uppercase pb-1 transition-colors duration-300
                  ${isActive ? 'text-primary font-bold nav-link--active' : 'text-on-surface-variant hover:text-primary'}
                `}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Burger gomb — csak mobilon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
        >
          <span
            className="block w-6 h-[1.5px] bg-primary transition-all duration-300 origin-center"
            style={{ transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }}
          />
          <span
            className="block w-6 h-[1.5px] bg-primary transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[1.5px] bg-primary transition-all duration-300 origin-center"
            style={{ transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobil menü panel */}
      <div
        className="md:hidden fixed inset-0 top-[57px] z-40 flex flex-col px-margin-mobile pt-10 pb-16 gap-6"
        style={{
          background: '#fff',
          height: 'calc(100vh - 57px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        {navLinks.map((link, i) => {
          const isActive = pathname === link.to
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[28px] font-['Bodoni_Moda'] tracking-wide transition-all duration-300
                ${isActive ? 'text-primary' : 'text-on-surface-variant'}
              `}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.4s ease ${0.05 + i * 0.06}s, transform 0.4s ease ${0.05 + i * 0.06}s`,
              }}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}