import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-plum-light/10 text-plum text-xs py-2 px-4 md:px-8 flex justify-between items-center font-medium border-b border-plum/5">
        <span>Mon – Fri: 10AM – 6PM</span>
        <div className="flex gap-6 hidden md:flex">
          <a href="tel:+12125550198" className="hover:text-mauve transition-colors flex items-center gap-1">
            <Phone size={12} /> + 1 (212) 555–0198
          </a>
          <span className="flex items-center gap-1">
            <MapPin size={12} /> 301 Milam St, Houston
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-plum/5 py-5 px-6 md:px-12 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group z-[60] relative">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-plum group-hover:rotate-12 transition-transform duration-500">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M15 12C15 14.7614 12.7614 17 10 17C7.23858 17 5 14.7614 5 12C5 9.23858 7.23858 7 10 7C12.7614 7 15 9.23858 15 12Z" fill="currentColor"/>
             </svg>
            <span className="font-serif text-2xl font-medium tracking-tight text-plum">Bodycia's</span>
          </a>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-plum text-sm font-medium hover:text-mauve hover:italic font-serif transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-3">
               <button className="w-10 h-10 rounded-full bg-plum/5 flex items-center justify-center text-plum hover:bg-plum hover:text-cream transition-colors">
                  <Phone size={16} />
               </button>
               <button className="bg-plum/5 hover:bg-plum/10 text-plum px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                 Book Now
               </button>
            </div>
            
            <button 
              className="md:hidden text-plum z-[60] relative w-10 h-10 flex items-center justify-center transition-colors hover:bg-plum/5 rounded-full"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-plum/20 backdrop-blur-sm z-[90] transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Sheet - Slides in from Right */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-cream z-[100] shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) md:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header inside sheet */}
        <div className="flex items-center justify-between p-6 border-b border-plum/5">
             <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-plum">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" fillOpacity="0.2"/>
                  <path d="M15 12C15 14.7614 12.7614 17 10 17C7.23858 17 5 14.7614 5 12C5 9.23858 7.23858 7 10 7C12.7614 7 15 9.23858 15 12Z" fill="currentColor"/>
                </svg>
                <span className="font-serif text-2xl font-medium text-plum">Bodycia's</span>
             </div>
             <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-12 h-12 flex items-center justify-center text-plum hover:bg-plum/5 rounded-full transition-colors"
             >
               <X size={28} strokeWidth={1.5} />
             </button>
        </div>

        {/* Links Container */}
        <div className="flex-1 overflow-y-auto py-12 px-6 flex flex-col items-center">
           <div className="flex flex-col gap-8 w-full items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-4xl font-serif text-plum text-center hover:italic hover:text-mauve transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
               <a 
                  href="#book"
                  className="text-4xl font-serif text-mauve text-center italic mt-6 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                  <span className="text-2xl">→</span>
                </a>
           </div>
        </div>

        {/* Footer Info */}
        <div className="p-8 border-t border-plum/10 bg-plum/5 space-y-6">
          <a href="tel:+12125550198" className="flex items-center justify-center gap-3 text-plum hover:text-mauve transition-colors">
            <Phone size={18} />
            <span className="font-medium text-lg">+ 1 (212) 555–0198</span>
          </a>
          
          <div className="flex items-center justify-center gap-3 text-plum">
            <MapPin size={18} />
            <span className="font-medium text-lg">301 Milam St, Houston</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;