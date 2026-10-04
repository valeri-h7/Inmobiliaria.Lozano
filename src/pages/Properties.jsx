import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import PropertyCard from '../components/PropertyCard/PropertyCard.jsx'
import BackButton from '../components/BackButton/BackButton.jsx'
import NeighborhoodCombobox from '../components/NeighborhoodCombobox/NeighborhoodCombobox.jsx'
import { properties, propertyTypes } from '../data/properties.js'
import './Properties.css'

function Properties() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [operation, setOperation] = useState(searchParams.get('operacion') || '')
  const [type, setType] = useState(searchParams.get('tipo') || '')
  const [neighborhood, setNeighborhood] = useState(searchParams.get('barrio') || '')
  const [sort, setSort] = useState('recientes')

  const updateFilter = (setter, key) => (e) => {
    const value = e.target.value
    setter(value)
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next)
  }

  const results = useMemo(() => {
    let list = properties.filter((p) => {
      return (
        (!operation || p.operation === operation) &&
        (!type || p.type === type) &&
        (!neighborhood || p.neighborhood === neighborhood)
      )
    })

    if (sort === 'precio-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'precio-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'superficie') list = [...list].sort((a, b) => b.surface - a.surface)

    return list
  }, [operation, type, neighborhood, sort])

  return (
    <section className="section properties-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-head">
          <p className="kicker">Todo el catálogo</p>
          <h2>Propiedades disponibles</h2>
          <p className="lede">{results.length} resultado{results.length !== 1 ? 's' : ''} para tu búsqueda.</p>
        </div>

        <div className="properties-page__filters">
          <div className="properties-page__filter">
            <label htmlFor="f-operation">Operación</label>
            <select id="f-operation" value={operation} onChange={updateFilter(setOperation, 'operacion')}>
              <option value="">Todas</option>
              <option value="Venta">Venta</option>
              <option value="Alquiler">Alquiler</option>
            </select>
          </div>

          <div className="properties-page__filter">
            <label htmlFor="f-type">Tipo</label>
            <select id="f-type" value={type} onChange={updateFilter(setType, 'tipo')}>
              <option value="">Todos</option>
              {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div className="properties-page__filter properties-page__filter--location">
            <label htmlFor="f-neighborhood">Barrio</label>
            <NeighborhoodCombobox
              id="f-neighborhood"
              value={neighborhood}
              onChange={(value) => {
                setNeighborhood(value)
                const next = new URLSearchParams(searchParams)
                if (value) next.set('barrio', value)
                else next.delete('barrio')
                setSearchParams(next)
              }}
              placeholder="Todos"
            />
          </div>

          <div className="properties-page__filter">
            <label htmlFor="f-sort"><SlidersHorizontal size={13} /> Ordenar</label>
            <select id="f-sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="recientes">Más recientes</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="superficie">Superficie</option>
            </select>
          </div>
        </div>

        {results.length > 0 ? (
          <div className="properties-page__grid">
            {results.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="properties-page__empty">
            <p>No encontramos propiedades con esos filtros.</p>
            <button
              className="btn btn-outline"
              onClick={() => { setOperation(''); setType(''); setNeighborhood(''); setSearchParams({}) }}
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Properties
