
import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Upload, Trash, Move, Download, CheckCircle, Image as ImageIcon, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockups } from '@/data/mockups';
import { useToast } from "@/hooks/use-toast";

const EditorPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedMockup, setSelectedMockup] = useState(id ? mockups.find(m => m.id === id) : null);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [showLifestyle, setShowLifestyle] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);
  
  const imageRef = useRef<HTMLDivElement>(null);
  const startPos = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!selectedMockup && mockups.length > 0) {
      navigate(`/editor/${mockups[0].id}`);
    }
  }, [selectedMockup, navigate]);

  const handleMockupSelect = (mockupId: string) => {
    navigate(`/editor/${mockupId}`);
    const mockup = mockups.find(m => m.id === mockupId);
    if (mockup) {
      setSelectedMockup(mockup);
      setPosition({ x: 0, y: 0 });
      setScale(1);
      setShowLifestyle(false);
      setDownloadReady(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setUserImage(event.target?.result as string);
          setPosition({ x: 0, y: 0 });
          setScale(1);
          setDownloadReady(false);
        };
        reader.readAsDataURL(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (PNG, JPG, etc).",
          variant: "destructive"
        });
      }
    }
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!userImage) return;
    
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
    lastPos.current = position;

    // Prevent default browser drag behavior
    e.preventDefault();
  };

  const handleDragMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startPos.current.x;
    const deltaY = e.clientY - startPos.current.y;
    
    setPosition({
      x: lastPos.current.x + deltaX,
      y: lastPos.current.y + deltaY
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
    } else {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
    };
  }, [isDragging]);

  const handleZoom = (factor: number) => {
    setScale(prev => {
      const newScale = prev + factor;
      return Math.max(0.5, Math.min(newScale, 2));
    });
    setDownloadReady(false);
  };

  const handleResetPosition = () => {
    setPosition({ x: 0, y: 0 });
    setScale(1);
    setDownloadReady(false);
  };

  const handleRemoveImage = () => {
    setUserImage(null);
    setPosition({ x: 0, y: 0 });
    setScale(1);
    setDownloadReady(false);
  };

  const generateFinalMockup = () => {
    if (!userImage || !selectedMockup) return;
    
    setIsGenerating(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      setIsGenerating(false);
      setDownloadReady(true);
      toast({
        title: "Mockup Generated",
        description: "Your mockup is ready to download!",
      });
    }, 2000);
  };

  const handleDownload = () => {
    if (!userImage || !selectedMockup) return;
    
    toast({
      title: "Download Started",
      description: "Your mockup image is downloading.",
    });
    
    // In a real implementation, this would trigger an actual download
    // For demo purposes, we'll just show a toast
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: "Your mockup has been saved to your device.",
      });
    }, 1500);
  };

  if (!selectedMockup) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p>Loading mockup...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 flex-1">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          >
            {/* Mockup Selection Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-32">
                <h3 className="text-lg font-medium mb-4">Choose Mockup</h3>
                <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                  {mockups.map((mockup) => (
                    <button
                      key={mockup.id}
                      className={`w-full flex items-center p-2 rounded-md transition-colors ${
                        selectedMockup.id === mockup.id
                          ? 'bg-sand text-foreground'
                          : 'hover:bg-sand-light text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => handleMockupSelect(mockup.id)}
                    >
                      <div className="w-12 h-12 rounded overflow-hidden bg-sand-light flex-shrink-0">
                        <img
                          src={mockup.image}
                          alt={mockup.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="ml-3 text-sm text-left">{mockup.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Preview Area */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-sand-light rounded-lg overflow-hidden aspect-w-1 aspect-h-1 shadow-sm">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Background Image (Product Mockup) */}
                  <img
                    src={showLifestyle ? selectedMockup.lifestyleImage : selectedMockup.image}
                    alt={selectedMockup.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* User's Uploaded Image */}
                  {userImage && (
                    <div
                      ref={imageRef}
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                      style={{
                        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${scale})`,
                        maxWidth: '60%',
                        pointerEvents: isGenerating ? 'none' : 'auto'
                      }}
                      onMouseDown={handleDragStart}
                    >
                      <img
                        src={userImage}
                        alt="Your design"
                        className="max-w-full max-h-full object-contain"
                        style={{ opacity: 0.85 }}
                      />
                    </div>
                  )}
                  
                  {/* Loading Overlay */}
                  {isGenerating && (
                    <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <svg className="animate-spin h-10 w-10 text-gold mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="text-lg font-medium">Generating your mockup...</p>
                        <p className="text-sm text-muted-foreground mt-2">This will just take a moment.</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Ready Overlay */}
                  {downloadReady && !isGenerating && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center shadow-lg">
                      <CheckCircle size={16} className="mr-2" />
                      <span className="text-sm font-medium">Ready to download</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Preview Controls */}
              <div className="mt-4 flex justify-between">
                <div className="flex items-center space-x-2">
                  <button
                    className="btn-ghost px-3 py-1.5 text-xs"
                    onClick={() => setShowLifestyle(!showLifestyle)}
                  >
                    {showLifestyle ? (
                      <>
                        <Layers size={14} className="mr-1" />
                        <span>Show Flat View</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon size={14} className="mr-1" />
                        <span>Show Lifestyle</span>
                      </>
                    )}
                  </button>
                </div>
                
                {userImage && (
                  <div className="flex items-center space-x-2">
                    <button
                      className="btn-ghost px-3 py-1.5 text-xs"
                      onClick={() => handleZoom(-0.1)}
                    >
                      Zoom -
                    </button>
                    <button
                      className="btn-ghost px-3 py-1.5 text-xs"
                      onClick={() => handleZoom(0.1)}
                    >
                      Zoom +
                    </button>
                    <button
                      className="btn-ghost px-3 py-1.5 text-xs"
                      onClick={handleResetPosition}
                    >
                      <Move size={14} className="mr-1" />
                      <span>Reset</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Controls Sidebar */}
            <div className="lg:col-span-1 order-3">
              <div className="sticky top-32 bg-white rounded-lg p-6 shadow-sm border border-sand">
                <h3 className="text-lg font-medium mb-4">Your Design</h3>
                
                {!userImage ? (
                  <div className="mb-6">
                    <div className="border-2 border-dashed border-sand rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-3">
                        Upload your logo or artwork
                      </p>
                      <label className="btn-ghost inline-block cursor-pointer">
                        <span>Choose File</span>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Supported formats: PNG, JPG, SVG. Max size: 5MB.
                    </p>
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="bg-sand-light rounded-lg p-3 mb-3">
                      <div className="aspect-w-3 aspect-h-2 mb-2">
                        <img
                          src={userImage}
                          alt="Your uploaded design"
                          className="w-full h-full object-contain rounded"
                        />
                      </div>
                      <div className="flex justify-between">
                        <button
                          className="text-xs text-destructive flex items-center"
                          onClick={handleRemoveImage}
                        >
                          <Trash size={12} className="mr-1" />
                          <span>Remove</span>
                        </button>
                        <label className="text-xs text-foreground flex items-center cursor-pointer">
                          <Upload size={12} className="mr-1" />
                          <span>Change</span>
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm mb-1">Position & Scale</p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Drag the image to position it. Use zoom controls below the preview.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <button
                        className="btn-primary w-full"
                        onClick={generateFinalMockup}
                        disabled={isGenerating || !userImage}
                      >
                        {isGenerating ? 'Generating...' : 'Generate Mockup'}
                      </button>
                      
                      <button
                        className="btn-ghost w-full flex items-center justify-center"
                        disabled={!downloadReady || isGenerating}
                        onClick={handleDownload}
                      >
                        <Download size={16} className="mr-2" />
                        <span>Download Result</span>
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="border-t border-sand pt-4">
                  <h4 className="text-sm font-medium mb-2">Tips</h4>
                  <ul className="text-xs text-muted-foreground space-y-2">
                    <li>• Use transparent PNG files for best results</li>
                    <li>• Position your logo in the center of the product</li>
                    <li>• For premium mockups, download high resolution files</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EditorPage;
