import React from 'react';
import { ArrowRight } from 'lucide-react';

const Offer = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2000&auto=format&fit=crop" 
          alt="Elegant hands" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-lg mx-auto text-center text-cream px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-[2rem]">
          <span className="text-white text-sm font-medium tracking-widest uppercase mb-4 block">Special Offer</span>
          <h2 className="text-5xl font-serif text-white mb-6 leading-tight">
            Chic nails, <br />
            <span className="italic">special price</span>
          </h2>
          <p className="text-white/90 mb-8 font-light">
            Treat yourself to 15% off your next appointment when you book a deluxe service.
          </p>
          <button 
            onClick={() => window.open('https://calendly.com/bodycias-beauty', '_blank')}
            className="bg-cream text-plum px-8 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors inline-flex items-center gap-2 group"
          >
             Book Now 
             <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;