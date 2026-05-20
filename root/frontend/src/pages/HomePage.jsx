import ParallaxHero from "../components/sections/herosection.jsx";

export default function HomePage() {
  return (
    <main>
      <ParallaxHero />
      <section 
        className="relative min-h-screen bg-stone-100 flex items-center justify-center"
        style={{ zIndex: -10 }}
      >
        <h2 className="text-4xl text-stone-600">Teszt szekció</h2>
      </section>
    </main>
  )
}