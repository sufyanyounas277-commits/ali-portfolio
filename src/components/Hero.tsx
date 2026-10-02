import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, GraduationCap } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const tableOfContents = [
    { label: '01. About Me', href: '#about' },
    { label: '02. Services & Demos', href: '#services' },
    { label: '03. Logo Folio', href: '#logo-folio' },
    { label: '04. Branding Studies', href: '#branding' },
    { label: '05. Packaging', href: '#package-design' },
    { label: '06. Contact Me', href: '#contact' },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFDD00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#161B26]/80 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Striking Typography */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161B26] border border-[#FFDD00]/25 text-xs font-mono text-[#8E9AA8]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Select Design Projects & Long-Term Retainers</span>
            </div>

            {/* Massive Display Title */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-mono text-[#FFDD00] tracking-tight">
                Hello! I am {DESIGNER_INFO.name}
              </h2>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
                Senior Graphic Designer With <span className="text-[#FFDD00]">6+ Years</span> Of Visual Excellence.
              </h1>
            </div>

            {/* Bio Prose */}
            <p className="text-lg text-[#8E9AA8] max-w-2xl leading-relaxed font-normal">
              {DESIGNER_INFO.about.headline}. Specializing in Brand Identity, Luxury Packaging, High-CTR Social Graphics, and Large-Format Print Collateral for ambitious global businesses.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="group flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0B0F19] bg-[#FFDD00] rounded-xl shadow-[0_0_30px_rgba(255,221,0,0.3)] hover:shadow-[0_0_40px_rgba(255,221,0,0.55)] hover:bg-[#FFE633] transition-all duration-300 active:scale-95"
              >
                <span>Hire Me / Contact</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-white bg-[#161B26] hover:bg-[#1C2331] border border-white/10 hover:border-[#FFDD00]/40 rounded-xl transition-all duration-300"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-[#FFDD00]" />
                    <span className="font-mono text-xs">{DESIGNER_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Jump Bar */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-[#8E9AA8] font-mono mb-3">
                Contents Index · Quick Jump
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {tableOfContents.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-xs font-mono text-white/90 hover:text-[#FFDD00] px-3 py-1.5 rounded-lg bg-[#161B26]/80 hover:bg-[#161B26] border border-white/5 hover:border-[#FFDD00]/40 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 28-Year-Old Designer Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-square group">
              {/* Outer Glow & Geometric Boundary */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#FFDD00]/25 via-transparent to-[#FFDD00]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#161B26] border border-[#FFDD00]/30 p-2 shadow-2xl">
                {/* Photo container */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0B0F19]">
                  <img
                    src={DESIGNER_INFO.portraitImage}
                    alt="Sufyan Ali - Senior Graphic Designer"
                    className="w-full h-full object-cover object-top contrast-105 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />

                  {/* Floating Identity Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B0F19]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white font-display">
                        {DESIGNER_INFO.name}
                      </h3>
                      <p className="text-xs text-[#8E9AA8]">
                        Senior Graphic Designer (28 yrs)
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-[#FFDD00] text-[#0B0F19] font-mono text-xs font-bold">
                      6+ Yrs Exp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Strip (No Prices, Pure Trust Metrics) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-white/10">
          {DESIGNER_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FFDD00] font-mono tracking-tight tabular-nums">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-[#8E9AA8] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
