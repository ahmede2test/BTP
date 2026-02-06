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
import { FileText, Download } from 'lucide-react';

interface SpecItemProps {
  label: string;
  value: string;
  delay?: number;
}

function SpecItem({ label, value, delay = 0 }: SpecItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex justify-between items-start py-4 border-b border-white/5 last:border-0"
    >
      <span className="text-gray-400 font-medium text-sm">{label}</span>
      <span className="text-white font-semibold text-sm text-right max-w-[60%]">{value}</span>
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
      { label: "Treatment Capacity", value: "5.6 million m³/day" },
      { label: "Intake Lines", value: "4 main lines (3800mm diameter)" },
      { label: "Filtration", value: "120 Triple-disc filters (10-micron)" },
      { label: "Tanks", value: "Advanced Lamella Sedimentation Tanks" },
      { label: "Automation", value: "Full SCADA Central Control" },
      { label: "Output Standard", value: "Egyptian Code for Water Reuse" }
    ],
    environmental: [
      { label: "Reclamation Scope", value: "456,000 feddans in Sinai" },
      { label: "Sludge Management", value: "Solar drying (Largest in region)" },
      { label: "Lake Manzala Impact", value: "100% prevention of drainage pollution" },
      { label: "Sustainability", value: "Zero liquid discharge philosophy" },
      { label: "Ecosystem Benefit", value: "Restoring Sinai biodiversity" },
      { label: "Climate Resilience", value: "Major carbon sequestration potential" }
    ],
    infrastructure: [
      { label: "Major Crossings", value: "Dual siphons under Suez Canal" },
      { label: "Operator", value: "Contrack Management Services" },
      { label: "Pumping Units", value: "High-efficiency vertical turbines" },
      { label: "Civil Works", value: "Massive concrete reclamation structures" },
      { label: "Power Integration", value: "Dual grid redundancy" },
      { label: "Project Status", value: "Fully Operational Production" }
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
        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300
                  ${activeTab === tab.id
                    ? 'bg-[#004A99] text-white shadow-lg shadow-[#004A99]/30'
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
            >
              <GlassCard className="p-8 lg:p-10 mb-8">
                <div className="space-y-1">
                  {specs[activeTab].map((spec, index) => (
                    <SpecItem
                      key={index}
                      label={spec.label}
                      value={spec.value}
                      delay={index * 0.05}
                    />
                  ))}
                </div>
              </GlassCard>
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
              <img 
                src="/images/technical-piping-system.jpg" 
                alt="Technical Piping System" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-bold">Piping & Distribution</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden h-64 shadow-xl border border-white/5"
            >
              <img 
                src="/images/sedimentation-tanks-top.jpg" 
                alt="Triple-Disc Filtration System" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-bold">Disc Filtration Precision</div>
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
            <MagneticButton variant="primary">
              <FileText size={20} />
              Technical Inquiry
            </MagneticButton>
            
            <MagneticButton variant="secondary">
              <Download size={20} />
              Download Technical PDF
            </MagneticButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
