import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'support@gnovenire.com',
    href: 'mailto:gnovenire.global@tuta.io',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+8801880656883',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'INTERNATIONAL',
    href: null,
  },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Gnovenire</title>
        <meta 
          name="description" 
          content="Get in touch with Gnovenire. We're here to help with any questions about orders, products, or partnerships." 
        />
      </Helmet>

      <Layout>
        <div className="container-main py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="heading-section mb-4">Get in Touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or need assistance? We're here to help. 
              Reach out to us and we'll respond within 24 hours.
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Business Hours */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-medium mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
