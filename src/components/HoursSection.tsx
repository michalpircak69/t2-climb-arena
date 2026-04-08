import { Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import lezecImg from "@/assets/lezec_5.png";

const hours = [
  { day: "Pondelok – Streda", time: "14:00 – 21:45" },
  { day: "Štvrtok", time: "6:00 – 21:45" },
  { day: "Piatok – Sobota", time: "14:00 – 21:45" },
  { day: "Nedeľa", time: "14:00 – 21:00" },
];

const HoursSection = () => (
  <section className="section-padding relative overflow-hidden">
    <img
      src={lezecImg}
      alt=""
      className="pointer-events-none absolute right-0 top-1/2 hidden h-[68%] max-h-[620px] w-auto -translate-y-1/2 select-none object-contain object-right opacity-90 lg:block"
      aria-hidden="true"
    />
    <div className="container relative z-10 mx-auto max-w-lg text-center">
      <AnimatedSection>
        <h2 className="font-display text-4xl md:text-6xl text-gradient mb-12">Otváracie hodiny</h2>
      </AnimatedSection>
      <AnimatedSection>
        <div className="space-y-4">
          {hours.map((h, i) => (
            <motion.div
              key={h.day}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ x: 6 }}
              className="flex items-center justify-between bg-card border border-border rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <span className="font-body font-medium text-sm sm:text-base">{h.day}</span>
              </div>
              <span className="font-body font-semibold text-primary text-sm sm:text-base whitespace-nowrap">{h.time}</span>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HoursSection;
