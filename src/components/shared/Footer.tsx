import React from 'react';
import Link from 'next/link';
import { Building2, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-muted-foreground pt-24 pb-8 border-t-4 border-accent relative overflow-hidden mt-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-6">
              <Link href="/" className="inline-block group focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-md focus-visible:outline-none">
                <img src="/images/logo/Urban_Logo_Final-02.png" alt="Urban Blueprints Logo" className="h-16 md:h-20 w-auto object-contain" width="200" height="80" loading="lazy" />
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                At Urban Blueprints, established in 2021, we are driven by our passion to build the infrastructure that connects our communities and shapes the world around us.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/urbanblueprintscom" target="_blank" rel="noreferrer" className="bg-slate-200/60 text-muted-foreground p-2 rounded-full hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://twitter.com/urbanblueprints" target="_blank" rel="noreferrer" className="bg-slate-200/60 text-muted-foreground p-2 rounded-full hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="https://instagram.com/urbanblueprintscom/" target="_blank" rel="noreferrer" className="bg-slate-200/60 text-muted-foreground p-2 rounded-full hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" delay={0.2}>
            <h3 className="text-primary font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent"></span> Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal direction="up" delay={0.3}>
            <h3 className="text-primary font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent"></span> Core Services
            </h3>
            <ul className="space-y-3">
              {navigation.find(n => n.name === 'Services')?.dropdown?.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal direction="up" delay={0.4}>
            <h3 className="text-primary font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent"></span> Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm">Office No. 17, 3rd floor, VTP Town Square, Mhalunge - Nande Rd, Mahalunge, Pune, Maharashtra 411045</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="text-accent shrink-0" />
                <span className="text-sm">+91 85110 25807</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={20} className="text-accent shrink-0" />
                <span className="text-sm">info@urban-blueprintscom.com</span>
              </li>
            </ul>
          </ScrollReveal>

        </div>

        {/* Bottom Bar */}
        <ScrollReveal direction="up" delay={0.5} className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2021 - {currentYear} Urban Blueprints. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
