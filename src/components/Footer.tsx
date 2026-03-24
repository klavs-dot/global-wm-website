'use client';

import type { Dictionary } from '@/lib/dictionaries';

interface FooterProps {
  lang: string;
  dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  const footerLinks = [
    dict.footer.link1,
    dict.footer.link2,
    dict.footer.link3,
    dict.footer.link4,
    dict.footer.link5,
  ];

  return (
    <footer className="relative border-t border-white/5">
      {/* Glow line */}
      <div className="glow-line" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-lg opacity-80" />
                <div className="absolute inset-[2px] bg-dark-900 rounded-[6px] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
              </div>
              <div>
                <span className="text-white font-bold text-lg">Global</span>
                <span className="gradient-text font-bold text-lg ml-1">WM</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {dict.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">{dict.footer.linksTitle}</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((item) => (
                <a key={item} href="#" className="text-gray-500 hover:text-accent-cyan text-sm transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">{dict.footer.contactTitle}</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href={`mailto:${dict.footer.email}`} className="hover:text-accent-cyan transition-colors">{dict.footer.email}</a>
              <span>{dict.footer.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-gray-600 text-xs mb-1">
                <span className="font-semibold">{dict.footer.companyName}</span>
              </p>
              <p className="text-gray-600 text-xs">
                {dict.footer.regNumber}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-gray-600 text-xs">{dict.footer.systemActive}</span>
            </div>
          </div>
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Global WM. {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
