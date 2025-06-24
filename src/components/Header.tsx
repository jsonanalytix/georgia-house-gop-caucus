import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigationItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/issues', label: t('issues') },
    { path: '/events', label: t('events') },
    { path: '/get-involved', label: t('getInvolved') },
    { path: '/voter-resources', label: t('voterResources') },
    { path: '/contact', label: t('contact') }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">GA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">
                  {t('georgiaHouseGOP')}
                </h1>
                <p className="text-sm text-gray-600">
                  {t('buildingBridges')}
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-red-600 ${
                  location.pathname === item.path
                    ? 'text-red-600 border-b-2 border-red-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSelector />
          </nav>

          {/* Mobile menu button and language selector */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors duration-200 hover:text-red-600 ${
                    location.pathname === item.path
                      ? 'text-red-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;