import { Link } from 'react-router-dom'
import { categories } from '../../data/properties.js'
import './Categories.css'

function Categories() {
  return (
    <section className="section categories">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Explorá por tipo</p>
          <h2>¿Qué estás buscando?</h2>
        </div>

        <div className="categories__grid">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/propiedades?tipo=${encodeURIComponent(cat.type)}`}
              className="categories__item"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <span className="categories__label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
