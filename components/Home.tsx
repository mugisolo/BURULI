import React from 'react';
import Hero from './Hero';
import InfoCards from './InfoCards';
import OracleWidget from './OracleWidget';
import Gallery from './Gallery';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Coronation 2025 Banner */}
      <section className="bg-gradient-to-r from-buruli-gold to-amber-500 py-4 px-4 shadow-md relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-buruli-blue gap-4">
             <div className="flex items-center space-x-3">
                <div className="bg-buruli-blue/10 p-2 rounded-full">
                    <Calendar className="h-6 w-6 font-bold text-buruli-blue" />
                </div>
                <div>
                    <span className="font-bold uppercase tracking-widest text-xs block opacity-70">Upcoming Event</span>
                    <span className="font-bold text-lg md:text-xl font-serif">21st Coronation Anniversary (Empango) — Dec 10, 2025</span>
                </div>
             </div>
             <Link to="/partnerships" className="group flex items-center bg-buruli-blue text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-buruli-blue transition-all duration-300">
                Sponsor Event 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
        </div>
      </section>

      <InfoCards />
      <OracleWidget />
      <Gallery />
    </>
  );
};

export default Home;