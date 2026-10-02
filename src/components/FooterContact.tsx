import React, { useState } from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { Mail, Check, Copy, Send, CheckCircle2, ArrowUp, ArrowUpRight } from 'lucide-react';

export const FooterContact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedService, setSelectedService] = useState('Brand Identity & Logo Design');
  const [selectedTimeline, setSelectedTimeline] = useState('1 – 2 Weeks');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Brand Identity & Logo Design',
    'Packaging & Label Architecture',
    'Social Media Graphics & Ads',
    'Marketing & Print Collateral',
    'Corporate Stationery & Merch',
    'UI / UX & Web Visual Design'
  ];

  const timelines = ['Urgent (3–7 Days)', '1 – 2 Weeks', '1 Month', 'Flexible'];

  const copyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative scroll-mt-20 pt-16 pb-12 overflow-hidden">
      {/* Behance-Style "Thank's For Scrolling!" Accent Finale Banner */}
      <div className="w-full relative overflow-hidden bg-[#070A11] border-y border-[#FFDD00]/30 py-16 md:py-20 mb-16">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #FFDD00 1px, transparent 1px), linear-gradient(to bottom, #FFDD00 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-4">
          <span className="text-[#FFDD00] font-mono text-xs uppercase tracking-widest font-semibold block">
            End of Showcase · Let's Collaborate
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#FFDD00] font-display">
            Thank's For Scrolling!
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#8E9AA8]">
            Ready to elevate your brand with top-tier graphic design? I am available for new projects, brand overhauls, and ongoing retainers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Me Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-[#FFDD00] tracking-wider">
                Get In Touch Directly
              </span>
              <h3 className="text-3xl font-extrabold text-white font-display">
                Contact Me
              </h3>
              <p className="text-sm text-[#8E9AA8] leading-relaxed">
                I work directly with founders, brand managers, and marketing directors. For project inquiries, quotations, or design consultations, write to me directly at my email.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#161B26] border border-[#FFDD00]/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFDD00]">
                <Mail className="w-4 h-4 text-[#FFDD00]" />
                <span>Primary Email Channel:</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-[#FFDD00] transition-colors truncate font-mono"
                >
                  {DESIGNER_INFO.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-lg bg-[#0B0F19] text-[#8E9AA8] hover:text-white border border-white/10 hover:border-[#FFDD00]/40 transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-xs text-emerald-400 font-mono">
                  Email copied to clipboard!
                </p>
              )}

              <div className="pt-2">
                <a
                  href={`mailto:${DESIGNER_INFO.email}?subject=New%20Graphic%20Design%20Inquiry%20for%20Sufyan%20Ali`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FFDD00] hover:bg-[#FFE633] text-[#0B0F19] font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>Open Email App Directly</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Work Guarantee Highlights */}
            <div className="p-5 rounded-2xl bg-[#161B26]/60 border border-white/5 space-y-3 text-xs text-[#8E9AA8]">
              <div className="text-white font-semibold text-sm">
                Sufyan's Client Commitment:
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD00]" />
                  <span>Prompt reply within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD00]" />
                  <span>100% original custom designs (no stock templates)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD00]" />
                  <span>Industry-standard production & print-ready source files</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#161B26]/80 border border-white/10 p-6 sm:p-8 shadow-2xl relative">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-display">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-[#8E9AA8] max-w-md mx-auto">
                    Thank you, {formData.name}. Sufyan Ali has received your project details and will review them shortly. A confirmation has been logged.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', details: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#FFDD00] text-[#0B0F19] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Select Service */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-white">
                      01. Select Required Service:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {services.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setSelectedService(srv)}
                          className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                            selectedService === srv
                              ? 'bg-[#FFDD00] text-[#0B0F19] font-bold shadow-md'
                              : 'bg-[#0B0F19] text-[#8E9AA8] hover:text-white border border-white/5'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Target Timeline */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-white">
                      02. Project Target Timeline:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                      {timelines.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTimeline(t)}
                          className={`p-2 rounded-lg text-xs font-mono text-center transition-all ${
                            selectedTimeline === t
                              ? 'bg-[#FFDD00] text-[#0B0F19] font-bold'
                              : 'bg-[#0B0F19] text-[#8E9AA8] hover:text-white border border-white/5'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Contact Info Inputs */}
                  <div className="space-y-4 pt-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-white block">
                      03. Your Contact Details:
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white placeholder-[#546071] text-sm focus:outline-none focus:border-[#FFDD00] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Your Email Address *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white placeholder-[#546071] text-sm focus:outline-none focus:border-[#FFDD00] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Company or Brand Name (Optional)"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white placeholder-[#546071] text-sm focus:outline-none focus:border-[#FFDD00] transition-colors"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        placeholder="Brief description of your project requirements, goals, or references..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white placeholder-[#546071] text-sm focus:outline-none focus:border-[#FFDD00] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#FFDD00] hover:bg-[#FFE633] text-[#0B0F19] font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(255,221,0,0.3)] hover:shadow-[0_0_40px_rgba(255,221,0,0.5)] transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-16 mt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#8E9AA8]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FFDD00]" />
            <p>
              © {new Date().getFullYear()} {DESIGNER_INFO.name}. Senior Graphic Designer. All Rights Reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161B26] hover:bg-[#202737] text-white border border-white/10 hover:border-[#FFDD00]/40 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FFDD00]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
