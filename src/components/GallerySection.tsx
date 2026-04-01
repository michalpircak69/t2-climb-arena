import AnimatedSection from "./AnimatedSection";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Lezec na stene" },
  { src: g2, alt: "Interiér centra" },
  { src: g3, alt: "Detské lezenie" },
  { src: g4, alt: "Lezecké chyty" },
  { src: g5, alt: "Teambuilding" },
  { src: g6, alt: "Tréningová zóna" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Galéria</h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <AnimatedSection key={i}>
            <div className="overflow-hidden rounded-xl group">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
