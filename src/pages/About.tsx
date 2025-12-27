import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Globe, Heart, Users, Award } from 'lucide-react';

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '100+', label: 'Countries Served' },
  { value: '500+', label: 'Products Curated' },
  { value: '99%', label: 'Satisfaction Rate' },
];

const values = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We source and deliver quality products to customers in over 100 countries, making exceptional items accessible worldwide.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Every decision we make is guided by our commitment to providing the best possible experience for our customers.',
  },
  {
    icon: Users,
    title: 'Trusted Partners',
    description: 'We work with carefully vetted suppliers and brands to ensure every product meets our high standards.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Each item in our collection goes through rigorous quality checks before reaching our customers.',
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Gnovenire</title>
        <meta 
          name="description" 
          content="Learn about Gnovenire's mission to bring quality products to customers worldwide. Discover our story, values, and commitment to excellence." 
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-display mb-6 animate-fade-up">
                About <span className="text-accent">Gnovenire</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up delay-100">
                We're on a mission to make exceptional products accessible to everyone. 
                Through careful curation and trusted partnerships, we bring you quality 
                items from around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-b border-border">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-section mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Gnovenire was born from a simple idea: everyone deserves access to 
                    quality products, regardless of where they live. What started as a 
                    small operation has grown into a global platform connecting customers 
                    with exceptional items from around the world.
                  </p>
                  <p>
                    Our team carefully curates each product in our collection, working 
                    with trusted suppliers and established brands to ensure everything 
                    meets our standards. Whether it's electronics, fashion, home goods, 
                    or accessories, we only offer items we'd be proud to use ourselves.
                  </p>
                  <p>
                    Today, we serve customers in over 100 countries, but our commitment 
                    remains the same: to provide exceptional value, outstanding customer 
                    service, and products that exceed expectations.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                    alt="Gnovenire team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-gold">
                  <p className="font-serif text-3xl font-bold">2024</p>
                  <p className="text-sm">Founded</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="heading-section mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at Gnovenire.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="bg-card p-6 rounded-xl border border-border animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
