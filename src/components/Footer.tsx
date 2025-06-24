import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">GA</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{t('georgiaHouseGOP')}</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('buildingBridges')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="/issues" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('issues')}
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('events')}
                </a>
              </li>
              <li>
                <a href="/voter-resources" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('voterResources')}
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('privacyPolicy')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-red-400" />
                <span className="text-gray-300">Georgia State Capitol<br />Atlanta, GA 30334</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-red-400" />
                <span className="text-gray-300">(404) 656-5058</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-red-400" />
                <span className="text-gray-300">info@gahousegop.org</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t('stayConnected')}</h4>
            <p className="text-gray-300 text-sm">
              {t('followUs')}
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder={t('email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200"
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                {t('subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-xs leading-relaxed max-w-4xl mx-auto">
            {t('disclaimer')}
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © 2024 Georgia House Republican Caucus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;