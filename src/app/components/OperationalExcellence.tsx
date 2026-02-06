import { motion } from 'framer-motion';
import { Container } from './Container';
import { Shield, Activity, Zap } from 'lucide-react';

export function OperationalExcellence() {
  return (
    <section className="relative py-32 overflow-hidden min-h-[800px] flex items-center">
      {/* Full-Width Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
        <img 
          src="/images/admin-night-view.jpg" 
          alt="Bahr Al-Baqar Administrative HQ" 
          className="w-full h-full object-cover"
        />
      </div>

      <Container className="relative z-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Project Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004A99]/20 border border-[#004A99]/30 backdrop-blur-md mb-8">
              <span className="text-[#004A99] text-xs font-bold uppercase tracking-[0.2em]">Operational Excellence</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Centralized
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004A99] to-blue-400">
                Command Center
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed font-normal">
              The Administrative Headquarters at Bahr Al-Baqar is the technological heart 
              of the facility. From this high-tech hub, CMS and CFM engineers orchestrate 
              the complex water treatment lifecycle, ensuring 24/7 reliability for Sinai's 
              reclamation mission.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#004A99] flex items-center justify-center mb-4">
                  <Shield className="text-white" size={24} />
                </div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">SCADA Mastery</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Advanced automation controlling 120 disc filters and 5.6M m³ daily flow.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30">
                  <Activity className="text-blue-400" size={24} />
                </div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">Facility Management</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Integrated CFM solutions ensuring peak infrastructure performance.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

