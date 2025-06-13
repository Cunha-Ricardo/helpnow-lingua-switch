
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/8a525324-c2b5-4a35-a6c1-c5e1a505f574.png" alt="HelpNow" className="h-8 w-8" />
              <span className="text-2xl font-bold">HelpNow</span>
            </div>
            <p className="text-gray-400 mb-4">
              Conectando pessoas que precisam de ajuda com profissionais qualificados em todo os Estados Unidos.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Categorias</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 HelpNow. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
