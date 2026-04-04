import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-new-1.png";
import g2 from "@/assets/gallery-new-2.png";
import g3 from "@/assets/gallery-new-3.png";
import g4 from "@/assets/gallery-new-4.png";
import g5 from "@/assets/gallery-new-5.png";
import g6 from "@/assets/gallery-new-6.png";
import g7 from "@/assets/gallery-new-7.png";
import g8 from "@/assets/gallery-new-8.png";

const images = [
  { src: g1, alt: "Boulderová stena" },
  { src: g2, alt: "Súťaž v lezení" },
  { src: g3, alt: "Kaviareň s výhľadom na stenu" },
  { src: g4, alt: "Lezec na stene" },
  { src: g5, alt: "Lezecká stena s lezcami" },
  { src: g6, alt: "Farebné lezecké chyty" },
  { src: g7, alt: "Vysoká lezecká stena" },
  { src: g8, alt: "Lezec na bouldri" },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = () => setSelectedIndex(null);
  const prev = () =>
    setSelectedIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () =>
    setSelectedIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <>
      <section id="gallery" className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-6xl text-gradient">Galéria</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.08} direction="scale">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedIndex(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <X className="w-7 h-7" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
