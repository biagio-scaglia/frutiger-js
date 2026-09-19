import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface TaskbarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  isMinimized?: boolean;
  badge?: React.ReactNode;
}

export const TaskbarItem = forwardRef<HTMLButtonElement, TaskbarItemProps>(
  ({ label, icon, isActive = false, isMinimized = false, badge, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={isActive}
        className={cn(
          'fj-taskbar-item',
          isActive && 'fj-taskbar-item-active',
          isMinimized && 'fj-taskbar-item-minimized',
          className
        )}
        title={label}
        {...props}
      >
        {icon && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{icon}</span>}
        <span className="fj-taskbar-item-label">{label}</span>
        {badge && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{badge}</span>}
      </button>
    );
  }
);

TaskbarItem.displayName = 'TaskbarItem';

export interface TaskbarItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const TaskbarItems = forwardRef<HTMLDivElement, TaskbarItemsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('fj-taskbar-items', className)} {...props}>
        {children}
      </div>
    );
  }
);

TaskbarItems.displayName = 'TaskbarItems';
