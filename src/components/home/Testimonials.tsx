import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Verified Buyer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    rating: 5,
    text: 'Amazing quality and fast shipping! I\'ve ordered multiple times and have never been disappointed. Highly recommend Gnovenire.',
  },
  {
    id: 2,
    name: 'James K.',
    role: 'Verified Buyer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    rating: 5,
    text: 'The customer service is outstanding. They helped me find exactly what I was looking for and the product exceeded my expectations.',
  },
  {
    id: 3,
    name: 'Emily R.',
    role: 'Verified Buyer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    rating: 5,
    text: 'Love the curated selection! Every product I\'ve purchased has been top-notch. Gnovenire is now my go-to for quality finds.',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-section mb-2">What Our Customers Say</h2>
          <p className="text-primary-foreground/70">
            Join thousands of satisfied customers worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-primary-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
