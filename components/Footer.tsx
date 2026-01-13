
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-[#faf9f6] border-t border-gray-100 opacity-0 animate-reveal-up delay-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="font-serif text-3xl font-bold tracking-widest text-[#d4af37] hover:scale-105 transition-transform duration-500 cursor-default">
            MÃOS DIVINAS
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
            {['Início', 'Sobre', 'Serviços', 'Privacidade'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#d4af37] transition-colors duration-300">{item}</a>
            ))}
          </div>

          <div className="text-[10px] text-gray-300 uppercase tracking-widest font-medium text-center md:text-right">
            &copy; {new Date().getFullYear()} Mãos Divinas Ateliê.<br className="md:hidden" /> Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
