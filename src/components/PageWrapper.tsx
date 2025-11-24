import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { pageTransitionVariants } from "@/lib/animations";

interface PageWrapperProps {
  children: ReactNode;
  pageKey: string;
  direction: number;
}

export const PageWrapper = ({ children, pageKey, direction }: PageWrapperProps) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={pageKey}
        custom={direction}
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute inset-0 w-full h-full"
        style={{ 
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
