import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { BottomStrip } from "@/components/BottomStrip";
import { TypewriterText } from "@/components/TypewriterText";

export const Home = () => {
  return (
    <main className="w-full absolute overflow-hidden bg-hero-bg bg-cover bg-center h-screen">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Text - Centered */}
      <div className="absolute left-1/2 top-1/3 md:top-1/4 -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4 sm:px-6 w-full max-w-4xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-2 text-center">
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
          className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-lg mx-auto px-4"
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