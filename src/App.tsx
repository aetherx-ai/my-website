import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialIntro } from './components/EditorialIntro';
import { Projects } from './components/Projects';
import { Capabilities } from './components/Capabilities';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PhotoUploaderModal } from './components/PhotoUploaderModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Business Website');

  // Load custom photo from localStorage if previously set
  useEffect(() => {
    try {
      const saved = localStorage.getItem('msmasud_portfolio_photo');
      if (saved) {
        setCustomPhoto(saved);
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const handleSavePhoto = (photoDataUrl: string | null) => {
    setCustomPhoto(photoDataUrl);
    try {
      if (photoDataUrl) {
        localStorage.setItem('msmasud_portfolio_photo', photoDataUrl);
      } else {
        localStorage.removeItem('msmasud_portfolio_photo');
      }
    } catch {
      // Ignore
    }
  };

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const sectionIds = ['home', 'projects', 'about', 'capabilities', 'tools', 'process', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white relative selection:bg-blue-600/30 selection:text-cyan-200">
      {/* Desktop Minimal Circular Cursor with VIEW Pill over Projects */}
      <CustomCursor />

      {/* Sticky Minimal Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Cinematic Flow */}
      <main className="relative">
        {/* Section 1: Cinematic 100vh Hero with Emerging Portrait & Giant Typography */}
        <Hero
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
          customPhoto={customPhoto}
        />

        {/* Section 2: Large Editorial Statement with Scroll-based Text Reveal */}
        <EditorialIntro />

        {/* Section 3: Selected Work with Scaled LumoClip Product Showcase */}
        <Projects />

        {/* Section 4: Capabilities (What I Build — Large Typography Vertical Reveal) */}
        <Capabilities
          onSelectCapability={(title) => setSelectedServiceForContact(title)}
        />

        {/* Section 5: Tools I Work With (Infinite Horizontal Marquee) */}
        <TechMarquee />

        {/* Section 6: About MS Masud (Building With Code, Thinking Like A Product Designer) */}
        <About customPhoto={customPhoto} />

        {/* Section 7: Process (Horizontal Cinematic 01-05 Timeline) */}
        <Process />

        {/* Section 8: Final CTA (Huge Typography + Cursor-following Glow) */}
        <CTA />

        {/* Section 9: Let's Build Something (Contact Form & Direct Details) */}
        <Contact selectedService={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Photo Uploader / Customizer Modal */}
      <PhotoUploaderModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={customPhoto}
        onSavePhoto={handleSavePhoto}
      />
    </div>
  );
}
