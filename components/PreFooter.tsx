import React from 'react';
import { ArrowRight } from 'lucide-react';

const PreFooter = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-cream text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
         <div className="flex justify-center items-center gap-4 mb-8">
            <h2 className="text-5xl md:text-7xl font-serif text-plum leading-tight">
               Ready for nails <br />
               that feel <span className="italic text-mauve">like you?</span>
            </h2>
         </div>
         
         <p className="text-plum/70 mb-10 max-w-lg mx-auto">
            Custom nail designs that reflect your mood, style, and everyday energy.
         </p>

         <button 
           onClick={() => window.open('https://calendly.com/bodycias-beauty', '_blank')}
           className="bg-mauve text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-plum transition-all inline-flex items-center gap-3 group"
         >
           Book Now
           <span className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
             <ArrowRight size={16} />
           </span>
         </button>

         {/* Image Circles - Decorative */}
         <div className="mt-20 flex justify-center items-end gap-4 md:gap-8 opacity-80">
            <div className="w-40 h-64 md:w-64 md:h-96 rounded-t-full overflow-hidden translate-y-10">
               <img src="/image-6.jpg" className="w-full h-full object-cover" alt="Nails" />
            </div>
            <div className="w-48 h-56 md:w-72 md:h-80 rounded-t-full overflow-hidden">
               <img src="/image-4.jpg" className="w-full h-full object-cover opacity-80 mix-blend-overlay" alt="Texture" />
            </div>
            <div className="w-40 h-64 md:w-64 md:h-96 rounded-t-full overflow-hidden translate-y-10">
               <img src="/image-5.jpg" className="w-full h-full object-cover" alt="Nails" />
            </div>
         </div>
      </div>
    </section>
  );
};

export default PreFooter;
