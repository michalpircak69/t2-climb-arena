import type { LucideIcon } from "lucide-react";
import { Mountain, Cable, GraduationCap, Baby, Sun, Users, Cake, TreePine } from "lucide-react";
import gallery1 from "@/assets/gallery-new-1.png";
import gallery2 from "@/assets/gallery-new-2.png";
import gallery3 from "@/assets/gallery-new-3.png";
import gallery4 from "@/assets/gallery-new-4.png";
import gallery5 from "@/assets/gallery-new-5.png";
import gallery6 from "@/assets/gallery-new-6.png";
import gallery7 from "@/assets/gallery-new-7.png";
import gallery8 from "@/assets/gallery-new-8.png";
import indoorBouldering1 from "@/assets/vnutrona 1.jpg";
import indoorBouldering2 from "@/assets/vnutorna 2.jpeg";
import indoorBouldering3 from "@/assets/vnutorna 3.jpeg";
import rockCourse1 from "@/assets/rock course 1.jpg";
import rockCourse2 from "@/assets/rock course 2.jpg";
import rockCourse3 from "@/assets/rock course 3.jpg";
import rockCourse4 from "@/assets/rock course 4.png";
import rockCourse5 from "@/assets/rock course 5.png";
import outdoorBouldering1 from "@/assets/vonkajsia 1.jpg";
import outdoorBouldering2 from "@/assets/vonkajsia 2.jpg";
import outdoorBouldering3 from "@/assets/vonkajsia 3.jpg";

export interface ServiceSection {
  title: string;
  details: string[];
  images: string[];
}

export interface ServiceInfo {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  color: string;
  description: string;
  details: string[];
  images: string[];
  instagramEmbedUrl?: string;
  flyer?: string;
  sections?: ServiceSection[];
}

