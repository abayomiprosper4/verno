import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { Compass, Layers, Zap } from "lucide-react";

const highlights = [
  { text: "Minimalist Design" },
  { text: "Modern Utility" },
  { text: "Built for Everyday Use" },
];

const processSteps = [
  { number: "01", title: "Ideate", icon: Compass },
  { number: "02", title: "Refine", icon: Layers },
  { number: "03", title: "Craft", icon: Zap },
];

export const About = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-400">
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-5xl">
          {/* Main Heading */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-center mb-6 md:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black/75 leading-tight mb-3 md:mb-4">
              About Verno
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-black/60 leading-relaxed max-w-2xl mx-auto">
              We create minimalist accessories that bridge the gap between style and utility, built for those who move through their day with purpose.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-center mb-6 md:mb-8"
          >
            <h2 className="text-xs sm:text-sm font-semibold text-black/40 uppercase tracking-widest mb-2">
              Our Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-black/55 max-w-xl mx-auto leading-relaxed">
              Less noise, more intention. Every piece we design starts with a single question: does this add value to your daily rhythm?
            </p>
          </motion.div>

          {/* Highlights Row */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={2}
            className="flex justify-center items-center gap-4 sm:gap-6 md:gap-10 mb-6 md:mb-8"
          >
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-4 md:gap-6">
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-black/70 tracking-wide">
                  {item.text}
                </span>
                {index < highlights.length - 1 && (
                  <span className="text-black/20 text-xs">•</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Craftsmanship Note */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-center mb-6 md:mb-8"
          >
            <p className="text-[10px] sm:text-xs text-black/45 italic max-w-md mx-auto">
              Every stitch, seam, and surface is considered — because craftsmanship is in the details.
            </p>
          </motion.div>

          {/* How We Create Process */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={4}
            className="text-center"
          >
            <h2 className="text-xs sm:text-sm font-semibold text-black/40 uppercase tracking-widest mb-4">
              How We Create
            </h2>
            <div className="flex justify-center items-center gap-6 sm:gap-10 md:gap-16">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center gap-1.5 sm:gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-black/15 flex items-center justify-center bg-white/30 backdrop-blur-sm">
                    <step.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black/50" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-black/60 tracking-wide">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Panel - Hidden on mobile */}
      <div className="hidden md:block">
        <SidePanel number="/03" title="Our Story" />
      </div>
    </main>
  );
};
