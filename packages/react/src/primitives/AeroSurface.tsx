import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../utils/cn';

export type AeroSurfaceVariant = 'glass' | 'gloss' | 'acrylic' | 'crystal' | 'chrome' | 'water';

export interface AeroSurfaceProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AeroSurfaceVariant;
  hasGlossCap?: boolean;
  hasBevel?: boolean | 'deep';
  glow?: 'aqua' | 'sun' | 'meadow' | 'aurora' | boolean;
  isInteractive?: boolean;
  children?: ReactNode;
}

export const AeroSurface = forwardRef<HTMLDivElement, AeroSurfaceProps>(
  (
    {
      variant = 'glass',
      hasGlossCap = true,
      hasBevel = false,
      glow = false,
      isInteractive = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'fj-aero-surface',
          `fj-aero-surface--${variant}`,
          isInteractive && 'fj-aero-surface--interactive',
          hasBevel === 'deep' ? 'fj-bevel--deep' : hasBevel ? 'fj-bevel' : false,
          glow === true ? 'fj-glow' : glow && `fj-glow fj-glow--${glow}`,
          className
        )}
        {...props}
      >
        {hasGlossCap && <div className="fj-gloss-cap" aria-hidden="true" />}
        {children}
      </div>
    );
  }
);

AeroSurface.displayName = 'AeroSurface';
