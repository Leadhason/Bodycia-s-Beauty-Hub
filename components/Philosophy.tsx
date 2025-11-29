import React from 'react';

const Philosophy = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
         <div className="h-[600px] lg:h-[700px] rounded-[3rem] overflow-hidden relative col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2000&auto=format&fit=crop" 
              alt="Model with nice nails" 
              className="w-full h-full object-cover"
            />
            
            {/* Quote Card Overlay */}
            <div className="absolute bottom-12 md:bottom-20 left-4 md:left-20 right-4 md:right-auto max-w-md bg-cream p-10 md:p-14 rounded-3xl shadow-2xl">
               <h3 className="text-3xl md:text-4xl font-serif text-plum leading-snug mb-8">
                 “Pinklime is where calm meets style. Clean sets, custom art, zero drama. Just good nails, done right”
               </h3>
               
               <div className="flex items-center gap-4">
                 <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" 
                    alt="Founder" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-plum/10"
                 />
                 <div>
                    <p className="text-plum font-medium">Lina Akwaku</p>
                    <p className="text-mauve text-sm">Founder of Pinklime</p>
                 </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Philosophy;