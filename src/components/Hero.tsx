import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight, Camera } from 'lucide-react';

interface HeroProps {
  onOpenPhotoModal: () => void;
  customPhoto: string | null;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenPhotoModal,
  customPhoto,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  const { scrollY } = useScroll();

  const heroOpacity = useTransform(
    scrollY,
    [0, 500],
    [1, 0]
  );

  const heroScale = useTransform(
    scrollY,
    [0, 500],
    [1, 0.96]
  );

  const heroY = useTransform(
    scrollY,
    [0, 500],
    [0, 100]
  );

  // --------------------------------------------------
  // Mouse Parallax
  // --------------------------------------------------

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!containerRef.current) return;

    const { innerWidth, innerHeight } = window;

    const x =
      (e.clientX - innerWidth / 2) /
      (innerWidth / 2);

    const y =
      (e.clientY - innerHeight / 2) /
      (innerHeight / 2);

    setMousePos({
      x: x * 12,
      y: y * 10,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({
      x: 0,
      y: 0,
    });
  };

  // --------------------------------------------------
  // Scroll
  // --------------------------------------------------

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const topOffset = 80;

      const pos =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        topOffset;

      window.scrollTo({
        top: pos,
        behavior: 'smooth',
      });
    }
  };

  // --------------------------------------------------
  // Default Photo
  // --------------------------------------------------

