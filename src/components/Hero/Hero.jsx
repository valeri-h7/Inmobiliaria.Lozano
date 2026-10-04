import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import heroVideo from "../../assets/videos/hero-video.mp4";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Video de fondo */}
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Capa oscura */}
      <div className="hero__overlay"></div>

      {/* Contenido */}
      <div className="container hero__content">

        <p className="hero__kicker">
          LOZANOS PROPIEDADES · BUENOS AIRES
        </p>

        <h1>
          Encontrá el lugar{" "}
          <br />
          donde empieza{" "}
          <br />
          tu próxima historia.
        </h1>

        <p className="hero__lede">
          Compramos, vendemos y alquilamos con vos al lado
          en cada paso: desde la primera visita hasta la
          firma de la escritura.
        </p>

        <div className="hero__cta">
          <Link to="/propiedades" className="btn btn-primary">
            Ver propiedades
          </Link>

          <Link to="/contacto" className="btn btn-outline">
            Hablar con un asesor
          </Link>
        </div>

        <p className="hero__trust">
          Inmobiliaria matriculada en CUCICBA · Propiedades activas
          en Caballito, Almagro, Palermo, Villa Urquiza y Pompeya
        </p>

      </div>

      {/* Buscador */}
      <div className="container hero__search">
        <SearchBar />
      </div>

    </section>
  );
}

export default Hero;