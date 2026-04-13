import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DecorativeShapes from "@/components/DecorativeShapes";
import { Button } from "@/components/ui/button";

const supportPoints = [
  {
    title: "Viac farieb a nových tvarov",
    description:
      "Väčšina prostriedkov smeruje priamo do nákupu moderných chytov a štruktúr svetových značiek.",
  },
  {
    title: "Kvalitnejší tréning",
    description:
      "Investujeme do rozširovania tréningových zón a údržby dopadových matracov pre vašu maximálnu bezpečnosť.",
  },
  {
    title: "Podpora lezeckého dorastu",
    description:
      "Pomáhate nám držať latku vysoko pri vedení detských kurzov a zabezpečení špičkového materiálu pre malých lezcov.",
  },
  {
    title: "Zlepšovanie zázemia",
    description:
      "Či už ide o lepšie vetranie, osvetlenie alebo nové prvky v hale, každý cent investujeme späť do priestoru T2.",
  },
];

const DonatePage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="section-padding relative overflow-hidden bg-secondary/40">
      <DecorativeShapes />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.1),transparent_28%)]" />

      <div className="container relative mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-border/60 bg-card/95 px-6 py-10 shadow-xl md:px-10 md:py-14">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
              Premeň dane na nové chyty – daruj
              <br />
              2 % pre T2
            </h1>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-6 text-base leading-8 text-foreground/90 md:text-lg">
            <p>Ahoj lezecká partia,</p>

            <p>
              mnohí z vás vnímajú T2 ako svoj druhý domov. Je to miesto, kde posúvame hranice,
              prekonávame strach z pádov a stretávame priateľov. Aby sme však mohli halu neustále
              posúvať vpred, potrebujeme vašu pomoc – a to spôsobom, ktorý vás nebude stáť vôbec nič.
            </p>

            <p>
              Stačí, ak sa rozhodnete darovať 2 % zo svojich daní (v prípade dobrovoľníkov až 3 %)
              nášmu občianskemu združeniu, ktoré prevádzkuje T2 Boulder arénu.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="mb-8 flex justify-center">
              <div className="max-w-3xl text-center">
                <Button
                  asChild
                  size="lg"
                  className="min-h-14 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/25 md:min-h-16 md:px-10 md:text-lg"
                >
                  <a href="/predvyplnene-vyhlasenie-t2.pdf" target="_blank" rel="noreferrer">
                    Predvyplnené vyhlásenie
                  </a>
                </Button>
                <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                  Vyplnené vyhlásenie treba odoslať HO Metropolu Košice a kópiu vyhlásenia odoslať na
                  t2boulder@centrum.sk alebo osobne odovzdať na T2 Boulder aréne.
                </p>
              </div>
            </div>
            <h2 className="text-center font-display text-3xl text-foreground md:text-4xl">
              Čo získate späť v každom chyte?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-muted-foreground md:text-lg">
              Vaša podpora sa v priebehu roka 2026 premení na reálne vylepšenia, ktoré pocítite na
              vlastnej koži:
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {supportPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-[1.75rem] border border-border/60 bg-background/85 p-6 shadow-sm"
                >
                  <h3 className="font-display text-2xl text-foreground">{point.title}</h3>
                  <p className="mt-3 text-base leading-8 text-foreground/85">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default DonatePage;
