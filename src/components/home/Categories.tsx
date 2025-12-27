import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const categoryImages: Record<string, string> = {
  electronics: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400',
  fashion: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
  home: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
  fitness: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
  accessories: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400',
};

export function Categories() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-section mb-2">Shop by Category</h2>
          <p className="text-muted-foreground">
            Browse our curated collections
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative aspect-square rounded-xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={categoryImages[category.id]}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                <span className="text-3xl mb-2">{category.icon}</span>
                <h3 className="font-serif text-lg text-background font-medium">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
