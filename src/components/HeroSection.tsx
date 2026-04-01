import { motion } from "framer-motion";
import heroImg from "@/assets/hero-climbing.jpg";

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="T2 Boulder Arena - lezecká stena Košice"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

    <div className="relative z-10 text-center px-4 max-w-4xl">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-block mb-6 px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
      >
        <span className="font-body text-sm font-medium text-white tracking-wide">🧗 KOŠICE, SLOVENSKO</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight text-white drop-shadow-lg"
      >
        Najväčšia lezecká stena na východe Slovenska
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-lg md:text-xl text-white/85 font-body max-w-2xl mx-auto"
      >
        Moderné lezecké centrum v Košiciach pre začiatočníkov aj pokročilých
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contact"
          className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-xl hover:scale-105 transition-all duration-300 glow-orange text-lg shadow-lg"
        >
          Príď si zaliezť
        </a>
        <a
          href="#pricing"
          className="px-8 py-4 border-2 border-white/40 text-white font-body font-semibold rounded-xl hover:bg-white hover:text-foreground transition-all duration-300 text-lg backdrop-blur-sm"
        >
          Zobraziť cenník
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-7 h-11 rounded-full border-2 border-white/40 flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-primary rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
