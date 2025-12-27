import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-accent/10" />
      
      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24 lg:py-32">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full animate-fade-up">
              New Collection Available
            </span>
            
            <h1 className="heading-display mb-6 animate-fade-up delay-100">
              Discover Quality,{' '}
              <span className="text-accent">Delivered</span> Worldwide
            </h1>
            
            <p className="text-body text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-up delay-200">
              Curated products from trusted partners and our own premium selection. 
              Experience exceptional value with every purchase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/products" className="gap-2">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-secondary" size="xl" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 animate-fade-up delay-400">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Truck className="h-5 w-5 text-accent" />
                </div>
                <span className="text-xs text-muted-foreground text-center lg:text-left">
                  Free Shipping
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <span className="text-xs text-muted-foreground text-center lg:text-left">
                  Secure Payment
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <RefreshCw className="h-5 w-5 text-accent" />
                </div>
                <span className="text-xs text-muted-foreground text-center lg:text-left">
                  Easy Returns
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
              
              {/* Main image */}
              <div className="relative bg-secondary rounded-2xl overflow-hidden shadow-strong">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                  alt="Curated collection of premium products"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-medium border border-border animate-fade-up delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">10,000+</p>
                    <p className="text-xs text-muted-foreground">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
