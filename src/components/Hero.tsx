'use client';

import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import type { Dictionary } from '@/lib/dictionaries';

interface HeroProps {
  lang: string;
  dict: Dictionary;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-900" />

      {/* Radial gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[120px] orb-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-purple/8 rounded-full blur-[100px] orb-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/3 rounded-full blur-[150px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Canvas particles */}
      <AnimatedBackground />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 md:right-20 w-72 h-72 border border-accent-cyan/10 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 left-10 md:left-20 w-48 h-48 border border-accent-purple/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />

      {/* Horizontal scan lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-accent-cyan"
            style={{ top: `${i * 5}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="text-accent-cyan text-xs md:text-sm font-mono tracking-wider uppercase">
            {dict.hero.badge}
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-8"
        >
          <span className="block">{dict.hero.heading1}</span>
          <span className="block gradient-text">{dict.hero.heading2}</span>
          <span className="block">{dict.hero.heading3}</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed mb-12"
        >
          {dict.hero.subheading}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#kontakti"
            className="btn-shine group relative px-8 py-4 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-semibold text-sm md:text-base tracking-wide hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] transition-all duration-500"
          >
            <span className="relative z-10">{dict.hero.ctaPrimary}</span>
          </a>
          <a
            href="#pakalpojumi"
            className="group px-8 py-4 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/20 font-medium text-sm md:text-base transition-all duration-300 flex items-center gap-2"
          >
            {dict.hero.ctaSecondary}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: dict.hero.stat1Value, label: dict.hero.stat1Label },
            { value: dict.hero.stat2Value, label: dict.hero.stat2Label },
            { value: dict.hero.stat3Value, label: dict.hero.stat3Label },
            { value: dict.hero.stat4Value, label: dict.hero.stat4Label },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs font-mono uppercase tracking-widest">{dict.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-accent-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
