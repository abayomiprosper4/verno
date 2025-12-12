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
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-5xl">
          {/* Main Heading */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-center mb-14 md:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black/75 leading-tight mb-3 md:mb-4">
              About Verno
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-black/60 leading-relaxed max-w-2xl mx-auto">
              We create minimalist accessories that bridge the gap between style and utility, built for those who move through their day with purpose.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            custom={1}
            className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-0"
          >
            {/* Left Column - Philosophy & Highlights */}
            <div className="flex-1 text-center md:pr-8 lg:pr-12">
              <h2 className="text-sm sm:text-base font-semibold text-black/90 uppercase tracking-widest mb-4">
                Our Philosophy
              </h2>
              <p className="text-xs sm:text-sm text-black/65 max-w-sm mx-auto leading-relaxed tracking-widest mb-8 md:mb-10">
                Less noise, more intention. Every piece we design starts with a single question: 
                <p><span className="italic">does this add value to your daily rhythm?</span></p>
              </p>
              <div className="flex justify-center items-center gap-2 sm:gap-3">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[10px] sm:text-sm font-medium text-black/70 tracking-wide">
                      {item.text}
                    </span>
                    {index < highlights.length - 1 && (
                      <span className="text-black/50 text-xs">•</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px bg-black/25 self-stretch min-h-[130px]" />

            {/* Right Column - Craftsmanship & Process */}
            <div className="flex-1 text-center md:pl-8 lg:pl-12">
              <p className="text-[10px] sm:text-sm text-black/55 italic max-w-sm mx-auto mb-4 md:mb-6">
                Every stitch, seam, and surface is considered — because craftsmanship is in the details.
              </p>
              <h2 className="text-xs sm:text-sm font-semibold text-black/70 uppercase tracking-widest mb-4">
                How We Create
              </h2>
              <div className="flex justify-center items-center gap-6 sm:gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center gap-1.5 sm:gap-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black/15 flex items-center justify-center bg-white/30 backdrop-blur-sm">
                      <step.icon className="w-7.5 h-7.5 sm:w-6 sm:h-6 text-black/50" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium text-black/60 tracking-wide">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
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
