import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface TaskbarProps extends HTMLAttributes<HTMLElement> {
  position?: 'bottom' | 'top';
  isFixed?: boolean;
  children?: React.ReactNode;
}

export const Taskbar = forwardRef<HTMLElement, TaskbarProps>(
  ({ position = 'bottom', isFixed = false, className, children, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        role="toolbar"
        aria-label="Desktop Taskbar"
        className={cn(
          'fj-taskbar',
          position === 'top' && 'fj-taskbar-top',
          isFixed && (position === 'top' ? 'fj-taskbar-fixed-top' : 'fj-taskbar-fixed-bottom'),
          className
        )}
        {...props}
      >
        {children}
      </footer>
    );
  }
);

Taskbar.displayName = 'Taskbar';
