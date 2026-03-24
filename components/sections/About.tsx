"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLocale } from "@/lib/LocaleContext";
import { PERSONAL } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { useSound } from "@/lib/hooks";

export default function About() {
  const { t, dir } = useLocale();
  const sound = useSound();
  const a = t.about;

  return (
    <section id="about" className="py-28 md:py-32 px-6 md:px-10 max-w-6xl mx-auto" dir={dir}>
      <SectionHeader tag={a.tag} title={a.title} accent={a.accent} />

      <div className="grid md:grid-cols-5 gap-12 md:gap-16 mb-20">
        <Reveal delay={0.1} direction="left" className="md:col-span-3 space-y-5 font-mono text-gray-400 text-sm leading-loose">
          <p>{a.p1}</p>
          <p>{a.p2}</p>
          <p>{a.p3}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <motion.a href={`mailto:${PERSONAL.email}`}
              whileHover={{ scale: 1.04, x: dir === "rtl" ? -4 : 4 }} whileTap={{ scale: 0.97 }}
              onHoverStart={sound.hover}
              className="inline-flex items-center gap-2 font-mono text-xs bg-cyan-400 text-[#050a0e] px-5 py-3 font-bold tracking-widest hover:bg-white transition-colors"
            >{a.hireCta} ▶</motion.a>
            <motion.a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              onHoverStart={sound.hover}
              className="inline-flex items-center gap-2 font-mono text-xs border border-gray-700 text-gray-400 px-5 py-3 hover:border-cyan-400 hover:text-cyan-400 transition-all tracking-widest"
            >{a.githubCta} ↗</motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.2} direction="right" className="md:col-span-2">
          <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-5">// {a.langsTag}</p>
          <div className="space-y-3">
            {t.langs.map(({ flag, name, level, pct }, i) => {
              const ref2   = useRef(null);
              const inView = useInView(ref2, { once: true });
              return (
                <motion.div key={name} ref={ref2}
                  initial={{ opacity: 0, x: dir === "rtl" ? -30 : 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: dir === "rtl" ? -4 : 4, borderColor: "rgba(0,200,255,0.4)" }}
                  className="border border-cyan-900/30 bg-[#0a1219] px-4 py-3 transition-all"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-gray-300">{flag} {name}</span>
                    <span className="font-mono text-xs text-cyan-400">{level}</span>
                  </div>
                  <div className="h-px bg-gray-800 overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${pct}%` } : { width: 0 }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* How I Work */}
      <Reveal className="mb-8">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase flex items-center gap-3">
          <span className="text-gray-700">// </span>{a.howTag}
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {a.howWork.map(({ icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <motion.div whileHover={{ y: -6, borderColor: "rgba(0,200,255,0.45)" }}
              onHoverStart={sound.hover} transition={{ type: "spring", stiffness: 280 }}
              className="border border-cyan-900/30 bg-[#0a1219] p-6 h-full" data-hover
            >
              <span className="text-2xl block mb-3">{icon}</span>
              <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
              <p className="font-mono text-xs text-gray-500 leading-relaxed">{desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
