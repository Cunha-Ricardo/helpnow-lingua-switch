
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, DollarSign, Smartphone } from 'lucide-react';

const WhyChooseSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('whyChoose.security.title'),
      description: t('whyChoose.security.desc'),
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: t('whyChoose.speed.title'),
      description: t('whyChoose.speed.desc'),
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: t('whyChoose.affordability.title'),
      description: t('whyChoose.affordability.desc'),
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t('whyChoose.convenience.title'),
      description: t('whyChoose.convenience.desc'),
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t('whyChoose.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
