import React from 'react';
import { SERVICES_DATA } from '../constants';
import { Sparkles, Sun, Circle } from 'lucide-react';

const Services = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles': return <Sparkles size={20} strokeWidth={1} />;
      case 'sun': return <Sun size={20} strokeWidth={1} />;
      default: return <Circle size={20} strokeWidth={1} />;
    }
  };

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
           <div>
              <h2 className="text-5xl md:text-6xl font-serif text-plum mb-4">
                Services that <br />
                <span className="italic font-light">speak your style</span>
              </h2>
           </div>
           <div className="md:text-right">
              <p className="text-plum/70 max-w-sm mb-6">
                Style that fits your schedule, your energy, and your aesthetic.
              </p>
              <button className="bg-plum/5 hover:bg-plum/10 text-plum px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Book Now
              </button>
           </div>
        </div>

        <div className="flex flex-col gap-20">
          {SERVICES_DATA.map((category, idx) => (
            <div key={idx} className="border-t border-plum/10 pt-12">
              <div className="flex items-center gap-3 text-mauve mb-10">
                {getIcon(category.icon)}
                <span className="text-xl font-medium text-plum font-serif">{category.title}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="relative flex justify-between items-baseline border-b border-plum/5 pb-4 group cursor-default">
                    <span className="text-xl font-serif text-plum group-hover:text-mauve transition-colors">{item.name}</span>
                    <span className="text-xl font-serif text-mauve italic">{item.price}</span>
                    
                    {/* Hover Image */}
                    {item.image && (
                      <div className="absolute left-1/2 -top-12 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg border-2 border-white z-10 rotate-0 group-hover:rotate-6">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;