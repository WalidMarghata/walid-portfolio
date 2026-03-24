"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/LocaleContext";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { useSound } from "@/lib/hooks";

export default function Education() {
  const { t, dir } = useLocale();
  const sound = useSound();
  const ed = t.education;
  return (
    <section id="education" className="py-28 md:py-32 px-6 md:px-10 max-w-6xl mx-auto" dir={dir}>
      <SectionHeader tag={ed.tag} title={ed.title} accent={ed.accent} />
      <div className="grid md:grid-cols-3 gap-4 mb-16">
        {ed.degrees.map(({ icon, type, course, school, period }, i) => (
          <Reveal key={course} delay={i * 0.1}>
            <motion.div whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(0,200,255,0.08)" }}
              onHoverStart={sound.hover} transition={{ type: "spring", stiffness: 280 }}
              className="border border-cyan-900/30 bg-[#0a1219] p-7 h-full relative overflow-hidden group" data-hover
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors duration-500" />
              <span className="text-3xl block mb-4 relative z-10">{icon}</span>
              <p className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase mb-2">{type}</p>
              <h3 className="font-bold text-white text-lg leading-snug mb-1">{course}</h3>
              <p className="font-mono text-xs text-gray-500">{school}</p>
              <span className="font-mono text-[10px] border border-gray-800 text-gray-600 px-2 py-0.5 mt-3 inline-block">{period}</span>
            </motion.div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
          <span className="text-gray-700">// </span>{ed.certsTag}
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-2">
        {ed.courses.map(({ name, provider }, i) => (
          <Reveal key={name} delay={i * 0.04}>
            <motion.div whileHover={{ x: dir === "rtl" ? -5 : 5, borderColor: "rgba(0,200,255,0.28)" }}
              onHoverStart={sound.hover}
              className="flex items-start gap-3 border border-cyan-900/20 bg-[#0a1219] px-5 py-4 transition-all cursor-default" data-hover
            >
              <motion.span whileHover={{ color: "#00c8ff", scale: 1.3 }}
                className="text-cyan-800 font-mono text-xs mt-0.5 flex-shrink-0">◆</motion.span>
              <div>
                <p className="font-mono text-sm text-gray-300 leading-snug">{name}</p>
                <p className="font-mono text-xs text-gray-600 mt-0.5">{provider}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
