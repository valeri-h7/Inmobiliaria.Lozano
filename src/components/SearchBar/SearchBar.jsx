import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { propertyTypes } from '../../data/properties.js'
import NeighborhoodCombobox from '../NeighborhoodCombobox/NeighborhoodCombobox.jsx'
import './SearchBar.css'

function SearchBar() {
  const navigate = useNavigate()
  const [operation, setOperation] = useState('')
  const [type, setType] = useState('')
  const [neighborhood, setNeighborhood] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (operation) params.set('operacion', operation)
    if (type) params.set('tipo', type)
    if (neighborhood) params.set('barrio', neighborhood)
    navigate(`/propiedades?${params.toString()}`)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar__field">
        <label htmlFor="operation">Operación</label>
        <select id="operation" value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="">Comprar o alquilar</option>
          <option value="Venta">Venta</option>
          <option value="Alquiler">Alquiler</option>
        </select>
      </div>

      <div className="search-bar__divider" aria-hidden="true" />

      <div className="search-bar__field">
        <label htmlFor="type">Tipo</label>
        <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Todos los tipos</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="search-bar__divider" aria-hidden="true" />

      <div className="search-bar__field search-bar__field--location">
        <label htmlFor="neighborhood">Ubicación</label>
        <NeighborhoodCombobox id="neighborhood" value={neighborhood} onChange={setNeighborhood} />
      </div>

      <button type="submit" className="search-bar__submit">
        <Search size={18} strokeWidth={2.2} />
        Buscar
      </button>
    </form>
  )
}

export default SearchBar
