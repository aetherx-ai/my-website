
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Tools', href: '#tools' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setMobileMenuOpen(false);

    const targetElement = document.querySelector(href);

    if (!targetElement) return;

    const topOffset = 88;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.scrollY - topOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out
          ${
            isScrolled
              ? 'px-4 sm:px-6 lg:px-8 pt-3'
              : 'px-6 sm:px-8 lg:px-12 pt-6'
          }
        `}
      >
        <div
          className={`
            mx-auto max-w-7xl
            transition-all duration-500
            ${
              isScrolled
                ? `
                  rounded-2xl
                  border border-white/[0.09]
                  bg-[#030712]/75
                  backdrop-blur-2xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  px-4 sm:px-5
                `
                : ''
            }
          `}
        >
          <div
            className={`
              flex items-center justify-between
              transition-all duration-500
              ${isScrolled ? 'h-14' : 'h-12'}
            `}
          >

            {/* ================= BRAND ================= */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group relative flex items-center gap-3"
              aria-label="MS Masud Home"
            >
              {/* Logo Mark */}
              <div
                className="
                  relative flex h-8 w-8 items-center justify-center
                  overflow-hidden rounded-lg
                  border border-blue-400/20
                  bg-blue-500/[0.08]
                  transition-all duration-300
                  group-hover:border-blue-400/40
                  group-hover:bg-blue-500/[0.14]
                "
              >
                <span
                  className="
                    font-display text-sm font-black
                    text-white
                  "
                >
                  M
                </span>

                <span
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-blue-400/20
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* Name */}
              <div className="flex items-center gap-2">
                <span
                  className="
                    font-display text-base sm:text-lg
                    font-bold tracking-[-0.02em]
                    text-white
                  "
                >
                  {PERSONAL_INFO.name}
                </span>

                <span
                  className="
                    h-1.5 w-1.5 rounded-full
                    bg-blue-400
                    shadow-[0_0_12px_rgba(96,165,250,0.8)]
                    animate-pulse
                  "
                />
              </div>
            </a>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionKey = link.href.replace('#', '');
                const isActive = activeSection === sectionKey;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) =>
                      handleNavClick(e, link.href)
                    }
                    className={`
                      group relative
                      rounded-lg px-3 py-2
                      font-mono text-[10px]
                      uppercase tracking-[0.16em]
                      transition-all duration-300
                      ${
                        isActive
                          ? 'text-white'
                          : 'text-neutral-500 hover:text-neutral-200'
                      }
                    `}
                  >
                    {/* Hover Background */}
                    <span
                      className="
                        absolute inset-0
                        rounded-lg
                        bg-white/[0.035]
                        opacity-0
                        transition-opacity
                        group-hover:opacity-100
                      "
                    />

                    <span className="relative">
                      {link.label}
                    </span>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        className="
                          absolute bottom-0.5
                          left-1/2
                          h-[2px] w-4
                          -translate-x-1/2
                          rounded-full
                          bg-blue-400
                          shadow-[0_0_10px_rgba(96,165,250,0.8)]
                        "
                        layoutId="navbar-active"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* ================= DESKTOP CTA ================= */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                onClick={(e) =>
                  handleNavClick(e, '#contact')
                }
                className="
                  group relative
                  inline-flex items-center gap-2
                  overflow-hidden
                  rounded-full
                  border border-blue-400/20
                  bg-blue-500/[0.08]
                  px-4 py-2
                  font-mono text-[10px]
                  font-medium uppercase
                  tracking-[0.15em]
                  text-white
                  transition-all duration-300
                  hover:border-blue-400/40
                  hover:bg-blue-500/[0.14]
                  active:scale-95
                "
              >
                {/* Shine */}
                <span
                  className="
                    absolute inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.08]
                    to-transparent
                    transition-transform duration-700
                    group-hover:translate-x-full
                  "
                />

                <span className="relative">
                  Let's Talk
                </span>

                <ArrowUpRight
                  className="
                    relative h-3.5 w-3.5
                    text-blue-400
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen((prev) => !prev)
              }
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-white/[0.08]
                bg-white/[0.025]
                text-neutral-300
                transition-all duration-300
                hover:border-white/[0.15]
                hover:bg-white/[0.06]
                hover:text-white
                md:hidden
              "
              aria-label={
                mobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed inset-0 z-40
          md:hidden
          transition-all duration-500
          ${
            mobileMenuOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="
            absolute inset-0
            bg-black/60
            backdrop-blur-md
          "
        />

        {/* Drawer */}
        <div
          className={`
            absolute left-4 right-4 top-[78px]
            overflow-hidden
            rounded-2xl
            border border-white/[0.09]
            bg-[#070b14]/95
            shadow-[0_30px_100px_rgba(0,0,0,0.6)]
            backdrop-blur-2xl
            transition-all duration-500
            ${
              mobileMenuOpen
                ? 'translate-y-0 scale-100'
                : '-translate-y-4 scale-[0.98]'
            }
          `}
        >
          {/* Drawer Header */}
          <div
            className="
              flex items-center
              justify-between
              border-b border-white/[0.06]
              px-5 py-4
            "
          >
            <div>
              <p
                className="
                  font-mono text-[9px]
                  uppercase tracking-[0.25em]
                  text-neutral-600
                "
              >
                Navigation
              </p>

              <p className="mt-1 text-sm font-medium text-white">
                Explore my work
              </p>
            </div>

            <span
              className="
                font-mono text-[9px]
                tracking-wider
                text-blue-400
              "
            >
              06 SECTIONS
            </span>
          </div>

          {/* Links */}
          <div className="p-3">
            {navLinks.map((link, index) => {
              const sectionKey = link.href.replace('#', '');
              const isActive = activeSection === sectionKey;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) =>
                    handleNavClick(e, link.href)
                  }
                  className={`
                    group
                    flex items-center
                    justify-between
                    rounded-xl
                    px-4 py-3.5
                    transition-all duration-300
                    ${
                      isActive
                        ? 'bg-blue-500/[0.08] text-white'
                        : 'text-neutral-400 hover:bg-white/[0.035] hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="
                        font-mono text-[9px]
                        text-neutral-700
                        transition-colors
                        group-hover:text-blue-400
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        font-display text-base
                        font-medium
                      "
                    >
                      {link.label}
                    </span>
                  </div>

                  {isActive ? (
                    <span
                      className="
                        h-1.5 w-1.5
                        rounded-full
                        bg-blue-400
                        shadow-[0_0_10px_rgba(96,165,250,0.8)]
                      "
                    />
                  ) : (
                    <ArrowUpRight
                      className="
                        h-4 w-4
                        text-neutral-700
                        transition-all duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-blue-400
                      "
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="border-t border-white/[0.06] p-4">
            <a
              href="#contact"
              onClick={(e) =>
                handleNavClick(e, '#contact')
              }
              className="
                flex w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-5 py-3.5
                font-display
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_30px_rgba(37,99,235,0.2)]
                transition-all duration-300
                hover:bg-blue-500
                active:scale-[0.98]
              "
            >
              Let's Work Together

              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Footer */}
          <div className="px-5 pb-5">
            <div className="flex items-center justify-between">
              <span
                className="
                  font-mono text-[8px]
                  uppercase tracking-[0.2em]
                  text-neutral-700
                "
              >
                MS MASUD
              </span>

              <span
                className="
                  font-mono text-[8px]
                  uppercase tracking-[0.2em]
                  text-neutral-700
                "
              >
                BUILD / SHIP / SCALE
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
