import React, { useState } from 'react';
import { BRANDING_CASE_STUDIES, CaseStudy } from '../data/portfolioData';
import { AccentBanner } from './AccentBanner';
import { ArrowUpRight, Check, Copy, Layers, BookOpen, Palette, FileText } from 'lucide-react';

interface BrandingShowcaseProps {
  onOpenCaseStudy: (study: CaseStudy) => void;
}

export const BrandingShowcase: React.FC<BrandingShowcaseProps> = ({ onOpenCaseStudy }) => {
  const [activeTab, setActiveTab] = useState<{ [key: string]: 'overview' | 'palette' | 'typography' }>({
    'ourvita-wellness': 'overview',
    'nexa-intelligence': 'overview'
  });
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const setStudyTab = (studyId: string, tab: 'overview' | 'palette' | 'typography') => {
    setActiveTab((prev) => ({ ...prev, [studyId]: tab }));
  };

  return (
    <section id="branding" className="relative scroll-mt-20">
      <AccentBanner
        number="02"
        title="Branding"
        subtitle="End-to-end brand architectures, design systems, and identity standards built for market authority."
        categoryTag="Case Studies & Identity Architecture"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        {BRANDING_CASE_STUDIES.map((study, idx) => {
          const currentTab = activeTab[study.id] || 'overview';

          return (
            <article
              key={study.id}
              className="rounded-3xl bg-[#161B26]/80 border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#FFDD00]/30"
            >
              {/* Full-Width Visual Hero Card */}
              <div className="relative w-full aspect-[21/9] min-h-[320px] bg-[#0B0F19] overflow-hidden group">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />

                {/* Overlaid Title & Metadata */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#FFDD00]">
                      <span>Case Study 0{idx + 1}</span>
                      <span>·</span>
                      <span>{study.year}</span>
                      <span>·</span>
                      <span>{study.role}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
                      {study.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#8E9AA8]">
                      {study.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(study)}
                    className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFDD00] text-[#0B0F19] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    <span>Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Case Study Deep Dive Tabs & Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Tab Controls */}
                <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                  <button
                    onClick={() => setStudyTab(study.id, 'overview')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                      currentTab === 'overview'
                        ? 'bg-[#FFDD00] text-[#0B0F19] font-bold'
                        : 'text-[#8E9AA8] hover:text-white bg-[#0B0F19]'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Executive Overview</span>
                  </button>

                  <button
                    onClick={() => setStudyTab(study.id, 'palette')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                      currentTab === 'palette'
                        ? 'bg-[#FFDD00] text-[#0B0F19] font-bold'
                        : 'text-[#8E9AA8] hover:text-white bg-[#0B0F19]'
                    }`}
                  >
                    <Palette className="w-3.5 h-3.5" />
                    <span>Color Architecture</span>
                  </button>

                  <button
                    onClick={() => setStudyTab(study.id, 'typography')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                      currentTab === 'typography'
                        ? 'bg-[#FFDD00] text-[#0B0F19] font-bold'
                        : 'text-[#8E9AA8] hover:text-white bg-[#0B0F19]'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Typography & Glyphs</span>
                  </button>
                </div>

                {/* Tab 1: Overview */}
                {currentTab === 'overview' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-4">
                      <p className="text-base text-white/90 leading-relaxed">
                        {study.overview}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-xl bg-[#0B0F19] border border-white/5 space-y-1">
                          <h4 className="text-xs font-mono uppercase text-[#FFDD00]">
                            Market Challenge
                          </h4>
                          <p className="text-xs text-[#8E9AA8] leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#0B0F19] border border-white/5 space-y-1">
                          <h4 className="text-xs font-mono uppercase text-emerald-400">
                            Design Solution
                          </h4>
                          <p className="text-xs text-[#8E9AA8] leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 space-y-4">
                      <div className="p-4 rounded-xl bg-[#0B0F19] border border-white/5 space-y-3">
                        <h4 className="text-xs font-mono uppercase text-[#8E9AA8]">
                          Core Deliverables
                        </h4>
                        <ul className="space-y-1.5 text-xs text-white">
                          {study.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD00]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Color Palette */}
                {currentTab === 'palette' && (
                  <div className="space-y-4">
                    <p className="text-xs text-[#8E9AA8] font-mono">
                      Click any swatch to copy hexadecimal value directly to clipboard:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {study.colors.map((c) => (
                        <div
                          key={c.hex}
                          onClick={() => copyHex(c.hex)}
                          className="group cursor-pointer p-4 rounded-xl bg-[#0B0F19] border border-white/5 hover:border-[#FFDD00]/40 transition-colors space-y-3"
                        >
                          <div
                            className="w-full h-16 rounded-lg border border-white/10 shadow-inner flex items-end justify-end p-2"
                            style={{ backgroundColor: c.hex }}
                          >
                            <span className="text-[10px] font-mono bg-black/60 px-1.5 py-0.5 rounded text-white">
                              {c.hex}
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-bold text-white">
                                {c.name}
                              </h4>
                              {copiedHex === c.hex ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5 text-[#8E9AA8] opacity-0 group-hover:opacity-100 transition-opacity" />
                              )}
                            </div>
                            <p className="text-xs text-[#8E9AA8] mt-0.5">
                              {c.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 3: Typography */}
                {currentTab === 'typography' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-[#0B0F19] border border-white/5">
                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase text-[#FFDD00]">
                        Primary Display Face: {study.typography.primary}
                      </span>
                      <p className="text-2xl font-bold font-display text-white">
                        Aa Bb Cc 123
                      </p>
                      <p className="text-sm text-[#8E9AA8]">
                        Expressive geometric architecture engineered for headline authority and instant brand recall.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase text-[#8E9AA8]">
                        Secondary Body: {study.typography.secondary}
                      </span>
                      <p className="text-lg font-medium text-white/90">
                        "{study.typography.sample}"
                      </p>
                      <p className="text-xs text-[#8E9AA8]">
                        Optimized for legibility across packaging substrates and responsive digital viewports.
                      </p>
                    </div>
                  </div>
                )}

                {/* Quantitative Impact Ribbon */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="space-y-0.5">
                      <div className="text-2xl font-extrabold text-[#FFDD00] font-mono tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-xs text-[#8E9AA8]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
