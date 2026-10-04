terminal (por defecto `http://localhost:5173`).

Para generar la build de producción:

```bash
npm run build
npm run preview
```

## Qué incluye

- **Header**: navegación fija, transparente sobre el hero y sólida al hacer scroll. Menú hamburguesa en mobile.
- **Hero**
- **SearchBar**: filtra por operación / tipo / barrio y te lleva a `/propiedades` con esos filtros ya aplicados vía la URL (`?operacion=&tipo=&barrio=`).
- **Properties (listado)**: filtros + orden por precio/superficie, todo en el cliente sobre `src/data/properties.js`.
- **PropertyCard, FeaturedProperties, Categories, Stats, AboutSection, Testimonials, ContactForm, Footer**: 
- **Páginas**: Home, Properties, About (Nosotros) y Contact (Contacto), conectadas con `react-router-dom` en `src/router/AppRouter.jsx`.



