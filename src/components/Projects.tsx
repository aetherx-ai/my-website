import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
ArrowUpRight,
Check,
Sparkles,
Video,
Monitor,
Cpu,
ExternalLink,
Layers3,
Zap,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
const [selectedProject, setSelectedProject] = useState<Project | null>(null);

const lumoClip = PROJECTS.find((p) => p.id === 'lumoclip')!;
const businessWeb = PROJECTS.find((p) => p.id === 'business-website')!;
const aiWebApp = PROJECTS.find((p) => p.id === 'ai-web-app')!;

const lumoRef = useRef<HTMLDivElement>(null);

const { scrollYProgress: lumoProgress } = useScroll({
target: lumoRef,
offset: ['start 0.9', 'end 0.2'],
});

const lumoScale = useTransform(lumoProgress, [0, 0.6], [0.94, 1]);
const lumoOpacity = useTransform(lumoProgress, [0, 0.35], [0.35, 1]);
const lumoY = useTransform(lumoProgress, [0, 0.5], [40, 0]);

const openProject = (project: Project) => {
setSelectedProject(project);
};

return (
  <section
    id="projects"
    className="relative overflow-hidden bg-[#030712] py-28 sm:py-32 lg:py-40"
  >
    {/* ================================================================ */}
    {/* BACKGROUND SYSTEM */}
    {/* ================================================================ */}

    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[-15%] top-[20%] h-[700px] w-[700px] rounded-full bg-blue-600/[0.035] blur-[180px]" />

      <div className="absolute right-[-10%] top-[45%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.025] blur-[180px]" />

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
      {/* ================================================================ */}
      {/* SECTION HEADER */}
      {/* ================================================================ */}

      <div className="mb-20 border-b border-white/[0.08] pb-12 sm:mb-24 sm:pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-blue-400 sm:text-xs">
              <span className="flex h-6 items-center rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-2.5">
                02
              </span>

              <span className="text-neutral-700">/</span>

              <span>Selected Work</span>
            </div>

            <h2 className="max-w-4xl font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-7xl lg:text-[6.5rem]">
              Work that
              <br />
              <span className="text-neutral-500">ships.</span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="font-mono text-xs uppercase leading-6 tracking-[0.12em] text-neutral-500 sm:text-sm">
              SaaS products, AI applications and production-ready web
              experiences engineered for real-world use.
            </p>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* LUMOCLIP — FLAGSHIP PROJECT */}
      {/* ================================================================ */}

      <motion.div
        ref={lumoRef}
        style={{
          scale: lumoScale,
          opacity: lumoOpacity,
          y: lumoY,
        }}
        className="mb-28 sm:mb-36"
      >
        {/* Project top information */}

        <div className="mb-8 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-blue-300">
              <Sparkles className="h-3 w-3" />
              Flagship Product
            </div>

            <div className="flex flex-wrap items-end gap-4">
              <h3 className="font-display text-6xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-8xl lg:text-[9rem]">
                LumoClip
              </h3>

              <span className="mb-2 hidden rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-400 sm:inline-flex">
                Live
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={lumoClip.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-black shadow-[0_10px_40px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              <span>Open Product</span>
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={() => openProject(lumoClip)}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.08]"
            >
              <span>Case Study</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="mb-9 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-3xl text-lg font-light leading-relaxed text-neutral-300 sm:text-2xl">
            An AI-powered content repurposing platform that transforms
            long-form videos into short-form content built for modern
            social platforms.
          </p>

          <div className="flex shrink-0 gap-6 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-600">
            <span>AI</span>
            <span>•</span>
            <span>SaaS</span>
            <span>•</span>
            <span>Production</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* LUMOCLIP SHOWCASE */}
        {/* ============================================================ */}

        <div
          data-cursor="view"
          onClick={() => window.open(lumoClip.websiteUrl, '_blank')}
          className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#080d19] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] transition-all duration-700 hover:border-blue-400/30 sm:p-6 lg:p-8"
        >
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/[0.08] blur-[140px] transition-all duration-700 group-hover:bg-blue-500/[0.14]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.05] blur-[130px]" />

          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#040814]">
            <div className="flex h-14 items-center justify-between border-b border-white/[0.07] bg-white/[0.015] px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />

                <div className="ml-3 hidden items-center gap-2 rounded-md border border-white/[0.06] bg-black/20 px-3 py-1.5 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[9px] text-neutral-500">
                    lumo-clip.com
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Production
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative p-5 sm:p-8 lg:col-span-8 lg:p-10">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                      Workspace
                    </div>

                    <div className="font-display text-xl font-bold text-white">
                      AI Clipping Engine
                    </div>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.08]">
                    <Zap className="h-4 w-4 text-blue-400" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-[#030712]/80 p-5 shadow-inner sm:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.10]">
                        <Video className="h-5 w-5 text-blue-400" />
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-white">
                          Full Length Podcast.mp4
                        </div>

                        <div className="mt-1 font-mono text-[9px] text-neutral-600">
                          42:15 • 1080p • MP4
                        </div>
                      </div>
                    </div>

                    <span className="hidden rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 font-mono text-[9px] text-cyan-300 sm:block">
                      ANALYZING
                    </span>
                  </div>

                  <div className="mb-3 h-2 overflow-hidden rounded-full bg-white/[0.05]">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    />
                  </div>

                  <div className="flex items-center justify-between font-mono text-[9px]">
                    <span className="text-neutral-600">Detecting viral moments</span>
                    <span className="text-blue-300">85%</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {[
                    'AI clipping',
                    'AI captions',
                    'AI titles',
                    'Repurposing',
                    'SaaS dashboard',
                    'Multi-platform',
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-3 font-mono text-[9px] uppercase tracking-[0.05em] text-neutral-400 transition-colors duration-300 group-hover:border-white/[0.09]"
                    >
                      <Check className="h-3 w-3 shrink-0 text-blue-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden border-t border-white/[0.07] bg-black/20 p-8 lg:col-span-4 lg:min-h-0 lg:border-l lg:border-t-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-cyan-500/[0.04]" />

                <div className="relative w-[185px] overflow-hidden rounded-[2rem] border border-white/[0.14] bg-black p-2 shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:rotate-[-2deg] group-hover:scale-[1.04] sm:w-[210px]">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-blue-950/60 via-[#101827] to-black">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.2),transparent_35%)]" />
                    <div className="absolute left-5 top-16 h-20 w-20 rounded-full bg-blue-500/10 blur-2xl" />
                    <div className="absolute bottom-20 right-5 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl" />

                    <div className="relative z-10 flex items-center justify-between px-3 pt-3 font-mono text-[8px] text-neutral-500">
                      <span>00:45</span>
                      <span className="text-blue-300">#SHORTS</span>
                    </div>

                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                      <span className="rounded-md bg-yellow-300 px-2 py-1 text-[9px] font-black uppercase tracking-wider text-black shadow-lg">
                        THIS IS HOW
                      </span>

                      <div className="mt-2 font-display text-[13px] font-black uppercase leading-tight text-white drop-shadow-xl">
                        AI REPURPOSES
                        <br />
                        CONTENT
                      </div>

                      <div className="mt-4 rounded-full border border-white/[0.10] bg-black/40 px-2.5 py-1 font-mono text-[7px] uppercase tracking-widest text-cyan-300 backdrop-blur">
                        TikTok • Reels
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-7 left-5 hidden rounded-xl border border-white/[0.08] bg-black/60 px-3 py-2 backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[8px] uppercase tracking-wider text-neutral-400">
                      Export Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-white/[0.07] sm:grid-cols-4">
            {[
              ['01', 'AI Processing'],
              ['02', 'Dynamic Captions'],
              ['03', 'Vertical Export'],
              ['04', 'Production SaaS'],
            ].map(([number, label]) => (
              <div
                key={number}
                className="border-r border-white/[0.06] px-4 py-5 last:border-r-0 sm:px-6"
              >
                <div className="mb-1 font-mono text-[9px] text-blue-400">{number}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-neutral-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ================================================================ */}
      {/* PROJECT 02 + PROJECT 03 */}
      {/* ================================================================ */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* ============================================================ */}
        {/* BUSINESS WEBSITE */}
        {/* ============================================================ */}

        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.35 }}
          data-cursor="view"
          onClick={() => openProject(businessWeb)}
          className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#080d19]/80 p-5 backdrop-blur-xl transition-colors duration-500 hover:border-blue-400/25 sm:p-7"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/[0.06] blur-[80px] transition-all duration-500 group-hover:bg-blue-500/[0.12]" />

          <div className="relative">
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                <Layers3 className="h-3.5 w-3.5 text-blue-400" />
                02 / Production
              </div>

              <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-neutral-600">
                Case Study Soon
              </span>
            </div>

            <h3 className="max-w-md font-display text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-blue-300 sm:text-5xl">
              Business
              <br />
              Website
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-500">
              Modern responsive business website focused on premium UI,
              clear information architecture and optimized user experience.
            </p>

            <div className="relative my-9 flex min-h-[230px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#030712]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_50%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative w-[75%] overflow-hidden rounded-xl border border-white/[0.08] bg-[#080d19] shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
                <div className="flex h-7 items-center gap-1.5 border-b border-white/[0.06] px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                </div>

                <div className="space-y-3 p-5">
                  <div className="h-3 w-24 rounded bg-white/[0.08]" />
                  <div className="h-10 w-[80%] rounded bg-white/[0.05]" />
                  <div className="h-2 w-[60%] rounded bg-white/[0.04]" />

                  <div className="grid grid-cols-3 gap-2 pt-3">
                    <div className="h-12 rounded-lg bg-blue-500/[0.08]" />
                    <div className="h-12 rounded-lg bg-white/[0.04]" />
                    <div className="h-12 rounded-lg bg-white/[0.04]" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.08]">
                <Monitor className="h-4 w-4 text-blue-400" />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.07] pt-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-neutral-600">
                React • TypeScript • Tailwind
              </span>

              <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.12em] text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
                Details
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* AI WEB APPLICATION */}
        {/* ============================================================ */}

        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.35 }}
          data-cursor="view"
          onClick={() => openProject(aiWebApp)}
          className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#080d19]/80 p-5 backdrop-blur-xl transition-colors duration-500 hover:border-cyan-400/25 sm:p-7"
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/[0.05] blur-[80px] transition-all duration-500 group-hover:bg-cyan-500/[0.11]" />

          <div className="relative">
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                03 / AI Platform
              </div>

              <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-neutral-600">
                Case Study Soon
              </span>
            </div>

            <h3 className="max-w-md font-display text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-5xl">
              AI Web
              <br />
              Application
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-500">
              AI-powered web application combining modern frontend
              architecture, backend services and real-time AI integration.
            </p>

            <div className="relative my-9 flex min-h-[230px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#030712]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.09),transparent_50%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative w-[75%] rounded-xl border border-white/[0.08] bg-[#080d19] p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.08]">
                    <Cpu className="h-4 w-4 text-cyan-400" />
                  </div>

                  <div>
                    <div className="h-2.5 w-20 rounded bg-white/[0.08]" />
                    <div className="mt-2 h-1.5 w-14 rounded bg-white/[0.04]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-2 w-full rounded bg-white/[0.05]" />
                  <div className="h-2 w-[88%] rounded bg-white/[0.05]" />
                  <div className="h-2 w-[65%] rounded bg-cyan-400/[0.08]" />
                </div>

                <div className="mt-5 h-8 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
              </div>

              <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08]">
                <Sparkles className="h-4 w-4 text-cyan-400" />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.07] pt-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-neutral-600">
                Next.js • Gemini • Node
              </span>

              <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.12em] text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
                Details
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom statement */}

      <div className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center">
        <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-700">
          More experiments & production work in progress
        </div>

        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          Building continuously
        </div>
      </div>
    </div>

    {/* ================================================================ */}
    {/* PROJECT MODAL */}
    {/* ================================================================ */}

    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
  </section>
);
};
