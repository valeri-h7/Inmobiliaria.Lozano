import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PropertyCard from '../PropertyCard/PropertyCard.jsx'
import { properties } from '../../data/properties.js'
import './FeaturedProperties.css'

function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured).slice(0, 6)


  return (
    <section className="section featured">
      <div className="container">
        <div className="featured__head">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <p className="kicker">Tenemos...</p>
            <h2>Propiedades</h2>
            <p className="lede">
              Una muestra de lo que tenemos disponible hoy. La lista completa
              se actualiza todos los días.
            </p>
          </div>
          <Link to="/propiedades" className="featured__all">
            Ver todas <ArrowRight size={16} />
          </Link>
        </div>

        <div className="featured__grid">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties
