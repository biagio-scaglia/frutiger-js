import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface TaskbarStartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
  icon?: React.ReactNode;
}

export const TaskbarStart = forwardRef<HTMLButtonElement, TaskbarStartProps>(
  ({ isOpen = false, icon, className, children, ...props }, ref) => {
    return (
      <div className="fj-taskbar-start">
        <button
          ref={ref}
          type="button"
          aria-label="Start Menu"
          aria-expanded={isOpen}
          aria-haspopup="menu"
          className={cn('fj-taskbar-start-orb', className)}
          {...props}
        >
          {icon || (
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                background:
                  'radial-gradient(circle at 35% 30%, #fff 0%, #38bdf8 60%, #0284c7 100%)',
                boxShadow: '0 0 6px #fff',
              }}
            />
          )}
        </button>
        {children}
      </div>
    );
  }
);

TaskbarStart.displayName = 'TaskbarStart';
