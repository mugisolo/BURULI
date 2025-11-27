import React, { useState } from 'react';
import { Menu, X, Crown, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'History', href: '/history' },
    { name: 'Clans', href: '/clans' },
    { name: 'Tourism', href: '/tourism' },
    { name: 'Development', href: '/development' },
    { name: 'Invest', href: '/partnerships' },
  ];

  const handleSupportClick = () => {
    navigate('/partnerships');
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-buruli-blue/95 backdrop-blur-md text-white border-b border-buruli-gold/30 shadow-lg transition-all duration-300">
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-black/30 border-b border-white/5 text-[11px] font-medium tracking-wide">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                 <span className="text-buruli-gold/80">Obukama bwa Buruli</span>
              </div>
              <div className="flex items-center space-x-6">
                  <a href="tel:+256700000000" className="flex items-center space-x-2 text-gray-300 hover:text-buruli-gold transition-colors">
                      <Phone size={12} className="text-buruli-gold" />
                      <span>+256 700 000 000</span>
                  </a>
                  <span className="text-gray-700">|</span>
                  <a href="mailto:info@burulikingdom.com" className="flex items-center space-x-2 text-gray-300 hover:text-buruli-gold transition-colors">
                      <Mail size={12} className="text-buruli-gold" />
                      <span>info@burulikingdom.com</span>
                  </a>
                  <span className="text-gray-700">|</span>
                  <div className="flex items-center space-x-3">
                      <a href="#" className="text-gray-400 hover:text-buruli-gold transition-colors"><Facebook size={12} /></a>
                      <a href="#" className="text-gray-400 hover:text-buruli-gold transition-colors"><Twitter size={12} /></a>
                      <a href="#" className="text-gray-400 hover:text-buruli-gold transition-colors"><Instagram size={12} /></a>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <Crown className="h-8 w-8 text-buruli-gold group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-wider text-buruli-gold group-hover:text-white transition-colors">BURULI</span>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-300">Kingdom</span>
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-buruli-gold hover:bg-white/5 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={handleSupportClick}
                className="bg-buruli-gold text-buruli-blue px-5 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-buruli-blue transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Support Us
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-buruli-blue border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-buruli-gold hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleSupportClick}
              className="w-full text-left mt-4 bg-buruli-gold text-buruli-blue px-3 py-3 rounded font-bold hover:bg-white"
            >
              Support Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
