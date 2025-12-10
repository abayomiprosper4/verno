import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { fadeInUpVariant, ANIMATION_CONFIG } from "@/lib/animations";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Locations", path: "/locations" },
  { label: "Cart", path: "/cart" },
];

interface NavbarProps {
  activePath: string;
  onNavigate: (path: string) => void;
}

export const Navbar = ({ activePath, onNavigate }: NavbarProps) => {
  const activeIndex = NAV_ITEMS.findIndex(item => item.path === activePath);
  
  return (
    <motion.nav
      variants={fadeInUpVariant}
      initial="hidden"
      animate="visible"
      custom={0}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 flex items-center justify-between"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-black tracking-tight">
        <img src="src/assets/revv-10-logo.png" alt="Revv 10 Logo" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-8 relative">
        {NAV_ITEMS.map((item, index) => (
          <button
            key={item.path}
            onClick={() => onNavigate(item.path)}
            className="relative text-xs sm:text-sm font-bold text-gray-600 hover:text-primary transition-colors duration-200 py-1 sm:py-2 group"
            aria-current={activePath === item.path ? "page" : undefined}
          >
            <motion.span
              whileHover={{ y: ANIMATION_CONFIG.HOVER_LIFT_Y }}
              transition={{ duration: ANIMATION_CONFIG.HOVER_DURATION / 1000 }}
              className="block"
            >
              {item.label}
            </motion.span>
            
            {/* Active underline */}
            {activePath === item.path && (
              <motion.div
                layoutId="navbar-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{
                  duration: ANIMATION_CONFIG.UNDERLINE_DURATION / 1000,
                  ease: ANIMATION_CONFIG.UNDERLINE_EASE,
                }}
              />
            )}
          </button>
        ))}

        {/* Search Icon */}
        <button 
          className="text-gray-600 hover:text-primary transition-colors ml-2 sm:ml-4"
          aria-label="Search"
        >
          <Search size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>
      </div>
    </motion.nav>
  );
};
