"use client";
import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Target, Award, Users } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export function About() {
  const reducedMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Parallax scroll on main engineer image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Integrity',
      description: 'We uphold ethical standards in our actions and decisions, ensuring our conduct is always morally sound and aligned with our values.',
      color: 'bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/30'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Our goal is to constantly explore innovative and improved methods to tackle engineering obstacles.',
      color: 'bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/30'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We collaborate closely with clients and partners to accomplish mutual objectives.',
      color: 'bg-amber-50 text-amber-600 border border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30'
    }
  ];

  // Headings word-by-word reveal or staggered reveal
  const titleWords = "Meet the team behind Urban Blueprints".split(" ");

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 14, stiffness: 100 }
    }
  };

  const textBlockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageRevealVariants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)" },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    }
  };

  return (
    <section ref={containerRef} className="py-24 bg-secondary/50 relative overflow-hidden" style={{ position: 'relative' }}>
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              {/* Section Heading word reveal */}
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-primary leading-tight"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } }
                }}
              >
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.p
                variants={textBlockVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-accent font-semibold text-sm uppercase tracking-wider"
              >
                A group of experts passionate about work.
              </motion.p>
            </div>

            <motion.p 
              variants={textBlockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-muted-foreground text-base leading-relaxed font-light mb-6"
            >
              At Urban Blueprints, we are driven by our passion to build the infrastructure that connects our communities and shapes the world around us. Our team comprises experienced engineers and dedicated professionals who offer comprehensive civil engineering services covering the full lifetime of the project. We strive to provide our clients exceptional service, quality work, and innovative solutions that meet their unique needs and exceed their expectations.
            </motion.p>

            {/* Structured Features - staggered value cards with soft hover elevation */}
            <motion.div 
              className="space-y-6"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.title} 
                    variants={cardVariants}
                    whileHover={{ 
                      y: -4, 
                      scale: 1.01,
                      boxShadow: "0 12px 30px -10px rgba(0,0,0,0.08)",
                      borderColor: "rgba(180, 142, 75, 0.3)"
                    }}
                    className="flex gap-4 p-4 rounded-[var(--radius-xl)] bg-background border border-border shadow-[var(--shadow-soft)] transition-all duration-300 cursor-default"
                  >
                    <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-base font-heading font-semibold text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Visual Grid */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* SVG Coordinate Line Drawing Animation Overlay */}
              <svg className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] pointer-events-none z-10 opacity-30" viewBox="0 0 500 400" fill="none">
                <motion.path
                  d="M 20 40 L 480 40 L 480 360 L 20 360 Z"
                  stroke="#b48e4b"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 60 10 L 60 390 M 10 340 L 490 340"
                  stroke="#3b82f6"
                  strokeWidth="0.75"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                />
                <circle cx="60" cy="40" r="3.5" fill="#b48e4b" />
                <circle cx="480" cy="340" r="3.5" fill="#3b82f6" />
                <text x="70" y="32" fill="#b48e4b" fontSize="9" fontFamily="monospace">COORD_X_REF_01 // 51.5074 N</text>
                <text x="350" y="332" fill="#3b82f6" fontSize="9" fontFamily="monospace">SYS_CALIBRATION_OK</text>
              </svg>

              {/* Outer frame shadow decorative backdrop */}
              <div className="absolute inset-4 -right-2 -bottom-2 bg-accent/20 rounded-2xl -z-10 blur-xl animate-[pulse_4s_infinite_ease-in-out]" />

              {/* Main image with clipping mask reveal and subtle scroll parallax */}
              <motion.div 
                variants={reducedMotion ? {} : imageRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative rounded-2xl overflow-hidden shadow-float border-4 border-white aspect-[4/3] sm:aspect-video lg:aspect-[4/3]"
              >
                <motion.div
                  style={{
                    y: reducedMotion ? 0 : imageY,
                    scale: reducedMotion ? 1 : 1.1,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/images/about/about-engineers-site.webp"
                    alt="Civil engineers on site discussing blueprint coordinates"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Badge 1 - Experience */}
              <motion.div
                animate={reducedMotion ? {} : { y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-primary text-white p-4 rounded-xl shadow-lg border border-white/10 backdrop-blur-md flex items-center gap-3.5 max-w-[200px] z-20"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-xl font-heading font-bold leading-none">12+ Years</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mt-1">Global Innovation</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Accreditation */}
              <motion.div
                animate={reducedMotion ? {} : { y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-background text-primary p-4 rounded-[var(--radius-xl)] shadow-[var(--shadow-float)] border border-border flex items-center gap-3.5 max-w-[220px] z-20"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="text-base font-heading font-bold leading-none">ISO 9001:2015</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mt-1">Quality Certified</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
