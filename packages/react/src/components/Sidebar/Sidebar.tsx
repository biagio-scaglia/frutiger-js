import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  header?: React.ReactNode;
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ children, className, header, ...props }, ref) => {
    return (
      <aside ref={ref} className={cn('fj-sidebar', className)} {...props}>
        {header && <div className="fj-sidebar__header">{header}</div>}
        <nav className="fj-sidebar__nav">{children}</nav>
      </aside>
    );
  }
);
Sidebar.displayName = 'Sidebar';

export interface SidebarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  icon?: React.ReactNode;
}
export const SidebarItem = forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ children, className, isActive, icon, ...props }, ref) => {
    return (
      <a
        ref={ref}
        aria-current={isActive ? 'page' : undefined}
        className={cn('fj-sidebar__item', isActive && 'fj-sidebar__item--active', className)}
        {...props}
      >
        {icon && <span className="fj-sidebar__icon">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }
);
SidebarItem.displayName = 'SidebarItem';
