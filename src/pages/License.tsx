
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LicensePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sand-light">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium tracking-wide mb-4">
            License Agreement
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Terms for using mockups created with Luxe Haven.
          </p>
        </div>
      </section>
      
      <section className="py-12 flex-1">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p>Last updated: March 30, 2025</p>
            
            <h2>1. Mockup Usage Rights</h2>
            <p>
              This License Agreement governs your rights to use the mockups generated through the 
              Luxe Haven platform. By using our services, you agree to these terms.
            </p>
            
            <h2>2. Free Plan License</h2>
            <p>
              Mockups created using our Free plan may be used for personal and commercial projects, 
              but will include a Luxe Haven watermark. These mockups may not be resold or redistributed 
              as standalone files.
            </p>
            
            <h2>3. Premium Plan License</h2>
            <p>
              Mockups created using our Premium plans may be used for personal and commercial projects 
              without watermarks. You may use these mockups in client work, social media, websites, 
              marketing materials, and physical products.
            </p>
            
            <h2>4. Enterprise License</h2>
            <p>
              Enterprise licenses include additional rights for team usage, high-volume production, 
              and custom mockup development. Please contact our sales team for specific terms.
            </p>
            
            <h2>5. Prohibited Uses</h2>
            <p>
              You may not use mockups generated through Luxe Haven for illegal purposes, in products 
              that compete directly with Luxe Haven, or in ways that infringe upon third-party rights.
            </p>
            
            <h2>6. User Content</h2>
            <p>
              You retain all rights to your uploaded content. We claim no ownership over your designs 
              or logos uploaded to our platform.
            </p>
            
            <h2>7. Luxe Haven Templates</h2>
            <p>
              The mockup templates provided by Luxe Haven remain our intellectual property. You are 
              purchasing a license to use these templates, not the templates themselves.
            </p>
            
            <h2>8. Termination</h2>
            <p>
              Your license to use mockups created with Luxe Haven remains valid indefinitely, provided 
              you comply with the terms of this License Agreement.
            </p>
            
            <h2>9. Warranty Disclaimer</h2>
            <p>
              Luxe Haven provides no warranties regarding the suitability of mockups for any particular purpose.
            </p>
            
            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about this License Agreement, please contact us at license@luxehaven.com.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LicensePage;
