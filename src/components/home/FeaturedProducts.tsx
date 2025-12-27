import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getFeaturedProducts } from '@/data/products';

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 md:py-24">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h2 className="heading-section mb-2">Featured Products</h2>
            <p className="text-muted-foreground">
              Handpicked favorites from our collection
            </p>
          </div>
          <Button variant="gold-outline" asChild>
            <Link to="/products" className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
}
