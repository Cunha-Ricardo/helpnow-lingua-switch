
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wrench, 
  Sparkles, 
  Package, 
  TreePine, 
  Droplets, 
  Zap, 
  Heart, 
  PartyPopper,
  MoreHorizontal 
} from 'lucide-react';

const CategoriesSection = () => {
  const { t } = useLanguage();

  const categories = [
    { icon: <Wrench className="h-6 w-6" />, name: t('categories.homeRepairs') },
    { icon: <Sparkles className="h-6 w-6" />, name: t('categories.cleaning') },
    { icon: <Package className="h-6 w-6" />, name: t('categories.furnitureAssembly') },
    { icon: <TreePine className="h-6 w-6" />, name: t('categories.landscaping') },
    { icon: <Droplets className="h-6 w-6" />, name: t('categories.plumbing') },
    { icon: <Zap className="h-6 w-6" />, name: t('categories.electrical') },
    { icon: <Heart className="h-6 w-6" />, name: t('categories.petCare') },
    { icon: <PartyPopper className="h-6 w-6" />, name: t('categories.events') },
    { icon: <MoreHorizontal className="h-6 w-6" />, name: t('categories.more') }
  ];

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t('categories.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
