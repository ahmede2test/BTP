/**
 * MagneticButton Component
 * Production-ready button with magnetic hover effect using Motion
 * Creates a subtle attraction effect when hovering near the button
 */

import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../components/ui/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function MagneticButton({ 
  children, 
  className, 
  variant = 'primary',
  onClick,
  type = 'button'
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Calculate magnetic attraction based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (magnetic strength: 0.3 = 30% attraction)
    const distanceX = (e.clientX - centerX) * 0.3;
    const distanceY = (e.clientY - centerY) * 0.3;
    
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-[#004A99] hover:bg-[#003d7e] text-white shadow-lg shadow-[#004A99]/30 hover:shadow-xl hover:shadow-[#004A99]/40",
    secondary: "bg-white/5 hover:bg-white/10 text-white border-2 border-white/20 hover:border-white/30 backdrop-blur-md"
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      className={cn(baseStyles, variants[variant], className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ 
        type: "spring", 
        stiffness: 150, 
        damping: 15,
        mass: 0.1
      }}
    >
      {/* Gradient overlay on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
