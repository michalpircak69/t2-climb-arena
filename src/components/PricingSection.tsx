import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import lezecImg from "@/assets/lezec_5.png";

const PricingSection = () => (
  <section id="pricing" className="section-padding bg-secondary/50 relative overflow-hidden">
    <img
      src={lezecImg}
      alt="Silueta lezcov"
      className="absolute right-0 top-0 h-full w-auto object-contain object-right pointer-events-none select-none hidden md:block"
      aria-hidden="true"
    />
    <div className="container mx-auto max-w-2xl relative z-10">
      <AnimatedSection className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Cenník</h2>
      </AnimatedSection>

      <AnimatedSection direction="scale">
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-card rounded-2xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-shadow"
        >
          <table className="w-full font-body">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-muted-foreground font-medium text-sm sm:text-base">Vstup</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-muted-foreground font-medium text-sm sm:text-base">Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">Dospelý</td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">7,50 €</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">Študent ISIC, James, HO Metropol</td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">5,50 €</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">Deti / mládež</td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">4 €</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">
                  <span className="text-primary font-semibold">⚡ Zľava</span> – Dospelý (do 17:00)
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-bold text-primary text-base sm:text-lg">3,50 €</td>
              </tr>
              <tr className="bg-primary/5">
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">
                  <span className="text-primary font-semibold">⚡ Zľava</span> – Deti (do 17:00)
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-bold text-primary text-base sm:text-lg">3 €</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        <p className="text-center text-muted-foreground text-sm mt-4 font-body">
          Ceny sú orientačné, aktuálny cenník na mieste.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default PricingSection;
