import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { BottomStrip } from "@/components/BottomStrip";
import { MapPin } from "lucide-react";

export const Locations = () => {
  const locations = [
    { city: "San Francisco", address: "123 Market Street" },
    { city: "New York", address: "456 Broadway" },
    { city: "Los Angeles", address: "789 Venice Blvd" },
  ];

  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end">
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center max-w-3xl px-4 sm:px-6 md:px-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 md:mb-8">
            Our Locations
          </h1>
          <div className="grid gap-4 md:gap-6 mt-8 md:mt-12">
            {locations.map((location, idx) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ scale: 1.03, x: 4 }}
                className="flex items-center justify-center gap-3 md:gap-4 text-left cursor-pointer group"
              >
                <MapPin className="text-primary" size={18} />
                <div>
                  <p className="text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                    {location.city}
                  </p>
                  <p className="text-xs md:text-sm text-text-secondary">{location.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Side Panel - Hidden on mobile */}
      <div className="hidden md:block">
        <SidePanel number="/04" title="Visit Us" />
      </div>
      
      {/* Bottom Strip - Hidden on mobile */}
      <div className="hidden md:block">
        <BottomStrip />
      </div>
    </main>
  );
};
