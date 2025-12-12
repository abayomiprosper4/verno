import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { products, collections, categories, getProductsByCollection, getProductsByCategory } from "@/data/products";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";

export const Collections = () => {
  const workCollection = getProductsByCollection("work");
  const otherCollections = collections.filter(c => c.id !== "work");

  return (
    <main className="relative w-full bg-gradient-to-br from-slate-400 via-slate-800 to-slate-400">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center max-w-5xl w-full"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-foreground leading-tight mb-4 sm:mb-6 md:mb-8">
              <TypewriterText text="The Work Collection." delay={600} speed={90} />
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3 }}
              className="my-4 sm:my-5 md:my-7 font-sans tracking-widest text-xs sm:text-sm px-2"
            >
              Minimalist Accessories designed for modern professionals. The Work Collection - Dress with style and purpose.
            </motion.p>
          </div>
          
          {/* Featured Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto">
            {workCollection.slice(0, 4).map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>

          <Button size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6">
            View Full Collection
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </motion.div>
      </section>

      {/* Other Collections */}
      <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 bg-card/30">
        <motion.h2
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-10 sm:mb-12 md:mb-16 text-center"
        >
          Explore Collections
        </motion.h2>

        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
          {otherCollections.map((collection, idx) => {
            const collectionProducts = getProductsByCollection(collection.id);
            return (
              <motion.div
                key={collection.id}
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="space-y-4 sm:space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{collection.name}</h3>
                    <p className="text-sm sm:text-base text-text-secondary">{collection.description}</p>
                  </div>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View Full Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {collectionProducts.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Horizontal Category Lists */}
      <section className="py-16 sm:py-20 md:py-24 space-y-10 sm:space-y-12 md:space-y-16">
        {categories.map((category, idx) => {
          const categoryProducts = getProductsByCategory(category.id);
          if (categoryProducts.length === 0) return null;

          return (
            <motion.div
              key={category.id}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              className="space-y-4 sm:space-y-6"
            >
              <div className="px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">{category.name}</h3>
                  <p className="text-sm sm:text-base text-text-secondary">{category.description}</p>
                </div>
              </div>

              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 pb-4">
                  {categoryProducts.map((product) => (
                    <div key={product.id} className="inline-block w-48 sm:w-56 md:w-64">
                      <ProductCard product={product} horizontal />
                    </div>
                  ))}
                  <div className="inline-flex items-center justify-center w-48 sm:w-56 md:w-64 h-64 sm:h-72 md:h-80 bg-card/50 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer group">
                    <div className="text-center">
                      <p className="text-base sm:text-lg font-medium text-foreground mb-2">See More</p>
                      <ArrowRight className="mx-auto h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </motion.div>
          );
        })}
      </section>

      {/* All Items CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 text-center bg-card/30">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Browse Everything
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-6 sm:mb-8">
            Explore our complete catalog of minimalist bags and accessories
          </p>
          <Button size="lg" variant="outline" className="text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-6">
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
  horizontal?: boolean;
}

const ProductCard = ({ product, index = 0, horizontal = false }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUpVariant}
      initial="hidden"
      animate="visible"
      custom={index}
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden rounded-lg bg-card ${horizontal ? 'h-64 sm:h-72 md:h-80' : 'aspect-square'}`}>
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? "brightness(0.6)" : "brightness(1)",
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-4"
        >
          <h4 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1 sm:mb-2">
            {product.name}
          </h4>
          <p className="text-primary font-medium text-base sm:text-lg">
            ${product.price}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

