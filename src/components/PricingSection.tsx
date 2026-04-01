import AnimatedSection from "./AnimatedSection";

const PricingSection = () => (
  <section id="pricing" className="section-padding bg-secondary/50">
    <div className="container mx-auto max-w-2xl">
      <AnimatedSection className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Cenník</h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <table className="w-full font-body">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-muted-foreground font-medium">Vstup</th>
                <th className="px-6 py-4 text-right text-muted-foreground font-medium">Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-6 py-4">Dospelý</td>
                <td className="px-6 py-4 text-right font-semibold text-foreground">5 €</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-4">Deti / mládež</td>
                <td className="px-6 py-4 text-right font-semibold text-foreground">4 €</td>
              </tr>
              <tr className="border-b border-border bg-primary/10">
                <td className="px-6 py-4">
                  <span className="text-primary font-semibold">⚡ Zľava</span> – Dospelý (do 17:00)
                </td>
                <td className="px-6 py-4 text-right font-bold text-primary text-lg">3,50 €</td>
              </tr>
              <tr className="bg-primary/10">
                <td className="px-6 py-4">
                  <span className="text-primary font-semibold">⚡ Zľava</span> – Deti (do 17:00)
                </td>
                <td className="px-6 py-4 text-right font-bold text-primary text-lg">3 €</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center text-muted-foreground text-sm mt-4 font-body">
          Ceny sú orientačné, aktuálny cenník na mieste.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default PricingSection;
