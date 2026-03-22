'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="h-px w-10 bg-primary"></span>
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">Honest Family Dental</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-light leading-[1.05] tracking-tight text-slate-900"
          >
            Your family<br className="hidden sm:block" />
            <span className="font-medium text-primary ml-0 lg:ml-8">airway dentist</span><br />
            in Austin, TX.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-10 text-lg text-slate-500 font-light leading-relaxed max-w-md"
          >
            We help you achieve optimal oral-systemic health by addressing and resolving an impactful root cause to nearly all health issues: <strong className="font-medium text-slate-800">Sleep Disordered Breathing.</strong>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-14"
          >
            <button 
              className="px-8 py-4 bg-slate-900 text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary transition-colors duration-500 flex items-center gap-4 group"
            >
              Book an Appointment
              <span className="w-6 h-px bg-white/50 group-hover:w-10 group-hover:bg-white transition-all duration-500"></span>
            </button>
          </motion.div>
        </div>

        {/* Ultra-clean Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative h-[50vh] sm:h-[60vh] lg:h-[75vh]"
        >
          <div className="absolute inset-0 bg-slate-50 border border-black/5 overflow-hidden">
             {/* Note: using a highly clinical, clean architectural or lifestyle medical image */}
             <img 
               src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000&auto=format&fit=crop" 
               alt="Clean modern dental clinic"
               className="w-full h-full object-cover opacity-95 grayscale-[15%] transition-transform duration-[20s] hover:scale-105"
             />
          </div>
          {/* Subtle accent offset box to break grid */}
          <div className="absolute -left-6 -bottom-6 w-32 h-32 border border-slate-200 -z-10 hidden lg:block" />
        </motion.div>

      </div>
    </section>
  );
}
