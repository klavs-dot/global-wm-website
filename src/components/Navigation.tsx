'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import type { Dictionary } from '@/lib/dictionaries';

interface NavigationProps {
  lang: string;
  dict: Dictionary;
}

export default function Navigation({ lang, dict }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#par-mums', label: dict.nav.about },
    { href: '#pakalpojumi', label: dict.nav.services },
    { href: '#vertibas', label: dict.nav.benefits },
    { href: '#showcase', label: dict.nav.solutions },
    { href: '#kapec', label: dict.nav.why },
    { href: '#kontakti', label: dict.nav.contact },
  ];

  const otherLang = lang === 'lv' ? 'en' : 'lv';
  const otherLangPath = `/${otherLang}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#060611]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-[2px] bg-dark-900 rounded-[6px] flex items-center justify-center">
                  <span className="text-white font-bold text-sm tracking-wider">G</span>
                </div>
              </div>
              <div>
                <span className="text-white font-bold text-lg tracking-wide">Global</span>
                <span className="gradient-text font-bold text-lg ml-1">WM</span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-purple group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Language switcher and CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={otherLangPath}
                className="px-3 py-2.5 text-xs text-gray-400 hover:text-white transition-colors duration-300 font-mono uppercase tracking-wider"
              >
                {otherLang === 'en' ? 'EN' : 'LV'}
              </Link>
              <div className="w-px h-5 bg-white/10" />
              <a
                href="#kontakti"
                className="btn-shine px-6 py-2.5 rounded-full bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/30 text-sm text-white hover:border-accent-cyan/60 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300"
              >
                {dict.nav.contactBtn}
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-xl pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 px-4 text-xl text-gray-300 hover:text-white border-b border-white/5 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                href="#kontakti"
                onClick={() => setMobileOpen(false)}
                className="mt-6 py-4 text-center rounded-xl bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30 text-white text-lg"
              >
                {dict.nav.contactBtn}
              </motion.a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-4 py-4 text-center border-t border-white/5"
              >
                <Link
                  href={otherLangPath}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-mono uppercase tracking-wider"
                >
                  {otherLang === 'en' ? 'Switch to English' : 'Pārslēgties uz Latviešu'}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
