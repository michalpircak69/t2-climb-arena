import { Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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
          {hours.map((h) => (
            <div
              key={h.day}
              className="flex items-center justify-between bg-card border border-border rounded-xl px-6 py-4"
            >
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-body font-medium">{h.day}</span>
              </div>
              <span className="font-body font-semibold text-primary">{h.time}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HoursSection;
