import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface StartMenuItemData {
  id: string;
  label: string;
  icon?: React.ReactNode;
  subtitle?: string;
  onClick?: () => void;
}

export interface StartMenuProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose?: () => void;
  userName?: string;
  userAvatar?: React.ReactNode;
  programs?: StartMenuItemData[];
  places?: StartMenuItemData[];
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  footerActions?: React.ReactNode;
}

export const StartMenu = forwardRef<HTMLDivElement, StartMenuProps>(
  (
    {
      isOpen,
      onClose: _onClose,
      userName = 'Biagio Scaglia',
      userAvatar,
      programs = [],
      places = [],
      searchPlaceholder = 'Start Search...',
      onSearch,
      footerActions,
      className,
      ...props
    },
    ref
  ) => {
    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        role="dialog"
        aria-modal="false"
        aria-label="Start Menu"
        className={cn('fj-start-menu', className)}
        {...props}
      >
        {/* Top User Profile Header */}
        <div className="fj-start-menu-header">
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 'var(--fj-radius-md)',
              background: 'radial-gradient(circle at 30% 30%, #38bdf8 0%, #0284c7 100%)',
              border: '2px solid #fff',
              boxShadow: '0 2px 6px rgba(2, 132, 199, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
            }}
          >
            {userAvatar || userName.charAt(0)}
          </div>
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 'var(--fj-font-size-sm)',
                color: 'var(--fj-color-sky-950)',
              }}
            >
              {userName}
            </div>
            <div style={{ fontSize: '10px', color: 'var(--fj-color-sky-700)', fontWeight: 600 }}>
              Frutiger Aero User
            </div>
          </div>
        </div>

        {/* 2-Column Body */}
        <div className="fj-start-menu-body">
          {/* Programs Left Column */}
          <div className="fj-start-menu-programs" role="menu" aria-label="Programs">
            {programs.map(prog => (
              <button
                key={prog.id}
                type="button"
                role="menuitem"
                className="fj-start-menu-item"
                onClick={prog.onClick}
              >
                {prog.icon && (
                  <span style={{ fontSize: '1.2rem', display: 'inline-flex' }}>{prog.icon}</span>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <span>{prog.label}</span>
                  {prog.subtitle && (
                    <span
                      style={{
                        fontSize: '10px',
                        color: 'var(--fj-color-text-muted)',
                        fontWeight: 400,
                      }}
                    >
                      {prog.subtitle}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Places & System Right Column */}
          <div className="fj-start-menu-places" role="menu" aria-label="System Places">
            {places.map(place => (
              <button
                key={place.id}
                type="button"
                role="menuitem"
                className="fj-start-menu-item"
                onClick={place.onClick}
              >
                {place.icon && <span style={{ display: 'inline-flex' }}>{place.icon}</span>}
                <span>{place.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Search & Power Bar */}
        <div className="fj-start-menu-footer">
          <input
            type="text"
            placeholder={searchPlaceholder}
            onChange={e => onSearch?.(e.target.value)}
            style={{
              flex: 1,
              padding: '0.4rem 0.6rem',
              borderRadius: 'var(--fj-radius-sm)',
              border: '1px solid rgba(14, 165, 233, 0.4)',
              fontSize: 'var(--fj-font-size-xs)',
              background: '#fff',
              outline: 'none',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.08)',
            }}
          />
          {footerActions || (
            <button
              type="button"
              className="fj-start-menu-item"
              style={{
                width: 'auto',
                padding: '0.35rem 0.6rem',
                background: 'rgba(239, 68, 68, 0.15)',
                color: '#dc2626',
              }}
              title="Shut Down System"
            >
              🔒 Lock
            </button>
          )}
        </div>
      </div>
    );
  }
);

StartMenu.displayName = 'StartMenu';
