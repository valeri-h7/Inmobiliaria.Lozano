import { testimonials } from '../../data/properties.js'
import './Testimonials.css'

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Lo que dicen nuestros clientes</p>
          <h2>Historias de quienes ya encontraron su lugar</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure key={t.id} className="testimonials__card">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="testimonials__name">{t.name}</span>
                <span className="testimonials__role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
