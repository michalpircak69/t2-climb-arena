import { Dumbbell } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const items = ["Campus board", "TRX", "Slackline", "Hrazdy", "Tréningová zóna"];

const FacilitiesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-3xl text-center">
      <AnimatedSection>
        <h2 className="font-display text-4xl md:text-6xl text-gradient mb-12">Vybavenie</h2>
      </AnimatedSection>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, i) => (
          <AnimatedSection key={item} delay={i * 0.1} direction="scale">
            <motion.div
              whileHover={{ scale: 1.08, y: -3 }}
              className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 shadow-sm hover:shadow-md hover:border-primary/40 transition-all cursor-default"
            >
              <Dumbbell className="w-5 h-5 text-primary" />
              <span className="font-body font-medium">{item}</span>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
