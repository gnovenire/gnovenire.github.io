import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';

export default function AffiliateDisclosure() {
  return (
    <>
      <Helmet>
        <title>Affiliate Disclosure | Gnovenire</title>
        <meta 
          name="description" 
          content="Gnovenire's affiliate disclosure policy. Learn about our partnerships and how we earn commissions on some products." 
        />
      </Helmet>

      <Layout>
        <div className="container-main py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-section mb-8">Affiliate Disclosure</h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">About Our Affiliate Partnerships</h2>
              <p>
                Gnovenire participates in various affiliate marketing programs, which means we may earn 
                commissions on products purchased through our links to retailer sites.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">How Affiliate Links Work</h2>
              <p>
                Some products on our website are marked as "Partner Products." When you click on these 
                products and make a purchase on the partner's website, Gnovenire may receive a small 
                commission at no additional cost to you.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">Identifying Affiliate Products</h2>
              <p>
                We clearly mark affiliate products with a "Partner" badge to ensure transparency. 
                Products labeled "In Stock" are sold directly by Gnovenire and shipped from our 
                warehouses, while "Partner" products redirect you to the partner's website for purchase.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">Our Commitment to You</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Honest Reviews:</strong> Our product recommendations 
                  are based on genuine research and customer feedback, not commission rates.
                </li>
                <li>
                  <strong className="text-foreground">No Extra Cost:</strong> You pay the same price 
                  whether you use our affiliate links or not.
                </li>
                <li>
                  <strong className="text-foreground">Quality First:</strong> We only partner with 
                  reputable brands and retailers that meet our quality standards.
                </li>
                <li>
                  <strong className="text-foreground">Transparency:</strong> We always disclose our 
                  affiliate relationships and clearly label partner products.
                </li>
              </ul>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">FTC Compliance</h2>
              <p>
                In accordance with the Federal Trade Commission (FTC) guidelines, we disclose that 
                Gnovenire has financial relationships with some of the merchants mentioned on this 
                website. We may be compensated if consumers choose to click affiliate links and 
                make purchases.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">Questions?</h2>
              <p>
                If you have any questions about our affiliate partnerships or this disclosure, 
                please don't hesitate to <a href="/contact" className="text-accent hover:underline">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
