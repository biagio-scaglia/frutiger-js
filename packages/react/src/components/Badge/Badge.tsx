import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'nature';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, variant = 'primary', icon, ...props }, ref) => {
    return (
      <span
        ref={ref}
        data-fj-variant={variant}
        className={cn('fj-badge', `fj-badge--${variant}`, className)}
        {...props}
      >
        {icon && <span className="fj-badge__icon">{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
