'use client';

import { motion } from 'framer-motion';

export default function SocialProofBar() {
  const avatars = [
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
  ];

  return (
    <section className="relative z-20 bg-white border-b border-slate-100 py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* TikTok Metric */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto text-center sm:text-left">
            <div className="flex -space-x-3">
              {avatars.map((url, i) => (
                <img 
                  key={i}
                  className="w-12 h-12 rounded-full border-[3px] border-white object-cover shadow-sm grayscale-[20%]" 
                  style={{ zIndex: 10 - i }}
                  src={url} 
                  alt="Patient avatar" 
                />
              ))}
            </div>
            <div>
              <p className="text-2xl font-display font-medium text-slate-800">160K+ Followers</p>
              <p className="text-xs text-slate-400 font-semibold tracking-widest uppercase mt-1">2.5M+ Likes on TikTok</p>
            </div>
          </div>
          
          <div className="h-px w-full md:w-px md:h-16 bg-slate-100 hidden md:block" />

          {/* Clean text trust markers */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 lg:gap-16 w-full md:w-auto text-center sm:text-left">
            <div className="flex flex-col">
              <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-2">01</span>
              <span className="font-display text-slate-800 font-medium text-lg">Trusted Authority</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-2">02</span>
              <span className="font-display text-slate-800 font-medium text-lg">Holistic Approach</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-2">03</span>
              <span className="font-display text-slate-800 font-medium text-lg">Vetted Experts</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
