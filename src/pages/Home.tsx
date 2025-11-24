import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpeg";
import { heroImageVariant, fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { BottomStrip } from "@/components/BottomStrip";

export const Home = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gradient-dark-start to-gradient-dark-end">
      {/* Hero Image */}
      <motion.div
        variants={heroImageVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full max-w-5xl">
          <img
            src={heroImage}
            alt="Person in black hoodie representing modern professional"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[85vh] w-auto object-contain opacity-90"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-overlay-dark/60 via-transparent to-overlay-dark/80" />
        </div>
      </motion.div>

      {/* Hero Text */}
      <motion.div
        variants={fadeInUpVariant}
        initial="hidden"
        animate="visible"
        custom={2}
        className="absolute right-[10%] top-1/2 -translate-y-1/2 z-30 max-w-xl"
      >
        <h1 className="text-7xl font-bold text-foreground leading-tight mb-6">
          Work<br />Anywhere
        </h1>
        <p className="text-sm text-text-secondary leading-relaxed max-w-md">
          Introducing the Work Collection: a line of minimalist bags designed for a new generation, specifically for the modern professional.
        </p>
      </motion.div>

      {/* Side Panel */}
      <SidePanel number="/01" title="Work Collection" />

      {/* Bottom Strip */}
      <BottomStrip />
    </main>
  );
};
