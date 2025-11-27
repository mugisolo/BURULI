import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Users, DollarSign, Calendar, Map, CheckCircle, Info, Briefcase, FileText } from 'lucide-react';

interface Package {
  id: string;
  code: string;
  title: string;
  duration: string;
  focus: string;
  description: string;
  itinerary: { day: string; title: string; details: string[] }[];
  pricing: {
    fnr: { budget: string; mid: string; lux: string }; // Foreign Non-Resident
    fr: { budget: string; mid: string; lux: string };  // Foreign Resident
    eac: { budget: string; mid: string; lux: string }; // East African Citizen
  };
  includes: string;
  usp: string; // Unique Selling Point
}

const tourPackages: Package[] = [
  {
    id: 'p1',
    code: 'BTC-RHINO-03-PPP',
    title: 'The Buruuli Cultural & Rhino Conservation Safari',
    duration: '3 Days',
    focus: 'Cultural Heritage & White Rhino Tracking',
    description: 'A focused immersion into the heart of Buruuli, combining royal history with the thrill of rhino tracking.',
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Cultural Immersion', details: ['Visit Buruuli Palace in Nakasongola', 'Engagement with Isabaruuli leadership', 'Luruli language introduction', 'Evening storytelling & traditional performance'] },
      { day: 'Day 2', title: 'Rhinos & Swamp Safari', details: ['Morning White Rhino tracking at Ziwa Sanctuary', 'Afternoon airboat swamp safari on Lake Kyoga/Kafu', 'Community fishing village visit', 'Sunset fish dinner'] },
      { day: 'Day 3', title: 'Market & Departure', details: ['Nakasongola market visit', 'Traditional craft workshop', 'Transfer to Kampala/Entebbe'] }
    ],
    pricing: {
      fnr: { budget: '$552', mid: '$748', lux: '$1,024' },
      fr: { budget: '$483', mid: '$667', lux: '$920' },
      eac: { budget: 'UGX 403,000', mid: 'UGX 552,000', lux: 'UGX 748,000' }
    },
    includes: 'All Buruuli activities, accommodation, meals, transport, cultural guide fees.',
    usp: 'Direct engagement with Kingdom leadership.'
  },
  {
    id: 'p2',
    code: 'BTC-MURCH-05-PPP',
    title: 'Buruuli & Murchison Falls Wildlife Expedition',
    duration: '5 Days',
    focus: 'Big Five & Cultural Bridge',
    description: 'Seamlessly bridge the cultural depth of Buruuli with the wildlife spectacle of Murchison Falls National Park.',
    itinerary: [
      { day: 'Day 1-2', title: 'Buruuli Foundation', details: ['Full cultural immersion at Palace', 'Ziwa Rhino Sanctuary tracking'] },
      { day: 'Day 3', title: 'To Murchison Falls', details: ['Transfer via Kichubanyobo Gate', 'En-route game drive', 'Afternoon Nile Delta boat cruise'] },
      { day: 'Day 4', title: 'The Falls & Game', details: ['Morning game drive (Big Five)', 'Hike to top of Murchison Falls', 'Nile River boat safari'] },
      { day: 'Day 5', title: 'Return', details: ['Stop at Boomu Women\'s Group', 'Craft purchase', 'Return to Kampala'] }
    ],
    pricing: {
      fnr: { budget: '$1,357', mid: '$1,817', lux: '$2,473' },
      fr: { budget: '$1,208', mid: '$1,610', lux: '$2,208' },
      eac: { budget: 'UGX 978,000', mid: 'UGX 1,323,000', lux: 'UGX 1,794,000' }
    },
    includes: 'Buruuli activities, Murchison Park fees ($40/day), boat cruises, accommodation, meals, 4x4 transport.',
    usp: 'Seamless cultural-wildlife bridge experience.'
  },
  {
    id: 'p3',
    code: 'BTC-NILE-04-PPP',
    title: 'The Nile Source to Buruuli Adventure',
    duration: '4 Days',
    focus: 'River Nile Activities & Cultural Exchange',
    description: 'Follow the Nile from its source in Jinja to the swamp ecosystems of Buruuli.',
    itinerary: [
      { day: 'Day 1', title: 'Jinja Adventure', details: ['Source of the Nile boat trip', 'White-water tubing or rafting', 'Overnight in Jinja'] },
      { day: 'Day 2', title: 'Cultural Transit', details: ['Visit Ssezibwa Falls', 'Transfer to Nakasongola'] },
      { day: 'Day 3', title: 'Buruuli Swamp', details: ['Lake Kyoga airboat safari', 'Fishing village walk', 'Evening Kingdom performance'] },
      { day: 'Day 4', title: 'Rhinos & Return', details: ['Rhino tracking at Ziwa', 'Craft center visit', 'Return to Kampala'] }
    ],
    pricing: {
      fnr: { budget: '$713', mid: '$1,024', lux: '$1,438' },
      fr: { budget: '$633', mid: '$897', lux: '$1,265' },
      eac: { budget: 'UGX 518,000', mid: 'UGX 748,000', lux: 'UGX 1,035,000' }
    },
    includes: 'All Nile activities, Buruuli experiences, accommodation, meals, transport.',
    usp: 'Only package combining Nile adventures with Buruuli swamp ecosystem.'
  },
  {
    id: 'p4',
    code: 'BTC-PRIM-07-PPP',
    title: 'Primates & Panorama - Buruuli to Bwindi',
    duration: '7 Days',
    focus: 'Gorillas, Chimps & Cultural Heritage',
    description: 'The ultimate primate tour, grounded in the cultural heritage of the Baruuli people.',
    itinerary: [
      { day: 'Day 1-2', title: 'Buruuli Foundation', details: ['Palace, Rhinos, and Swamp Safari'] },
      { day: 'Day 3', title: 'To Kibale', details: ['Drive through tea plantations', 'Bigodi Wetland walk'] },
      { day: 'Day 4', title: 'Chimp Tracking', details: ['Chimpanzee tracking in Kibale NP', 'Crater lakes visit', 'Transfer to Queen Elizabeth NP'] },
      { day: 'Day 5', title: 'Queen Elizabeth', details: ['Morning game drive', 'Kazinga Channel boat cruise'] },
      { day: 'Day 6', title: 'Tree Climbing Lions', details: ['Ishasha sector game drive', 'Transfer to Bwindi', 'Batwa cultural experience'] },
      { day: 'Day 7', title: 'Gorillas', details: ['Gorilla Trekking in Bwindi', 'Optional flight to Entebbe'] }
    ],
    pricing: {
      fnr: { budget: '$2,622', mid: '$3,324', lux: '$4,313' },
      fr: { budget: '$2,358', mid: '$2,990', lux: '$3,887' },
      eac: { budget: 'UGX 1,932,000', mid: 'UGX 2,450,000', lux: 'UGX 3,197,000' }
    },
    includes: 'Gorilla permit ($800), Chimp permit ($200), Buruuli activities, park fees, full board.',
    usp: 'Combines Uganda\'s two premium primate experiences with Buruuli cultural foundation.'
  },
  {
    id: 'p5',
    code: 'BTC-GRAND-10-PPP',
    title: 'Grand Buruuli Circuit - Ultimate Uganda',
    duration: '10 Days',
    focus: 'Complete Uganda Experience',
    description: 'The most comprehensive package showcasing Uganda\'s diversity with a strong Buruuli cultural backbone.',
    itinerary: [
      { day: 'Day 1-2', title: 'Buruuli Deep Dive', details: ['Palace, Rhinos, Cattle herding demo', 'Community eco-lodge stay'] },
      { day: 'Day 3-4', title: 'Murchison Falls', details: ['Big Five safari', 'Nile boat cruise', 'Hike to falls'] },
      { day: 'Day 5-6', title: 'Kibale & Queen', details: ['Chimp tracking', 'Bigodi wetland', 'Kazinga cruise'] },
      { day: 'Day 7-8', title: 'Gorillas', details: ['Gorilla trekking', 'Batwa trail', 'Hospital visit'] },
      { day: 'Day 9', title: 'Lake Bunyonyi', details: ['Relaxation, canoeing, island exploration'] },
      { day: 'Day 10', title: 'Lake Mburo', details: ['Game walk', 'Return to Entebbe'] }
    ],
    pricing: {
      fnr: { budget: '$3,968', mid: '$5,382', lux: '$7,130' },
      fr: { budget: '$3,565', mid: '$4,830', lux: '$6,417' },
      eac: { budget: 'UGX 2,933,000', mid: 'UGX 3,968,000', lux: 'UGX 5,290,000' }
    },
    includes: 'All activities, permits, park fees, accommodation, meals, 4x4 transport.',
    usp: 'Most comprehensive package showcasing Uganda\'s diversity.'
  },
  {
    id: 'p6',
    code: 'BTC-AQUA-03-PPP',
    title: 'Buruuli & Lake Victoria Aquatic Heritage',
    duration: '3 Days',
    focus: 'Water Systems & Cultural Connection',
    description: 'Highlighting the Baruuli\'s historical connection to Lake Kyoga as their "cherished heart".',
    itinerary: [
      { day: 'Day 1', title: 'Entebbe & Shoebills', details: ['Mabamba Swamp shoebill tour', 'Wildlife Education Centre', 'Transfer to Nakasongola'] },
      { day: 'Day 2', title: 'Lake Kyoga', details: ['Cultural session on lake heritage', 'Swamp airboat safari', 'Fishing demo'] },
      { day: 'Day 3', title: 'Rhinos & Crafts', details: ['Rhino tracking at Ziwa', 'Craft market', 'Return to Entebbe'] }
    ],
    pricing: {
      fnr: { budget: '$598', mid: '$828', lux: '$1,127' },
      fr: { budget: '$529', mid: '$736', lux: '$1,001' },
      eac: { budget: 'UGX 437,000', mid: 'UGX 610,000', lux: 'UGX 828,000' }
    },
    includes: 'All water-based activities, Buruuli cultural experiences, accommodation, meals.',
    usp: 'Focus on water systems and aquatic heritage.'
  }
];

