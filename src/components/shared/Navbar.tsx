"use client";
// Trigger HMR Rebuild
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Building2, Phone, Mail } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';

  const navBackgroundClass = isScrolled
    ? "bg-background/95 backdrop-blur-md shadow-soft py-4 border-b border-border"
    : "bg-background/80 backdrop-blur-md py-5 border-b border-border/20";

  const textColorClass = "text-primary";

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        navBackgroundClass
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-md focus-visible:outline-none">
              <img src="/images/logo/Urban_Logo_Final-02.png" alt="Urban Blueprints Logo" className="h-12 md:h-14 w-auto object-contain" width="160" height="64" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.dropdown && pathname.startsWith(item.href));
                return (
                  <div key={item.name} className="relative group">
                    {item.dropdown ? (
                      <div
                        tabIndex={0}
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === item.name}
                        onFocus={() => setActiveDropdown(item.name)}
                        onBlur={() => setActiveDropdown(null)}
                        className={cn(
                          "flex items-center gap-1 font-medium cursor-pointer py-2 transition-colors focus:outline-none focus:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm focus-visible:outline-none",
                          textColorClass,
                          isActive ? "text-accent" : "hover:text-accent"
                        )}
                      >
                        {item.name}
                        <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 w-64 bg-background border border-border shadow-float rounded-[var(--radius-md)] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 overflow-hidden">
                          <div className="py-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-primary transition-colors focus-visible:bg-secondary focus-visible:text-primary focus-visible:outline-none"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "font-medium transition-colors py-2 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm focus-visible:outline-none",
                          textColorClass,
                          isActive ? "text-accent" : "hover:text-accent"
                        )}
                      >
                        <span className="relative inline-block py-1">
                          {item.name}
                          {isActive && (
                            <motion.div
                              layoutId="active-nav"
                              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                            />
                          )}
                        </span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>


            {/* Mobile Menu Toggle */}
            <button
              className={cn("md:hidden p-2 focus:outline-none rounded-[var(--radius-sm)] focus-visible:ring-2 focus-visible:ring-accent", textColorClass)}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open main menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                    <img src="/images/logo/Urban_Logo_Final-02.png" alt="Urban Blueprints Logo" className="h-8 w-auto object-contain" width="120" height="32" />
                  </Link>
                  <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-primary bg-secondary p-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label="Close menu">
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-4 flex-grow">
                  {navigation.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 pb-4">
                      {item.dropdown ? (
                        <div>
                          <button
                            className="flex justify-between items-center w-full text-left font-medium text-lg text-primary focus:outline-none rounded-md focus-visible:ring-2 focus-visible:ring-accent/50"
                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                            aria-expanded={activeDropdown === item.name}
                          >
                            {item.name}
                            <ChevronDown size={18} className={cn("transition-transform", activeDropdown === item.name && "rotate-180")} />
                          </button>

                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pt-3 space-y-3 flex flex-col">
                                  {item.dropdown.map(subItem => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-gray-600 hover:text-accent"
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-medium text-lg text-primary block w-full"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail size={16} className="text-accent" />
                    <span>info@urbanblueprints.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
