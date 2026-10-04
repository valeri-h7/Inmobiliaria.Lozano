import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm/ContactForm.jsx'
import BackButton from '../components/BackButton/BackButton.jsx'
import './Contact.css'

function Contact() {
  return (
    <section className="section contact-page">
      <div className="container">
        <BackButton fallback="/" />
        <div className="section-head">
          <p className="kicker">Hablemos</p>
          <h2>Contanos qué estás buscando</h2>
          <p className="lede">
            Respondemos consultas de lunes a viernes de 9 a 19 hs. Si preferís,
            también podés escribirnos directamente por WhatsApp.
          </p>
        </div>

        <div className="contact-page__grid">
          <ContactForm />

          <div className="contact-page__info">
            <div className="contact-page__item">
              <MapPin size={18} />
              <div>
                <strong>Oficina</strong>
                <span>F Senillosa 8, Piso 1 Depto 1, Caballito, CABA</span>
              </div>
            </div>
            <div className="contact-page__item">
              <Phone size={18} />
              <div>
                <strong>Teléfono</strong>
                <span>11 2251-8570</span>
              </div>
            </div>
            <div className="contact-page__item">
              <Mail size={18} />
              <div>
                <strong>Email</strong>
                <span>info@lozanoyasociados.com.ar</span>
              </div>
            </div>
            <div className="contact-page__item">
              <Clock size={18} />
              <div>
                <strong>Horario</strong>
                <span>Lun a Vie, 9 a 19 hs</span>
              </div>
            </div>

            <iframe
            title="Ubicación de la oficina"
            className="contact-page__map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=F%20Senillosa%208%2C%20Caballito%2C%20CABA&output=embed"
/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
