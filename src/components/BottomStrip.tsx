import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";

interface BottomStripItem {
  title: string;
  subtitle?: string;
  date?: string;
  image?: string;
}

interface BottomStripProps {
  eventsData?: BottomStripItem[];
  newsData?: BottomStripItem;
  centerImage?: string;
}

export const BottomStrip = ({ 
  eventsData = [
    { title: "Pop-up @ Stevens Alan Furniture", date: "SF - Sat, August 12 / 2-6PM" },
    { title: "Pop-up @ Stevens Alan Brooklyn", date: "NYC - Sat, August 13 / 2-6PM" }
  ],
  newsData = { 
    title: "A fresh take on our Active Collection.", 
    subtitle: "Just in time for spring. Available in black.",
    date: "Read More"
  },
  centerImage
}: BottomStripProps) => {
  return (
    <motion.div
      variants={fadeInUpVariant}
      initial="hidden"
      animate="visible"
      custom={10}
      className="fixed bottom-0 left-0 right-0 z-20 px-8 py-3 my-5 flex items-end justify-between gap-8 bg-background/40 backdrop-blur-md border-t border-border/20"
    >
      {/* Events Section */}
      <div className="flex-1 space-y-3">
        <h3 className="text-xs tracking-widest text-text-muted uppercase">Events</h3>
        <div className="space-y-3">
          {eventsData.map((event, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                {event.title}
              </p>
              <p className="text-xs text-text-secondary">{event.date}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
        </div>
      </div>

      {/* Center Image */}
      {centerImage && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-32 h-32 bg-muted rounded overflow-hidden"
        >
          <img 
            src={centerImage} 
            alt="Featured content" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      {/* News Section */}
      <div className="flex-1 space-y-4">
        <h3 className="text-xs tracking-widest text-text-muted uppercase">News</h3>
        <motion.div
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer group"
        >
          <p className="text-sm text-foreground group-hover:text-primary transition-colors leading-relaxed max-w-xs">
            {newsData.title}
          </p>
          {newsData.subtitle && (
            <p className="text-xs text-text-secondary mt-2">{newsData.subtitle}</p>
          )}
          <p className="text-xs text-primary mt-3 underline">{newsData.date}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
