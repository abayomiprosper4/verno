import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { BottomStrip } from "@/components/BottomStrip";
export const Home = () => {
  return <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end">
      {/* Subtle radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gradient-end/30" />
      
      {/* Hero Text - Centered */}
      <motion.div variants={fadeInUpVariant} initial="hidden" animate="visible" custom={1} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center">
        <h1 className="text-8xl font-bold text-foreground leading-tight mb-6 my-[5px] py-[3px]">
          Work<br />Anywhere
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