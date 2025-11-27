import React from 'react';
import { Map, Camera, Coffee, Info, ChevronDown } from 'lucide-react';
import TourPackages from './TourPackages';

const TourismSection: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
       {/* Hero for Tourism */}
       <div className="h-[60vh] relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547471080-7541e899c6d1?q=80&w=2000')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 text-center px-4 animate-fade-in-up">
                <span className="text-buruli-gold font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in">Discover Nakasongola</span>
                <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-6">Explore Buruli</h1>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">From the prehistoric shoebill storks of Lake Kyoga to the rhinos of Ziwa.</p>
                <a href="#tours" className="inline-flex items-center bg-buruli-gold text-buruli-blue px-6 py-3 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105">
                    View Tour Packages <ChevronDown className="ml-2 w-5 h-5" />
                </a>
            </div>
       </div>

       {/* Attractions Section */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-200">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-serif font-bold text-buruli-blue">Top Attractions</h2>
                <p className="text-gray-500 mt-2">The jewels of the Kingdom</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-2/3 space-y-16">
                    {/* Site 1 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start group">
                        <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-2xl shadow-lg">
                            <img src="https://images.unsplash.com/photo-1577747879201-90a6e60b1e4c?q=80&w=800" alt="Rhino" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-buruli-blue mb-2">Ziwa Rhino Sanctuary</h3>
                            <div className="flex items-center space-x-2 text-sm text-buruli-accent font-bold mb-4">
                                <Camera size={16} />
                                <span>Wildlife Trekking</span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                The only place in Uganda where you can trek southern white rhinos in the wild. This sanctuary in Nakasongola is a conservation success story.
                            </p>
                        </div>
                    </div>

                    {/* Site 2 */}
                    <div className="flex flex-col md:flex-row-reverse gap-8 items-start group">
                         <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-2xl shadow-lg">
                            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800" alt="Lake Kyoga" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-buruli-blue mb-2">Lake Kyoga</h3>
                            <div className="flex items-center space-x-2 text-sm text-buruli-accent font-bold mb-4">
                                <Coffee size={16} />
                                <span>Fishing & Birding</span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                A shallow lake system covered in water lilies. It is a prime spot for spotting the rare Shoebill Stork and experiencing the life of Baruuli fishing communities.
                            </p>
                        </div>
                    </div>

                     {/* Site 3 */}
                     <div className="flex flex-col md:flex-row gap-8 items-start group">
                         <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-2xl shadow-lg">
                            <img src="https://images.unsplash.com/photo-1599580662248-7359929a287c?q=80&w=800" alt="Palace" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-buruli-blue mb-2">Isabaruuli's Palace</h3>
                            <div className="flex items-center space-x-2 text-sm text-buruli-accent font-bold mb-4">
                                <Info size={16} />
                                <span>Cultural Heritage</span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Visit the seat of the Kingdom. Learn about the royal drum, the regalia, and the history of the monarchy from the palace caretakers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <div className="bg-buruli-cream p-8 rounded-2xl sticky top-24 border border-buruli-gold/20 shadow-md">
                        <h3 className="text-xl font-bold text-buruli-blue mb-6">Travel Essentials</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                    <Map className="text-buruli-gold w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Location</h4>
                                    <p className="text-sm text-gray-600">Nakasongola District, Central Uganda (114km from Kampala).</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                    <Coffee className="text-buruli-gold w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Where to Stay</h4>
                                    <p className="text-sm text-gray-600">Amuka Safari Lodge, Ziwa Guest House, Nakasongola Hotel.</p>
                                </div>
                            </div>

                             <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="font-bold text-gray-900 mb-4">Plan your visit</h4>
                                <form className="space-y-3">
                                    <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-buruli-gold text-sm" />
                                    <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-buruli-gold text-sm" />
                                    <button className="w-full bg-buruli-blue text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors text-sm">
                                        Request Itinerary
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
       </div>

       {/* New Strategic Tourism Packages Section */}
       <TourPackages />
    </div>
  );
};

export default TourismSection;
