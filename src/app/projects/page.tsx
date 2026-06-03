import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ProjectsGridContent } from "@/components/sections/ProjectsGridContent";
import { CtaBlock } from "@/components/shared/CtaBlock";

export const metadata: Metadata = {
  title: "Engineering Portfolio | Urban Blueprints",
  description: "Explore our proven track record of designing and delivering resilient, high-performance civil infrastructure and structural engineering projects.",
  alternates: {
    canonical: "https://urban-blueprints.com/projects",
  },
  openGraph: {
    title: "Engineering Portfolio | Urban Blueprints",
    description: "Explore our proven track record of designing and delivering resilient, high-performance civil infrastructure and structural engineering projects.",
    url: "https://urban-blueprints.com/projects",
    siteName: "Urban Blueprints",
    type: "website",
  }
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHero
        title="Engineering Portfolio"
        description="Explore our proven track record of designing and delivering resilient, high-performance civil infrastructure projects."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Portfolio", href: "/projects" }
        ]}
        backgroundImage="/images/projects/projects-hero-banner.png"
      />

      <ProjectsGridContent />

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
