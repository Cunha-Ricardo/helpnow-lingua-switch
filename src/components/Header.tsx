
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/lovable-uploads/8a525324-c2b5-4a35-a6c1-c5e1a505f574.png" alt="HelpNow" className="h-10 w-10" />
          <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            HelpNow
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('nav.howItWorks')}
          </a>
          <a href="#categories" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('nav.categories')}
          </a>
          
          <div className="flex items-center space-x-2 ml-8">
            <button
              onClick={() => setLanguage('pt')}
              className={`px-2 py-1 rounded ${language === 'pt' ? 'font-bold text-blue-600' : 'text-gray-600'}`}
            >
              PT
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded ${language === 'en' ? 'font-bold text-blue-600' : 'text-gray-600'}`}
            >
              EN
            </button>
          </div>
        </nav>

        <div className="flex space-x-3">
          <Button variant="outline" className="hidden sm:inline-flex">
            {t('nav.findPro')}
          </Button>
          <Button className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600">
            {t('nav.offerServices')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
