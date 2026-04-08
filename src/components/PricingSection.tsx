import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const PricingSection = () => (
  <section id="pricing" className="section-padding bg-secondary/50 relative overflow-hidden">
    <div className="container mx-auto max-w-5xl relative z-10">
      <AnimatedSection className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Cenník</h2>
      </AnimatedSection>

      <div className="grid gap-8">
        <AnimatedSection direction="scale">
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-card rounded-2xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="overflow-x-auto">
              <table className="w-full font-body">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-muted-foreground font-medium text-sm sm:text-base">Vstup</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-muted-foreground font-medium text-sm sm:text-base">Študenti a deti</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-muted-foreground font-medium text-sm sm:text-base">Dospelí</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">Vstup do 17:00</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">4,50 €</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">6,50 €</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">Vstup celodenný</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">5,50 €</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">7,50 €</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">JAMES</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">5 €</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">6,50 €</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">HO Metropol</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">4,50 €</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">5,50 €</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">Vstup člen T2</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">4,50 €</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-foreground text-sm sm:text-base">5,50 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-t border-border bg-muted/5 px-4 py-4 sm:px-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="text-sm sm:text-base font-medium">Rodinný vstup 2+1</div>
                <div className="text-right font-semibold text-foreground text-sm sm:text-base">18 €</div>
                <div className="text-sm sm:text-base font-medium">Rodinný vstup 2+2</div>
                <div className="text-right font-semibold text-foreground text-sm sm:text-base">23 €</div>
              </div>
            </div>
            <div className="border-t border-border bg-primary/5 px-4 py-4 sm:px-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="text-sm sm:text-base font-medium">Dôchodca / ZŤP</div>
                <div className="text-right font-semibold text-foreground text-sm sm:text-base">4 €</div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedSection direction="scale">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="font-display text-2xl text-foreground mb-4">Permanentky</h3>
                <table className="w-full font-body text-sm sm:text-base">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="px-3 sm:px-6 py-3 text-left text-muted-foreground font-medium">Typ</th>
                      <th className="px-3 sm:px-6 py-3 text-right text-muted-foreground font-medium">Študenti a deti</th>
                      <th className="px-3 sm:px-6 py-3 text-right text-muted-foreground font-medium">Dospelí</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-3 sm:px-6 py-3 text-sm sm:text-base">Členské rok</td>
                      <td className="px-3 sm:px-6 py-3 text-right font-semibold text-foreground text-sm sm:text-base">15 €</td>
                      <td className="px-3 sm:px-6 py-3 text-right font-semibold text-foreground text-sm sm:text-base">15 €</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-3 sm:px-6 py-3 text-sm sm:text-base">15 vstupov</td>
                      <td className="px-3 sm:px-6 py-3 text-right font-semibold text-foreground text-sm sm:text-base">61 €</td>
                      <td className="px-3 sm:px-6 py-3 text-right font-semibold text-foreground text-sm sm:text-base">75 €</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-3 sm:px-6 py-3 text-sm sm:text-base">3 mesačná</td>
                      <td className="px-3 sm:px-6 py-3 text-right font-semibold text-foreground text-sm sm:text-base">145 €</td>
                      <td className="px-3 sm:px-6 py-3 text-right font-semibold text-foreground text-sm sm:text-base">175 €</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-3 sm:px-6 py-3 text-sm sm:text-base">6 mesačná</td>
                      <td className="px-3 sm:px-6 py-3 text-right font-semibold text-foreground text-sm sm:text-base">260 €</td>
                      <td className="px-3 sm:px-6 py-3 text-right font-semibold text-foreground text-sm sm:text-base">300 €</td>
                    </tr>
                    <tr>
                      <td className="px-3 sm:px-6 py-3 text-sm sm:text-base">12 mesačná</td>
                      <td className="px-3 sm:px-6 py-3 text-right font-semibold text-foreground text-sm sm:text-base">420 €</td>
                      <td className="px-3 sm:px-6 py-3 text-right font-semibold text-foreground text-sm sm:text-base">530 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection direction="scale">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="font-display text-2xl text-foreground mb-4">Požičovňa</h3>
                <table className="w-full font-body text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2">Lezecká obuv</td>
                      <td className="text-right font-semibold">2,50 €</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">Sedačka</td>
                      <td className="text-right font-semibold">1,50 €</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">Lano</td>
                      <td className="text-right font-semibold">3 €</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">Magnézium</td>
                      <td className="text-right font-semibold">1 €</td>
                    </tr>
                    <tr>
                      <td className="py-2">Inštruktor 1 hodina, istiť</td>
                      <td className="text-right font-semibold">20 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedSection direction="scale">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="font-display text-2xl text-foreground mb-4">Externé požičanie vybavenia 1 deň</h3>
                <table className="w-full font-body text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2">Lezecká obuv</td>
                      <td className="text-right font-semibold">4 €</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">Sedačka</td>
                      <td className="text-right font-semibold">3 €</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">Lano</td>
                      <td className="text-right font-semibold">6 €</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">Magnézium</td>
                      <td className="text-right font-semibold">2 €</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">Feratový set</td>
                      <td className="text-right font-semibold">4 €</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">Expresky 10 ks</td>
                      <td className="text-right font-semibold">4 €</td>
                    </tr>
                    <tr>
                      <td className="py-2">Prilba</td>
                      <td className="text-right font-semibold">2 €</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-4 text-sm text-muted-foreground">Zálohy: obuv 40 €, sedačka 30 €, lano 50 €, Feratový set 40 €, expresky 50 €, prilba 30 €</p>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection direction="scale">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="font-display text-2xl text-foreground mb-4">Darčekové poukážky</h3>
                <table className="w-full font-body text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3">Hodinové lezenie s inštruktorom pre 1 osobu + výbava</td>
                      <td className="text-right font-semibold">32€</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3">Hodinové lezenie s inštruktorom pre 2 osoby + výbava</td>
                      <td className="text-right font-semibold">42€</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3">Rodinné lezenie (2+1) + inštruktor + výbava</td>
                      <td className="text-right font-semibold">50€</td>
                    </tr>
                    <tr>
                      <td className="py-3">Rodinné lezenie (2+2) + inštruktor + výbava</td>
                      <td className="text-right font-semibold">58€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
