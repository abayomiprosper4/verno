import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { BottomStrip } from "@/components/BottomStrip";
import { TypewriterText } from "@/components/TypewriterText";
import { heroImages } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const Home = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <main className="w-full h-screen relative overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 pointer-events-none">
        <Carousel
          opts={{ loop: true }}
          plugins={[plugin.current]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full -ml-0">
            {heroImages.map((image) => (
              <CarouselItem key={image.id} className="h-full pl-0">
                <div
                  className="w-full h-screen bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image.src})` }}
                  aria-label={image.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/80 md:bg-white/70 pointer-events-none"></div>

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
