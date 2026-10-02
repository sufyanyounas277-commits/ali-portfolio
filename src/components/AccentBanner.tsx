import React from 'react';

interface AccentBannerProps {
  number: string;
  title: string;
  subtitle: string;
  categoryTag?: string;
}

export const AccentBanner: React.FC<AccentBannerProps> = ({
  number,
  title,
  subtitle,
  categoryTag
}) => {
  return (
    <div className="w-full relative overflow-hidden bg-[#070A11] border-y border-[#FFDD00]/25 py-12 md:py-16 my-16 md:my-24">
      {/* Subtle geometric grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #FFDD00 1px, transparent 1px), linear-gradient(to bottom, #FFDD00 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-[#FFDD00] font-mono text-sm tracking-wider font-semibold">
              [{number}]
            </span>
            {categoryTag && (
              <span className="text-xs uppercase tracking-widest text-[#8E9AA8] font-medium">
                {categoryTag}
              </span>
            )}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFDD00] font-display">
            {title}
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#8E9AA8] font-normal leading-relaxed md:text-right">
          {subtitle}
        </p>
      </div>

      {/* Decorative accent pulse line on bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFDD00]/60 to-transparent" />
    </div>
  );
};
