
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sand-light py-12 border-t border-sand-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-medium tracking-wider mb-4">LUXE HAVEN</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Premium product mockups for designers and creators who value quality and simplicity.
            </p>
          </div>
          
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-medium mb-3">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mockup Gallery</Link></li>
                <li><Link to="/editor" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Create Mockup</Link></li>
                <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">License</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sand-dark pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Luxe Haven. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
