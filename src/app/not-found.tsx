"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Home, Compass } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/shared/PageHero';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Page Not Found"
        description="The coordinate or blueprint you are searching for does not exist in our infrastructure database."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "404 Error", href: "/404" }
        ]}
        backgroundImage="/images/about/about-stats-bg.webp"
      />

      <section className="py-24 bg-background text-center flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        <Container>
          <div className="max-w-md mx-auto space-y-8 flex flex-col items-center">
            {/* Animated Compass Icon */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="w-24 h-24 bg-secondary/30 rounded-full flex items-center justify-center border border-border text-accent shadow-soft relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                <Compass size={48} />
              </motion.div>
            </motion.div>

            <div className="space-y-4">
              <h2 className="text-4xl font-heading font-extrabold text-primary tracking-tight">
                Lost in Coordinates?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                The page you are looking for may have been moved, deleted, or the URL might be incorrect. Let us guide you back to stable ground.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link
                href="/"
                className={cn(
                  buttonVariants.base,
                  buttonVariants.variants.default,
                  buttonVariants.sizes.default,
                  "gap-2 shadow-soft cursor-pointer"
                )}
              >
                <Home size={18} />
                <span>Return Home</span>
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants.base,
                  buttonVariants.variants.outline,
                  buttonVariants.sizes.default,
                  "gap-2 cursor-pointer"
                )}
              >
                <span>View Services</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
