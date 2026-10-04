import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../../assets/images/Logo-Lozanos.png'
import './Header.css'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/propiedades', label: 'Propiedades' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contactanos' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

    const location = useLocation()
    const isHomePage = location.pathname === '/'


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${!isHomePage ? 'header--internal' : ''}`}>
      <div className="container header__bar">
        <NavLink to="/" className="header__logo" onClick={() => setOpen(false)}>
          
          <img src={Logo} alt="Lozanos" className="header__logo-img" />
        </NavLink>

        <nav className="header__nav header__nav--desktop">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `header__link ${isActive ? 'is-active' : ''}`}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

       <a href="https://wa.me/5491122518570" target="_blank" rel="noopener noreferrer" className="header__phone">+54 9 11 2251-8570</a>



        <button
          className="header__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="header__nav header__nav--mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `header__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <a href="tel:+5491122518570" className="header__link">+54 9 11 2251-8570</a>
        </nav>
      )}
    </header>
  )
}

export default Header
