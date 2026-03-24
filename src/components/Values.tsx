'use client';

import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import type { Dictionary } from '@/lib/dictionaries';

interface ValuesProps {
  lang: string;
  dict: Dictionary;
}

const getValues = (dict: Dictionary) => [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: dict.values.value1Title,
    desc: dict.values.value1Desc,
    metric: dict.values.value1Metric,
    metricLabel: dict.values.value1MetricLabel,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: dict.values.value2Title,
    desc: dict.values.value2Desc,
    metric: dict.values.value2Metric,
    metricLabel: dict.values.value2MetricLabel,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: dict.values.value3Title,
    desc: dict.values.value3Desc,
    metric: dict.values.value3Metric,
    metricLabel: dict.values.value3MetricLabel,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: dict.values.value4Title,
    desc: dict.values.value4Desc,
    metric: dict.values.value4Metric,
    metricLabel: dict.values.value4MetricLabel,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: dict.values.value5Title,
    desc: dict.values.value5Desc,
    metric: dict.values.value5Metric,
    metricLabel: dict.values.value5MetricLabel,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: dict.values.value6Title,
    desc: dict.values.value6Desc,
    metric: dict.values.value6Metric,
    metricLabel: dict.values.value6MetricLabel,
  },
];

export default function Values({ dict }: ValuesProps) {
  const values = getValues(dict);
  return (
    <section id="vertibas" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent-blue/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-xs font-mono uppercase tracking-widest mb-6">
            {dict.values.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {dict.values.heading}
            <span className="gradient-text"> {dict.values.headingHighlight}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            {dict.values.description}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card glass-card-hover rounded-2xl p-8 h-full group cursor-default relative overflow-hidden"
              >
                {/* Glow bg on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-cyan/0 group-hover:bg-accent-cyan/5 rounded-full blur-[60px] transition-all duration-700" />

                <div className="relative z-10">
                  {/* Metric */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-accent-cyan/60 group-hover:text-accent-cyan transition-colors duration-300">
                      {val.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-text">{val.metric}</div>
                      <div className="text-xs text-gray-600 font-mono">{val.metricLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-3">
                    {val.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
