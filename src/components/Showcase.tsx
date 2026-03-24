'use client';

import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import type { Dictionary } from '@/lib/dictionaries';

interface ShowcaseProps {
  lang: string;
  dict: Dictionary;
}

const getShowcaseItems = (dict: Dictionary) => [
  {
    title: dict.showcase.item1Title,
    desc: dict.showcase.item1Desc,
    visual: 'dashboard',
  },
  {
    title: dict.showcase.item2Title,
    desc: dict.showcase.item2Desc,
    visual: 'ai',
  },
  {
    title: dict.showcase.item3Title,
    desc: dict.showcase.item3Desc,
    visual: 'automation',
  },
];

function DashboardMockup() {
  return (
    <div className="relative w-full aspect-[16/10] bg-dark-900/80 rounded-xl border border-white/5 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="ml-4 flex-1 h-5 bg-white/5 rounded-full max-w-[200px]" />
      </div>

      <div className="p-4 grid grid-cols-4 gap-3">
        {/* Sidebar */}
        <div className="col-span-1 space-y-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`h-6 rounded ${i === 1 ? 'bg-accent-cyan/10 border border-accent-cyan/20' : 'bg-white/3'}`} />
          ))}
        </div>

        {/* Main content */}
        <div className="col-span-3 space-y-3">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {['#00e5ff', '#7c4dff', '#3d5afe'].map((color, i) => (
              <div key={i} className="bg-white/3 rounded-lg p-3 border border-white/5">
                <div className="h-2 w-1/2 rounded bg-gray-700 mb-2" />
                <div className="text-lg font-bold" style={{ color }}>{['€247K', '1,284', '94.7%'][i]}</div>
                <div className="h-1.5 w-3/4 rounded bg-gray-800 mt-1" />
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-white/3 rounded-lg p-4 border border-white/5">
            <div className="h-2 w-24 rounded bg-gray-700 mb-4" />
            <div className="flex items-end gap-1 h-24">
              {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-accent-cyan/40 to-accent-purple/40"
                />
              ))}
            </div>
          </div>

          {/* Table rows */}
          <div className="bg-white/3 rounded-lg border border-white/5 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-white/5 last:border-0">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-purple/30" />
                <div className="flex-1 h-2 rounded bg-gray-800" />
                <div className="w-16 h-2 rounded bg-gray-700" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent pointer-events-none" />
    </div>
  );
}

function AIMockup({ dict }: { dict: Dictionary }) {
  return (
    <div className="relative w-full aspect-[16/10] bg-dark-900/80 rounded-xl border border-white/5 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* AI chat interface */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center text-[10px] text-white font-bold shrink-0">AI</div>
          <div className="bg-white/5 rounded-xl rounded-tl-none p-3 max-w-[80%]">
            <div className="space-y-1.5">
              <div className="h-2 w-full rounded bg-gray-700" />
              <div className="h-2 w-4/5 rounded bg-gray-700" />
              <div className="h-2 w-3/5 rounded bg-gray-700" />
            </div>
          </div>
        </div>

        {/* AI metrics */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-accent-purple/5 border border-accent-purple/10 rounded-lg p-3">
            <div className="text-accent-purple text-xs font-mono mb-1">{dict.showcase.leadScore}</div>
            <div className="text-white text-xl font-bold">92/100</div>
            <div className="mt-2 h-1.5 bg-dark-900 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '92%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"
              />
            </div>
          </div>
          <div className="bg-accent-cyan/5 border border-accent-cyan/10 rounded-lg p-3">
            <div className="text-accent-cyan text-xs font-mono mb-1">{dict.showcase.probability}</div>
            <div className="text-white text-xl font-bold">87%</div>
            <div className="mt-2 h-1.5 bg-dark-900 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '87%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white/3 rounded-lg border border-white/5 p-3">
          <div className="text-xs font-mono text-accent-cyan mb-2">{dict.showcase.aiRecommendations}</div>
          {[dict.showcase.sendFollowUp, dict.showcase.offerDemo, dict.showcase.addPremium].map((rec, i) => (
            <div key={i} className="flex items-center gap-2 py-1.5">
              <div className="w-4 h-4 rounded border border-accent-cyan/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-sm bg-accent-cyan/50" />
              </div>
              <span className="text-xs text-gray-400">{rec}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent pointer-events-none" />
    </div>
  );
}

function AutomationMockup({ dict }: { dict: Dictionary }) {
  return (
    <div className="relative w-full aspect-[16/10] bg-dark-900/80 rounded-xl border border-white/5 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
      </div>

      <div className="p-6">
        {/* Flow diagram */}
        <div className="flex flex-col items-center gap-3">
          {[
            { label: dict.showcase.newRequest, color: 'border-cyan-500/30 bg-cyan-500/5', dot: 'bg-cyan-400' },
            { label: dict.showcase.aiClassification, color: 'border-purple-500/30 bg-purple-500/5', dot: 'bg-purple-400' },
            { label: dict.showcase.automaticProcessing, color: 'border-blue-500/30 bg-blue-500/5', dot: 'bg-blue-400' },
            { label: dict.showcase.qualityCheck, color: 'border-emerald-500/30 bg-emerald-500/5', dot: 'bg-emerald-400' },
            { label: dict.showcase.completed, color: 'border-green-500/30 bg-green-500/5', dot: 'bg-green-400' },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="w-full"
            >
              <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${step.color}`}>
                <div className={`w-2.5 h-2.5 rounded-full ${step.dot}`} />
                <span className="text-xs text-gray-300 font-mono">{step.label}</span>
                <div className="flex-1" />
                <span className="text-[10px] text-gray-600 font-mono">{['0.2s', '0.8s', '1.2s', '0.5s', '—'][i]}</span>
              </div>
              {i < 4 && (
                <div className="flex justify-center py-1">
                  <div className="w-px h-3 bg-gradient-to-b from-white/10 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent pointer-events-none" />
    </div>
  );
}

const getMockups = (dict: Dictionary) => [DashboardMockup, () => <AIMockup dict={dict} />, () => <AutomationMockup dict={dict} />];

export default function Showcase({ dict }: ShowcaseProps) {
  const showcaseItems = getShowcaseItems(dict);
  const mockups = getMockups(dict);

  return (
    <section id="showcase" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent-cyan/2 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent-purple/20 bg-accent-purple/5 text-accent-purple text-xs font-mono uppercase tracking-widest mb-6">
            {dict.showcase.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {dict.showcase.heading}
            <span className="gradient-text"> {dict.showcase.headingHighlight}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            {dict.showcase.description}
          </p>
        </SectionReveal>

        <div className="space-y-20">
          {showcaseItems.map((item, i) => {
            const Mockup = mockups[i];
            const isReversed = i % 2 === 1;

            return (
              <SectionReveal key={i} delay={0.1}>
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}>
                  {/* Text */}
                  <div className="lg:w-2/5">
                    <span className="text-accent-cyan font-mono text-sm mb-4 block">0{i + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-6">{item.desc}</p>
                    <div className="flex items-center gap-2 text-sm text-accent-cyan/70">
                      <div className="w-8 h-px bg-accent-cyan/30" />
                      <span className="font-mono text-xs uppercase tracking-wider">{dict.showcase.viewDetails}</span>
                    </div>
                  </div>

                  {/* Mockup */}
                  <div className="lg:w-3/5">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/5"
                    >
                      <Mockup />
                    </motion.div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
