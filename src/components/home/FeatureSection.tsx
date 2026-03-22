'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FeatureSection() {
  const benefits = [
    "Deep, restorative sleep cycles",
    "Enhanced cognitive focus",
    "Natural craniofacial development in children",
    "Reduced systemic inflammation"
  ];

  const silentToll = [
    "Chronic fatigue and brain fog",
    "Behavioral issues in developing children",
    "Temporomandibular Joint (TMJ) disorders",
    "Increased risk of cardiovascular issues"
  ];

  return (
    <section id="airway-expansion" className="py-24 lg:py-32 bg-primary text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
          <span className="text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Airway Focus</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-white leading-[1.1] mb-8">
            Biohack your breath, <br />
            <span className="font-medium text-white/90">transform your life.</span>
          </h2>
          <p className="text-white/80 font-light text-lg leading-relaxed">
            Your airway is the cornerstone of biological health. A restricted airway acts as a silent toll on your entire system, while an optimized airway unlocks your body&apos;s full potential.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Benefits - Light translucent block */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 bg-white/5 p-10 lg:p-16 border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-display font-medium text-white mb-10 flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                <Plus className="w-4 h-4" />
              </span>
              The Benefits
            </h3>
            <ul className="space-y-6">
              {benefits.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                  <span className="text-white/90 font-light text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Toll - Extremely minimal block */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 p-10 lg:p-16 border border-white/10"
          >
            <h3 className="text-2xl font-display font-medium text-white mb-10 flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white/70">
                <Minus className="w-4 h-4" />
              </span>
              The Silent Toll
            </h3>
            <ul className="space-y-6">
              {silentToll.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 shrink-0" />
                  <span className="text-white/70 font-light text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
