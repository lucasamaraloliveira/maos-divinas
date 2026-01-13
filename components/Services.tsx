
import React from 'react';

const services = [
  {
    title: 'Manicure Russa',
    price: 'A partir de R$ 180',
    description: 'Técnica exclusiva de cutilagem a seco para um acabamento perfeito e duradouro.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Alongamento em Gel',
    price: 'A partir de R$ 250',
    description: 'Extensões ultra-naturais com resistência extrema e brilho cristalino.',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Nail Art Exclusiva',
    price: 'Sob consulta',
    description: 'Design personalizado feito à mão por artistas especializadas em micro pintura.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=500'
  },
  {
    title: 'Spa Divino',
    price: 'A partir de R$ 120',
    description: 'Ritual de hidratação profunda com óleos essenciais e massagem relaxante.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=500'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#faf9f6]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 opacity-0 animate-reveal-up">
          <h3 className="text-[#d4af37] uppercase tracking-[0.3em] font-semibold text-xs md:text-sm mb-4">Experiência</h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2c2c2c]">Nossos Serviços</h2>
          <div className="w-16 md:w-24 h-px bg-[#d4af37] mx-auto mt-6 transition-all duration-700 hover:w-40"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 xl:gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 opacity-0 animate-reveal-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-56 md:h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#d4af37] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Premium
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-serif mb-2 text-[#2c2c2c] group-hover:text-[#d4af37] transition-colors">{service.title}</h4>
                <p className="text-[#d4af37] text-xs font-bold mb-4 uppercase tracking-widest">{service.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
                <a href="#contato" className="relative inline-block text-[10px] uppercase tracking-[0.2em] font-bold pb-1 group/link transition-all">
                  <span className="relative z-10">Reservar Horário</span>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-[#d4af37] scale-x-50 group-hover/link:scale-x-100 transition-transform origin-left"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
