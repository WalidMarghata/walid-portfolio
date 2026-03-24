"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Variants } from "framer-motion";

type Dir = "up" | "left" | "right";

const variants: Record<Dir, Variants> = {
  up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0 } },
};

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: Dir;
}

export default function Reveal({ children, delay = 0, className = "", direction = "up" }: RevealProps) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={variants[direction]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
