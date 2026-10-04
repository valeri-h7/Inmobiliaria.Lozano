import { Link } from 'react-router-dom'
import { KeyRound } from 'lucide-react'
import Hero from '../components/Hero/Hero.jsx'
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties.jsx'
import Categories from '../components/Categories/Categories.jsx'
import Stats from '../components/Stats/Stats.jsx'
import AboutSection from '../components/AboutSection/AboutSection.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import './Home.css'

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Categories />
      <Stats />
      <AboutSection compact />
      <Testimonials />

      <section className="home-cta">
        <div className="container">
          <div className="home-cta__box">
            <KeyRound className="home-cta__icon" strokeWidth={1} aria-hidden="true" />
            <div className="home-cta__text">
              <p className="kicker">¿Vender o alquilar?</p>
              <h2>Tasamos tu propiedad sin cargo, hoy mismo.</h2>
              <p className="home-cta__lede">
                Armamos juntos la mejor estrategia de publicación: fotos, precio de mercado
                y difusión en los portales donde realmente buscan tus próximos inquilinos o compradores.
              </p>
            </div>
            <div className="home-cta__actions">
              <Link to="/contacto" className="btn btn-brass">Quiero una tasación</Link>
              <a href="tel:+5491122518570" className="btn btn-outline">Hablar con un asesor</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
