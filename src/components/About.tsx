
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  customPhoto: string | null;
}

export const About: React.FC<AboutProps> = ({ customPhoto }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [-35, 35]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative overflow-hidden bg-[#030712] py-28 sm:py-40 lg:py-48 border-t border-white/[0.06]"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[20%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.045] blur-[150px]" />
        <div className="absolute right-[5%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-center gap-4"
        >
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-blue-400">
            <span>05</span>
            <span className="text-neutral-700">/</span>
            <span>About</span>
          </div>

          <div className="h-px w-16 bg-gradient-to-r from-blue-500/60 to-transparent sm:w-24" />

          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600 sm:block">
            MS MASUD — FULL STACK DEVELOPER
          </span>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-12 lg:gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >

            {/* Main Heading */}
            <h2 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.045em] text-white">
              Building
              <br />

              <span className="text-neutral-500">
                with code.
              </span>

              <br />

              <span className="relative inline-block bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                Thinking
                <br />
                like a designer.
              </span>
            </h2>

            {/* Accent Line */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-blue-500" />
              <div className="h-px w-24 bg-white/10" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600">
                Digital Product Engineering
              </span>
            </div>

            {/* Description */}
            <div className="mt-10 max-w-2xl space-y-6">
              <p className="border-l-2 border-blue-500 pl-6 text-lg font-medium leading-relaxed text-white sm:text-xl">
                I'm MS Masud, a Full Stack Web Developer focused on building
                modern, responsive and high-performance digital products.
              </p>

              <p className="pl-6 text-base leading-8 text-neutral-400 sm:text-lg">
                I work across frontend, backend, databases and AI integrations
                to transform ideas into real, scalable products — from
                polished interfaces to complete SaaS platforms.
              </p>
            </div>

            {/* Capability Cards */}
            <div className="mt-14 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">

              {/* Card 1 */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    01 / SPECIALIZATION
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-xs text-blue-400 transition-colors group-hover:border-blue-400/40">
                    ↗
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white">
                  Full Stack Architecture
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  Frontend, backend, database and production systems.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group rounded-2xl border border-blue-400/[0.12] bg-blue-500/[0.035] p-5 backdrop-blur-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue-400/70">
                    02 / PRODUCT
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/20 text-xs text-blue-400 transition-colors group-hover:bg-blue-400/10">
                    ↗
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white">
                  Creator of LumoClip
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  AI-powered video content repurposing platform.
                </p>
              </motion.div>
            </div>

            {/* Tech Stack */}
            <div className="mt-10 flex flex-wrap items-center gap-2 pl-0 sm:pl-6">
              {['React', 'Node.js', 'Supabase', 'AI', 'TypeScript'].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500 transition-colors hover:border-blue-400/30 hover:text-blue-300"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          {/* RIGHT / PORTRAIT */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <motion.div
              style={{
                y: photoY,
                rotate: photoRotate,
              }}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative w-full max-w-[390px]"
            >

              {/* Outer Glow */}
              <div className="absolute -inset-6 rounded-[2.2rem] bg-blue-500/[0.08] blur-3xl" />

              {/* Image Frame */}
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/[0.12] bg-[#080d18] shadow-[0_30px_100px_rgba(0,0,0,0.55)]">

                {/* Top Technical Bar */}
                <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-white/[0.08] bg-black/20 px-5 py-4 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                      Portrait / 001
                    </span>
                  </div>

                  <span className="font-mono text-[9px] tracking-wider text-neutral-600">
                    MS.M
                  </span>
                </div>

                {/* Image */}
                {customPhoto ? (
                  <img
                    src={customPhoto}
                    alt="MS Masud — Full Stack Developer"
                    className="h-full w-full object-cover object-center grayscale-[0.08] contrast-[1.08] brightness-[0.96] transition duration-700 group-hover:scale-[1.035] group-hover:brightness-100"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#0b1120] via-[#060b16] to-[#02050e]">
                    <div className="relative">
                      <div className="absolute -inset-8 rounded-full bg-blue-500/[0.08] blur-2xl" />

                      <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/[0.04]">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025]">
                          <span className="font-display text-5xl font-black text-white">
                            M
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 text-center">
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                        MS MASUD
                      </p>

                      <p className="mt-2 text-xs text-neutral-600">
                        Digital Product Engineer
                      </p>
                    </div>
                  </div>
                )}

                {/* Image Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-black/10" />

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <div className="mb-4 h-px w-full bg-white/[0.1]" />

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-wide text-white">
                        MS Masud
                      </p>

                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-500">
                        Full Stack Developer
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue-400">
                        EST. 2026
                      </p>

                      <p className="mt-1 font-mono text-[8px] text-neutral-600">
                        BUILD / SHIP / SCALE
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Coordinates */}
              <div className="absolute -right-4 top-12 hidden rounded-xl border border-white/[0.08] bg-[#080d18]/80 px-4 py-3 backdrop-blur-xl sm:block">
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600">
                  SYSTEM
                </p>
                <p className="mt-1 font-mono text-[10px] text-blue-400">
                  ONLINE
                </p>
              </div>

              {/* Floating Index */}
              <div className="absolute -left-5 bottom-20 hidden rounded-xl border border-white/[0.08] bg-[#080d18]/80 px-4 py-3 backdrop-blur-xl sm:block">
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600">
                  ID
                </p>
                <p className="mt-1 font-mono text-[10px] text-neutral-300">
                  MS / 001
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 border-t border-white/[0.06] pt-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600">
              FROM IDEA → PRODUCT → SCALE
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-700">
              © {new Date().getFullYear()} MS MASUD
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};