import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import lezecImg from "@/assets/lezec_4.png";

const stats = [
  { value: "15m", label: "Výška steny" },
  { value: "100+", label: "Lezeckých trás" },
  { value: "330m²", label: "Bouldrovka" },
];

const AboutSection = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    <img
      src={lezecImg}
      alt=""
      className="absolute left-0 top-0 h-[220px] md:h-[300px] w-auto object-contain object-left-top pointer-events-none select-none hidden md:block"
      aria-hidden="true"
    />
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection className="text-center">
        <h2 className="font-display text-4xl md:text-6xl text-gradient mb-8">O nás</h2>
        <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
          T2 Boulder Arena je moderné lezecké centrum v Košiciach. Ponúka bouldering aj lezenie na lane
          v bezpečnom indoor prostredí. Stena dosahuje výšku až 15 metrov a ponúka viac ako 100 lezeckých
          trás rôznych obtiažností. Centrum je vhodné pre začiatočníkov, pokročilých lezcov, deti aj skupiny.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 sm:mt-16">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.15} direction="scale">
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              className="text-center p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="font-display text-2xl sm:text-4xl md:text-5xl text-primary">{s.value}</div>
              <div className="font-body text-muted-foreground mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">{s.label}</div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
