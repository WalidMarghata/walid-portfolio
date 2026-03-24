"use client";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  tag: string;
  title: string;
  accent: string;
}

export default function SectionHeader({ tag, title, accent }: SectionHeaderProps) {
  return (
    <Reveal className="mb-16">
      <p className="font-mono text-cyan-400 text-xs tracking-[0.35em] uppercase mb-3 flex items-center gap-3">
        <span className="text-gray-700">// </span>{tag}
      </p>
      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
        {title}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          {accent}
        </span>
      </h2>
    </Reveal>
  );
}
