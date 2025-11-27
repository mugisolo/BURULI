import React from 'react';
import { Sprout, BookOpen, Droplets, Users, CheckCircle } from 'lucide-react';

const DevelopmentSection: React.FC = () => {
  return (
    <div className="pt-20 bg-buruli-cream min-h-screen">
      {/* Header */}
      <div className="bg-buruli-blue py-16 px-4">
         <div className="max-w-7xl mx-auto text-center">
             <span className="text-buruli-gold font-bold tracking-widest uppercase text-sm mb-4 block">Vision 2040</span>
             <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Building Buruli</h1>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                 Strategic initiatives led by the Kingdom to improve education, health, and environmental sustainability for all Baruuli.
             </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Main Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Project 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                  <div className="h-64 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?q=80&w=800')] bg-cover bg-center"></div>
                  <div className="p-8 flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                          <Sprout className="text-green-600 h-6 w-6" />
                          <h3 className="text-2xl font-bold text-gray-900">Green Nakasongola</h3>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                          Nakasongola is prone to drought and deforestation due to charcoal burning. This royal initiative involves planting <strong>1 million trees</strong> by 2030. We distribute fruit seedlings (mangoes, oranges) to households to provide both cover and income.
                      </p>
                      <div className="flex items-center text-sm text-green-700 font-bold bg-green-50 px-4 py-2 rounded-lg w-fit">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>45,000 Trees Planted in 2024</span>
                      </div>
                  </div>
              </div>

               {/* Project 2 */}
               <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                  <div className="h-64 bg-[url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800')] bg-cover bg-center"></div>
                  <div className="p-8 flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                          <BookOpen className="text-blue-600 h-6 w-6" />
                          <h3 className="text-2xl font-bold text-gray-900">Buruli Bursary Scheme</h3>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                          Education is the key to liberation. The Kingdom offers bursaries to bright but vulnerable students from the 129 clans. We also partner with universities to offer quotas for Baruuli students.
                      </p>
                      <div className="flex items-center text-sm text-blue-700 font-bold bg-blue-50 px-4 py-2 rounded-lg w-fit">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>120 Students Supported this Term</span>
                      </div>
                  </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                  <div className="h-64 bg-[url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800')] bg-cover bg-center"></div>
                  <div className="p-8 flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                          <Droplets className="text-cyan-600 h-6 w-6" />
                          <h3 className="text-2xl font-bold text-gray-900">Water & Sanitation</h3>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                          Combating waterborne diseases by repairing boreholes and constructing protected springs. The "Bulungi Bwansi" (Community Works) program mobilizes youth monthly to clean towns and open drainage channels.
                      </p>
                  </div>
              </div>

              {/* Project 4 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                  <div className="h-64 bg-[url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800')] bg-cover bg-center"></div>
                  <div className="p-8 flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                          <Users className="text-purple-600 h-6 w-6" />
                          <h3 className="text-2xl font-bold text-gray-900">Cultural Revival</h3>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                          Promoting the <strong>Luruli language</strong> through radio programs and book publishing. Organizing the annual Royal Regatta and "Engooto" dance competitions to keep traditions alive among the youth.
                      </p>
                  </div>
              </div>

          </div>

          <div className="mt-20 text-center bg-buruli-blue rounded-3xl p-12 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-buruli-gold/10 pointer-events-none"></div>
               <h2 className="text-3xl font-serif font-bold text-white mb-6 relative z-10">Want to Partner with Us?</h2>
               <p className="text-gray-300 max-w-2xl mx-auto mb-8 relative z-10">The Kingdom welcomes NGOs, corporate partners, and well-wishers to support these transformative projects.</p>
               <button className="bg-buruli-gold text-buruli-blue px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl relative z-10">
                   Contact Development Ministry
               </button>
          </div>

      </div>
    </div>
  );
};

export default DevelopmentSection;