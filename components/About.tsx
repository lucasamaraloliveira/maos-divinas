
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1 opacity-0 animate-reveal-right">
            <div className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-white/50 -z-10 rounded-full animate-pulse"></div>
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800"
                alt="Manicure de Luxo"
                className="w-full object-cover aspect-[4/5] max-h-[500px] lg:max-h-none hover:scale-110 transition-transform duration-[3000ms]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#ed4b82] p-6 md:p-10 hidden sm:block z-20 shadow-xl transform hover:rotate-3 transition-transform duration-500">
              <p className="text-white font-serif text-2xl md:text-4xl italic">Excelência em cada detalhe.</p>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 order-1 lg:order-2 opacity-0 animate-reveal-up">
            <h3 className="text-[#ed4b82] uppercase tracking-[0.3em] font-semibold text-xs md:text-sm">Nossa Filosofia</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-[#2c2c2c] leading-tight">
              A Arte de Realçar sua <span className="italic">Essência</span>
            </h2>
            <div className="w-12 h-px bg-[#ed4b82]/40 mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              No Ateliê Mãos Divinas, acreditamos que as mãos são o cartão de visitas da alma. Nossa missão é proporcionar uma experiência de luxo incomparável, onde a técnica de alto padrão se une à exclusividade de um atendimento personalizado.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Utilizamos apenas produtos premium e as técnicas mais avançadas do mercado global para garantir que cada trabalho reflita o brilho e a sofisticação que você merece.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-[#ed4b82] pl-4 group">
                <h4 className="font-serif text-3xl md:text-4xl text-[#ed4b82] group-hover:scale-110 origin-left transition-transform">10+</h4>
                <p className="uppercase text-[10px] tracking-widest text-gray-400 mt-2 font-bold">Anos de Experiência</p>
              </div>
              <div className="border-l-2 border-[#ed4b82] pl-4 group">
                <h4 className="font-serif text-3xl md:text-4xl text-[#ed4b82] group-hover:scale-110 origin-left transition-transform">5k+</h4>
                <p className="uppercase text-[10px] tracking-widest text-gray-400 mt-2 font-bold">Clientes Felizes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
