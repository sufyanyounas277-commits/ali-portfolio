import React, { useState } from 'react';
import { AccentBanner } from './AccentBanner';
import { UI_PROJECTS, UIProject } from '../data/portfolioData';
import { Smartphone, Monitor, Activity, ShieldCheck, Zap, Layers, Sparkles, Check } from 'lucide-react';

export const UIUXVault: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeScreenTab, setActiveScreenTab] = useState<'overview' | 'analytics' | 'orders'>('overview');

  // Interactive dummy state for the live UI prototype preview
  const [liveMetric, setLiveMetric] = useState({
    price: '$84,290.40',
    change: '+5.42%',
    throughput: '128,490 ops/s'
  });

  return (
    <section id="ui-ux" className="relative scroll-mt-20">
      <AccentBanner
        number="06"
        title="UI UX"
        subtitle="Design systems, human-centered app interfaces, and fluid desktop software built for cognitive ergonomics."
        categoryTag="Digital Product & Interaction Design"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Device Ecosystem Feature Banner */}
        <div className="rounded-3xl bg-[#161B26]/80 border border-white/10 overflow-hidden shadow-2xl">
          <div className="relative aspect-[21/9] min-h-[320px] w-full bg-[#0B0F19] overflow-hidden group">
            <img
              src="/src/assets/images/uiux_device_ecosystem_1790587370875.jpg"
              alt="UI UX interactive ecosystem showcase"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#FFDD00] uppercase tracking-wider">
                  Cross-Platform System Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Responsive Ecosystem · Desktop & Mobile
                </h3>
              </div>

              {/* Device Selector Controls */}
              <div className="flex items-center gap-2 p-1 bg-[#0B0F19]/90 backdrop-blur-md rounded-xl border border-white/15">
                <button
                  onClick={() => setDeviceMode('desktop')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    deviceMode === 'desktop'
                      ? 'bg-[#FFDD00] text-[#0B0F19] font-bold'
                      : 'text-[#8E9AA8] hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop SaaS</span>
                </button>

                <button
                  onClick={() => setDeviceMode('mobile')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    deviceMode === 'mobile'
                      ? 'bg-[#FFDD00] text-[#0B0F19] font-bold'
                      : 'text-[#8E9AA8] hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile iOS</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Prototype Showcase Area */}
        <div className="rounded-3xl bg-[#161B26]/80 border border-white/10 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFDD00]">
                <span>Interactive Design System Sandbox</span>
                <span>·</span>
                <span className="text-emerald-400">Live Component State</span>
              </div>
              <h4 className="text-xl font-bold text-white font-display">
                {deviceMode === 'desktop' ? 'Kinetix OS Execution Workstation' : 'Aura Health iOS Companion'}
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#8E9AA8]">
                {deviceMode === 'desktop' ? '320+ Figma Tokens' : 'Human Interface Guidelines (HIG)'}
              </span>
            </div>
          </div>

          {/* Render Prototype Interface based on device mode */}
          {deviceMode === 'desktop' ? (
            <div className="rounded-2xl bg-[#0B0F19] border border-white/10 overflow-hidden shadow-inner">
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-[#121722] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-[#8E9AA8] ml-2">
                    kinetix-desktop-v2.8 // terminal
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveScreenTab('overview')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeScreenTab === 'overview' ? 'bg-[#FFDD00] text-[#0B0F19] font-bold' : 'text-[#8E9AA8] hover:text-white'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveScreenTab('analytics')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeScreenTab === 'analytics' ? 'bg-[#FFDD00] text-[#0B0F19] font-bold' : 'text-[#8E9AA8] hover:text-white'
                    }`}
                  >
                    Depth
                  </button>
                  <button
                    onClick={() => setActiveScreenTab('orders')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeScreenTab === 'orders' ? 'bg-[#FFDD00] text-[#0B0F19] font-bold' : 'text-[#8E9AA8] hover:text-white'
                    }`}
                  >
                    Trades
                  </button>
                </div>
              </div>

              {/* Simulated UI Content */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#161B26] border border-white/5 space-y-1">
                    <span className="text-[11px] font-mono text-[#8E9AA8]">INDEX PRICE</span>
                    <div className="text-2xl font-bold font-mono text-[#FFDD00]">{liveMetric.price}</div>
                    <span className="text-xs text-emerald-400 font-mono">{liveMetric.change} 24h</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#161B26] border border-white/5 space-y-1">
                    <span className="text-[11px] font-mono text-[#8E9AA8]">ENGINE THROUGHPUT</span>
                    <div className="text-2xl font-bold font-mono text-white">{liveMetric.throughput}</div>
                    <span className="text-xs text-[#8E9AA8] font-mono">Zero queue latency</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#161B26] border border-white/5 space-y-1">
                    <span className="text-[11px] font-mono text-[#8E9AA8]">SYSTEM HEALTH</span>
                    <div className="text-2xl font-bold font-mono text-emerald-400">99.999%</div>
                    <span className="text-xs text-[#8E9AA8] font-mono">34 clusters active</span>
                  </div>
                </div>

                {/* Simulated Chart Bars */}
                <div className="p-4 rounded-xl bg-[#161B26] border border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#8E9AA8]">
                    <span>Continuous Execution Volume</span>
                    <span className="text-[#FFDD00]">Tick Interval: 250ms</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-24 pt-4">
                    {[40, 65, 45, 80, 95, 70, 85, 90, 60, 75, 100, 85, 92, 78, 88, 96, 64, 82, 90, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#FFDD00]/30 to-[#FFDD00] rounded-t-sm hover:opacity-100 transition-all duration-300"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center py-4">
              {/* Mobile Phone Mockup Frame */}
              <div className="w-full max-w-[340px] rounded-[40px] bg-[#0B0F19] border-4 border-[#252D3D] p-3 shadow-2xl relative">
                {/* Dynamic Island */}
                <div className="w-24 h-4 bg-black rounded-full mx-auto mb-4" />

                <div className="p-4 space-y-4 text-center">
                  <span className="text-xs font-mono text-[#FFDD00]">CIRCADIAN READINESS</span>
                  <div className="w-32 h-32 rounded-full border-4 border-[#FFDD00] mx-auto flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold font-mono text-white">94</span>
                    <span className="text-[10px] text-[#8E9AA8]">OPTIMAL</span>
                  </div>
                  <p className="text-xs text-[#8E9AA8]">
                    Deep sleep recovery exceeds 2h 45m. Cognitive peak active from 09:00 to 14:00.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-left pt-2">
                    <div className="p-2.5 rounded-lg bg-[#161B26] text-xs">
                      <span className="text-[#8E9AA8] block text-[10px]">Resting HR</span>
                      <span className="font-mono text-white font-bold">52 bpm</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#161B26] text-xs">
                      <span className="text-[#8E9AA8] block text-[10px]">HRV Score</span>
                      <span className="font-mono text-emerald-400 font-bold">88 ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
