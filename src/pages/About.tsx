import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";

export const About = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center max-w-3xl px-4 sm:px-6 md:px-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black/75 leading-tight mb-4 md:mb-6">
            About Verno
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-black/60 leading-relaxed px-2">
            At Verno, We strive to design products tailored for the way you work today. We create minimalist accessories that bridge the gap between style and utility, built for those who move through their day with purpose.
          </p>
        </motion.div>
      </div>

      {/* Side Panel - Hidden on mobile */}
      <div className="hidden md:block">
        <SidePanel number="/03" title="Our Story" />
      </div>
    </main>
  );
};
