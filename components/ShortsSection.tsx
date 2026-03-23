import React, { useState, useRef } from 'react';

const ShortsSection: React.FC = () => {
  const shorts = ["62YYOHRwZXc", "jNQXAC9IVRw", "m_P6H0u9Gsc"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sendCommand = (command: string) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: command, args: [] }),
      '*'
    );
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) { sendCommand('pauseVideo'); } 
    else { sendCommand('playVideo'); }
    setIsPlaying(!isPlaying);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const multiplier = 35; 
    const rotateY = (x - 0.5) * multiplier; 
    const rotateX = (y - 0.5) * -multiplier;
    setRotate({ x: rotateX, y: rotateY });
  };

  const nextVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % shorts.length);
    setIsPlaying(true);
  };

  const prevVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + shorts.length) % shorts.length);
    setIsPlaying(true);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto py-24 overflow-visible flex flex-col md:flex-row items-center justify-between gap-16 px-6">
      
      {/* CELULAR 3D HQ STYLE - AGORA EM VERMELHO E DOURADO */}
      <div 
        className="relative z-40 order-2 md:order-1"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
        ref={containerRef}
        style={{ perspective: '1500px' }}
      >
        {/* Personagem atrás */}
        <img 
          src="imagemPersonaDivCll.webp" 
          alt="Persona"
          className="absolute -left-16 md:-left-36 top-[-80px] w-[450px] md:w-[700px] max-w-none z-0 pointer-events-none transition-transform duration-300 ease-out grayscale opacity-40 hover:grayscale-0 hover:opacity-100"
          style={{ 
            transform: `translateZ(-50px) rotate(${-5 + rotate.y / 5}deg)`,
            filter: 'drop-shadow(15px 15px 0px black)' 
          }}
          onError={(e) => {(e.target as HTMLImageElement).src = "https://picsum.photos/600/1000?random=1"}}
        />

        {/* CORPO DO CELULAR (COR #991b1b) */}
        <div 
          className="relative w-[300px] h-[610px] bg-[#991b1b] border-[10px] border-black rounded-[50px] shadow-[15px_15px_0px_black] overflow-hidden transition-transform duration-150 ease-out cursor-pointer"
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
          onClick={togglePlay}
        >
          {/* Detalhe Dourado no chassi (Linha lateral) */}
          <div className="absolute left-0 top-1/4 w-1.5 h-32 bg-[rgb(234,186,94)] border-r-2 border-black"></div>
          <div className="absolute right-0 top-1/3 w-1.5 h-20 bg-[rgb(234,186,94)] border-l-2 border-black"></div>

          {/* Notch Estilizado */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-3xl z-50 flex items-center justify-center border-x-2 border-b-2 border-black">
             <div className="w-10 h-1 bg-zinc-800 rounded-full"></div>
          </div>

          {/* Player Container com "Borda Interna" preta para simular a tela */}
          <div className="absolute inset-[8px] bg-black rounded-[35px] overflow-hidden z-10">
            <iframe
              ref={iframeRef}
              key={currentIndex} 
              className="w-full h-full pointer-events-none"
              src={`https://www.youtube.com/embed/${shorts[currentIndex]}?enablejsapi=1&autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${shorts[currentIndex]}`}
              title="Shorts Video"
              frameBorder="0"
              allow="autoplay"
            ></iframe>

            {/* PAUSE SCREEN HQ */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/40 backdrop-blur-sm">
                <div className="bg-[rgb(234,186,94)] border-4 border-black p-6 shadow-[8px_8px_0px_black] -rotate-6">
                   <span className="text-black font-black text-4xl italic">PLAY!</span>
                </div>
              </div>
            )}

            {/* BOTÕES HQ (Dourados com Sombra Preta) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-40 flex justify-between px-2 pointer-events-none">
              <button 
                onClick={prevVideo}
                className="pointer-events-auto w-12 h-12 bg-[rgb(234,186,94)] border-4 border-black text-black shadow-[4px_4px_0px_black] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center active:scale-90"
              >
                <span className="text-3xl font-black">‹</span>
              </button>
              <button 
                onClick={nextVideo}
                className="pointer-events-auto w-12 h-12 bg-[rgb(234,186,94)] border-4 border-black text-black shadow-[4px_4px_0px_black] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center active:scale-90"
              >
                <span className="text-3xl font-black">›</span>
              </button>
            </div>

            {/* Selo PREMIUM Dourado */}
            <div className="absolute bottom-10 right-4 z-40 bg-[rgb(234,186,94)] border-4 border-black px-3 py-1 -rotate-12 shadow-[4px_4px_0px_black]">
              <p className="font-black text-black text-[9px] uppercase tracking-tighter">HD EDIT</p>
            </div>
          </div>
        </div>
      </div>

      {/* TEXTO À DIREITA */}
      <div className="relative z-30 order-1 md:order-2 flex-grow text-right">
        <div className="inline-block relative">
          <h2 className="font-comic text-7xl md:text-9xl bg-white text-black px-12 py-6 border-[10px] border-black rotate-[3deg] shadow-[20px_20px_0px_#991b1b] uppercase leading-none">
            SHORTS <br/>
            <span className="text-[#991b1b]">REELS</span>
          </h2>

          <div className="mt-16 flex flex-col items-end gap-6">
            <p className="font-marker text-5xl text-[rgb(234,186,94)] rotate-[-2deg] drop-shadow-[5px_5px_0px_black] uppercase">
               INTERAJA COM O PLAYER!
            </p>
            
            {/* Indicadores Diamante */}
            <div className="flex gap-4">
              {shorts.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-6 border-4 border-black transition-all duration-300 rotate-45 ${i === currentIndex ? 'w-20 bg-[#991b1b]' : 'w-6 bg-white'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ShortsSection;