import React, { useState, useEffect } from 'react';
import { Mail, Sparkles, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface HireNotificationProps {
  onOpenContact: () => void;
}

export const HireNotification: React.FC<HireNotificationProps> = ({ onOpenContact }) => {
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    // Show notification shortly after client arrives on page
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  if (minimized) {
    return (
      <div className="fixed bottom-5 right-5 z-40 animate-fade-in">
        <button
          onClick={() => setMinimized(false)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#161B26] hover:bg-[#1E2535] border border-[#FFDD00]/40 text-white shadow-2xl text-xs font-mono transition-all hover:scale-105"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFDD00] animate-ping" />
          <span>Hire Sufyan Ali</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#FFDD00]" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-slide-up">
      <div className="relative rounded-2xl bg-[#0B0F19]/95 backdrop-blur-xl border border-[#FFDD00]/50 p-4 sm:p-5 shadow-2xl shadow-black/80 space-y-3">
        {/* Dismiss Button */}
        <button
          onClick={() => setMinimized(true)}
          className="absolute top-3 right-3 p-1 rounded-lg text-[#8E9AA8] hover:text-white transition-colors"
          aria-label="Minimize notification"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex items-start gap-3.5 pr-6">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#161B26] border border-[#FFDD00]/40 shrink-0">
            <img
              src={DESIGNER_INFO.portraitImage}
              alt="Sufyan Ali"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-[#FFDD00] font-semibold uppercase tracking-wider">
                Available For Work
              </span>
            </div>
            <h5 className="text-sm font-bold text-white font-display">
              Do you want to hire Sufyan Ali?
            </h5>
            <p className="text-xs text-[#8E9AA8] leading-relaxed">
              Senior Graphic Designer with 6+ years experience. Ready to craft your brand identity, packaging, or marketing collateral.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={() => {
              onOpenContact();
              setMinimized(true);
            }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#FFDD00] hover:bg-[#FFE633] text-[#0B0F19] text-xs font-bold font-mono uppercase tracking-wider transition-colors"
          >
            <span>Hire Me Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={`mailto:${DESIGNER_INFO.email}?subject=Project%20Inquiry%20for%20Sufyan%20Ali`}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#161B26] hover:bg-[#202737] border border-white/10 text-white text-xs font-mono transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#FFDD00]" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};
