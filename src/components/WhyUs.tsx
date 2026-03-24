'use client';

import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import type { Dictionary } from '@/lib/dictionaries';

interface WhyUsProps {
  lang: string;
  dict: Dictionary;
}

const getReasons = (dict: Dictionary) => [
  {
    icon: '01',
    title: dict.whyUs.reason1Title,
    desc: dict.whyUs.reason1Desc,
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    icon: '02',
    title: dict.whyUs.reason2Title,
    desc: dict.whyUs.reason2Desc,
    accent: 'from-purple-500 to-pink-500',
  },
  {
    icon: '03',
    title: dict.whyUs.reason3Title,
    desc: dict.whyUs.reason3Desc,
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    icon: '04',
    title: dict.whyUs.reason4Title,
    desc: dict.whyUs.reason4Desc,
    accent: 'from-emerald-500 to-cyan-500',
  },
  {
    icon: '05',
    title: dict.whyUs.reason5Title,
    desc: dict.whyUs.reason5Desc,
    accent: 'from-orange-500 to-amber-500',
  },
  {
    icon: '06',
    title: dict.whyUs.reason6Title,
    desc: dict.whyUs.reason6Desc,
    accent: 'from-pink-500 to-rose-500',
  },
];

export default function WhyUs({ dict }: WhyUsProps) {
  const reasons = getReasons(dict);
  return (
    <section id="kapec" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent-purple/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-xs font-mono uppercase tracking-widest mb-6">
            {dict.whyUs.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {dict.whyUs.heading}
            <span className="gradient-text"> {dict.whyUs.headingHighlight}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            {dict.whyUs.description}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card glass-card-hover rounded-2xl p-8 h-full group cursor-default relative overflow-hidden"
              >
                {/* Number accent */}
                <div className="absolute top-6 right-6 text-4xl font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-all duration-500 font-mono">
                  {reason.icon}
                </div>

                {/* Gradient dot */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${reason.accent} flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <span className="text-white text-xs font-bold font-mono">{reason.icon}</span>
                </div>

                <h3 className="text-white font-semibold text-lg mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {reason.desc}
                </p>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${reason.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
