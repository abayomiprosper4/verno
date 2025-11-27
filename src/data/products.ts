export interface Product {
  id: string;
  name: string;
  collection: string;
  category: string[];
  image: string;
  price: number;
}

export const products: Product[] = [
  // Work Collection - Bags
  { id: "1", name: "Executive Briefcase", collection: "work", category: ["trending", "luxury"], image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", price: 450 },
  { id: "2", name: "Commuter Backpack", collection: "work", category: ["newest", "trending"], image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=400&fit=crop", price: 320 },
  { id: "3", name: "Minimalist Tote", collection: "work", category: ["bestseller"], image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop", price: 280 },
  { id: "4", name: "Laptop Sleeve Pro", collection: "work", category: ["newest"], image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=400&h=400&fit=crop", price: 95 },
  
  // Travel Collection
  { id: "5", name: "Weekend Duffle", collection: "travel", category: ["trending", "bestseller"], image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&sat=-50", price: 380 },
  { id: "6", name: "Carry-On Roller", collection: "travel", category: ["luxury", "newest"], image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop", price: 520 },
  { id: "7", name: "Travel Organizer Set", collection: "travel", category: ["bestseller"], image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&h=400&fit=crop", price: 150 },
  { id: "8", name: "Passport Holder", collection: "travel", category: ["newest"], image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=400&fit=crop", price: 65 },

  // Tech Collection
  { id: "9", name: "Cable Organizer", collection: "tech", category: ["trending"], image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop", price: 45 },
  { id: "10", name: "Tech Pouch", collection: "tech", category: ["newest", "bestseller"], image: "https://images.unsplash.com/photo-1622560481148-d0ad1f5f1e0c?w=400&h=400&fit=crop", price: 85 },
  { id: "11", name: "Wireless Mouse Pad", collection: "tech", category: ["luxury"], image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop", price: 120 },
  { id: "12", name: "Keyboard Case", collection: "tech", category: ["newest"], image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop", price: 95 },

  // Lifestyle Collection
  { id: "13", name: "Gym Duffel", collection: "lifestyle", category: ["trending", "bestseller"], image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400&h=400&fit=crop", price: 180 },
  { id: "14", name: "Yoga Mat Carrier", collection: "lifestyle", category: ["newest"], image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop", price: 75 },
  { id: "15", name: "Water Bottle Holder", collection: "lifestyle", category: ["bestseller"], image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop", price: 40 },
  { id: "16", name: "Meditation Cushion", collection: "lifestyle", category: ["luxury"], image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=400&fit=crop", price: 110 },
];

export const collections = [
  { id: "work", name: "Work Collection", description: "Professional essentials for the modern workspace" },
  { id: "travel", name: "Travel Collection", description: "Sophisticated luggage for global explorers" },
  { id: "tech", name: "Tech Collection", description: "Organized solutions for digital professionals" },
  { id: "lifestyle", name: "Lifestyle Collection", description: "Balanced accessories for wellness and activity" },
];

export const categories = [
  { id: "trending", name: "Trending", description: "Most popular items this month" },
  { id: "newest", name: "Newest", description: "Latest additions to our catalog" },
  { id: "luxury", name: "Luxury", description: "Premium materials and craftsmanship" },
  { id: "bestseller", name: "Best Sellers", description: "Customer favorites" },
  { id: "sustainable", name: "Sustainable", description: "Eco-conscious materials" },
];

export const getProductsByCollection = (collectionId: string) => 
  products.filter(p => p.collection === collectionId);

export const getProductsByCategory = (categoryId: string) => 
  products.filter(p => p.category.includes(categoryId));
