
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sand-light">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium tracking-wide mb-4">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Please read these terms carefully before using Luxe Haven.
          </p>
        </div>
      </section>
      
      <section className="py-12 flex-1">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p>Last updated: March 30, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to Luxe Haven. These Terms of Service govern your use of our website and services. 
              By accessing or using Luxe Haven, you agree to be bound by these Terms.
            </p>
            
            <h2>2. Use of Services</h2>
            <p>
              Luxe Haven provides a platform for creating product mockups. You may use our services for 
              personal or commercial purposes, subject to these Terms and any applicable subscription limitations.
            </p>
            
            <h2>3. User Accounts</h2>
            <p>
              To access certain features of Luxe Haven, you may be required to create an account. You are 
              responsible for maintaining the confidentiality of your account credentials and for all activities 
              that occur under your account.
            </p>
            
            <h2>4. User Content</h2>
            <p>
              You retain ownership of any content you upload to Luxe Haven. By uploading content, you grant 
              us a non-exclusive, worldwide license to use, store, and display your content for the purpose 
              of providing our services.
            </p>
            
            <h2>5. Prohibited Conduct</h2>
            <p>
              You agree not to use Luxe Haven for any unlawful purpose or in violation of these Terms. 
              Prohibited conduct includes uploading infringing content, attempting to gain unauthorized 
              access to our systems, and engaging in any activity that disrupts our services.
            </p>
            
            <h2>6. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to Luxe Haven at any time, without 
              notice, for conduct that we believe violates these Terms or is harmful to other users, us, 
              or third parties, or for any other reason.
            </p>
            
            <h2>7. Disclaimer of Warranties</h2>
            <p>
              Luxe Haven is provided "as is" without warranties of any kind, either express or implied.
            </p>
            
            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Luxe Haven shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use of or 
              inability to use our services.
            </p>
            
            <h2>9. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Your continued use of Luxe Haven after any such 
              changes constitutes your acceptance of the new Terms.
            </p>
            
            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at terms@luxehaven.com.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsPage;
