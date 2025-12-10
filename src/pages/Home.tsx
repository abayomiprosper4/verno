import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { BottomStrip } from "@/components/BottomStrip";
import { TypewriterText } from "@/components/TypewriterText";

export const Home = () => {
  return (
    <main className="w-full absolute overflow-hidden bg-hero-bg bg-cover bg-center h-screen"  style={{ backgroundImage: `url(/wiser-by-the-mile-1Frndjy7tkM-unsplash.jpg)` }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Hero Text - Right aligned */}
      <div className="absolute right-4 sm:right-8 md:right-16 lg:right-24 mt-28 md:top-1/4 -translate-y-1/2 z-10 text-right px-4 sm:px-6 max-w-xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black/75 leading-tight mb-2 text-center">
          <TypewriterText text="Style" delay={300} speed={100} />
          <br />
          <span className="font-orbitron tracking-wide">
            <TypewriterText text="Upgraded." delay={900} speed={100} />
          </span>
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-sm sm:text-base text-black/60 leading-relaxed max-w-lg ml-auto px-4"
        >
          Introducing the Work Collection: a line of minimalist bags designed for a new generation, specifically for the modern professional.
        </motion.p>
      </div>

      {/* Side Panel - Hidden on mobile */}
      <div className="hidden md:block">
        <SidePanel number="/01" title="Work Collection" />
      </div>

      {/* Bottom Strip - Hidden on mobile */}
      <div className="hidden md:block">
        <BottomStrip />
      </div>
    </main>
  );
};