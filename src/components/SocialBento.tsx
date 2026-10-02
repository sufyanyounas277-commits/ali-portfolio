import React, { useState } from 'react';
import { AccentBanner } from './AccentBanner';
import { BENTO_WORKS, BentoItem } from '../data/portfolioData';
import { Share2, Heart, MessageCircle, ArrowRight, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface SocialBentoProps {
  onInspectBento: (item: BentoItem) => void;
}

export const SocialBento: React.FC<SocialBentoProps> = ({ onInspectBento }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselSlides = [
    {
      title: 'Phase 01: Typographic Tension',
      subtitle: 'Exploring asymmetric grids & dynamic kinetic balance',
      accent: '#FFDD00',
      tag: 'Slide 1 / 4'
    },
    {
      title: 'Phase 02: Chromatic Resonance',
      subtitle: 'Color theory under strict high-contrast dark mode parameters',
      accent: '#FFFFFF',
      tag: 'Slide 2 / 4'
    },
    {
      title: 'Phase 03: Negative Space Mastery',
      subtitle: 'Removing decorative noise to magnify core messaging retention',
      accent: '#FFDD00',
      tag: 'Slide 3 / 4'
    },
    {
      title: 'Phase 04: Tactical Call-To-Action',
      subtitle: 'Conversion velocity through intentional visual focal paths',
      accent: '#8E9AA8',
      tag: 'Slide 4 / 4'
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <section id="social-media" className="relative scroll-mt-20">
      <AccentBanner
        number="03"
        title="Social Media"
        subtitle="High-conversion digital campaigns, kinetic editorial carousels, and viral visual storytelling."
        categoryTag="Digital Publishing & Content Systems"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Bento Card 1: Interactive Multi-Slide Carousel (Col 1-7) */}
          <div className="md:col-span-7 rounded-3xl bg-[#161B26]/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            {/* Top metadata */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFDD00]" />
                <span className="text-xs font-mono text-white font-semibold">
                  Interactive 4:5 Carousel Preview
                </span>
              </div>
              <span className="text-xs font-mono text-[#8E9AA8]">
                {carouselSlides[activeSlide].tag}
              </span>
            </div>

            {/* Slide Stage */}
            <div className="my-8 min-h-[220px] rounded-2xl bg-[#0B0F19] p-6 sm:p-8 border border-white/5 flex flex-col justify-center space-y-4 relative overflow-hidden transition-all duration-300">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: carouselSlides[activeSlide].accent }}
              />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFDD00]">
                Design Directive
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {carouselSlides[activeSlide].title}
              </h3>
              <p className="text-sm text-[#8E9AA8] max-w-md">
                {carouselSlides[activeSlide].subtitle}
              </p>
            </div>

            {/* Bottom Controls & Metrics */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-xs font-mono text-[#8E9AA8]">
                <span>142K+ Saves</span>
                <span>·</span>
                <span>8.4% Save-to-View Ratio</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg bg-[#0B0F19] text-[#8E9AA8] hover:text-white border border-white/10 hover:border-[#FFDD00]/40 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg bg-[#0B0F19] text-[#8E9AA8] hover:text-white border border-white/10 hover:border-[#FFDD00]/40 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 9:16 Vertical Story / Motion Poster (Col 8-12) */}
          <div className="md:col-span-5 rounded-3xl bg-[#161B26]/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono text-white font-semibold">
                9:16 Vertical Campaign
              </span>
              <span className="text-xs font-mono text-[#FFDD00]">
                +240% Lift
              </span>
            </div>

            <div className="my-6 rounded-2xl bg-[#0B0F19] border border-white/5 p-6 flex flex-col items-center justify-center text-center space-y-3 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-[#FFDD00]/10 border border-[#FFDD00]/30 flex items-center justify-center text-[#FFDD00] font-mono font-bold text-sm">
                9:16
              </div>
              <h4 className="text-lg font-bold text-white font-display">
                Kinetic Typographic Sequences
              </h4>
              <p className="text-xs text-[#8E9AA8] max-w-xs">
                Micro-animated typography timed with bass transients for ultra-high retention loops on Instagram Reels & TikTok.
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161B26] border border-white/10 text-[11px] font-mono text-emerald-400">
                <span>84.2% Video Completion Rate</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#8E9AA8]">
              <span>Tools: After Effects · Figma</span>
              <span className="text-[#FFDD00] font-mono">1.8M Reach</span>
            </div>
          </div>

          {/* Bento Card 3: Campaign Performance Stats Strip (Col 1-12) */}
          <div className="md:col-span-12 rounded-2xl bg-[#0B0F19] border border-white/10 p-6 flex flex-wrap items-center justify-around gap-6">
            <div className="text-center sm:text-left space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#FFDD00]">
                4.2x
              </div>
              <div className="text-xs text-[#8E9AA8]">
                Average Organic Growth Velocity
              </div>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
            <div className="text-center sm:text-left space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
                580+
              </div>
              <div className="text-xs text-[#8E9AA8]">
                Custom Social Templates Designed
              </div>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
            <div className="text-center sm:text-left space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#FFDD00]">
                12M+
              </div>
              <div className="text-xs text-[#8E9AA8]">
                Total Impressions Across Client Accounts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
