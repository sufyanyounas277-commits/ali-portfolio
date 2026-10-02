import React from 'react';
import { CaseStudy } from '../data/portfolioData';
import { X, ArrowUpRight, CheckCircle2, Calendar, User, Briefcase, Award } from 'lucide-react';

interface ProjectModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ caseStudy, onClose, onOpenContact }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0B0F19] border border-[#FFDD00]/30 rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#0B0F19]/80 backdrop-blur-md text-white hover:text-[#FFDD00] border border-white/10 hover:border-white/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative w-full aspect-[21/9] min-h-[300px] bg-[#161B26] overflow-hidden">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 space-y-1">
            <span className="text-xs font-mono uppercase text-[#FFDD00]">
              Detailed Case Study & Architectural Review
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              {caseStudy.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#161B26] border border-white/5 text-xs">
            <div>
              <span className="text-[#8E9AA8] block mb-1">Client:</span>
              <span className="text-white font-semibold">{caseStudy.client}</span>
            </div>
            <div>
              <span className="text-[#8E9AA8] block mb-1">Timeline:</span>
              <span className="text-white font-semibold">{caseStudy.year}</span>
            </div>
            <div>
              <span className="text-[#8E9AA8] block mb-1">Role:</span>
              <span className="text-white font-semibold">{caseStudy.role}</span>
            </div>
            <div>
              <span className="text-[#8E9AA8] block mb-1">Status:</span>
              <span className="text-emerald-400 font-semibold">Production Deployed</span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white font-display">
              Project Brief & Strategic Objectives
            </h3>
            <p className="text-base text-[#8E9AA8] leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#161B26] border border-white/5 space-y-2">
              <h4 className="text-sm font-bold font-mono text-[#FFDD00] uppercase">
                The Core Challenge
              </h4>
              <p className="text-sm text-[#8E9AA8] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#161B26] border border-white/5 space-y-2">
              <h4 className="text-sm font-bold font-mono text-emerald-400 uppercase">
                The Creative Solution
              </h4>
              <p className="text-sm text-[#8E9AA8] leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white font-display">
              Scope of Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {caseStudy.deliverables.map((d, idx) => (
                <div key={idx} className="flex items-center gap-2 text-white/90 p-2 rounded-lg bg-[#161B26]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFDD00] shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#8E9AA8]">
              Looking for a similar identity or packaging architecture?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFDD00] text-[#0B0F19] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              <span>Discuss This Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
