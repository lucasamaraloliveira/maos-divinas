
import React, { useState, useEffect } from 'react';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
    title: 'Minimalismo Elegante',
    description: 'Um design clean que exalta a beleza natural das mãos. Perfeito para mulheres que buscam sofisticação na simplicidade. Utilizamos tons nude exclusivos e finalização de alto brilho.',
    service: 'Manicure Clássica Lux'
  },
  {
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600',
    title: 'Manicure Russa Impecável',
    description: 'A técnica russa de cutilagem a seco garante um contorno perfeito e saúde para suas unhas. O resultado é um acabamento que dura muito mais tempo e mantém a elegância por semanas.',
    service: 'Manicure Russa'
  },
  {
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=600',
    title: 'Extensões de Cristal',
    description: 'Alongamento em gel com técnica de nivelamento que proporciona resistência e aspecto 100% natural. Cada unha é esculpida individualmente para harmonizar com suas mãos.',
    service: 'Alongamento em Gel'
  },
  {
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600',
    title: 'Nail Art Minimalista',
    description: 'Pequenos detalhes, grandes declarações. Nossa arte é feita com pincéis ultrafinos e materiais de luxo como folhas de ouro 24k e cristais autênticos.',
    service: 'Nail Art Especializada'
  },
  {
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=600',
    title: 'Red Deep Velvet',
    description: 'O clássico vermelho elevado ao status de obra de arte. Nossa seleção de esmaltes internacionais oferece pigmentação única e durabilidade excepcional.',
    service: 'Esmaltação Premium'
  },
  {
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600',
    title: 'Spa das Mãos Divino',
    description: 'Um ritual completo de renovação. Inclui esfoliação com microcristais, máscara revitalizante de seda e massagem com óleos essenciais raros.',
    service: 'Spa Experience'
  }
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedItem(null);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
    }, 500);
  };

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 md:mb-16 gap-6 opacity-0 animate-reveal-up">
          <div className="max-w-xl">
            <h3 className="text-[#ed4b82] uppercase tracking-[0.3em] font-semibold text-xs md:text-sm mb-4">Portfólio</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2c2c2c]">Brilho em Detalhes</h2>
          </div>
          <a href="#" className="inline-block text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-black pb-1 hover:text-[#ed4b82] hover:border-[#ed4b82] transition-all w-fit">
            Ver Instagram @MaosDivinas
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden group relative shadow-lg opacity-0 animate-reveal-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openModal(item)}
            >
              <img
                src={item.image}
                alt={item.title}
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

      {/* Modal Moderno e Luxuoso */}
      {selectedItem && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-all duration-500 ${isClosing ? 'invisible' : 'visible'}`}>
          <div
            className={`absolute inset-0 bg-white/80 backdrop-blur-xl transition-opacity duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
            onClick={closeModal}
          ></div>

          <div className={`relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto md:overflow-hidden rounded-sm shadow-2xl flex flex-col md:flex-row transition-all duration-500 transform ${isClosing ? 'scale-95 opacity-0 translate-y-8' : 'scale-100 opacity-100 translate-y-0'}`}>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 text-[#333333] hover:text-[#ed4b82] transition-colors"
              aria-label="Fechar"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="md:w-1/2 h-72 md:h-auto overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[2000ms]"
              />
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-[#ed4b82] uppercase tracking-[0.3em] font-semibold text-[10px] mb-4">
                {selectedItem.service}
              </h3>
              <h2 className="text-3xl md:text-4xl font-serif text-[#333333] mb-6 leading-tight">
                {selectedItem.title}
              </h2>
              <div className="w-12 h-px bg-[#ed4b82] mb-8"></div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 font-light">
                {selectedItem.description}
              </p>

              <div className="mt-auto">
                <a
                  href="#contato"
                  onClick={closeModal}
                  className="inline-block w-full md:w-auto text-center px-10 py-5 bg-[#ed4b82] text-white text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:bg-[#d43d6f] shadow-xl active:scale-95"
                >
                  Agendar Esta Experiência
                </a>
                <p className="mt-4 text-center md:text-left text-[9px] uppercase tracking-widest text-gray-400">
                  Horários limitados para esta semana
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
