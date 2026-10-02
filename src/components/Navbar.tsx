import React, { useState, useEffect } from 'react';
import { Moon, Sun, ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'services', 'logo-folio', 'branding', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'About Me', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Logo Folio', href: '#logo-folio', id: 'logo-folio' },
    { label: 'Branding', href: '#branding', id: 'branding' },
    { label: 'Contact Me', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F19]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/40 py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white font-display"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFDD00] shadow-[0_0_10px_#FFDD00] transition-transform duration-300 group-hover:scale-125" />
          <span className="text-white group-hover:text-[#FFDD00] transition-colors">
            {DESIGNER_INFO.name}
          </span>
          <span className="text-xs text-[#8E9AA8] font-normal hidden sm:inline ml-1 font-mono">
            Graphic Designer
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 text-sm transition-colors ${
                  isActive ? 'text-[#FFDD00] font-semibold' : 'text-[#8E9AA8] hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#FFDD00] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle visual theme"
            className="p-2 text-[#8E9AA8] hover:text-white rounded-lg transition-colors border border-white/5 hover:border-white/15"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#FFDD00]" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenContact}
            className="group flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B0F19] bg-[#FFDD00] rounded-lg shadow-[0_0_20px_rgba(255,221,0,0.25)] hover:shadow-[0_0_25px_rgba(255,221,0,0.5)] hover:bg-[#FFE633] transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
