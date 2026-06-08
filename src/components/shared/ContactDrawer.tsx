"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for getting in touch! We will get back to you shortly.');
    setIsOpen(false);
    setFormData({ name: '', contact: '', message: '' });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-accent text-white px-3 py-4 rounded-l-md shadow-lg flex items-center justify-center hover:bg-accent/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent group"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        aria-label="Get in touch"
      >
        <span className="rotate-180 flex items-center gap-2 font-medium tracking-wider">
          <MessageCircle className="rotate-90 w-5 h-5 mb-1" />
          Get in touch
        </span>
      </button>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[101] w-full max-w-md bg-background shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-border">
                <h2 className="text-2xl font-heading font-semibold text-primary">Get in Touch</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto p-6 space-y-8 overscroll-contain" data-lenis-prevent>
                {/* Form */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-primary border-b border-border pb-2">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-transparent text-foreground"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact" className="block text-sm font-medium text-primary mb-1">Email or Contact No.</label>
                      <input
                        type="text"
                        id="contact"
                        name="contact"
                        required
                        value={formData.contact}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-transparent text-foreground"
                        placeholder="your@email.com or phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-transparent text-foreground resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                      Submit
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mt-8">
                  <h3 className="text-lg font-medium text-primary border-b border-border pb-2">Company Details</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Urban Blueprints is a premier civil engineering firm dedicated to connecting communities and shaping the modern landscape through innovative, sustainable infrastructure.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p className="text-sm">-</p>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5 text-accent shrink-0" />
                      <p className="text-sm">-</p>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-5 h-5 text-accent shrink-0" />
                      <p className="text-sm">info@urbanblueprints.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
