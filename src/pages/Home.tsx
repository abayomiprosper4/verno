import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { BottomStrip } from "@/components/BottomStrip";
import { TypewriterText } from "@/components/TypewriterText";

export const Home = () => {
  return (
    <main
      className="
        w-full h-screen relative overflow-hidden 
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: `url(/wiser-by-the-mile-1Frndjy7tkM-unsplash.jpg)`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/90 md:bg-black/90"></div>

      {/* Hero Content */}
      <div
        className="
          absolute inset-0 z-10 
          flex flex-col items-center justify-center 
          text-center px-6
          md:items-end md:text-right md:px-16 md:justify-start md:top-1/4
        "
      >
        <h1
          className="
            font-bold leading-tight mb-4
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-black/80
          "
        >
          <TypewriterText text="Style" delay={300} speed={100} />
          <br />
          <span className="font-orbitron text-primary font-extrabold tracking-wide">
            <TypewriterText text="Upgraded." delay={900} speed={100} />
          </span>
        </h1> 

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="
            text-base sm:text-lg text-black/60 leading-relaxed 
            max-w-md md:max-w-lg
            md:ml-auto
          "
        >
          Introducing the Work Collection: a line of minimalist bags designed
          for a new generation, specifically for the modern professional.
        </motion.p>
      </div>

      {/* Desktop-only SidePanel */}
      <div className="hidden md:block">
        <SidePanel number="/01" title="Work Collection" />
      </div>

      {/* Desktop-only BottomStrip */}
      <div className="hidden md:block">
        <BottomStrip />
      </div>
    </main>
  );
};
