/**
 * Production Header Component
 * Sticky header with glassmorphism effect
 * Features:
 * - backdrop-filter: blur(12px) for glass effect over gradient
 * - Smooth scroll behavior
 * - Responsive navigation
 * - Contrack brand colors
 */

import { Menu, X } from "lucide-react";
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
    { label: "Overview", href: "#overview" },
    { label: "Technology", href: "#technology" },
    { label: "Impact", href: "#impact" },
    { label: "Specs", href: "#specs" },
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
            {/* Masterpiece Branding: CFM Logo (Left) + Contrack Text */}
            <div className="flex items-center gap-6 group cursor-pointer">
              <img 
                src="/images/Logo.png" 
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105" 
                alt="CFM Logo" 
              />
              
              {/* Industrial Divider */}
              <div className="h-10 w-px bg-white/20" />

              <div className="hidden lg:block">
                <div className="text-[#f8fafc] font-bold text-2xl tracking-tighter uppercase flex items-center gap-2">
                  CONTRACK <span className="text-white/20 font-light">|</span> <span className="text-sm tracking-[0.4em] font-medium text-blue-400">Management Services</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <button className="hidden md:block px-6 py-2.5 rounded-full bg-[#004A99] hover:bg-[#003d7e] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#004A99]/30 hover:shadow-xl hover:shadow-[#004A99]/40">
              Technical Inquiry
            </button>

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
                  <button className="mt-4 px-6 py-3 rounded-full bg-[#004A99] hover:bg-[#003d7e] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#004A99]/30">
                    Technical Inquiry
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </motion.header>
  );
}
