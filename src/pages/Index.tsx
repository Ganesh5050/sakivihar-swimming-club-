import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CoachesSection from '@/components/CoachesSection';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';
import WhatsAppChat from '@/components/WhatsAppChat';
import ScrollToTop from '@/components/ScrollToTop';
import SwimLoadingScreen from '@/components/ui/SwimLoadingScreen';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {isLoading && <SwimLoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <Navigation />
          <HeroSection />
          <AboutSection />
          <CoachesSection />
          <GallerySection />
          <LocationSection />
          <WhatsAppChat />
          <ScrollToTop />
        </>
      )}
    </div>
  );
};

export default Index;