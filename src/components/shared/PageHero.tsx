"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  description: string;
  breadcrumbs: { label: string; href: string }[];
  backgroundImage?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, description, breadcrumbs, backgroundImage, children }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
      {backgroundImage ? (
        <>
          {/* Background Image */}
          <div className="absolute inset-0 transition-transform duration-1000 scale-105 z-0 select-none pointer-events-none">
            <Image
              src={backgroundImage}
              alt={title}
              fill
              priority
              quality={75}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40 z-0" />
        </>
      ) : (
        <>
          {/* Fallback Graphic Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

          {/* Fallback Soft Glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4" />
        </>
      )}

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-8"
          >
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.label}>
                {index > 0 && <ChevronRight size={14} className="text-gray-600" />}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-accent">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
