
export interface Mockup {
  id: string;
  name: string;
  category: string;
  image: string;
  lifestyleImage: string;
  description: string;
  premium: boolean;
}

export const mockups: Mockup[] = [
  {
    id: 'tshirt-white',
    name: 'White T-Shirt',
    category: 'apparel',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800',
    lifestyleImage: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80&w=800',
    description: 'Classic white t-shirt on a clean background, perfect for minimal designs.',
    premium: false
  },
  {
    id: 'mug-ceramic',
    name: 'Ceramic Mug',
    category: 'drinkware',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800',
    lifestyleImage: 'https://images.unsplash.com/photo-1585437474665-38396f7c5330?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant ceramic mug for showcasing your beverage-related designs.',
    premium: false
  },
  {
    id: 'poster-frame',
    name: 'Framed Poster',
    category: 'prints',
    image: 'https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?auto=format&fit=crop&q=80&w=800',
    lifestyleImage: 'https://images.unsplash.com/photo-1595514535316-ff81d5e80742?auto=format&fit=crop&q=80&w=800',
    description: 'Professionally framed poster in a minimal interior setting.',
    premium: false
  },
  {
    id: 'tote-canvas',
    name: 'Canvas Tote Bag',
    category: 'bags',
    image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80&w=800',
    lifestyleImage: 'https://images.unsplash.com/photo-1607877742574-a449a1a23ab3?auto=format&fit=crop&q=80&w=800',
    description: 'Sturdy canvas tote bag, perfect for showcasing your brand on the go.',
    premium: false
  },
  {
    id: 'hoodie-black',
    name: 'Black Hoodie',
    category: 'apparel',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    lifestyleImage: 'https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?auto=format&fit=crop&q=80&w=800',
    description: 'Premium black hoodie mockup for urban and streetwear designs.',
    premium: true
  },
  {
    id: 'bottle-glass',
    name: 'Glass Water Bottle',
    category: 'drinkware',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=800',
    lifestyleImage: 'https://images.unsplash.com/photo-1626778279055-7763545e0dd1?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant glass water bottle for premium beverage branding.',
    premium: true
  }
];

export const categories = [
  { id: 'all', name: 'All Mockups' },
  { id: 'apparel', name: 'Apparel' },
  { id: 'drinkware', name: 'Drinkware' },
  { id: 'prints', name: 'Prints & Posters' },
  { id: 'bags', name: 'Bags & Accessories' }
];
