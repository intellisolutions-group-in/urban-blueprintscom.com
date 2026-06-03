"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
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
    image: '/images/home/project-metro.webp',
    description: 'Complex multi-tiered arterial flyover and smart signaling network supporting 100k daily vehicles.'
  },
  {
    id: 2,
    slug: 'apex-structural-steel-tower',
    title: 'Apex Structural Steel Tower',
    category: 'structural',
    categoryLabel: 'Structural',
    image: '/images/home/project-tower.webp',
    description: 'Advanced structural steel brace framework utilizing advanced concrete cores for ultimate seismic protection.'
  },
  {
    id: 3,
    slug: 'valley-water-retention-dam',
    title: 'Valley Water Retention Dam',
    category: 'water',
    categoryLabel: 'Water Resources',
    image: '/images/home/project-dam.webp',
    description: 'Hydraulic concrete dam and reservoir supplying clean water to municipal grids while regulating seasonal floods.'
  },
  {
    id: 4,
    slug: 'vanguard-glass-headquarters',
    title: 'Vanguard Glass Headquarters',
    category: 'structural',
    categoryLabel: 'Structural',
    image: '/images/home/project-vanguard.webp',
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
    <motion.div
      layout
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      animate={{ rotateX, rotateY }}
      transition={reducedMotion ? {} : { type: "spring", damping: 20, stiffness: 120 }}
      whileHover="hover"
      className="group relative rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] border border-border bg-background aspect-[4/3] sm:aspect-video flex flex-col justify-end select-none"
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
    >
      <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-20 cursor-pointer" />

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
        <p className="text-gray-300 text-sm font-light leading-relaxed mb-4">
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
    </motion.div>
  );
}

export function Projects() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[100px] pointer-events-none -z-10" />

      <Container>
        <ScrollReveal direction="up">
          <SectionHeading
            title="Featured Capital Projects"
            subtitle="Explore our portfolio of complex engineering works and civil structures that are changing urban environments."
            alignment="center"
          />
        </ScrollReveal>

        {/* Filterable Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <ScrollReveal direction="up" className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Link
              href="/services"
              className={cn(buttonVariants.base, buttonVariants.variants.outline, buttonVariants.sizes.default, "border-primary text-primary hover:bg-primary hover:text-white transition-colors h-12 inline-flex items-center gap-2")}
            >
              <span>View Full Portfolio</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

