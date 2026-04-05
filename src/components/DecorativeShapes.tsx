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
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>

      {/* ===== MOUNTAIN LANDSCAPE SHAPES ===== */}

      {/* Mountain cluster - top left */}
      <motion.div style={{ y: y1 }} className="absolute top-[3%] -left-10">
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none">
          {/* Back mountain - darkest navy */}
          <path d="M0,400 L80,180 L160,280 L240,100 L320,250 L400,150 L500,300 L600,400 Z" fill="hsl(200 45% 25% / 0.08)" />
          {/* Mid mountain - medium blue */}
          <path d="M0,400 L50,250 L130,320 L200,200 L280,300 L350,220 L450,350 L600,400 Z" fill="hsl(180 40% 45% / 0.07)" />
          {/* Front hills - light teal */}
          <path d="M0,400 L100,320 L200,360 L300,300 L400,350 L500,310 L600,400 Z" fill="hsl(175 35% 60% / 0.06)" />
          {/* Sun circle */}
          <circle cx="480" cy="120" r="40" fill="hsl(45 90% 65% / 0.08)" />
        </svg>
      </motion.div>

      {/* Mountain range - right side upper */}
      <motion.div style={{ y: y2 }} className="absolute top-[15%] -right-10">
        <svg width="550" height="380" viewBox="0 0 550 380" fill="none">
          <path d="M0,380 L100,200 L180,280 L260,120 L340,230 L420,80 L500,250 L550,380 Z" fill="hsl(210 50% 22% / 0.07)" />
          <path d="M0,380 L80,280 L170,320 L250,200 L330,280 L430,180 L550,380 Z" fill="hsl(185 40% 40% / 0.06)" />
          <path d="M0,380 L120,310 L250,340 L380,290 L500,340 L550,380 Z" fill="hsl(170 35% 55% / 0.06)" />
          {/* Snow caps */}
          <path d="M260,120 L240,160 L250,150 L260,165 L270,148 L280,160 Z" fill="hsl(0 0% 95% / 0.06)" />
          <path d="M420,80 L400,120 L410,110 L420,125 L430,108 L440,120 Z" fill="hsl(0 0% 95% / 0.06)" />
        </svg>
      </motion.div>

      {/* Wide mountain band - left mid */}
      <motion.div style={{ y: y3 }} className="absolute top-[30%] -left-20">
        <svg width="700" height="350" viewBox="0 0 700 350" fill="none">
          <path d="M0,350 L60,180 L140,260 L220,130 L300,220 L380,90 L460,200 L540,140 L620,250 L700,350 Z" fill="hsl(205 45% 28% / 0.06)" />
          <path d="M0,350 L90,260 L180,300 L270,200 L360,270 L450,180 L550,280 L650,230 L700,350 Z" fill="hsl(180 38% 48% / 0.05)" />
          <path d="M0,350 L150,300 L300,320 L450,280 L600,310 L700,350 Z" fill="hsl(170 30% 58% / 0.05)" />
        </svg>
      </motion.div>

      {/* Mountains - right mid */}
      <motion.div style={{ y: y1 }} className="absolute top-[45%] -right-16">
        <svg width="500" height="380" viewBox="0 0 500 380" fill="none">
          <path d="M0,380 L70,200 L150,290 L230,100 L310,240 L390,150 L470,280 L500,380 Z" fill="hsl(215 48% 20% / 0.07)" />
          <path d="M0,380 L100,280 L200,330 L300,210 L400,300 L500,380 Z" fill="hsl(190 42% 42% / 0.06)" />
          <path d="M0,380 L80,330 L200,350 L320,310 L440,340 L500,380 Z" fill="hsl(175 35% 55% / 0.06)" />
          <path d="M230,100 L210,140 L220,130 L230,145 L240,128 L250,140 Z" fill="hsl(0 0% 95% / 0.05)" />
        </svg>
      </motion.div>

      {/* Rolling hills - bottom left */}
      <motion.div style={{ y: y2 }} className="absolute top-[58%] -left-16">
        <svg width="600" height="320" viewBox="0 0 600 320" fill="none">
          <path d="M0,320 L50,160 L130,240 L210,120 L290,200 L370,80 L450,190 L530,130 L600,320 Z" fill="hsl(210 45% 24% / 0.06)" />
          <path d="M0,320 L80,230 L170,280 L260,180 L350,250 L440,170 L540,260 L600,320 Z" fill="hsl(185 40% 44% / 0.05)" />
          <path d="M0,320 L130,280 L280,300 L420,260 L560,290 L600,320 Z" fill="hsl(170 32% 58% / 0.05)" />
        </svg>
      </motion.div>

      {/* Large mountain cluster - right lower */}
      <motion.div style={{ y: y3 }} className="absolute top-[70%] -right-20">
        <svg width="550" height="360" viewBox="0 0 550 360" fill="none">
          <path d="M0,360 L80,180 L160,270 L250,90 L340,220 L430,130 L520,280 L550,360 Z" fill="hsl(205 50% 22% / 0.07)" />
          <path d="M0,360 L100,260 L210,310 L320,190 L420,280 L550,360 Z" fill="hsl(185 38% 42% / 0.06)" />
          <path d="M0,360 L140,310 L300,330 L450,290 L550,360 Z" fill="hsl(175 30% 56% / 0.06)" />
          <circle cx="120" cy="100" r="35" fill="hsl(45 90% 65% / 0.07)" />
        </svg>
      </motion.div>

      {/* Bottom spanning mountains */}
      <motion.div style={{ y: y1 }} className="absolute top-[84%] -left-10">
        <svg width="800" height="300" viewBox="0 0 800 300" fill="none">
          <path d="M0,300 L60,150 L150,220 L240,80 L330,180 L420,50 L510,160 L600,100 L700,220 L800,300 Z" fill="hsl(210 48% 20% / 0.06)" />
          <path d="M0,300 L100,220 L220,260 L340,160 L460,230 L580,150 L700,250 L800,300 Z" fill="hsl(190 40% 40% / 0.05)" />
          <path d="M0,300 L180,260 L380,280 L580,240 L750,270 L800,300 Z" fill="hsl(175 35% 55% / 0.05)" />
        </svg>
      </motion.div>

      {/* Small accent peaks scattered */}
      <motion.div style={{ y: y2 }} className="absolute top-[22%] left-[55%]">
        <svg width="160" height="120" viewBox="0 0 160 120" fill="none">
          <path d="M0,120 L80,10 L160,120 Z" fill="hsl(205 45% 30% / 0.07)" />
          <path d="M20,120 L80,40 L140,120 Z" fill="hsl(180 35% 50% / 0.06)" />
          <path d="M80,10 L70,35 L75,28 L80,38 L85,26 L90,35 Z" fill="hsl(0 0% 95% / 0.05)" />
        </svg>
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute top-[50%] left-[30%]">
        <svg width="130" height="100" viewBox="0 0 130 100" fill="none">
          <path d="M0,100 L65,5 L130,100 Z" fill="hsl(210 50% 25% / 0.06)" />
          <path d="M15,100 L65,30 L115,100 Z" fill="hsl(185 40% 45% / 0.05)" />
        </svg>
      </motion.div>

      <motion.div style={{ y: y1 }} className="absolute top-[76%] left-[50%]">
        <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
          <path d="M0,110 L75,8 L150,110 Z" fill="hsl(200 45% 28% / 0.06)" />
          <path d="M20,110 L75,35 L130,110 Z" fill="hsl(175 35% 52% / 0.06)" />
        </svg>
      </motion.div>
    </div>
  );
};

export default DecorativeShapes;
