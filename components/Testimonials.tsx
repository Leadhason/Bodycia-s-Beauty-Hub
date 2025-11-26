import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { Quote, MessageCircle, ThumbsUp } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="flex justify-center gap-12 text-mauve mb-6">
           <MessageCircle size={32} strokeWidth={1.5} className="rotate-12" />
           <ThumbsUp size={32} strokeWidth={1.5} className="-rotate-12"/>
           <span className="font-serif text-4xl">??</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-serif text-plum">
          Why they keep <br />
          <span className="italic text-mauve">coming back</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS_DATA.map((item, idx) => (
          <div key={idx} className="bg-cream rounded-[2rem] p-10 md:p-14 relative group hover:bg-plum/5 transition-colors">
            <Quote className="text-mauve w-8 h-8 mb-6 opacity-50" />
            <p className="text-2xl md:text-3xl font-serif text-plum mb-8 leading-snug">
              {item.text}
            </p>
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-plum/20"></span>
              <span className="text-plum/80 font-medium text-sm text-mauve">{item.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;