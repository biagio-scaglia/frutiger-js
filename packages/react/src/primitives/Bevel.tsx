import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../utils/cn';

export interface BevelProps extends HTMLAttributes<HTMLDivElement> {
  depth?: 1 | 2;
  children?: ReactNode;
}

export const Bevel = forwardRef<HTMLDivElement, BevelProps>(
  ({ depth = 1, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(depth === 2 ? 'fj-bevel--deep' : 'fj-bevel', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Bevel.displayName = 'Bevel';
