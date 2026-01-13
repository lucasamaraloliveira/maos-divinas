
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppFloating from './components/WhatsAppFloating';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="sobre">
          <About />
        </section>
        
        <section id="servicos">
          <Services />
        </section>
        
        <section id="galeria">
          <Gallery />
        </section>
        
        <section id="depoimentos">
          <Testimonials />
        </section>
        
        <section id="contato">
          <Contact />
        </section>
      </main>

      <Footer />
      
      <BackToTop />
      <WhatsAppFloating />
    </div>
  );
};

export default App;
