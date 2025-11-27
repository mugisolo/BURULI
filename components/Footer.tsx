import React from 'react';
import { Crown, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
               <Crown className="text-buruli-gold h-6 w-6" />
               <span className="text-xl font-serif font-bold text-white">Buruli Kingdom</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Restoring dignity, promoting culture, and driving development for the people of Nakasongola and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-buruli-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-buruli-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-buruli-gold transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-buruli-gold transition-colors">The Isabaruuli</a></li>
              <li><a href="#" className="hover:text-buruli-gold transition-colors">Kingdom Cabinet</a></li>
              <li><a href="#" className="hover:text-buruli-gold transition-colors">Investment Opportunities</a></li>
              <li><a href="#" className="hover:text-buruli-gold transition-colors">News & Events</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-buruli-gold mt-1" />
                <span>Kingdom Headquarters,<br/>Nakasongola, Uganda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-buruli-gold" />
                <span>+256 700 000 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-buruli-gold" />
                <span>info@burulikingdom.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Stay Updated</h3>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-buruli-gold"
              />
              <button className="bg-buruli-gold text-buruli-blue font-bold px-4 py-2 rounded hover:bg-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Buruli Kingdom. All rights reserved.</p>
          <p>Designed with AI. Powered by Gemini.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;