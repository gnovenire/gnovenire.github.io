import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

export default function Cart() {
  const { state, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const { items } = state;

  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <>
      <Helmet>
        <title>Shopping Cart | Gnovenire</title>
        <meta name="description" content="Review your shopping cart and proceed to checkout." />
      </Helmet>

      <Layout>
        <div className="container-main py-8 md:py-12">
          <h1 className="heading-section mb-8">Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-20 w-20 mx-auto text-muted-foreground/50 mb-6" />
              <h2 className="font-serif text-2xl mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/products">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  {/* Header */}
                  <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-secondary/50 text-sm font-medium text-muted-foreground">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-border">
                    {items.map((item) => (
                      <div key={item.product.id} className="p-4">
                        <div className="md:grid md:grid-cols-12 md:gap-4 md:items-center">
                          {/* Product */}
                          <div className="md:col-span-6 flex gap-4 mb-4 md:mb-0">
                            <Link to={`/products/${item.product.id}`}>
                              <img
                                src={item.product.images[0]}
                                alt={item.product.name}
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                            </Link>
                            <div className="flex-1 min-w-0">
                              <Link 
                                to={`/products/${item.product.id}`}
                                className="font-medium hover:text-accent transition-colors line-clamp-2"
                              >
                                {item.product.name}
                              </Link>
                              <p className="text-sm text-muted-foreground mt-1">
                                <span className="badge-dropship">In Stock</span>
                              </p>
                            </div>
                          </div>

                          {/* Price */}
                          <div className="md:col-span-2 md:text-center mb-2 md:mb-0">
                            <span className="md:hidden text-sm text-muted-foreground mr-2">Price:</span>
                            <span className="font-medium">${item.product.price.toFixed(2)}</span>
                          </div>

                          {/* Quantity */}
                          <div className="md:col-span-2 flex items-center justify-start md:justify-center gap-2 mb-2 md:mb-0">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive hover:text-destructive ml-2"
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Total */}
                          <div className="md:col-span-2 md:text-right">
                            <span className="md:hidden text-sm text-muted-foreground mr-2">Total:</span>
                            <span className="font-serif text-lg font-bold">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
                  <Button variant="outline" asChild>
                    <Link to="/products">Continue Shopping</Link>
                  </Button>
                  <Button variant="ghost" onClick={clearCart} className="text-destructive hover:text-destructive">
                    Clear Cart
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1 mt-8 lg:mt-0">
                <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
                  <h2 className="font-serif text-xl mb-6">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {subtotal < 50 && (
                      <p className="text-xs text-accent">
                        Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between items-center py-4 border-t border-border mb-6">
                    <span className="font-medium">Total</span>
                    <span className="font-serif text-2xl font-bold">${total.toFixed(2)}</span>
                  </div>

                  <Button variant="gold" size="lg" className="w-full gap-2" asChild>
                    <Link to="/checkout">
                      Proceed to Checkout
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Taxes calculated at checkout
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
