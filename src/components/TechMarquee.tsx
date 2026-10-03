import React from 'react';

export const TechMarquee: React.FC = () => {
  const tools = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Express',
    'Supabase',
    'PostgreSQL',
    'Tailwind CSS',
    'Gemini / AI',
    'Git',
    'GitHub',
  ];

  return (
    <section id="tools" className="py-24 bg-[#030712] border-y border-white/[0.06] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 flex items-center gap-2">
          <span>04</span>
          <span className="text-neutral-600">/</span>
          <span>Stack</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase text-white mt-2">
          TOOLS I WORK WITH
        </h2>
      </div>

      {/* Marquee Track 1 (Leftward) */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-4">
          {/* Double list for seamless loop */}
          {[...tools, ...tools, ...tools].map((tool, idx) => (
            <div
              key={`${tool}-${idx}`}
              className="flex items-center gap-8 sm:gap-12 flex-shrink-0 group cursor-default"
            >
              <span className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-neutral-600 group-hover:text-white transition-colors duration-300">
                {tool}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
