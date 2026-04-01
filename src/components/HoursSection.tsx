import { Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const hours = [
  { day: "Pondelok – Streda", time: "14:00 – 21:45" },
  { day: "Štvrtok", time: "6:00 – 21:45" },
  { day: "Piatok – Nedeľa", time: "14:00 – 21:45" },
];

const HoursSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-lg text-center">
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
              className="flex items-center justify-between bg-card border border-border rounded-xl px-6 py-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-body font-medium">{h.day}</span>
              </div>
              <span className="font-body font-semibold text-primary">{h.time}</span>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HoursSection;
