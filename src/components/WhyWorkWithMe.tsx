import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Zap, ShieldCheck, MessageSquare } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-sky-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-cyan-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-sky-400 mb-3">
            <span>05</span>
            <span className="text-slate-600">/</span>
            <span>Value Standard</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Built For Real Business
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Disciplined software engineering principles applied to deliver real product impact.
          </p>
        </div>

        {/* 4 Qualities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-950/80 border border-slate-800 group-hover:border-sky-500/40 flex items-center justify-center mb-6 transition-colors">
                  {renderIcon(item.icon)}
                </div>

                <h3 className="font-display text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-sky-400/90 mb-3">
                  "{item.description}"
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Core Quality</span>
                <span className="text-slate-400 group-hover:text-sky-400 transition-colors">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
