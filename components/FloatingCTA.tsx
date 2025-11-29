import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCTA = () => {
  return (
    <a 
      href="tel:+233502521811"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-mauve rounded-full flex items-center justify-center text-white shadow-xl shadow-mauve/40 hover:scale-110 hover:bg-plum transition-all duration-300"
      aria-label="Call Us"
    >
      <Phone size={20} />
    </a>
  );
};

export default FloatingCTA;
