
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Header
    'nav.howItWorks': 'Como Funciona',
    'nav.categories': 'Categorias',
    'nav.findPro': 'ENCONTRE UM PROFISSIONAL',
    'nav.offerServices': 'OFEREÇA SEUS SERVIÇOS',
    
    // Hero Section
    'hero.title': 'Help Now: A solução inteligente na palma da sua mão',
    'hero.subtitle': 'Conectamos quem precisa de ajuda com quem sabe ajudar em todo o território americano. Encontre profissionais qualificados de forma rápida, segura e acessível.',
    'hero.findPro': 'ENCONTRE UM PROFISSIONAL',
    'hero.offerServices': 'OFEREÇA SEUS SERVIÇOS',
    
    // How It Works
    'howItWorks.title': 'Simples, prático e confiável. Seu novo jeito de contratar.',
    'howItWorks.customer': 'Para o Cliente',
    'howItWorks.professional': 'Para o Profissional',
    'howItWorks.customer.step1.title': 'Descreva o que você precisa',
    'howItWorks.customer.step1.desc': 'Publique o serviço que você necessita. É rápido e gratuito.',
    'howItWorks.customer.step2.title': 'Receba propostas',
    'howItWorks.customer.step2.desc': 'Profissionais qualificados e disponíveis na sua região enviarão orçamentos.',
    'howItWorks.customer.step3.title': 'Contrate com segurança',
    'howItWorks.customer.step3.desc': 'Compare perfis, avaliações e escolha o profissional ideal. O pagamento é seguro pelo app.',
    'howItWorks.professional.step1.title': 'Cadastre seu perfil',
    'howItWorks.professional.step1.desc': 'Crie seu perfil gratuitamente, destacando suas habilidades e experiência.',
    'howItWorks.professional.step2.title': 'Encontre oportunidades',
    'howItWorks.professional.step2.desc': 'Receba alertas de serviços na sua área e envie suas propostas.',
    'howItWorks.professional.step3.title': 'Realize o trabalho e receba',
    'howItWorks.professional.step3.desc': 'Preste um ótimo serviço e receba seu pagamento de forma segura e rápida direto na sua conta.',
    
    // Market Section
    'market.title': 'Tecnologia a favor do trabalho, em todos os Estados Unidos',
    'market.description': 'A Help Now chegou para impulsionar o mercado de trabalho informal nos Estados Unidos. Nossa plataforma inovadora conecta profissionais qualificados de diversas áreas a pessoas que buscam por esses serviços. Com uma interface inteligente e prática, estamos presentes em todo o território americano, oferecendo soluções que geram oportunidade e resolvem problemas de forma eficiente.',
    
    // Categories
    'categories.title': 'Encontre ajuda em diversas áreas',
    'categories.homeRepairs': 'Reparos Domésticos',
    'categories.cleaning': 'Limpeza',
    'categories.furnitureAssembly': 'Montagem de Móveis',
    'categories.landscaping': 'Jardinagem',
    'categories.plumbing': 'Encanamento',
    'categories.electrical': 'Elétrica',
    'categories.petCare': 'Cuidados com Pets',
    'categories.events': 'Eventos e Festas',
    'categories.more': 'E muitas outras...',
    
    // Why Choose
    'whyChoose.title': 'Por que escolher a HelpNow?',
    'whyChoose.security.title': 'Segurança',
    'whyChoose.security.desc': 'Perfis verificados, sistema de avaliação e pagamento seguro dentro do app.',
    'whyChoose.speed.title': 'Rapidez',
    'whyChoose.speed.desc': 'Encontre profissionais disponíveis perto de você em questão de minutos.',
    'whyChoose.affordability.title': 'Acessibilidade',
    'whyChoose.affordability.desc': 'Compare orçamentos e encontre o preço justo para o serviço que você precisa.',
    'whyChoose.convenience.title': 'Conveniência',
    'whyChoose.convenience.desc': 'Tudo na palma da sua mão, do primeiro contato ao pagamento final.',
    
    // CTA
    'cta.title': 'Pronto para resolver ou para trabalhar?',
    'cta.description': 'Junte-se a milhares de americanos que já estão simplificando o jeito de contratar e oferecer serviços. Baixe o aplicativo e comece hoje mesmo.',
    'cta.slogan': 'Help Now: Seu novo jeito de contratar.',
    'cta.downloadApp': 'Baixar Aplicativo'
  },
  en: {
    // Header
    'nav.howItWorks': 'How It Works',
    'nav.categories': 'Categories',
    'nav.findPro': 'FIND A PRO',
    'nav.offerServices': 'OFFER YOUR SERVICES',
    
    // Hero Section
    'hero.title': 'Help Now: The smart solution in the palm of your hand',
    'hero.subtitle': 'We connect people who need help with pros who can get it done across the entire United States. Find qualified professionals quickly, safely, and affordably.',
    'hero.findPro': 'FIND A PRO',
    'hero.offerServices': 'OFFER YOUR SERVICES',
    
    // How It Works
    'howItWorks.title': 'Simple, practical, and reliable. Your new way to hire.',
    'howItWorks.customer': 'For the Customer',
    'howItWorks.professional': 'For the Professional',
    'howItWorks.customer.step1.title': 'Describe what you need',
    'howItWorks.customer.step1.desc': 'Post the service you require. It\'s fast and free.',
    'howItWorks.customer.step2.title': 'Receive proposals',
    'howItWorks.customer.step2.desc': 'Qualified and available pros in your area will send you quotes.',
    'howItWorks.customer.step3.title': 'Hire with confidence',
    'howItWorks.customer.step3.desc': 'Compare profiles, ratings, and choose the ideal pro. Payment is secure through the app.',
    'howItWorks.professional.step1.title': 'Create your profile',
    'howItWorks.professional.step1.desc': 'Set up your profile for free, highlighting your skills and experience.',
    'howItWorks.professional.step2.title': 'Find opportunities',
    'howItWorks.professional.step2.desc': 'Get alerts for jobs in your area and send your proposals.',
    'howItWorks.professional.step3.title': 'Do the work and get paid',
    'howItWorks.professional.step3.desc': 'Provide a great service and get paid securely and quickly, right to your account.',
    
    // Market Section
    'market.title': 'Technology for jobs, across the entire United States',
    'market.description': 'Help Now is here to boost the informal labor market in the United States. Our innovative app connects skilled professionals from various fields with people looking for their services. With a smart and practical platform, we operate nationwide, offering solutions that create opportunities and solve problems efficiently.',
    
    // Categories
    'categories.title': 'Find help in various areas',
    'categories.homeRepairs': 'Home Repairs',
    'categories.cleaning': 'Cleaning Services',
    'categories.furnitureAssembly': 'Furniture Assembly',
    'categories.landscaping': 'Landscaping & Yard Work',
    'categories.plumbing': 'Plumbing',
    'categories.electrical': 'Electrical Services',
    'categories.petCare': 'Pet Care',
    'categories.events': 'Events & Party Help',
    'categories.more': 'And many more...',
    
    // Why Choose
    'whyChoose.title': 'Why Choose HelpNow?',
    'whyChoose.security.title': 'Security',
    'whyChoose.security.desc': 'Verified profiles, a robust rating system, and secure in-app payments.',
    'whyChoose.speed.title': 'Speed',
    'whyChoose.speed.desc': 'Find pros available near you in a matter of minutes.',
    'whyChoose.affordability.title': 'Affordability',
    'whyChoose.affordability.desc': 'Compare quotes and find the right price for the service you need.',
    'whyChoose.convenience.title': 'Convenience',
    'whyChoose.convenience.desc': 'Everything in the palm of your hand, from the first contact to the final payment.',
    
    // CTA
    'cta.title': 'Ready to get things done or get to work?',
    'cta.description': 'Join thousands of Americans who are already simplifying the way they hire and offer services. Download the app and get started today.',
    'cta.slogan': 'Help Now: Your new way to hire.',
    'cta.downloadApp': 'Download App'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
