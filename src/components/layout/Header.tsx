'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Airway Expansion', href: '#airway-expansion' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-4' : 'bg-white/50 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center block">
          <img 
            src="/img/logo.png" 
            alt="Honest Family Dental" 
            className="h-8 lg:h-10 w-auto object-contain" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-medium text-slate-500 hover:text-primary uppercase tracking-widest transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button className="px-6 py-2.5 bg-transparent border border-slate-200 text-slate-900 text-xs font-semibold uppercase tracking-widest hover:bg-slate-50 transition-all duration-300">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white flex flex-col pt-6 px-6 pb-12"
          >
            <div className="flex items-center justify-between mb-16">
              <a href="#" className="flex items-center">
                <img 
                  src="/img/logo.png" 
                  alt="Honest Family Dental" 
                  className="h-10 w-auto object-contain" 
                />
              </a>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-8 h-8 stroke-[1]" />
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-center mt-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-light text-slate-800 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto">
              <button className="w-full py-5 bg-slate-900 text-white font-medium uppercase tracking-widest text-sm hover:bg-primary transition-colors duration-500">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
