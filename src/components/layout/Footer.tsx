import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          <div className="lg:col-span-6">
            <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6 block">Ready to transform?</span>
            <h2 className="text-4xl sm:text-5xl font-display font-light text-slate-900 leading-[1.1] mb-10 max-w-md">
              Biohack your breath, <br />
              <span className="font-medium text-primary">change your life.</span>
            </h2>
            <button className="px-8 py-4 bg-slate-900 text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary transition-colors duration-500 flex items-center gap-4 group">
              Book your consultation
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Why Choose Us', 'Airway Expansion', 'Services'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-primary transition-colors font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
             <h4 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-8">Contact</h4>
             <ul className="space-y-4 font-light text-slate-500">
               <li>123 Airway Blvd, Suite 100<br />Austin, TX 78701</li>
               <li>(512) 555-0199</li>
               <li>hello@honestfamilydental.com</li>
             </ul>
             <div className="mt-8">
               <a href="#" className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary hover:text-slate-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-primary/30">
                 Follow us on TikTok
               </a>
             </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-slate-400">
          <p>© {new Date().getFullYear()} Honest Family Dental. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
