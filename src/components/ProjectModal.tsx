import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  Check,
  Layers,
  Cpu,
  ArrowUpRight,
  Globe,
  Sparkles,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  /* Lock body scroll while modal is open */
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [project]);

  /* ESC to close */
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-black/75
        p-4 sm:p-6
        backdrop-blur-xl
        animate-in fade-in duration-300
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* ================= AMBIENT GLOW ================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.055] blur-[160px]" />

      {/* ================= MODAL ================= */}

      <div
        className="
          relative
          flex
          max-h-[92vh]
          w-full
          max-w-4xl
          flex-col
          overflow-hidden
          rounded-[2rem]
          border border-white/[0.10]
          bg-[#060a12]/95
          text-slate-100
          shadow-[0_40px_140px_rgba(0,0,0,0.7)]
          backdrop-blur-2xl
          animate-in
          zoom-in-[0.97]
          duration-300
        "
      >
        {/* Top accent */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-blue-400/80 to-transparent" />

        {/* ================= HEADER ================= */}

        <div className="relative border-b border-white/[0.06] px-6 py-6 sm:px-8">

          <div className="flex items-start justify-between gap-6">

            <div className="min-w-0 flex-1">

              {/* Category */}
              <div
                className="
                  mb-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border border-blue-400/15
                  bg-blue-500/[0.07]
                  px-3 py-1.5
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-blue-400
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                {project.category}
              </div>

              {/* Title */}
              <h3
                className="
                  max-w-3xl
                  font-display
                  text-3xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.035em]
                  text-white
                  sm:text-5xl
                "
              >
                {project.name}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-neutral-400
                  sm:text-base
                "
              >
                {project.description}
              </p>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="
                flex
                h-10 w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                border border-white/[0.07]
                bg-white/[0.025]
                text-neutral-500
                transition-all duration-300
                hover:border-white/[0.14]
                hover:bg-white/[0.07]
                hover:text-white
              "
              aria-label="Close project dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Project meta */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-600">
              <Globe className="h-3.5 w-3.5 text-blue-400/70" />
              Digital Product
            </div>

            <span className="h-1 w-1 rounded-full bg-neutral-700" />

            <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-600">
              Case Study
            </div>
          </div>
        </div>

        {/* ================= SCROLLABLE CONTENT ================= */}

        <div className="overflow-y-auto overscroll-contain">

          <div className="px-6 py-6 sm:px-8 sm:py-8">

            {/* ================= FULL DESCRIPTION ================= */}

            {project.fullDescription && (
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/[0.018]
                  p-5 sm:p-6
                "
              >
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-400/70 via-blue-400/20 to-transparent" />

                <div className="flex gap-4">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

                  <p className="text-sm leading-7 text-neutral-400">
                    {project.fullDescription}
                  </p>
                </div>
              </div>
            )}

            {/* ================= HIGHLIGHTS ================= */}

            {project.highlights &&
              project.highlights.length > 0 && (
                <section className="mt-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-blue-400">
                      01
                    </span>

                    <div className="h-px w-8 bg-white/10" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-600">
                      Project Highlights
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {project.highlights.map((highlight, index) => (
                      <div
                        key={`${highlight.label}-${index}`}
                        className="
                          group
                          rounded-2xl
                          border border-white/[0.07]
                          bg-white/[0.018]
                          p-5
                          transition-all duration-300
                          hover:-translate-y-1
                          hover:border-blue-400/20
                          hover:bg-blue-500/[0.025]
                        "
                      >
                        <div className="mb-6 flex items-center justify-between">
                          <span className="font-mono text-[9px] text-neutral-700">
                            0{index + 1}
                          </span>

                          <ArrowUpRight
                            className="
                              h-3.5 w-3.5
                              text-neutral-700
                              transition-all
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                              group-hover:text-blue-400
                            "
                          />
                        </div>

                        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-600">
                          {highlight.label}
                        </p>

                        <p className="mt-1.5 font-display text-sm font-bold text-white">
                          {highlight.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            {/* ================= FEATURES ================= */}

            <section className="mt-9">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-blue-400">
                  02
                </span>

                <div className="h-px w-8 bg-white/10" />

                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-600">
                  Platform Features
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <div
                    key={feature}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border border-white/[0.06]
                      bg-white/[0.015]
                      px-4 py-3
                      transition-all duration-300
                      hover:border-blue-400/20
                      hover:bg-blue-500/[0.025]
                    "
                  >
                    <div
                      className="
                        flex
                        h-6 w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border border-blue-400/15
                        bg-blue-500/[0.08]
                      "
                    >
                      <Check className="h-3 w-3 text-blue-400" />
                    </div>

                    <span className="text-xs leading-5 text-neutral-300">
                      {feature}
                    </span>

                    <span className="ml-auto font-mono text-[8px] text-neutral-800">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= TECH STACK ================= */}

            <section className="mt-9">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-blue-400">
                  03
                </span>

                <div className="h-px w-8 bg-white/10" />

                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-600">
                  Technologies
                </span>
              </div>

              <div
                className="
                  rounded-2xl
                  border border-white/[0.06]
                  bg-white/[0.015]
                  p-5
                "
              >
                <div className="mb-4 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-blue-400" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
                    Built With
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-lg
                        border border-white/[0.07]
                        bg-white/[0.025]
                        px-3 py-2
                        font-mono
                        text-[10px]
                        text-neutral-400
                        transition-all duration-300
                        hover:border-blue-400/25
                        hover:bg-blue-500/[0.06]
                        hover:text-blue-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* System Footer */}
            <div
              className="
                mt-9
                flex
                items-center
                justify-between
                border-t border-white/[0.06]
                pt-5
              "
            >
              <div className="flex items-center gap-2">
                <Cpu className="h-3.5 w-3.5 text-neutral-700" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-700">
                  Product Architecture
                </span>
              </div>

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-700">
                MS / PROJECT
              </span>
            </div>
          </div>
        </div>

        {/* ================= ACTION BAR ================= */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            gap-4
            border-t border-white/[0.07]
            bg-black/[0.18]
            px-6 py-4
            backdrop-blur-xl
            sm:px-8
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-xl
              border border-white/[0.07]
              bg-white/[0.025]
              px-4 py-2.5
              font-mono
              text-[9px]
              uppercase
              tracking-[0.15em]
              text-neutral-500
              transition-all duration-300
              hover:border-white/[0.14]
              hover:bg-white/[0.06]
              hover:text-white
            "
          >
            Close
          </button>

          {project.websiteUrl ? (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                inline-flex
                items-center
                gap-2
                overflow-hidden
                rounded-xl
                border border-blue-400/20
                bg-gradient-to-r
                from-blue-500
                to-cyan-400
                px-5 py-2.5
                font-mono
                text-[9px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#020617]
                shadow-[0_10px_30px_rgba(59,130,246,0.16)]
                transition-all duration-300
                hover:from-blue-400
                hover:to-cyan-300
                active:scale-[0.97]
              "
            >
              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  bg-white/20
                  transition-transform duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative">
                Visit Live Website
              </span>

              <ExternalLink
                className="
                  relative
                  h-3.5 w-3.5
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          ) : (
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-600">
              {project.statusText || 'Case Study Coming Soon'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};