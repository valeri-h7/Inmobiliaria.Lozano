import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './Lightbox.css'

function Lightbox({ images, index, onClose, onPrev, onNext, onSelect, alt }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    // Evita que el fondo haga scroll mientras el lightbox está abierto.
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galería de fotos">
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Cerrar galería">
        <X size={22} />
      </button>

      <span className="lightbox__counter">{index + 1} / {images.length}</span>

      <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={onPrev} aria-label="Foto anterior">
        <ChevronLeft size={26} />
      </button>

      <div className="lightbox__stage">
        <img src={images[index]} alt={alt} />
      </div>

      <button type="button" className="lightbox__nav lightbox__nav--next" onClick={onNext} aria-label="Foto siguiente">
        <ChevronRight size={26} />
      </button>

      <div className="lightbox__thumbs">
        {images.map((img, i) => (
          <button
            key={img}
            type="button"
            className={`lightbox__thumb ${i === index ? 'is-active' : ''}`}
            onClick={() => onSelect(i)}
            aria-label={`Ver foto ${i + 1}`}
          >
            <img src={img} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Lightbox
