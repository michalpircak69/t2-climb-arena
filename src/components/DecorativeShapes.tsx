import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DecorativeShapes = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>

      {/* ===== GEOMETRIC ANGULAR SHAPES - inspired by reference ===== */}

      {/* Large angular shape cluster - top left */}
      <motion.div style={{ y: y1 }} className="absolute top-[5%] -left-20">
        <svg width="500" height="400" viewBox="0 0 500 400" fill="none">
          {/* Dark navy triangle */}
          <polygon points="0,400 250,50 500,400" fill="hsl(220 40% 25% / 0.08)" />
          {/* Warm orange overlap */}
          <polygon points="80,400 300,120 480,350" fill="hsl(25 95% 53% / 0.06)" />
          {/* Light accent sliver */}
          <polygon points="150,400 280,180 400,400" fill="hsl(35 100% 70% / 0.07)" />
        </svg>
      </motion.div>

      {/* Angular shapes - right side upper */}
      <motion.div style={{ y: y2 }} className="absolute top-[12%] -right-16">
        <svg width="450" height="350" viewBox="0 0 450 350" fill="none">
          <polygon points="450,0 200,350 450,350" fill="hsl(220 40% 25% / 0.07)" />
          <polygon points="350,0 150,280 450,320" fill="hsl(25 80% 55% / 0.06)" />
          <polygon points="450,50 280,200 450,250" fill="hsl(35 90% 65% / 0.08)" />
        </svg>
      </motion.div>

      {/* Wide diagonal band - left mid */}
      <motion.div style={{ y: y3 }} className="absolute top-[28%] -left-32">
        <svg width="600" height="300" viewBox="0 0 600 300" fill="none">
          <polygon points="0,300 100,0 350,0 250,300" fill="hsl(220 35% 28% / 0.06)" />
          <polygon points="150,300 220,50 420,50 350,300" fill="hsl(25 90% 55% / 0.05)" />
        </svg>
      </motion.div>

      {/* Overlapping triangles - right mid */}
      <motion.div style={{ y: y1 }} className="absolute top-[40%] -right-24">
        <svg width="500" height="400" viewBox="0 0 500 400" fill="none">
          <polygon points="500,0 200,400 500,400" fill="hsl(220 40% 22% / 0.07)" />
          <polygon points="500,80 280,350 500,380" fill="hsl(30 85% 58% / 0.06)" />
          <polygon points="400,50 300,250 500,300" fill="hsl(40 95% 70% / 0.07)" />
        </svg>
      </motion.div>

      {/* Angular ribbon - bottom left */}
      <motion.div style={{ y: y2 }} className="absolute top-[55%] -left-20">
        <svg width="550" height="350" viewBox="0 0 550 350" fill="none">
          <polygon points="0,100 300,0 550,150 250,350" fill="hsl(220 35% 25% / 0.06)" />
          <polygon points="50,150 280,60 480,180 200,320" fill="hsl(25 90% 55% / 0.05)" />
          <polygon points="100,180 250,100 400,200 180,280" fill="hsl(35 100% 68% / 0.06)" />
        </svg>
      </motion.div>

      {/* Large geometric cluster - right lower */}
      <motion.div style={{ y: y3 }} className="absolute top-[68%] -right-28">
        <svg width="480" height="380" viewBox="0 0 480 380" fill="none">
          <polygon points="480,380 100,380 300,0" fill="hsl(220 40% 25% / 0.07)" />
          <polygon points="480,350 180,350 350,50" fill="hsl(25 85% 55% / 0.06)" />
          <polygon points="480,300 250,300 380,80" fill="hsl(40 90% 65% / 0.07)" />
        </svg>
      </motion.div>

      {/* Sweeping angular shapes - bottom spanning */}
      <motion.div style={{ y: y1 }} className="absolute top-[82%] -left-16">
        <svg width="700" height="300" viewBox="0 0 700 300" fill="none">
          <polygon points="0,300 0,100 350,0 700,100 700,300" fill="hsl(220 38% 24% / 0.05)" />
          <polygon points="50,300 100,150 400,60 650,150 600,300" fill="hsl(25 90% 55% / 0.04)" />
          <polygon points="150,300 200,180 450,100 550,200 500,300" fill="hsl(35 95% 68% / 0.06)" />
        </svg>
      </motion.div>

      {/* Small accent triangles scattered */}
      <motion.div style={{ y: y2 }} className="absolute top-[20%] left-[60%]">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
          <polygon points="60,0 120,100 0,100" fill="hsl(25 95% 53% / 0.08)" />
        </svg>
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute top-[48%] left-[35%]">
        <svg width="100" height="90" viewBox="0 0 100 90" fill="none">
          <polygon points="50,0 100,90 0,90" fill="hsl(220 40% 25% / 0.06)" />
        </svg>
      </motion.div>

      <motion.div style={{ y: y1 }} className="absolute top-[75%] left-[55%]">
        <svg width="140" height="110" viewBox="0 0 140 110" fill="none">
          <polygon points="70,0 140,110 0,110" fill="hsl(35 100% 65% / 0.07)" />
        </svg>
      </motion.div>

      {/* Thin diagonal lines for texture */}
      <motion.div style={{ y: y2 }} className="absolute top-[35%] left-[10%]">
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none">
          <line x1="0" y1="200" x2="300" y2="0" stroke="hsl(25 80% 50% / 0.08)" strokeWidth="2" />
          <line x1="0" y1="180" x2="280" y2="0" stroke="hsl(220 30% 30% / 0.06)" strokeWidth="1.5" />
        </svg>
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute top-[60%] right-[15%]">
        <svg width="250" height="180" viewBox="0 0 250 180" fill="none">
          <line x1="250" y1="180" x2="0" y2="0" stroke="hsl(25 80% 50% / 0.07)" strokeWidth="2" />
          <line x1="250" y1="160" x2="20" y2="0" stroke="hsl(35 90% 60% / 0.06)" strokeWidth="1.5" />
        </svg>
      </motion.div>
    </div>
  );
};

export default DecorativeShapes;
