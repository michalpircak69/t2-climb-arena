import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Lezec na bouldrovej stene" },
  { src: g2, alt: "Farebné lezecké chyty" },
  { src: g3, alt: "Detské lezenie" },
  { src: g4, alt: "Dynamické bouldering" },
  { src: g5, alt: "Teambuilding v lezeckom centre" },
  { src: g6, alt: "Tréningová zóna a TRX" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Galéria</h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.1} direction="scale">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition-shadow"
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
);

export default GallerySection;
