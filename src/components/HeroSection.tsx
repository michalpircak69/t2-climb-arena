import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroImg from "@/assets/hero-climbing.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroBadgeLogo from "@/assets/t2-logo-bez-pozadia.png";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [heroImg, heroSlide2, heroSlide3, heroSlide4];

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow background */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentSlide}
          src={slides[currentSlide]}
          alt="T2 Boulder Arena - lezecká stena Košice"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: imgY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          width={1920}
          height={1080}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <img src={heroBadgeLogo} alt="T2 Boulder Arena logo" className="h-20 sm:h-28 md:h-36 w-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight text-white drop-shadow-lg"
        >
          Najväčšia lezecká stena na východe Slovenska
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/85 font-body max-w-2xl mx-auto"
        >
          Moderné lezecké centrum v Košiciach pre začiatočníkov aj pokročilých
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
        >
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-body font-semibold rounded-xl hover:scale-105 transition-all duration-300 glow-orange text-base sm:text-lg shadow-lg"
          >
            Príď si zaliezť
          </a>
          <a
            href="#pricing"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/40 text-white font-body font-semibold rounded-xl hover:bg-white hover:text-foreground transition-all duration-300 text-base sm:text-lg backdrop-blur-sm"
          >
            Zobraziť cenník
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - hidden on very small screens */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-6 h-10 sm:w-7 sm:h-11 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
