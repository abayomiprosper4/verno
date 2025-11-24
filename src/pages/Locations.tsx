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
          className="text-center max-w-3xl px-8"
        >
          <h1 className="text-7xl font-bold text-foreground leading-tight mb-8">
            Our Locations
          </h1>
          <div className="grid gap-6 mt-12">
            {locations.map((location, idx) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ scale: 1.03, x: 4 }}
                className="flex items-center justify-center gap-4 text-left cursor-pointer group"
              >
                <MapPin className="text-primary" size={20} />
                <div>
                  <p className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {location.city}
                  </p>
                  <p className="text-sm text-text-secondary">{location.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <SidePanel number="/04" title="Visit Us" />
      <BottomStrip />
    </main>
  );
};
