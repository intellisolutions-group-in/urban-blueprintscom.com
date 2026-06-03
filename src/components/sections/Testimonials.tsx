"use client";
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { motion, useReducedMotion } from 'framer-motion';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  stars: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "Urban Blueprints designed the metro interchange on-schedule and under-budget. Their next-gen BIM clash detection system caught three structural foundation errors before concrete was ever poured, saving us weeks and millions in field adjustments.",
    author: "Edward Collins",
    role: "Director of Highways & Operations",
    company: "Capital Transit Authority",
    stars: 5
  },
  {
    id: 2,
    quote: "Their structural engineering team is world-class. They engineered the entire concrete core and structural steel brace system for our 54-story skyscraper, ensuring top-tier seismic protection while maximizing the premium column-free office layout.",
    author: "Samantha Ross",
    role: "VP of Real Estate Development",
    company: "Apex Estates Group",
    stars: 5
  },
  {
    id: 3,
    quote: "Securing environmental permits and water resource design for our municipal retention dam was a massive challenge. Urban Blueprints guided us seamlessly, producing impeccable designs that fully satisfy modern regulatory and flood-prevention guidelines.",
    author: "Dr. Alistair Vance",
    role: "Principal Infrastructure Lead",
    company: "Municipal Water Resources Council",
    stars: 5
  }
];

export function Testimonials() {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const starContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06 }
    }
  };

  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 220, damping: 12 } 
    }
  };

  const quoteVariants = {
    initial: { scale: 1, rotate: 0, y: 0, opacity: 0.1 },
    hover: { scale: 1.15, rotate: -8, y: -4, opacity: 0.22, transition: { duration: 0.3 } }
  };

  const authorVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.25 }
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient blur backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/50 rounded-full blur-[150px] pointer-events-none -z-10" />

      <Container>
        <ScrollReveal direction="up">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Read reviews from municipal directors, leading developers, and infrastructure partners who trust us with critical capital projects."
            alignment="center"
          />
        </ScrollReveal>

        {/* Coordinated testimonials layout. On mobile/tablet, it converts into a swipable scroll-snap carousel */}
        <motion.div 
          className="flex gap-8 mt-16 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover="hover"
              className="group min-w-[280px] w-[85%] sm:w-[60%] shrink-0 snap-center h-auto flex flex-col justify-between p-8 rounded-[var(--radius-xl)] bg-background border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] hover:-translate-y-1.5 hover:border-accent/30 transition-all duration-300 relative overflow-hidden lg:w-auto"
            >
              {/* Visual quote icon floating with offset and rotation on hover */}
              <motion.div 
                variants={reducedMotion ? {} : quoteVariants}
                initial="initial"
                className="absolute top-6 right-6 text-accent z-0"
              >
                <Quote size={48} fill="currentColor" />
              </motion.div>

              <div>
                {/* Rapid star rating staggers */}
                <motion.div 
                  variants={starContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex gap-1 mb-6 text-amber-400 relative z-10"
                >
                  {[...Array(item.stars)].map((_, i) => (
                    <motion.div key={i} variants={reducedMotion ? {} : starVariants}>
                      <Star size={16} fill="currentColor" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote text */}
                <p className="text-muted-foreground text-sm leading-relaxed font-light italic mb-8 relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Profile detail animates separately on enter */}
              <motion.div 
                variants={reducedMotion ? {} : authorVariants}
                className="flex items-center gap-4 pt-6 border-t border-border"
              >
                {/* Dummy letter avatar */}
                <div className="w-11 h-11 rounded-full bg-primary text-white font-heading font-bold text-sm flex items-center justify-center shrink-0 border border-white/15">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-primary">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-muted-foreground font-medium mt-0.5">
                    {item.role}, <span className="text-accent font-semibold">{item.company}</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
