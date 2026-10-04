import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Cada vez que cambia la ruta, lleva el scroll al principio de la página.
// Sin esto, al navegar desde una página con scroll (ej: Home) a otra
// (ej: Nosotros), la nueva página aparece a mitad de camino.
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
