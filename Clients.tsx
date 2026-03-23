import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CLIENTS_DATA = [
  { id: 'c1', name: "YOUTUBER A" },
  { id: 'c2', name: "GAMES CO" },
  { id: 'c3', name: "STARTUP X" },
  { id: 'c4', name: "AGENCY Z" },
];

const Clients: React.FC = () => {
  const [placed, setPlaced] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  
  const slotsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const startPosRef = useRef({ x: 0, y: 0 });

  const isVictory = placed.length === CLIENTS_DATA.length;

  const handlePointerDown = (e: React.PointerEvent, id: string) => {
    const el = e.currentTarget as HTMLElement;
    startPosRef.current = { x: e.clientX, y: e.clientY };
    setActiveId(id);
    el.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!activeId) return;
    setDragPos({
      x: e.clientX - startPosRef.current.x,
      y: e.clientY - startPosRef.current.y
    });
  };

  const handlePointerUp = (e: React.PointerEvent, id: string) => {
    if (!activeId) return;
    const targetSlot = slotsRef.current[id];
    if (targetSlot) {
      const rect = targetSlot.getBoundingClientRect();
      const slotCenterX = rect.left + rect.width / 2;
      const slotCenterY = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - slotCenterX, 2) + Math.pow(e.clientY - slotCenterY, 2)
      );
      if (distance < 110) {
        setPlaced(prev => [...prev, id]);
      }
    }
    setActiveId(null);
    setDragPos({ x: 0, y: 0 });
  };

  return (
    <section id="clients" className="relative w-full min-h-screen py-16 bg-black border-y-[12px] border-[#991b1b] overflow-hidden flex flex-col items-center select-none touch-none">
      
      <style>{`
        .hq-shadow-hard {
          box-shadow: 12px 12px 0px 0px #000;
        }
        .hq-piece { 
          transition: transform 0.15s ease-out, box-shadow 0.15s ease-out; 
        }
        .hq-piece:hover:not(.dragging) { 
          transform: scale(1.08) rotate(0deg) !important; 
          z-index: 50; 
          background-color: #fff !important;
          box-shadow: 15px 15px 0px 0px #991b1b;
        }
        .dragging { 
          z-index: 9999 !important; 
          transition: none !important; 
          box-shadow: 25px 25px 0px 0px rgba(0,0,0,0.8) !important;
        }
      `}</style>

      {/* TÍTULO E INSTRUÇÃO */}
      <div className="relative z-10 text-center mb-8 px-4">
        <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter drop-shadow-[8px_8px_0px_#991b1b]">
          MURAL DE <span className="text-[#eab35e]">ELITE</span>
        </h2>
        
        <div className="mt-4 inline-block bg-[#eab35e] border-[6px] border-black px-6 py-2 rotate-[-1deg] hq-shadow-hard">
          <p className="text-black font-black text-xl md:text-2xl uppercase italic">
            {isVictory ? "¡MISSÃO COMPLETA!" : "SOLTE OS CONTRATOS NOS ALVOS!"}
          </p>
        </div>
      </div>

      {/* GRADE DE ALVOS (SLOTS) */}
      <div className="relative w-full max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 p-6 md:p-10 bg-zinc-900 border-[8px] border-black z-10 mx-4 hq-shadow-hard">
        {CLIENTS_DATA.map((client) => (
          <div 
            key={client.id}
            ref={(el) => (slotsRef.current[client.id] = el)}
            className={`aspect-square border-[6px] border-dashed flex flex-col items-center justify-center relative transition-all ${
              placed.includes(client.id) ? "border-transparent bg-[#991b1b]" : "border-zinc-700 bg-black/60"
            }`}
          >
            {placed.includes(client.id) ? (
              <motion.div 
                initial={{ scale: 0.5, rotate: -20 }} animate={{ scale: 1, rotate: -2 }}
                className="absolute inset-0 bg-[#991b1b] border-[6px] border-black flex items-center justify-center p-2 shadow-[8px_8px_0px_#eab35e]"
              >
                <span className="text-white text-lg md:text-2xl font-black text-center uppercase italic drop-shadow-[3px_3px_0px_black]">
                  {client.name}
                </span>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center opacity-30">
                <span className="text-zinc-500 font-black text-[10px] uppercase">ENCAIXAR</span>
                <span className="text-zinc-400 font-black text-center text-xs md:text-base uppercase italic leading-tight">
                  {client.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* BOTÃO DE REINICIAR - ESTILO HQ BRUTO */}
      <div className="h-32 flex items-center justify-center z-30 mt-4">
        <AnimatePresence>
          {isVictory && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => setPlaced([])}
              /* Classes de Estilo HQ: Borda grossa e Sombra Bloco */
              className="
                relative bg-white border-[6px] border-black 
                px-10 py-4 text-black font-black text-2xl md:text-4xl 
                uppercase italic tracking-tighter
                hq-shadow-hard
                transition-all duration-150
                hover:bg-[#eab35e] hover:-translate-y-2 hover:-translate-x-1
                hover:shadow-[16px_16px_0px_0px_#991b1b]
                active:translate-y-1 active:shadow-none
              "
            >
              <span className="relative z-10">RECOMEÇAR MISSÃO</span>
              
              {/* Detalhe de impacto no hover (opcional: uma bordinha extra) */}
              <div className="absolute inset-0 border-2 border-transparent hover:border-black opacity-20"></div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* ÁREA DE PEÇAS (DOCK) - SÓ APARECE SE NÃO HOUVER VITÓRIA PARA LIMPAR O VISUAL */}
      {!isVictory && (
        <div className="relative flex flex-wrap justify-center items-center gap-10 mt-4 px-10 w-full z-20 min-h-[250px]">
          {CLIENTS_DATA.map((client, index) => {
            if (placed.includes(client.id)) return null;
            const isDragging = activeId === client.id;

            return (
              <div
                key={client.id}
                onPointerDown={(e) => handlePointerDown(e, client.id)}
                onPointerMove={handlePointerMove}
                onPointerUp={(e) => handlePointerUp(e, client.id)}
                className={`hq-piece w-36 h-36 md:w-48 md:h-48 bg-[#eab35e] border-[8px] border-black flex flex-col items-center justify-center p-6 hq-shadow-hard relative ${isDragging ? 'dragging' : ''}`}
                style={{
                  transform: isDragging 
                    ? `translate(${dragPos.x}px, ${dragPos.y}px) scale(1.1)` 
                    : `rotate(${index % 2 === 0 ? -5 : 5}deg)`,
                  touchAction: 'none'
                }}
              >
                <span className="text-black text-center text-xl md:text-2xl font-black uppercase italic leading-none pointer-events-none">
                  {client.name}
                </span>
                <div className="absolute top-0 right-0 w-10 h-10 bg-[#991b1b] border-l-[6px] border-b-[6px] border-black pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Clients;