import React from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { AccentBanner } from './AccentBanner';
import { GraduationCap, Award, CheckCircle2, Sparkles, Compass, Shield, ArrowUpRight, Wrench } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="relative scroll-mt-20">
      <AccentBanner
        number="01"
        title="About Me"
        subtitle="6+ Years of Proven Graphic Design Excellence, Academic Prestige & Strategic Craftsmanship."
        categoryTag="Biography & Credentials"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Main Split Bio & Credentials Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#FFDD00] tracking-wider">
                Senior Graphic Designer · Lahore, Pakistan
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight">
                Hello, I'm <span className="text-[#FFDD00]">Sufyan Ali</span>. 28 Years Old With Over 6 Years of Visual Design Mastery.
              </h3>
            </div>

            <p className="text-base text-white/90 leading-relaxed font-normal">
              {DESIGNER_INFO.about.intro}
            </p>

            <div className="p-6 rounded-2xl bg-[#161B26] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#FFDD00]">
                <Shield className="w-4 h-4 text-[#FFDD00]" />
                <span>Design Philosophy & Commercial Impact</span>
              </div>
              <p className="text-sm text-[#8E9AA8] leading-relaxed">
                {DESIGNER_INFO.about.philosophy}
              </p>
            </div>

            {/* Core Track Record Highlights */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase text-white tracking-wider block mb-3">
                Why Top Brands Partner With Me:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DESIGNER_INFO.about.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#161B26]/60 border border-white/5 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#FFDD00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Mastery */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8E9AA8]">
                <Wrench className="w-3.5 h-3.5 text-[#FFDD00]" />
                <span>Industry-Standard Software Stack:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {DESIGNER_INFO.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-[#161B26] border border-white/10 text-xs font-mono text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Prestigious Pakistani Academic Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#161B26]/80 border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-[#FFDD00]" />
                  <h4 className="text-lg font-bold text-white font-display">
                    Academic Pedigree
                  </h4>
                </div>
                <span className="text-xs font-mono text-[#FFDD00]">
                  Distinction
                </span>
              </div>

              <div className="space-y-6">
                {DESIGNER_INFO.about.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1.5 pb-5 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-xs font-mono text-[#FFDD00] block">
                      {edu.degree}
                    </span>
                    <h5 className="text-sm font-bold text-white font-display">
                      {edu.institution}
                    </h5>
                    <p className="text-xs text-[#8E9AA8] leading-relaxed">
                      {edu.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#0B0F19] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-white">
                  <span>Direct Communication</span>
                  <span className="text-emerald-400">100% Reliable</span>
                </div>
                <p className="text-xs text-[#8E9AA8]">
                  Available directly via email with rapid project scoping and dedicated communication throughout every revision milestone.
                </p>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#FFDD00] hover:bg-[#FFE633] text-[#0B0F19] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#FFDD00]/20"
              >
                <span>Hire Sufyan For Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
