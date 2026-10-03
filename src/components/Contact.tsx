import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, Send, AlertCircle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  selectedService: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Business Website');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedService) {
      setProjectType(selectedService);
    }
  }, [selectedService]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatusMessage('Please fill in your name, email, and project message.');
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry: ${projectType} — ${name}`);
    const body = encodeURIComponent(
      `Hello MS Masud,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nProject Scope & Message:\n${message}\n\nBest regards,\n${name}`
    );

    setStatusMessage('Opening your email client to send directly to itsmasud25@gmail.com...');
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const projectTypes = [
    'Business Website',
    'SaaS Product',
    'Web Application',
    'AI-Powered Product',
    'E-Commerce',
    'Website Redesign',
    'Custom Architecture',
  ];

  return (
    <section id="contact" className="py-32 bg-[#030712] relative overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="pb-16 border-b border-white/[0.08] mb-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 mb-3 flex items-center gap-2">
              <span>08</span>
              <span className="text-neutral-600">/</span>
              <span>Contact</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase text-white">
              LET'S BUILD SOMETHING
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-4 md:mt-0 uppercase tracking-widest">
            Direct Developer Partnership
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Status Pill */}
            <div className="p-8 rounded-3xl bg-[#0b1120]/50 border border-white/[0.08]">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Available for freelance projects
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Fast Turnarounds. High Quality.
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Ready to take on new SaaS builds, responsive corporate websites, and AI integrations with direct, zero-overhead collaboration.
              </p>
            </div>

            {/* Direct Email Card with 1-Click Copy */}
            <div className="p-8 rounded-3xl bg-[#0b1120]/50 border border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-black border border-white/[0.08]">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="font-mono text-sm text-white truncate select-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                  title="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <p className="text-xs font-mono text-emerald-400 mt-2">
                  Email copied to clipboard!
                </p>
              )}

              <div className="mt-4 pt-4 border-t border-white/[0.05]">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:underline"
                >
                  <span>Open in your email app</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Johnson"
                  className="w-full px-5 py-4 rounded-2xl bg-[#0b1120]/60 border border-white/[0.1] text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. alex@startup.com"
                  className="w-full px-5 py-4 rounded-2xl bg-[#0b1120]/60 border border-white/[0.1] text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Project Type
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl bg-[#0b1120] border border-white/[0.1] text-white focus:outline-none focus:border-blue-500 transition-colors text-sm cursor-pointer"
                >
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-neutral-900 text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Project Details *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your product, objectives, timeline, or scope..."
                  className="w-full px-5 py-4 rounded-2xl bg-[#0b1120]/60 border border-white/[0.1] text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-y"
                />
              </div>

              {statusMessage && (
                <div className="p-4 rounded-2xl bg-black border border-blue-500/40 text-xs text-blue-300 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all duration-300 shadow-xl shadow-white/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5 text-black" />
              </button>

              <p className="text-[11px] font-mono text-neutral-500 text-center">
                This form prepares your message and opens your email application addressed to itsmasud25@gmail.com.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
