"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/LocaleContext";
import { PROJECTS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { useSound } from "@/lib/hooks";

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);
  const { t, dir } = useLocale();
  const sound = useSound();
  const p = t.projects;

  return (
    <section id="projects" className="py-28 md:py-32 px-6 md:px-10 max-w-6xl mx-auto" dir={dir}>
      <SectionHeader tag={p.tag} title={p.title} accent={p.accent} />
      <div className="space-y-4 mb-10">
        {p.items.map(({ name, problem, solution, impact }, i) => {
          const meta = PROJECTS[i];
          return (
            <Reveal key={name} delay={i * 0.1}>
              <motion.div
                onClick={() => { setActive(active === i ? null : i); sound.click(); }}
                whileHover={{ x: dir === "rtl" ? -4 : 4 }}
                className="border border-cyan-900/30 bg-[#0a1219] relative overflow-hidden cursor-pointer group hover:border-cyan-700/50 transition-all"
                data-hover
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${meta.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <motion.div className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-600"
                  animate={{ scaleY: active === i ? 1 : 0.25, opacity: active === i ? 1 : 0.4 }}
                  style={{ originY: 0 }} />
                <div className="p-7 relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{meta.icon}</span>
                      <div>
                        <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-0.5">
                          Project {String(i + 1).padStart(2, "0")}
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{name}</h3>
                      </div>
                    </div>
                    <motion.span animate={{ rotate: active === i ? 45 : 0 }}
                      className="text-cyan-600 text-3xl font-thin flex-shrink-0 mt-1">+</motion.span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {meta.stack.map(s => (
                      <span key={s} className="font-mono text-xs border border-cyan-900/50 text-cyan-400/60 px-2 py-0.5">{s}</span>
                    ))}
                  </div>
                  <AnimatePresence>
                    {active === i && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden"
                      >
                        <div className="mt-6 grid md:grid-cols-3 gap-6 border-t border-cyan-900/30 pt-6">
                          <div>
                            <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-2">{p.problemLabel}</p>
                            <p className="font-mono text-sm text-gray-400 leading-relaxed">{problem}</p>
                          </div>
                          <div>
                            <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-2">{p.solutionLabel}</p>
                            <p className="font-mono text-sm text-gray-400 leading-relaxed">{solution}</p>
                          </div>
                          <div>
                            <p className="font-mono text-[10px] text-emerald-600 uppercase tracking-widest mb-2">{p.impactLabel}</p>
                            <p className="font-mono text-sm text-emerald-400/80 leading-relaxed">{impact}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {/* CTA to full projects page */}
      <Reveal delay={0.35}>
        <div className="flex flex-col sm:flex-row items-center gap-4 border border-cyan-900/30 bg-[#0a1219] p-6 relative overflow-hidden group">
          <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex-1 relative z-10">
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-1">// More work</p>
            <p className="font-bold text-white text-lg">16 systems built at MIP Engenharia</p>
            <p className="font-mono text-xs text-gray-500 mt-0.5">APIs, web portals, ERP integrations, desktop tools — all in production.</p>
          </div>
          <Link href="/projects"
            className="relative z-10 flex-shrink-0 font-mono text-xs border border-cyan-700 text-cyan-400 px-5 py-3 hover:bg-cyan-400 hover:text-[#050a0e] transition-all tracking-widest whitespace-nowrap"
          >
            SEE ALL 16 SYSTEMS ↗
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.4} className="mt-6 text-center">
        <p className="font-mono text-xs text-gray-600">
          {p.moreText}{" "}
          <a href="https://github.com/WalidMarghata" target="_blank" rel="noopener noreferrer"
            className="text-cyan-600 hover:text-cyan-400 transition-colors underline underline-offset-4"
          >github.com/WalidMarghata ↗</a>
        </p>
      </Reveal>
    </section>
  );
}
