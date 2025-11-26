import React from 'react';

const Hero = () => {
  return (
    <section className="pt-12 pb-20 px-4 md:px-8 text-center">
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-mauve text-sm font-medium tracking-wide mb-4">Bodycia's Team</p>
        <h1 className="text-5xl md:text-8xl font-serif text-plum leading-[1.1]">
          Crafted by <br />
          <span className="italic font-light">calm hands</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto h-[500px] md:h-[600px]">
        {/* Left Image */}
        <div className="relative overflow-hidden rounded-tl-[4rem] rounded-tr-lg rounded-bl-lg rounded-br-lg h-full group">
          <img 
            src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop" 
            alt="Woman with beautiful nails" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        {/* Center Image */}
        <div className="relative overflow-hidden rounded-lg h-full group hidden md:block">
           <img 
            src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop" 
            alt="Nail care close up" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden rounded-tr-[4rem] rounded-tl-lg rounded-bl-lg rounded-br-lg h-full group hidden md:block">
           <img 
            src="https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?q=80&w=800&auto=format&fit=crop" 
            alt="Relaxed atmosphere" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;