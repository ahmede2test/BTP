/**
 * Bahr Al-Baqar Mega Project: Total Interface & Branding Overhaul
 * Official Masterpiece Deployment for Contrack & CFM
 * 
 * 7-Scientific Section Walkthrough:
 * 1. hero-aerial-view.jpg (Hero: Engineering Egypt's Water Security)
 * 2. water-intake-pumping.jpg (Phase 01: 4 Massive 3800mm Siphons)
 * 3. sedimentation-tanks-top.jpg (Phase 02: Purification Process)
 * 4. technical-piping-system.jpg (Phase 03: Complex Distribution Network)
 * 5. sludge-solar-drying.jpg (Phase 04: World's Largest Solar Sludge Drying)
 * 6. final-treated-canal.jpg (Phase 05: Result - Pure Water for Sinai)
 * 7. admin-night-view.jpg (HQ: Command & Control Center - Full Width)
 */

import { GradientBackground } from "./components/GradientBackground";
import { ProductionHeader } from "./components/ProductionHeader";
import { ProductionHero } from "./components/ProductionHero";
import { TechnologySection } from "./components/TechnologySection";
import { ImpactSection } from "./components/ImpactSection";
import { OperationalExcellence } from "./components/OperationalExcellence";
import { SpecsSection } from "./components/SpecsSection";
import { ContactFooter } from "./components/ContactFooter";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen relative text-slate-50 selection:bg-[#004A99] selection:text-white bg-[#020617] overflow-x-hidden">
      {/* MASTER VISUAL ENGINE: Active Royal Blue Gradient following mouse with high sensitivity */}
      <GradientBackground />

      {/* BRANDING PERFECTION: CFM Logo Hero (h-14, Far Left) + Contrack branding (No 'CT' Box) */}
      <ProductionHeader />

      {/* 7-STORY ENGINEERING FLOW: Tight Z-Pattern with Fade-in-up animations */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <AnimatePresence mode="wait">
          {/* Section 01: Engineering Egypt's Water Security (hero-aerial-view.jpg) */}
          <section id="hero">
            <ProductionHero />
          </section>

          {/* Section 02-06: The Reclamation Lifecycle (Z-Pattern scientific overview) */}
          {/* Mapping: 4x3800mm Siphons -> Purification -> Distribution -> Solar Drying -> Sinai Output */}
          <TechnologySection />

          {/* Section 07-08: National Scale & High-Level Specifications */}
          <ImpactSection />
          <SpecsSection />

          {/* Section 09: HQ Command & Control (admin-night-view.jpg - Full Width Coverage) */}
          <OperationalExcellence />

          {/* Section 10: Official Master Corporate Footer */}
          <ContactFooter />
        </AnimatePresence>
      </motion.main>

    </div>
  );
}