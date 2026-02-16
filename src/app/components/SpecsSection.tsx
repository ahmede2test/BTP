/**
 * Project Specifications Section
 * Features:
 * - Technical specifications in organized grid
 * - Tabbed interface for different spec categories
 * - Glass cards with hover effects
 * - Professional data presentation
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';
import { GlassCard } from './GlassCard';
import { MagneticButton } from './MagneticButton';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  FileText, 
  Download, 
  Droplet, 
  Activity, 
  Filter, 
  Container as ContainerIcon, 
  Cpu, 
  CheckCircle,
  TreePine,
  Sun,
  Waves,
  Recycle,
  Leaf,
  Zap,
  MapPin,
  Factory,
  Building,
  Battery,
  Shield,
  MessageSquare
} from 'lucide-react';

interface SpecCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay?: number;
}

function SpecCard({ icon, label, value, delay = 0 }: SpecCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group"
    >
      <GlassCard className="h-full p-6 relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_30px_-5px_rgba(0,74,153,0.3)] group-hover:border-[#004A99]/50">
        {/* Glow effect on hover */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#004A99]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#004A99]/10 flex items-center justify-center text-[#004A99] group-hover:bg-[#004A99] group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          
          <div>
            <div className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-1">
              {label}
            </div>
            <div className="text-white font-bold text-lg leading-snug group-hover:text-blue-400 transition-colors">
              {value}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function SpecsSection() {
  const [activeTab, setActiveTab] = useState<'technical' | 'environmental' | 'infrastructure'>('technical');

  const tabs = [
    { id: 'technical' as const, label: 'Technical Specs' },
    { id: 'environmental' as const, label: 'Environmental' },
    { id: 'infrastructure' as const, label: 'Infrastructure' }
  ];

  const specs = {
    technical: [
      { label: "Treatment Capacity", value: "5.6 million m³/day", icon: <Droplet size={24} /> },
      { label: "Intake Lines", value: "4 main lines (3800mm diameter)", icon: <Activity size={24} /> },
      { label: "Filtration", value: "120 Triple-disc filters (10-micron)", icon: <Filter size={24} /> },
      { label: "Tanks", value: "Advanced Lamella Sedimentation Tanks", icon: <ContainerIcon size={24} /> },
      { label: "Automation", value: "Full SCADA Central Control", icon: <Cpu size={24} /> },
      { label: "Output Standard", value: "Egyptian Code for Water Reuse", icon: <CheckCircle size={24} /> }
    ],
    environmental: [
      { label: "Reclamation Scope", value: "456,000 feddans in Sinai", icon: <TreePine size={24} /> },
      { label: "Sludge Management", value: "Solar drying (Largest in region)", icon: <Sun size={24} /> },
      { label: "Lake Manzala Impact", value: "100% prevention of drainage pollution", icon: <Waves size={24} /> },
      { label: "Sustainability", value: "Zero liquid discharge philosophy", icon: <Recycle size={24} /> },
      { label: "Ecosystem Benefit", value: "Restoring Sinai biodiversity", icon: <Leaf size={24} /> },
      { label: "Climate Resilience", value: "Major carbon sequestration potential", icon: <Zap size={24} /> }
    ],
    infrastructure: [
      { label: "Major Crossings", value: "Dual siphons under Suez Canal", icon: <MapPin size={24} /> },
      { label: "Operator", value: "Contrack Management Services", icon: <Factory size={24} /> },
      { label: "Pumping Units", value: "High-efficiency vertical turbines", icon: <Activity size={24} /> },
      { label: "Civil Works", value: "Massive concrete structures", icon: <Building size={24} /> },
      { label: "Power Integration", value: "Dual grid redundancy", icon: <Battery size={24} /> },
      { label: "Project Status", value: "Fully Operational Production", icon: <Shield size={24} /> }
    ]
  };

  return (
    <section id="specs" className="py-24">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Architecture
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-[1.7] font-normal">
            Precision engineering at the world's largest reclamation plant.
          </p>
        </motion.div>

        {/* Tabbed Interface */}
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300
                  ${activeTab === tab.id
                    ? 'bg-[#004A99] text-white shadow-xl shadow-[#004A99]/40 translate-y-[-2px]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {specs[activeTab].map((spec, index) => (
                <SpecCard
                  key={index}
                  icon={spec.icon}
                  label={spec.label}
                  value={spec.value}
                  delay={index * 0.05}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Technical Images Grid - Requested assets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden h-64 shadow-xl border border-white/5"
            >
              <ImageWithFallback
                src="/images/technical-piping-system.webp"
                alt="Technical Piping System"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-white font-bold pointer-events-none">Piping & Distribution</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden h-64 shadow-xl border border-white/5"
            >
              <ImageWithFallback 
                src="/images/sedimentation-tanks-top.webp" 
                alt="Triple-Disc Filtration System" 
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-white font-bold pointer-events-none">Disc Filtration Precision</div>
            </motion.div>
          </div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact">
              <MagneticButton variant="primary" className="w-full sm:w-auto">
                <MessageSquare size={20} />
                Technical Inquiry
              </MagneticButton>
            </a>
            
            <a href="/Bahr-Al-Baqar-Technical-Profile.pdf" target="_blank" rel="noopener noreferrer">
              <MagneticButton variant="secondary" className="w-full sm:w-auto">
                <Download size={20} />
                Download Technical PDF
              </MagneticButton>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
