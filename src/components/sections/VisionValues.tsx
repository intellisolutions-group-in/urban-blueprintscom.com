"use client";
import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Leaf, Globe, Layers } from 'lucide-react';

const visionPrinciples = [
  {
    icon: Leaf,
    title: 'Biophilic Integration',
    description: 'We prioritize environmental synthesis, utilizing low-impact materials and active green roofs to merge massive structural builds seamlessly with native ecology.',
    color: 'bg-emerald-50 text-emerald-600 border border-emerald-100'
  },
  {
    icon: Globe,
    title: 'Socio-Economic Resiliency',
    description: 'Our designs calculate regional growth requirements decades in advance, fostering community connectivity and minimizing long-term public maintenance expenditures.',
    color: 'bg-blue-50 text-blue-600 border border-blue-100'
  },
  {
    icon: Layers,
    title: 'Material Optimization',
    description: 'Through rigorous finite-element simulations, we strip carbon-dense over-engineering from projects, optimizing cement and steel volumes by up to 25%.',
    color: 'bg-indigo-50 text-indigo-600 border border-indigo-100'
  }
];

export function VisionValues() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Sustainable Planning Image */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={0.2} className="relative">
              {/* Outer glowing backdrop frame */}
              <div className="absolute inset-4 -left-2 -bottom-2 bg-accent/20 rounded-2xl -z-10 blur-xl" />

              {/* Main Architectural visual */}
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-float)] border-4 border-white aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                <img
                  src="/images/about/about-vision-planning.webp"
                  alt="Futuristic sustainable architectural planning blueprint"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Values list */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="up">
              <SectionHeading
                title="Pioneering Carbon-Neutral Infrastructure"
                subtitle="We integrate environmental accountability directly into structural engineering workflows, ensuring modern regional assets enrich community ecosystems for generations."
                alignment="left"
                className="mb-6"
              />
            </ScrollReveal>

            {/* Principles Cards */}
            <div className="space-y-6">
              {visionPrinciples.map((item, index) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.title} direction="up" delay={index * 0.1 + 0.15}>
                    <div className="flex gap-4 p-5 rounded-[var(--radius-xl)] bg-secondary/30 border border-border shadow-[var(--shadow-soft)] hover:shadow-md transition-all duration-300">
                      <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <h4 className="text-lg font-heading font-bold text-primary mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
