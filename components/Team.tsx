import React from 'react';
import { TEAM_DATA } from '../constants';

const Team = () => {
  return (
    <section id="team" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_DATA.map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-6 h-[500px] relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover filter sepia-[0.1] group-hover:sepia-0 group-hover:scale-105 transition-all duration-700" 
                />
                 {/* Name Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-cream/95 backdrop-blur-sm p-6 rounded-lg text-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-serif text-plum mb-1">{member.name}</h3>
                  <p className="text-mauve font-medium text-xs tracking-widest uppercase">{member.role}</p>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;