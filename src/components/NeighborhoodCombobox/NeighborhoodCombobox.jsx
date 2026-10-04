import { useId, useState } from 'react'
import { caBarrios } from '../../data/properties.js'
import './NeighborhoodCombobox.css'

// Input de "Barrio" con autocompletar: no tira los 48 barrios de CABA apenas
// hacés foco, solo los filtra a medida que escribís. Se usa tanto en el
// buscador de la home (Hero) como en el filtro de /propiedades.
function NeighborhoodCombobox({ id, value, onChange, placeholder = 'Escribí un barrio…' }) {
  const listboxId = useId()
  const [query, setQuery] = useState(value || '')
  const [open, setOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(-1)

  const normalizedQuery = query.trim().toLowerCase()
  const matches = normalizedQuery
    ? caBarrios.filter((b) => b.toLowerCase().includes(normalizedQuery)).slice(0, 8)
    : []

  const selectBarrio = (barrio) => {
    setQuery(barrio)
    onChange(barrio)
    setOpen(false)
    setHighlighted(-1)
  }

  const handleInputChange = (e) => {
    const next = e.target.value
    setQuery(next)
    setOpen(true)
    setHighlighted(-1)
    if (next.trim() === '') onChange('')
    else if (next !== value) onChange('')
  }

  const handleKeyDown = (e) => {
    if (!open || matches.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlighted((i) => (i + 1) % matches.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlighted((i) => (i <= 0 ? matches.length - 1 : i - 1))
    } else if (e.key === 'Enter' && highlighted >= 0) {
      e.preventDefault()
      selectBarrio(matches[highlighted])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  const handleBlur = () => {
    // Delay para que el click en una opción (dispara blur primero) llegue a registrarse.
    setTimeout(() => setOpen(false), 120)
  }

  return (
    <div
      className="neighborhood-combobox"
      role="combobox"
      aria-expanded={open && matches.length > 0}
      aria-haspopup="listbox"
      aria-owns={listboxId}
    >
      <input
        id={id}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onFocus={() => setOpen(true)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        aria-autocomplete="list"
        aria-controls={listboxId}
      />
      {open && matches.length > 0 && (
        <ul className="neighborhood-combobox__suggestions" role="listbox" id={listboxId}>
          {matches.map((barrio, i) => (
            <li key={barrio} role="option" aria-selected={i === highlighted}>
              <button
                type="button"
                className={i === highlighted ? 'is-highlighted' : ''}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => selectBarrio(barrio)}
              >
                {barrio}
              </button>
            </li>
          ))}
        </ul>
      )}
      {open && query.trim() && matches.length === 0 && (
        <div className="neighborhood-combobox__suggestions neighborhood-combobox__suggestions--empty">
          Ningún barrio coincide con "{query.trim()}"
        </div>
      )}
    </div>
  )
}

export default NeighborhoodCombobox
