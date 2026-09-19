import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  brand?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ children, className, brand, actions, ...props }, ref) => {
    return (
      <header ref={ref} className={cn('fj-navbar', className)} {...props}>
        <div className="fj-navbar__container">
          {brand && <div className="fj-navbar__brand">{brand}</div>}
          {children && <nav className="fj-navbar__nav">{children}</nav>}
          {actions && <div className="fj-navbar__actions">{actions}</div>}
        </div>
      </header>
    );
  }
);
Navbar.displayName = 'Navbar';

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, className, isActive, ...props }, ref) => {
    return (
      <a
        ref={ref}
        aria-current={isActive ? 'page' : undefined}
        className={cn('fj-navbar__link', isActive && 'fj-navbar__link--active', className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);
NavLink.displayName = 'NavLink';
