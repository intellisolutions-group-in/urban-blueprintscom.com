"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

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
  },
  {
    id: 4,
    quote: "Through rigorous finite-element simulations, their team optimized our transit terminal design, cutting structural steel weight by 18% without sacrificing loading capacity. Their attention to material science is peerless.",
    author: "Elena Rostova",
    role: "Chief Structural Engineer",
    company: "Baltic Transport Hubs",
    stars: 5
  },
  {
    id: 5,
    quote: "We partnered with Urban Blueprints on a critical stormwater recycling grid. Their ecological bio-swales and mechanical sand filters handle over 12k liters of greywater daily, exceeding all sustainability benchmarks.",
    author: "Marcus Vance",
    role: "Director of Ecological Development",
    company: "EcoGreen Cities Project",
    stars: 5
  },
  {
    id: 6,
    quote: "Stabilizing the deep excavation coordinates in soft clay next to active metro lines was a high-risk operation. Their geotechnical telemetry and structural soil-mixing saved our foundations from potential shifts.",
    author: "David K. Alvarez",
    role: "VP of Underground Infrastructure",
    company: "Metro Civil Partners",
    stars: 5
  }
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [scrollRange, setScrollRange] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isLg = window.innerWidth >= 1024;
      setIsDesktop(isLg);
      
      if (listRef.current) {
        const range = listRef.current.scrollWidth - listRef.current.clientWidth;
        setScrollRange(range > 0 ? range : 0);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    // Allow small delay for layout calculations to finish
    const timer = setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Map scroll progress to horizontal movement (translate X)
  const x = useTransform(scrollYProgress, [0.1, 0.9], [0, -scrollRange]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const starContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 }
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
    initial: { scale: 1, rotate: 0, y: 0, opacity: 0.08 },
    hover: { scale: 1.15, rotate: -8, y: -4, opacity: 0.2, transition: { duration: 0.3 } }
  };

  const authorVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative lg:h-[220vh] bg-background py-20 lg:py-0 overflow-visible"
    >
      {/* Decorative gradient blur backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center overflow-hidden">
        <Container className="mb-12 lg:mb-16 shrink-0">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Read reviews from municipal directors, leading developers, and infrastructure partners who trust us with critical capital projects."
            alignment="center"
          />
        </Container>

        {/* Testimonials horizontal slide track */}
        <div className="relative w-full overflow-visible">
          <motion.div 
            ref={listRef}
            style={isDesktop && !reducedMotion ? { x } : {}}
            className="flex gap-8 px-4 sm:px-6 lg:px-8 xl:px-[calc((100vw-1280px)/2+2rem)] flex-nowrap overflow-x-auto lg:overflow-x-visible pb-6 lg:pb-0 snap-x snap-mandatory scrollbar-none"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {testimonialsData.map((item) => (
              <motion.article
                key={item.id}
                variants={cardVariants}
                whileHover="hover"
                className="group min-w-[290px] sm:min-w-[400px] lg:min-w-[460px] w-[85%] sm:w-[60%] lg:w-[460px] shrink-0 snap-center h-auto flex flex-col justify-between p-8 rounded-[var(--radius-xl)] bg-background border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] hover:-translate-y-1.5 hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual quote icon floating with offset and rotation on hover */}
                <motion.div 
                  variants={reducedMotion ? {} : quoteVariants}
                  initial="initial"
                  className="absolute top-6 right-6 text-accent z-0 pointer-events-none"
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
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light italic mb-8 relative z-10">
                    "{item.quote}"
                  </p>
                </div>

                {/* Profile detail animates separately on enter */}
                <motion.div 
                  variants={reducedMotion ? {} : authorVariants}
                  className="flex items-center gap-4 pt-6 border-t border-border relative z-10"
                >
                  {/* Dummy letter avatar */}
                  <div className="w-11 h-11 rounded-full bg-primary text-white font-heading font-bold text-sm flex items-center justify-center shrink-0 border border-white/15">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-primary">
                      {item.author}
                    </h3>
                    <p className="text-[11px] text-muted-foreground font-medium mt-0.5">
                      {item.role}, <span className="text-accent font-semibold">{item.company}</span>
                    </p>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

