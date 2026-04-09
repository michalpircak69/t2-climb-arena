import { ExternalLink, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const featuredReviews = [
  {
    author: "Martin Antoš",
    rating: "4/5",
    text:
      "Bol som tu s deťmi počas soboty a skúsili sme najmä boulder, kde sa deti zabavili. Páčilo sa nám, že je tu množstvo trás od začiatočníkov až po náročnejšie možnosti.",
    sourceLabel: "Google recenzie",
    sourceHref: "https://slovenskobcan.com/telocvicna/kosicky/lezecke-centrum-t2-boulder-arena/",
  },
  {
    author: "Martin Musl",
    rating: "5/5",
    text:
      "Kto si chce v Košiciach dobre zaliezť na umelej stene, nech určite navštívi T2. Desaťky bouldrov a desiatky lezeckých ciest od UIAA 4 až po 9 robia z návštevy veľmi dobrý zážitok.",
    sourceLabel: "Google recenzie",
    sourceHref: "https://slovenskobcan.com/telocvicna/kosicky/lezecke-centrum-t2-boulder-arena/",
  },
  {
    author: "Adam Mašič",
    rating: "5/5",
    text:
      "Doslova najlepšia bouldrovka na východe Slovenska. Jednoznačne ju odporúčam všetkým, ktorí majú radi pohyb, lezenie a hľadajú kvalitné miesto na pravidelné tréningy aj zábavu.",
    sourceLabel: "Google recenzie",
    sourceHref: "https://slovenskobcan.com/telocvicna/kosicky/lezecke-centrum-t2-boulder-arena/",
  },
  {
    author: "Zuzana Macinská",
    rating: "5/5",
    text:
      "Veľký priestor, milý personál aj inštruktori. Deti sa tam plne vybláznia. Trocha schované, chýbala mi možnosť parkovania pri lezeckom centre a večer je to slabo osvetlené, treba dávať pozor pod nohy. Ale samotné centrum super.",
    sourceLabel: "Google recenzie",
    sourceHref: "https://slovenskobcan.com/telocvicna/kosicky/lezecke-centrum-t2-boulder-arena/",
  },
  {
    author: "Filip Szatkowski",
    rating: "5/5",
    text:
      "Bouldering routes feel very old school which might not be for everybody, but the vibe was cool and people there were really nice. Shoutout to the girl who chatted with us about Kosice and Slovak food for half an hour and then gave us a lift.",
    sourceLabel: "Google recenzie",
    sourceHref: "https://slovenskobcan.com/telocvicna/kosicky/lezecke-centrum-t2-boulder-arena/",
  },
  {
    author: "Michala Macáková",
    rating: "5/5",
    text:
      "Výborní ľudia, super krúžky pre deti, dostatok miesta na parkovanie vonku, my sme veľmi spokojní.",
    sourceLabel: "Google recenzie",
    sourceHref: "https://slovenskobcan.com/telocvicna/kosicky/lezecke-centrum-t2-boulder-arena/",
  },
];

const ratingBadges = [
  {
    value: "4,6/5",
    label: "166 hodnotení",
    note: "Zlavomat",
    href: "https://www.zlavomat.sk/podnik/7585-t2-boulder-arena",
  },
  {
    value: "9,4/10",
    label: "Vynikajúce hodnotenie",
    note: "ZľavaDňa",
    href: "https://www.zlavadna.sk/partner/t2-boulder-arena-kosice/hodnotenia",
  },
  {
    value: "148+",
    label: "verejných recenzií",
    note: "recenzie a komentáre",
    href: "https://slovenskobcan.com/telocvicna/kosicky/lezecke-centrum-t2-boulder-arena/",
  },
];

const ReviewsSection = () => (
  <section className="section-padding relative overflow-hidden bg-secondary/40">
    <div className="container mx-auto">
      <AnimatedSection className="mb-12 text-center">
        <h2 className="font-display text-4xl md:text-6xl text-gradient">Recenzie návštevníkov</h2>
      </AnimatedSection>

      <div className="mb-10 grid gap-4 md:grid-cols-3">
        {ratingBadges.map((badge, index) => (
          <AnimatedSection key={badge.href} delay={index * 0.08} direction="scale">
            <motion.a
              whileHover={{ y: -4, scale: 1.01 }}
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="mb-3 flex items-center justify-center gap-1 text-primary">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div className="font-display text-4xl text-foreground">{badge.value}</div>
              <p className="mt-2 font-body text-base font-medium text-foreground/90">{badge.label}</p>
              <p className="mt-1 font-body text-sm text-muted-foreground">{badge.note}</p>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {featuredReviews.map((review, index) => (
          <AnimatedSection key={`${review.author}-${index}`} delay={index * 0.06} direction="up">
            <motion.div
              whileHover={{ y: -5 }}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="font-body text-lg font-semibold text-foreground">{review.author}</p>
                  <p className="font-body text-sm text-muted-foreground">{review.sourceLabel}</p>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {review.rating}
                </div>
              </div>

              <div className="mb-4 flex items-center gap-3 text-primary">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Quote className="h-5 w-5" />
                </div>
                <div className="flex gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </div>

              <p className="flex-1 font-body leading-7 text-muted-foreground">"{review.text}"</p>

              <a
                href={review.sourceHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:underline"
              >
                Zobraziť zdroj
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
