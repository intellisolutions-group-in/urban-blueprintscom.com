import React from 'react';
import Link from 'next/link';
import { Building2, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-300 pt-24 pb-8 border-t-4 border-accent relative overflow-hidden mt-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-accent text-white p-2 rounded-md">
                <Building2 size={24} />
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">Urban Blueprints</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              At Urban Blueprints, we are driven by our passion to build the infrastructure that connects our communities and shapes the world around us.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/urbanblueprintscom" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/urbanblueprints" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com/urbanblueprintscom/" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" delay={0.2}>
            <h4 className="text-white font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent"></span> Quick Links
            </h4>
            <ul className="space-y-3">
              {navigation.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal direction="up" delay={0.3}>
            <h4 className="text-white font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent"></span> Core Services
            </h4>
            <ul className="space-y-3">
              {navigation.find(n => n.name === 'Services')?.dropdown?.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                     <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal direction="up" delay={0.4}>
            <h4 className="text-white font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent"></span> Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <span className="text-sm">505 North State Street,<br />London, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-accent shrink-0" />
                <span className="text-sm">(968) 432-4578</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-accent shrink-0" />
                <span className="text-sm">info@urbanblueprints.com</span>
              </li>
            </ul>
          </ScrollReveal>

        </div>

        {/* Bottom Bar */}
        <ScrollReveal direction="up" delay={0.5} className="pt-8 border-t border-primary-light flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {currentYear} Urban Blueprints. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
