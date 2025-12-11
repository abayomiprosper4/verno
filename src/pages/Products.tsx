import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();

  return (
    <main className="relative w-full overflow-hidden bg-hero-bg-2 bg-cover bg-center h-screen">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center max-w-3xl px-4 sm:px-6 md:px-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4 md:mb-6">
            Our Products
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed px-2">
            Explore our curated collection of bags and accessories. Each piece is thoughtfully designed to balance form and function for the modern professional.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg"
              onClick={() => navigate('/collections')}
              className="mt-6 md:mt-8"
            >
              View Collection
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Side Panel - Hidden on mobile */}
      <div className="hidden md:block">
        <SidePanel number="/02" title="Product Range" />
      </div>
    </main>
  );
};
