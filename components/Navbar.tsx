
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'sobre', 'servicos', 'galeria', 'depoimentos', 'contato'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -150 && rect.top <= 250;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home', id: 'home' },
    { name: 'Sobre', href: '#sobre', id: 'sobre' },
    { name: 'Serviços', href: '#servicos', id: 'servicos' },
    { name: 'Galeria', href: '#galeria', id: 'galeria' },
    { name: 'Depoimentos', href: '#depoimentos', id: 'depoimentos' },
    { name: 'Contato', href: '#contato', id: 'contato' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav 
        className={`fixed top-0 md:top-6 left-0 md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-700 w-full md:w-[92%] max-w-6xl 
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.1)] md:rounded-full py-3 px-8 md:px-12' 
          : 'bg-transparent py-5 md:py-8 px-8'}`}
      >
        <div className="flex items-center justify-between">
          <div className={`font-serif text-xl md:text-2xl font-bold tracking-[0.25em] transition-all duration-500 
            ${scrolled ? 'text-[#b8860b] scale-95' : 'text-white scale-100'}`}
          >
            MÃOS DIVINAS
          </div>
          
          <ul className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 relative group
                    ${scrolled ? (activeSection === link.id ? 'text-[#d4af37]' : 'text-gray-800') : 'text-white'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] transition-all duration-500 group-hover:w-full ${activeSection === link.id ? 'w-full' : ''}`}></span>
                </a>
              </li>
            ))}
          </ul>

          <button 
            onClick={toggleMenu}
            className={`lg:hidden p-2 transition-transform active:scale-90 ${scrolled ? 'text-gray-800' : 'text-white'}`}
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 transition-all duration-500 ${isMenuOpen ? 'w-6 translate-y-2 -rotate-45 bg-gray-800' : 'w-6 bg-current'}`}></span>
              <span className={`h-0.5 transition-all duration-500 ${isMenuOpen ? 'opacity-0 bg-gray-800' : 'w-4 bg-current'}`}></span>
              <span className={`h-0.5 transition-all duration-500 ${isMenuOpen ? 'w-6 -translate-y-2 rotate-45 bg-gray-800' : 'w-5 bg-current'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-700 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={toggleMenu}></div>
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-12 flex flex-col shadow-2xl transition-transform duration-700 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="font-serif text-2xl font-bold tracking-widest text-[#b8860b] mb-16 opacity-0 animate-reveal-right delay-100">
            MÃOS DIVINAS
          </div>
          <ul className="space-y-8">
            {navLinks.map((link, idx) => (
              <li key={link.name} className={`opacity-0 ${isMenuOpen ? 'animate-reveal-right' : ''}`} style={{ animationDelay: `${200 + idx * 100}ms` }}>
                <a 
                  href={link.href}
                  onClick={toggleMenu}
                  className={`text-sm uppercase tracking-[0.4em] block py-2 transition-all hover:translate-x-2
                    ${activeSection === link.id ? 'text-[#d4af37] font-bold' : 'text-gray-500'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={`mt-auto opacity-0 ${isMenuOpen ? 'animate-reveal-up' : ''}`} style={{ animationDelay: '800ms' }}>
            <a 
              href="#contato" 
              onClick={toggleMenu}
              className="block w-full text-center py-5 bg-[#2c2c2c] text-white uppercase tracking-widest text-[10px] font-bold shadow-2xl transition-all active:scale-95 hover:bg-[#d4af37]"
            >
              Agendar Experiência
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
