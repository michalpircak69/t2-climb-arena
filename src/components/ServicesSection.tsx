import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Lezenie a služby</h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-stretch">
        {services.map((s, i) => (
          <AnimatedSection
            key={s.label}
            delay={i * 0.08}
            direction="scale"
            className={s.id === "school-trips" ? "h-full md:col-start-2 md:col-span-2 md:row-start-3" : "h-full"}
          >
            <Link
              to={s.href}
              className={s.id === "school-trips" ? "block h-full md:mx-auto md:w-full md:max-w-[calc(50%-0.625rem)]" : "block h-full"}
            >
              <motion.div
                whileHover={{ scale: 1.06, y: -6 }}
                whileTap={{ scale: 0.97 }}
                className="bg-card rounded-2xl p-6 text-center group border border-border hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-body font-medium text-foreground/90">{s.label}</p>
              </motion.div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
