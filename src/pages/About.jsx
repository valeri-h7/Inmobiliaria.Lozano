import AboutSection from '../components/AboutSection/AboutSection.jsx'
import Stats from '../components/Stats/Stats.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import BackButton from '../components/BackButton/BackButton.jsx'
import './About.css'

const team = [
  { name: 'Fulanito pedrito', role: 'Fundador', image: 'https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80' },
  { name: 'Pablo clavo un clavito', role: 'Ventas · zona norte', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUFPCEDz6HHeFVKKvRjvESZY4NiHKMwjjWqY-Y9Yvl9wI_6ooNtaWq1KH&s=10' },
  { name: 'Celia Cruz', role: 'Alquileres', image: 'https://i.scdn.co/image/ab6761610000e5ebb58cbc73f2b755f60134c54b' },
  { name: 'El chavo del ocho', role: 'Tasaciones', image: 'https://i.scdn.co/image/ab67656300005f1fd54e8ba54ab1fede0ad4d289' },
]

function About() {
  return (
    <>
      <section className="about-banner">
        <div className="container">
          <BackButton fallback="/" />
          <p className="kicker">Nosotros</p>
          <h1>Profesionales que te acompañan en cada paso.</h1>
          <p className="about-banner__lede">
            Sabemos que comprar, vender o alquilar una propiedad no es una decisión más: por eso la acompañamos con seriedad, cercanía y toda la información que necesitás para decidir tranquilo.
          </p>
        </div>
      </section>

      <AboutSection />

      <section className="section team">
        <div className="container">
          <div className="section-head">
            <p className="kicker">El equipo</p>
            <h2>Las personas detrás de cada operación</h2>
          </div>
          <div className="team__grid">
            {team.map((member) => (
              <div key={member.name} className="team__card">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
    </>
  )
}

export default About
