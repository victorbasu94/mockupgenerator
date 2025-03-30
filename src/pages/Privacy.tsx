
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sand-light">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium tracking-wide mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            How we collect, use, and protect your information.
          </p>
        </div>
      </section>
      
      <section className="py-12 flex-1">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p>Last updated: March 30, 2025</p>
            
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our service, or contact us for support. This may include your name, email 
              address, payment information, and any content you upload to our platform.
            </p>
            
            <h2>2. How We Use Your Information</h2>
            <p>
              We use your information to provide, maintain, and improve our services, process transactions, 
              send communications, and for other purposes you consent to.
            </p>
            
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with service providers 
              who help us deliver our services, when required by law, or with your consent.
            </p>
            
            <h2>4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, no 
              method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>5. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, 
              such as the right to access, correct, or delete your data.
            </p>
            
            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience on our platform, analyze 
              usage patterns, and for other purposes described in this Privacy Policy.
            </p>
            
            <h2>7. Third-Party Links</h2>
            <p>
              Our service may contain links to third-party websites. We are not responsible for the privacy 
              practices of these sites and encourage you to read their privacy policies.
            </p>
            
            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16. We do not knowingly collect 
              personal information from children.
            </p>
            
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes 
              by posting the new policy on this page.
            </p>
            
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@luxehaven.com.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
