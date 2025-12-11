import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";


export const Cart = () => {
  const navigate = useNavigate();

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
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 md:mb-8 flex justify-center"
          >
            <ShoppingBag className="text-primary" size={48} />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4 md:mb-6">
            Your Cart
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed px-2">
            Your cart is currently empty! Start shopping to add items to your collection.
          </p>
          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.88 }}
            onClick={() => navigate('/collections')}
            className="mt-6 md:mt-8 px-6 md:px-8 py-3 bg-primary text-primary-foreground rounded text-sm font-medium transition-all"
          >
            Start Shopping
          </motion.button>
        </motion.div>
      </div>

      {/* Side Panel - Hidden on mobile */}
      <div className="hidden md:block">
        <SidePanel number="/05" title="Shopping Cart" />
      </div>
    </main>
  );
};
