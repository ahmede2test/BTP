/**
 * Container Component
 * Strict max-width container (1280px) for layout precision
 * Ensures content doesn't stretch on large screens
 */

import { cn } from '../components/ui/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("w-full max-w-[1280px] mx-auto px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
