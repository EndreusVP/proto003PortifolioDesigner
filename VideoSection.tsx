
import React, { useState } from 'react';

const VideoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'long' | 'motion'>('long');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab: 'long' | 'motion') => {
    if (tab === activeTab || isAnimating) return;
    setIsAnimating(true);
    
    // Troca o conteúdo no meio da animação do papel
    setTimeout(() => setActiveTab(tab), 250);
    // Finaliza o estado de animação
    setTimeout(() => setIsAnimating(false), 600);
  };

  const content = {
    long: {
      title: "VÍDEOS LONGOS",
      videos: ["-1w_T0ffPr4", "-1w_T0ffPr4"],
      bg: "bg-[#7f1d1d]", // Vermelho mais fechado
      cornerImage: "imagemLongForm.webp"
    },
    motion: {
      title: "MOTION DESIGN",
      videos: ["-1w_T0ffPr4", "-1w_T0ffPr4"],
      bg: "bg-black",
      cornerImage: "imagemMotion.png"
    }
  };

  return (
    <section className="relative z-20 max-w-5xl mx-auto px-4">
      <div className="flex justify-center gap-6 mb-12">
        {['long', 'motion'].map((tab) => (
          <button 
            key={tab}
            onClick={() => handleTabChange(tab as any)}
            className={`px-12 py-4 font-comic text-3xl hq-hover border-4 border-black transition-all
              ${activeTab === tab ? 'bg-[rgb(234,186,94)] text-black -rotate-3 scale-110 shadow-[10px_10px_0px_black]' : 'bg-red-950 text-white rotate-2 opacity-80'}`}
          >
            {tab === 'long' ? 'LONGOS' : 'MOTION'}
          </button>
        ))}
      </div>

      {/* Container relativo para permitir que a imagem de quina sobreponha a borda */}
      <div className="relative">
        <div className={`relative min-h-[600px] border-[12px] border-black shadow-[40px_40px_0px_rgba(0,0,0,0.9)] overflow-hidden ${content[activeTab].bg} p-10 z-10`}>
          {/* Efeito de Rasgo Visceral (Papel sendo arrancado) */}
          {isAnimating && (
            <>
              <div className="rip-layer rip-gray animate-rip-1 opacity-90"></div>
              <div className="rip-layer rip-white animate-rip-2 shadow-2xl"></div>
            </>
          )}

          <div className="relative z-10">
            <div className="inline-block bg-black p-4 rotate-[-1deg] mb-12 border-4 border-[rgb(234,186,94)]">
              <h2 className="font-comic text-6xl md:text-7xl uppercase text-white tracking-tighter italic">
                {content[activeTab].title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {content[activeTab].videos.map((id, idx) => (
                <div key={idx} className={`group relative bg-black border-4 border-black transition-transform hover:rotate-0 shadow-[15px_15px_0px_black] ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                  <div className="aspect-video bg-zinc-900 overflow-hidden">
                    <iframe
                      className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                      src={`https://www.youtube.com/embed/${id}`}
                      title="Video"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4 bg-white text-black font-marker text-2xl flex justify-between items-center border-t-4 border-black">
                    <span className="bg-red-600 text-white px-3 rotate-[-2deg] text-lg">V_LOG_{idx + 1}</span>
                    <span className="text-black font-bold text-xs font-action tracking-widest opacity-60">HQ_ULTRA_EDIT</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Imagem de Quina Dinâmica na Quina Direita - Tamanho Uniformizado e Ajustado */}
        <div className="absolute -right-8 -top-12 md:-right-12 md:-top-20 z-20 pointer-events-none">
          <img 
            key={activeTab} 
            src={content[activeTab].cornerImage} 
            alt="Destaque Categoria" 
            className="w-40 md:w-64 h-auto object-contain sticker-outline animate-smooth-float"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/300/300?random=1";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
