import { CalendarDays } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const EventsSection = () => (
  <section id="events" className="section-padding bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection className="mb-14 text-center">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Udalosti</h2>
      </AnimatedSection>

      <AnimatedSection direction="up">
        <div className="rounded-[2rem] border border-border/60 bg-card/95 p-8 shadow-lg md:p-12">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 text-center text-primary">
            <CalendarDays className="h-6 w-6 shrink-0" />
            <p className="text-base font-semibold uppercase tracking-[0.22em] md:text-lg">
              18.4.2026
            </p>
          </div>

          <h3 className="mx-auto mt-6 max-w-4xl text-center font-display text-3xl leading-tight text-foreground md:text-5xl">
            Slovenský pohár dospelých a mládeže v Boulderingu kategórie B
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-foreground/90 md:text-lg">
            Pozývame všetkých nadšencov súťažného lezenia na ďalšie kolo Slovenského pohára. Preteky sa
            uskutočnia v sobotu 18. 04. 2026 v priestoroch T2 Boulder arény v Košiciach. Súťažiť sa bude
            v mládežníckych aj dospelých kategóriách. Kompletné organizačné pokyny sú k dispozícii v
            priloženom dokumente. Vidíme sa na stene!
          </p>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-3 text-center text-base leading-7 md:text-lg">
            <p className="text-foreground">
              <span className="font-semibold">Registračný formulár:</span>{" "}
              <a
                href="https://james.sk/articles.asp?portal_id=1&pageid=1&id_dependency=15591&akcia=1"
                target="_blank"
                rel="noreferrer"
                className="break-all text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary/80"
              >
                https://james.sk/articles.asp?portal_id=1&pageid=1&id_dependency=15591&akcia=1
              </a>
            </p>
            <p className="text-foreground">
              <span className="font-semibold">Podrobné info nájdete na:</span>{" "}
              <a
                href="https://shsjames.org/spdam-v-boulderingu-kategorie-b-t2-boulder-arena-kosice/"
                target="_blank"
                rel="noreferrer"
                className="break-all text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary/80"
              >
                https://shsjames.org/spdam-v-boulderingu-kategorie-b-t2-boulder-arena-kosice/
              </a>
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <img
              src="/events-sp-bouldering-2026.jpg"
              alt="Plagát Slovenský pohár dospelých a mládeže v Boulderingu kategórie B"
              className="w-full max-w-3xl rounded-[2rem] border border-border/60 object-contain shadow-xl"
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default EventsSection;
