"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { projectsData } from "@/data/projects";
import { OptimizedImage } from "@/components/shared/OptimizedImage";

export function ProjectsGridContent() {
  return (
    <section className="py-20 lg:py-28 relative bg-background">
      <Container>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projectsData.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="h-full"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group h-full rounded-[var(--radius-xl)] overflow-hidden bg-background border border-border shadow-[var(--shadow-soft)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between block"
                >
                  <div>
                    {/* Image Thumbnail */}
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        aspectRatio="auto"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        containerClassName="w-full h-full rounded-none bg-transparent"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent pointer-events-none z-10" />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <span className="text-accent text-xs font-bold uppercase tracking-wider block">
                        {project.disciplineName}
                      </span>
                      <h2 className="text-xl font-heading font-bold text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="px-6 pb-6 pt-2 mt-auto">
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-accent group-hover:gap-2 transition-all">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
