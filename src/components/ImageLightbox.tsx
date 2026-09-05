import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
  src: string;
  label: string;
}

interface Props {
  images: ImageItem[];
}

export function ImageLightbox({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };
  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("lightbox-backdrop")) {
      closeLightbox();
    }
  };

  return (
    <>
      {/* IMAGE GRID */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={img.src} className="gallery-card">
            <div className="gallery-img-wrap">
              <img
                src={img.src}
                alt={img.label}
                className="gallery-img"
                loading="lazy"
              />
            </div>
            <div className="gallery-card-footer">
              <span className="gallery-card-label">{img.label}</span>
              <button
                className="gallery-view-btn"
                onClick={() => openLightbox(index)}
                aria-label={`View full image: ${img.label}`}
              >
                <ZoomIn size={15} />
                View Full Image
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-backdrop"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <div className="lightbox-inner">
            {/* Close */}
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close image preview"
            >
              <X size={24} />
            </button>

            {/* Prev */}
            {images.length > 1 && (
              <button className="lightbox-nav lightbox-prev" onClick={goPrev} aria-label="Previous image">
                <ChevronLeft size={28} />
              </button>
            )}

            {/* Image */}
            <div className="lightbox-img-container">
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].label}
                className="lightbox-img"
              />
            </div>

            {/* Next */}
            {images.length > 1 && (
              <button className="lightbox-nav lightbox-next" onClick={goNext} aria-label="Next image">
                <ChevronRight size={28} />
              </button>
            )}

            {/* Caption */}
            <div className="lightbox-caption">
              {images[lightboxIndex].label}
              <span className="lightbox-count">{lightboxIndex + 1} / {images.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
