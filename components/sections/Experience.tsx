"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/LocaleContext";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { useSound } from "@/lib/hooks";

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const { t, dir } = useLocale();
  const sound = useSound();
  const e = t.experience;

  return (
    <section id="experience" className="py-28 md:py-32 px-6 md:px-10 max-w-6xl mx-auto" dir={dir}>
      <SectionHeader tag={e.tag} title={e.title} accent={e.accent} />
      <div className="space-y-3">
        {e.items.map(({ period, company, role, current, impact, tags }, i) => (
          <Reveal key={company} delay={i * 0.1}>
            <motion.div
              onClick={() => { setExpanded(expanded === i ? null : i); sound.click(); }}
              whileHover={{ x: dir === "rtl" ? -4 : 4 }}
              className={`border bg-[#0a1219] relative overflow-hidden cursor-pointer transition-all ${
                current ? "border-emerald-800/50 hover:border-emerald-600/60" : "border-cyan-900/30 hover:border-cyan-700/40"
              } ${expanded === i ? (current ? "border-emerald-500/60" : "border-cyan-600/40") : ""}`}
              data-hover
            >
              <motion.div className={`absolute left-0 top-0 bottom-0 w-0.5 ${current ? "bg-emerald-400" : "bg-cyan-700"}`}
                animate={{ scaleY: expanded === i ? 1 : 0.25, opacity: expanded === i ? 1 : 0.35 }}
                style={{ originY: 0 }} />
              {expanded === i && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className={`absolute inset-0 pointer-events-none ${current ? "bg-emerald-400/[0.018]" : "bg-cyan-400/[0.015]"}`} />
              )}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {current && (
                      <span className="font-mono text-[10px] text-emerald-400 border border-emerald-800 px-2 py-0.5 mb-3 inline-flex items-center gap-1.5">
                        <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                          animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                        {e.currentRole}
                      </span>
                    )}
                    <p className="font-mono text-xs text-cyan-400 tracking-widest mb-0.5">{period}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{company}</h3>
                    <p className="font-mono text-sm text-gray-500">{role}</p>
                  </div>
                  <motion.span animate={{ rotate: expanded === i ? 45 : 0 }}
                    className="text-cyan-600 text-3xl font-thin flex-shrink-0 mt-1">+</motion.span>
                </div>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden"
                    >
                      <ul className="mt-5 mb-4 space-y-2">
                        {impact.map((item, j) => (
                          <motion.li key={j}
                            initial={{ opacity: 0, x: dir === "rtl" ? 10 : -10 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.06 }}
                            className="font-mono text-sm text-gray-400 leading-relaxed flex items-start gap-3"
                          >
                            <span className="text-cyan-600 mt-1 flex-shrink-0">▸</span>{item}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {tags.map(tag => (
                          <span key={tag} className="font-mono text-xs bg-cyan-400/10 border border-cyan-800/50 text-cyan-400 px-2 py-0.5">{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
