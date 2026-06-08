"use client";
import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Box, ShieldCheck, Leaf, Compass } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const coreAdvantages = [
  {
    icon: Box,
    title: 'Advanced BIM & Digital Twins',
    description: 'We construct a complete virtual prototype of every structure prior to breaking ground, detecting 99.8% of structural conflicts early and optimizing construction logistics.'
  },
  {
    icon: ShieldCheck,
    title: 'Safety-First Site Integrity',
    description: 'Our certified engineers and site inspectors implement robust safety protocols, boasting a zero-accident record across over 150 complex capital builds.'
  },
  {
    icon: Leaf,
    title: 'Carbon-Neutral Infrastructure',
    description: 'We specify low-carbon concrete mixes, optimize structural volumes to reduce material waste, and design state-of-the-art rainwater recycling and green roofs.'
  },
  {
    icon: Compass,
    title: 'Precision Structural Rigor',
    description: 'Utilizing finite-element stress analysis (FEA) and geotechnical boring surveys to guarantee structural foundations designed to last centuries.'
  }
];

export function WhyChooseUs() {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const advantageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const barVariants = (width: string) => ({
    hidden: { width: "0%" },
    visible: {
      width: width,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
    }
  });

  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background visual gradients */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Visual Showcase (BIM Simulation) */}
          <div className="lg:col-span-5 order-last lg:order-first">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              animate={reducedMotion ? {} : { y: [-6, 6, -6] }}
              style={{ originY: 0.5 }}
              {...(reducedMotion ? {} : {
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }
                }
              })}
              className="relative"
            >
              {/* Glowing visual backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/25 to-blue-500/25 rounded-3xl blur-2xl -z-10" />

              {/* Advanced BIM Dashboard card mock */}
              <div className="p-8 rounded-[var(--radius-xl)] bg-primary text-white border border-white/10 shadow-[var(--shadow-float)] relative overflow-hidden min-h-[420px] sm:min-h-[480px] flex flex-col justify-between">
                {/* Background BIM Dashboard Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none z-0 mix-blend-luminosity"
                  style={{ backgroundImage: `url('/images/about/about-bim-clash.webp')` }}
                />
                
                {/* SVG Blueprint matrix drawing overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-0" viewBox="0 0 350 480" fill="none">
                  <motion.path
                    d="M 20 20 L 330 20 L 330 460 L 20 460 Z M 20 120 L 330 120 M 20 240 L 330 240 M 20 360 L 330 360 M 110 20 L 110 460 M 220 20 L 220 460"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "linear" }}
                  />
                  {/* Blinking scanning coordinate checkpoints */}
                  <motion.circle
                    cx="110"
                    cy="240"
                    r="4"
                    fill="var(--accent)"
                    animate={{ scale: [1, 2.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="220"
                    cy="120"
                    r="4"
                    fill="#3b82f6"
                    animate={{ scale: [1, 2.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>

                <div className="z-10 relative">
                  {/* Badge */}
                  <span className="inline-block bg-accent/25 border border-accent/40 text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-[var(--radius-sm)] uppercase tracking-wider mb-6">
                    Next-Gen Workflow
                  </span>

                  <h3 className="text-2xl font-heading font-extrabold mb-4 tracking-tight leading-snug">
                    Precision Clash Detection & 3D Analytics
                  </h3>

                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                    Every pipeline, structural support column, and ventilation duct is mapped inside our centralized coordinate matrix, reducing field adjustment costs by over 30%.
                  </p>
                </div>

                {/* Micro Stats Progress Indicators inside Card */}
                <div className="space-y-4 pt-6 border-t border-white/10 z-10 relative">
                  {[
                    { label: 'Conflict Detection Rate', value: '99.8%', width: '99.8%' },
                    { label: 'Average Construction Acceleration', value: '18%', width: '18%' },
                    { label: 'Field Rework Cost Reduction', value: '32%', width: '32%' }
                  ].map((stat) => (
                    <div key={stat.label} className="space-y-1 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 font-light">{stat.label}</span>
                        <span className="font-heading font-bold text-accent">{stat.value}</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
                        <motion.div
                          variants={reducedMotion ? {} : barVariants(stat.width)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="h-full bg-accent rounded-full"
                          style={reducedMotion ? { width: stat.width } : {}}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Breakdown List */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal direction="up">
              <SectionHeading
                title="Why Leading Developers Trust Urban Blueprints"
                subtitle="We combine top-tier technical expertise with innovative digital processes to ensure that project risk is minimized, timelines are met, and budgets are optimized."
                alignment="left"
                className="mb-6"
              />
            </ScrollReveal>

            {/* List with horizontal shifts */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {coreAdvantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <motion.div
                    key={advantage.title}
                    variants={advantageVariants}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    className="space-y-3 p-4 rounded-xl border border-transparent hover:border-border hover:bg-background/40 transition-all duration-300 cursor-default"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <Icon size={20} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-heading font-bold text-primary">
                      {advantage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {advantage.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
