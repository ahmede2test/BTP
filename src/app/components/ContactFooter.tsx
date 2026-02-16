import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from './Container';

export function ContactFooter() {
  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-[#020617] border-t border-white/10 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="mb-16 border-b border-white/5 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                Contrack Facilities Management S.A.E.
              </h2>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.3em]">
                Managing Entity & Infrastructure Partner
              </p>
            </div>
            <img 
              src="/images/Logo.png" 
              alt="CFM Logo" 
              className="h-14 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 text-left">
          {/* Column 1: Identity */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <img 
              src="/images/BTP Logo.jpeg" 
              alt="BTP Logo" 
              className="h-16 w-auto self-start rounded-lg border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div>
              <h3 className="text-white font-bold text-xl mb-1 tracking-tight">
                Bahr Al-Baqar Treatment Plant
              </h3>
              <p className="text-blue-400/60 text-[10px] uppercase tracking-[0.3em] font-semibold">
                Official Managed Portal
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Directing the future of Egypt's water security through world-class reclamation and infrastructure management.
            </p>
          </div>

          {/* Column 2: Official Management */}
          <div className="lg:col-span-3 flex flex-col gap-6 ">
            <div>
              <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold block mb-4">
                Operations & Maintenance
              </span>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Our specialized teams ensure 24/7 efficiency and compliance with global environmental standards at every stage of the treatment lifecycle.
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/5">
              <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold block mb-3">
                Certifications
              </span>
              <p className="text-blue-100/40 text-[11px] font-medium tracking-wide">
                CERTIFIED ISO 9001:2008<br />
                OHSAS 18001:2007 COMPANY
              </p>
            </div>
          </div>

          {/* Column 3: Direct Contact (Expanded with Map) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold block">
              Direct Contact
            </span>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
              {/* Interactive Map Frame: 20px corners + Blue Glow */}
              <div className="relative group rounded-[20px] overflow-hidden border border-white/10 bg-white/5 h-56 xl:h-full min-h-[200px] shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.4)] transition-all duration-500">
                <iframe
                  title="HQ Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.8856627582294!2d31.22915667634433!3d30.06877051744158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458410290ca6cdf%3A0x6b2e31643c13955e!2sNile%20City%20Towers!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                  className="w-full h-full grayscale invert-[0.9] opacity-30 contrast-[1.2] group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                  loading="lazy"
                />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Nile+City+Towers,+Corniche+El+Nile,+Cairo,+Egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300"
                >
                  <div className="px-6 py-2.5 rounded-full bg-[#004A99] text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl shadow-black/80">
                    Explore HQ Location
                  </div>
                </a>
              </div>

              {/* Contact Credentials: Gray to Royal Blue Transitions */}
              <div className="flex flex-col gap-6">
                {/* HQ */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Nile+City+Towers,+Corniche+El+Nile,+Cairo,+Egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 group cursor-pointer items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">Headquarters</span>
                    <span className="text-gray-400 text-sm leading-snug group-hover:text-white transition-colors">
                      2005A Nile City Towers, South Tower, 4th floor, Corniche El Nile, Cairo, Egypt.
                    </span>
                  </div>
                </a>

                {/* Website */}
                <a 
                  href="http://www.contrackfm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 group cursor-pointer items-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-all duration-300">
                    <Globe size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-0.5">Official Website</span>
                    <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                      www.contrackfm.com
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:info@contrackfm.com"
                  className="flex gap-4 group cursor-pointer items-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-0.5">Contact Email</span>
                    <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                      info@contrackfm.com
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Final Compliance Bar */}
        <div className="w-full pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 hover:text-white/40 transition-colors cursor-default">
            OFFICIAL BAHR AL-BAQAR MANAGED PORTAL
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
            <span className="text-[10px] text-gray-500 font-bold tracking-[0.1em] uppercase">
              ISO 9001:2008 & OHSAS 18001:2007
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
