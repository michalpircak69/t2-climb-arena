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
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>

      {/* ===== ROCK / MOUNTAIN FORMATIONS ===== */}

      {/* Large rock formation - top left */}
      <motion.div style={{ y: y1 }} className="absolute -top-4 -left-8">
        <svg width="320" height="260" viewBox="0 0 320 260" fill="none">
          <path d="M0 260V80L40 45L85 90L120 20L160 70L200 10L240 55L280 30L320 60V260H0Z" fill="hsl(25 60% 40% / 0.07)" />
          <path d="M0 260V120L50 85L100 130L140 60L180 100L220 50L260 80L300 55L320 75V260H0Z" fill="hsl(25 50% 35% / 0.05)" />
        </svg>
      </motion.div>

      {/* Jagged rock silhouette - right side */}
      <motion.div style={{ y: y2 }} className="absolute top-[8%] -right-4">
        <svg width="200" height="350" viewBox="0 0 200 350" fill="none">
          <path d="M200 0V350H120L130 300L100 280L110 240L80 220L95 180L60 150L75 120L50 90L70 60L40 30L60 0H200Z" fill="hsl(20 40% 30% / 0.08)" />
        </svg>
      </motion.div>

      {/* Rock outline - left side mid */}
      <motion.div style={{ y: y3, rotate: rotate2 }} className="absolute top-[22%] -left-6">
        <svg width="180" height="200" viewBox="0 0 180 200" fill="none">
          <path d="M10 200L0 140L30 100L15 70L50 30L80 50L110 10L140 40L170 20L180 60L160 100L175 140L150 170L120 160L90 190L60 175L30 195Z" stroke="hsl(25 50% 40% / 0.12)" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      {/* Solid boulder shape - right mid */}
      <motion.div style={{ y: y1 }} className="absolute top-[35%] -right-10">
        <svg width="240" height="180" viewBox="0 0 240 180" fill="none">
          <path d="M240 180H180L160 140L140 160L110 120L90 150L60 110L40 140L0 100L20 60L50 80L80 30L120 50L150 10L180 40L210 20L240 50V180Z" fill="hsl(20 45% 35% / 0.06)" />
        </svg>
      </motion.div>

      {/* Mountain range outline - bottom */}
      <motion.div style={{ y: y2 }} className="absolute bottom-[15%] left-0 w-full">
        <svg width="100%" height="120" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
          <path d="M0 120L60 80L120 100L200 40L280 70L360 30L440 60L520 20L600 50L680 25L760 55L840 15L920 45L1000 35L1080 65L1140 50L1200 80V120H0Z" stroke="hsl(25 50% 45% / 0.1)" strokeWidth="1.5" fill="none" />
        </svg>
      </motion.div>

      {/* Small rock cluster - left bottom */}
      <motion.div style={{ y: y3 }} className="absolute bottom-[30%] -left-4">
        <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
          <path d="M0 140V100L20 70L45 90L60 50L80 75L100 30L120 55L140 40L160 60V140H0Z" fill="hsl(25 55% 40% / 0.07)" />
        </svg>
      </motion.div>

      {/* Overhanging rock - right top */}
      <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-[50%] -right-6">
        <svg width="150" height="200" viewBox="0 0 150 200" fill="none">
          <path d="M150 0V200H100L110 160L80 140L90 110L60 90L75 60L50 40L65 15L100 25L130 10L150 0Z" stroke="hsl(20 40% 35% / 0.1)" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      {/* ===== CLIMBER SILHOUETTES ===== */}

      {/* Climber 1 - hanging from overhang, right side */}
      <motion.div style={{ y: y2 }} className="absolute top-[18%] right-[8%]">
        <svg width="60" height="110" viewBox="0 0 60 110" fill="none">
          {/* rope */}
          <line x1="30" y1="0" x2="30" y2="25" stroke="hsl(25 50% 40% / 0.15)" strokeWidth="1.5" />
          {/* head */}
          <circle cx="30" cy="32" r="7" fill="hsl(20 40% 25% / 0.12)" />
          {/* body */}
          <path d="M30 39L28 60L22 80L18 95" stroke="hsl(20 40% 25% / 0.12)" strokeWidth="3" strokeLinecap="round" />
          <path d="M28 60L38 78L42 92" stroke="hsl(20 40% 25% / 0.12)" strokeWidth="3" strokeLinecap="round" />
          {/* arms */}
          <path d="M30 42L18 30L12 20" stroke="hsl(20 40% 25% / 0.12)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M30 42L42 32L48 22" stroke="hsl(20 40% 25% / 0.12)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Climber 2 - climbing up, left side */}
      <motion.div style={{ y: y3 }} className="absolute top-[45%] left-[6%]">
        <svg width="55" height="120" viewBox="0 0 55 120" fill="none">
          {/* rope */}
          <path d="M28 120L26 90L30 60L28 30L30 5" stroke="hsl(25 50% 40% / 0.12)" strokeWidth="1.5" fill="none" />
          {/* head */}
          <circle cx="28" cy="28" r="6.5" fill="hsl(20 40% 25% / 0.1)" />
          {/* body */}
          <path d="M28 35L26 55L30 75" stroke="hsl(20 40% 25% / 0.1)" strokeWidth="3" strokeLinecap="round" />
          {/* right leg up */}
          <path d="M30 75L40 85L45 95" stroke="hsl(20 40% 25% / 0.1)" strokeWidth="2.5" strokeLinecap="round" />
          {/* left leg down */}
          <path d="M30 75L22 90L18 105" stroke="hsl(20 40% 25% / 0.1)" strokeWidth="2.5" strokeLinecap="round" />
          {/* right arm reaching up */}
          <path d="M28 40L40 28L48 18" stroke="hsl(20 40% 25% / 0.1)" strokeWidth="2.5" strokeLinecap="round" />
          {/* left arm holding */}
          <path d="M28 40L15 35L8 28" stroke="hsl(20 40% 25% / 0.1)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Climber 3 - dynamic move, bottom right */}
      <motion.div style={{ y: y1 }} className="absolute top-[65%] right-[10%]">
        <svg width="70" height="100" viewBox="0 0 70 100" fill="none">
          {/* rope */}
          <path d="M35 0L34 20L36 35" stroke="hsl(25 50% 40% / 0.12)" strokeWidth="1.5" fill="none" />
          {/* head */}
          <circle cx="36" cy="30" r="7" fill="hsl(20 40% 25% / 0.1)" />
          {/* body leaning */}
          <path d="M36 37L32 55L28 70" stroke="hsl(20 40% 25% / 0.1)" strokeWidth="3" strokeLinecap="round" />
          {/* legs spread */}
          <path d="M28 70L15 85L10 95" stroke="hsl(20 40% 25% / 0.1)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M28 70L40 82L50 90" stroke="hsl(20 40% 25% / 0.1)" strokeWidth="2.5" strokeLinecap="round" />
          {/* arms */}
          <path d="M36 42L50 30L58 20" stroke="hsl(20 40% 25% / 0.1)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M36 42L20 38L10 30" stroke="hsl(20 40% 25% / 0.1)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Climber 4 silhouette - filled, left bottom */}
      <motion.div style={{ y: y2 }} className="absolute top-[78%] left-[12%]">
        <svg width="50" height="90" viewBox="0 0 50 90" fill="none">
          <path d="M25 0L25 15M25 15C21 15 18 18 18 22C18 26 21 29 25 29C29 29 32 26 32 22C32 18 29 15 25 15ZM25 29L23 48L18 65L14 80M23 48L32 62L38 78M25 33L12 22L6 14M25 33L38 24L44 16" stroke="hsl(20 40% 25% / 0.1)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* ===== EXISTING DECORATIVE ELEMENTS ===== */}

      {/* Orange ring */}
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-[15%] right-[22%] w-20 h-20 rounded-full border-[3px] border-primary/10"
      />

      {/* Dotted cluster */}
      <motion.div style={{ y: y2 }} className="absolute bottom-[22%] left-[25%] grid grid-cols-4 gap-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-primary/[0.07]" />
        ))}
      </motion.div>

      {/* Large ring bottom right */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[4px] border-secondary"
      />

      {/* Small accent dots */}
      <motion.div style={{ y: y2 }} className="absolute top-[10%] left-[45%]">
        <div className="w-3 h-3 rounded-full bg-primary/10" />
      </motion.div>

      <motion.div style={{ y: y1 }} className="absolute top-[30%] right-[30%]">
        <div className="w-5 h-5 rounded-full bg-primary/[0.06]" />
      </motion.div>
    </div>
  );
};

export default DecorativeShapes;
