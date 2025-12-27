import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Categories } from '@/components/home/Categories';
import { ValueProposition } from '@/components/home/ValueProposition';
import { Testimonials } from '@/components/home/Testimonials';
import { Newsletter } from '@/components/home/Newsletter';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gnovenire | Premium Curated Products Delivered Worldwide</title>
        <meta 
          name="description" 
          content="Discover quality products from trusted partners. Gnovenire offers a curated selection of electronics, fashion, home goods, and more with worldwide shipping." 
        />
        <meta name="keywords" content="gnovenire, online shopping, premium products, electronics, fashion, home decor" />
        <link rel="canonical" href="https://gnovenire.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Gnovenire",
            "url": "https://gnovenire.com",
            "description": "Premium curated products delivered worldwide",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://gnovenire.com/products?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      
      <Layout>
        <Hero />
        <ValueProposition />
        <FeaturedProducts />
        <Categories />
        <Testimonials />
        <Newsletter />
      </Layout>
    </>
  );
};

export default Index;
