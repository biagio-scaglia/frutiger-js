import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../utils/cn';

export interface GlassProps extends HTMLAttributes<HTMLDivElement> {
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  specular?: boolean;
  border?: boolean;
  children?: ReactNode;
}

export const Glass = forwardRef<HTMLDivElement, GlassProps>(
  ({ specular = true, border = true, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('fj-aero-surface fj-aero-surface--glass', className)}
        {...props}
      >
        {specular && <div className="fj-gloss-cap" aria-hidden="true" />}
        {children}
      </div>
    );
  }
);

Glass.displayName = 'Glass';
