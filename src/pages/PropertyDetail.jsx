import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, BedDouble, Bath, Ruler, Car, Phone, Mail, Check, Images } from 'lucide-react'
import PropertyCard from '../components/PropertyCard/PropertyCard.jsx'
import BackButton from '../components/BackButton/BackButton.jsx'
import Lightbox from '../components/Lightbox/Lightbox.jsx'
import { properties } from '../data/properties.js'
import './PropertyDetail.css'

function formatPrice(price, currency) {
  const symbol = currency === 'USD' ? 'USD' : '$'
  return `${symbol} ${price.toLocaleString('es-AR')}`
}

// Cuántas fotos se ven en el collage antes de la ficha (1 grande + hasta 4
// chicas). El resto se ve al abrir la galería completa.
const COLLAGE_SIZE = 5

function PropertyDetail() {
  const { id } = useParams()
  const property = properties.find((p) => String(p.id) === id)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (!property) {
    return (
      <section className="section property-detail__not-found">
        <div className="container">
          <p className="kicker">Ups</p>
          <h2>No encontramos esa propiedad</h2>
          <p className="lede">Puede que se haya vendido, alquilado o que el link esté mal escrito.</p>
          <Link to="/propiedades" className="btn btn-primary">Ver todas las propiedades</Link>
        </div>
      </section>
    )
  }

  const related = properties
    .filter((p) => p.id !== property.id && (p.type === property.type || p.neighborhood === property.neighborhood))
    .slice(0, 3)

  const mapQuery = encodeURIComponent(
    property.address ? `${property.address}, ${property.neighborhood}, ${property.city}` : `${property.neighborhood}, ${property.city}`
  )
  const showRoomSpecs = property.type !== 'Cochera' && property.type !== 'Galpón'

  return (
    <section className="property-detail">
      <div className="container">
        <BackButton fallback="/propiedades" />

        <div className={`property-detail__collage property-detail__collage--${Math.min(property.gallery.length, COLLAGE_SIZE)}`}>
          <span className={`property-detail__badge property-detail__badge--${property.operation.toLowerCase()}`}>
            {property.operation}
          </span>

          {property.gallery.slice(0, COLLAGE_SIZE).map((img, i) => {
            const isLastTile = i === COLLAGE_SIZE - 1
            const remaining = property.gallery.length - COLLAGE_SIZE
            const showMoreOverlay = isLastTile && remaining > 0

            return (
              <button
                key={img}
                type="button"
                className={`property-detail__tile property-detail__tile--${i}`}
                onClick={() => setLightboxIndex(i)}
                aria-label={showMoreOverlay ? `Ver las ${property.gallery.length} fotos` : `Ver foto ${i + 1}`}
              >
                <img src={img} alt={i === 0 ? property.title : ''} loading={i === 0 ? 'eager' : 'lazy'} />
                {showMoreOverlay && (
                  <span className="property-detail__tile-overlay">
                    <Images size={18} /> +{remaining} fotos
                  </span>
                )}
              </button>
            )
          })}

          {property.gallery.length > 1 && (
            <button
              type="button"
              className="property-detail__see-all"
              onClick={() => setLightboxIndex(0)}
            >
              <Images size={15} /> Ver todas las fotos ({property.gallery.length})
            </button>
          )}
        </div>

        {lightboxIndex !== null && (
          <Lightbox
            images={property.gallery}
            index={lightboxIndex}
            alt={property.title}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((i) => (i - 1 + property.gallery.length) % property.gallery.length)}
            onNext={() => setLightboxIndex((i) => (i + 1) % property.gallery.length)}
            onSelect={setLightboxIndex}
          />
        )}

        <div className="property-detail__grid">
          <div className="property-detail__content">
            <p className="property-detail__location">
              <MapPin size={15} /> {property.address ? `${property.address}, ` : ''}{property.neighborhood}, {property.city}
            </p>
            <h1>{property.title}</h1>
            <span className="property-detail__price">
              {formatPrice(property.price, property.currency)}
              {property.expenses && (
                <span className="property-detail__expenses"> + ${property.expenses.toLocaleString('es-AR')} expensas</span>
              )}
            </span>

            <ul className="property-detail__specs">
              <li><Ruler size={17} /> <div><strong>{property.surface} m²</strong><span>Superficie</span></div></li>
              {showRoomSpecs && (
                <>
                  <li><BedDouble size={17} /> <div><strong>{property.bedrooms}</strong><span>Dormitorios</span></div></li>
                  <li><Bath size={17} /> <div><strong>{property.bathrooms}</strong><span>Baños</span></div></li>
                  <li><Car size={17} /> <div><strong>{property.parking ? 'Sí' : 'No'}</strong><span>Cochera</span></div></li>
                </>
              )}
            </ul>

            <h2 className="property-detail__subhead">Descripción</h2>
            <p className="property-detail__description">{property.description}</p>

            {property.amenities?.length > 0 && (
              <>
                <h2 className="property-detail__subhead">Características</h2>
                <ul className="property-detail__amenities">
                  {property.amenities.map((a) => (
                    <li key={a}><Check size={15} /> {a}</li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="property-detail__subhead">Ubicación</h2>
            <iframe
              title={`Mapa de ${property.neighborhood}`}
              className="property-detail__map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            />
          </div>

          <aside className="property-detail__sidebar">
            <div className="property-detail__contact-card">
              <h3>¿Te interesa esta propiedad?</h3>
              <p>Coordinamos una visita o resolvemos tus dudas hoy mismo.</p>
              <Link to="/contacto" className="btn btn-primary property-detail__contact-btn">
                Quiero más información
              </Link>
              <a href="tel:+541122518570" className="property-detail__contact-link">
                <Phone size={16} /> 11 2251-8570
              </a>
              <a href="mailto:info@lozanoyasociados.com.ar" className="property-detail__contact-link">
                <Mail size={16} /> info@lozanoyasociados.com.ar
              </a>
              {property.sourceUrl && (
                <a
                  href={property.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="property-detail__source-link"
                >
                  Ver aviso en Argenprop
                </a>
              )}
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="property-detail__related">
            <h2>Propiedades similares</h2>
            <div className="property-detail__related-grid">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PropertyDetail
