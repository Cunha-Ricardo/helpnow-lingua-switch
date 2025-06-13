
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, Smartphone } from 'lucide-react';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-blue-500">
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            {t('cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
              <Download className="mr-2 h-5 w-5" />
              {t('cta.downloadApp')}
            </Button>
          </div>
          
          <p className="text-2xl font-bold text-blue-100">
            {t('cta.slogan')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
