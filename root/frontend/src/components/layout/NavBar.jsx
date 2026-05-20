import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: "Főoldal", to: "/" },
  { label: "Rólunk", to: "/rolunk" },
  { label: "Szolgáltatások", to: "/szolgaltatasok" },
  { label: "Élmény", to: "/elmeny" },
  { label: "Vélemények", to: "/velemenyek" },
]

export default function NavBar() {
  const { pathname } = useLocation()

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

      </div>
    </nav>
  )
}