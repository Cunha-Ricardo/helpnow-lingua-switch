
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/8a525324-c2b5-4a35-a6c1-c5e1a505f574.png" alt="HelpNow" className="h-8 w-8 sm:h-10 sm:w-10" />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              HelpNow
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors text-sm xl:text-base">
              {t('nav.howItWorks')}
            </a>
            <a href="#categories" className="text-gray-300 hover:text-blue-400 transition-colors text-sm xl:text-base">
              {t('nav.categories')}
            </a>
            
            <div className="flex items-center space-x-2 ml-6">
              <button
                onClick={() => setLanguage('pt')}
                className={`px-2 py-1 rounded text-sm ${language === 'pt' ? 'font-bold text-blue-400' : 'text-gray-300 hover:text-blue-400'} transition-colors`}
              >
                PT
              </button>
              <span className="text-gray-500">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-sm ${language === 'en' ? 'font-bold text-blue-400' : 'text-gray-300 hover:text-blue-400'} transition-colors`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-2 lg:space-x-3">
            <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-black text-xs sm:text-sm px-3 sm:px-4 py-2">
              {t('nav.findPro')}
            </Button>
            <Button className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-2">
              {t('nav.offerServices')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-3 mt-4">
              <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                {t('nav.howItWorks')}
              </a>
              <a href="#categories" className="text-gray-300 hover:text-blue-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                {t('nav.categories')}
              </a>
              
              <div className="flex items-center space-x-2 py-2">
                <span className="text-gray-400 text-sm">Idioma:</span>
                <button
                  onClick={() => setLanguage('pt')}
                  className={`px-3 py-1 rounded text-sm ${language === 'pt' ? 'font-bold text-blue-400 bg-gray-800' : 'text-gray-300 hover:text-blue-400'} transition-colors`}
                >
                  PT
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded text-sm ${language === 'en' ? 'font-bold text-blue-400 bg-gray-800' : 'text-gray-300 hover:text-blue-400'} transition-colors`}
                >
                  EN
                </button>
              </div>
              
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="w-full text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-black" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.findPro')}
                </Button>
                <Button className="w-full bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.offerServices')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
