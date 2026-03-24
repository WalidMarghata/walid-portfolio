"use client";
import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [g, setG] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setG(true);
      setTimeout(() => setG(false), 130);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {g && (
        <>
          <span className="absolute inset-0 text-red-400/50 translate-x-[3px] -translate-y-px pointer-events-none">
            {text}
          </span>
          <span className="absolute inset-0 text-blue-400/50 -translate-x-[3px] translate-y-px pointer-events-none">
            {text}
          </span>
        </>
      )}
    </span>
  );
}
