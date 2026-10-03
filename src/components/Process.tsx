import React from 'react';
import { motion } from 'motion/react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      desc: 'Understand the idea and business goal.',
    },
    {
      num: '02',
      title: 'DESIGN',
      desc: 'Define the user experience and visual direction.',
    },
    {
      num: '03',
      title: 'BUILD',
      desc: 'Develop the frontend, backend and integrations.',
    },
    {
      num: '04',
      title: 'REFINE',
      desc: 'Test responsiveness, performance and functionality.',
    },
    {
      num: '05',
      title: 'LAUNCH',
      desc: 'Deploy the finished product.',
    },
  ];

  return (
    <section id="process" className="py-32 bg-[#030712] relative overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="pb-16 border-b border-white/[0.08] mb-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 mb-3 flex items-center gap-2">
              <span>06</span>
              <span className="text-neutral-600">/</span>
              <span>Method</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase text-white">
              PROCESS
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-4 md:mt-0 uppercase tracking-widest">
            From initial concept to production release
          </p>
        </div>

        {/* Horizontal Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative p-8 rounded-3xl bg-[#0b1120]/40 border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-blue-400">
                  {step.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-blue-400 transition-colors" />
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              {/* Progress connector indicator line at bottom */}
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-neutral-600">
                <span>Phase {idx + 1}</span>
                <span className="group-hover:text-blue-400 transition-colors">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
