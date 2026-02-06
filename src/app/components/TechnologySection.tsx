/**
 * Technology Section Component
 * Features:
 * - Lucide-React icons in Royal Blue next to technical bullet points
 * - Glass cards with precise styling
 * - 50/50 split layout alternating left/right
 * - Professional typography with line-height 1.7
 */

import { Droplet, Activity, Zap, Leaf, Recycle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TechFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function TechFeature({ icon, title, description, delay = 0 }: TechFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex gap-4"
    >
      {/* Icon in Royal Blue */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#004A99]/10 flex items-center justify-center">
        <div className="text-[#004A99]">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div>
        <h4 className="text-white font-semibold mb-2">{title}</h4>
        <p className="text-gray-400 leading-[1.7] font-normal text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

export function TechnologySection() {
  return (
    <section id="technology" className="py-24">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-28"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
             Engineering the Reclamation Lifecycle
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-[1.7] font-normal">
             A high-precision sequence of engineering phases transforming 
             wastewater into Egypt's most valuable agricultural resource.
          </p>
        </motion.div>

        {/* Phase 1: Intake (Image Left, Content Right) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#004A99]/20 bg-gray-900 border border-white/5">
              <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full bg-[#004A99] text-white text-[10px] font-black uppercase tracking-[0.2em]">
                System phase 01
              </div>
              <ImageWithFallback
                src="/images/water-intake-pumping.jpg"
                alt="4 Massive 3800mm Industrial Siphons"
                className="w-full h-[550px] object-cover"
              />
            </div>
          </motion.div>

          <GlassCard className="p-8 lg:p-12 relative overflow-hidden" delay={0.2}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#004A99]/5 rounded-bl-full" />
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Hydraulic Intake Systems</h3>
            <p className="text-gray-300 mb-8 leading-[1.8] text-lg font-light">
              Engineering the record-breaking intake infrastructure utilizing 
              <span className="text-[#004A99] font-bold"> 4 massive 3800mm diameter siphons </span> 
              to traverse the Suez Canal, ensuring a constant 5.6M m³ daily flow.
            </p>
            <div className="space-y-6">
              <TechFeature icon={<Droplet size={24} />} title="3800mm Siphons" description="Industrial-grade metallurgy engineered for extreme pressure and volume." />
              <TechFeature icon={<Activity size={24} />} title="Regulation Hub" description="Automated intake control for consistent treatment influx." />
            </div>
          </GlassCard>
        </div>

        {/* Phase 2: Sedimentation (Content Left, Image Right) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-40">
          <GlassCard className="p-8 lg:p-12 lg:order-2" delay={0.2}>
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Purification & Sedimentation</h3>
            <p className="text-gray-300 mb-8 leading-[1.8] text-lg font-light">
              The core purification process utilizing ultra-modern sedimentation tanks 
              to remove suspended solids, powered by CMS integrated engineering solutions.
            </p>
            <div className="space-y-6">
              <TechFeature icon={<Zap size={24} />} title="Triple-Stage Process" description="Removing 99.9% of micro-sediments via advanced filtration." />
              <TechFeature icon={<Shield size={24} />} title="Purity Standards" description="Exceeding Egyptian Code 501/2015 for agricultural reuse." />
            </div>
          </GlassCard>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#004A99]/10 bg-gray-900 border border-white/5">
              <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full bg-[#004A99] text-white text-[10px] font-black uppercase tracking-[0.2em]">
                System phase 02
              </div>
              <ImageWithFallback
                src="/images/sedimentation-tanks-top.jpg"
                alt="Bahr Al-Baqar Sedimentation Tanks"
                className="w-full h-[550px] object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Phase 3: Piping (Image Left, Content Right) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/5">
              <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full bg-[#004A99] text-white text-[10px] font-black uppercase tracking-[0.2em]">
                System phase 03
              </div>
              <ImageWithFallback
                src="/images/technical-piping-system.jpg"
                alt="Complex Distribution Network"
                className="w-full h-[550px] object-cover"
              />
            </div>
          </motion.div>

          <GlassCard className="p-8 lg:p-12" delay={0.2}>
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Distribution Net</h3>
            <p className="text-gray-300 mb-8 leading-[1.8] text-lg font-light">
              A high-complexity piping network spanning hundreds of kilometers, 
              orchestrating the distribution of reclaimed water to 456,000 feddans.
            </p>
            <div className="space-y-6">
              <TechFeature icon={<Activity size={24} />} title="SCADA Integration" description="Real-time flow monitoring across the entire Canal network." />
              <TechFeature icon={<Zap size={24} />} title="Mechanical Precision" description="High-durability distribution valves and surge protection." />
            </div>
          </GlassCard>
        </div>

        {/* Phase 4: Innovation (Content Left, Image Right) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-40">
          <GlassCard className="p-8 lg:p-12 lg:order-2" delay={0.2}>
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Innovation & Sustainability</h3>
            <p className="text-gray-300 mb-8 leading-[1.8] text-lg font-light">
               Home to the <span className="text-blue-400 font-bold">world's largest solar sludge drying facility</span>, 
               transforming residuals into reusable environmental resources.
            </p>
            <div className="space-y-6">
              <TechFeature icon={<Leaf size={24} />} title="Solar-Thermal Drying" description="Advanced dehydration using zero-emission solar tech." />
              <TechFeature icon={<Recycle size={24} />} title="Circular Operations" description="Minimizing waste via integrated CFM management." />
            </div>
          </GlassCard>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/5">
              <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full bg-[#004A99] text-white text-[10px] font-black uppercase tracking-[0.2em]">
                System phase 04
              </div>
              <ImageWithFallback
                src="/images/sludge-solar-drying.jpg"
                alt="World's Largest Solar Sludge Drying Facility"
                className="w-full h-[550px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Phase 5: Result (Image Left, Content Right) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/5">
              <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full bg-[#004A99] text-white text-[10px] font-black uppercase tracking-[0.2em]">
                System phase 05
              </div>
              <ImageWithFallback
                src="/images/final-treated-canal.jpg"
                alt="Pure Water Canal irrigation Sinai"
                className="w-full h-[550px] object-cover"
              />
            </div>
          </motion.div>

          <GlassCard className="p-8 lg:p-12" delay={0.2}>
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">The Result</h3>
            <p className="text-gray-300 mb-8 leading-[1.8] text-lg font-light">
               High-quality reclaimed water flowing into <span className="text-blue-400 font-bold">Sinai's irrigation network</span>, 
               securing Egypt's food and water sovereignty.
            </p>
            <div className="space-y-6">
              <TechFeature icon={<Droplet size={24} />} title="Treated Output" description="5.6M m³ of pure reclaimed water daily." />
              <TechFeature icon={<Activity size={24} />} title="National Project" description="Powering the development of 456,000 new feddans." />
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
