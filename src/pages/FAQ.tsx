
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQPage = () => {
  const faqs = [
    {
      question: "What is Luxe Haven?",
      answer: "Luxe Haven is a premium mockup generator that allows designers and creators to visualize their artwork on various products like t-shirts, mugs, posters, and more, with stunning realism and quality."
    },
    {
      question: "How do I use the mockup generator?",
      answer: "Simply select a mockup from our gallery, upload your design, and our AI will automatically position it on the product. You can then adjust the positioning if needed and download the final image."
    },
    {
      question: "What file formats can I upload?",
      answer: "We accept PNG, JPG, and SVG files. For best results, we recommend using PNG files with transparent backgrounds."
    },
    {
      question: "What's the difference between Free and Premium plans?",
      answer: "The Free plan gives you access to a limited selection of mockups with watermarked downloads. Premium plans offer access to all mockups, high-resolution downloads without watermarks, and additional features."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. Your premium access will remain active until the end of your current billing period."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sand-light">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium tracking-wide mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Find answers to common questions about Luxe Haven.
          </p>
        </div>
      </section>
      
      <section className="py-12 flex-1">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
