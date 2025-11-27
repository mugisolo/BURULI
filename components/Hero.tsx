import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-buruli-blue">
      {/* Background Overlay - Savannah/Lake landscape representative of Nakasongola */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-[20s] hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop')" }}
      ></div>
      
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-buruli-blue/80 via-transparent to-buruli-blue"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="mb-8 animate-fade-in-down">
            <span className="inline-block py-2 px-6 rounded-full bg-buruli-gold/10 border border-buruli-gold/40 text-buruli-gold text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 backdrop-blur-sm shadow-lg">
                The Kingdom of Nakasongola
            </span>
        </div>
        <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-8 leading-none drop-shadow-2xl">
          Pride of the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-buruli-gold via-amber-200 to-buruli-gold animate-gradient-x">
            Baruuli People
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
          Under the reign of <strong className="text-buruli-gold">Isabaruuli Mwogezi Butamanya</strong>, we welcome you to the land of the lake, the rhino, and the royal drum.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#oracle" className="w-full sm:w-auto px-10 py-4 bg-buruli-gold text-buruli-blue font-bold text-lg rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2">
            <span>Consult the Oracle</span>
          </a>
          <a href="#history" className="w-full sm:w-auto px-10 py-4 bg-white/10 border border-white/20 text-white font-semibold text-lg rounded-xl hover:bg-white/20 hover:border-white transition-all duration-300 backdrop-blur-md">
            Discover Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-buruli-gold/70">
        <ChevronDown size={40} />
      </div>
    </div>
  );
};

export default Hero;