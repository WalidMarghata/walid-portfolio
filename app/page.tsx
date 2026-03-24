"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LocaleProvider } from "@/lib/LocaleContext";

// UI
import CustomCursor    from "@/components/ui/CustomCursor";
import ThreeBackground from "@/components/ui/ThreeBackground";

// Sections
import Loader       from "@/components/sections/Loader";
import Navbar       from "@/components/sections/Navbar";
import Hero         from "@/components/sections/Hero";
import Metrics      from "@/components/sections/Metrics";
import About        from "@/components/sections/About";
import Skills       from "@/components/sections/Skills";
import Projects     from "@/components/sections/Projects";
import ParallaxBand from "@/components/sections/ParallaxBand";
import Experience   from "@/components/sections/Experience";
import Education    from "@/components/sections/Education";
import Contact      from "@/components/sections/Contact";
import Footer       from "@/components/sections/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <LocaleProvider>
      <div className="bg-[#050a0e] text-white min-h-screen">
        <AnimatePresence>
          {!loaded && <Loader onFinish={() => setLoaded(true)} />}
        </AnimatePresence>

        {loaded && (
          <>
            <ThreeBackground />
            <CustomCursor />
            <Navbar delay={0.2} />

            <main className="relative z-10">
              <Hero />
              <Metrics />
              <About />
              <Skills />
              <Projects />
              <ParallaxBand />
              <Experience />
              <Education />
              <Contact />
            </main>

            <Footer />
          </>
        )}
      </div>
    </LocaleProvider>
  );
}
