"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";
import { CtaBlock } from "@/components/shared/CtaBlock";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projects";

const filterCategories = [
  { name: "All Projects", slug: "all" },
  { name: "Transportation", slug: "transportation-engineering" },
  { name: "Structural", slug: "structural-engineering" },
  { name: "Water Resources", slug: "water-resources-engineering" },
  { name: "Environmental", slug: "environmental-engineering" },
  { name: "Geotechnical", slug: "geotechnical-engineering" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projectsData
    : projectsData.filter(project => project.disciplineSlug === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Page Hero */}
      <PageHero
        title="Engineering Portfolio"
        description="Explore our proven track record of designing and delivering resilient, high-performance civil infrastructure projects."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Portfolio", href: "/projects" }
        ]}
        backgroundImage="/images/services/services-hero-banner.webp"
      />

      {/* 2. Portfolio Grid Section */}
      <section className="py-20 lg:py-28 relative">
        <Container>
          {/* Dynamic Filter Navigation */}
          <ScrollReveal direction="up">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-5xl mx-auto">
              {filterCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveFilter(cat.slug)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer ${activeFilter === cat.slug
                      ? "bg-accent border-accent text-white shadow-md shadow-accent/20"
                      : "bg-background border-border text-muted-foreground hover:text-primary hover:border-accent/40"
                    }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid Layout */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
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
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent pointer-events-none" />
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-3">
                        <span className="text-accent text-xs font-bold uppercase tracking-wider block">
                          {project.disciplineName}
                        </span>
                        <h4 className="text-xl font-heading font-bold text-primary group-hover:text-accent transition-colors">
                          {project.title}
                        </h4>
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

      {/* 3. CTA Block */}
      <CtaBlock
        title="Have a massive infrastructure project in mind?"
        description="Our multi-disciplinary teams are ready to partner on feasibility, structural design, and end-to-end capital execution."
        primaryButtonText="Discuss a Capital Project"
        primaryButtonHref="/contact?subject=Capital%20Infrastructure%20Partnership"
        secondaryButtonText="Explore All Services"
        secondaryButtonHref="/services"
      />
    </div>
  );
}
