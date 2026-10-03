import React from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  LayoutGrid,
  Code,
  Sparkles,
  ShoppingBag,
  RefreshCw,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const renderIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-sky-400' };
    switch (name) {
      case 'Globe':
        return <Globe {...props} />;
      case 'LayoutGrid':
        return <LayoutGrid {...props} className="w-6 h-6 text-cyan-400" />;
      case 'Code':
        return <Code {...props} className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles {...props} className="w-6 h-6 text-sky-300" />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} className="w-6 h-6 text-emerald-400" />;
      case 'RefreshCw':
        return <RefreshCw {...props} className="w-6 h-6 text-indigo-400" />;
      default:
        return <Globe {...props} />;
    }
  };

  const handleInquire = (title: string) => {
    onSelectService(title);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const topOffset = 80;
      const pos = contactSection.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-sky-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-sky-400 mb-3">
            <span>04</span>
            <span className="text-slate-600">/</span>
            <span>Expertise</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            What I Can Build
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            End-to-end full stack development tailored to your specific product roadmap and commercial goals.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service: Service, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group glass-card rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-sky-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Category Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-slate-800 group-hover:border-sky-500/30 flex items-center justify-center transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Bullet List */}
                <div className="space-y-2 pt-4 border-t border-slate-800/80 mb-6">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="pt-2">
                <button
                  onClick={() => handleInquire(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 transition-all cursor-pointer group/btn"
                >
                  <span>Inquire for this</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
