'use client';

import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import type { Dictionary } from '@/lib/dictionaries';

interface ServicesProps {
  lang: string;
  dict: Dictionary;
}

const getServices = (dict: Dictionary) => [
  {
    num: '01',
    title: dict.services.service1Title,
    desc: dict.services.service1Desc,
    tags: dict.services.service1Tags,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'hover:border-cyan-500/30',
    iconColor: 'text-cyan-400',
  },
  {
    num: '02',
    title: dict.services.service2Title,
    desc: dict.services.service2Desc,
    tags: dict.services.service2Tags,
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'hover:border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    num: '03',
    title: dict.services.service3Title,
    desc: dict.services.service3Desc,
    tags: dict.services.service3Tags,
    gradient: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'hover:border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    num: '04',
    title: dict.services.service4Title,
    desc: dict.services.service4Desc,
    tags: dict.services.service4Tags,
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    borderColor: 'hover:border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
  {
    num: '05',
    title: dict.services.service5Title,
    desc: dict.services.service5Desc,
    tags: dict.services.service5Tags,
    gradient: 'from-orange-500/20 to-red-500/20',
    borderColor: 'hover:border-orange-500/30',
    iconColor: 'text-orange-400',
  },
  {
    num: '06',
    title: dict.services.service6Title,
    desc: dict.services.service6Desc,
    tags: dict.services.service6Tags,
    gradient: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'hover:border-pink-500/30',
    iconColor: 'text-pink-400',
  },
  {
    num: '07',
    title: dict.services.service7Title,
    desc: dict.services.service7Desc,
    tags: dict.services.service7Tags,
    gradient: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'hover:border-violet-500/30',
    iconColor: 'text-violet-400',
  },
  {
    num: '08',
    title: dict.services.service8Title,
    desc: dict.services.service8Desc,
    tags: dict.services.service8Tags,
    gradient: 'from-amber-500/20 to-yellow-500/20',
    borderColor: 'hover:border-amber-500/30',
    iconColor: 'text-amber-400',
  },
];

export default function Services({ dict }: ServicesProps) {
  const services = getServices(dict);
  return (
    <section id="pakalpojumi" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-cyan/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-xs font-mono uppercase tracking-widest mb-6">
            {dict.services.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {dict.services.heading}
            <span className="gradient-text"> {dict.services.headingHighlight}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            {dict.services.description}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`glass-card glass-card-hover rounded-2xl p-8 group cursor-default ${service.borderColor} transition-all duration-500`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className={`text-xs font-mono ${service.iconColor} opacity-60`}>
                    {service.num}
                  </span>
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                    <div className={`w-2 h-2 rounded-full ${service.iconColor} bg-current`} />
                  </div>
                </div>

                <h3 className="text-white font-semibold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono text-gray-500 border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
