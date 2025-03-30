
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formState);
    alert('Thank you for your message. We will get back to you soon!');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sand-light">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium tracking-wide mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>
      
      <section className="py-12 flex-1">
        <div className="container mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-sand focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-sand focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 rounded-md border border-sand focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            
            <button type="submit" className="btn-primary px-8 py-3">
              Send Message
            </button>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
