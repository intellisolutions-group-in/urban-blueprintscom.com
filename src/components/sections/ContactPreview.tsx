"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export function ContactPreview() {
  const reducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'transportation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', projectType: 'transportation', message: '' });
    }, 3000);
  };

  const formContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: 25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 13 }
    }
  };

  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Details & Blueprint Map */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="up">
              <SectionHeading
                title="Initiate Your Next Infrastructure Build"
                subtitle="Connect with our principal engineering team to discuss structural design, transit planning, or cost feasibility parameters."
                alignment="left"
                className="mb-6"
              />
            </ScrollReveal>

            {/* Quick Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {[
                { icon: MapPin, label: 'Main Office', val: '505 North State Street, London, UK' },
                { icon: Phone, label: 'Call Principal', val: '(968) 432-4578' },
                { icon: Mail, label: 'Email Desk', val: 'info@urbanblueprints.com' },
                { icon: Clock, label: 'Support Hours', val: 'Mon - Fri: 8:00 AM - 5:00 PM' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.label} direction="up" delay={index * 0.08 + 0.1}>
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 shadow-soft flex items-center justify-center text-accent shrink-0">
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                          {item.label}
                        </span>
                        <p className="text-sm font-heading font-bold text-primary mt-0.5">
                          {item.val}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Blueprint Grid Vector Map Mockup */}
            <ScrollReveal direction="up" delay={0.3} className="relative pt-4">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl -z-10" />

              <div className="rounded-2xl border-2 border-dashed border-accent/40 bg-[#0c223a] text-white p-6 relative aspect-video overflow-hidden flex flex-col justify-between shadow-float">
                {/* Blueprint grid lines */}
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

                {/* Vector blueprint map drawings */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" viewBox="0 0 350 200" fill="none">
                  {/* Roads / transit axes */}
                  <motion.path
                    d="M 20 100 L 330 100 M 175 10 L 175 190"
                    stroke="#b48e4b"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                  />
                  {/* Building outline frames */}
                  <motion.path
                    d="M 50 30 L 120 30 L 120 70 L 50 70 Z M 230 130 L 300 130 L 300 170 L 230 170 Z"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                  />
                  {/* Intersecting survey radial curves */}
                  <motion.path
                    d="M 175 100 A 60 60 0 1 1 174.9 100"
                    stroke="#b48e4b"
                    strokeWidth="0.75"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
                  />
                  {/* Pulsing Coordinate checkpoints sequentially */}
                  <motion.circle
                    cx="175"
                    cy="100"
                    r="4"
                    fill="#b48e4b"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [1, 2, 1] }}
                    viewport={{ once: true }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="85"
                    cy="50"
                    r="3"
                    fill="#3b82f6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [1, 2, 1] }}
                    viewport={{ once: true }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="265"
                    cy="150"
                    r="3"
                    fill="#3b82f6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [1, 2, 1] }}
                    viewport={{ once: true }}
                    transition={{ repeat: Infinity, duration: 2, delay: 1, ease: "easeInOut" }}
                  />
                </svg>

                <div className="flex justify-between items-center relative z-10">
                  <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">
                    Coordinatesssss // 51.5074° N, 0.1278° W
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                </div>

                <div className="text-center py-6 relative z-10">
                  <h4 className="text-lg font-heading font-bold mb-1">Urban Blueprints HQ</h4>
                  <p className="text-xs text-gray-300 font-light">Central Engineering Laboratory & Blueprint Studio</p>
                </div>

                <div className="flex justify-between items-center relative z-10 text-[9px] font-mono text-gray-400">
                  <span>SCALE 1:500</span>
                  <span>CAD_MODEL_ACTIVE</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={0.2}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-8 rounded-[var(--radius-xl)] bg-background border border-border shadow-[var(--shadow-float)] relative overflow-hidden"
              >
                <h3 className="text-2xl font-heading font-extrabold text-primary mb-2 tracking-tight">
                  Feasibility Request
                </h3>
                <p className="text-muted-foreground text-sm font-light mb-8">
                  Fill out the parameters below, and a principal civil engineer will review your project requirements within 24 hours.
                </p>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  variants={formContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Name Input */}
                  <motion.div variants={formFieldVariants} className="space-y-1">
                    <label htmlFor="name" className="text-xs font-semibold text-primary uppercase tracking-wide">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Johnathan Ross"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-gray-200 focus-visible:ring-accent focus:shadow-[0_0_15px_rgba(180,142,75,0.25)] transition-all duration-300"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div variants={formFieldVariants} className="space-y-1">
                    <label htmlFor="email" className="text-xs font-semibold text-primary uppercase tracking-wide">
                      Corporate Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. john@developer.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-gray-200 focus-visible:ring-accent focus:shadow-[0_0_15px_rgba(180,142,75,0.25)] transition-all duration-300"
                    />
                  </motion.div>

                  {/* Project Type Select */}
                  <motion.div variants={formFieldVariants} className="space-y-1">
                    <label htmlFor="projectType" className="text-xs font-semibold text-primary uppercase tracking-wide">
                      Engineering Discipline
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="flex h-12 w-full rounded-[var(--radius-sm)] border border-border bg-secondary/30 px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 focus:shadow-[0_0_15px_rgba(180,142,75,0.25)] transition-all duration-300 font-medium text-primary cursor-pointer"
                    >
                      <option value="transportation">Transportation Engineering</option>
                      <option value="structural">Structural Engineering</option>
                      <option value="water">Water Resources Engineering</option>
                      <option value="environmental">Environmental Engineering</option>
                      <option value="geotechnical">Geotechnical Engineering</option>
                    </select>
                  </motion.div>

                  {/* Message Input */}
                  <motion.div variants={formFieldVariants} className="space-y-1">
                    <label htmlFor="message" className="text-xs font-semibold text-primary uppercase tracking-wide">
                      Scope Overview
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Detail your structure coordinates, budget estimates, or build deadlines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="flex w-full rounded-[var(--radius-sm)] border border-border bg-secondary/30 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 focus:shadow-[0_0_15px_rgba(180,142,75,0.25)] transition-all duration-300 text-primary font-light leading-relaxed resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    variants={formFieldVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-2"
                  >
                    <Button
                      type="submit"
                      className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-medium border-0 shadow-lg shadow-accent/15 group transition-all duration-300 cursor-pointer overflow-hidden relative"
                    >
                      <AnimatePresence mode="wait">
                        {submitted ? (
                          <motion.span
                            key="success"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            className="flex items-center justify-center gap-2"
                          >
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.5 }}
                              className="w-2 h-2 rounded-full bg-white"
                            />
                            <span>FEASIBILITY TICKET VALIDATED</span>
                          </motion.span>
                        ) : (
                          <motion.span
                            key="submit"
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            className="flex items-center justify-center gap-2"
                          >
                            <span>Submit Project Parameters</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                </motion.form>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
