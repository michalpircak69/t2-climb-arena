import { Mountain, Cable, GraduationCap, Baby, Sun, Users, Cake, TreePine } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const services = [
  { icon: Mountain, label: "Bouldering", color: "from-orange-400 to-orange-600" },
  { icon: Cable, label: "Lezenie na lane", color: "from-yellow-400 to-amber-500" },
  { icon: GraduationCap, label: "Tréningy s inštruktorom", color: "from-emerald-400 to-green-600" },
  { icon: Baby, label: "Detské krúžky", color: "from-pink-400 to-rose-500" },
  { icon: Sun, label: "Letné tábory", color: "from-sky-400 to-blue-500" },
  { icon: Users, label: "Teambuildingy", color: "from-violet-400 to-purple-600" },
  { icon: Cake, label: "Narodeninové oslavy", color: "from-red-400 to-rose-600" },
  { icon: TreePine, label: "Kurzy na skalách", color: "from-teal-400 to-emerald-600" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Lezenie a služby</h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.08} direction="scale">
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
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
