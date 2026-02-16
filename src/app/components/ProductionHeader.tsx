/**
 * Production Header Component
 * Sticky header with glassmorphism effect
 * Features:
 * - backdrop-filter: blur(12px) for glass effect over gradient
 * - Smooth scroll behavior
 * - Responsive navigation
 * - Contrack brand colors
 */

import { Menu, X, Home, Activity, BarChart3, ClipboardList } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";

export function ProductionHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Overview", href: "#hero", icon: <Home size={14} /> },
    { label: "Technology", href: "#technology", icon: <Activity size={14} /> },
    { label: "Impact", href: "#impact", icon: <BarChart3 size={14} /> },
    { label: "Specs", href: "#specs", icon: <ClipboardList size={14} /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <Container>
        <div
          className={`
            relative rounded-2xl transition-all duration-300
            ${
              isScrolled
                ? "bg-white/[0.08] backdrop-blur-[12px] shadow-lg shadow-black/10"
                : "bg-white/5 backdrop-blur-[12px]"
            }
            shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]
          `}
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Official Project Branding: BTP Logo + Project Identity */}
            <div className="flex items-center gap-5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              {/* BTP Primary Identity */}
              <div className="relative">
                <img 
                  src="/images/BTP Logo.jpeg" 
                  className="h-12 w-auto rounded-lg object-contain transition-all duration-300 group-hover:brightness-110 shadow-lg shadow-black/20" 
                  alt="BTP Logo" 
                />
              </div>

              {/* Industrial Divider */}
              <div className="h-8 w-px bg-white/20" />

              <div className="hidden lg:block">
                <div className="text-white font-bold text-xl tracking-tight uppercase flex flex-col">
                  <span className="text-blue-400 text-[10px] tracking-[0.3em] font-semibold mb-0.5">Official Portal</span>
                  Bahr Al-Baqar Treatment Plant
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-1.5 text-gray-400 hover:text-white transition-all duration-300 font-medium text-xs uppercase tracking-wider"
                >
                  <span className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button: Links to Footer Contact */}
            <a 
              href="#contact"
              className="hidden md:block px-6 py-2.5 rounded-full bg-[#004A99] hover:bg-[#003d7e] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#004A99]/30 hover:shadow-xl hover:shadow-[#004A99]/40 text-center"
            >
              Technical Inquiry
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu with AnimatePresence */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden border-t border-white/10"
              >
                <nav className="flex flex-col gap-1 p-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      href={item.href}
                      className="text-gray-300 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <a 
                    href="#contact"
                    className="mt-4 px-6 py-3 rounded-full bg-[#004A99] hover:bg-[#003d7e] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#004A99]/30 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Technical Inquiry
                  </a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </motion.header>
  );
}
