import React, { useState } from 'react';
import { LOGO_ITEMS, LogoItem } from '../data/portfolioData';
import { AccentBanner } from './AccentBanner';
import { Maximize2, X, Check, Copy, Grid3X3, Layers, Compass } from 'lucide-react';

interface LogoFolioProps {
  onSelectLogo: (logo: LogoItem) => void;
}

export const LogoFolio: React.FC<LogoFolioProps> = ({ onSelectLogo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inspectLogo, setInspectLogo] = useState<LogoItem | null>(null);
  const [showGridOverlay, setShowGridOverlay] = useState(true);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const categories = ['All', 'Tech', 'Wellness', 'Luxury', 'Minimal', 'Studio'];

  const filteredLogos = selectedCategory === 'All'
    ? LOGO_ITEMS
    : LOGO_ITEMS.filter((item) => item.category === selectedCategory);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  // Render SVG Logomark mathematically
  const renderLogomarkSvg = (type: string, isLight: boolean = false, isAccent: boolean = false) => {
    const strokeColor = isAccent ? '#FFDD00' : isLight ? '#0B0F19' : '#FFFFFF';
    const fillColor = isAccent ? '#FFDD00' : isLight ? '#0B0F19' : '#FFFFFF';

    switch (type) {
      case 'leaf-spiral':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 group-hover:scale-110">
            <path
              d="M50 15 C25 15 15 35 15 50 C15 72 35 85 55 85 C75 85 85 70 85 55 C85 40 75 30 65 30 C55 30 50 38 50 45 C50 52 55 58 60 58"
              fill="none"
              stroke={strokeColor}
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="60" cy="58" r="4" fill={strokeColor} />
          </svg>
        );
      case 'infinity-loop':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 group-hover:scale-110">
            <path
              d="M30 65 C18 65 12 56 12 50 C12 44 18 35 30 35 C42 35 58 65 70 65 C82 65 88 56 88 50 C88 44 82 35 70 35 C58 35 42 65 30 65 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="50" r="3" fill="#FFDD00" />
          </svg>
        );
      case 'prism-light':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 group-hover:scale-110">
            <polygon
              points="50,20 85,80 15,80"
              fill="none"
              stroke={strokeColor}
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <line x1="50" y1="20" x2="65" y2="80" stroke="#FFDD00" strokeWidth="3" />
            <line x1="65" y1="80" x2="95" y2="60" stroke="#FFDD00" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
        );
      case 'monolith-arch':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 group-hover:scale-110">
            <rect x="20" y="25" width="14" height="50" fill={fillColor} rx="2" />
            <rect x="43" y="25" width="14" height="50" fill={fillColor} rx="2" />
            <rect x="66" y="25" width="14" height="50" fill={fillColor} rx="2" />
            <rect x="20" y="25" width="60" height="12" fill={strokeColor} rx="2" />
          </svg>
        );
      case 'delta-quantum':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 group-hover:scale-110">
            <path
              d="M50 18 L86 82 L14 82 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path
              d="M50 38 L72 76 L28 76 Z"
              fill="none"
              stroke="#FFDD00"
              strokeWidth="3"
            />
          </svg>
        );
      case 'verve-interlock':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 group-hover:scale-110">
            <path
              d="M20 28 L40 76 L55 35 L70 76 L85 28"
              fill="none"
              stroke={strokeColor}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'chrono-radial':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 group-hover:scale-110">
            <circle cx="50" cy="50" r="32" fill="none" stroke={strokeColor} strokeWidth="4" />
            <circle cx="50" cy="50" r="14" fill="none" stroke="#FFDD00" strokeWidth="3" />
            <line x1="50" y1="12" x2="50" y2="24" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="50" y1="76" x2="50" y2="88" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="12" y1="50" x2="24" y2="50" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="76" y1="50" x2="88" y2="50" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
          </svg>
        );
      case 'solis-sun':
      default:
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 group-hover:scale-110">
            <circle cx="50" cy="50" r="22" fill="none" stroke={strokeColor} strokeWidth="5" />
            <path
              d="M50 18 L50 26 M50 74 L50 82 M18 50 L26 50 M74 50 L82 50 M27 27 L33 33 M67 67 L73 73 M27 73 L33 67 M67 33 L73 27"
              stroke="#FFDD00"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        );
    }
  };

  return (
    <section id="logo-folio" className="relative scroll-mt-20">
      <AccentBanner
        number="01"
        title="Logo Folio"
        subtitle="A curated collection of vector logomarks, monograms, and emblems built with strict geometric and Fibonacci precision."
        categoryTag="Visual Identity & Marks"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div className="flex items-center gap-1.5 p-1 bg-[#161B26] rounded-xl border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#FFDD00] text-[#0B0F19] font-bold shadow-md'
                    : 'text-[#8E9AA8] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#8E9AA8] font-mono">
            Showing {filteredLogos.length} Logomarks · Click to inspect grid geometry
          </div>
        </div>

        {/* 12-Column Responsive Masonry Grid for Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredLogos.map((logo) => (
            <div
              key={logo.id}
              onClick={() => setInspectLogo(logo)}
              className="group relative cursor-pointer rounded-2xl bg-[#161B26]/70 hover:bg-[#161B26] border border-white/10 hover:border-[#FFDD00]/50 p-6 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFDD00]/5"
            >
              {/* Year and category subtle header */}
              <div className="w-full flex items-center justify-between text-[11px] text-[#8E9AA8] font-mono">
                <span>{logo.year}</span>
                <span className="text-[#FFDD00]">{logo.category}</span>
              </div>

              {/* Logo SVG Icon Area with subtle grid lines */}
              <div className="relative my-8 flex items-center justify-center w-full aspect-square max-w-[140px] rounded-xl bg-[#0B0F19] border border-white/5 group-hover:border-[#FFDD00]/30 transition-colors overflow-hidden">
                {/* Micro-grid background */}
                <div
                  className="absolute inset-0 opacity-[0.07] pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}
                />
                {renderLogomarkSvg(logo.svgType)}
              </div>

              {/* Brand Name & Action */}
              <div className="w-full text-center space-y-1">
                <h3 className="text-base font-bold text-white group-hover:text-[#FFDD00] transition-colors font-display">
                  {logo.name}
                </h3>
                <p className="text-xs text-[#8E9AA8] truncate max-w-full">
                  {logo.tagline}
                </p>
              </div>

              {/* Hover inspect hint */}
              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono text-[#8E9AA8] group-hover:text-[#FFDD00] transition-colors">
                <Maximize2 className="w-3 h-3" />
                <span>Inspect Geometry</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Geometry & Brand Inspect Modal */}
      {inspectLogo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0B0F19] border border-[#FFDD00]/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setInspectLogo(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#161B26] text-[#8E9AA8] hover:text-white border border-white/10 hover:border-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1.5 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFDD00]">
                <span>{inspectLogo.category}</span>
                <span>·</span>
                <span>{inspectLogo.year} Mark</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white font-display">
                {inspectLogo.name}
              </h3>
              <p className="text-sm text-[#8E9AA8]">
                {inspectLogo.tagline}
              </p>
            </div>

            {/* Geometric Canvas Viewport */}
            <div className="relative w-full aspect-video rounded-xl bg-[#161B26] border border-white/10 flex items-center justify-center overflow-hidden mb-6">
              {/* Construction Grid Overlay */}
              {showGridOverlay && (
                <div className="absolute inset-0 pointer-events-none">
                  {/* Isometric / Radial lines */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #FFDD00 1px, transparent 1px), linear-gradient(to right, #FFDD00 1px, transparent 1px), linear-gradient(to bottom, #FFDD00 1px, transparent 1px)',
                      backgroundSize: '24px 24px'
                    }}
                  />
                  {/* Center Crosshair */}
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#FFDD00]/40" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#FFDD00]/40" />
                  {/* Fibonacci Circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-[#FFDD00]/50" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#FFDD00]/30" />
                </div>
              )}

              {/* The Mark */}
              <div className="relative z-10 scale-150">
                {renderLogomarkSvg(inspectLogo.svgType, false, true)}
              </div>

              {/* Toggle Grid Control */}
              <button
                onClick={() => setShowGridOverlay(!showGridOverlay)}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#0B0F19]/90 border border-white/15 text-xs font-mono text-white flex items-center gap-2 hover:bg-[#0B0F19] transition-colors"
              >
                <Grid3X3 className="w-3.5 h-3.5 text-[#FFDD00]" />
                <span>Grid Overlay: {showGridOverlay ? 'ON' : 'OFF'}</span>
              </button>
            </div>

            {/* Construction Specs & Rationale */}
            <div className="space-y-4 text-sm text-[#8E9AA8]">
              <div>
                <span className="text-xs uppercase font-mono text-white tracking-wider block mb-1">
                  Geometric Rationale:
                </span>
                <p className="leading-relaxed text-white/90">
                  {inspectLogo.description}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#161B26] border border-white/5 font-mono text-xs text-[#8E9AA8]">
                <span className="text-[#FFDD00]">Grid Math:</span> {inspectLogo.gridSpecs}
              </div>

              {/* Color Swatches */}
              <div>
                <span className="text-xs uppercase font-mono text-white tracking-wider block mb-2">
                  Color Formula:
                </span>
                <div className="flex flex-wrap gap-3">
                  {inspectLogo.colors.map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => copyToClipboard(c.hex)}
                      className="group flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#161B26] border border-white/10 hover:border-[#FFDD00]/40 transition-colors text-xs font-mono text-white"
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/20"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                      <span className="text-[#8E9AA8]">({c.hex})</span>
                      {copiedColor === c.hex ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 text-[#8E9AA8] opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
