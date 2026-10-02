import React, { useState } from 'react';
import { GRAPHIC_SERVICES, GraphicService } from '../data/portfolioData';
import { AccentBanner } from './AccentBanner';
import { CheckCircle2, ArrowUpRight, Eye, Wrench, Sparkles, Layers, X } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<GraphicService | null>(null);

  return (
    <section id="services" className="relative scroll-mt-20">
      <AccentBanner
        number="02"
        title="Services & Demo Works"
        subtitle="Comprehensive graphic design solutions delivered with commercial authority and production perfection."
        categoryTag="Graphic Design Capabilities"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Intro statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-[#FFDD00] uppercase tracking-wider block mb-1">
              End-To-End Creative Solutions
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Everything Your Brand Needs to Stand Out
            </h3>
          </div>
          <p className="text-xs text-[#8E9AA8] font-mono max-w-md">
            Click any service to view interactive demo designs, deliverables, and production specifications.
          </p>
        </div>

        {/* 6-Card Services Grid with High-Fidelity Demo Designs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GRAPHIC_SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className="group rounded-3xl bg-[#161B26]/80 hover:bg-[#161B26] border border-white/10 hover:border-[#FFDD00]/50 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Visual Demo Design Showcase Card */}
              <div className="relative aspect-[16/10] w-full bg-[#0B0F19] overflow-hidden">
                <img
                  src={srv.image}
                  alt={`${srv.title} Demo Work by Sufyan Ali`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161B26] via-transparent to-transparent opacity-80" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#0B0F19]/90 border border-white/10 text-[11px] font-mono text-[#FFDD00] font-semibold">
                    {srv.badge}
                  </span>
                </div>

                {/* Quick inspect button */}
                <button
                  onClick={() => setSelectedService(srv)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#0B0F19]/90 border border-white/20 hover:border-[#FFDD00] text-xs font-mono text-white flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-[#FFDD00]" />
                  <span>View Demo</span>
                </button>
              </div>

              {/* Service Details & Description */}
              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#8E9AA8]">
                    0{idx + 1} // Service
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#FFDD00] transition-colors font-display">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-[#8E9AA8] leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Deliverables snippet */}
                <div className="space-y-2 pt-3 border-t border-white/5">
                  <span className="text-[11px] font-mono uppercase text-[#FFDD00] tracking-wider block">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-white/90">
                    {srv.deliverables.slice(0, 3).map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD00] shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#8E9AA8]">
                    {srv.tools.join(' · ')}
                  </span>
                  <button
                    onClick={() => setSelectedService(srv)}
                    className="flex items-center gap-1 text-xs font-mono text-[#FFDD00] hover:underline"
                  >
                    <span>Full Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Service Demo Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#0B0F19] border border-[#FFDD00]/40 rounded-3xl overflow-hidden shadow-2xl my-8">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 z-20 p-2 rounded-full bg-[#161B26] text-white hover:text-[#FFDD00] border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-[#161B26] overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-xs font-mono uppercase text-[#FFDD00]">
                  Professional Graphic Design Service
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-white/90 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Demo Highlights */}
              <div className="p-5 rounded-2xl bg-[#161B26] border border-white/5 space-y-3">
                <span className="text-xs font-mono uppercase text-[#FFDD00]">
                  Demo Design Highlights & Standards:
                </span>
                <div className="space-y-2">
                  {selectedService.demoHighlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Deliverables List */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-white tracking-wider block">
                  Complete Scope of Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedService.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#161B26] text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD00]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#8E9AA8]">
                  Software: {selectedService.tools.join(' · ')}
                </span>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenContact();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FFDD00] text-[#0B0F19] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request This Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
