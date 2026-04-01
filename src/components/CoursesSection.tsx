import { BookOpen, Baby, Sun, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const courses = [
  { icon: BookOpen, title: "Lezecké kurzy", desc: "Pre úplných začiatočníkov aj mierne pokročilých. Naučíme vás základy techniky a bezpečnosti.", color: "from-orange-400 to-amber-500" },
  { icon: Baby, title: "Detské lezecké krúžky", desc: "Pravidelné krúžky pre deti od 5 rokov. Rozvoj motoriky, koordinácie a odvahy.", color: "from-pink-400 to-rose-500" },
  { icon: Sun, title: "Letné denné tábory", desc: "Celodenný program plný lezenia, hier a zábavy počas letných prázdnin.", color: "from-sky-400 to-blue-500" },
  { icon: Briefcase, title: "Firemné akcie a teambuilding", desc: "Originálny teambuilding, ktorý posilní tím a prinesie nezabudnuteľný zážitok.", color: "from-emerald-400 to-green-600" },
];

const CoursesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Kurzy a aktivity</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {courses.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4 shadow-md`}>
                <c.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{c.title}</h3>
              <p className="font-body text-muted-foreground">{c.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
