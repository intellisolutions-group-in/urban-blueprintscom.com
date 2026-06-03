"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { OptimizedImage } from '@/components/shared/OptimizedImage';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  slug: string;
  title: string;
  category: 'infrastructure' | 'structural' | 'water';
  categoryLabel: string;
  image: string;
  description: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    slug: 'metro-highway-overpass',
    title: 'Metro Highway Overpass Interchange',
    category: 'infrastructure',
    categoryLabel: 'Infrastructure',
    image: '/images/projects/metro-highway-overpass/metro-highway-overpass-interchange.png',
    description: 'Complex multi-tiered arterial flyover and smart signaling network supporting 100k daily vehicles.'
  },
  {
    id: 2,
    slug: 'apex-structural-steel-tower',
    title: 'Apex Structural Steel Tower',
    category: 'structural',
    categoryLabel: 'Structural',
    image: '/images/projects/apex-structural-steel-tower/apex-structural-steel-tower.png',
    description: 'Advanced structural steel brace framework utilizing advanced concrete cores for ultimate seismic protection.'
  },
  {
    id: 3,
    slug: 'valley-water-retention-dam',
    title: 'Valley Water Retention Dam',
    category: 'water',
    categoryLabel: 'Water Resources',
    image: '/images/projects/valley-water-retention-dam/valley-water-retention-dam.png',
    description: 'Hydraulic concrete dam and reservoir supplying clean water to municipal grids while regulating seasonal floods.'
  },
  {
    id: 4,
    slug: 'vanguard-glass-headquarters',
    title: 'Vanguard Glass Headquarters',
    category: 'structural',
    categoryLabel: 'Structural',
    image: '/images/projects/vanguard-glass-headquarters/vanguard-glass-headquarters.png',
    description: 'Glass-morphic double-skin facade commercial build emphasizing LEED-Platinum sustainability parameters.'
  }
];

// Individual Project Card Component supporting 3D cursor tilts and explicit state-driven hover detail reveals
function ProjectCard({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || window.innerWidth < 1024) return;
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    // Tilt limit to max 7 degrees
    const xRotate = -(y / (box.height / 2)) * 7;
    const yRotate = (x / (box.width / 2)) * 7;

    setRotateX(xRotate);
    setRotateY(yRotate);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };



  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 0.95, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const detailsVariants = {
    initial: {
      opacity: 0,
      y: 24,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.article
      layout
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      animate={{ rotateX, rotateY }}
      transition={reducedMotion ? {} : { type: "spring", damping: 20, stiffness: 120 }}
      whileHover="hover"
      className="group relative rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] border border-border bg-background w-full h-full flex flex-col justify-end select-none"
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
    >
      <Link href={`/projects/${project.slug}`} aria-label={`View details for ${project.title}`} className="absolute inset-0 z-20 cursor-pointer" />

      {/* Background Image using OptimizedImage wrapper to fix image load/caching glitches */}
      <OptimizedImage
        src={project.image}
        alt={project.title}
        aspectRatio="auto"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 -z-10"
        containerClassName="absolute inset-0 w-full h-full -z-10 rounded-none bg-transparent"
      />

      {/* Visual gradient overlay with explicit state trigger */}
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/65 to-primary/10 z-0 pointer-events-none"
      />

      {/* Content Overlay - explicitly triggered on hover */}
      <motion.div
        variants={detailsVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        className="relative z-10 p-6 sm:p-8 text-white space-y-4 max-w-xl"
        style={{ transform: "translateZ(30px)" }} // depth pop
      >
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-heading font-bold tracking-tight">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-300 text-sm font-light leading-relaxed mb-0">
          {project.description}
        </p>
      </motion.div>

      {/* High-end hover reveal button */}
      <motion.div
        className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="w-10 h-10 rounded-[var(--radius-md)] bg-background text-primary flex items-center justify-center shadow-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
          <ArrowRight size={18} />
        </div>
      </motion.div>
    </motion.article>
  );
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-white pb-24">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Scroll timeline container with height for scroll distance */}
      <div className="h-[350vh] relative w-full">
        {/* Sticky wrapper that stays viewport-locked */}
        <div className="sticky top-[12%] h-[75vh] flex flex-col justify-center items-center w-full">
          <Container className="flex flex-col items-center justify-center w-full">
            <ScrollReveal direction="up" className="mb-12">
              <SectionHeading
                title="Featured Capital Projects"
                subtitle="Explore our portfolio of complex engineering works and civil structures that are changing urban environments."
                alignment="center"
              />
            </ScrollReveal>

            {/* Stacking Card Deck Container */}
            <div className="relative w-full max-w-4xl h-[400px] sm:h-[480px] md:h-[530px]">
              {projectsData.map((project, idx) => {
                // Calculate custom input/output ranges for each card's scroll animations
                let inputRange = [0, 1];
                let opacityRange = [0, 1];
                let scaleRange = [0.95, 1];
                let yRange = [30, 0];

                if (idx === 0) {
                  inputRange = [0, 0.20, 0.28];
                  opacityRange = [1, 1, 0];
                  scaleRange = [1, 1, 0.95];
                  yRange = [0, 0, -30];
                } else if (idx === 1) {
                  inputRange = [0, 0.20, 0.28, 0.48, 0.56];
                  opacityRange = [0, 0, 1, 1, 0];
                  scaleRange = [0.95, 0.95, 1, 1, 0.95];
                  yRange = [30, 30, 0, 0, -30];
                } else if (idx === 2) {
                  inputRange = [0, 0.48, 0.56, 0.76, 0.84];
                  opacityRange = [0, 0, 1, 1, 0];
                  scaleRange = [0.95, 0.95, 1, 1, 0.95];
                  yRange = [30, 30, 0, 0, -30];
                } else if (idx === 3) {
                  inputRange = [0, 0.76, 0.84, 1.0];
                  opacityRange = [0, 0, 1, 1];
                  scaleRange = [0.95, 0.95, 1, 1];
                  yRange = [30, 30, 0, 0];
                }

                const opacity = useTransform(scrollYProgress, inputRange, opacityRange);
                const scale = useTransform(scrollYProgress, inputRange, scaleRange);
                const y = useTransform(scrollYProgress, inputRange, yRange);

                // Dynamically control pointerEvents so invisible cards do not block interactions
                const pointerEvents = useTransform(scrollYProgress, (val) => {
                  if (idx === 0) return val < 0.28 ? "auto" : "none";
                  if (idx === 1) return (val >= 0.20 && val < 0.56) ? "auto" : "none";
                  if (idx === 2) return (val >= 0.48 && val < 0.84) ? "auto" : "none";
                  return val >= 0.76 ? "auto" : "none";
                });

                return (
                  <motion.div
                    key={project.id}
                    style={{
                      opacity,
                      scale,
                      y,
                      zIndex: projectsData.length - idx,
                      pointerEvents,
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                );
              })}
            </div>

            {/* View All CTA */}
            <ScrollReveal direction="up" className="text-center mt-12">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Link
                  href="/projects"
                  className={cn(buttonVariants.base, buttonVariants.variants.outline, buttonVariants.sizes.default, "border-primary text-primary hover:bg-primary hover:text-white transition-colors h-12 inline-flex items-center gap-2")}
                >
                  <span>View Full Portfolio</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </ScrollReveal>
          </Container>
        </div>
      </div>
    </section>
  );
}

