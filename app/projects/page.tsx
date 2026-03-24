"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { PROJECTS_DATA, CATEGORIES, PROJECT_STATS, type Category, type Project } from "@/lib/projects-data";
import { useSound } from "@/lib/hooks";
import ThreeBackground from "@/components/ui/ThreeBackground";
import CustomCursor    from "@/components/ui/CustomCursor";

/* ── REVEAL ─────────────────────────────────────────────────────────────────── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >{children}</motion.div>
  );
}

/* ── TYPE BADGE ─────────────────────────────────────────────────────────────── */
const TYPE_COLORS: Record<string, string> = {
  web:         "bg-cyan-400/10 text-cyan-400 border-cyan-800/50",
  api:         "bg-emerald-400/10 text-emerald-400 border-emerald-800/50",
  integration: "bg-blue-400/10 text-blue-400 border-blue-800/50",
  desktop:     "bg-violet-400/10 text-violet-400 border-violet-800/50",
};
const TYPE_LABELS: Record<string, string> = {
  web:         "Web",
  api:         "API",
  integration: "Integration",
  desktop:     "Desktop",
};

function TypeBadge({ type }: { type: string }) {
  return (
    <span className={`font-mono text-[10px] border px-2 py-0.5 tracking-widest uppercase ${TYPE_COLORS[type]}`}>
      {TYPE_LABELS[type]}
    </span>
  );
}

