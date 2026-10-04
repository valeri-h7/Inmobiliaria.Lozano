import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import './ContactForm.css'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: 'Comprar', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Reemplazar por la llamada real a tu servicio de email.
    console.log('Consulta enviada:', form)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="contact-form__success">
        <CheckCircle2 size={40} strokeWidth={1.5} />
        <h3>¡Gracias, {form.name.split(' ')[0] || ''}!</h3>
        <p>Recibimos tu consulta. Te vamos a contactar dentro de las próximas 24 horas hábiles.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name">Nombre y apellido</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Tu nombre" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="phone">Teléfono</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="11 5555-5555" />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="vos@email.com" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="reason">Me interesa</label>
        <select id="reason" name="reason" value={form.reason} onChange={handleChange}>
          <option>Comprar</option>
          <option>Alquilar</option>
          <option>Vender o tasar mi propiedad</option>
          <option>Otra consulta</option>
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Contanos qué estás buscando" />
      </div>

      <button type="submit" className="btn btn-primary contact-form__submit">
        Enviar consulta <Send size={16} />
      </button>
    </form>
  )
}

export default ContactForm
