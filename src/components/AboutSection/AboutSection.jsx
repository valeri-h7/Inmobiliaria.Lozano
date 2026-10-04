import { BadgeCheck, Building2, Globe2, Check } from 'lucide-react'
import './AboutSection.css'

const credentials = [
  { icon: BadgeCheck, label: 'Matriculados en CUCICBA' },
  { icon: Building2, label: 'Socios de la Cámara Inmobiliaria Argentina' },
  { icon: Globe2, label: 'Publicamos en Argenprop' },
]

function AboutSection({ compact = false }) {
  return (
    <section className="section about">
      <div className="container about__wrap">
        <p className="kicker">Quiénes somos</p>
        <h2>Una inmobiliaria que combina experiencia y trato cercano.</h2>

        <div className="about__text">
          <p>
            En Lozano y Asociados creemos que detrás de cada operación hay una historia: una familia
            que busca su primer hogar, alguien que vende la casa donde crió a sus hijos, un inversor
            que confía en nosotros su próximo paso. Por eso encaramos cada consulta con el mismo
            compromiso, sea cual sea el tamaño de la operación.
          </p>
          {!compact && (
            <p>
              Nuestro equipo está formado por profesionales especializados en el mercado inmobiliario,
              lo que nos permite darte respuestas claras y soluciones prácticas, pensadas para tu
              situación particular y no para un caso genérico. Trabajamos codo a codo tanto con quienes
              quieren vender o alquilar como con quienes están buscando su próximo hogar o una buena
              inversión, acompañando cada paso con honestidad y disposición para explicar todo las
              veces que haga falta.
            </p>
          )}
        </div>

        <ul className="about__credentials">
          {credentials.map(({ icon: Icon, label }) => (
            <li key={label}><Icon size={18} strokeWidth={1.8} /> {label}</li>
          ))}
        </ul>

        {!compact && (
          <ul className="about__list">
            <li><Check size={16} /> Tasaciones profesionales, sin cargo y sin compromiso.</li>
            <li><Check size={16} /> Acompañamiento personalizado en cada etapa, hasta el día de la firma.</li>
            <li><Check size={16} /> Presencia en Argenprop y otros portales, para más alcance.</li>
            <li><Check size={16} /> Procesos serios y transparentes, sin sorpresas ni letra chica.</li>
          </ul>
        )}
      </div>
    </section>
  )
}

export default AboutSection
