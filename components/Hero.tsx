
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Camadas de Luxo com Efeito Ken Burns */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=2000')`,
          filter: 'brightness(0.9) contrast(1.05)',
          animation: 'slowZoom 20s infinite alternate linear'
        }}
      >
        {/* Overlay Delicado */}
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ed4b82]/10 via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-6xl md:pt-20 flex flex-col items-center">
        <div className="opacity-0 animate-reveal-up">
          <div className="inline-block px-4 md:px-6 py-1.5 md:py-2 mb-4 md:mb-6 bg-white/40 backdrop-blur-md rounded-full border border-black/[0.03]">
            <h2 className="text-[#ed4b82] text-[10px] md:text-sm lg:text-base font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase drop-shadow-sm">
              Estética de Alto Padrão
            </h2>
          </div>
          <h1 className="text-[#1a1a1a] text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif font-bold mb-4 md:mb-10 leading-tight md:leading-none tracking-tight drop-shadow-sm">
            Mãos <span className="text-[#ed4b82] inline-block hover:scale-105 transition-transform duration-700">Divinas</span>
          </h1>
        </div>

        {/* Frase em Destaque com o estilo de luxo */}
        <div className="relative mb-8 md:mb-16 max-w-3xl mx-auto transform hover:scale-[1.01] transition-transform duration-500 w-full opacity-0 animate-reveal-up delay-300">
          {/* Box de Vidro Luxuoso com transição de blur */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-md border-y border-black/[0.03] -rotate-1 scale-105 transition-all duration-1000 group-hover:backdrop-blur-xl"></div>

          <div className="relative py-5 md:py-8 px-4 md:px-12 border-x border-[#ed4b82]/30">
            <p className="text-[#333333] text-base md:text-2xl lg:text-3xl font-serif font-light italic leading-relaxed tracking-wide">
              "Onde a <span className="text-[#ed4b82] not-italic font-medium">arte</span> encontra a <span className="text-gray-500 not-italic font-medium">exclusividade</span> para realçar a beleza única de cada mulher."
            </p>
            {/* Elementos decorativos de canto animáveis */}
            <div className="absolute top-0 left-0 w-4 h-4 md:w-8 md:h-8 border-t border-l border-[#ed4b82]/30 transition-transform group-hover:scale-125"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 md:w-8 md:h-8 border-b border-r border-[#ed4b82]/30 transition-transform group-hover:scale-125"></div>
          </div>
        </div>

        {/* Call to Action com Efeito Shine */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-8 w-full max-w-xl mx-auto opacity-0 animate-reveal-up delay-500">
          <a
            href="#servicos"
            className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-[#ed4b82] text-white rounded-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold hover:bg-[#d43d6f] transition-all duration-500 text-center"
          >
            Explorar Ateliê
          </a>
          <a
            href="#contato"
            className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 border border-[#ed4b82]/30 text-[#333333] rounded-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold hover:bg-[#333333] hover:text-white transition-all duration-500 backdrop-blur-sm text-center"
          >
            Reservar Experiência
          </a>
        </div>
      </div>

      {/* Indicador de Rolagem Luxuoso */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4 opacity-0 animate-reveal-up delay-700">
        <span className="text-black/30 text-[9px] uppercase tracking-[0.5em] rotate-90 origin-left mb-8">Scroll</span>
        <div className="w-px h-16 bg-[#ed4b82]/40 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Hero;
