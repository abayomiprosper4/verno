import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
interface SidePanelProps {
  number?: string;
  title?: string;
}
export const SidePanel = ({
  number = "/01",
  title = "Work Collection"
}: SidePanelProps) => {
  return <motion.aside variants={fadeInUpVariant} initial="hidden" animate="visible" custom={7} className="fixed left-8 top-1/2 -translate-y-1/2 z-40" aria-label="Collection information">
      <div className="gap-2 text-text-muted flex-col flex items-start justify-start my-0 py-0">
        <div className="text-xs tracking-wider">{number}</div>
        <div className="w-16 h-px bg-black" />
        <div className="text-xs tracking-wide max-w-[100px] leading-relaxed">
          {title}
        </div>
      </div>
    </motion.aside>;
};