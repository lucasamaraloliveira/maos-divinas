
import React, { useState, useRef, useEffect } from 'react';

const Contact: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Selecione um serviço');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    'Manicure Russa',
    'Alongamento em Gel',
    'Nail Art Exclusiva',
    'Spa Divino'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-[#faf7f7] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-[0_30px_100px_rgba(255,0,127,0.1)] overflow-hidden rounded-sm flex flex-col lg:flex-row">
          {/* Form Side */}
          <div className="w-full lg:w-3/5 p-8 sm:p-12 lg:p-20 order-2 lg:order-1 opacity-0 animate-reveal-up">
            <h3 className="text-[#ed4b82] uppercase tracking-[0.3em] font-semibold text-xs mb-4">Agendamento</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-[#2c2c2c] mb-8 lg:mb-12">Momento Divino</h2>

            <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="group opacity-0 animate-reveal-up delay-100">
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 group-focus-within:text-[#ed4b82] transition-colors">Nome Completo</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#ed4b82] outline-none transition-all placeholder:text-gray-200 text-[#333333]" placeholder="Seu nome" />
                </div>
                <div className="group opacity-0 animate-reveal-up delay-200">
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 group-focus-within:text-[#ed4b82] transition-colors">WhatsApp</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#ed4b82] outline-none transition-all placeholder:text-gray-200 text-[#333333]" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div className="group relative opacity-0 animate-reveal-up delay-300" ref={dropdownRef}>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 group-focus-within:text-[#ed4b82] transition-colors">Serviço Desejado</label>
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full border-b flex items-center justify-between py-2 cursor-pointer transition-all duration-300 ${isDropdownOpen ? 'border-[#ed4b82]' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <span className={`font-serif text-lg md:text-xl transition-colors ${selectedService === 'Selecione um serviço' ? 'text-gray-300' : 'text-[#2c2c2c]'}`}>
                    {selectedService}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-[#ed4b82] transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {isDropdownOpen && (
                  <div className="absolute z-[60] left-0 right-0 top-full mt-1 bg-white shadow-2xl border border-[#d4af37]/10 animate-fade-in-up duration-500 backdrop-blur-xl">
                    {services.map((service, idx) => (
                      <div
                        key={service}
                        onClick={() => {
                          setSelectedService(service);
                          setIsDropdownOpen(false);
                        }}
                        className="px-6 py-4 hover:bg-[#faf9f6] hover:text-[#d4af37] transition-all cursor-pointer text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-600 flex items-center justify-between group/item"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {service}
                        <div className="w-0 group-hover/item:w-6 h-px bg-[#ed4b82] transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="group opacity-0 animate-reveal-up delay-400">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 group-focus-within:text-[#ed4b82] transition-colors">Mensagem</label>
                <textarea className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#ed4b82] outline-none transition-all h-20 md:h-24 resize-none placeholder:text-gray-200 text-[#333333]" placeholder="Conte-nos sua preferência..."></textarea>
              </div>

              <button className="w-full py-5 bg-[#ed4b82] text-white uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#d43d6f] transition-all duration-500 shadow-xl active:scale-[0.98] opacity-0 animate-reveal-up delay-500">
                Enviar Solicitação
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="w-full lg:w-2/5 bg-[#faf7f7] text-[#333333] p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-1 lg:order-2 relative overflow-hidden opacity-0 animate-reveal-right">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ed4b82]/5 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
            <div className="space-y-12 relative z-10">
              <div className="opacity-0 animate-reveal-up delay-100">
                <h4 className="text-[#ed4b82] uppercase tracking-[0.2em] text-[10px] font-bold mb-4 border-l-2 border-[#ed4b82] pl-3">Localização</h4>
                <p className="text-xl md:text-3xl font-serif leading-tight text-[#333333]">Av. das Nações, 1000<br />Ed. Crystal Hall, Jardins</p>
              </div>

              <div className="opacity-0 animate-reveal-up delay-200">
                <h4 className="text-[#ed4b82] uppercase tracking-[0.2em] text-[10px] font-bold mb-4 border-l-2 border-[#ed4b82] pl-3">Horários</h4>
                <p className="text-sm md:text-base text-gray-600 font-light">Terça a Sábado: 09:00 - 20:00</p>
                <p className="text-xs text-[#ed4b82]/70 italic mt-2">Apenas com hora marcada</p>
              </div>

              <div className="opacity-0 animate-reveal-up delay-300">
                <h4 className="text-[#ed4b82] uppercase tracking-[0.2em] text-[10px] font-bold mb-4 border-l-2 border-[#ed4b82] pl-3">Conecte-se</h4>
                <div className="flex flex-wrap gap-6">
                  {['Instagram', 'WhatsApp'].map(social => (
                    <a key={social} href="#" className="text-[10px] uppercase tracking-widest text-[#333333]/50 hover:text-[#ed4b82] transition-all hover:translate-x-1">{social}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
