import React from 'react';
import { ArrowUp, Github, Linkedin, Facebook } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#02050d] py-16 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="space-y-3">
            <span className="font-display font-black text-2xl tracking-tight text-white block">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400 block">
              {PERSONAL_INFO.role}
            </span>
            <p className="text-xs text-neutral-400 font-light max-w-xs">
              Building modern websites, SaaS products & AI-powered applications.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#capabilities"
              onClick={(e) => handleNavClick(e, '#capabilities')}
              className="hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/[0.1] hover:border-white/[0.3] flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/[0.1] hover:border-white/[0.3] flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/[0.1] hover:border-white/[0.3] flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
