import { Link } from 'react-router-dom'
import {  MapPin, Mail, Phone } from 'lucide-react'
import './Footer.css'
import Logo from '../../assets/images/Logo-Lozanos.png'


function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={Logo} alt="Lozanos" className="footer__logo-img" />

        </div>

        <div className="footer__col">
          <h4>Navegación</h4>
          <Link to="/propiedades">Propiedades</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div className="footer__col">
          <h4>Operaciones</h4>
          <Link to="/propiedades?operacion=Venta">Comprar</Link>
          <Link to="/propiedades?operacion=Alquiler">Alquilar</Link>
          <Link to="/contacto">Tasar mi propiedad</Link>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <span><MapPin size={15} />F Senillosa 8, Piso 1 Depto 1, Caballito, CABA</span>
          <span><Phone size={15} /> 11 2251-8570</span>
          <span><Mail size={15} /> info@lozanoyasociados.com.ar</span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} Lozano Propiedades. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
