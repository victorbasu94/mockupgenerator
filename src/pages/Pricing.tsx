
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PricingTier {
  name: string;
  description: string;
  price: string;
  billingPeriod: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers: PricingTier[] = [
    {
      name: 'Free',
      description: 'Perfect for trying out our mockup generator',
      price: billingCycle === 'monthly' ? '$0' : '$0',
      billingPeriod: 'forever',
      features: [
        'Access to 3 basic mockup templates',
        'Standard resolution downloads',
        'Basic positioning tools',
        'Watermarked exports',
        'Limited to 5 mockups per month'
      ],
      cta: 'Start Free'
    },
    {
      name: 'Premium',
      description: 'Professional mockups for serious designers',
      price: billingCycle === 'monthly' ? '$12' : '$99',
      billingPeriod: billingCycle === 'monthly' ? 'per month' : 'per year',
      features: [
        'Access to all mockup templates',
        'High-resolution downloads',
        'Advanced positioning tools',
        'No watermarks',
        'Unlimited mockups',
        'Priority AI processing',
        'Save mockup history'
      ],
      cta: 'Get Premium',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For teams and businesses with custom needs',
      price: 'Custom',
      billingPeriod: 'pricing',
      features: [
        'Everything in Premium',
        'Custom mockup templates',
        'Team collaboration features',
        'API access',
        'Dedicated support',
        'Brand asset management',
        'Analytics dashboard'
      ],
      cta: 'Contact Sales'
    }
  ];

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
      
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sand-light">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-medium tracking-wide mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose the plan that's right for you and start creating beautiful mockups today.
            </p>
            
            <div className="bg-background inline-flex p-1 rounded-full border border-sand mb-8">
              <button
                className={`px-6 py-2 rounded-full text-sm transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-sand text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm transition-colors ${
                  billingCycle === 'yearly'
                    ? 'bg-sand text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly <span className="text-xs text-gold">Save 30%</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                variants={fadeIn}
                className={`rounded-lg border ${
                  tier.popular
                    ? 'border-gold shadow-lg relative'
                    : 'border-sand shadow-sm'
                } bg-background overflow-hidden`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gold text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-medium">{tier.price}</span>
                    <span className="text-muted-foreground ml-1">{tier.billingPeriod}</span>
                  </div>
                  
                  <button
                    className={`w-full py-2 rounded-md transition-colors mb-6 ${
                      tier.popular
                        ? 'bg-gold text-white hover:bg-gold/90'
                        : 'btn-ghost'
                    }`}
                  >
                    {tier.cta}
                  </button>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Features included:</p>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle size={16} className={`mr-2 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-gold' : 'text-foreground/60'}`} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-sand-light">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-medium mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes will take effect at the end of your current billing cycle.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Are there any limits on the Premium plan?</h3>
              <p className="text-muted-foreground">
                The Premium plan includes unlimited mockups, all available templates, and high-resolution downloads without watermarks.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">
                We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied with our service, just contact our support team.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and Apple Pay. For Enterprise plans, we also offer invoicing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-medium mb-4">Ready to Create Beautiful Mockups?</h2>
            <p className="text-muted-foreground mb-8">
              Start with our free plan and upgrade when you need more features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">
                Get Started Now
              </button>
              <button className="btn-ghost px-8 py-3">
                Try Free Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
