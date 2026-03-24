"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/LocaleContext";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { useSound } from "@/lib/hooks";

export default function Skills() {
  const { t, dir } = useLocale();
  const sound = useSound();
  const s = t.skills;
  return (
    <section id="skills" className="py-28 md:py-32 px-6 md:px-10 max-w-6xl mx-auto" dir={dir}>
      <SectionHeader tag={s.tag} title={s.title} accent={s.accent} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {s.cats.map(({ icon, title, pills }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,200,255,0.07)", borderColor: "rgba(0,200,255,0.5)" }}
              transition={{ type: "spring", stiffness: 280 }}
              onHoverStart={sound.hover}
              className="border border-cyan-900/30 bg-[#0a1219] p-6 h-full group relative overflow-hidden"
              data-hover
            >
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-transparent group-hover:border-cyan-400/35 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-transparent group-hover:border-cyan-400/35 transition-all duration-500" />
              <span className="text-2xl mb-3 block">{icon}</span>
              <p className="font-mono text-xs text-white font-bold uppercase tracking-widest mb-4">{title}</p>
              <div className="flex flex-wrap gap-2">
                {pills.map((p, j) => (
                  <motion.span key={p}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: j * 0.04 }} viewport={{ once: true }}
                    whileHover={{ scale: 1.1, color: "#00c8ff", borderColor: "#00c8ff" }}
                    className="font-mono text-xs border border-cyan-900/50 text-cyan-300/60 px-2 py-1 transition-all cursor-default"
                  >{p}</motion.span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
