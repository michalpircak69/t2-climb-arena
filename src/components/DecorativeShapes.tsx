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
      {/* Large orange circle - top right */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/[0.06]"
      />

      {/* Small triangle shapes */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/4 left-[8%]"
      >
        <svg width="60" height="52" viewBox="0 0 60 52" fill="none">
          <path d="M30 0L60 52H0L30 0Z" fill="hsl(25 95% 53% / 0.08)" />
        </svg>
      </motion.div>

      {/* Orange ring */}
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-[15%] right-[12%] w-24 h-24 rounded-full border-[3px] border-primary/10"
      />

      {/* Dotted cluster - bottom left */}
      <motion.div style={{ y: y2 }} className="absolute bottom-[20%] left-[5%] grid grid-cols-4 gap-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-primary/[0.07]" />
        ))}
      </motion.div>

      {/* Large soft blob - center left */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[40%] -left-16 w-64 h-64 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-primary/[0.04] to-secondary/40"
      />

      {/* Small squares - right side */}
      <motion.div style={{ y: y3, rotate: rotate1 }} className="absolute top-[55%] right-[6%]">
        <div className="w-12 h-12 rounded-lg bg-primary/[0.06] rotate-12" />
        <div className="w-8 h-8 rounded-md bg-accent/[0.08] -mt-3 ml-8 rotate-[-8deg]" />
      </motion.div>

      {/* Zigzag line - mid */}
      <motion.div style={{ y: y2 }} className="absolute top-[70%] left-[15%]">
        <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
          <path d="M0 15L15 0L30 15L45 0L60 15L75 0L90 15L105 0L120 15" stroke="hsl(25 95% 53% / 0.1)" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      {/* Large ring bottom right */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[4px] border-secondary"
      />

      {/* Tiny colored triangles scattered */}
      <motion.div style={{ y: y3 }} className="absolute top-[85%] left-[40%]">
        <svg width="40" height="35" viewBox="0 0 40 35" fill="none">
          <path d="M20 0L40 35H0L20 0Z" fill="hsl(35 100% 50% / 0.08)" />
        </svg>
      </motion.div>

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
