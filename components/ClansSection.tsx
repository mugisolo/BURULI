import React from 'react';
import { Users, Search, ShieldCheck } from 'lucide-react';

const ClansSection: React.FC = () => {
  // Expanded list
  const clans = [
    { name: "Bakimbiri", totem: "Ngo (Leopard)", role: "Guardians of Tradition & Rituals" },
    { name: "Bagabu", totem: "Ngaali (Crested Crane)", role: "Peacekeepers & Mediators" },
    { name: "Bahemba", totem: "Kibugwe", role: "Royal Artisans & Builders" },
    { name: "Bamoori", totem: "Mamba (Lungfish)", role: "Lake Guardians & Fishermen" },
    { name: "Basita", totem: "Ente (Cow)", role: "Chief Herdsmen of Royal Cattle" },
    { name: "Bafumambogo", totem: "Mbogo (Buffalo)", role: "Warriors & Palace Guards" },
    { name: "Banshaka", totem: "Envubu (Hippo)", role: "River Custodians" },
    { name: "Bagonza", totem: "Engabi (Bushbuck)", role: "Diplomats & Messengers" },
    { name: "Babiito", totem: "Engabi (Bushbuck)", role: "Royal Lineage (Ruling Clan)" },
    { name: "Bakwonga", totem: "Ngabi", role: "Spiritual Advisors" },
    { name: "Basuli", totem: "Njobe", role: "Keepers of the Sacred Fire" },
    { name: "Bayoza", totem: "Kikere (Frog)", role: "Water Purifiers" },
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
       {/* Page Header */}
       <div className="bg-slate-900 text-white py-12 px-4 border-b border-buruli-gold/30">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
                <h1 className="text-4xl font-serif font-bold text-buruli-gold mb-2">The Clans of Buruli</h1>
                <p className="text-gray-400">The 129 pillars that hold the Kingdom together.</p>
            </div>
            <div className="relative w-full md:w-96">
                <input 
                    type="text" 
                    placeholder="Find your clan..." 
                    className="w-full pl-12 pr-4 py-3 rounded-full bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-buruli-gold"
                />
                <Search className="absolute left-4 top-3.5 text-gray-500 h-5 w-5" />
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-buruli-blue/5 p-6 rounded-xl border border-buruli-blue/10">
                <ShieldCheck className="w-10 h-10 text-buruli-gold mb-4" />
                <h3 className="font-bold text-lg text-buruli-blue">Identity</h3>
                <p className="text-sm text-gray-600 mt-2">Every Muruuli belongs to a clan provided by their father. It is your identity card in our culture.</p>
            </div>
             <div className="bg-buruli-blue/5 p-6 rounded-xl border border-buruli-blue/10">
                <Users className="w-10 h-10 text-buruli-gold mb-4" />
                <h3 className="font-bold text-lg text-buruli-blue">Unity</h3>
                <p className="text-sm text-gray-600 mt-2">Clans prevent inbreeding (you cannot marry within your clan) and foster extended family networks.</p>
            </div>
             <div className="col-span-1 lg:col-span-2 bg-buruli-gold text-buruli-blue p-8 rounded-xl flex items-center justify-between">
                <div>
                    <h3 className="font-serif font-bold text-2xl mb-2">Register Your Clan Head</h3>
                    <p className="text-sm opacity-90">Are you a clan leader? Update your records with the Kingdom ministry.</p>
                </div>
                <button className="bg-buruli-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                    Register Now
                </button>
            </div>
        </div>

        <h2 className="text-2xl font-serif font-bold text-buruli-blue mb-8 border-b pb-4">Clan Directory</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clans.map((clan, idx) => (
                <div key={idx} className="group bg-white border border-gray-200 p-6 rounded-xl hover:border-buruli-gold hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-buruli-cream flex items-center justify-center font-serif font-bold text-buruli-blue group-hover:bg-buruli-blue group-hover:text-buruli-gold transition-colors">
                            {clan.name.charAt(0)}
                        </div>
                        <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded uppercase tracking-wider">{clan.totem}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{clan.name}</h3>
                    <p className="text-sm text-gray-500 italic">{clan.role}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClansSection;