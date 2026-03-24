'use client';

import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import type { Dictionary } from '@/lib/dictionaries';

interface AboutProps {
  lang: string;
  dict: Dictionary;
}

const getCapabilities = (dict: Dictionary) => [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: dict.about.cap1Title,
    desc: dict.about.cap1Desc,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: dict.about.cap2Title,
    desc: dict.about.cap2Desc,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: dict.about.cap3Title,
    desc: dict.about.cap3Desc,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: dict.about.cap4Title,
    desc: dict.about.cap4Desc,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: dict.about.cap5Title,
    desc: dict.about.cap5Desc,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: dict.about.cap6Title,
    desc: dict.about.cap6Desc,
  },
];

export default function About({ dict }: AboutProps) {
  const capabilities = getCapabilities(dict);
  return (
    <section id="par-mums" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-purple/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent-purple/20 bg-accent-purple/5 text-accent-purple text-xs font-mono uppercase tracking-widest mb-6">
            {dict.about.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {dict.about.heading}
            <span className="gradient-text"> {dict.about.headingHighlight}</span> biznesu
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            {dict.about.description}
          </p>
        </SectionReveal>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card glass-card-hover rounded-2xl p-8 h-full group cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 border border-white/5 flex items-center justify-center text-accent-cyan group-hover:text-white group-hover:border-accent-cyan/20 transition-all duration-300 mb-6">
                  {cap.icon}
                </div>

                <h3 className="text-white font-semibold text-lg mb-3 group-hover:gradient-text transition-all duration-300">
                  {cap.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cap.desc}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-px bg-gradient-to-r from-accent-cyan/20 to-transparent w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
