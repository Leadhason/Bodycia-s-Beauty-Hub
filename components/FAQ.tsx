import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left Side */}
        <div className="lg:w-1/3">
          <h2 className="text-5xl md:text-6xl font-serif text-plum mb-6">
            Everything you <br />
            <span className="italic font-light text-mauve">might wonder</span>
          </h2>
          <button 
            onClick={() => window.open('https://calendly.com/bodycias-beauty', '_blank')}
            className="bg-plum/10 hover:bg-plum/20 text-plum px-8 py-3 rounded-full flex items-center gap-2 group transition-colors"
          >
            Book Now <span className="w-6 h-6 rounded-full bg-plum text-cream flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">&gt;</span>
          </button>
        </div>

        {/* Right Side - Accordion */}
        <div className="lg:w-2/3 flex flex-col gap-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border border-plum/10 rounded-2xl transition-all duration-300 ${isOpen ? 'bg-white shadow-sm' : 'bg-transparent hover:bg-white/50'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center cursor-pointer"
                >
                  <span className="text-lg md:text-xl text-plum font-medium pr-8">{item.question}</span>
                  <ChevronDown 
                    className={`text-mauve flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 md:px-8 pb-8 text-plum/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
