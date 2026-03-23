
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative py-20 flex flex-col md:flex-row items-center justify-center gap-12 mb-32 z-20">
      <div className="relative">
        <img 
          src="imagemPersona.png" 
          alt="Martins Editor" 
          className="relative w-64 h-64 md:w-[450px] md:h-auto object-contain sticker-outline"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://picsum.photos/400/600?grayscale";
          }}
        />
        <div className="absolute -bottom-5 -left-5 bg-red-600 text-white font-comic text-4xl px-4 py-1 border-4 border-black rotate-[-10deg] shadow-[5px_5px_0px_black] select-none pointer-events-none">
          REC!
        </div>
      </div>

      <div className="text-center md:text-left">
        <div className="relative inline-block mb-4">
          <h1 className="relative font-comic text-7xl md:text-9xl text-white uppercase leading-[0.85] tracking-tighter drop-shadow-[8px_8px_0px_black]">
            MARTINS<br/>
            <span className="text-[rgb(234,186,94)] bg-black px-6 inline-block mt-4 transform -rotate-1 border-y-4 border-[rgb(234,186,94)]">
              EDITOR
            </span>
          </h1>
        </div>
        <div className="bg-white text-black p-2 mt-8 border-4 border-black rotate-1 inline-block shadow-[10px_10px_0px_#8b0000]">
           <p className="font-marker text-2xl px-4">O IMPACTO QUE SEU VÍDEO PRECISA!</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
