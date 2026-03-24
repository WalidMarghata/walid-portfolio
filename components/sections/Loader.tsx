"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setPct(p => {
        if (p >= 100) { clearInterval(t); setTimeout(onFinish, 300); return 100; }
        return p + 2;
      });
    }, 25);
    return () => clearInterval(t);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: pct >= 100 ? 0 : 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="fixed inset-0 bg-[#050a0e] flex flex-col items-center justify-center z-[900]"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6 relative"
      >
        <Image
          src="/logo.png"
          alt="Walid Marghata"
          width={140}
          height={140}
          className="object-contain drop-shadow-[0_0_30px_rgba(0,200,255,0.5)]"
          priority
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-mono text-cyan-400 text-sm tracking-[0.5em] uppercase mb-1"
      >
        Walid Marghata
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-mono text-gray-600 text-xs tracking-[0.3em] mb-10"
      >
        Senior Full Stack Developer
      </motion.p>

      {/* Progress bar */}
      <div className="w-56 h-px bg-gray-800 relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-700 to-cyan-400"
          style={{ width: `${pct}%` }}
        />
        <motion.div
          className="absolute inset-y-0 w-16 bg-white/15 blur-sm"
          animate={{ x: ["-100%", "400%"] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <p className="font-mono text-cyan-700 text-xs mt-3 tabular-nums">{pct}%</p>
    </motion.div>
  );
}
