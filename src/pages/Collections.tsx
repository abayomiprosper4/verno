import { motion } from "framer-motion";
import { fadeInUpVariant } from "@/lib/animations";
import { SidePanel } from "@/components/SidePanel";
import { BottomStrip } from "@/components/BottomStrip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { products, collections, categories, getProductsByCollection, getProductsByCategory } from "@/data/products";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Collections = () => {
  const workCollection = getProductsByCollection("work");
  const otherCollections = collections.filter(c => c.id !== "work");

  return (
    <main className="relative w-full bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 py-32">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center max-w-5xl"
        >
          <h1 className="text-7xl md:text-8xl font-bold text-foreground leading-tight mb-8">
            The Work Collection
          </h1>
          
          {/* Featured Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {workCollection.slice(0, 4).map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>

          <Button size="lg" className="text-base px-8 py-6">
            View Full Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>

      {/* Other Collections */}
      <section className="px-8 py-24 bg-card/30">
        <motion.h2
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-5xl font-bold text-foreground mb-16 text-center"
        >
          Explore Collections
        </motion.h2>

        <div className="max-w-7xl mx-auto space-y-20">
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
                className="space-y-6"
              >
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{collection.name}</h3>
                    <p className="text-text-secondary">{collection.description}</p>
                  </div>
                  <Button variant="outline" size="lg">
                    View Full Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
      <section className="py-24 space-y-16">
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
              className="space-y-6"
            >
              <div className="px-8 flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{category.name}</h3>
                  <p className="text-text-secondary">{category.description}</p>
                </div>
              </div>

              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex gap-4 px-8 pb-4">
                  {categoryProducts.map((product) => (
                    <div key={product.id} className="inline-block w-64">
                      <ProductCard product={product} horizontal />
                    </div>
                  ))}
                  <div className="inline-flex items-center justify-center w-64 h-80 bg-card/50 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer group">
                    <div className="text-center">
                      <p className="text-lg font-medium text-foreground mb-2">See More</p>
                      <ArrowRight className="mx-auto h-6 w-6 text-primary group-hover:translate-x-1 transition-transform" />
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
      <section className="py-24 px-8 text-center bg-card/30">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Browse Everything
          </h2>
          <p className="text-text-secondary mb-8 text-lg">
            Explore our complete catalog of minimalist bags and accessories
          </p>
          <Button size="lg" variant="outline" className="text-base px-12 py-6">
            View All Items
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>

      <SidePanel number="/06" title="Collections" />
      <BottomStrip />
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
      <div className={`relative overflow-hidden rounded-lg bg-card ${horizontal ? 'h-80' : 'aspect-square'}`}>
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
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h4 className="text-xl font-semibold text-foreground mb-2">
            {product.name}
          </h4>
          <p className="text-primary font-medium text-lg">
            ${product.price}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

