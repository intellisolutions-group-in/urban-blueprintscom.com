"use client";
import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData, ProjectItem } from "@/data/projects";
import { servicesData } from "@/data/services";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/layout/Container";
import {
  Landmark,
  ArrowRight,
  ArrowLeft,
  Send,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Activity,
  FileText,
  Target,
  Layers,
  ShieldAlert,
  TrendingUp,
  Leaf
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Shimmer } from "@/components/shared/Skeletons";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetailsPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  const [isPageLoading, setIsPageLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [activeTab, setActiveTab] = useState<"overview" | "timeline" | "sustainability">("overview");

  // Custom Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} | Infrastructure Portfolio | Urban Blueprints`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", project.metaDescription);
    }
  }, [project?.title, project?.metaDescription]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    notFound();
  }

  // Find other projects in the same discipline for related case studies (guaranteeing unique assets)
  const relatedProjects = projectsData
    .filter((p) => p.disciplineSlug === project.disciplineSlug && p.slug !== project.slug)
    .slice(0, 2);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setFormSubmitted(true);
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % project.gallery.length);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextLightboxImage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevLightboxImage();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, project.gallery.length]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Dynamic JSON-LD Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "image": "http://localhost:3000" + project.image,
            "author": {
              "@type": "Organization",
              "name": "Urban Blueprints",
              "url": "http://localhost:3000"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "24"
            }
          })
        }}
      />

      <AnimatePresence mode="wait">
        {isPageLoading ? (
          <div key="skeleton" className="w-full flex-grow space-y-12 pb-24">
            {/* Hero Skeleton */}
            <div className="relative pt-40 pb-24 bg-primary overflow-hidden h-[400px]">
              <div className="absolute inset-0 bg-primary-dark/80" />
              <Container className="relative z-10 space-y-6">
                <div className="w-40 h-5 bg-white/10 rounded overflow-hidden relative">
                  <Shimmer />
                </div>
                <div className="w-3/4 h-16 bg-white/10 rounded overflow-hidden relative">
                  <Shimmer />
                </div>
                <div className="w-1/2 h-6 bg-white/10 rounded overflow-hidden relative">
                  <Shimmer />
                </div>
              </Container>
            </div>

            {/* Content Skeleton */}
            <Container className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="w-full aspect-video bg-secondary/20 rounded-[var(--radius-xl)] overflow-hidden relative">
                  <Shimmer />
                </div>
                <div className="space-y-4">
                  <div className="w-48 h-6 bg-secondary/20 rounded overflow-hidden relative">
                    <Shimmer />
                  </div>
                  <div className="w-full h-24 bg-secondary/10 rounded overflow-hidden relative">
                    <Shimmer />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="w-full h-80 bg-secondary/25 rounded-[var(--radius-xl)] overflow-hidden relative">
                  <Shimmer />
                </div>
              </div>
            </Container>
          </div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {/* 1. Page Hero Banner */}
            <PageHero
              title={project.title}
              description={project.description}
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Our Portfolio", href: "/projects" },
                { label: project.title, href: `/projects/${project.slug}` }
              ]}
              backgroundImage={project.image}
            />

            {/* 2. Content Layout Grid */}
            <section className="py-16 lg:py-24 relative">
              <Container>
                {/* Back button */}
                <div className="mb-10">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ArrowLeft size={16} />
                    <span>Back to Portfolio Grid</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Left Column - Rich Content Area */}
                  <div className="lg:col-span-2 space-y-16">

                    {/* Big Showcase Hero Image */}
                    <div className="w-full aspect-[16/9] relative rounded-[var(--radius-xl)] overflow-hidden shadow-lg border border-border">
                      <OptimizedImage
                        src={project.gallery[0]}
                        alt={`Detailed engineering preview of ${project.title}`}
                        containerClassName="h-full w-full"
                        aspectRatio="auto"
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Interactive Tabbed Content Switcher */}
                    <div className="border-b border-border flex gap-8">
                      {(["overview", "timeline", "sustainability"] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`pb-4 text-base font-bold capitalize transition-colors relative cursor-pointer ${activeTab === tab ? "text-accent" : "text-muted-foreground hover:text-primary"
                            }`}
                        >
                          {tab}
                          {activeTab === tab && (
                            <motion.div
                              layoutId="activeTabUnderline"
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    <motion.div
                      layout
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      {activeTab === "overview" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-8"
                        >
                          {/* Project Overview */}
                          <div className="space-y-4">
                            <h3 className="text-2xl font-heading font-extrabold text-primary flex items-center gap-2">
                              <FileText className="text-accent" size={22} />
                              Project Overview
                            </h3>
                            <p className="text-muted-foreground leading-relaxed font-light text-base">
                              {project.description}
                            </p>
                          </div>

                          {/* Project Objectives */}
                          <div className="space-y-4">
                            <h3 className="text-2xl font-heading font-extrabold text-primary flex items-center gap-2">
                              <Target className="text-accent" size={22} />
                              Project Objectives
                            </h3>
                            <ul className="space-y-3">
                              {project.objectives.map((obj, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} />
                                  <span className="text-sm font-light leading-relaxed">{obj}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Scope of Work */}
                          <div className="space-y-4">
                            <h3 className="text-2xl font-heading font-extrabold text-primary flex items-center gap-2">
                              <Layers className="text-accent" size={22} />
                              Scope of Work
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {project.scope.map((item, i) => (
                                <li
                                  key={i}
                                  className="p-4 rounded-xl bg-secondary/10 border border-border/50 text-sm font-medium text-primary flex items-center gap-3"
                                >
                                  <span className="w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center text-xs shrink-0 font-bold">
                                    {i + 1}
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === "timeline" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-8"
                        >
                          <h3 className="text-2xl font-heading font-extrabold text-primary flex items-center gap-2">
                            <Calendar className="text-accent" size={22} />
                            Project Timeline
                          </h3>

                          {/* Vertical Timeline Path */}
                          <div className="relative border-l border-border pl-8 space-y-10 ml-4 py-4">
                            {project.timeline.map((step, i) => (
                              <div key={i} className="relative">
                                {/* Dot Indicator */}
                                <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                                  <span className="w-2 h-2 rounded-full bg-accent" />
                                </span>
                                <div className="space-y-1.5">
                                  <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                                    {step.phase} &bull; {step.date}
                                  </span>
                                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                                    {step.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {activeTab === "sustainability" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-8 rounded-[var(--radius-xl)] bg-green-500/5 border border-green-500/20 space-y-4"
                        >
                          <h3 className="text-2xl font-heading font-extrabold text-green-700 flex items-center gap-2">
                            <Leaf className="text-green-500" size={24} />
                            Sustainability & Environmental Impact
                          </h3>
                          <p className="text-green-800 leading-relaxed font-light text-base">
                            {project.sustainability}
                          </p>
                          <p className="text-green-800/80 leading-relaxed font-light text-sm">
                            Our green design guidelines ensure minimal ecological stress, reduced carbon emissions, and strict compliance with global BREEAM and LEED specifications.
                          </p>
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Challenges & Solutions Side-by-Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
                      {/* Challenge Card */}
                      <div className="p-6 rounded-[var(--radius-xl)] border border-red-500/25 bg-red-500/5 space-y-3 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full blur-xl pointer-events-none" />
                        <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-wider text-xs">
                          <ShieldAlert size={16} />
                          <span>The Challenge</span>
                        </div>
                        <h4 className="text-lg font-heading font-bold text-primary">
                          Obstacles & Hurdles
                        </h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>

                      {/* Solution Card */}
                      <div className="p-6 rounded-[var(--radius-xl)] border border-green-500/25 bg-green-500/5 space-y-3 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-full blur-xl pointer-events-none" />
                        <div className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-wider text-xs">
                          <CheckCircle2 size={16} />
                          <span>The Solution</span>
                        </div>
                        <h4 className="text-lg font-heading font-bold text-primary">
                          Technical Resolution
                        </h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Interactive Responsive Photo Gallery */}
                    <div className="space-y-6 pt-8 border-t border-border">
                      <h3 className="text-2xl font-heading font-extrabold text-primary">
                        Project Media Gallery
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {project.gallery.slice(1).map((imgSrc, i) => (
                          <div
                            key={imgSrc}
                            onClick={() => openLightbox(i + 1)}
                            className="group aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm hover:border-accent/40 cursor-pointer relative"
                          >
                            <img
                              src={imgSrc}
                              alt={`Gallery photo ${i + 2} of ${project.title}`}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                              <span className="text-xs font-bold text-white uppercase tracking-widest bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                Open View
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Related Case Studies */}
                    {relatedProjects.length > 0 && (
                      <div className="pt-12 border-t border-border space-y-6">
                        <h4 className="text-xl font-heading font-bold text-primary">
                          Related Case Studies
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {relatedProjects.map((p) => (
                            <Link
                              href={`/projects/${p.slug}`}
                              key={p.slug}
                              className="group block rounded-[var(--radius-xl)] bg-secondary/5 border border-border p-5 hover:border-accent/40 transition-colors"
                            >
                              <div className="aspect-video relative rounded-lg overflow-hidden mb-4 border border-border/50">
                                <img
                                  src={p.image}
                                  alt={`Widescreen banner for case study ${p.title}`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <h5 className="font-heading font-bold text-primary group-hover:text-accent transition-colors">
                                {p.title}
                              </h5>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Right Column - Sticky Sidebar */}
                  <div className="space-y-8 lg:sticky lg:top-28 lg:h-fit">

                    {/* Project Statistics Dashboard */}
                    <div className="bg-secondary/15 border border-border rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-soft)] space-y-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />

                      <h4 className="text-sm font-heading font-bold text-primary pb-4 border-b border-border/80 uppercase tracking-widest text-center lg:text-left">
                        Project Coordinates
                      </h4>

                      <div className="space-y-5">
                        <div className="flex items-start gap-3.5">
                          <Landmark className="text-accent shrink-0 mt-1" size={18} />
                          <div>
                            <span className="text-xs text-muted-foreground block font-light uppercase tracking-wide">
                              Discipline Focus
                            </span>
                            <span className="font-semibold text-primary text-sm md:text-base">
                              {project.disciplineName}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Display Project Metrics */}
                      <div className="pt-4 grid grid-cols-2 gap-4 border-t border-border/80">
                        {project.stats.map((stat, idx) => (
                          <div key={idx} className="p-3 bg-background border border-border rounded-xl">
                            <span className="text-xs text-muted-foreground font-light block">{stat.label}</span>
                            <span className="text-lg font-extrabold text-primary block mt-0.5">{stat.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/services/${project.disciplineSlug}`}
                          className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-bold py-3.5 px-5 rounded-[var(--radius)] text-sm shadow-md transition-colors cursor-pointer"
                        >
                          <span>Explore Allied Service</span>
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>

                    {/* Call-to-Action Lead Form */}
                    <div className="bg-background border border-border rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-soft)] space-y-6">
                      <h4 className="text-lg font-heading font-bold text-primary flex items-center gap-2">
                        <Activity className="text-accent" size={18} />
                        Discuss This Project
                      </h4>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">
                        Interested in adopting these advanced coordinates or feasibility solutions for your municipality or division? Request a consultations plan.
                      </p>

                      <AnimatePresence mode="wait">
                        {formSubmitted ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-green-500/10 border border-green-500/30 text-green-700 p-4 rounded-xl flex items-start gap-3"
                          >
                            <CheckCircle2 className="shrink-0 text-green-500 mt-0.5" size={18} />
                            <div className="text-xs font-medium">
                              Inquiry submitted! Our principal engineers will contact you with the blueprints data within 1 business day.
                            </div>
                          </motion.div>
                        ) : (
                          <form onSubmit={handleInquirySubmit} className="space-y-4">
                            <input
                              type="email"
                              required
                              placeholder="Enter your professional email"
                              value={emailInput}
                              onChange={(e) => setEmailInput(e.target.value)}
                              className="w-full bg-secondary/10 border border-border text-primary rounded-[var(--radius)] py-3 px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                            />
                            <button
                              type="submit"
                              className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/95 text-white font-bold py-3 px-5 rounded-[var(--radius)] text-xs shadow-md uppercase tracking-wider transition-colors cursor-pointer"
                            >
                              <span>Request Engineering Data</span>
                              <Send size={12} />
                            </button>
                          </form>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>
                </div>
              </Container>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================== CUSTOM INTERACTIVE LIGHTBOX MODAL ==================== */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md select-none">
            {/* Close Trigger */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={closeLightbox} />

            {/* Lightbox Controls header */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white z-10">
              <span className="text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-full">
                Image {lightboxIndex + 1} of {project.gallery.length}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left/Right Navigation */}
            <button
              onClick={prevLightboxImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextLightboxImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Display Active Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[75vh] aspect-[16/10] overflow-hidden rounded-xl border border-white/15 z-10 shadow-2xl"
            >
              <img
                src={project.gallery[lightboxIndex]}
                alt={`Expanded gallery view ${lightboxIndex + 1} of ${project.title}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
