"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CheckCircle2, ArrowRight, ChevronDown, ChevronUp, Mail, Clock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { ServiceSection, ServiceSectionItem } from "@/data/services";
import { ProjectItem } from "@/data/projects";
import { 
  HeroSkeleton,
  CtaSkeleton,
  OverviewSkeleton, 
  SidebarSkeleton, 
  SectionSkeleton, 
  ProjectsSkeleton, 
  RelatedServicesSkeleton 
} from "@/components/shared/Skeletons";

// 1. Interactive Accordion Component
function AccordionItem({ title, description, isOpen, onClick }: { title: string; description: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-border rounded-[var(--radius-xl)] bg-secondary/10 overflow-hidden transition-all duration-300 hover:border-accent/40 mb-4 shadow-[var(--shadow-soft)]">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
      >
        <span className="font-heading font-bold text-lg text-primary group-hover:text-accent transition-colors">{title}</span>
        <div className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center shadow-sm shrink-0 group-hover:border-accent/40 transition-colors">
          {isOpen ? <ChevronUp className="text-accent" size={18} /> : <ChevronDown className="text-muted-foreground group-hover:text-accent" size={18} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-muted-foreground leading-relaxed font-light text-base border-t border-border/50 bg-secondary/5">
              {description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// 2. Expandable Topic Card Component
function TopicCard({ item, idx }: { item: ServiceSectionItem; idx: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article 
      className="flex flex-col rounded-[var(--radius-xl)] bg-background border border-border overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-lg hover:border-accent/40 transition-all duration-300 transform hover:-translate-y-1 group"
    >
      {item.image && (
        <div className="aspect-video w-full relative overflow-hidden shrink-0">
          <OptimizedImage
            src={item.image}
            alt={item.title || "Engineering"}
            aspectRatio="video"
            className="transform group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 500px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
        </div>
      )}
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-center mb-4">
            {item.title && (
              <h4 className="text-xl font-heading font-bold text-primary group-hover:text-accent transition-colors">
                {item.title}
              </h4>
            )}
            <span className="font-mono text-xs font-bold text-muted-foreground/60">0{idx + 1}</span>
          </div>
          
          <motion.div
            layout="position"
            className="relative overflow-hidden"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className={`text-muted-foreground leading-relaxed font-light text-sm transition-all duration-300 ${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}>
              {item.description}
            </p>
          </motion.div>
        </div>
        <div className="pt-6 mt-6 border-t border-border/50 flex justify-between items-center">
          <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">Coordinate Active</span>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-8 h-8 rounded-full bg-secondary/20 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/20"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            <ArrowRight 
              size={14} 
              className={`transform transition-all duration-300 ${isExpanded ? "-rotate-90 text-accent scale-110" : "group-hover:translate-x-0.5"}`} 
            />
          </button>
        </div>
      </div>
    </article>
  );
}

// 3. Dynamic Section Renderer
function SectionRenderer({ section, index }: { section: ServiceSection; index: number }) {
  const [openAccordionIdx, setOpenAccordionIdx] = useState<number>(0); // First item open by default

  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent font-mono text-sm font-bold flex items-center justify-center">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-primary tracking-tight">{section.title}</h3>
      </div>

      {/* Section Main Image */}
      {section.image && (
        <div className="w-full mb-10 relative group overflow-hidden border border-border shadow-[var(--shadow-soft)] rounded-[var(--radius-xl)] z-0">
          <OptimizedImage
            src={section.image}
            alt={section.title}
            aspectRatio="video"
            className="transform group-hover:scale-[1.02] transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-10" />
        </div>
      )}

      {section.content && (
        <p className="text-muted-foreground leading-relaxed text-lg font-light mb-10 max-w-4xl">
          {section.content}
        </p>
      )}

      {/* SECTION 3 - KEY SERVICES / TOPICS */}
      {section.type === 'text-image-grid' && section.items && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {section.items.map((item, idx) => (
            <TopicCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      )}

      {/* SECTION 4 - ENTERPRISE ACCORDION */}
      {section.type === 'accordion' && section.items && (
        <div className="mt-8 max-w-4xl">
          {section.items.map((item, idx) => (
            <AccordionItem
              key={idx}
              title={item.title || ""}
              description={item.description || ""}
              isOpen={openAccordionIdx === idx}
              onClick={() => setOpenAccordionIdx(openAccordionIdx === idx ? -1 : idx)}
            />
          ))}
        </div>
      )}

      {/* SECTION 5 - CONTENT BLOCKS */}
      {section.type === 'text-block' && section.items && (
        <div className="space-y-8 max-w-4xl">
          {section.items.map((item, idx) => (
            <div key={idx} className="bg-secondary/10 p-8 rounded-[var(--radius-xl)] border border-border shadow-[var(--shadow-soft)] relative overflow-hidden group hover:border-accent/30 transition-colors">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
              {item.title && <h4 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h4>}
              <p className="text-muted-foreground leading-relaxed font-light text-base">{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* List Block */}
      {section.type === 'list-block' && section.items && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-4xl">
          {section.items.map((item, idx) => (
            <div key={idx} className="flex gap-4 p-5 rounded-[var(--radius-xl)] bg-secondary/20 border border-border hover:border-accent/40 transition-all duration-300">
              <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={24} />
              <span className="text-primary font-medium text-base leading-relaxed">{item.description}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

interface ServiceDetailsContentProps {
  service: any;
  relatedServices: any[];
  serviceCases: ProjectItem[];
}

export function ServiceDetailsContent({ service, relatedServices, serviceCases }: ServiceDetailsContentProps) {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Split sections:
  const lastSection = service.sections?.[service.sections.length - 1];
  const hasSidebarSection = lastSection && lastSection.type === 'text-block';
  const sidebarSections = hasSidebarSection ? [lastSection] : [];

  const fullWidthSections = service.sections?.filter((s: any) => s.type === 'accordion' || s.type === 'list-block') || [];

  const mainSections = service.sections?.filter((s: any) => 
    s !== lastSection && s.type !== 'accordion' && s.type !== 'list-block'
  ) || [];

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isPageLoading ? (
          <motion.div
            key="full-page-skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex flex-col min-h-screen"
          >
            <HeroSkeleton />
            <section className="py-20 lg:py-28 relative">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-8 space-y-12">
                    <OverviewSkeleton />
                    <SectionSkeleton type="text-image-grid" />
                    <SectionSkeleton type="text-block" />
                  </div>
                  <div className="lg:col-span-4">
                    <SidebarSkeleton />
                  </div>
                </div>
              </Container>
            </section>
            <CtaSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="full-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col"
          >
            {/* =========================================================================
               SECTION 1 — HERO AREA
               ========================================================================= */}
            <header className="relative w-full aspect-video md:aspect-[21/9] lg:aspect-[3/1] min-h-[420px] flex items-center overflow-hidden bg-[#0a1224] text-white">
              {/* Hero Background Image */}
              <div className="absolute inset-0 z-0 bg-[#0a1224]">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    sizes="100vw"
                    quality={90}
                    className="object-cover transform scale-100 animate-[subtle-zoom_20s_infinite_alternate]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#0c223a] opacity-35" />
                )}
                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />
              </div>

              <Container className="relative z-20 py-20 md:py-28">
                <div className="max-w-4xl">
                  {/* Breadcrumb Navigation */}
                  <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide uppercase text-accent drop-shadow-sm">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span className="text-white/40">/</span>
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <span className="text-white/40">/</span>
                    <span className="text-white/70">{service.title}</span>
                  </nav>

                  {/* Title & Description */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-white mb-6 drop-shadow-sm leading-[1.1]">
                    {service.title}
                  </h1>
                  <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-10 drop-shadow-sm">
                    {service.description}
                  </p>

                  {/* Hero Dual CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                    <Link href="/request-quote" className="inline-flex items-center justify-center bg-accent text-white font-bold py-4 px-8 rounded-[var(--radius)] hover:bg-accent/90 transition-colors shadow-lg shadow-accent/15 text-sm md:text-base cursor-pointer">
                      Request Consultation <ArrowRight size={18} className="ml-2" />
                    </Link>
                    <a href="#overview" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold py-4 px-8 rounded-[var(--radius)] transition-colors text-sm md:text-base cursor-pointer backdrop-blur-sm">
                      Explore Technical Profile
                    </a>
                  </div>
                </div>
              </Container>

              <style jsx global>{`
                @keyframes subtle-zoom {
                  0% { transform: scale(1); }
                  100% { transform: scale(1.05); }
                }
              `}</style>
            </header>

            {/* =========================================================================
               SECTION 2 — INTRODUCTION
               ========================================================================= */}
            <section id="overview" className="py-20 lg:py-24 relative">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-8">
                    <span className="text-accent text-sm font-bold uppercase tracking-widest mb-3 block">Discipline Overview</span>
                    <h2 className="text-3xl font-heading font-extrabold text-primary mb-6 tracking-tight">Technical Capability Outline</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg font-light border-l-4 border-accent pl-6 bg-secondary/10 py-5 rounded-r-lg shadow-sm">
                      {service.longDescription}
                    </p>
                  </div>

                  <aside className="lg:col-span-4">
                    <div className="p-8 rounded-[var(--radius-xl)] bg-secondary/20 border border-border shadow-[var(--shadow-soft)]">
                      <h4 className="font-heading font-bold text-lg text-primary uppercase tracking-wider mb-6 pb-4 border-b border-border/50 flex items-center gap-2">
                        <CheckCircle2 className="text-accent" size={20} />
                        Discipline Profile
                      </h4>
                      <div className="space-y-5">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground font-light">Lead Division</span>
                          <span className="font-semibold text-primary px-3 py-1 bg-background rounded-md border border-border shadow-sm">Capital Projects</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground font-light">Compliance</span>
                          <span className="font-semibold text-primary px-3 py-1 bg-background rounded-md border border-border shadow-sm">ISO 9001:2015</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground font-light">Quality</span>
                          <span className="font-semibold text-primary px-3 py-1 bg-background rounded-md border border-border shadow-sm">FEA Certified</span>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </Container>
            </section>

            {/* =========================================================================
               DYNAMIC PAGE CONTENT
               ========================================================================= */}
            <section className="pb-16 relative">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  {/* Main Sections */}
                  <div className="lg:col-span-8">
                    {mainSections.map((sect: any, index: number) => (
                      <SectionRenderer key={index} section={sect} index={index} />
                    ))}
                  </div>

                  {/* Sidebar Help Card */}
                  <div className="lg:col-span-4">
                    <aside className="space-y-8 sticky top-32 lg:pt-[72px]">
                      <div className="rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-float)] border-4 border-white relative group">
                        <OptimizedImage
                          src={service.image}
                          alt={service.title}
                          aspectRatio="square"
                          className="transform group-hover:scale-105 transition-transform duration-700"
                          sizes="400px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent pointer-events-none z-10" />
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                          <h4 className="text-white font-heading font-bold text-xl drop-shadow-md">{service.title}</h4>
                        </div>
                      </div>

                      <div className="p-8 rounded-[var(--radius-xl)] bg-primary text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10" />
                        <h4 className="font-heading font-bold text-xl mb-3 flex items-center gap-2">
                          <CheckCircle2 className="text-accent" size={20} />
                          Need Consultation?
                        </h4>
                        <p className="text-white/80 font-light text-sm leading-relaxed mb-6">Our senior engineers are available to review your project requirements and offer expert guidance.</p>
                        <Link href="/request-quote" className="inline-flex items-center justify-center w-full bg-accent text-white font-bold py-3.5 px-6 rounded-[var(--radius)] hover:bg-accent/90 transition-colors shadow-lg">
                          Contact Experts <ArrowRight size={18} className="ml-2" />
                        </Link>
                      </div>

                      {sidebarSections.map((sect: any, index: number) => (
                        <div key={index} className="space-y-6 pt-8">
                          <h4 className="font-heading font-bold text-lg text-primary uppercase tracking-wider mb-4 pb-2 border-b border-border/50">{sect.title}</h4>
                          <div className="space-y-4">
                            {sect.items?.map((item: any, idx: number) => (
                              <div key={idx} className="p-6 rounded-[var(--radius-xl)] bg-secondary/20 border border-border shadow-[var(--shadow-soft)] hover:border-accent/30 transition-colors">
                                {item.title && <h5 className="font-heading font-bold text-base text-primary mb-2">{item.title}</h5>}
                                <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </aside>
                  </div>
                </div>
              </Container>
            </section>

            {fullWidthSections.length > 0 && (
              <section className="py-16 bg-secondary/10 border-t border-b border-border relative overflow-hidden">
                <Container>
                  <div className="max-w-4xl mx-auto">
                    {fullWidthSections.map((sect: any, index: number) => (
                      <SectionRenderer key={index} section={sect} index={mainSections.length + index} />
                    ))}
                  </div>
                </Container>
              </section>
            )}

            {/* Case Studies */}
            {serviceCases.length > 0 && (
              <section className="py-20 lg:py-24 bg-secondary/20 border-t border-b border-border relative overflow-hidden">
                <Container>
                  <div className="max-w-3xl mb-12">
                    <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">Case Studies</span>
                    <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight">
                      Featured {service.title} Projects
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {serviceCases.map((project) => (
                      <Link 
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group rounded-[var(--radius-xl)] overflow-hidden bg-background border border-border shadow-[var(--shadow-soft)] hover:shadow-lg transition-all duration-300 cursor-pointer block"
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <OptimizedImage
                            src={project.image}
                            alt={project.title}
                            aspectRatio="video"
                            className="transform group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                        </div>
                        <div className="p-6 space-y-3">
                          <h4 className="text-xl font-heading font-bold text-primary group-hover:text-accent transition-colors">{project.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed font-light line-clamp-2">{project.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Container>
              </section>
            )}

            {/* Other Disciplines */}
            <section className="py-20 lg:py-24 bg-background border-b border-border">
              <Container>
                <div className="max-w-3xl mb-12">
                  <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">Explore More</span>
                  <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight">
                    Our Other Disciplines
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedServices.map((relService) => (
                    <Link key={relService.slug} href={`/services/${relService.slug}`} className="group block h-full">
                      <div className="h-full rounded-[var(--radius-xl)] bg-secondary/10 border border-border p-6 shadow-[var(--shadow-soft)] hover:border-accent/40 hover:bg-secondary/25 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
                        <div>
                          <div className="w-full mb-5 relative overflow-hidden rounded-lg">
                            <OptimizedImage
                              src={relService.image}
                              alt={relService.title}
                              aspectRatio="video"
                              className="transform group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                            <div className="absolute inset-0 bg-primary/10 pointer-events-none z-10" />
                          </div>

                          <h4 className="text-lg font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                            {relService.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed font-light mb-6 line-clamp-3">
                            {relService.description}
                          </p>
                        </div>

                        <span className="inline-flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-wider group-hover:gap-2.5 transition-all mt-auto pt-4 border-t border-border/50">
                          Explore Service <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </Container>
            </section>

            {/* CAD Coordinates CTA */}
            <section className="relative py-24 bg-primary text-white overflow-hidden">
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none z-0" 
                style={{ 
                  backgroundImage: `
                    linear-gradient(to right, #2196f3 1px, transparent 1px),
                    linear-gradient(to bottom, #2196f3 1px, transparent 1px)
                  `,
                  backgroundSize: '32px 32px'
                }} 
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/25 rounded-full flex items-center justify-center opacity-25 z-0">
                <div className="w-[450px] h-[450px] border border-dashed border-accent/20 rounded-full" />
                <div className="absolute w-full h-[1px] bg-accent/20 rotate-45" />
                <div className="absolute w-full h-[1px] bg-accent/20 -rotate-45" />
              </div>

              <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest font-mono block">Inquire // Coordinate Build Parameters</span>
                  <h3 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
                    Start Your Infrastructure Project Today
                  </h3>
                  <p className="text-white/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                    Connect with our principal engineering team to analyze structural coordinates, schedule feasibility, or calculate digital twin layouts.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 items-stretch sm:items-center pt-4">
                    <Link href="/request-quote" className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-[var(--radius)] transition-colors shadow-lg shadow-accent/15 text-sm md:text-base cursor-pointer">
                      Request a Consultation <ArrowRight size={18} className="ml-2" />
                    </Link>
                    <Link href="/request-quote" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold py-4 px-8 rounded-[var(--radius)] transition-colors text-sm md:text-base cursor-pointer backdrop-blur-sm">
                      Submit Feasibility Ticket
                    </Link>
                  </div>
                </div>
              </Container>
            </section>

            {/* Pre-footer Info */}
            <section className="py-20 bg-secondary/40 border-t border-b border-border relative overflow-hidden">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-accent text-sm font-bold uppercase tracking-widest block">Direct Communications Desk</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-primary tracking-tight">Initiate Your Next Infrastructure Build</h3>
                    <p className="text-muted-foreground font-light text-base leading-relaxed max-w-2xl">
                      Connect with our principal engineering desk directly to discuss structural plans, site constraints, scheduling parameters, or budget alignments.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                      {[
                        { icon: Mail, label: 'Email Desk', val: 'info@urbanblueprints.com' },
                        { icon: Clock, label: 'Active Support Hours', val: 'Mon - Fri: 8:00 AM - 5:00 PM' }
                      ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.label} className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-lg bg-background border border-border shadow-soft flex items-center justify-center text-accent shrink-0">
                              <Icon size={18} />
                            </div>
                            <div>
                              <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold block">{item.label}</span>
                              <p className="text-sm font-heading font-bold text-primary mt-0.5">{item.val}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative">
                    <div className="rounded-2xl border-2 border-dashed border-accent/40 bg-[#0c223a] text-white p-8 relative aspect-video overflow-hidden flex flex-col justify-between shadow-float">
                      <div 
                        className="absolute inset-0 opacity-20 pointer-events-none" 
                        style={{ 
                          backgroundImage: `
                            linear-gradient(to right, #2196f3 1px, transparent 1px),
                            linear-gradient(to bottom, #2196f3 1px, transparent 1px)
                          `,
                          backgroundSize: '24px 24px'
                        }} 
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-accent/30 rounded-full flex items-center justify-center opacity-30">
                        <div className="w-36 h-36 border border-dashed border-accent/30 rounded-full" />
                        <div className="absolute w-full h-[1px] bg-accent/30 rotate-45" />
                        <div className="absolute w-full h-[1px] bg-accent/30 -rotate-45" />
                      </div>

                      <div className="flex justify-between items-center relative z-10">
                        <span className="text-[9px] font-mono tracking-widest text-accent uppercase font-bold">Coordinates // 51.5074° N, 0.1278° W</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                      </div>

                      <div className="text-center py-4 relative z-10">
                        <h4 className="text-lg font-heading font-bold mb-1">Urban Blueprints HQ</h4>
                        <p className="text-xs text-gray-300 font-light">Central Engineering Laboratory & Blueprint Studio</p>
                      </div>

                      <div className="flex justify-between items-center relative z-10 text-[9px] font-mono text-gray-400">
                        <span>SCALE 1:500</span>
                        <span>CAD_MODEL_ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
