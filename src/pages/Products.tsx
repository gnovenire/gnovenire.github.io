import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products, categories, ProductType } from '@/data/products';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  const categoryParam = searchParams.get('category') || '';
  const typeParam = (searchParams.get('type') as ProductType) || '';
  const searchQuery = searchParams.get('search') || '';
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (categoryParam) {
      result = result.filter(p => p.category === categoryParam);
    }

    // Filter by type
    if (typeParam) {
      result = result.filter(p => p.type === typeParam);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - no sort, keep original order
        break;
    }

    return result;
  }, [categoryParam, typeParam, searchQuery, sortBy]);

  const updateParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  const hasActiveFilters = categoryParam || typeParam || searchQuery;

  return (
    <>
      <Helmet>
        <title>Shop All Products | Gnovenire</title>
        <meta 
          name="description" 
          content="Browse our curated collection of premium products. Find electronics, fashion, home goods, and more from trusted partners worldwide." 
        />
      </Helmet>

      <Layout>
        <div className="container-main py-8 md:py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="heading-section mb-2">All Products</h1>
            <p className="text-muted-foreground">
              Discover our curated collection of quality products
            </p>
          </div>

          {/* Search & Filters Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => updateParam('search', e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <Button 
              variant="outline" 
              className="lg:hidden gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>

            {/* Sort */}
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="h-10 px-3 rounded-md border border-input bg-background text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Filters Sidebar */}
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:block lg:col-span-1 mb-6 lg:mb-0`}>
              <div className="bg-card rounded-lg border border-border p-4 space-y-6">
                {/* Mobile Sort */}
                <div className="lg:hidden">
                  <h3 className="font-medium mb-3">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>

                {/* Category Filter */}
                <div>
                  <h3 className="font-medium mb-3">Category</h3>
                  <div className="space-y-2">
                    <button
                      className={`block w-full text-left text-sm px-2 py-1 rounded ${
                        !categoryParam ? 'bg-accent/10 text-accent' : 'text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => updateParam('category', '')}
                    >
                      All Categories
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        className={`block w-full text-left text-sm px-2 py-1 rounded ${
                          categoryParam === cat.id ? 'bg-accent/10 text-accent' : 'text-muted-foreground hover:text-foreground'
                        }`}
                        onClick={() => updateParam('category', cat.id)}
                      >
                        {cat.icon} {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Type Filter */}
                <div>
                  <h3 className="font-medium mb-3">Product Type</h3>
                  <div className="space-y-2">
                    <button
                      className={`block w-full text-left text-sm px-2 py-1 rounded ${
                        !typeParam ? 'bg-accent/10 text-accent' : 'text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => updateParam('type', '')}
                    >
                      All Types
                    </button>
                    <button
                      className={`block w-full text-left text-sm px-2 py-1 rounded ${
                        typeParam === 'dropship' ? 'bg-accent/10 text-accent' : 'text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => updateParam('type', 'dropship')}
                    >
                      <span className="badge-dropship mr-2">In Stock</span>
                      Direct Purchase
                    </button>
                    <button
                      className={`block w-full text-left text-sm px-2 py-1 rounded ${
                        typeParam === 'affiliate' ? 'bg-accent/10 text-accent' : 'text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => updateParam('type', 'affiliate')}
                    >
                      <span className="badge-affiliate mr-2">Partner</span>
                      Partner Products
                    </button>
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button 
                    variant="outline" 
                    className="w-full gap-2"
                    onClick={clearFilters}
                  >
                    <X className="h-4 w-4" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              <p className="text-sm text-muted-foreground mb-4">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              
              <ProductGrid products={filteredProducts} columns={3} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
