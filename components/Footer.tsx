import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkbg text-cream px-6 md:px-12 py-20 rounded-t-[3rem] mt-12 mx-2 md:mx-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 rounded-full border-2 border-cream"></div>
                <span className="font-serif text-2xl font-medium tracking-tight">Bodycia's</span>
             </div>
             <p className="text-white/60 mb-8 leading-relaxed max-w-xs">
               A studio built around calm service, clean products, and good nails.
             </p>
             <div className="space-y-3 text-sm">
                <a href="tel:+233552527502" className="flex items-center gap-3 hover:text-mauve transition-colors">
                  <Phone size={16} /> +233 55 252 7502
                </a>
                <span className="flex items-center gap-3 text-white/80">
                  <MapPin size={16} /> Pinanko Rd, Kumasi
                </span>
                <a href="mailto:hello@bodycias.com" className="flex items-center gap-3 hover:text-mauve transition-colors">
                  <Mail size={16} /> hello@bodycias.com
                </a>
             </div>
             <div className="mt-8 pt-8 border-t border-white/10">
               <span className="text-white/40 text-xs block mb-1">We're Open:</span>
               <span className="font-serif text-lg">Mon - Fri: 10AM - 6PM</span>
             </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block"></div>

          {/* Menu */}
          <div>
            <h5 className="text-white/40 text-xs uppercase tracking-widest mb-6">Menu</h5>
            <ul className="space-y-4">
              {['About', 'Services', 'Team', 'FAQ', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-serif text-3xl md:text-4xl text-cream hover:text-mauve hover:italic transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h5 className="text-white/40 text-xs uppercase tracking-widest mb-6">Follow Us</h5>
            <ul className="space-y-4">
              <li>
                <a href="https://facebook.com/bodyciasbeauty" target="_blank" rel="noopener noreferrer" className="font-serif text-3xl md:text-4xl text-cream hover:text-mauve hover:italic transition-all">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com/bodyciasbeauty" target="_blank" rel="noopener noreferrer" className="font-serif text-3xl md:text-4xl text-cream hover:text-mauve hover:italic transition-all">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://pinterest.com/bodyciasbeauty" target="_blank" rel="noopener noreferrer" className="font-serif text-3xl md:text-4xl text-cream hover:text-mauve hover:italic transition-all">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm">
          <span>© 2025, Bodycia's Beauty Hub</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/licenses" className="hover:text-white">Licenses</a>
            <a href="https://leadhason.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white">Developed by Leadhason</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;