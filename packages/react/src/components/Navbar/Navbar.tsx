import React, { forwardRef, useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { IconMenu, IconClose } from '../../icons';

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  brand?: React.ReactNode;
  actions?: React.ReactNode;
  isMenuOpen?: boolean;
  onMenuToggle?: (isOpen: boolean) => void;
  mobileMenuActions?: React.ReactNode;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      children,
      className,
      brand,
      actions,
      isMenuOpen: controlledMenuOpen,
      onMenuToggle,
      mobileMenuActions,
      ...props
    },
    ref
  ) => {
    const [uncontrolledMenuOpen, setUncontrolledMenuOpen] = useState(false);
    const isControlled = controlledMenuOpen !== undefined;
    const isMenuOpen = isControlled ? controlledMenuOpen : uncontrolledMenuOpen;

    const handleToggle = () => {
      const nextState = !isMenuOpen;
      if (!isControlled) {
        setUncontrolledMenuOpen(nextState);
      }
      onMenuToggle?.(nextState);
    };

    const handleClose = () => {
      if (!isControlled) {
        setUncontrolledMenuOpen(false);
      }
      onMenuToggle?.(false);
    };

    useEffect(() => {
      if (!isMenuOpen) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMenuOpen]);

    return (
      <header ref={ref} className={cn('fj-navbar', className)} {...props}>
        <div className="fj-navbar__container">
          {brand && <div className="fj-navbar__brand">{brand}</div>}

          {/* Desktop navigation links */}
          {children && <nav className="fj-navbar__nav">{children}</nav>}

          {/* Actions & Mobile toggle button */}
          <div className="fj-navbar__actions">
            {actions}
            <button
              type="button"
              className="fj-navbar__mobile-toggle"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="fj-navbar-mobile-drawer"
              onClick={handleToggle}
            >
              {isMenuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Drawer */}
        <div
          id="fj-navbar-mobile-drawer"
          className={cn(
            'fj-navbar__mobile-menu',
            isMenuOpen && 'fj-navbar__mobile-menu--open'
          )}
          aria-hidden={!isMenuOpen}
        >
          {children && (
            <nav className="fj-flex-col" onClick={handleClose}>
              {children}
            </nav>
          )}
          {(mobileMenuActions || actions) && (
            <div className="fj-navbar__mobile-menu-actions">
              {mobileMenuActions || actions}
            </div>
          )}
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
