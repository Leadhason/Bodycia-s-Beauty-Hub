import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Offer from './components/Offer';
import Team from './components/Team';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App = () => {
  return (
    <div className="min-h-screen bg-cream selection:bg-mauve selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Offer />
        <Team />
        <Philosophy />
        <Testimonials />
        <FAQ />
        <Contact />
        <PreFooter />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;