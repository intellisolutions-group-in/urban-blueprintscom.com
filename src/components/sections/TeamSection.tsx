"use client";
import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Users, Award, BookOpen } from 'lucide-react';

const coreTeamValues = [
  {
    icon: Users,
    title: '45+ Technical Specialists',
    description: 'A diverse group of geotechnical experts, structural designers, and environmental compliance consultants.'
  },
  {
    icon: Award,
    title: 'Acclaimed Engineering Leadership',
    description: 'Our principal directors hold prestigious awards from institutional structural & civil bodies across Europe.'
  },
  {
    icon: BookOpen,
    title: 'Academic R&D Integration',
    description: 'We partner with leading academic research departments to prototype novel composite material designs.'
  }
];

export function TeamSection() {
  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background radial visual light */}
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Descriptive team values */}
          <div className="lg:col-span-6 order-last lg:order-first">
            <ScrollReveal direction="up">
              <SectionHeading
                title="Our Leadership & Engineering Studio"
                subtitle="Urban Blueprints brings together minds trained in structural precision, site coordination, and regulatory excellence, offering unified delivery on complex structural builds."
                alignment="left"
                className="mb-6"
              />
            </ScrollReveal>

            {/* Micro value rows */}
            <div className="space-y-8 pt-4">
              {coreTeamValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <ScrollReveal 
                    key={value.title} 
                    direction="up" 
                    delay={index * 0.1 + 0.15}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-primary mb-1">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        {value.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-impact team/studio image */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={0.2} className="relative">
              {/* Outer decorative glowing layer */}
              <div className="absolute inset-4 -right-2 -bottom-2 bg-gradient-to-tr from-accent/20 to-blue-500/20 rounded-2xl -z-10 blur-xl" />

              {/* Central Studio portrait visual */}
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-float)] border-4 border-white aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                <img
                  src="/images/about/about-leadership-studio.webp"
                  alt="Urban Blueprints executive engineering leadership team meeting in studio"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
