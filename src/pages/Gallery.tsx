
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockups, categories, Mockup } from '@/data/mockups';
import { Star, ArrowRight, Filter } from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredMockup, setHoveredMockup] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    showPremium: true,
    showFree: true,
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredMockups = mockups.filter((mockup) => {
    // Filter by category
    if (selectedCategory !== 'all' && mockup.category !== selectedCategory) {
      return false;
    }
    
    // Filter by premium/free status
    if (mockup.premium && !filters.showPremium) {
      return false;
    }
    
    if (!mockup.premium && !filters.showFree) {
      return false;
    }
    
    return true;
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sand-light">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-medium tracking-wide mb-4">
              Mockup Gallery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-0">
              Choose from our collection of premium mockup templates and bring your designs to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <motion.aside 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="hidden md:block w-full md:w-64 flex-shrink-0 space-y-8"
            >
              <div>
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        className={`text-left w-full px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-sand text-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-sand-light'
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Filter By</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.showPremium}
                      onChange={() => setFilters({ ...filters, showPremium: !filters.showPremium })}
                      className="rounded border-input"
                    />
                    <span>Premium Mockups</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.showFree}
                      onChange={() => setFilters({ ...filters, showFree: !filters.showFree })}
                      className="rounded border-input"
                    />
                    <span>Free Mockups</span>
                  </label>
                </div>
              </div>
            </motion.aside>

            {/* Mobile Filters Toggle */}
            <div className="md:hidden mb-6">
              <button
                className="flex items-center space-x-2 px-4 py-2 border rounded-md text-sm"
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              >
                <Filter size={16} />
                <span>Filters</span>
              </button>

              {isMobileFilterOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 p-4 border rounded-md bg-background"
                >
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          className={`px-3 py-1 text-sm rounded-md ${
                            selectedCategory === category.id
                              ? 'bg-sand text-foreground'
                              : 'border text-muted-foreground'
                          }`}
                          onClick={() => {
                            setSelectedCategory(category.id);
                          }}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-3">Filter By</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={filters.showPremium}
                          onChange={() => setFilters({ ...filters, showPremium: !filters.showPremium })}
                          className="rounded border-input"
                        />
                        <span className="text-sm">Premium Mockups</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={filters.showFree}
                          onChange={() => setFilters({ ...filters, showFree: !filters.showFree })}
                          className="rounded border-input"
                        />
                        <span className="text-sm">Free Mockups</span>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Mockup Grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex-1"
            >
              {filteredMockups.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No mockups match your current filters.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setFilters({ showPremium: true, showFree: true });
                    }}
                    className="btn-ghost"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMockups.map((mockup) => (
                    <motion.div
                      key={mockup.id}
                      variants={fadeIn}
                      className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                      onMouseEnter={() => setHoveredMockup(mockup.id)}
                      onMouseLeave={() => setHoveredMockup(null)}
                    >
                      <div className="aspect-w-1 aspect-h-1 bg-sand-light">
                        <img
                          src={hoveredMockup === mockup.id ? mockup.lifestyleImage : mockup.image}
                          alt={mockup.name}
                          className="w-full h-full object-cover transition-all duration-500 ease-out"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-medium">{mockup.name}</h3>
                          {mockup.premium && (
                            <div className="flex items-center text-gold">
                              <Star size={14} className="mr-1" />
                              <span className="text-xs font-medium">Premium</span>
                            </div>
                          )}
                        </div>
                        <Link
                          to={`/editor/${mockup.id}`}
                          className="mt-3 inline-flex items-center text-sm font-medium text-foreground hover:text-gold transition-colors group-hover:text-gold"
                        >
                          Create with this mockup 
                          <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
