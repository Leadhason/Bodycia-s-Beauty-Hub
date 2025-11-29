import React from 'react';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-gradient-to-t from-white to-cream relative overflow-hidden">
      
      {/* Decorative doodle */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-mauve opacity-20 hidden md:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 10 C 20 10, 10 40, 10 50 C 10 80, 30 90, 50 90 C 70 90, 90 80, 90 50 C 90 20, 80 10, 50 10" />
          <path d="M30 30 L 40 40 M 60 30 L 70 20" />
        </svg>
      </div>

      <div className="max-w-2xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-serif text-plum mb-4">
          Reach out, <br />
          <span className="italic font-light">stay polished</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-plum/5 border border-plum/5">
        <form 
          className="space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const name = formData.get('name');
            const email = formData.get('email');
            const inquiry = formData.get('inquiry');
            const message = formData.get('message');
            const subject = `${inquiry} from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiry}\n\nMessage:\n${message}`;
            window.location.href = `mailto:hello@pinklime.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          }}
        >
           <div>
             <h3 className="font-serif text-3xl text-plum mb-8">Get in touch</h3>
           </div>
           
           <div className="space-y-6">
             <div className="space-y-2">
               <label className="text-sm font-medium text-mauve/80 uppercase tracking-wide">Full Name</label>
               <input name="name" type="text" placeholder="Enter your name" required className="w-full bg-cream border border-plum/10 rounded-xl p-4 text-plum placeholder:text-plum/30 focus:border-mauve focus:ring-1 focus:ring-mauve outline-none transition-all" />
             </div>

             <div className="space-y-2">
               <label className="text-sm font-medium text-mauve/80 uppercase tracking-wide">Email</label>
               <input name="email" type="email" placeholder="Enter your email" required className="w-full bg-cream border border-plum/10 rounded-xl p-4 text-plum placeholder:text-plum/30 focus:border-mauve focus:ring-1 focus:ring-mauve outline-none transition-all" />
             </div>

             <div className="space-y-2">
               <label className="text-sm font-medium text-mauve/80 uppercase tracking-wide">Inquiry Type</label>
               <div className="relative">
                 <select name="inquiry" className="w-full bg-cream border border-plum/10 rounded-xl p-4 text-plum appearance-none focus:border-mauve focus:ring-1 focus:ring-mauve outline-none transition-all cursor-pointer">
                   <option>Booking Request</option>
                   <option>General Inquiry</option>
                   <option>Feedback</option>
                 </select>
                 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-plum/50">
                   <ArrowRight className="rotate-90 w-4 h-4" />
                 </div>
               </div>
             </div>

             <div className="space-y-2">
               <label className="text-sm font-medium text-mauve/80 uppercase tracking-wide">Message</label>
               <textarea name="message" rows={4} placeholder="How can we help?" required className="w-full bg-cream border border-plum/10 rounded-xl p-4 text-plum placeholder:text-plum/30 focus:border-mauve focus:ring-1 focus:ring-mauve outline-none transition-all resize-none"></textarea>
             </div>
           </div>

           <button type="submit" className="w-full bg-mauve text-white font-medium py-4 rounded-xl hover:bg-plum transition-colors shadow-lg shadow-mauve/20">
             Send Message
           </button>
        </form>
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="tel:+233502521811" className="bg-white/60 p-8 rounded-3xl border border-plum/5 flex items-center gap-4 hover:bg-white/80 transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-mauve border border-plum/5 shrink-0">
            <Phone size={20} />
          </div>
          <div>
            <h4 className="font-serif text-xl text-plum">Call Us</h4>
            <p className="text-plum/60 text-sm">Let's talk nails</p>
          </div>
        </a>

        <a href="https://maps.google.com/?q=JR85+X53+Osu+Badu+Ave+Accra+Ghana" target="_blank" rel="noopener noreferrer" className="bg-white/60 p-8 rounded-3xl border border-plum/5 flex items-center gap-4 hover:bg-white/80 transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-mauve border border-plum/5 shrink-0">
            <MapPin size={20} />
          </div>
          <div>
            <h4 className="font-serif text-xl text-plum">Find Us</h4>
            <p className="text-plum/60 text-sm">See you here</p>
          </div>
        </a>

        <a href="mailto:hello@pinklime.com" className="bg-white/60 p-8 rounded-3xl border border-plum/5 flex items-center gap-4 hover:bg-white/80 transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-mauve border border-plum/5 shrink-0">
            <Mail size={20} />
          </div>
          <div>
            <h4 className="font-serif text-xl text-plum">Email Us</h4>
            <p className="text-plum/60 text-sm">hello@pinklime.com</p>
          </div>
        </a>
      </div>

    </section>
  );
};

export default Contact;