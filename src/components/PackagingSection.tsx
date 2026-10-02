import React, { useState } from 'react';
import { AccentBanner } from './AccentBanner';
import { Box, Sparkles, CheckCircle2, Sliders, Layers } from 'lucide-react';

export const PackagingSection: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState<'canister' | 'pouch' | 'dropper'>('canister');

  const materialSpecs = {
    canister: {
      name: 'Artisanal Canister System',
      finish: 'Matte Soft-Touch + Gold Foil Hot Stamp',
      substrate: 'Recycled Spiral-Wound Paperboard 2.4mm',
      closure: 'Friction-Fit Precision Cap with Airtight Rim',
      features: ['Food-grade protective liner', 'Zero plastic closure', 'UV barrier coating'],
      pantone: 'Pantone 102C & Jet Black 6C'
    },
    pouch: {
      name: 'Compostable Botanical Pouches',
      finish: 'Micro-Debossed Vector Pattern + Matte Finish',
      substrate: 'Cellulose & Cornstarch Biopolymer Film',
      closure: 'Biodegradable Resealable Zip Lock',
      features: ['100% home compostable in 180 days', 'High aroma barrier', 'Oxygen scavengers integrated'],
      pantone: 'Chlorophyll Green & Cyber Yellow'
    },
    dropper: {
      name: 'Amber Apothecary Glassware',
      finish: 'Volumetric UV Silk Screened White + Yellow Index',
      substrate: 'Type III Amber Borosilicate Glass',
      closure: 'Matte Black Rubber Bulb with Glass Pipette',
      features: ['99.8% Photodegradation protection', 'Child-resistant squeeze cap', '0.25ml graduation marks'],
      pantone: 'Amber Tint 471C + Pure White'
    }
  };

  const current = materialSpecs[activeMaterial];

  return (
    <section id="package-design" className="relative scroll-mt-20">
      <AccentBanner
        number="04"
        title="Package Design"
        subtitle="Tactile consumer packaging, luxury structural containers, and sustainable finishings engineered for unboxing delight."
        categoryTag="Physical Architecture & Structural Design"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: High-Fidelity Packaging Mockup Showcase */}
          <div className="lg:col-span-7 rounded-3xl bg-[#161B26]/80 border border-white/10 overflow-hidden shadow-2xl group">
            <div className="relative aspect-[4/3] w-full bg-[#0B0F19] overflow-hidden">
              <img
                src="/src/assets/images/packaging_luxury_craft_1790587339048.jpg"
                alt="Luxury artisanal package design showcase"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-70" />

              {/* Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B0F19]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    Tactile Luxury Finishing
                  </h4>
                  <p className="text-xs text-[#8E9AA8]">
                    Hot foil stamped typography on ultra-matte substrate
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#FFDD00] text-[#0B0F19] font-mono text-xs font-bold">
                  Physical Spec
                </span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Material Specification Board */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#FFDD00] tracking-wider">
                Substrate & Production Engineering
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Material & Finish Specifications
              </h3>
              <p className="text-sm text-[#8E9AA8]">
                Every packaging line is developed with tight supplier tolerances, Dieline dielines, and certified sustainable substrates.
              </p>
            </div>

            {/* Select Material Type */}
            <div className="flex items-center gap-2 p-1 bg-[#161B26] rounded-xl border border-white/10">
              <button
                onClick={() => setActiveMaterial('canister')}
                className={`flex-1 py-2 text-xs font-mono rounded-lg transition-colors ${
                  activeMaterial === 'canister'
                    ? 'bg-[#FFDD00] text-[#0B0F19] font-bold'
                    : 'text-[#8E9AA8] hover:text-white'
                }`}
              >
                Canister
              </button>
              <button
                onClick={() => setActiveMaterial('pouch')}
                className={`flex-1 py-2 text-xs font-mono rounded-lg transition-colors ${
                  activeMaterial === 'pouch'
                    ? 'bg-[#FFDD00] text-[#0B0F19] font-bold'
                    : 'text-[#8E9AA8] hover:text-white'
                }`}
              >
                Pouch
              </button>
              <button
                onClick={() => setActiveMaterial('dropper')}
                className={`flex-1 py-2 text-xs font-mono rounded-lg transition-colors ${
                  activeMaterial === 'dropper'
                    ? 'bg-[#FFDD00] text-[#0B0F19] font-bold'
                    : 'text-[#8E9AA8] hover:text-white'
                }`}
              >
                Dropper
              </button>
            </div>

            {/* Spec details card */}
            <div className="p-6 rounded-2xl bg-[#161B26]/80 border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h4 className="text-base font-bold text-white font-display">
                  {current.name}
                </h4>
                <span className="text-xs font-mono text-[#FFDD00]">
                  {current.pantone}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#8E9AA8] block mb-0.5">Finish:</span>
                  <span className="text-white font-medium">{current.finish}</span>
                </div>
                <div>
                  <span className="text-[#8E9AA8] block mb-0.5">Substrate:</span>
                  <span className="text-white font-medium">{current.substrate}</span>
                </div>
                <div>
                  <span className="text-[#8E9AA8] block mb-0.5">Closure Mechanism:</span>
                  <span className="text-white font-medium">{current.closure}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#8E9AA8]">
                  Quality Highlights:
                </span>
                <div className="space-y-1">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
