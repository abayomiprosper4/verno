import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { BottomStrip } from "@/components/BottomStrip";

export const Products = () => {
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
          <h1 className="text-7xl font-bold text-foreground leading-tight mb-6">
            Our Products
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Explore our curated collection of minimalist bags and accessories. Each piece is thoughtfully designed to balance form and function for the modern professional.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded text-sm font-medium transition-all"
          >
            View Collection
          </motion.button>
        </motion.div>
      </div>

      <SidePanel number="/02" title="Product Range" />
      <BottomStrip />
    </main>
  );
};
