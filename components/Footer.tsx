
import React from 'react';

const Footer: React.FC = () => {
  const contacts = [
    { label: "WHATSAPP", icon: "💬", link: "#", color: "bg-green-600", desc: "DIRECT_LINK_REC" },
    { label: "INSTAGRAM", icon: "📸", link: "#", color: "bg-[#eababa]", desc: "FOLLOW_THE_FEED" },
    { label: "E-MAIL", icon: "✉️", link: "#", color: "bg-blue-600", desc: "BUSINESS_ONLY" }
  ];

  return (
    <footer className="relative pb-40 pt-20 mt-32">
      {/* Faixa de Transição Estilo "Tira de Quadrinhos" */}
      <div className="absolute top-0 left-0 w-full h-8 bg-black border-y-4 border-[rgb(234,186,94)] -skew-y-1 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="inline-block font-comic text-5xl md:text-7xl text-white bg-red-700 px-10 py-4 border-8 border-black rotate-[-2deg] shadow-[12px_12px_0px_black] uppercase italic">
            CONTATO <span className="text-[rgb(234,186,94)]">IMEDIATO</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {contacts.map((contact, idx) => (
            <a 
              key={idx}
              href={contact.link}
              className={`group relative block hq-hover transition-all duration-300
                ${idx === 0 ? 'rotate-[-3deg]' : idx === 1 ? 'rotate-[1deg]' : 'rotate-[3deg]'}`}
            >
              {/* Card Estilo Cupom de HQ */}
              <div className="relative bg-white border-4 border-black p-6 z-10 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between mb-4 border-b-4 border-black pb-2">
                  <span className="font-comic text-4xl text-black">{contact.icon}</span>
                  <span className="bg-black text-white px-2 font-action text-xs tracking-widest">{contact.desc}</span>
                </div>
                
                <div className="py-4">
                  <div className="font-comic text-5xl text-black leading-none mb-1">
                    {contact.label}
                  </div>
                  <div className="w-full h-2 bg-[rgb(234,186,94)] border-2 border-black"></div>
                </div>

                <div className="mt-4 flex justify-end">
                  <div className="bg-red-600 text-white font-marker text-xl px-4 py-1 rotate-[-5deg] border-2 border-black group-hover:rotate-0 transition-transform">
                    CLIQUE AQUI!
                  </div>
                </div>
              </div>

              {/* Sombra Decorativa Colorida */}
              <div className="absolute inset-0 bg-[rgb(234,186,94)] translate-x-4 translate-y-4 -z-10 border-4 border-black opacity-30 group-hover:opacity-100 transition-opacity"></div>
            </a>
          ))}
        </div>

        {/* Linha de Fechamento Final */}
        <div className="relative flex flex-col items-center">
          <div className="relative z-20 bg-black border-8 border-white p-6 rotate-[1deg] shadow-[15px_15px_0px_#991b1b]">
            <p className="font-comic text-3xl md:text-4xl text-white tracking-widest text-center">
              MARTINS EDITOR <span className="text-[rgb(234,186,94)]">© 2024</span>
            </p>
            <p className="font-marker text-xl text-zinc-400 mt-2 text-center uppercase">
              Produzido para dominar o seu nicho.
            </p>
          </div>

          {/* Badge de "FIM?" no estilo clássico de HQ */}
          <div className="absolute -bottom-24 bg-[rgb(234,186,94)] border-4 border-black p-4 rotate-[-10deg] shadow-[8px_8px_0px_black] z-30">
            <span className="font-comic text-5xl text-black px-4">THE END?</span>
          </div>
          
          {/* Logo Central de Saída */}
          <div className="mt-32 w-32 h-32 bg-red-700 border-8 border-black rounded-full flex items-center justify-center transform hover:scale-125 transition-transform cursor-pointer shadow-[0px_0px_40px_rgba(234,186,94,0.3)]">
            <span className="font-comic text-8xl text-black drop-shadow-[4px_4px_0px_white]">M</span>
          </div>
        </div>
      </div>
      
      {/* Background Section Detail */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-zinc-950 -z-20 skew-y-2 translate-y-20 border-t-8 border-black"></div>
    </footer>
  );
};

export default Footer;