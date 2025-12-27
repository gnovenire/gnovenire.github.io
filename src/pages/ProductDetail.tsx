import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShoppingBag, ExternalLink, Star, ChevronLeft, Truck, Shield, RefreshCw, Check } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <Layout>
        <div className="container-main py-16 text-center">
          <h1 className="heading-section mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} has been added to your cart.`,
    });
  };

  const handleAffiliateClick = () => {
    // Track affiliate click
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('affiliate-click', {
        detail: { productId: product.id, productName: product.name }
      }));
    }
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  // Related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Product schema for SEO
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.images,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "USD",
      "availability": product.inStock 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | Gnovenire</title>
        <meta name="description" content={product.description} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <Layout>
        <div className="container-main py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {discount > 0 && (
                    <span className="px-3 py-1 bg-destructive text-destructive-foreground text-sm font-medium rounded">
                      -{discount}% OFF
                    </span>
                  )}
                  <span className={product.type === 'dropship' ? 'badge-dropship' : 'badge-affiliate'}>
                    {product.type === 'dropship' ? 'In Stock' : 'Partner Product'}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index 
                          ? 'border-accent' 
                          : 'border-transparent hover:border-border'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              {/* Title & Rating */}
              <h1 className="font-serif text-3xl md:text-4xl mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? 'fill-accent text-accent' 
                          : 'text-border'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">
                  ({product.reviewCount.toLocaleString()} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-3xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.longDescription || product.description}
              </p>

              {/* Features */}
              {product.features && (
                <div className="mb-8">
                  <h3 className="font-medium mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Add to Cart / Affiliate Button */}
              {product.type === 'dropship' ? (
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-md">
                      <button
                        className="px-4 py-2 text-lg hover:bg-secondary transition-colors"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <span className="px-4 py-2 font-medium">{quantity}</span>
                      <button
                        className="px-4 py-2 text-lg hover:bg-secondary transition-colors"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <Button 
                      variant="hero" 
                      size="xl" 
                      className="flex-1 gap-2"
                      onClick={handleAddToCart}
                    >
                      <ShoppingBag className="h-5 w-5" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="mb-8">
                  <Button 
                    variant="affiliate" 
                    size="xl" 
                    className="w-full gap-2"
                    onClick={handleAffiliateClick}
                  >
                    <ExternalLink className="h-5 w-5" />
                    Buy on Partner Site
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    This is a partner product. You'll be redirected to complete your purchase.
                  </p>
                </div>
              )}

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-border">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto text-accent mb-2" />
                  <p className="text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto text-accent mb-2" />
                  <p className="text-xs text-muted-foreground">Secure Checkout</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="h-6 w-6 mx-auto text-accent mb-2" />
                  <p className="text-xs text-muted-foreground">30-Day Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16 md:mt-24">
              <h2 className="heading-section mb-8">You May Also Like</h2>
              <ProductGrid products={relatedProducts} />
            </section>
          )}
        </div>
      </Layout>
    </>
  );
}
