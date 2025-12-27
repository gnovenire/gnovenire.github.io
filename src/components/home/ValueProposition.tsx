import { Globe, Shield, Award, Headphones } from 'lucide-react';

const values = [
  {
    icon: Globe,
    title: 'Global Shipping',
    description: 'We deliver to over 100 countries with fast, reliable shipping options.',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Your transactions are protected with industry-leading security.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Every product is carefully vetted to meet our high standards.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer service team is always here to help you.',
  },
];

export function ValueProposition() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                <value.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif text-lg mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
