import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export interface GlossProps extends HTMLAttributes<HTMLDivElement> {
  curvature?: 'dome' | 'flat';
  intensity?: 'normal' | 'bright';
  className?: string;
}

export const Gloss = forwardRef<HTMLDivElement, GlossProps>(
  ({ curvature = 'dome', intensity = 'normal', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'fj-gloss-cap',
          curvature === 'flat' && 'fj-gloss-cap--flat',
          intensity === 'bright' && 'fj-gloss-cap--bright',
          className
        )}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

Gloss.displayName = 'Gloss';
