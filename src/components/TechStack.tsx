import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Atom,
  Globe,
  Code2,
  FileCode,
  Server,
  Cpu,
  Flame,
  Database,
  Palette,
  Sparkles,
  Layers,
  GitBranch,
  Terminal,
} from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';
import { TechItem } from '../types';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'AI & Tools'];

  const filteredTech =
    activeCategory === 'All'
      ? TECH_STACK
      : TECH_STACK.filter((t) => t.category === activeCategory);

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Atom':
        return <Atom {...props} className="w-6 h-6 text-sky-400" />;
      case 'Globe':
        return <Globe {...props} className="w-6 h-6 text-cyan-400" />;
      case 'Code2':
        return <Code2 {...props} className="w-6 h-6 text-blue-400" />;
      case 'FileCode':
        return <FileCode {...props} className="w-6 h-6 text-amber-400" />;
      case 'Server':
        return <Server {...props} className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu {...props} className="w-6 h-6 text-slate-300" />;
      case 'Flame':
        return <Flame {...props} className="w-6 h-6 text-emerald-300" />;
      case 'Database':
        return <Database {...props} className="w-6 h-6 text-sky-300" />;
      case 'Palette':
        return <Palette {...props} className="w-6 h-6 text-cyan-300" />;
      case 'Sparkles':
        return <Sparkles {...props} className="w-6 h-6 text-purple-400" />;
      case 'Layers':
        return <Layers {...props} className="w-6 h-6 text-blue-300" />;
      case 'GitBranch':
        return <GitBranch {...props} className="w-6 h-6 text-rose-400" />;
      default:
        return <Terminal {...props} className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-sky-400 mb-3">
              <span>02</span>
              <span className="text-slate-600">/</span>
              <span>Capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Tech Stack & Tools
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Modern languages, frameworks, and cloud architectures I leverage to deliver performant digital products.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredTech.map((tech: TechItem) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group glass-card rounded-2xl p-5 border border-slate-800 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-slate-800 group-hover:border-sky-500/30 flex items-center justify-center transition-colors">
                      {renderIcon(tech.icon)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 px-2 py-0.5 rounded-md bg-slate-950/50 border border-slate-800/80">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-slate-100 group-hover:text-sky-300 transition-colors">
                    {tech.name}
                  </h3>
                  <div className="text-xs font-mono text-sky-400/90 mt-0.5 mb-2.5">
                    {tech.level}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Stack Tier</span>
                  <span className="text-slate-400 group-hover:text-sky-400 transition-colors">
                    Production
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
