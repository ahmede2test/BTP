/**
 * Impact Section Component
 * Features:
 * - Animated statistics with Motion
 * - Glass cards for each stat
 * - Gradient overlays for premium feel
 * - Grid layout with precise spacing
 */

import { motion } from 'framer-motion';
import { Users, TreePine, Waves, Factory } from 'lucide-react';
import { Container } from './Container';
import { GlassCard } from './GlassCard';

interface ImpactCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  delay?: number;
}

function ImpactCard({ icon, value, label, description, delay = 0 }: ImpactCardProps) {
  return (
    <GlassCard className="p-8" delay={delay}>
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#004A99] to-[#005bb5] flex items-center justify-center mb-6 shadow-lg shadow-[#004A99]/30">
        <div className="text-white">
          {icon}
        </div>
      </div>
      
      {/* Value with gradient text */}
      <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
        {value}
      </div>
      
      {/* Label */}
      <div className="text-white font-semibold mb-3 text-lg">
        {label}
      </div>
      
      {/* Description */}
      <p className="text-gray-400 leading-[1.7] font-normal text-sm">
        {description}
      </p>
    </GlassCard>
  );
}

export function ImpactSection() {
  const impacts = [
    {
      icon: <Waves size={28} />,
      value: "5.6M",
      label: "m³/day Capacity",
      description: "Record-breaking daily treatment capacity, fueling the reclamation of vast desert lands."
    },
    {
      icon: <TreePine size={28} />,
      value: "456K",
      label: "Feddans Reclaimed",
      description: "Transforming the Sinai landscape into productive agricultural zones with treated water."
    },
    {
      icon: <Users size={28} />,
      value: "120",
      label: "Disc Filters",
      description: "State-of-the-art triple-disc filtration system ensuring 10-micron water precision."
    },
    {
      icon: <Factory size={28} />,
      value: "100%",
      label: "Contrack Managed",
      description: "Delivering engineering excellence and operational stability through CMS expertise."
    }
  ];

  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="/images/final-treated-canal.jpg" 
          alt="Final Treated Water Canal" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#004A99]/5 to-transparent pointer-events-none" />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
             National Impact & Scale
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-[1.7] font-normal">
             Securing Egypt's water future through engineering and sustainability at scale.
          </p>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
             <ImpactCard
               key={index}
               icon={impact.icon}
               value={impact.value}
               label={impact.label}
               description={impact.description}
               delay={index * 0.1}
             />
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <GlassCard className="p-8 max-w-4xl mx-auto" delay={0.6}>
            <p className="text-lg text-gray-300 leading-[1.7] font-normal">
              The Bahr Al-Baqar Water Reclamation Plant by Contrack Management Services 
              is a cornerstone of Egypt's 2030 vision. By reclaiming 456,000 feddans 
              in Sinai, the project ensures long-term food security and climate resilience.
            </p>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}
