import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";
import lezecImg from "@/assets/lezec_3.png";

const faqs = [
  { q: "Potrebujem vlastné vybavenie?", a: "Nie, lezečky a magnézium si môžete požičať priamo u nás. Stačí prísť v pohodlnom oblečení." },
  { q: "Je lezenie vhodné pre začiatočníkov?", a: "Áno! Máme trasy pre všetky úrovne a naši inštruktori vám radi pomôžu s prvými krokmi na stene." },
  { q: "Môžem prísť s deťmi?", a: "Samozrejme. Máme špeciálne detské trasy a krúžky. Deti od 5 rokov sú vítané." },
  { q: "Potrebujem sa vopred objednať?", a: "Na bežné lezenie nie, stačí prísť počas otváracích hodín. Na kurzy a akcie odporúčame rezerváciu vopred." },
  { q: "Ponúkate skupinové zľavy?", a: "Áno, pre skupiny nad 10 osôb ponúkame špeciálne ceny. Kontaktujte nás pre viac informácií." },
];

const FAQSection = () => (
  <section className="section-padding bg-secondary/50 relative overflow-hidden">
    <img
      src={lezecImg}
      alt=""
      className="absolute right-0 top-0 h-[180px] md:h-[240px] w-auto object-contain object-right-top pointer-events-none select-none hidden md:block"
      aria-hidden="true"
    />
    <div className="container mx-auto max-w-2xl relative z-10">
      <AnimatedSection className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Často kladené otázky</h2>
      </AnimatedSection>

      <AnimatedSection>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="font-body font-medium text-left hover:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
