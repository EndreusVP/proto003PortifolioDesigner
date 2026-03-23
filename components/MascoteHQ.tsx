import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const falas: Record<string, string> = {
  header: "E aí! Pronto para transformar seus vídeos em armas visuais?",
  videos: "Esses aqui são meus projetos de edição pesada!",
  shorts: "Vídeos curtos exigem impacto imediato. Olha só!",
  skills: "Aqui está o meu arsenal técnico. Premiere, After e muito mais.",
  about: "Um pouco sobre quem está por trás das edições...",
  clients: "Só a elite passou por esse mural.",
  footer: "Curtiu? Vamos fechar um projeto agora!",
};

const MascoteHQ: React.FC = () => {
  const [currentFala, setCurrentFala] = useState(falas.header);
  const [activeSection, setActiveSection] = useState('header');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (falas[id]) {
              setActiveSection(id);
              setCurrentFala(falas[id]);
            }
          }
        });
      },
      { 
        threshold: 0.3, // Detecta a seção mais cedo
        rootMargin: "-20% 0px -20% 0px" // Foca na detecção no centro da tela
      }
    );

    // Seleciona as divs com ID dentro do main
    const sections = document.querySelectorAll('main div[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    /* Mudamos de bottom-10 para top-[30%] para ele ficar mais alto */
    <div className="fixed top-[35%] right-4 md:right-8 z-[100] flex flex-col items-end pointer-events-none">
      
      {/* Balão de Fala */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 10, scale: 0.8 }}
          className="mb-2 bg-white border-[4px] border-black p-3 max-w-[180px] md:max-w-[220px] shadow-[6px_6px_0px_#991b1b] relative"
        >
          <p className="font-comic text-black text-sm md:text-base leading-tight uppercase italic font-bold">
            {currentFala}
          </p>
          {/* Ponta do Balão lateralizada */}
          <div className="absolute -bottom-4 right-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-black"></div>
        </motion.div>
      </AnimatePresence>

      {/* Personagem Flutuante */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 2, 0, -2, 0] 
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" }
        }}
        className="pointer-events-auto"
      >
        <img 
          src="imagemPersona.png" 
          alt="Mascote" 
          className="w-20 h-20 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(234,186,94,0.5)]"
          onError={(e) => { (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"; }}
        />
      </motion.div>
    </div>
  );
};

export default MascoteHQ;