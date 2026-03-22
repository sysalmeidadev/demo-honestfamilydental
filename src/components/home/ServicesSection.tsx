'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Biological Dental Implants",
      desc: "Zirconia, metal-free implants that integrate flawlessly with your biology.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Biomimetic Crowns",
      desc: "Restorations designed to mimic the exact biomechanics of natural teeth.",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Tongue Tie Release",
      desc: "Advanced laser frenectomy for profound improvements in breathing and speech.",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Myofunctional Therapy",
      desc: "Physical therapy for the muscles of your face, mouth, and airway.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 lg:mb-32">
          <div>
            <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-light text-slate-900 leading-[1.1]">
              Comprehensive <br />
              <span className="font-medium text-primary">clinical services</span>
            </h2>
          </div>
          <button className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-900 hover:text-primary transition-colors">
            View all services
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-50 mb-6">
                <img 
                  src={svc.img} 
                  alt={svc.title} 
                  className="w-full h-full object-cover grayscale-[30%] opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-display font-medium text-slate-900 mb-3">{svc.title}</h3>
              <p className="text-sm font-light text-slate-500 leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
