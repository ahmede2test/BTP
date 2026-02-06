/**
 * Contact & Footer Component
 * Features:
 * - Professional contact information
 * - Glass card design
 * - Brand-consistent footer
 * - Social links and project info
 */

import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { GlassCard } from './GlassCard';
import { MagneticButton } from './MagneticButton';

export function ContactFooter() {
  return (
    <>
      {/* Contact Section */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Partner With
                  <br />
                  <span className="bg-gradient-to-r from-[#004A99] to-[#005bb5] bg-clip-text text-transparent">
                    CMS Engineering
                  </span>
                </h2>
              
              <p className="text-xl text-gray-300 leading-[1.7] font-normal mb-10">
                Interested in collaborating on large-scale infrastructure projects? 
                Our team of experts is ready to discuss your vision.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#004A99]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#004A99]" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-medium mb-1">Phone</div>
                    <div className="text-white text-lg font-semibold">+20 (2) 2735 4000</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#004A99]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#004A99]" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-medium mb-1">Email</div>
                    <div className="text-white text-lg font-semibold">projects@contrack.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#004A99]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#004A99]" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-medium mb-1">Headquarters</div>
                    <div className="text-white text-lg font-semibold">Cairo, Egypt</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <GlassCard className="p-8 lg:p-10" delay={0.2}>
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Company or institution"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent resize-none transition-all"
                  />
                </div>

                <MagneticButton variant="primary" type="submit" className="w-full">
                  Submit Inquiry
                </MagneticButton>
              </form>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#004A99] to-[#005bb5] flex items-center justify-center shadow-lg shadow-[#004A99]/30">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">Bahr Al-Baqar</div>
                  <div className="text-[#004A99] text-xs font-semibold uppercase tracking-wider">Water Reclamation Plant</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-[1.7] font-normal max-w-md">
                A Contrack Management Services flagship project delivering world-class water 
                reclamation infrastructure for sustainable agricultural development in Sinai.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Project</h4>
              <ul className="space-y-2">
                <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors text-sm">Overview</a></li>
                <li><a href="#technology" className="text-gray-400 hover:text-white transition-colors text-sm">Technology</a></li>
                <li><a href="#impact" className="text-gray-400 hover:text-white transition-colors text-sm">Impact</a></li>
                <li><a href="#specs" className="text-gray-400 hover:text-white transition-colors text-sm">Specifications</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-gray-400 hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={18} className="text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright & Dual Branding */}
          <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-6 grayscale opacity-70">
              <img 
                src="/images/Logo.png" 
                alt="CFM Logo" 
                className="h-10 w-auto object-contain" 
              />
              <div className="h-6 w-px bg-white/10" />
              <div className="text-white/60 font-bold text-sm tracking-widest uppercase">
                CONTRACK
              </div>
            </div>
            <p className="text-gray-500 text-xs tracking-wider uppercase">
              &copy; 2026 Contrack Management Services. All rights reserved. | Bahr Al-Baqar Official Portal
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