/* ── PROJECT CARD ───────────────────────────────────────────────────────────── */
function ProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect: (p: Project) => void }) {
  const sound = useSound();
  return (
    <Reveal delay={index * 0.06}>
      <motion.div
        onClick={() => { onSelect(project); sound.click(); }}
        whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(0,200,255,0.08)" }}
        transition={{ type: "spring", stiffness: 280 }}
        className="border border-cyan-900/30 bg-[#0a1219] relative overflow-hidden cursor-pointer group h-full flex flex-col"
        data-hover
      >
        {/* Gradient top band */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.color} opacity-80`} />

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-transparent group-hover:border-cyan-400/35 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-transparent group-hover:border-cyan-400/35 transition-all duration-500" />

        {/* Hover glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        />

        <div className="p-6 relative z-10 flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{project.icon}</span>
              <div>
                <TypeBadge type={project.type} />
                <h3 className="font-bold text-white text-base mt-1 leading-tight">{project.name}</h3>
              </div>
            </div>
            {/* Live badge */}
            <span className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
              <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <span className="font-mono text-[10px] text-emerald-400 tracking-widest">LIVE</span>
            </span>
          </div>

          {/* Summary */}
          <p className="font-mono text-xs text-gray-400 leading-relaxed mb-4 flex-1">{project.summary}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 4).map(tag => (
              <span key={tag} className="font-mono text-[10px] border border-cyan-900/40 text-cyan-500/60 px-1.5 py-0.5">{tag}</span>
            ))}
            {project.tags.length > 4 && (
              <span className="font-mono text-[10px] text-gray-600">+{project.tags.length - 4}</span>
            )}
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-cyan-900/20">
            {project.tech.slice(0, 4).map(t => (
              <span key={t} className="font-mono text-[10px] text-gray-500">{t}</span>
            ))}
            {project.tech.length > 4 && <span className="font-mono text-[10px] text-gray-700">+{project.tech.length - 4} more</span>}
          </div>

          {/* View more */}
          <div className="mt-4 flex items-center gap-2 font-mono text-xs text-cyan-600 group-hover:text-cyan-400 transition-colors">
            <span>View details</span>
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

/* ── PROJECT MODAL ──────────────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const sound = useSound();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#050a0e]/90 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        onClick={e => e.stopPropagation()}
        className="relative bg-[#0a1219] border border-cyan-900/50 w-full max-w-3xl max-h-[88vh] overflow-y-auto shadow-2xl"
      >
        {/* Top gradient band */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

        {/* Scan line */}
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{project.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TypeBadge type={project.type} />
                  <span className="flex items-center gap-1.5">
                    <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                      animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                    <span className="font-mono text-[10px] text-emerald-400 tracking-widest">IN PRODUCTION</span>
                  </span>
                </div>
                <h2 className="font-bold text-white text-2xl md:text-3xl">{project.name}</h2>
                <p className="font-mono text-xs text-cyan-500 mt-0.5">{project.category}</p>
              </div>
            </div>
            <motion.button onClick={() => { onClose(); sound.click(); }}
              whileHover={{ scale: 1.1, color: "#00c8ff" }} whileTap={{ scale: 0.95 }}
              className="text-gray-600 text-2xl font-light flex-shrink-0 hover:text-cyan-400 transition-colors"
              data-hover
            >✕</motion.button>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-2">// About this system</p>
            <p className="font-mono text-sm text-gray-300 leading-loose">{project.description}</p>
          </div>

          {/* Impact */}
          <div className="mb-6">
            <p className="font-mono text-[10px] text-emerald-600 uppercase tracking-widest mb-3">// ⚡ Business Impact</p>
            <ul className="space-y-2">
              {project.impact.map((item, i) => (
                <motion.li key={i}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 font-mono text-sm text-gray-400"
                >
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">▸</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="pt-5 border-t border-cyan-900/30">
            <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-3">// Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="font-mono text-xs border border-cyan-900/50 text-cyan-300/70 px-3 py-1">{t}</span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-5 mt-5 border-t border-cyan-900/20">
            <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-3">// Keywords</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="font-mono text-[10px] border border-cyan-900/30 text-gray-500 px-2 py-0.5">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── MAIN PAGE ──────────────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [category, setCategory]       = useState<Category>("All");
  const [selected, setSelected]       = useState<Project | null>(null);
  const [search, setSearch]           = useState("");
  const sound = useSound();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, -80]);

  const filtered = PROJECTS_DATA.filter(p => {
    const matchCat  = category === "All" || p.category === category;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.summary.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(search.toLowerCase())) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-[#050a0e] text-white min-h-screen">
      <ThreeBackground />
      <CustomCursor />

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 w-full z-40 px-5 md:px-10 py-3 flex justify-between items-center bg-[#050a0e]/80 backdrop-blur-xl border-b border-cyan-900/30">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 flex-shrink-0">
            <Image src="/logo.png" alt="WM" fill className="object-contain drop-shadow-[0_0_8px_rgba(0,200,255,0.4)]" />
          </div>
          <span className="font-mono text-cyan-400 font-bold tracking-widest text-sm hidden sm:block">
            walid<span className="text-white">.dev</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/#contact"
            onMouseEnter={sound.hover}
            className="font-mono text-xs border border-cyan-800 text-cyan-400 px-4 py-1.5 hover:bg-cyan-400 hover:text-[#050a0e] transition-all tracking-widest"
          >HIRE ME</Link>
          <Link href="/"
            onMouseEnter={sound.hover}
            className="font-mono text-xs text-gray-500 hover:text-cyan-400 transition-colors tracking-widest"
          >← Back</Link>
        </div>
      </nav>

      <main className="relative z-10 pt-24">

        {/* ── HERO ── */}
        <section className="px-6 md:px-10 max-w-6xl mx-auto py-16 md:py-24">
          <motion.div style={{ y: heroY }}>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-cyan-400 text-xs tracking-[0.35em] uppercase mb-4 flex items-center gap-3"
            >
              <span className="text-gray-700">// </span>MIP Engenharia · 2023 — Present
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold leading-[0.9] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
            >
              <span className="text-white block">Systems</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block">
                I Built
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-gray-400 text-sm max-w-2xl leading-loose border-l-2 border-cyan-800 pl-4 mb-12"
            >
              16 production systems designed, developed and deployed at MIP Engenharia — spanning REST APIs,
              web portals, ERP integrations and desktop automation tools. Every system here is live and
              actively used by the company.
            </motion.p>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {PROJECT_STATS.map(({ value, label, icon }, i) => (
                <Reveal key={label} delay={0.6 + i * 0.06}>
                  <div className="border border-cyan-900/30 bg-[#0a1219] p-4 text-center hover:border-cyan-700/50 transition-colors">
                    <span className="text-xl block mb-1">{icon}</span>
                    <p className="font-bold text-xl text-cyan-400 tabular-nums">{value}</p>
                    <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mt-0.5">{label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── FILTERS ── */}
        <div className="sticky top-16 z-30 bg-[#050a0e]/90 backdrop-blur-xl border-y border-cyan-900/20 px-6 md:px-10 py-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <motion.button key={cat}
                  onClick={() => { setCategory(cat); sound.click(); }}
                  whileHover={{ y: -1 }} whileTap={{ scale: 0.96 }}
                  className={`font-mono text-xs px-3 py-1.5 border transition-all tracking-widest ${
                    category === cat
                      ? "bg-cyan-400 text-[#050a0e] border-cyan-400 font-bold"
                      : "border-cyan-900/40 text-gray-500 hover:border-cyan-600 hover:text-cyan-400"
                  }`}
                  data-hover
                >
                  {cat === "All" ? `ALL (${PROJECTS_DATA.length})` : cat}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search systems, tech..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="bg-[#0a1219] border border-cyan-900/30 focus:border-cyan-600 outline-none font-mono text-xs text-gray-300 px-3 py-1.5 w-56 transition-colors placeholder-gray-700"
              />
              {search && (
                <button onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-cyan-400 font-mono text-xs"
                >✕</button>
              )}
            </div>
          </div>
        </div>

        {/* ── GRID ── */}
        <section className="px-6 md:px-10 max-w-6xl mx-auto py-12">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div key={category + search}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} onSelect={setSelected} />
                ))}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-center py-20 font-mono text-gray-600"
              >
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-sm">No systems found for "<span className="text-cyan-700">{search}</span>"</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Result count */}
          {filtered.length > 0 && (
            <p className="font-mono text-xs text-gray-700 text-center mt-8">
              Showing <span className="text-cyan-700">{filtered.length}</span> of {PROJECTS_DATA.length} systems
            </p>
          )}
        </section>

        {/* ── COMPANY CONTEXT ── */}
        <section className="px-6 md:px-10 max-w-6xl mx-auto pb-20">
          <div className="border border-cyan-900/30 bg-[#0a1219] p-8 md:p-12 relative overflow-hidden">
            <motion.div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-cyan-400/3 to-transparent"
              animate={{ x: ["-10%", "110%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3">// Context</p>
                <h3 className="font-bold text-white text-2xl mb-4">MIP Engenharia</h3>
                <p className="font-mono text-sm text-gray-400 leading-loose">
                  MIP Engenharia is a large Brazilian engineering and construction company operating
                  across multiple states. All 16 systems listed here were designed, architected and built
                  entirely by Walid Marghata as the sole responsible developer — integrating with TOTVS ERP,
                  Microsoft infrastructure, Power BI and multiple third-party platforms.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "TOTVS ERP",       icon: "🔗" },
                  { label: "Power BI",         icon: "📊" },
                  { label: "Active Directory", icon: "👤" },
                  { label: "Office 365",       icon: "📧" },
                  { label: "FLUIG",            icon: "⚙️" },
                  { label: "Azure",            icon: "☁️" },
                ].map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-2 border border-cyan-900/20 px-3 py-2 font-mono text-xs text-gray-500">
                    <span>{icon}</span><span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-cyan-900/20 py-6 px-10 flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-gray-700">
        <span>© 2026 Walid Marghata</span>
        <Link href="/" className="hover:text-cyan-400 transition-colors">← Back to Portfolio</Link>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
