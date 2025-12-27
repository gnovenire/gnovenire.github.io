import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Gnovenire</title>
        <meta 
          name="description" 
          content="Gnovenire's terms and conditions. Read our terms of service for using our website and making purchases." 
        />
      </Helmet>

      <Layout>
        <div className="container-main py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-section mb-8">Terms & Conditions</h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using Gnovenire's website, you agree to be bound by these Terms and 
                Conditions. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">2. Products and Services</h2>
              <p>
                Gnovenire offers two types of products:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Direct Products:</strong> Items sold and 
                  shipped directly by Gnovenire, marked as "In Stock."
                </li>
                <li>
                  <strong className="text-foreground">Partner Products:</strong> Items sold through 
                  affiliate partnerships, marked as "Partner." Purchases are completed on partner 
                  websites and subject to their terms.
                </li>
              </ul>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">3. Ordering and Payment</h2>
              <p>
                When you place an order, you agree to provide accurate and complete information. 
                We reserve the right to refuse or cancel any order for any reason, including 
                pricing errors or stock unavailability.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">4. Shipping and Delivery</h2>
              <p>
                Shipping times and costs vary depending on your location. We are not responsible 
                for delays caused by customs, weather, or other factors beyond our control.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">5. Returns and Refunds</h2>
              <p>
                For direct products, we offer a 30-day return policy for unused items in original 
                packaging. For partner products, returns are subject to the partner's return policy.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">6. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the 
                property of Gnovenire and protected by intellectual property laws.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                Gnovenire shall not be liable for any indirect, incidental, special, or 
                consequential damages arising from your use of our website or products.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our 
                website after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">9. Contact</h2>
              <p>
                For questions about these Terms & Conditions, please <a href="/contact" className="text-accent hover:underline">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
