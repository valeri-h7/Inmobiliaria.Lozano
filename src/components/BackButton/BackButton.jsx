import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import './BackButton.css'

// Vuelve a la página anterior real del historial del navegador. Si no hay
// historial propio (alguien entró directo por un link), cae al destino
// indicado en `fallback`.
function BackButton({ fallback = '/', label = 'Volver' }) {
  const navigate = useNavigate()
  const canGoBack = typeof window !== 'undefined' && window.history.state?.idx > 0

  const handleClick = () => {
    if (canGoBack) navigate(-1)
    else navigate(fallback)
  }

  return (
    <button type="button" onClick={handleClick} className="back-button">
      <ArrowLeft size={16} /> {label}
    </button>
  )
}

export default BackButton
