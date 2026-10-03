import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface CapabilitiesProps {
  onSelectCapability: (title: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCapability }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    {
      num: '01',
      title: 'BUSINESS WEBSITES',
      desc: 'Modern responsive websites engineered for speed, conversions, and distinctive brand presence.',
      tag: 'Brand & Corporate',
    },
    {
      num: '02',
      title: 'SAAS PRODUCTS',
      desc: 'Scalable cloud software featuring authentication, relational databases, dashboards, and automated billing.',
      tag: 'Full SaaS Architecture',
    },
    {
      num: '03',
      title: 'WEB APPLICATIONS',
      desc: 'Custom web solutions built around complex business workflows, third-party APIs, and stateful interfaces.',
      tag: 'Custom Logic & APIs',
    },
    {
      num: '04',
      title: 'AI-POWERED PRODUCTS',
      desc: 'Integrating multimodal LLMs, prompt pipelines, dynamic generation, and streaming intelligence.',
      tag: 'Intelligent Workflows',
    },
    {
      num: '05',
      title: 'E-COMMERCE',
      desc: 'Modern digital storefronts with friction-free checkouts, responsive cart management, and inventory tooling.',
      tag: 'Conversion Focused',
    },
    {
      num: '06',
      title: 'WEBSITE REDESIGNS',
      desc: 'Modernizing outdated legacy codebases with contemporary typography, speed optimization, and fluid UX.',
      tag: 'Performance & Aesthetics',
    },
  ];

  const handleClick = (title: string) => {
    onSelectCapability(title);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const topOffset = 80;
      const pos = contactSection.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="capabilities" className="py-32 relative bg-[#030712] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="pb-16 border-b border-white/[0.08] mb-12 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 mb-3 flex items-center gap-2">
              <span>03</span>
              <span className="text-neutral-600">/</span>
              <span>Capabilities</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase text-white">
              WHAT I BUILD
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 mt-4 md:mt-0 uppercase tracking-widest">
            Creative Technology • Production Grade
          </span>
        </div>

        {/* Large Typography Vertical List */}
        <div className="divide-y divide-white/[0.08]">
          {capabilities.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={item.num}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => handleClick(item.title)}
                className="group relative py-10 sm:py-14 cursor-pointer transition-all duration-300"
              >
                {/* Hover Background Glow */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-white/[0.02] to-transparent pointer-events-none rounded-2xl"
                />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Number + Big Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span
                      className={`font-mono text-sm sm:text-base font-bold transition-transform duration-300 ${
                        isHovered ? 'text-blue-400 -translate-x-1' : 'text-neutral-600'
                      }`}
                    >
                      {item.num}
                    </span>
                    <h3
                      className={`font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase transition-all duration-300 ${
                        isHovered ? 'text-white translate-x-2' : 'text-neutral-400'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Right: Deliverables and action arrow */}
                  <div className="flex items-center justify-between lg:justify-end gap-8 pl-12 lg:pl-0">
                    <div className="max-w-md hidden sm:block">
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>

                    <div
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'border-blue-400 bg-blue-500 text-white scale-110'
                          : 'border-white/[0.1] text-neutral-500'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
