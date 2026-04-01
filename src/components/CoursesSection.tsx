import { BookOpen, Baby, Sun, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const courses = [
  { icon: BookOpen, title: "Lezecké kurzy", desc: "Pre úplných začiatočníkov aj mierne pokročilých. Naučíme vás základy techniky a bezpečnosti." },
  { icon: Baby, title: "Detské lezecké krúžky", desc: "Pravidelné krúžky pre deti od 5 rokov. Rozvoj motoriky, koordinácie a odvahy." },
  { icon: Sun, title: "Letné denné tábory", desc: "Celodenný program plný lezenia, hier a zábavy počas letných prázdnin." },
  { icon: Briefcase, title: "Firemné akcie a teambuilding", desc: "Originálny teambuilding, ktorý posilní tím a prinesie nezabudnuteľný zážitok." },
];

const CoursesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Kurzy a aktivity</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {courses.map((c) => (
          <AnimatedSection key={c.title}>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
              <c.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-2xl text-foreground mb-2">{c.title}</h3>
              <p className="font-body text-muted-foreground">{c.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
