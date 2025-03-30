
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockups } from '@/data/mockups';
import { ChevronRight, Star, Image, Download, Zap } from 'lucide-react';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-medium tracking-wide mb-6">
              Your Design. <br className="hidden md:block" />
              Our Canvas. <span className="text-gold">Instantly Real.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Create beautiful, realistic product mockups in seconds. Upload your logo or artwork and see it come to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gallery" className="btn-primary px-8 py-4">
                Browse Mockups
              </Link>
              <Link to="/editor" className="btn-ghost px-8 py-4">
                Try It Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Mockups */}
      <section className="py-20 bg-sand-light">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-4">Featured Mockups</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of premium product templates ready for your designs.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mockups.slice(0, 3).map((mockup) => (
              <motion.div
                key={mockup.id}
                variants={fadeIn}
                className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={mockup.image}
                    alt={mockup.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-medium mb-2">{mockup.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{mockup.description}</p>
                  {mockup.premium && (
                    <div className="flex items-center text-gold mb-4">
                      <Star size={16} className="mr-1" />
                      <span className="text-xs font-medium">Premium</span>
                    </div>
                  )}
                  <Link 
                    to={`/editor/${mockup.id}`}
                    className="inline-flex items-center text-sm font-medium text-foreground hover:text-gold transition-colors"
                  >
                    Create with this mockup <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-ghost">
              View All Mockups
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Create stunning mockups in three simple steps.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <motion.div variants={fadeIn} className="text-center">
              <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-6">
                <Image size={24} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-medium mb-3">1. Choose a Mockup</h3>
              <p className="text-muted-foreground">
                Browse our extensive library of premium product mockups and select the one that fits your brand.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={24} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-medium mb-3">2. Upload Your Design</h3>
              <p className="text-muted-foreground">
                Upload your logo, artwork, or design. Our AI will intelligently blend it with the product.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-6">
                <Download size={24} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-medium mb-3">3. Download Result</h3>
              <p className="text-muted-foreground">
                Adjust positioning if needed, then download your high-quality, ready-to-use mockup image.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-6">
              Ready to Showcase Your Designs?
            </h2>
            <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
              Start creating professional product mockups in seconds.
            </p>
            <Link to="/editor" className="btn-primary bg-gold hover:bg-gold/90 text-charcoal px-8 py-4">
              Create Your First Mockup
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
