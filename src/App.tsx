import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { LogoFolio } from './components/LogoFolio';
import { BrandingShowcase } from './components/BrandingShowcase';
import { SocialBento } from './components/SocialBento';
import { PackagingSection } from './components/PackagingSection';
import { PrintMediaSection } from './components/PrintMediaSection';
import { UIUXVault } from './components/UIUXVault';
import { FooterContact } from './components/FooterContact';
import { ProjectModal } from './components/ProjectModal';
import { HireNotification } from './components/HireNotification';
import { CaseStudy, LogoItem, BentoItem } from './data/portfolioData';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] selection:bg-[#FFDD00] selection:text-[#0B0F19] noise-overlay relative">
      {/* Top Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenContact={handleOpenContact}
      />

      <main className="w-full">
        {/* Hero Section: Sufyan Ali Intro & Portrait */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Dedicated About Me Section (6+ Yrs Exp, Top Pakistani Art & Design Colleges, Philosophy) */}
        <AboutSection onOpenContact={handleOpenContact} />

        {/* Graphic Design Services with Demo Designs */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* Logo Folio with Geometric Grid Inspector */}
        <LogoFolio
          onSelectLogo={(logo: LogoItem) => {
            // Handled internally in LogoFolio
          }}
        />

        {/* Branding Case Studies */}
        <BrandingShowcase
          onOpenCaseStudy={(study: CaseStudy) => {
            setActiveModalStudy(study);
          }}
        />

        {/* Social Media Bento Grid */}
        <SocialBento
          onInspectBento={(item: BentoItem) => {
            // Handled internally
          }}
        />

        {/* Tactile Package Design Showcase */}
        <PackagingSection />

        {/* Print Media & Urban Billboard Showcase */}
        <PrintMediaSection />

        {/* UI/UX Digital Product Vault */}
        <UIUXVault />
      </main>

      {/* "Contact Me" Section & Project Inquiry Builder */}
      <FooterContact />

      {/* Client Hire Notification Toast at Bottom */}
      <HireNotification onOpenContact={handleOpenContact} />

      {/* Fullscreen Case Study Modal Inspector */}
      <ProjectModal
        caseStudy={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}
