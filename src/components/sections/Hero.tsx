"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion } from 'framer-motion';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout/Container';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export function Hero() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const subtitleRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    let ctx: any;
    import('gsap').then(({ gsap }) => {
      ctx = gsap.context(() => {
        const headingWords = headingRef.current?.querySelectorAll('.hero-word');
        const subtitleWords = subtitleRef.current?.querySelectorAll('.hero-word');

        if (!headingWords?.length && !subtitleWords?.length) return;

        const tl = gsap.timeline();

        if (headingWords && headingWords.length > 0) {
          gsap.set(headingWords, { opacity: 0, y: 30 });
          tl.to(headingWords, {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.05,
            ease: "power3.out"
          });
        }

        if (subtitleWords && subtitleWords.length > 0) {
          gsap.set(subtitleWords, { opacity: 0, y: 30 });
          tl.to(subtitleWords, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.015,
            ease: "power3.out"
          }, headingWords && headingWords.length > 0 ? "-=0.6" : undefined);
        }
      });
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  // Mouse parallax motion values (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 90 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Map mouse spring coordinates to layers
  const bgXMouse = useTransform(springX, [-1, 1], [-15, 15]);
  const bgYMouse = useTransform(springY, [-1, 1], [-15, 15]);

  // Continuous scroll parallax on background image
  const bgYScroll = useTransform(scrollY, [0, 1000], [0, 200]);

  // Combined background Y positioning
  const bgY = useTransform(() => bgYScroll.get() + bgYMouse.get());

  // Content layers offset for 3D depth card feeling
  const textX = useTransform(springX, [-1, 1], [-8, 8]);
  const textY = useTransform(springY, [-1, 1], [-8, 8]);

  const buttonX = useTransform(springX, [-1, 1], [-12, 12]);
  const buttonY = useTransform(springY, [-1, 1], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion || typeof window === 'undefined' || window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const xVal = (clientX - width / 2) / (width / 2);
    const yVal = (clientY - height / 2) / (height / 2);
    mouseX.set(xVal);
    mouseY.set(yVal);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Main container entrance container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  // Standard slide reveals
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const bulletContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      }
    }
  };

  const buttonSpringVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 90,
      }
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[95vh] flex items-center justify-center bg-primary overflow-hidden pt-24 pb-16"
    >
      {/* Background Image with Dark Parallax Overlay */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          x: reducedMotion ? 0 : bgXMouse,
          y: reducedMotion ? 0 : bgY,
        }}
        initial={reducedMotion ? {} : { scale: 1.15, opacity: 0 }}
        animate={reducedMotion ? {} : { scale: 1.05, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/images/home/home-hero-banner.webp"
          alt="Modern civil engineering structure overlaying city blueprints"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Dynamic Radial Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-0 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30 z-0" />

      {/* Grid Tech Lines Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <Container className="relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              x: reducedMotion ? 0 : textX,
              y: reducedMotion ? 0 : textY,
            }}
          >
            {/* Animated Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-accent-foreground"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Leading Infrastructure Solutions
            </motion.div>

            {/* Breathtaking Headings: Instant loading with beautiful slide reveal */}
            <motion.h1 
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.05]"
            >
              <span>
                {"Engineering Excellence:".split(" ").map((word, idx) => (
                  <React.Fragment key={idx}>
                    <span className="hero-word inline-block">{word}</span>
                    {idx < 1 ? " " : ""}
                  </React.Fragment>
                ))}
              </span>
              <br />
              <span className="text-amber-400">
                {"Solutions for a".split(" ").map((word, idx) => (
                  <React.Fragment key={idx}>
                    <span className="hero-word inline-block text-amber-400">{word}</span>
                    {idx < 2 ? " " : ""}
                  </React.Fragment>
                ))}
              </span>
              <br />
              <span>
                {"Better Tomorrow".split(" ").map((word, idx) => (
                  <React.Fragment key={idx}>
                    <span className="hero-word inline-block">{word}</span>
                    {idx < 1 ? " " : ""}
                  </React.Fragment>
                ))}
              </span>
            </motion.h1>

            {/* Subtitle with delayed fade-up */}
            <motion.p
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed"
            >
              {"Urban Blueprints is a team of experienced and qualified civil engineers committed to providing their clients with high-quality services. We have a proven track record of success in various projects and are committed to meeting the needs of our clients.".split(" ").map((word, idx, arr) => (
                <React.Fragment key={idx}>
                  <span className="hero-word inline-block">{word}</span>
                  {idx < arr.length - 1 ? " " : ""}
                </React.Fragment>
              ))}
            </motion.p>

            {/* Sequential Bullet Highlights */}
            <motion.div
              variants={bulletContainerVariants}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-2"
            >
              {['Safety Excellence', 'BIM & 3D Modeling', 'Sustainability First'].map((item) => (
                <motion.div
                  key={item}
                  variants={bulletVariants}
                  className="flex items-center gap-2 text-sm text-gray-300 font-medium"
                >
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons with Staggered Spring entrances & Multi-layer Parallax */}
            <motion.div
              variants={buttonContainerVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
              style={{
                x: reducedMotion ? 0 : buttonX,
                y: reducedMotion ? 0 : buttonY,
              }}
            >
              <motion.div
                variants={buttonSpringVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/services"
                  className={cn(buttonVariants.base, buttonVariants.variants.default, buttonVariants.sizes.lg, "w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium border-0 shadow-lg shadow-accent/20 group relative overflow-hidden transition-all duration-300")}
                >
                  <span>Explore Services</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                variants={buttonSpringVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className={cn(buttonVariants.base, buttonVariants.variants.outline, buttonVariants.sizes.lg, "w-full sm:w-auto flex items-center justify-center border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-primary hover:border-white transition-all duration-300")}
                >
                  Schedule Consultation
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Dynamic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 cursor-pointer text-gray-400 hover:text-white transition-colors"
          onClick={() => {
            const nextSec = document.getElementById('services-section');
            if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
          <ChevronDown size={18} />
        </motion.div>
      </div>
    </section>
  );
}
