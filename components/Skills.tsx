
import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: "ADOBE PREMIERE PRO", level: 95, color: "bg-red-600", rot: "-3deg", x: "-15px" },
    { name: "AFTER EFFECTS", level: 85, color: "bg-yellow-500", rot: "2deg", x: "10px" }
  ];

  return (
    <section className="relative z-20 py-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative mb-24 inline-block left-1/2 -translate-x-1/2">
            <h2 className="font-comic text-8xl text-white uppercase drop-shadow-[12px_12px_0px_black] rotate-[-4deg] italic">
              POWER <span className="text-[rgb(234,186,94)]">STATS</span>
            </h2>
            <div className="absolute -bottom-4 right-0 bg-red-600 text-white font-marker text-2xl px-4 rotate-12 border-2 border-black">S RANK</div>
        </div>

        <div className="space-y-20">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="relative"
              style={{ transform: `rotate(${skill.rot}) translateX(${skill.x})` }}
            >
              {/* Etiqueta estilo fita adesiva */}
              <div className="absolute -top-8 left-6 z-30 bg-white text-black font-comic text-4xl px-8 py-1 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.4)] transform -rotate-2 hover:rotate-0 transition-transform">
                {skill.name}
              </div>

              {/* Barra Caótica */}
              <div className="relative h-20 w-full bg-zinc-900 border-8 border-black shadow-[20px_20px_0px_black] overflow-visible">
                <div 
                  className={`h-full ${skill.color} transition-all duration-1000 ease-out halftone-bg border-r-8 border-black flex items-center justify-end px-10`}
                  style={{ width: `${skill.level}%` }}
                >
                    <span className={`font-comic text-6xl drop-shadow-[4px_4px_0px_black] ${skill.color === 'bg-white' ? 'text-black' : 'text-white'}`}>
                      {skill.level}%
                    </span>
                </div>
                
                {/* Sombra de "quebrado" embaixo da barra */}
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-black -z-10 opacity-30"></div>
              </div>
              
              {/* Elementos Decorativos */}
              {idx % 2 === 0 && (
                <div className="absolute -right-10 top-0 w-20 h-20 bg-[rgb(234,186,94)] border-4 border-black rounded-full flex items-center justify-center font-comic text-black text-4xl rotate-12 shadow-lg">
                  MAX!
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
