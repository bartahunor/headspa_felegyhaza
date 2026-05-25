/**
 * GlassButton – újrafelhasználható körvonalazott gomb
 *
 * Props:
 *  children   : ReactNode  – gomb szövege
 *  onClick    : function   – kattintás kezelő (opcionális)
 *  href       : string     – ha meg van adva, <a> tagként renderelődik (opcionális)
 *  className  : string     – extra Tailwind osztályok (opcionális)
 *  type       : string     – button type attribútum, default: "button"
 *
 * Használat:
 *  <GlassButton onClick={() => navigate("/kapcsolat")}>
 *    Kapcsolat felvétele
 *  </GlassButton>
 *
 *  <GlassButton href="/kapcsolat">
 *    Kapcsolat felvétele
 *  </GlassButton>
 */

export default function GlassButton({
  children,
  onClick,
  href,
  className = "",
  type = "button",
}) {
  const baseClass = `
    inline-flex items-center justify-center gap-2
    border-2 border-secondary text-secondary
    font-manrope text-label-sm tracking-[0.1em] uppercase
    px-10 py-4 rounded-full
    hover:bg-secondary hover:text-white
    active:scale-95
    transition-all duration-300
    cursor-pointer
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}