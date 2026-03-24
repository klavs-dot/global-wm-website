'use client';

import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import type { Dictionary } from '@/lib/dictionaries';

interface CTAProps {
  lang: string;
  dict: Dictionary;
}

export default function CTA({ dict }: CTAProps) {
  return (
    <section id="kontakti" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />

      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/3 rounded-full blur-[200px]" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[100px] orb-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[80px] orb-2" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <SectionReveal>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-accent-cyan text-xs font-mono tracking-wider uppercase">
              {dict.cta.badge}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {dict.cta.heading1}
            <br />
            <span className="gradient-text">{dict.cta.heading2}</span>
          </h2>

          <p className="max-w-xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed mb-12">
            {dict.cta.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${dict.cta.ctaEmail}`}
              className="btn-shine group relative px-10 py-5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-semibold text-base tracking-wide hover:shadow-[0_0_60px_rgba(0,229,255,0.3)] transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                {dict.cta.ctaPrimary}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${dict.cta.ctaEmail}`}
              className="px-10 py-5 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/20 font-medium text-base transition-all duration-300"
            >
              {dict.cta.ctaEmail}
            </motion.a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-cyan/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{dict.cta.trustConsultation}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-cyan/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{dict.cta.trust24h}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-cyan/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{dict.cta.trustNDA}</span>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Glow line */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
}
