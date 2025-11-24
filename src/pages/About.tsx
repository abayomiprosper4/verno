import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { BottomStrip } from "@/components/BottomStrip";

export const About = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gradient-dark-start to-gradient-dark-end">
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center max-w-3xl px-8"
        >
          <h1 className="text-7xl font-bold text-foreground leading-tight mb-6">
            About Aer
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            We design products for the way you work today. Aer creates minimalist bags that bridge the gap between style and utility, built for those who move through their day with purpose.
          </p>
        </motion.div>
      </div>

      <SidePanel number="/03" title="Our Story" />
      <BottomStrip />
    </main>
  );
};
