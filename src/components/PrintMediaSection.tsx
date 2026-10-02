import React, { useState } from 'react';
import { AccentBanner } from './AccentBanner';
import { Compass, Eye, Check, ExternalLink, Printer } from 'lucide-react';

export const PrintMediaSection: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<'billboard' | 'brochure' | 'standee'>('billboard');

  const formats = [
    {
      id: 'billboard',
      title: 'Large-Format Billboard',
      scale: '14,000mm x 6,000mm',
      medium: 'Superwide Format 500gsm Vinyl & Digital LED',
      spec: '150 DPI at 100% scale · CMYK Fogra39 · High Optical Contrast',
      description: 'Engineered for high-speed vehicular arterial viewing with 4-second reading comprehension and prominent brand wordmark anchor.'
    },
    {
      id: 'brochure',
      title: 'Editorial Brand Lookbook',
      scale: '210mm x 297mm (A4 Vertical)',
      medium: '300gsm Fedrigoni Sirio Pearl Cover + 150gsm Munken Polar Text',
      spec: '300 DPI · 3mm Full Bleed · Spot UV Gloss + Blind Emboss',
      description: 'Saddle-stitched publication with rich photographic plates, typography specimens, and tactile cotton-feel uncoated paper.'
    },
    {
      id: 'standee',
      title: 'Exhibition Roll-Up Standee',
      scale: '850mm x 2000mm',
      medium: 'Anti-Curl 220 Micron Polyester Film with Silver Anodized Base',
      spec: '300 DPI · High Opacity Lightblock Core · Scratch-Resistant Finish',
      description: 'Striking vertical monolith designed for international trade exhibitions, keynotes, and retail launch pop-ups.'
    }
  ];

  const current = formats.find((f) => f.id === selectedFormat)!;

  return (
    <section id="print-media" className="relative scroll-mt-20">
      <AccentBanner
        number="05"
        title="Print Media"
        subtitle="Tangible editorial publications, large-format outdoor billboards, and precision exhibition standees."
        categoryTag="Tangible Print & Out-Of-Home (OOH)"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Main Outdoor Billboard Showcase Feature */}
        <div className="rounded-3xl bg-[#161B26]/80 border border-white/10 overflow-hidden shadow-2xl">
          <div className="relative aspect-[21/9] min-h-[300px] w-full bg-[#0B0F19] overflow-hidden group">
            <img
              src="/src/assets/images/billboard_campaign_urban_1790587355390.jpg"
              alt="Urban billboard mockup in metropolitan architecture"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#FFDD00] uppercase tracking-wider">
                  Urban Outdoor Campaign
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Metropolitan Glass Facade Billboard
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B0F19]/90 border border-white/10 text-xs font-mono text-white">
                <Printer className="w-3.5 h-3.5 text-[#FFDD00]" />
                <span>Print-Ready CMYK Master</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Print Grid for Brochure / Billboard / Standee */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formats.map((fmt) => {
            const isSelected = selectedFormat === fmt.id;
            return (
              <div
                key={fmt.id}
                onClick={() => setSelectedFormat(fmt.id as any)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'bg-[#161B26] border-[#FFDD00] shadow-xl shadow-[#FFDD00]/5 -translate-y-1'
                    : 'bg-[#161B26]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={isSelected ? 'text-[#FFDD00]' : 'text-[#8E9AA8]'}>
                      Format Spec
                    </span>
                    <span className="text-white/80">{fmt.scale}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">
                    {fmt.title}
                  </h4>
                  <p className="text-xs text-[#8E9AA8] leading-relaxed">
                    {fmt.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-1 text-[11px] font-mono">
                  <div className="text-[#8E9AA8]">
                    <span className="text-white/90">Medium:</span> {fmt.medium}
                  </div>
                  <div className="text-[#FFDD00]">
                    {fmt.spec}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
