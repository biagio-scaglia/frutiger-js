import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: React.ReactNode;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = 'horizontal', label, children, ...props }, ref) => {
    const hasContent = label || children;

    if (orientation === 'vertical') {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="vertical"
          className={cn('fj-divider fj-divider--vertical', className)}
          {...props}
        />
      );
    }

    if (hasContent) {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="horizontal"
          className={cn('fj-divider fj-divider--with-label', className)}
          {...props}
        >
          <span className="fj-divider__label">{label || children}</span>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation="horizontal"
        className={cn('fj-divider fj-divider--horizontal', className)}
        {...props}
      />
    );
  }
);
Divider.displayName = 'Divider';
