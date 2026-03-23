
import React from 'react';

const ComicLine: React.FC = () => {
  /**
   * Definimos uma forma de polígono fechado (fita) em vez de um traço simples.
   * Isso permite que a largura seja não linear (mais grossa em algumas curvas, mais fina em outras).
   * As coordenadas X permanecem entre 50 e 980 para evitar que a linha "cole" nas bordas da tela.
   */
  const jaggedShape = "M 300 0 L 750 450 L 50 1200 L 800 2400 L 150 3600 L 750 4600 L 450 5500 L 580 5500 L 980 4600 L 450 3600 L 980 2400 L 350 1200 L 950 450 L 600 0 Z";

  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <svg width="100%" height="5500" viewBox="0 0 1000 5500" preserveAspectRatio="none" className="w-full opacity-90">
        {/* Camada 1: Sombra Projetada (Offset para profundidade) */}
        <path 
          d={jaggedShape}
          fill="black"
          transform="translate(25, 25)"
          className="opacity-40"
        />
        
        {/* Camada 2: Brilho Dourado (Borda de destaque ligeiramente maior que a linha principal) */}
        <path 
          d={jaggedShape}
          fill="rgb(234, 186, 94)"
          transform="scale(1.015) translate(-8, -4)"
          className="opacity-30"
        />

        {/* Camada 3: Corpo Principal Vermelho */}
        <path 
          d={jaggedShape}
          fill="#991b1b"
        />
        
        {/* Camada 4: Textura de Retícula (Halftone) */}
        <path 
          d={jaggedShape}
          fill="url(#halftonePattern)"
          className="mix-blend-multiply opacity-60"
        />

        {/* Camada 5: Contorno Nanquim (Borda grossa estilo HQ) */}
        <path 
          d={jaggedShape}
          fill="none"
          stroke="black"
          strokeWidth="10"
          strokeLinejoin="miter"
          strokeMiterlimit="20"
        />

        {/* Camada 6: Reflexo de Ação (Linha interna fina para detalhamento) */}
        <path 
          d={jaggedShape}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="3"
          transform="scale(0.97) translate(15, 10)"
        />
      </svg>
    </div>
  );
};

export default ComicLine;