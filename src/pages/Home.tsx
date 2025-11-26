import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { BottomStrip } from "@/components/BottomStrip";
export const Home = () => {
  return <main className="w-full absolute overflow-hidden bg-hero-bg bg-cover bg-center h-screen">
      
        {/* Background overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Text - Centered */}
      <motion.div variants={fadeInUpVariant} initial="hidden" animate="visible" custom={1} className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h1 className="text-8xl font-bold text-foreground leading-tight mb-2 text-center">
          Work
        <br /><span className="font-orbitron tracking-wide">​Anywhere.</span>
        </h1>
        <p className="text-base text-text-secondary leading-relaxed max-w-lg mx-auto">
          Introducing the Work Collection: a line of minimalist bags designed for a new generation, specifically for the modern professional.
        </p>
      </motion.div>

      {/* Side Panel */}
      <SidePanel number="/01" title="Work Collection" />

      {/* Bottom Strip */}
      <BottomStrip />
    </main>;
};