import { Mountain, Rope, GraduationCap, Baby, Sun, Users, Cake, TreePine } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  { icon: Mountain, label: "Bouldering" },
  { icon: Rope, label: "Lezenie na lane" },
  { icon: GraduationCap, label: "Tréningy s inštruktorom" },
  { icon: Baby, label: "Detské krúžky" },
  { icon: Sun, label: "Letné tábory" },
  { icon: Users, label: "Teambuildingy" },
  { icon: Cake, label: "Narodeninové oslavy" },
  { icon: TreePine, label: "Kurzy lezenia na skalách" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Lezenie a služby</h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.label}>
            <div
              className="bg-card rounded-xl p-6 text-center hover:glow-orange transition-all duration-300 group border border-border hover:border-primary/40"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <s.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <p className="font-body font-medium text-foreground/90">{s.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
