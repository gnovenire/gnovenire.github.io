import { Link } from 'react-router-dom';
import { ShoppingBag, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAffiliateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Track affiliate click
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('affiliate-click', {
        detail: { productId: product.id, productName: product.name }
      }));
    }
    
    // Open affiliate link
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Link 
      to={`/products/${product.id}`}
      className="group block"
    >
      <div className="card-hover bg-card rounded-lg overflow-hidden border border-border">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discount > 0 && (
              <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded">
                -{discount}%
              </span>
            )}
            {product.tags?.includes('bestseller') && (
              <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded">
                Bestseller
              </span>
            )}
            {product.tags?.includes('new') && (
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                New
              </span>
            )}
          </div>

          {/* Product Type Badge */}
          <div className="absolute top-3 right-3">
            <span className={product.type === 'dropship' ? 'badge-dropship' : 'badge-affiliate'}>
              {product.type === 'dropship' ? 'In Stock' : 'Partner'}
            </span>
          </div>

          {/* Quick Action */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.type === 'dropship' ? (
              <Button 
                variant="hero" 
                className="w-full gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </Button>
            ) : (
              <Button 
                variant="affiliate" 
                className="w-full gap-2"
                onClick={handleAffiliateClick}
              >
                <ExternalLink className="h-4 w-4" />
                View on Partner
              </Button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-medium text-foreground group-hover:text-accent transition-colors truncate">
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-3">
            <span className="font-serif text-lg font-bold text-foreground">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
