import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';
import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/ui/CustomCursor';
import { Toast } from './components/ui/Toast';
import { Navigation } from './components/layout/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SelectedWorkSection } from './components/sections/SelectedWorkSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { LeetcodeSection } from './components/sections/LeetcodeSection';
import { GithubSection } from './components/sections/GithubSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const AppContent: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    const handleStop = () => lenis.stop();
    const handleStart = () => lenis.start();

    window.addEventListener('lenis-stop', handleStop);
    window.addEventListener('lenis-start', handleStart);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('lenis-stop', handleStop);
      window.removeEventListener('lenis-start', handleStart);
      lenis.destroy();
    };
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground bg-grain overflow-x-hidden transition-colors duration-500">
      {/* Custom Dynamic Cursor */}
      <CustomCursor />

      {/* Persistent Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <SelectedWorkSection />
        <ExperienceSection />
        <ResearchSection onShowToast={showToast} />
        <TechStackSection />
        <LeetcodeSection />
        <GithubSection />
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SoundProvider>
        <CursorProvider>
          <AppContent />
        </CursorProvider>
      </SoundProvider>
    </ThemeProvider>
  );
};

export default App;
