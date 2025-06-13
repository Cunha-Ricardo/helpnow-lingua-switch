
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, UserCheck, Search, Send, Shield } from 'lucide-react';

const HowItWorksSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'customer' | 'professional'>('customer');

  const customerSteps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: t('howItWorks.customer.step1.title'),
      description: t('howItWorks.customer.step1.desc')
    },
    {
      icon: <Send className="h-8 w-8" />,
      title: t('howItWorks.customer.step2.title'),
      description: t('howItWorks.customer.step2.desc')
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('howItWorks.customer.step3.title'),
      description: t('howItWorks.customer.step3.desc')
    }
  ];

  const professionalSteps = [
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: t('howItWorks.professional.step1.title'),
      description: t('howItWorks.professional.step1.desc')
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: t('howItWorks.professional.step2.title'),
      description: t('howItWorks.professional.step2.desc')
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('howItWorks.professional.step3.title'),
      description: t('howItWorks.professional.step3.desc')
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t('howItWorks.title')}
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-lg shadow-md">
            <Button
              variant={activeTab === 'customer' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('customer')}
              className="mr-1"
            >
              <Users className="mr-2 h-4 w-4" />
              {t('howItWorks.customer')}
            </Button>
            <Button
              variant={activeTab === 'professional' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('professional')}
            >
              <UserCheck className="mr-2 h-4 w-4" />
              {t('howItWorks.professional')}
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {(activeTab === 'customer' ? customerSteps : professionalSteps).map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
