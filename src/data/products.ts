export type ProductType = "dropship" | "affiliate";

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  type: ProductType;
  affiliateUrl?: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  features?: string[];
  tags?: string[];
}

export const categories = [
  { id: "electronics", name: "Electronics", icon: "📱" },
  { id: "fashion", name: "Fashion", icon: "👔" },
  { id: "home", name: "Home & Living", icon: "🏠" },
  { id: "fitness", name: "Fitness", icon: "💪" },
  { id: "accessories", name: "Accessories", icon: "⌚" },
];

export const products: Product[] = [
  {
    id: "wireless-earbuds-pro",
    name: "Wireless Earbuds Pro",
    description: "Premium noise-canceling wireless earbuds with crystal-clear audio and 30-hour battery life.",
    longDescription:
      "Experience unparalleled audio quality with our Wireless Earbuds Pro. Featuring advanced noise-canceling technology, these earbuds deliver rich, immersive sound while blocking out distractions. With a sleek, ergonomic design and 30-hour total battery life, they're perfect for all-day use.",
    price: 79.99,
    originalPrice: 129.99,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600",
      "https://i.pinimg.com/736x/80/37/56/803756c9b4a561b1777b53ddbe023ffc.jpg",
    ],
    category: "electronics",
    type: "affiliate",
    rating: 4.8,
    reviewCount: 2341,
    inStock: true,
    features: ["Active Noise Cancellation", "30-Hour Battery", "IPX5 Water Resistant", "Touch Controls"],
    tags: ["bestseller", "new"],
  },
  {
    id: "smart-fitness-watch",
    name: "Smart Fitness Watch",
    affiliateUrl: 'https://your-store.myshopify.com/products/premium-laptop-stand',
    description: "Track your health and fitness with precision. Heart rate, sleep, and 50+ workout modes.",
    longDescription:
      "Take control of your fitness journey with our Smart Fitness Watch. This advanced wearable tracks your heart rate 24/7, monitors your sleep patterns, and offers 50+ workout modes to match your active lifestyle.",
    price: 149.99,
    originalPrice: 199.99,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600",
    ],
    category: "fitness",
    type: "affiliate",
    affiliateUrl: "https://example.com/partner/fitness-watch",
    rating: 4.6,
    reviewCount: 1823,
    inStock: true,
    features: ["Heart Rate Monitor", "50+ Workout Modes", "7-Day Battery", "Water Resistant"],
    tags: ["trending"],
  },
  {
    id: "leather-messenger-bag",
    name: "Premium Leather Messenger Bag",
    description: "Handcrafted genuine leather bag with modern functionality and timeless style.",
    longDescription:
      "Crafted from premium full-grain leather, this messenger bag combines classic elegance with modern practicality. Features multiple compartments, a padded laptop sleeve, and adjustable strap for all-day comfort.",
    price: 189.99,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    ],
    category: "accessories",
    type: "dropship",
    rating: 4.9,
    reviewCount: 892,
    inStock: true,
    features: ["Full-Grain Leather", "Laptop Sleeve", "Multiple Pockets", "Adjustable Strap"],
    tags: ["premium"],
  },
  {
    id: "minimalist-desk-lamp",
    name: "Minimalist LED Desk Lamp",
    description: "Sleek, adjustable desk lamp with wireless charging base and touch controls.",
    longDescription:
      "Illuminate your workspace with this beautifully designed LED desk lamp. Features adjustable brightness, color temperature control, and a built-in wireless charging pad for your devices.",
    price: 69.99,
    originalPrice: 89.99,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600",
    ],
    category: "home",
    type: "dropship",
    rating: 4.5,
    reviewCount: 567,
    inStock: true,
    features: ["Touch Controls", "Wireless Charging", "Adjustable Brightness", "Eye-Care Technology"],
    tags: ["new"],
  },
  {
    id: "organic-cotton-tshirt",
    name: "Organic Cotton Premium Tee",
    description: "Sustainably made, ultra-soft organic cotton t-shirt with a perfect fit.",
    longDescription:
      "Experience comfort meets conscience with our Organic Cotton Premium Tee. Made from 100% GOTS-certified organic cotton, this t-shirt offers a luxuriously soft feel while supporting sustainable farming practices.",
    price: 45.0,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
    ],
    category: "fashion",
    type: "affiliate",
    affiliateUrl: "https://example.com/partner/organic-tee",
    rating: 4.7,
    reviewCount: 1245,
    inStock: true,
    features: ["100% Organic Cotton", "GOTS Certified", "Pre-Shrunk", "Relaxed Fit"],
    tags: ["sustainable"],
  },
  {
    id: "portable-power-bank",
    name: "Ultra-Slim Power Bank 20000mAh",
    description: "Fast-charging portable charger with dual USB-C ports and LED display.",
    longDescription:
      "Never run out of power with our Ultra-Slim Power Bank. Featuring 20000mAh capacity, dual USB-C ports with fast charging support, and a sleek LED display showing remaining power.",
    price: 49.99,
    originalPrice: 69.99,
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600",
      "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=600",
    ],
    category: "electronics",
    type: "dropship",
    rating: 4.6,
    reviewCount: 3421,
    inStock: true,
    features: ["20000mAh Capacity", "Dual USB-C", "Fast Charging", "LED Display"],
    tags: ["bestseller"],
  },
  {
    id: "yoga-mat-premium",
    name: "Premium Non-Slip Yoga Mat",
    description: "Extra-thick, eco-friendly yoga mat with alignment guides and carrying strap.",
    longDescription:
      "Elevate your practice with our Premium Yoga Mat. Made from eco-friendly TPE material, featuring alignment guides, extra cushioning, and a non-slip surface for stability in every pose.",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600",
    ],
    category: "fitness",
    type: "affiliate",
    affiliateUrl: "https://example.com/partner/yoga-mat",
    rating: 4.8,
    reviewCount: 2156,
    inStock: true,
    features: ["Eco-Friendly TPE", "Alignment Guides", "Extra Thick (6mm)", "Non-Slip Surface"],
    tags: ["trending", "sustainable"],
  },
  {
    id: "ceramic-coffee-set",
    name: "Artisan Ceramic Coffee Set",
    description: "Hand-crafted ceramic pour-over set with dripper, carafe, and two cups.",
    longDescription:
      "Brew the perfect cup with our Artisan Ceramic Coffee Set. Each piece is hand-crafted by skilled artisans, featuring a beautiful glazed finish and designed for optimal coffee extraction.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600",
    ],
    category: "home",
    type: "dropship",
    rating: 4.9,
    reviewCount: 421,
    inStock: true,
    features: ["Hand-Crafted", "Lead-Free Glaze", "Heat Resistant", "Dishwasher Safe"],
    tags: ["premium", "new"],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products
    .filter(
      (product) =>
        product.tags?.includes("bestseller") || product.tags?.includes("trending") || product.tags?.includes("new"),
    )
    .slice(0, 4);
};

export const getDropshipProducts = (): Product[] => {
  return products.filter((product) => product.type === "dropship");
};

export const getAffiliateProducts = (): Product[] => {
  return products.filter((product) => product.type === "affiliate");
};
