"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ITEMS = ["C#", ".NET", "Java", "React", "Angular", "Spring Boot", "Node.js",
               "Python", "SQL", "MongoDB", "Ionic", "REST APIs", "TypeScript", "WS02", "Azure"];

export default function ParallaxBand() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%",   "-22%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-22%", "0%"  ]);

  return (
    <div ref={ref} className="py-12 overflow-hidden border-y border-cyan-900/20 bg-[#070d12] select-none">
      <motion.div style={{ x: x1 }} className="flex gap-10 whitespace-nowrap mb-4">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i}
            className="font-mono text-cyan-900 text-3xl font-black tracking-widest hover:text-cyan-600 transition-colors cursor-default">
            {item}
          </span>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className="flex gap-10 whitespace-nowrap opacity-25">
        {[...ITEMS.slice().reverse(), ...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="font-mono text-cyan-950 text-xl font-black tracking-widest cursor-default">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
