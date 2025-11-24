import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { BottomStrip } from "@/components/BottomStrip";
import { ShoppingBag } from "lucide-react";

export const Cart = () => {
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
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <ShoppingBag className="text-primary" size={64} />
          </motion.div>
          <h1 className="text-7xl font-bold text-foreground leading-tight mb-6">
            Your Cart
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Your cart is currently empty. Start shopping to add items to your collection.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded text-sm font-medium transition-all"
          >
            Start Shopping
          </motion.button>
        </motion.div>
      </div>

      <SidePanel number="/05" title="Shopping Cart" />
      <BottomStrip />
    </main>
  );
};
