import React from 'react';
import { Calendar, Award, ChevronRight } from 'lucide-react';

const HistorySection: React.FC = () => {
  const milestones = [
    { year: "Pre-1896", title: "Bunyoro-Kitara Era", desc: "Buruli exists as a loyal county under the vast Bunyoro-Kitara Empire, serving as a strategic naval base on Lake Kyoga." },
    { year: "1896", title: "Colonial Annexation", desc: "Following the defeat of Omukama Kabalega, Buruli is annexed to the Buganda Kingdom by British colonialists as part of the 'Lost Counties'." },
    { year: "1964", title: "The Referendum", desc: "A referendum is held for the Lost Counties. While Buyaga and Bugangaizi vote to return to Bunyoro, Buruli's status remains administratively complex." },
    { year: "1995", title: "Constitutional Recognition", desc: "The new Constitution of Uganda (Article 246) explicitly recognizes the right to cultural institutions, paving the way for Buruli's autonomy." },
    { year: "2004", title: "The Restoration (Dec 10)", desc: "Official installation and coronation of Isabaruuli Mwogezi Butamanya, marking the independence of the Buruli Kingdom." },
    { year: "2024", title: "20th Anniversary", desc: "The Kingdom celebrates 20 years of restored leadership with a grand Empango ceremony in Nakasongola." },
    { year: "2025", title: "Future Vision", desc: "Upcoming 21st Coronation Anniversary: 'Cultural Consolidation for Economic Prosperity'." }
  ];

  return (
    <div className="pt-20 bg-buruli-cream min-h-screen">
      {/* Page Header */}
      <div className="bg-buruli-blue text-white py-16 px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547993477-8c347d46387a?q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
         <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our History</h1>
            <p className="text-xl text-buruli-gold italic max-w-2xl mx-auto">"A people without history is like a tree without roots."</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                  <section>
                      <h2 className="text-3xl font-serif font-bold text-buruli-blue mb-6 border-l-4 border-buruli-gold pl-4">The Journey to Autonomy</h2>
                      <div className="prose prose-lg text-gray-700">
                          <p className="mb-4">
                              The history of Buruli is a testament to the endurance of its people. Historically wedged between the great empires of Bunyoro-Kitara and Buganda, Buruli has always maintained a distinct identity, language (Luruli), and cultural norms.
                          </p>
                          <p className="mb-4">
                              For over a century, the cultural identity of the Baruuli was suppressed following the 1900 Buganda Agreement which placed them under Buganda administrative rule. The Baruuli people, however, never lost their sense of self.
                          </p>
                          <p>
                              The restoration of the Kingdom in 2004 was not just a political event, but a spiritual renewal. It marked the return of dignity to the clans and the re-establishment of the <strong>Isabaruuli</strong> as the custodian of culture.
                          </p>
                      </div>
                  </section>

                  <section className="bg-white p-8 rounded-2xl shadow-sm border border-buruli-gold/20">
                      <div className="flex items-center space-x-4 mb-6">
                          <div className="p-3 bg-buruli-gold rounded-full text-buruli-blue">
                              <Award size={32} />
                          </div>
                          <div>
                              <h2 className="text-2xl font-serif font-bold text-buruli-blue">The Empango Ceremony</h2>
                              <p className="text-sm text-gray-500 uppercase tracking-widest">Celebrated Annually on December 10th</p>
                          </div>
                      </div>
                      <p className="text-gray-700 mb-6">
                          The <strong>Empango</strong> (Coronation Anniversary) is the most significant event in the Buruli calendar. Thousands of subjects, dignitaries, and tourists gather at the Palace grounds in Nakasongola.
                      </p>
                      <ul className="space-y-3">
                          <li className="flex items-start">
                              <ChevronRight className="text-buruli-gold mt-1 shrink-0" />
                              <span className="text-gray-700"><strong>Royal Drum Sounding:</strong> The Isabaruuli sounds the royal drum to signal the start of festivities.</span>
                          </li>
                          <li className="flex items-start">
                              <ChevronRight className="text-buruli-gold mt-1 shrink-0" />
                              <span className="text-gray-700"><strong>Engooto Dance:</strong> The traditional royal dance is performed by youth and elders.</span>
                          </li>
                          <li className="flex items-start">
                              <ChevronRight className="text-buruli-gold mt-1 shrink-0" />
                              <span className="text-gray-700"><strong>Milestone:</strong> In 2025, we look forward to the 21st Anniversary celebrating "Cultural Consolidation".</span>
                          </li>
                      </ul>
                  </section>
              </div>

              {/* Timeline Sidebar */}
              <div className="lg:col-span-1">
                  <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                      <h3 className="text-xl font-bold text-buruli-blue mb-6 flex items-center">
                          <Calendar className="mr-2 text-buruli-gold" /> Key Milestones
                      </h3>
                      <div className="border-l-2 border-buruli-blue/10 pl-6 space-y-8">
                          {milestones.map((item, idx) => (
                              <div key={idx} className="relative group">
                                  <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-white bg-buruli-gold group-hover:scale-125 transition-transform"></span>
                                  <span className="inline-block py-1 px-2 bg-buruli-blue/5 rounded text-buruli-blue font-bold text-xs mb-1">{item.year}</span>
                                  <h4 className="text-md font-bold text-gray-900 leading-tight">{item.title}</h4>
                                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

          </div>
      </div>
    </div>
  );
};

export default HistorySection;