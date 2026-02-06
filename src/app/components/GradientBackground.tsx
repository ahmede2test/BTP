import { useEffect, useState } from 'react';

export function GradientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate gradient colors based on mouse position
  const getGradientStyle = () => {
    const { x, y } = mousePosition;
    
    // Water theme: Dark Blue to Teal range
    const hue1 = 210 + (x / 100) * 20; // Deep Ocean Blue
    const hue2 = 180 + (y / 100) * 20; // Mediterranean Teal
    const hue3 = 195 + (x / 100) * 15; // Bright Water Blue
    
    return {
      background: `
        radial-gradient(circle at ${x}% ${y}%, 
          hsla(${hue1}, 85%, 25%, 0.8) 0%, 
          transparent 50%),
        radial-gradient(circle at ${100 - x}% ${100 - y}%, 
          hsla(${hue2}, 75%, 20%, 0.7) 0%, 
          transparent 50%),
        radial-gradient(circle at ${x}% ${100 - y}%, 
          hsla(${hue3}, 80%, 30%, 0.6) 0%, 
          transparent 60%),
        linear-gradient(135deg, 
          hsl(220, 90%, 8%) 0%, 
          hsl(190, 80%, 5%) 100%)
      `,
      transition: 'background 0.5s ease-out'
    };
  };

  return (
    <div 
      className="fixed inset-0 -z-10"
      style={getGradientStyle()}
    />
  );
}
