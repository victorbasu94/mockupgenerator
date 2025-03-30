
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HelpCenter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sand-light">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium tracking-wide mb-4">
            Help Center
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Find answers to common questions and learn how to get the most out of Luxe Haven.
          </p>
        </div>
      </section>
      
      <section className="py-12 flex-1">
        <div className="container mx-auto">
          <p className="text-muted-foreground mb-8">
            Our help center is currently under construction. Please check back soon for more information.
          </p>
          <h2 className="text-2xl font-medium mb-4">Contact Support</h2>
          <p className="mb-4">
            If you need assistance, please email us at <a href="mailto:support@luxehaven.com" className="text-gold hover:underline">support@luxehaven.com</a>
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;
