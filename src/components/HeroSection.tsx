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
    <div className="absolute inset-0 bg-background/70" />

    <div className="relative z-10 text-center px-4 max-w-4xl">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight text-gradient"
      >
        Najväčšia lezecká stena na východe Slovenska
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-6 text-lg md:text-xl text-foreground/80 font-body max-w-2xl mx-auto"
      >
        Moderné lezecké centrum v Košiciach pre začiatočníkov aj pokročilých
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contact"
          className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:brightness-110 transition-all glow-orange text-lg"
        >
          Príď si zaliezť
        </a>
        <a
          href="#pricing"
          className="px-8 py-4 border border-foreground/30 text-foreground font-body font-semibold rounded-lg hover:border-primary hover:text-primary transition-all text-lg"
        >
          Zobraziť cenník
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-primary rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
