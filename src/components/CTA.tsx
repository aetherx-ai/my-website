import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const CTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-36 sm:py-48 relative bg-[#030712] overflow-hidden border-t border-white/[0.06] select-none"
    >
      {/* Cursor-following glow */}
      <div
        className="absolute pointer-events-none w-[600px] h-[600px] rounded-full bg-blue-600/[0.08] blur-[150px] transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 mb-6 flex items-center justify-center gap-2">
          <span>07</span>
          <span className="text-neutral-600">/</span>
          <span>Next Steps</span>
        </div>

        {/* Huge Typography */}
        <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl uppercase tracking-tighter text-white leading-[0.9] mb-4">
          HAVE AN IDEA?
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
            LET'S BUILD IT.
          </span>
        </h2>

        {/* Smaller Text */}
        <p className="text-lg sm:text-2xl text-neutral-400 max-w-xl mx-auto font-light mt-8 mb-12">
          Have a website, SaaS or AI product in mind?
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all duration-300 shadow-xl shadow-white/10 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.15] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