const TourPackages: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-16 bg-slate-50 relative" id="tours">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-buruli-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-buruli-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-buruli-blue/5 px-4 py-1.5 rounded-full mb-4 border border-buruli-blue/10">
              <Briefcase className="w-4 h-4 text-buruli-gold" />
              <span className="text-sm font-bold text-buruli-blue uppercase tracking-wider">PPP Joint Venture</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-buruli-blue mb-6">Buruuli Heritage Expeditions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the pearl of Africa through the eyes of its guardians. These strategic packages are designed to support the Kingdom while offering world-class adventure.
          </p>
        </div>

        {/* Financial Transparency Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-16 overflow-hidden">
            <h3 className="text-2xl font-serif font-bold text-buruli-blue mb-8 text-center flex items-center justify-center gap-2">
                <Shield className="text-buruli-gold" /> PPP Financial Transparency
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Kingdom Fund */}
                <div className="relative bg-buruli-blue rounded-xl p-6 text-white text-center group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-2 bg-buruli-gold"></div>
                    <div className="text-5xl font-bold mb-2 text-buruli-gold">15%</div>
                    <h4 className="font-bold text-lg mb-2">Kingdom Cultural Fund</h4>
                    <p className="text-sm text-gray-300 opacity-90">Directly supports heritage preservation, palace construction, and language programs.</p>
                </div>

                {/* Operations */}
                <div className="relative bg-gray-100 rounded-xl p-6 text-gray-800 text-center group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gray-400"></div>
                    <div className="text-5xl font-bold mb-2 text-gray-400">70%</div>
                    <h4 className="font-bold text-lg mb-2">Base Operations</h4>
                    <p className="text-sm text-gray-600">Covers direct safari costs, park fees, community guide wages, and logistics.</p>
                </div>

                {/* Partner */}
                <div className="relative bg-white border border-gray-200 rounded-xl p-6 text-gray-800 text-center group hover:transform hover:scale-105 transition-all duration-300 shadow-sm">
                    <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
                    <div className="text-5xl font-bold mb-2 text-green-600">15%</div>
                    <h4 className="font-bold text-lg mb-2">Private Partner</h4>
                    <p className="text-sm text-gray-600">Management fees, marketing, admin overhead, and investor return.</p>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500 italic flex items-center justify-center gap-2">
                <Info size={16} />
                All listed prices reflect total guest cost, inclusive of the 15% private partner markup.
            </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {tourPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
                    <div className="p-8 pb-4">
                        <div className="flex justify-between items-start mb-4">
                            <span className="inline-block px-3 py-1 bg-buruli-gold/20 text-buruli-blue text-xs font-bold rounded-full uppercase tracking-wide">
                                {pkg.duration}
                            </span>
                            <span className="text-xs font-mono text-gray-400">{pkg.code}</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-buruli-blue mb-2 leading-tight">{pkg.title}</h3>
                        <p className="text-sm font-bold text-buruli-gold mb-4 uppercase tracking-wider text-[10px]">{pkg.focus}</p>
                        <p className="text-gray-600 mb-6">{pkg.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                             <div className="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                                <CheckCircle size={12} className="mr-1 text-green-500" /> Guide: Local Baruuli
                             </div>
                             <div className="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                                <CheckCircle size={12} className="mr-1 text-green-500" /> Contribution: Cultural Fund
                             </div>
                        </div>
                    </div>

                    <div className="mt-auto border-t border-gray-100">
                        <button 
                            onClick={() => toggleExpand(pkg.id)}
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-buruli-blue font-bold text-sm"
                        >
                            <span>{expandedId === pkg.id ? 'Hide Details' : 'View Itinerary & Pricing'}</span>
                            {expandedId === pkg.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        
                        {expandedId === pkg.id && (
                            <div className="p-8 pt-0 bg-gray-50 border-t border-gray-100 animate-fade-in">
                                {/* Itinerary */}
                                <div className="mb-8 mt-6">
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Map size={16} className="text-buruli-gold" /> Itinerary Highlights</h4>
                                    <div className="space-y-4 border-l-2 border-buruli-blue/20 pl-4">
                                        {pkg.itinerary.map((day, idx) => (
                                            <div key={idx} className="relative">
                                                <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-buruli-gold border-2 border-white"></div>
                                                <h5 className="font-bold text-sm text-buruli-blue">{day.day}: {day.title}</h5>
                                                <ul className="mt-1 space-y-1">
                                                    {day.details.map((detail, dIdx) => (
                                                        <li key={dIdx} className="text-xs text-gray-600 flex items-start">
                                                            <span className="mr-2">•</span> {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* USP */}
                                <div className="mb-6 bg-buruli-blue/5 p-4 rounded-lg">
                                    <h5 className="text-xs font-bold text-buruli-blue uppercase mb-1">Unique Value</h5>
                                    <p className="text-sm text-gray-700 italic">"{pkg.usp}"</p>
                                </div>

                                {/* Pricing Table */}
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><DollarSign size={16} className="text-buruli-gold" /> Pricing (Per Person)</h4>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left">
                                            <thead className="text-xs text-gray-500 uppercase bg-gray-100">
                                                <tr>
                                                    <th className="px-3 py-2 rounded-tl-lg">Tier</th>
                                                    <th className="px-3 py-2">Foreign Non-Res</th>
                                                    <th className="px-3 py-2">Foreign Res</th>
                                                    <th className="px-3 py-2 rounded-tr-lg">E.A. Citizen</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                <tr>
                                                    <td className="px-3 py-2 font-bold text-gray-900">Budget</td>
                                                    <td className="px-3 py-2">{pkg.pricing.fnr.budget}</td>
                                                    <td className="px-3 py-2">{pkg.pricing.fr.budget}</td>
                                                    <td className="px-3 py-2">{pkg.pricing.eac.budget}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-3 py-2 font-bold text-buruli-blue">Mid-range</td>
                                                    <td className="px-3 py-2 font-bold text-buruli-blue">{pkg.pricing.fnr.mid}</td>
                                                    <td className="px-3 py-2 font-bold text-buruli-blue">{pkg.pricing.fr.mid}</td>
                                                    <td className="px-3 py-2 font-bold text-buruli-blue">{pkg.pricing.eac.mid}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-3 py-2 font-bold text-buruli-gold">Luxury</td>
                                                    <td className="px-3 py-2">{pkg.pricing.fnr.lux}</td>
                                                    <td className="px-3 py-2">{pkg.pricing.fr.lux}</td>
                                                    <td className="px-3 py-2">{pkg.pricing.eac.lux}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-4 text-xs text-gray-500">
                                        <strong>Includes:</strong> {pkg.includes}
                                    </div>
                                </div>

                                <button className="w-full mt-6 bg-buruli-blue text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                                    Book This Package
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>

        {/* Policies & Seasonality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-serif font-bold text-xl text-buruli-blue mb-4 flex items-center gap-2">
                    <Calendar className="text-buruli-gold" /> Seasonal Adjustments (2025)
                </h3>
                <ul className="space-y-4 text-sm">
                    <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span className="font-bold text-gray-700">Peak Season <span className="text-xs font-normal text-gray-500 block">Jun-Oct, Dec-Feb</span></span>
                        <span className="px-2 py-1 bg-red-50 text-red-600 rounded font-bold text-xs">+15% Surcharge</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span className="font-bold text-gray-700">Green Season <span className="text-xs font-normal text-gray-500 block">Mar-May, Nov</span></span>
                        <span className="px-2 py-1 bg-green-50 text-green-600 rounded font-bold text-xs">-10% Discount</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span className="font-bold text-gray-700">Engaango Festival <span className="text-xs font-normal text-gray-500 block">December</span></span>
                        <span className="px-2 py-1 bg-buruli-gold/20 text-buruli-blue rounded font-bold text-xs">+$173 Supplement</span>
                    </li>
                </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-serif font-bold text-xl text-buruli-blue mb-4 flex items-center gap-2">
                    <FileText className="text-buruli-gold" /> Booking Policy
                </h3>
                <div className="text-sm text-gray-600 space-y-3">
                    <p>
                        <strong>Advance Booking:</strong> 6 months for Gorilla permits, 3 months for standard packages.
                    </p>
                    <p>
                        <strong>Payment:</strong> 30% deposit secures booking, full payment 60 days prior.
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <strong className="block mb-1 text-gray-800">Cancellation Terms:</strong>
                        <ul className="space-y-1 text-xs">
                            <li className="flex justify-between"><span>90+ Days:</span> <span>75% Refund</span></li>
                            <li className="flex justify-between"><span>45-89 Days:</span> <span>50% Refund</span></li>
                            <li className="flex justify-between"><span>15-44 Days:</span> <span>25% Refund</span></li>
                            <li className="flex justify-between text-red-500"><span>&lt;14 Days:</span> <span>No Refund</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default TourPackages;
