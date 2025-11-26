import React from 'react';
import { Star, CheckCircle, Crown } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gradient-to-b from-cream to-white">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <span className="text-mauve text-sm font-medium tracking-wide block mb-6">About Us</span>
        <h2 className="text-5xl md:text-7xl font-serif text-plum leading-tight mb-8">
          Rooted in calm. <br />
          <span className="italic font-light">Built on detail</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-plum/10 pt-16">
        <div className="flex flex-col items-center gap-4">
          <Star className="text-plum w-8 h-8" strokeWidth={1.5} />
          <div>
            <span className="block text-5xl font-serif text-plum mb-2">4.98</span>
            <span className="text-plum/80 font-medium">Average Rating</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4 md:border-l md:border-r border-plum/10 px-4">
          <CheckCircle className="text-plum w-8 h-8" strokeWidth={1.5} />
          <div>
            <span className="block text-5xl font-serif text-plum mb-2">12+</span>
            <span className="text-plum/80 font-medium">Years of Expertise</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Crown className="text-plum w-8 h-8" strokeWidth={1.5} />
          <div>
            <span className="block text-5xl font-serif text-plum mb-2">98%</span>
            <span className="text-plum/80 font-medium">Rebook Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;