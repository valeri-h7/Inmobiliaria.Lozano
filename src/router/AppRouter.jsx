import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Properties from '../pages/Properties.jsx'
import PropertyDetail from '../pages/PropertyDetail.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/propiedades" element={<Properties />} />
      <Route path="/propiedades/:id" element={<PropertyDetail />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  )
}

export default AppRouter
