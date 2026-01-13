
import React from 'react';

const testimonials = [
  {
    name: 'Helena Silva',
    text: 'A experiência Mãos Divinas é única. O atendimento é primoroso e o acabamento da minha manicure russa durou 4 semanas impecável.',
    role: 'Empresária'
  },
  {
    name: 'Beatriz Costa',
    text: 'Nunca vi nada igual. O cuidado com a saúde das unhas e a precisão da Nail Art me conquistaram. É um luxo que vale cada centavo.',
    role: 'Arquiteta'
  },
  {
    name: 'Carolina Mendes',
    text: 'Sinto-me uma rainha toda vez que saio do ateliê. O ambiente é relaxante e as profissionais são verdadeiras artistas.',
    role: 'Influenciadora'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 opacity-0 animate-reveal-up">
          <h3 className="text-[#d4af37] uppercase tracking-[0.3em] font-semibold text-xs md:text-sm mb-4">Relatos</h3>
          <h2 className="text-4xl md:text-6xl font-serif">O Que Nossas Clientes Dizem</h2>
          <div className="w-16 h-px bg-[#d4af37]/30 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="relative p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#d4af37]/30 transition-all duration-700 group opacity-0 animate-reveal-up"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="text-[#d4af37] text-7xl font-serif absolute -top-6 -left-2 opacity-10 group-hover:opacity-30 transition-opacity duration-700">“</div>
              <p className="text-white/70 italic text-lg leading-relaxed mb-10 relative z-10 group-hover:text-white transition-colors duration-500">
                {t.text}
              </p>
              <div className="mt-auto border-t border-white/10 pt-6">
                <h4 className="font-serif text-2xl text-[#d4af37] tracking-wide">{t.name}</h4>
                <p className="uppercase tracking-[0.2em] text-[10px] text-white/40 font-bold mt-1">{t.role}</p>
              </div>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t border-r border-[#d4af37]/0 group-hover:border-[#d4af37]/40 group-hover:w-8 group-hover:h-8 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
