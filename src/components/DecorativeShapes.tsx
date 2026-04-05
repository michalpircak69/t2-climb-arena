import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DecorativeShapes = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden>

      {/* Full-width mountain range 1 - between hero and about */}
      <motion.div style={{ y: y1 }} className="absolute top-[12%] left-0 w-full">
        <svg width="100%" height="300" viewBox="0 0 1400 300" preserveAspectRatio="none" fill="none">
          <path d="M0,300 L70,140 L160,220 L280,60 L380,180 L500,40 L620,160 L740,80 L860,190 L980,50 L1100,170 L1200,90 L1300,200 L1400,300 Z" fill="hsl(210 50% 22% / 0.07)" />
          <path d="M0,300 L120,200 L260,260 L400,150 L540,230 L680,130 L820,220 L960,160 L1100,240 L1250,180 L1400,300 Z" fill="hsl(185 40% 42% / 0.06)" />
          <path d="M0,300 L200,260 L450,280 L700,240 L950,270 L1200,250 L1400,300 Z" fill="hsl(175 35% 55% / 0.05)" />
          {/* Snow caps */}
          <path d="M280,60 L260,95 L270,85 L280,100 L290,83 L300,95 Z" fill="hsl(0 0% 95% / 0.06)" />
          <path d="M500,40 L480,75 L490,65 L500,80 L510,63 L520,75 Z" fill="hsl(0 0% 95% / 0.06)" />
          <path d="M980,50 L960,85 L970,75 L980,90 L990,73 L1000,85 Z" fill="hsl(0 0% 95% / 0.06)" />
        </svg>
      </motion.div>

      {/* Full-width mountain range 2 - between sections ~30% */}
      <motion.div style={{ y: y2 }} className="absolute top-[28%] left-0 w-full">
        <svg width="100%" height="280" viewBox="0 0 1400 280" preserveAspectRatio="none" fill="none">
          <path d="M0,280 L100,120 L220,200 L350,70 L480,180 L600,50 L720,150 L850,80 L970,190 L1100,60 L1220,170 L1350,100 L1400,280 Z" fill="hsl(205 48% 25% / 0.06)" />
          <path d="M0,280 L150,190 L320,240 L500,140 L680,210 L860,130 L1040,220 L1200,160 L1400,280 Z" fill="hsl(180 38% 45% / 0.05)" />
          <path d="M0,280 L250,240 L550,260 L850,230 L1150,250 L1400,280 Z" fill="hsl(170 32% 58% / 0.05)" />
          <circle cx="1250" cy="60" r="35" fill="hsl(45 90% 65% / 0.07)" />
        </svg>
      </motion.div>

      {/* Full-width mountain range 3 - mid page ~45% */}
      <motion.div style={{ y: y3 }} className="absolute top-[44%] left-0 w-full">
        <svg width="100%" height="320" viewBox="0 0 1400 320" preserveAspectRatio="none" fill="none">
          <path d="M0,320 L80,160 L200,250 L320,90 L440,200 L560,60 L680,180 L800,100 L920,210 L1040,70 L1160,190 L1280,110 L1400,320 Z" fill="hsl(210 45% 20% / 0.07)" />
          <path d="M0,320 L130,230 L290,280 L450,170 L610,250 L770,150 L930,240 L1090,180 L1250,260 L1400,320 Z" fill="hsl(190 42% 40% / 0.06)" />
          <path d="M0,320 L300,280 L600,300 L900,260 L1200,290 L1400,320 Z" fill="hsl(175 35% 52% / 0.05)" />
          <path d="M560,60 L540,95 L550,85 L560,100 L570,83 L580,95 Z" fill="hsl(0 0% 95% / 0.05)" />
          <path d="M1040,70 L1020,105 L1030,95 L1040,110 L1050,93 L1060,105 Z" fill="hsl(0 0% 95% / 0.05)" />
        </svg>
      </motion.div>

      {/* Full-width mountain range 4 - ~60% */}
      <motion.div style={{ y: y1 }} className="absolute top-[58%] left-0 w-full">
        <svg width="100%" height="260" viewBox="0 0 1400 260" preserveAspectRatio="none" fill="none">
          <path d="M0,260 L90,130 L210,200 L340,80 L460,170 L590,50 L710,160 L840,90 L960,180 L1090,60 L1210,160 L1340,100 L1400,260 Z" fill="hsl(205 50% 24% / 0.06)" />
          <path d="M0,260 L160,180 L350,220 L540,130 L730,200 L920,140 L1110,210 L1300,170 L1400,260 Z" fill="hsl(185 40% 44% / 0.05)" />
          <path d="M0,260 L280,230 L600,245 L920,215 L1250,240 L1400,260 Z" fill="hsl(170 30% 56% / 0.05)" />
        </svg>
      </motion.div>

      {/* Full-width mountain range 5 - ~75% */}
      <motion.div style={{ y: y2 }} className="absolute top-[74%] left-0 w-full">
        <svg width="100%" height="300" viewBox="0 0 1400 300" preserveAspectRatio="none" fill="none">
          <path d="M0,300 L60,150 L180,230 L300,80 L420,190 L540,50 L660,170 L780,90 L900,200 L1020,60 L1140,180 L1260,100 L1400,300 Z" fill="hsl(210 48% 22% / 0.07)" />
          <path d="M0,300 L140,210 L300,260 L470,150 L640,230 L810,140 L980,230 L1150,170 L1320,250 L1400,300 Z" fill="hsl(185 38% 42% / 0.06)" />
          <path d="M0,300 L250,270 L550,285 L850,250 L1150,275 L1400,300 Z" fill="hsl(175 35% 55% / 0.05)" />
          <circle cx="150" cy="80" r="30" fill="hsl(45 90% 65% / 0.06)" />
          <path d="M540,50 L520,85 L530,75 L540,90 L550,73 L560,85 Z" fill="hsl(0 0% 95% / 0.05)" />
        </svg>
      </motion.div>

      {/* Full-width mountain range 6 - bottom ~88% */}
      <motion.div style={{ y: y3 }} className="absolute top-[88%] left-0 w-full">
        <svg width="100%" height="280" viewBox="0 0 1400 280" preserveAspectRatio="none" fill="none">
          <path d="M0,280 L100,130 L230,210 L360,70 L490,180 L620,40 L750,160 L880,80 L1010,200 L1140,50 L1270,170 L1400,280 Z" fill="hsl(205 45% 20% / 0.06)" />
          <path d="M0,280 L170,200 L360,250 L550,140 L740,220 L930,150 L1120,230 L1300,180 L1400,280 Z" fill="hsl(190 40% 40% / 0.05)" />
          <path d="M0,280 L300,250 L650,265 L1000,240 L1350,260 L1400,280 Z" fill="hsl(170 32% 55% / 0.05)" />
        </svg>
      </motion.div>

    </div>
  );
};

export default DecorativeShapes;
