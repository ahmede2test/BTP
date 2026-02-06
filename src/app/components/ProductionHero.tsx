/**
 * Production Hero Component for Bahr Al-Baqar Project
 * Features:
 * - 50/50 Split-Screen layout using CSS Grid
 * - Professional typography (Bold 700 headings, Regular 400 body with 1.7 line-height)
 * - Magnetic CTA buttons
 * - Smooth Motion animations
 */

import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { MagneticButton } from './MagneticButton';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductionHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20">
      <Container>
        {/* 50/50 Grid Layout with precise gap */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Project Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[#004A99] animate-pulse" />
              <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Engineering the Future of Sinai</span>
            </motion.div>
            
            {/* Main Heading - Industrial Bold */}
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-[1.05]">
              Engineering
              <br />
              <span className="bg-gradient-to-r from-[#004A99] via-blue-400 to-white bg-clip-text text-transparent">
                Egypt's Water Security
              </span>
            </h1>
            
            {/* Body Text */}
            <p className="text-xl text-gray-300 mb-8 leading-[1.7] font-normal max-w-xl">
              Building the world's largest water reclamation facility. A pivotal 
              infrastructure milestone by Contrack and CFM, reclaiming 456,000 
              feddans for Sinai's future.
            </p>
            
            {/* CTA Buttons with Magnetic Effect */}
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton variant="primary">
                Explore Plant Phases
                <ArrowRight size={20} />
              </MagneticButton>
              
              <MagneticButton variant="secondary">
                <Download size={20} />
                Technical Datasheet
              </MagneticButton>
            </div>

            {/* Quick Stats - Animated Counters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10"
            >
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">5.6M</div>
                <div className="text-sm text-gray-400 font-medium">m³/Day Capacity</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">120</div>
                <div className="text-sm text-gray-400 font-medium">Triple-Disc Filters</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">456K</div>
                <div className="text-sm text-gray-400 font-medium">Feddans Reclaimed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main Image with Glass Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-teal-900/20 z-10" />
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-2xl z-20" />
              <ImageWithFallback
                src="/images/hero-aerial-view.jpg"
                alt="Bahr Al-Baqar Water Reclamation Plant Aerial View"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Floating Accent Elements for Depth */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#004A99]/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
