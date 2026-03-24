"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/LocaleContext";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

const METRIC_VALUES = [9, 3, 10, 5, 3];

export default function Metrics() {
  const { t } = useLocale();
  return (
    <div className="relative border-y border-cyan-900/30 bg-[#070d12] overflow-hidden">
      <motion.div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
        animate={{ x: ["-10%", "110%"] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }} />
      <div className="max-w-6xl mx-auto px-10 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        {t.metrics.map(({ suffix, label }, i) => (
          <Reveal key={label} delay={i * 0.1} className="text-center">
            <p className="font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-600 mb-1 tabular-nums">
              <Counter to={METRIC_VALUES[i]} suffix={suffix} />
            </p>
            <p className="font-mono text-[11px] text-gray-600 uppercase tracking-widest">{label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
