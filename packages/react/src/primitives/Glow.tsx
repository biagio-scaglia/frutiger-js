import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../utils/cn';

export interface GlowProps extends HTMLAttributes<HTMLDivElement> {
  color?: 'aqua' | 'sun' | 'meadow' | 'aurora';
  children?: ReactNode;
}

export const Glow = forwardRef<HTMLDivElement, GlowProps>(
  ({ color = 'aqua', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('fj-glow', color && `fj-glow--${color}`, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Glow.displayName = 'Glow';
