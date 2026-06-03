"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Send, 
  Upload, 
  CheckCircle2, 
  X, 
  ShieldCheck, 
  Cpu, 
  Award, 
  Network, 
  ArrowRight, 
  ChevronDown, 
  FileText, 
  Trash2 
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function RequestQuoteContent() {
  const reducedMotion = useReducedMotion();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Form State
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('transportation');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('100k-500k');
  const [timeline, setTimeline] = useState('1-3-months');
  const [description, setDescription] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  
  // Form Status States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  
  // FAQ Active Accordion States (indexes of open FAQs)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // FAQ Data
  const faqs = [
    {
      q: "What is your typical turnaround time for a structural quote?",
      a: "Standard project quotes are processed within 1 to 2 business days. For complex municipal capital designs or large-scale transportation projects, detailed proposals may take up to 5 business days."
    },
    {
      q: "What file formats do you accept for engineering uploads?",
      a: "We accept standard CAD files (.dwg, .dxf), BIM models (.rvt, .ifc), structural calculations (.pdf), and site layouts (.jpg, .png). If you have large datasets, our team will provide a secure upload portal."
    },
    {
      q: "Do you handle local municipal zoning and permitting?",
      a: "Yes. Our environmental and structural engineers have extensive experience working with municipal boards and environmental agencies to secure building permits and zoning approval."
    },
    {
      q: "Can you provide structural feasibility assessments before final land acquisition?",
      a: "Absolutely. We perform detailed geotechnical site assessments and structural feasibility evaluations to help clients verify land stability and regulatory constraints before acquisition."
    }
  ];

  // Drag and Drop Handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const resetForm = () => {
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setService('transportation');
    setLocation('');
    setBudget('100k-500k');
    setTimeline('1-3-months');
    setDescription('');
    setUploadedFile(null);
    setSubmitted(false);
  };

  // Helper to format file sizes
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Animation variants
  const formContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 }
    }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <>
      {/* ==================== FORM SECTION ==================== */}
      <section id="quote-form" className="py-24 bg-background relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up">
              <SectionHeading 
                title="Define Your Infrastructure Project"
                subtitle="Submit your engineering specifications, site plans, and timeline constraints. Our lead estimating engineers will evaluate your parameters."
                alignment="center"
                className="mb-16 text-center"
              />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="p-8 md:p-12 rounded-[var(--radius-xl)] bg-secondary/10 border border-border shadow-[var(--shadow-float)] relative overflow-hidden backdrop-blur-sm">
                
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="w-16 h-16 bg-accent/10 border border-accent/30 text-accent rounded-full flex items-center justify-center mx-auto shadow-md">
                        <CheckCircle2 size={36} />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-3xl font-heading font-extrabold text-primary tracking-tight">
                          Quote Request Received
                        </h3>
                        <p className="text-muted-foreground max-w-lg mx-auto font-light leading-relaxed">
                          Thank you, <strong className="text-primary font-medium">{name}</strong>. Your parameters for <strong className="text-primary font-medium">{service.toUpperCase()}</strong> engineering have been logged. Our estimating department will review your blueprints and contact you at <strong className="text-primary font-medium">{email}</strong> within 1 business day.
                        </p>
                      </div>
                      <div className="pt-6">
                        <Button 
                          onClick={resetForm}
                          className="bg-primary hover:bg-primary/95 text-white shadow-md transition-all cursor-pointer"
                        >
                          Submit Another Request
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-8"
                      variants={formContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {/* Grid inputs */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Name Input */}
                        <motion.div variants={formFieldVariants} className="space-y-2">
                          <label htmlFor="fullName" className="text-xs font-bold text-primary uppercase tracking-wider block">
                            Full Name <span className="text-accent">*</span>
                          </label>
                          <Input
                            id="fullName"
                            type="text"
                            required
                            placeholder="e.g. Sarah Jenkins"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-background/80 border-border focus-visible:ring-accent/20 focus-visible:border-accent"
                          />
                        </motion.div>

                        {/* Company Name */}
                        <motion.div variants={formFieldVariants} className="space-y-2">
                          <label htmlFor="company" className="text-xs font-bold text-primary uppercase tracking-wider block">
                            Company Name <span className="text-accent">*</span>
                          </label>
                          <Input
                            id="company"
                            type="text"
                            required
                            placeholder="e.g. Vanguard Developments"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="bg-background/80 border-border focus-visible:ring-accent/20 focus-visible:border-accent"
                          />
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={formFieldVariants} className="space-y-2">
                          <label htmlFor="email" className="text-xs font-bold text-primary uppercase tracking-wider block">
                            Corporate Email <span className="text-accent">*</span>
                          </label>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="e.g. s.jenkins@vanguard.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-background/80 border-border focus-visible:ring-accent/20 focus-visible:border-accent"
                          />
                        </motion.div>

                        {/* Phone */}
                        <motion.div variants={formFieldVariants} className="space-y-2">
                          <label htmlFor="phone" className="text-xs font-bold text-primary uppercase tracking-wider block">
                            Phone Number <span className="text-accent">*</span>
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            placeholder="e.g. +1 (555) 019-2834"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-background/80 border-border focus-visible:ring-accent/20 focus-visible:border-accent"
                          />
                        </motion.div>

                        {/* Service Required Select */}
                        <motion.div variants={formFieldVariants} className="space-y-2">
                          <label htmlFor="service" className="text-xs font-bold text-primary uppercase tracking-wider block">
                            Discipline Required <span className="text-accent">*</span>
                          </label>
                          <select
                            id="service"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="flex h-12 w-full rounded-[var(--radius-sm)] border-2 border-border/50 bg-background/80 px-4 py-2 text-sm text-primary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 font-medium cursor-pointer"
                          >
                            <option value="transportation">Transportation Engineering</option>
                            <option value="structural">Structural Engineering</option>
                            <option value="water">Water Resources Engineering</option>
                            <option value="environmental">Environmental Engineering</option>
                            <option value="geotechnical">Geotechnical Engineering</option>
                          </select>
                        </motion.div>

                        {/* Project Location */}
                        <motion.div variants={formFieldVariants} className="space-y-2">
                          <label htmlFor="location" className="text-xs font-bold text-primary uppercase tracking-wider block">
                            Project Location <span className="text-accent">*</span>
                          </label>
                          <Input
                            id="location"
                            type="text"
                            required
                            placeholder="e.g. London, UK (or Coordinates)"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="bg-background/80 border-border focus-visible:ring-accent/20 focus-visible:border-accent"
                          />
                        </motion.div>

                        {/* Budget */}
                        <motion.div variants={formFieldVariants} className="space-y-2">
                          <label htmlFor="budget" className="text-xs font-bold text-primary uppercase tracking-wider block">
                            Estimated Budget Range
                          </label>
                          <select
                            id="budget"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="flex h-12 w-full rounded-[var(--radius-sm)] border-2 border-border/50 bg-background/80 px-4 py-2 text-sm text-primary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 font-medium cursor-pointer"
                          >
                            <option value="under-100k">Under $100k</option>
                            <option value="100k-500k">$100k - $500k</option>
                            <option value="500k-2m">$500k - $2M</option>
                            <option value="above-2m">$2M+</option>
                          </select>
                        </motion.div>

                        {/* Timeline */}
                        <motion.div variants={formFieldVariants} className="space-y-2">
                          <label htmlFor="timeline" className="text-xs font-bold text-primary uppercase tracking-wider block">
                            Desired Timeline
                          </label>
                          <select
                            id="timeline"
                            value={timeline}
                            onChange={(e) => setTimeline(e.target.value)}
                            className="flex h-12 w-full rounded-[var(--radius-sm)] border-2 border-border/50 bg-background/80 px-4 py-2 text-sm text-primary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 font-medium cursor-pointer"
                          >
                            <option value="immediate">Immediate (&lt; 1 month)</option>
                            <option value="1-3-months">1 - 3 Months</option>
                            <option value="3-6-months">3 - 6 Months</option>
                            <option value="6-plus-months">6+ Months</option>
                          </select>
                        </motion.div>

                      </div>

                      {/* Full Width inputs */}
                      
                      {/* Description Area */}
                      <motion.div variants={formFieldVariants} className="space-y-2">
                        <label htmlFor="description" className="text-xs font-bold text-primary uppercase tracking-wider block">
                          Project Description & Scope <span className="text-accent">*</span>
                        </label>
                        <textarea
                          id="description"
                          required
                          rows={6}
                          placeholder="Detail your structures, calculations needed, soil type (if known), zoning constraints, or other architectural requirements..."
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="flex w-full rounded-[var(--radius-sm)] border-2 border-border/50 bg-background/80 px-4 py-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 font-light leading-relaxed resize-none"
                        />
                      </motion.div>

                      {/* File Upload Zone */}
                      <motion.div variants={formFieldVariants} className="space-y-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider block">
                          CAD / BIM / PDF Layout Upload
                        </label>
                        
                        <div
                          onDragEnter={handleDrag}
                          onDragOver={handleDrag}
                          onDragLeave={handleDrag}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-[var(--radius-md)] p-8 text-center cursor-pointer transition-all duration-300 ${
                            dragActive 
                              ? 'border-accent bg-accent/5 shadow-[0_0_15px_rgba(180,142,75,0.1)]' 
                              : 'border-border/60 hover:border-accent bg-background/40 hover:bg-secondary/5'
                          }`}
                          role="button"
                          aria-label="Upload files by dragging and dropping here, or click to browse"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              fileInputRef.current?.click();
                            }
                          }}
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange}
                            accept=".dwg,.dxf,.rvt,.ifc,.pdf,.jpg,.jpeg,.png"
                          />

                          <AnimatePresence mode="wait">
                            {uploadedFile ? (
                              <motion.div 
                                key="file-active"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col items-center gap-3 p-2"
                                onClick={(e) => e.stopPropagation()} // Prevent clicking file details from opening selector
                              >
                                <div className="p-3 bg-accent/10 text-accent rounded-lg">
                                  <FileText size={28} />
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm font-heading font-bold text-primary break-all">
                                    {uploadedFile.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground font-light">
                                    {formatFileSize(uploadedFile.size)}
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={removeFile}
                                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100/80 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50"
                                  aria-label="Remove uploaded file"
                                >
                                  <Trash2 size={13} />
                                  <span>Remove File</span>
                                </button>
                              </motion.div>
                            ) : (
                              <motion.div 
                                key="file-empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-3"
                              >
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto text-muted-foreground group-hover:text-accent transition-colors">
                                  <Upload size={20} />
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm font-semibold text-primary">
                                    Drag and drop your engineering file here
                                  </p>
                                  <p className="text-xs text-muted-foreground font-light">
                                    Supports DWG, RVT, IFC, PDF, JPG, PNG (Max 50MB)
                                  </p>
                                </div>
                                <span className="inline-flex text-xs font-bold text-accent uppercase tracking-wider">
                                  or browse local files
                                </span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div variants={formFieldVariants} className="pt-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-medium border-0 shadow-lg shadow-accent/15 group transition-all duration-300 cursor-pointer overflow-hidden relative"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span className="tracking-wide">COMPUTING ESTIMATION DATA...</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <span>GENERATE DETAILED PROPOSAL</span>
                              <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                          )}
                        </Button>
                      </motion.div>

                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-24 bg-secondary/30 border-y border-border/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <Container>
          <ScrollReveal direction="up">
            <SectionHeading 
              title="Partnering with Urban Blueprints"
              subtitle="We combine technical expertise, advanced digital twin modeling, and rigorous quality controls to deliver optimal engineering estimations."
              alignment="center"
              className="mb-16 text-center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Engineering Expertise",
                desc: "Licensed structural and civil engineers with decades of experience executing complex municipal capital designs."
              },
              {
                icon: Cpu,
                title: "Advanced Innovation",
                desc: "Utilizing state-of-the-art building information modeling (BIM), digital twins, and advanced geotechnical software."
              },
              {
                icon: ShieldCheck,
                title: "Uncompromising Quality",
                desc: "Rigorous quality assurance workflows, matching all municipal, environmental, and structural safety standards."
              },
              {
                icon: Network,
                title: "End-to-End Solutions",
                desc: "From initial soil stability testing and environmental permitting to structural calculations and project kickoff support."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal 
                  key={item.title} 
                  direction="up" 
                  delay={index * 0.1}
                  className="h-full"
                >
                  <motion.div 
                    whileHover={reducedMotion ? {} : { y: -6, transition: { duration: 0.2 } }}
                    className="p-6 rounded-[var(--radius-lg)] bg-background border border-border shadow-[var(--shadow-soft)] hover:shadow-md transition-all duration-300 flex flex-col h-full space-y-4"
                  >
                    <div className="w-12 h-12 bg-accent/10 border border-accent/20 text-accent rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ==================== PROJECT PROCESS ==================== */}
      <section className="py-24 bg-background relative overflow-hidden">
        <Container>
          <ScrollReveal direction="up">
            <SectionHeading 
              title="Proposal & Scoping Timeline"
              subtitle="Our clean, transparent engineering workflow takes you from initial scoping parameters to active structural execution."
              alignment="center"
              className="mb-20 text-center"
            />
          </ScrollReveal>

          {/* Stepper Workflow */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-[28px] left-[40px] right-[40px] h-0.5 bg-border/50 hidden lg:block z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Submit Inquiry",
                  desc: "Provide details of your structure, site location, timeline, and upload any initial drafts or CAD files."
                },
                {
                  step: "02",
                  title: "Scoping Consultation",
                  desc: "Our principal engineers review your requirements and schedule a technical call to align on design scope."
                },
                {
                  step: "03",
                  title: "Detailed Proposal",
                  desc: "Receive a comprehensive engineering proposal with clear milestone pricing, deliverables, and schedules."
                },
                {
                  step: "04",
                  title: "Project Kickoff",
                  desc: "Upon agreement, we assign dedicated engineers, initialize digital twin models, and begin structural computations."
                }
              ].map((item, index) => (
                <ScrollReveal 
                  key={item.step} 
                  direction="up" 
                  delay={index * 0.12}
                  className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-primary border-4 border-background text-white font-heading font-extrabold text-lg flex items-center justify-center shadow-md relative z-10">
                    <span className="text-accent">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary pt-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-24 bg-secondary/30 border-t border-border/50 relative overflow-hidden">
        <Container className="max-w-4xl">
          <ScrollReveal direction="up">
            <SectionHeading 
              title="Frequently Asked Questions"
              subtitle="Get quick technical details regarding our proposal parameters, accepted blueprint files, and zoning consultation."
              alignment="center"
              className="mb-16 text-center"
            />
          </ScrollReveal>

          {/* FAQ Accordion list */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index} 
                    className="border border-border/70 rounded-[var(--radius-md)] bg-background overflow-hidden transition-all shadow-[var(--shadow-soft)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-btn-${index}`}
                      className="w-full px-6 py-5 text-left font-heading font-bold text-primary hover:text-accent flex justify-between items-center gap-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
                    >
                      <span className="text-base md:text-lg">{faq.q}</span>
                      <ChevronDown 
                        size={18} 
                        className={`text-accent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          role="region"
                          aria-labelledby={`faq-btn-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-border/50"
                        >
                          <div className="px-6 py-5 text-sm md:text-base text-muted-foreground font-light leading-relaxed bg-secondary/5">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
