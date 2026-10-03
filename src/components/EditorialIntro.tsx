import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const EditorialIntro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.3'],
  });

  const line1Opacity = useTransform(scrollYProgress, [0, 0.35], [0.15, 1]);
  const line2Opacity = useTransform(scrollYProgress, [0.25, 0.7], [0.15, 1]);
  const subTextOpacity = useTransform(scrollYProgress, [0.55, 0.95], [0.2, 1]);

  return (
    <section
      ref={containerRef}
      className="py-32 sm:py-48 px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-[#030712] border-t border-white/[0.04]"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 mb-8 flex items-center gap-2">
          <span>01</span>
          <span className="text-neutral-600">/</span>
          <span>Philosophy</span>
        </div>

        {/* Large Editorial Statement */}
        <div className="space-y-4 sm:space-y-6">
          <motion.h2
            style={{ opacity: line1Opacity }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight uppercase leading-[0.95] text-neutral-400"
          >
            I DON'T JUST BUILD WEBSITES.
          </motion.h2>

          <motion.h2
            style={{ opacity: line2Opacity }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight uppercase leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-400"
          >
            I BUILD DIGITAL PRODUCTS.
          </motion.h2>
        </div>

        {/* Supporting description */}
        <motion.div
          style={{ opacity: subTextOpacity }}
          className="mt-12 sm:mt-16 max-w-2xl"
        >
          <p className="text-xl sm:text-2xl text-neutral-300 font-normal leading-relaxed">
            From business websites and SaaS platforms to AI-powered applications, I turn ideas into functional digital experiences.
          </p>

          <div className="mt-8 flex items-center gap-3 font-mono text-xs text-neutral-500 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Design-driven engineering • Fast delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
