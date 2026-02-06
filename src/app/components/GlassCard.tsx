/**
 * GlassCard Component
 * Production-ready glassmorphism card with:
 * - backdrop-filter: blur(12px) for glass effect
 * - Subtle 1px white/10% inner border
 * - Depth and layering for premium look
 */

import { motion } from 'motion/react';
import { cn } from '../components/ui/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({ children, className, hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smooth animation
      }}
      className={cn(
        "relative rounded-2xl",
        // Glassmorphism base styles
        "bg-white/5 backdrop-blur-[12px]",
        // Subtle inner border using box-shadow for better control
        "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]",
        // Outer glow for depth
        "shadow-lg shadow-black/10",
        // Hover effects (optional)
        hover && "transition-all duration-300 hover:bg-white/[0.08] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] hover:shadow-xl hover:shadow-black/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