const photoSrc = customPhoto || '/masud.png';
  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  return (
    <section
      ref={containerRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        min-h-screen
        w-full
        flex
        flex-col
        justify-between
        overflow-hidden
        bg-[#030712]
        pt-28
        pb-12
        select-none
      "
    >

      {/* ==================================================
          BACKGROUND LIGHT EFFECTS
      ================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >

        {/* Blue Glow */}

        <div
          className="
            absolute
            top-1/4
            right-1/4
            w-[600px]
            h-[600px]
            rounded-full
            bg-blue-600/10
            blur-[150px]
            transition-transform
            duration-700
            ease-out
          "
          style={{
            transform: `
              translate3d(
                ${-mousePos.x * 1.5}px,
                ${-mousePos.y * 1.5}px,
                0
              )
            `,
          }}
        />

        {/* Cyan Glow */}

        <div
          className="
            absolute
            bottom-1/3
            left-10
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-500/10
            blur-[140px]
            transition-transform
            duration-700
            ease-out
          "
          style={{
            transform: `
              translate3d(
                ${mousePos.x * 1.2}px,
                ${mousePos.y * 1.2}px,
                0
              )
            `,
          }}
        />

        {/* Cinematic Light Ray */}

        <div
          className="
            absolute
            -top-40
            right-1/3
            w-[1px]
            h-[120vh]
            bg-gradient-to-b
            from-blue-500/20
            via-white/[0.05]
            to-transparent
            rotate-[25deg]
            blur-[1px]
          "
        />

        {/* Extra Right Glow */}

        <div
          className="
            absolute
            top-1/2
            right-[-150px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-500/[0.07]
            blur-[130px]
          "
        />

      </motion.div>


      {/* ==================================================
          MAIN HERO FRAME
      ================================================== */}

      <motion.div
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-12
          flex-1
          flex
          flex-col
          justify-center
        "
      >

        {/* ==================================================
            GIANT BACKGROUND TYPOGRAPHY
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.95,
          }}
          animate={{
            opacity: 0.18,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            inset-x-0
            top-1/2
            -translate-y-1/2
            flex
            flex-col
            items-center
            justify-center
            text-center
            pointer-events-none
            z-0
          "
        >
          <span
            className="
              font-display
              font-black
              text-[22vw]
              sm:text-[20vw]
              leading-[0.8]
              tracking-tighter
              text-transparent
              bg-clip-text
              bg-gradient-to-b
              from-white
              to-white/10
              uppercase
            "
          >
            MS MASUD
          </span>
        </motion.div>


        {/* ==================================================
            HERO GRID
        ================================================== */}

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            items-center
            min-h-[65vh]
          "
        >

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              lg:col-span-7
              flex
              flex-col
              justify-center
              items-start
              pt-6
              lg:pt-0
            "
          >

            {/* Availability Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1.8,
              }}
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1
                rounded-full
                bg-white/[0.04]
                border
                border-white/[0.1]
                text-xs
                font-mono
                text-neutral-300
                mb-6
                backdrop-blur-md
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-emerald-400
                  animate-pulse
                "
              />

              <span
                className="
                  tracking-wider
                  uppercase
                  text-[11px]
                "
              >
                Available for Freelance Projects
              </span>
            </motion.div>


            {/* Main Title */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-display
                font-black
                text-5xl
                sm:text-7xl
                lg:text-8xl
                tracking-tight
                text-white
                uppercase
                leading-[0.9]
                mb-4
              "
            >
              MS MASUD
            </motion.h1>


            {/* Profession */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-6"
            >
              <h2
                className="
                  font-mono
                  text-base
                  sm:text-xl
                  lg:text-2xl
                  font-bold
                  uppercase
                  tracking-widest
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-blue-400
                  via-cyan-300
                  to-white
                "
              >
                FULL STACK WEB DEVELOPER
              </h2>
            </motion.div>


            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 2.5,
              }}
              className="
                text-lg
                sm:text-xl
                text-neutral-300
                max-w-xl
                font-normal
                leading-relaxed
                mb-8
              "
            >
              I build modern websites, SaaS products
              and AI-powered digital experiences.
            </motion.p>


            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 2.7,
              }}
              className="
                flex
                flex-wrap
                items-center
                gap-4
              "
            >

              {/* Explore */}

              <button
                onClick={() =>
                  scrollToSection('projects')
                }
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  py-3.5
                  rounded-full
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-black
                  bg-white
                  hover:bg-neutral-200
                  transition-all
                  duration-300
                  shadow-xl
                  shadow-white/10
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  cursor-pointer
                "
              >
                <span>
                  Explore My Work
                </span>

                <ArrowDown
                  className="
                    w-3.5
                    h-3.5
                    text-black
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                />
              </button>


              {/* Contact */}

              <button
                onClick={() =>
                  scrollToSection('contact')
                }
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-full
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-white
                  bg-white/[0.06]
                  hover:bg-white/[0.12]
                  border
                  border-white/[0.15]
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  cursor-pointer
                "
              >
                <span>
                  Let's Talk
                </span>

                <ArrowUpRight
                  className="
                    w-3.5
                    h-3.5
                    text-blue-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </button>

            </motion.div>

          </div>


          {/* ==================================================
              RIGHT — REAL PORTRAIT
          ================================================== */}

          <div
            className="
              lg:col-span-5
              relative
              flex
              justify-center
              items-center
              h-[460px]
              sm:h-[520px]
              lg:h-[580px]
            "
          >

            {/* Portrait Parallax */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                filter: 'blur(10px)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
              }}
              transition={{
                duration: 1.3,
                delay: 1.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                transform: `
                  perspective(1000px)
                  rotateY(${mousePos.x * 0.25}deg)
                  rotateX(${-mousePos.y * 0.25}deg)
                  translate3d(
                    ${mousePos.x}px,
                    ${mousePos.y}px,
                    0
                  )
                `,
                transition:
                  'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="
                relative
                w-full
                max-w-[460px]
                h-full
                flex
                items-end
                justify-center
              "
            >

              {/* ==================================================
                  PORTRAIT GLOW
              ================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-blue-600/25
                  via-cyan-400/10
                  to-transparent
                  rounded-full
                  blur-3xl
                  pointer-events-none
                "
              />

              {/* Extra Behind-Head Glow */}

              <div
                className="
                  absolute
                  top-[15%]
                  right-[15%]
                  w-72
                  h-72
                  rounded-full
                  bg-blue-500/15
                  blur-[90px]
                  pointer-events-none
                "
              />


              {/* ==================================================
                  PHOTO CONTAINER
              ================================================== */}

              <div
                className="
                  relative
                  w-full
                  h-full
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
              >

                {/* REAL PHOTO */}

                <img
                  src={photoSrc}
                  alt="MS Masud — Full Stack Web Developer"
                  className="
                    relative
                    z-10
                    w-full
                    h-full
                    max-w-[460px]
                    object-contain
                    object-center
                    filter
                    contrast-[1.05]
                    brightness-[1.03]
                    drop-shadow-[0_20px_50px_rgba(59,130,246,0.35)]
                    transition-transform
                    duration-700
                  "
                />

                {/* Bottom Blue Reflection */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    -translate-x-1/2
                    w-[70%]
                    h-24
                    bg-blue-500/20
                    blur-[70px]
                    pointer-events-none
                    z-0
                  "
                />

              </div>


              {/* ==================================================
                  FLOATING LABEL — AI
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 2.3,
                }}
                className="
                  absolute
                  top-12
                  -left-6
                  px-3
                  py-1.5
                  rounded-full
                  bg-slate-900/80
                  border
                  border-white/[0.12]
                  backdrop-blur-md
                  shadow-xl
                  text-[11px]
                  font-mono
                  tracking-wider
                  text-cyan-300
                  z-20
                "
                style={{
                  transform: `
                    translate3d(
                      ${-mousePos.x * 0.4}px,
                      ${-mousePos.y * 0.4}px,
                      0
                    )
                  `,
                }}
              >
                AI & SAAS
              </motion.div>


              {/* ==================================================
                  FLOATING LABEL — REACT
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 2.5,
                }}
                className="
                  absolute
                  top-1/3
                  -right-8
                  px-3
                  py-1.5
                  rounded-full
                  bg-slate-900/80
                  border
                  border-white/[0.12]
                  backdrop-blur-md
                  shadow-xl
                  text-[11px]
                  font-mono
                  tracking-wider
                  text-blue-400
                  z-20
                "
                style={{
                  transform: `
                    translate3d(
                      ${mousePos.x * 0.5}px,
                      ${mousePos.y * 0.5}px,
                      0
                    )
                  `,
                }}
              >
                NEXT.JS • REACT
              </motion.div>


              {/* ==================================================
                  FLOATING LABEL — BACKEND
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 2.7,
                }}
                className="
                  absolute
                  bottom-20
                  -left-8
                  px-3
                  py-1.5
                  rounded-full
                  bg-slate-900/80
                  border
                  border-white/[0.12]
                  backdrop-blur-md
                  shadow-xl
                  text-[11px]
                  font-mono
                  tracking-wider
                  text-neutral-300
                  z-20
                "
                style={{
                  transform: `
                    translate3d(
                      ${-mousePos.x * 0.6}px,
                      ${-mousePos.y * 0.6}px,
                      0
                    )
                  `,
                }}
              >
                NODE • SUPABASE
              </motion.div>


              {/* ==================================================
                  PHOTO BUTTON
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-2
                  z-30
                "
              >
                <button
                  onClick={onOpenPhotoModal}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    px-3
                    py-1
                    rounded-full
                    bg-black/60
                    border
                    border-white/[0.1]
                    hover:border-blue-400/50
                    backdrop-blur-md
                    text-[11px]
                    font-mono
                    text-neutral-400
                    hover:text-white
                    transition-all
                    cursor-pointer
                  "
                >
                  <Camera
                    className="
                      w-3
                      h-3
                      text-blue-400
                      group-hover:scale-110
                      transition-transform
                    "
                  />

                  <span>
                    {customPhoto
                      ? 'Change My Photo'
                      : 'Upload My Real Photo'}
                  </span>
                </button>
              </div>

            </motion.div>

          </div>

        </div>

      </motion.div>


      {/* ==================================================
          SCROLL INDICATOR
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 2.8,
        }}
        className="
          relative
          z-10
          w-full
          flex
          flex-col
          items-center
          justify-center
          gap-2
          pt-4
        "
      >

        <span
          className="
            text-[10px]
            font-mono
            uppercase
            tracking-[0.25em]
            text-neutral-500
          "
        >
          Scroll to explore
        </span>

        <div
          className="
            w-[1px]
            h-9
            bg-neutral-800
            relative
            overflow-hidden
          "
        >
          <div
            className="
              w-full
              h-1/2
              bg-blue-500
              animate-pulse
            "
          />
        </div>

      </motion.div>

    </section>
  );
};
