
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import MarketSection from '../components/MarketSection';
import CategoriesSection from '../components/CategoriesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <HowItWorksSection />
        <MarketSection />
        <CategoriesSection />
        <WhyChooseSection />
        <CTASection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
