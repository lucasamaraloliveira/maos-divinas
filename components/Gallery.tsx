
import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600'
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 md:mb-16 gap-6 opacity-0 animate-reveal-up">
          <div className="max-w-xl">
            <h3 className="text-[#d4af37] uppercase tracking-[0.3em] font-semibold text-xs md:text-sm mb-4">Portfólio</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2c2c2c]">Brilho em Detalhes</h2>
          </div>
          <a href="#" className="inline-block text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-black pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-all w-fit hover-shine">
            Ver Instagram @MaosDivinas
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden group relative shadow-lg opacity-0 animate-reveal-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={img} 
                alt={`Trabalho ${index + 1}`} 
                className="w-full h-full object-cover sm:grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold border border-white/50 px-6 py-3 hover:bg-white hover:text-black transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  Ver Detalhes
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
