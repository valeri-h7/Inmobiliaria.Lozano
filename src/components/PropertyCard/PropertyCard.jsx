import { Link } from 'react-router-dom'
import { BedDouble, Bath, Ruler, MapPin } from 'lucide-react'
import './PropertyCard.css'

function formatPrice(price, currency) {
  const symbol = currency === 'USD' ? 'USD' : '$'
  return `${symbol} ${price.toLocaleString('es-AR')}`
}

function PropertyCard({ property }) {
  const {
    id, title, operation, neighborhood, city, price, currency, expenses,
    surface, bedrooms, bathrooms, image, type,
  } = property

  const showRoomSpecs = type !== 'Cochera' && type !== 'Galpón'

  return (
    <Link to={`/propiedades/${id}`} className="property-card">
      <div className="property-card__media">
        <img src={image} alt={title} loading="lazy" />
        <span className={`property-card__badge property-card__badge--${operation.toLowerCase()}`}>
          {operation}
        </span>
      </div>

      <div className="property-card__body">
        <p className="property-card__location">
          <MapPin size={14} strokeWidth={2} />
          {neighborhood}, {city}
        </p>
        <h3 className="property-card__title">{title}</h3>

        <ul className="property-card__specs">
          <li><Ruler size={15} strokeWidth={2} /> {surface} m²</li>
          {showRoomSpecs && (
            <>
              <li><BedDouble size={15} strokeWidth={2} /> {bedrooms}</li>
              <li><Bath size={15} strokeWidth={2} /> {bathrooms}</li>
            </>
          )}
        </ul>

        <div className="property-card__footer">
          <div className="property-card__price-group">
            <span className="property-card__price">{formatPrice(price, currency)}</span>
            {expenses && <span className="property-card__expenses">+ ${expenses.toLocaleString('es-AR')} exp.</span>}
          </div>
          <span className="property-card__link">Ver ficha</span>
        </div>
      </div>
    </Link>
  )
}

export default PropertyCard
