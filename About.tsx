
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="relative z-20 max-w-4xl mx-auto px-6 py-20">
      <div className="relative">
        {/* Moldura de Mural */}
        <div className="absolute -inset-6 bg-red-950 border-8 border-black rotate-1 shadow-2xl opacity-50"></div>
        
        <div className="relative grid md:grid-cols-2 gap-10 items-center bg-white border-8 border-black p-8 md:p-12 rotate-[-1deg] shadow-[20px_20px_0px_black]">
          <div className="order-2 md:order-1">
            <h2 className="font-comic text-5xl text-black mb-8 border-b-8 border-[rgb(234,186,94)] inline-block">
              PERFIL_LOG
            </h2>
            <p className="font-action text-black text-xl leading-tight uppercase mb-8">
              Focado em vídeos que prendem o olhar nos primeiros segundos. 
              Especialista em rítmica visual e narrativa agressiva. 
              <br/><br/>
              <span className="bg-black text-[rgb(234,186,94)] px-2 py-1">O SEU CANAL NÃO PRECISA DE EDIÇÃO, PRECISA DE UMA ARMA VISUAL.</span>
            </p>
            <div className="flex gap-4 flex-wrap">
              {['+500 VÍDEOS', 'PREMIERE PRO', 'AFTER EFFECTS'].map(tag => (
                <span key={tag} className="bg-red-600 text-white font-comic text-xl px-4 py-1 border-4 border-black rotate-3">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[rgb(234,186,94)] rotate-6 border-4 border-black -z-10"></div>
              <img 
                src="https://picsum.photos/400/400?grayscale" 
                alt="Working" 
                className="w-full max-w-[280px] border-8 border-black grayscale"
              />
              <div className="absolute bottom-2 -right-4 bg-black text-white font-comic text-3xl px-4 border-4 border-white rotate-[-15deg]">
                WOW!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
