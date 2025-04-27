import React from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import StatsSection from './sections/StatsSection';
import CollaborationsSection from './sections/CollaborationsSection';
import ReviewsSection from './sections/ReviewsSection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';

function App() {
  const theme = useTheme();

  return (
    <div className={`min-h-screen ${theme.isDark ? 'dark' : ''}`}>
      <Header theme={theme} />
      
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <CollaborationsSection />
        <ReviewsSection />
        <GallerySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;