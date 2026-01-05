import { motion, AnimatePresence } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { products, collections, categories, getProductsByCollection, getProductsByCategory } from "@/data/products";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export const Collections = () => {
  const [activeTab, setActiveTab] = useState<"trending" | "newest">("trending");
  const [featuredIndex, setFeaturedIndex] = useState(1);
  const workCollection = getProductsByCollection("work");
  const travelCollection = getProductsByCollection("travel");
  
  const tabProducts = activeTab === "trending" 
    ? getProductsByCategory("trending") 
    : getProductsByCategory("newest");

  const featuredProducts = [...workCollection, ...travelCollection].slice(0, 5);

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <main className="relative w-full bg-background">
      {/* Hero Section - Dark & Dramatic */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-20 bg-gradient-to-b from-background via-card to-background overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4 block">
            Featured Collection
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.1] tracking-tight">
            Discover the
            <br />
            <span className="italic font-light">finest</span> pieces
          </h1>
        </motion.div>

        {/* Featured Carousel */}
        <div className="relative w-full max-w-6xl mx-auto mt-8">
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 h-[300px] sm:h-[380px] md:h-[450px]">
            {featuredProducts.map((product, idx) => {
              const offset = idx - featuredIndex;
              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;
              
              if (!isVisible) return null;

              return (
                <motion.div
                  key={product.id}
                  animate={{
                    x: offset * (window.innerWidth < 640 ? 100 : window.innerWidth < 768 ? 140 : 200),
                    scale: isCenter ? 1 : 0.75,
                    opacity: isCenter ? 1 : 0.4,
                    zIndex: isCenter ? 10 : 5 - Math.abs(offset),
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute cursor-pointer"
                  onClick={() => setFeaturedIndex(idx)}
                >
                  <div className={`relative overflow-hidden rounded-xl ${isCenter ? 'shadow-2xl shadow-primary/20' : 'shadow-lg'}`}>
                    <div className={`${isCenter ? 'w-48 h-64 sm:w-64 sm:h-80 md:w-80 md:h-96' : 'w-36 h-48 sm:w-48 sm:h-64 md:w-56 md:h-72'}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {isCenter && (
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                          <span className="bg-primary text-primary-foreground text-[10px] sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-6 sm:mt-8">
            <button
              onClick={prevFeatured}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-card hover:border-primary/50 transition-all"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            </button>
            <span className="text-sm text-muted-foreground">
              {featuredIndex + 1} / {featuredProducts.length}
            </span>
            <button
              onClick={nextFeatured}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-card hover:border-primary/50 transition-all"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            </button>
          </div>

          {/* Current Product Info */}
          <motion.div
            key={featuredIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mt-6 sm:mt-8"
          >
            <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mb-2">
              {collections.find(c => c.id === featuredProducts[featuredIndex]?.collection)?.name}
            </p>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl italic text-foreground">
              {featuredProducts[featuredIndex]?.name}
            </h3>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm text-muted-foreground mt-12 sm:mt-16 animate-pulse"
        >
          Scroll to explore all collections
        </motion.p>
      </section>

      {/* Trending Section with Tabs */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Trending <span className="italic">Now</span>
            </h2>
            
            {/* Tabs */}
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <button
                onClick={() => setActiveTab("trending")}
                className={`text-xs sm:text-sm uppercase tracking-widest pb-2 border-b-2 transition-all ${
                  activeTab === "trending" 
                    ? "text-foreground border-primary" 
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                Popular Picks
              </button>
              <button
                onClick={() => setActiveTab("newest")}
                className={`text-xs sm:text-sm uppercase tracking-widest pb-2 border-b-2 transition-all ${
                  activeTab === "newest" 
                    ? "text-foreground border-primary" 
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                New Arrivals
              </button>
            </div>
          </motion.div>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {tabProducts.slice(0, 8).map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground text-center mb-10 sm:mb-14">
            Shop by <span className="italic">Category</span>
          </h2>

          <ScrollArea className="w-full">
            <div className="flex gap-4 sm:gap-5 pb-4">
              {collections.map((collection, idx) => {
                const collectionProducts = getProductsByCollection(collection.id);
                const featuredImage = collectionProducts[0]?.image;
                
                return (
                  <motion.div
                    key={collection.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-40 sm:w-48 md:w-56 group cursor-pointer"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-3 sm:mb-4">
                      <img
                        src={featuredImage}
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <h3 className="text-sm sm:text-base font-medium text-foreground">
                          {collection.name}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 line-clamp-2">
                          {collection.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* View All Card */}
              <div className="flex-shrink-0 w-40 sm:w-48 md:w-56">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border/50 bg-card/50 flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
                  <div className="text-center">
                    <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 group-hover:translate-x-1 transition-transform" />
                    <p className="text-xs sm:text-sm font-medium text-foreground">View All</p>
                  </div>
                </div>
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </motion.div>
      </section>

      {/* All Collections Grid */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground text-center mb-10 sm:mb-14"
          >
            Explore <span className="italic">Collections</span>
          </motion.h2>

          <div className="space-y-16 sm:space-y-20">
            {collections.map((collection, idx) => {
              const collectionProducts = getProductsByCollection(collection.id);
              return (
                <motion.div
                  key={collection.id}
                  variants={fadeInUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6 sm:mb-8">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-primary font-medium">Collection</span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-foreground mt-1">{collection.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{collection.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto group">
                      View All
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {collectionProducts.slice(0, 4).map((product, pIdx) => (
                      <ProductCard key={product.id} product={product} index={pIdx} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 text-center">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium block mb-4">
            Complete Catalog
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
            Browse <span className="italic">Everything</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 max-w-md mx-auto">
            Explore our complete catalog of minimalist bags and accessories designed for modern living.
          </p>
          <Button size="lg" className="text-sm sm:text-base px-8 sm:px-12">
            View All Items
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </motion.div>
      </section>
    </main>
  );
};

interface ProductCardProps {
  product: any;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-card mb-3 sm:mb-4">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick View Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4"
        >
          <button className="w-full py-2 sm:py-2.5 bg-foreground/90 text-background text-xs sm:text-sm font-medium rounded-lg hover:bg-foreground transition-colors">
            Quick View
          </button>
        </motion.div>
      </div>
      
      {/* Product Info - Always visible below card */}
      <div className="space-y-1">
        <h4 className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h4>
        <p className="text-sm sm:text-base text-muted-foreground">
          ${product.price}
        </p>
      </div>
    </motion.div>
  );
};
