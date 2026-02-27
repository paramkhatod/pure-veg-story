import misalImg from "@/assets/misal-pav.jpg";
import dosaImg from "@/assets/dosa.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";
import thaliImg from "@/assets/hero-thali.jpg";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  { src: thaliImg, alt: "Traditional Maharashtrian Thali" },
  { src: misalImg, alt: "Signature Misal Pav" },
  { src: dosaImg, alt: "Crispy Masala Dosa" },
  { src: interiorImg, alt: "Restaurant Interior" },
  { src: thaliImg, alt: "Special Festival Thali" },
  { src: misalImg, alt: "Nashik-style Misal" },
];

export const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-narrow">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            A Visual <span className="text-primary">Feast</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <AnimateOnScroll key={i} delay={i * 100} animation="fade-in">
              <button
                onClick={() => setLightbox(i)}
                className="group relative aspect-square rounded-xl overflow-hidden w-full"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-medium text-sm">
                    View
                  </span>
                </div>
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
};
