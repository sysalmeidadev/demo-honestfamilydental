'use client';

import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      id: "01",
      title: "Biological Excellence",
      description: "We use biocompatible materials and advanced ozone therapy to ensure your treatments support your overall systemic health, avoiding toxic alternatives.",
    },
    {
      id: "02",
      title: "Airway Focus",
      description: "Our paradigm shifts from mechanics to breathing. We treat the root cause of sleep breathing disorders, not just the symptoms.",
    },
    {
      id: "03",
      title: "Minimal Intervention",
      description: "Preserving your natural tooth structure is our priority. We employ biomimetic techniques that restore teeth to their original strength.",
    },
    {
      id: "04",
      title: "Advanced Technology",
      description: "Equipped with 3D CBCT imaging and intraoral scanners, we provide precise diagnostics with minimal radiation exposure for your family.",
    }
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 lg:mb-32">
          <div className="w-full lg:w-1/3">
             <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Our Philosophy</span>
             <h2 className="text-4xl md:text-5xl font-display font-light text-slate-900 leading-[1.1]">
               Why choose <br />
               <span className="font-medium text-primary">Honest Family</span>
             </h2>
          </div>
          <div className="w-full lg:w-2/3 lg:pt-8 text-slate-500 font-light leading-relaxed max-w-2xl text-lg lg:text-xl">
             We reject the industrial approach to dentistry. Instead, we embrace a holistic framework that meticulously considers the connection between your oral health, your airway, and your body&apos;s innate healing capacity.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-24">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="group flex flex-col"
            >
              <div className="flex items-center gap-6 mb-6">
                <span className="text-4xl font-display font-light text-slate-200 transition-colors duration-500 group-hover:text-primary">
                  {feature.id}
                </span>
                <div className="h-[1px] w-12 bg-slate-200 transition-all duration-500 group-hover:w-24 group-hover:bg-primary" />
              </div>
              <h3 className="text-2xl font-display font-medium text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
