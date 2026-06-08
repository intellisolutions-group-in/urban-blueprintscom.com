"use client";
import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout/Container';
import { motion, useReducedMotion } from 'framer-motion';

interface CtaBlockProps {
  title: string;
  description?: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CtaBlock({ 
  title, 
  description, 
  primaryButtonText, 
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref
}: CtaBlockProps) {
  const reducedMotion = useReducedMotion();

  const titleWords = title.split(" ");

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 100 }
    }
  };

  const buttonContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const buttonItemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 }
    }
  };

  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Flowing background gradient sweep (continuous animation) */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #2e1e3b 70%, #0f172a 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={reducedMotion ? {} : {
          backgroundPosition: ["0% 50%", "200% 50%"],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay pointer-events-none z-0"
        style={{ backgroundImage: `url('/images/home/cta-bg.webp')` }}
      />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      {/* Particle vectors overlay */}
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent/20"
              style={{
                top: `${(i * 11 + 23) % 100}%`,
                left: `${(i * 17 + 13) % 100}%`,
              }}
              animate={{
                y: [0, (i % 2 === 0 ? 25 : -25), 0],
                opacity: [0.1, 0.35, 0.1],
              }}
              transition={{
                duration: 9 + (i % 3) * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
      
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Content side with Title Reveal */}
          <div className="max-w-2xl text-center md:text-left">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 tracking-tight leading-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
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
            {description && (
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-primary-foreground/80 mb-0 font-light"
              >
                {description}
              </motion.p>
            )}
          </div>
          
          {/* Action side with Staggered Springs & Depressions */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 shrink-0"
            variants={buttonContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              variants={buttonItemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto"
            >
              <Link 
                href={primaryButtonHref}
                className={cn(buttonVariants.base, buttonVariants.variants.default, buttonVariants.sizes.lg, "w-full sm:w-auto bg-accent hover:bg-accent/90 text-white border-0 flex justify-center items-center shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300")}
              >
                {primaryButtonText}
              </Link>
            </motion.div>
            
            {secondaryButtonText && secondaryButtonHref && (
              <motion.div 
                variants={buttonItemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto"
              >
                <Link 
                  href={secondaryButtonHref}
                  className={cn(buttonVariants.base, buttonVariants.variants.outline, buttonVariants.sizes.lg, "w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary flex justify-center items-center backdrop-blur-sm transition-all duration-300")}
                >
                  {secondaryButtonText}
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
