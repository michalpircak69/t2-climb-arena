import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-4xl text-center">
      <AnimatedSection>
        <h2 className="font-display text-4xl md:text-6xl text-gradient mb-8">O nás</h2>
        <p className="text-lg md:text-xl text-foreground/80 font-body leading-relaxed">
          T2 Boulder Arena je moderné lezecké centrum v Košiciach. Ponúka bouldering aj lezenie na lane
          v bezpečnom indoor prostredí. Stena dosahuje výšku až 15 metrov a ponúka viac ako 100 lezeckých
          trás rôznych obtiažností. Centrum je vhodné pre začiatočníkov, pokročilých lezcov, deti aj skupiny.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
