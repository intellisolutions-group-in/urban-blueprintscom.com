"use client";
import React from 'react';
import Link from 'next/link';
import { Milestone, Waves, Leaf, Building2, Mountain, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { OptimizedImage } from '@/components/shared/OptimizedImage';
import { motion, useReducedMotion } from 'framer-motion';

const services = [
  {
    icon: Milestone,
    title: 'Transportation Engineering',
    description: 'Bespoke planning, geometric design, and structural analysis of high-volume expressways, interchanges, transit corridors, and arterial highways.',
    href: '/services/transportation-engineering',
    color: 'from-blue-500 to-cyan-500 text-white',
    tags: ['Highways', 'Urban Planning', 'Traffic Systems'],
    image: '/images/services/transportation/extra/hero-transportation-new.jpg'
  },
  {
    icon: Building2,
    title: 'Structural Engineering',
    description: 'Elite analysis and detailed design of complex multi-story towers, bridge structures, retention arches, and seismic-resilient systems.',
    href: '/services/structural-engineering',
    color: 'from-orange-500 to-red-500 text-white',
    tags: ['Bridges', 'High-rises', 'Seismic Design'],
    image: '/images/services/structural/structural-hero-pure.webp'
  },
  {
    icon: Waves,
    title: 'Water Resources Engineering',
    description: 'Advanced hydrological systems, flood mitigation, drainage canals, stormwater networks, and wastewater treatment infrastructure.',
    href: '/services/water-resources-engineering',
    color: 'from-cyan-500 to-teal-500 text-white',
    tags: ['Hydrology', 'Canal Systems', 'Drainage'],
    image: '/images/services/water-resources/hero-water.webp'
  },
  {
    icon: Leaf,
    title: 'Environmental Engineering',
    description: 'Eco-conscious design, environmental impact assessments (EIA), sustainable site planning, and green infrastructure integration.',
    href: '/services/environmental-engineering',
    color: 'from-emerald-500 to-green-500 text-white',
    tags: ['EIA Assessments', 'Sustainability', 'Green Infrastructure'],
    image: '/images/services/environmental/hero-environmental.webp'
  },
  {
    icon: Mountain,
    title: 'Geotechnical Engineering',
    description: 'Subsurface drilling investigation, structural foundations, slope stability analysis, earth retention, and soil stabilization design.',
    href: '/services/geotechnical-engineering',
    color: 'from-amber-500 to-yellow-500 text-white',
    tags: ['Foundations', 'Soil Mechanics', 'Retaining Walls'],
    image: '/images/services/geotechnical/hero-geotechnical-new.webp'
  }
];

export function Services() {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  const imageMaskVariants = {
    hidden: { clipPath: "inset(0% 100% 0% 0%)" },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
    }
  };

  const iconVariants = {
    initial: { y: 0 },
    hover: {
      y: [0, -6, 0],
      transition: {
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const tagContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 5 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="services-section" className="py-24 bg-background relative overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03] pointer-events-none -z-20"
        style={{ backgroundImage: `url('/images/home/services-bg.webp')` }}
      />

      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/50 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container>
        <div className="flex flex-col items-center mb-16">
          <SectionHeading
            title="Core Engineering Disciplines"
            subtitle="We deliver highly specialized, multidisciplinary engineering services covering the entire lifecycle of capital projects."
            alignment="center"
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              if (reducedMotion) return;
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const xc = rect.width / 2;
              const yc = rect.height / 2;
              const rx = ((yc - y) / yc) * 4; // Max 4 degrees
              const ry = ((x - xc) / xc) * 4; // Max 4 degrees

              card.style.setProperty('--rx', `${rx}deg`);
              card.style.setProperty('--ry', `${ry}deg`);
            };

            const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
              if (reducedMotion) return;
              const card = e.currentTarget;
              card.style.setProperty('--rx', '0deg');
              card.style.setProperty('--ry', '0deg');
            };

            return (
              <motion.div
                key={service.title}
                variants={reducedMotion ? {} : cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="w-full h-full"
              >
                {/* 3D Perspective Card Inner Wrapper */}
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="group h-full flex flex-col justify-between rounded-[var(--radius-xl)] bg-background border border-border shadow-[var(--shadow-soft)] hover:shadow-2xl hover:[--ty:-16px] hover:[--s:1.03] transition-all duration-300 relative overflow-hidden"
                  style={{
                    transform: reducedMotion
                      ? 'none'
                      : 'perspective(1000px) translateY(var(--ty, 0px)) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) scale(var(--s, 1))',
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center bottom',
                    transition: reducedMotion
                      ? 'none'
                      : 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.25s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                >
                  {/* Left-to-Right Premium Brand Accent Gradient Sweep Overlay */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[var(--radius-xl)] z-0">
                    {/* Highly visible Metallic Bronze gradient sweep from left to right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/15 to-accent/5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 will-change-transform" />

                    {/* Scanning scanner light sweeping simultaneously */}
                    <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-sweep z-10" />

                    {/* GPU-Accelerated bottom scanning border line reveal in brand gold */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-[#fcd34d] to-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 will-change-transform" />
                  </div>

                  {/* Image Thumbnail - Image reveal animation matches perfectly */}
                  <div className="w-full h-48 overflow-hidden relative">
                    <motion.div
                      className="w-full h-full"
                      variants={reducedMotion ? {} : imageMaskVariants}
                    >
                      <OptimizedImage
                        src={service.image}
                        alt={service.title}
                        containerClassName="h-full w-full"
                        aspectRatio="auto"
                        className="transform group-hover:scale-106 transition-transform duration-700 w-full h-full object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent pointer-events-none z-10" />

                    {/* Icon floating on image with bobbing & hover scaling micro-interaction */}
                    <motion.div
                      variants={reducedMotion ? {} : iconVariants}
                      className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-20`}
                    >
                      <Icon size={24} />
                    </motion.div>
                  </div>

                  <div className="p-8 pt-6 flex-grow flex flex-col justify-between z-10">
                    <div>
                      {/* Title with subtle hover translation highlight - transitioned to brand accent color */}
                      <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      {/* Staggered tags */}
                      <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        variants={tagContainerVariants}
                      >
                        {service.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            variants={reducedMotion ? {} : tagVariants}
                            className="text-xs bg-secondary text-secondary-foreground font-medium px-2.5 py-1 rounded-[var(--radius-sm)]"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>

                      {/* Action Link with advanced sliding arrow micro-interaction - color aligned to brand accent */}
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors"
                      >
                        <span>Explore Projects</span>
                        <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
