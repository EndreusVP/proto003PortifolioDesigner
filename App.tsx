import React from 'react';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import ShortsSection from './components/ShortsSection';
import Skills from './components/Skills';
import About from './components/About';
import Clients from './components/Clients';
import Footer from './components/Footer';
import ComicLine from './components/ComicLine';
import MascoteHQ from './components/MascoteHQ'; // Novo componente

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[rgb(234,186,94)] selection:text-black overflow-x-hidden">
      {/* Background Texture Layer */}
      <div className="fixed inset-0 halftone-bg pointer-events-none opacity-20 z-0"></div>
      
      {/* Linha Central */}
      <ComicLine />

      {/* Mascote Fixo (O personagem que vai seguir o site) */}
      <MascoteHQ />

      {/* Adesivos Flutuantes (Seus adesivos originais) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <div className="absolute top-[15%] left-[5%] md:left-[10%] rotate-[-12deg] bg-red-600 text-white font-comic text-3xl md:text-5xl px-6 py-2 border-4 border-black shadow-[8px_8px_0px_black]">
          VAI FICAR DE FORA?
        </div>
        <div className="absolute top-[35%] right-[2%] md:right-[8%] rotate-[8deg] bg-[rgb(234,186,94)] text-black font-comic text-4xl md:text-6xl px-8 py-2 border-4 border-black shadow-[10px_10px_0px_black]">
          O IMPACTO É REAL!
        </div>
        <div className="absolute top-[55%] left-[2%] md:left-[5%] rotate-[-5deg] bg-white text-black font-comic text-3xl md:text-4xl px-6 py-1 border-4 border-black shadow-[6px_6px_0px_#b31d1d]">
          EDITION OVERDRIVE
        </div>
        <div className="absolute top-[75%] right-[5%] md:right-[12%] rotate-[15deg] bg-red-700 text-white font-comic text-4xl md:text-5xl px-10 py-3 border-4 border-black shadow-[12px_12px_0px_rgb(234,186,94)]">
          VIRALIZA AGORA!
        </div>
        <div className="absolute top-[90%] left-[10%] md:left-[15%] rotate-[-8deg] bg-[rgb(234,186,94)] text-black font-comic text-2xl md:text-4xl px-6 py-2 border-4 border-black shadow-[8px_8px_0px_black]">
          DOMINE O ALGORITMO
        </div>
      </div>

      {/* Main content - Adicionei IDs para o Mascote identificar onde você está */}
      <main className="relative z-10 w-full max-w-screen-xl mx-auto px-4 py-12 space-y-48">
        <div id="header"><Header /></div>
        <div id="videos"><VideoSection /></div>
        <div id="shorts"><ShortsSection /></div>
        <div id="skills"><Skills /></div>
        <div id="about"><About /></div>
        <div id="clients"><Clients /></div>
        <div id="footer"><Footer /></div>
      </main>

      {/* Retro grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
    </div>
  );
};

// Exportação padrão para o index.tsx não dar erro
export default App;