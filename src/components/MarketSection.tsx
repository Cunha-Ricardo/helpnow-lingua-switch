
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Globe, Smartphone } from 'lucide-react';

const MarketSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            {t('market.title')}
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            {t('market.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Inovação</h3>
                <p className="text-gray-600">Tecnologia de ponta para conectar pessoas</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Nacional</h3>
                <p className="text-gray-600">Cobertura em todos os Estados Unidos</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Simplicidade</h3>
                <p className="text-gray-600">Interface intuitiva e fácil de usar</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
