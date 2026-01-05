import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useState } from "react";

interface ProductDetailPanelProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const colorVariants = [
  { name: "Black", value: "#1a1a1a" },
  { name: "Brown", value: "#8B4513" },
  { name: "Navy", value: "#1a2b4a" },
  { name: "Tan", value: "#D2B48C" },
];

export const ProductDetailPanel = ({ product, isOpen, onClose }: ProductDetailPanelProps) => {
  const [selectedColor, setSelectedColor] = useState(colorVariants[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-xl bg-card border-l border-border shadow-2xl overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Close panel"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex flex-col h-full">
              {/* Product Image */}
              <div className="relative aspect-square w-full bg-background">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Product Details */}
              <div className="flex-1 p-6 sm:p-8 space-y-6">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <span className="text-xs uppercase tracking-widest text-primary font-medium">
                    {product.collection} Collection
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-foreground mt-2">
                    {product.name}
                  </h2>
                  <p className="text-2xl sm:text-3xl font-light text-foreground mt-3">
                    ${product.price}
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                >
                  Crafted with precision and designed for the modern individual. 
                  This piece combines timeless elegance with practical functionality, 
                  featuring premium materials and meticulous attention to detail.
                </motion.p>

                {/* Color Selector */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Color</span>
                    <span className="text-sm text-muted-foreground">{selectedColor.name}</span>
                  </div>
                  <div className="flex gap-3">
                    {colorVariants.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          selectedColor.name === color.name
                            ? "border-primary scale-110"
                            : "border-transparent hover:scale-105"
                        }`}
                        style={{ backgroundColor: color.value }}
                        aria-label={`Select ${color.name}`}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Quantity Selector */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3"
                >
                  <span className="text-sm font-medium text-foreground">Quantity</span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-lg font-medium text-foreground w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>

                {/* Add to Cart Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="pt-4"
                >
                  <Button size="lg" className="w-full text-base">
                    Add to Cart — ${product.price * quantity}
                  </Button>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 border-t border-border space-y-3"
                >
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Free shipping on orders over $100
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    30-day return policy
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    2-year warranty included
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
