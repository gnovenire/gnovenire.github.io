import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Gnovenire</title>
        <meta 
          name="description" 
          content="Gnovenire's privacy policy. Learn how we collect, use, and protect your personal information." 
        />
      </Helmet>

      <Layout>
        <div className="container-main py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-section mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">Introduction</h2>
              <p>
                At Gnovenire, we take your privacy seriously. This Privacy Policy explains how we 
                collect, use, disclose, and safeguard your information when you visit our website 
                or make a purchase.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">Information We Collect</h2>
              <p>We may collect information about you in various ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Personal Data:</strong> Name, email address, 
                  phone number, shipping address, and payment information when you make a purchase.
                </li>
                <li>
                  <strong className="text-foreground">Usage Data:</strong> Information about how you 
                  access and use our website, including browser type, pages viewed, and time spent.
                </li>
                <li>
                  <strong className="text-foreground">Cookies:</strong> We use cookies to enhance 
                  your browsing experience and analyze site traffic.
                </li>
              </ul>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send promotional emails (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and enhance security</li>
              </ul>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shipping carriers to deliver your orders</li>
                <li>Payment processors to handle transactions</li>
                <li>Analytics providers to understand website usage</li>
                <li>Law enforcement when required by law</li>
              </ul>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or 
                destruction.
              </p>

              <h2 className="font-serif text-xl text-foreground mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please <a href="/contact" className="text-accent hover:underline">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