export const services: ServiceInfo[] = [
  {
    id: "bouldering",
    label: "Bouldering",
    href: "/services/bouldering",
    icon: Mountain,
    color: "from-orange-400 to-orange-600",
    description:
      "Bouldering pre všetky úrovne v modernom boulderovom priestore. Ideálne pre tých, ktorí chcú zlepšiť silu, techniku a rýchly progres.",
    details: [],
    sections: [
      {
        title: "Vnútorná bouldrovka",
        details: [
          "Vo vnútri nájdete rôznorodé lezecké cesty a bloky s rôznymi obtiažnosťami.",
          "Bezpečné pády na mäkké matrace, vybavenie v cene a možnosť inštruktážnych tipov.",
          "Pre jednotlivcov aj skupiny je to skvelá voľba na tréning a zábavu.",
        ],
        images: [indoorBouldering1, indoorBouldering2, indoorBouldering3],
      },
      {
        title: "Vonkajšia bouldrovka",
        details: [
          "Vo vonkajšom priestore si môžete vyskúšať lezenie na prírodných profiloch a užiť si pohyb na čerstvom vzduchu.",
          "Trasy sú vhodné na doplnkový tréning techniky, sily a istoty pri lezení mimo indoor steny.",
          "Je to skvelá možnosť pre lezcov, ktorí chcú spojiť tréning so zážitkom v exteriéri.",
        ],
        images: [outdoorBouldering1, outdoorBouldering2, outdoorBouldering3],
      },
    ],
    images: [],
  },
  {
    id: "climbing-on-rope",
    label: "Lezenie na lane",
    href: "/services/climbing-on-rope",
    icon: Cable,
    color: "from-yellow-400 to-amber-500",
    description:
      "Lezenie na lane s kompletným zaistením a stabilným lanovým systémom pre začiatočníkov i pokročilých.",
    details: [
      "Naši inštruktori vám pomôžu s poistným uvedením a bezpečným istiacim systémom.",
      "Ponúkame kontrolované lezenie priamo na stene s rôznou výškou a obtiažnosťou.",
      "Perfektné na technický tréning a budovanie dôvery pri výškových prekonaniach.",
    ],
    images: [gallery4, gallery5],
  },
  {
    id: "instructor-training",
    label: "Tréningy s inštruktorom",
    href: "/services/instructor-training",
    icon: GraduationCap,
    color: "from-emerald-400 to-green-600",
    description:
      "Individuálny alebo skupinový tréning s profesionálnym lezeckým inštruktorom na mieru vašim cieľom.",
    details: [
      "Zameriavame sa na techniku, taktiku a rozvoj výkonu pri lezení.",
      "Program pripravíme podľa vašich preferencií a aktuálnej úrovne.",
      "Dostanete spätnú väzbu aj cvičenia, ktoré si budete môcť zopakovať samostatne.",
    ],
    images: [gallery6, gallery7],
  },
  {
    id: "kids-clubs",
    label: "Detské krúžky",
    href: "/services/kids-clubs",
    icon: Baby,
    color: "from-pink-400 to-rose-500",
    description:
      "Pravidelné krúžky pre deti s hravou formou, bezpečnosťou a rozvojom lezeckých zručností.",
    details: [
      "Krúžky sú vedené skúsenými lezeckými animátormi a zamerané na istotu detí.",
      "Deti sa naučia základy pohybu na stene, zostupov a bezpečného pádu.",
      "Skvelé pre pravidelný športový rozvoj a zábavu v kolektíve.",
    ],
    images: [gallery8, gallery1],
  },
  {
    id: "summer-camps",
    label: "Letné tábory",
    href: "/services/summer-camps",
    icon: Sun,
    color: "from-sky-400 to-blue-500",
    description:
      "Letné tábory s lezeckým programom, tímovými aktivitami a bezpečným prostredím pre deti i dospelých.",
    details: [
      "Denný program kombinuje horolezecké tréningy a zážitkové aktivity.",
      "Výbava a dohľad sú zabezpečené profesionálnym tímom.",
      "Tábor je vhodný pre deti, tínedžerov aj začínajúcich lezcov.",
    ],
    flyer: "/summer-camp-flyer.jpg",
    images: [gallery2, gallery3],
  },
  {
    id: "teambuilding",
    label: "Teambuildingy",
    href: "/services/teambuilding",
    icon: Users,
    color: "from-violet-400 to-purple-600",
    description:
      "Firemné teambuildingy na mieru so športovými výzvami a spoločnou lezeckou aktivitou.",
    details: [
      "Program podporuje tímovú spoluprácu, dôveru a zábavu v bezpečnom prostredí.",
      "Cieľom je vytvoriť príjemný zážitok pre kolektív s individuálnym prístupom.",
      "Po tréningu je možné pridať občerstvenie alebo oddychovú zónu.",
    ],
    images: [gallery4, gallery5],
  },
  {
    id: "birthday-parties",
    label: "Narodeninové oslavy",
    href: "/services/birthday-parties",
    icon: Cake,
    color: "from-red-400 to-rose-600",
    description:
      "Narodeninové oslavy s lezeckým programom, animáciou a pohodlným zázemím pre hostí.",
    details: [
      "Oslava zahŕňa výbavu, dohľad inštruktora a zábavné aktivity pre deti.",
      "Vytvoríme program podľa veku a počtu účastníkov.",
      "Skvelá voľba pre aktívne a nezabudnuteľné narodeniny.",
    ],
    images: [gallery6, gallery7],
  },
  {
    id: "rock-courses",
    label: "Kurzy na skalách",
    href: "/services/rock-courses",
    icon: TreePine,
    color: "from-teal-400 to-emerald-600",
    description:
      "Kurzy vonku na skalách pre začiatočníkov aj pokročilých s profesionálnou podporou.",
    details: [
      "Získate základy istenia, lezenia a správania sa v skalnom teréne.",
      "Kurz je vedený skúsenými inštruktormi s dôrazom na bezpečnosť.",
      "Vhodné pre menšie skupiny aj individuálne výcviky.",
    ],
    instagramEmbedUrl: "https://www.instagram.com/p/DVlHJ0pDUBH/embed",
    images: [rockCourse1, rockCourse2, rockCourse3, rockCourse4, rockCourse5],
  },
];

export const serviceLinks = services.map(({ label, href }) => ({ label, href }));

export const getServiceById = (id: string) => services.find((service) => service.id === id);
