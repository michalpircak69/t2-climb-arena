import { Dumbbell } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = ["Campus board", "TRX", "Slackline", "Hrazdy", "Tréningová zóna"];

const FacilitiesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-3xl text-center">
      <AnimatedSection>
        <h2 className="font-display text-4xl md:text-6xl text-gradient mb-12">Vybavenie</h2>
      </AnimatedSection>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item) => (
          <AnimatedSection key={item}>
            <div className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 hover:border-primary/50 transition-colors">
              <Dumbbell className="w-5 h-5 text-primary" />
              <span className="font-body font-medium">{item}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
