import React, { useState, useEffect } from 'react';
import { Building2, Landmark, Sprout, Heart, Smartphone, CreditCard, Calendar, Send, Info, Check, Copy, Timer, Bot, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Partnerships: React.FC = () => {
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedMobile, setCopiedMobile] = useState(false);
  
  // Form State
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  const navigate = useNavigate();

  useEffect(() => {
    // Target Date: December 10, 2025
    const targetDate = new Date('2025-12-10T00:00:00');
    
    const interval = setInterval(() => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            setTimeLeft({ days, hours, minutes });
        }
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, type: 'bank' | 'mobile') => {
    navigator.clipboard.writeText(text);
    if (type === 'bank') {
        setCopiedBank(true);
        setTimeout(() => setCopiedBank(false), 2000);
    } else {
        setCopiedMobile(true);
        setTimeout(() => setCopiedMobile(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setFormState('submitting');
      // Simulate API call
      setTimeout(() => {
          setFormState('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          // Reset after 3 seconds
          setTimeout(() => setFormState('idle'), 5000);
      }, 1500);
  };

  const scrollToContact = () => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const askOmuruuli = () => {
      navigate('/?ask=invest');
      setTimeout(() => {
          const element = document.getElementById('omuruuli');
          element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
  };

  return (
    <div className="pt-20 bg-buruli-cream min-h-screen">
       {/* Hero */}
       <div className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-buruli-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
         <div className="max-w-7xl mx-auto text-center relative z-10">
             <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Invest & Partner</h1>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                 Join us in building the future of Buruli. From commercial investments to philanthropic partnerships, your contribution drives progress.
             </p>
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Coronation 2025 Sponsorship with Countdown */}
          <div className="bg-gradient-to-br from-buruli-blue to-slate-900 rounded-3xl p-8 md:p-12 mb-8 text-white relative overflow-hidden shadow-2xl border border-buruli-gold/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-buruli-gold/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="md:w-2/3">
                      <div className="inline-flex items-center space-x-2 bg-buruli-gold/20 px-4 py-1 rounded-full mb-4 border border-buruli-gold/40 animate-pulse">
                          <Calendar className="w-4 h-4 text-buruli-gold" />
                          <span className="text-sm font-bold text-buruli-gold uppercase tracking-wider">Upcoming Major Event</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Sponsor Empango 2025</h2>
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          The 21st Coronation Anniversary will be a historic gathering in Nakasongola. We invite corporate sponsors to partner with the Kingdom for this grand celebration.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <button onClick={scrollToContact} className="bg-buruli-gold text-buruli-blue px-8 py-3 rounded-xl font-bold hover:bg-white transition-all transform hover:scale-105 shadow-lg">
                            Become a Sponsor
                        </button>
                        <button className="px-8 py-3 rounded-xl font-bold border border-white/30 hover:bg-white/10 transition-colors">
                            Download Package
                        </button>
                      </div>
                  </div>
                  
                  {/* Countdown Timer */}
                  <div className="md:w-1/3 flex flex-col items-center">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl w-full max-w-xs text-center">
                          <div className="flex items-center justify-center gap-2 mb-4 text-buruli-gold">
                              <Timer className="w-5 h-5" />
                              <span className="text-sm font-bold uppercase tracking-widest">Countdown to Jubilee</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center">
                              <div className="bg-black/40 rounded-lg p-3">
                                  <span className="text-2xl md:text-3xl font-bold font-mono block">{timeLeft.days}</span>
                                  <span className="text-[10px] uppercase text-gray-400">Days</span>
                              </div>
                              <div className="bg-black/40 rounded-lg p-3">
                                  <span className="text-2xl md:text-3xl font-bold font-mono block">{timeLeft.hours}</span>
                                  <span className="text-[10px] uppercase text-gray-400">Hrs</span>
                              </div>
                              <div className="bg-black/40 rounded-lg p-3">
                                  <span className="text-2xl md:text-3xl font-bold font-mono block">{timeLeft.minutes}</span>
                                  <span className="text-[10px] uppercase text-gray-400">Mins</span>
                              </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-white/10">
                              <span className="text-xs text-gray-400">Dec 10, 2025 • Nakasongola Palace</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Theme Elaboration */}
          <div className="bg-white border-l-4 border-buruli-gold p-8 shadow-md rounded-r-xl mb-20 relative">
              <div className="absolute top-4 right-4 text-buruli-gold/10">
                  <Landmark size={120} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-buruli-blue mb-4 relative z-10">Theme: "Cultural Consolidation for Economic Prosperity"</h3>
              <div className="prose prose-lg text-gray-700 relative z-10">
                  <p>
                      This year's theme emphasizes the pivotal role of our heritage in driving modern development. It recognizes that our <strong>129 Clans</strong> are not just social units, but potential economic cooperatives.
                  </p>
                  <p>
                       By strengthening our cultural institutions, we create a stable, unified foundation that attracts tourism, secures land tenure for investment, and fosters a work ethic grounded in Baruuli values. We believe that a strong identity is the bedrock of a thriving local economy.
                  </p>
              </div>
          </div>

          {/* Investment Opportunities */}
          <div className="mb-20 relative">
              <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-buruli-blue">Investment Opportunities</h2>
                    <p className="text-gray-600 mt-2">Sectors ripe for growth in Nakasongola</p>
                  </div>
                  <button onClick={askOmuruuli} className="hidden md:flex items-center gap-2 text-sm font-bold text-buruli-blue bg-buruli-blue/10 px-4 py-2 rounded-full hover:bg-buruli-blue hover:text-white transition-colors">
                      <Bot size={16} />
                      Ask Omuruuli about Investing
                  </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Tourism */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-buruli-gold group flex flex-col h-full">
                      <div className="h-56 overflow-hidden relative">
                        <img 
                            src="https://images.unsplash.com/photo-1590523278135-1e28981f6d66?q=80&w=800&auto=format&fit=crop" 
                            alt="Tourism Lodge" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button onClick={scrollToContact} className="bg-white text-buruli-blue font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">Inquire Now</button>
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <Building2 className="w-6 h-6 text-buruli-blue" />
                            <h3 className="text-xl font-bold text-gray-900">Tourism & Hospitality</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                            With Ziwa Rhino Sanctuary attracting global tourists, there is a high demand for eco-lodges, hotels, and cultural experience centers in Nakasongola.
                        </p>
                        <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-sm">
                            <span className="text-gray-500">Available Land</span>
                            <span className="font-bold text-buruli-blue">High Priority</span>
                        </div>
                      </div>
                  </div>

                  {/* Agriculture */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-green-600 group flex flex-col h-full">
                      <div className="h-56 overflow-hidden relative">
                        <img 
                            src="https://images.unsplash.com/photo-1589923188900-85dae5233271?q=80&w=800&auto=format&fit=crop" 
                            alt="Agriculture" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button onClick={scrollToContact} className="bg-white text-buruli-blue font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">Inquire Now</button>
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <Sprout className="w-6 h-6 text-green-600" />
                            <h3 className="text-xl font-bold text-gray-900">Commercial Agriculture</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                            Invest in fruit processing plants. Buruli is a major producer of pineapples, mangoes, and oranges. Value addition is a priority sector.
                        </p>
                        <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-sm">
                            <span className="text-gray-500">Incentives</span>
                            <span className="font-bold text-green-600">Tax Holidays Available</span>
                        </div>
                      </div>
                  </div>

                  {/* Real Estate */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-blue-600 group flex flex-col h-full">
                      <div className="h-56 overflow-hidden relative">
                        <img 
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop" 
                            alt="Real Estate" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button onClick={scrollToContact} className="bg-white text-buruli-blue font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">Inquire Now</button>
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                             <Landmark className="w-6 h-6 text-blue-600" />
                             <h3 className="text-xl font-bold text-gray-900">Real Estate</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                            Nakasongola Town Council is rapidly urbanizing. Prime land is available for commercial complexes, residential estates, and industrial parks.
                        </p>
                        <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-sm">
                            <span className="text-gray-500">Growth Rate</span>
                            <span className="font-bold text-blue-600">12% Annually</span>
                        </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Donations Section */}
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 mb-20" id="donate">
              <div className="text-center mb-12">
                  <Heart className="w-16 h-16 text-red-500 mx-auto mb-6 fill-current animate-pulse" />
                  <h2 className="text-3xl font-serif font-bold text-buruli-blue mb-4">Support the Kingdom</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                      Your donations directly support the <strong>Buruli Bursary Scheme</strong> for educating vulnerable children and the <strong>"Green Nakasongola"</strong> tree planting initiative.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Bank Transfer */}
                  <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 flex flex-col h-full hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-4 mb-6">
                          <div className="bg-buruli-blue p-3 rounded-full text-white">
                              <CreditCard className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Bank Transfer</h3>
                      </div>
                      <div className="space-y-4 text-gray-700 mb-6 flex-grow">
                          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                             <span className="text-sm text-gray-500">Bank</span>
                             <span className="font-bold">Equity Bank Uganda</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                             <span className="text-sm text-gray-500">Account Name</span>
                             <span className="font-bold text-right">Buruli Kingdom Development Fund</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b border-gray-200 group relative">
                             <span className="text-sm text-gray-500">Account No.</span>
                             <div className="flex items-center gap-2">
                                <span className="font-mono font-bold text-buruli-blue">1000 0000 0000</span>
                                <button 
                                    onClick={() => handleCopy('100000000000', 'bank')}
                                    className="p-1 hover:bg-gray-200 rounded transition-colors"
                                    title="Copy Account Number"
                                >
                                    {copiedBank ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-gray-400" />}
                                </button>
                             </div>
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-sm text-gray-500">Swift Code</span>
                             <span className="font-bold">EQBUUG</span>
                          </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 mt-auto border border-blue-100">
                          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-blue-800">
                             <strong>Instruction:</strong> Please include your name as the reference. For international transfers, ensure the Swift code is used.
                          </p>
                      </div>
                  </div>

                  {/* Mobile Money */}
                  <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 flex flex-col h-full hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="bg-buruli-gold p-3 rounded-full text-buruli-blue">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Mobile Money</h3>
                          </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
                           <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BuruliKingdomDonation" alt="Payment QR Code" className="w-32 h-32" />
                                <div className="text-center text-[10px] text-gray-400 mt-1">Scan to Pay</div>
                           </div>
                           <div className="space-y-4 text-gray-700 w-full">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Merchant Code (MTN / Airtel)</p>
                                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                                        <span className="text-2xl font-bold text-buruli-blue tracking-widest font-mono">*165*...#</span>
                                        <button 
                                            onClick={() => handleCopy('*165*...#', 'mobile')}
                                            className="ml-auto p-2 hover:bg-gray-100 rounded-full transition-colors"
                                            title="Copy Code"
                                        >
                                            {copiedMobile ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-gray-400" />}
                                        </button>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600"><strong>Reason:</strong> Donation</p>
                           </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg flex items-start gap-3 mt-auto border border-yellow-100">
                           <Info className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-yellow-800">
                             <strong>Instruction:</strong> Dial the code or scan the QR. You will receive a confirmation SMS from 'Buruli Kingdom'.
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto" id="contact-form">
              <div className="text-center mb-8">
                  <h2 className="text-2xl font-serif font-bold text-buruli-blue">Contact Development Ministry</h2>
                  <p className="text-gray-600">Have questions about partnership or specific projects? Reach out to us directly.</p>
              </div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6 relative">
                  {formState === 'success' && (
                      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-2xl p-8">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                              <Check size={32} />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                          <p className="text-gray-600 text-center">Webale muno! Your inquiry has been received. The Development Ministry will contact you shortly.</p>
                      </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                          <input 
                            required
                            type="text" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-buruli-gold/50 focus:border-buruli-gold transition-all" 
                            placeholder="Enter your full name" 
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input 
                            required
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-buruli-gold/50 focus:border-buruli-gold transition-all" 
                            placeholder="Enter your email" 
                          />
                      </div>
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input 
                        required
                        type="text" 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-buruli-gold/50 focus:border-buruli-gold transition-all" 
                        placeholder="Partnership / Investment Inquiry" 
                      />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea 
                        required
                        rows={4} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-buruli-gold/50 focus:border-buruli-gold transition-all resize-none" 
                        placeholder="How would you like to partner with the Kingdom?"
                      ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className={`w-full bg-buruli-blue text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 ${formState === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                  >
                      {formState === 'submitting' ? (
                          <>Sending...</>
                      ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                      )}
                  </button>
              </form>
          </div>

       </div>
    </div>
  );
};

export default Partnerships;
