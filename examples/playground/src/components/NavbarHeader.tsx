import React from 'react';
import { Navbar, NavLink, Button, Avatar, IconWater, IconStar } from '@frutiger.js/react';

export interface NavbarHeaderProps {
  activeNav: string;
  onNavClick: (nav: string) => void;
  onExploreIcons: () => void;
  onExploreResponsive: () => void;
  isWaterRippleEnabled?: boolean;
  onToggleWaterRipple?: () => void;
}

export const NavbarHeader: React.FC<NavbarHeaderProps> = React.memo(
  ({
    activeNav,
    onNavClick,
    onExploreIcons,
    onExploreResponsive,
    isWaterRippleEnabled = true,
    onToggleWaterRipple,
  }) => {
    return (
      <header role="banner">
        <Navbar
          brand={
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div
                className="fj-animate-bubble"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle at 35% 30%, #ffffff 0%, #38bdf8 50%, #0284c7 100%)',
                  boxShadow: 'inset 0 1px 1px #fff, 0 4px 10px rgba(2, 132, 199, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <IconWater size={18} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                Frutiger<span style={{ color: 'var(--fj-color-sky-700)' }}>.js</span>
              </span>
            </div>
          }
          actions={
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'nowrap' }}
            >
              {onToggleWaterRipple && (
                <Button
                  variant={isWaterRippleEnabled ? 'aero' : 'glass'}
                  size="sm"
                  leftIcon={<IconWater size={14} />}
                  onClick={onToggleWaterRipple}
                  title="Toggle interactive Water Ripple & Bubble FX"
                  style={{ minWidth: 0, paddingInline: '0.6rem' }}
                >
                  <span className="fj-hide-mobile">
                    {isWaterRippleEnabled ? 'Water FX: ON' : 'Water FX: OFF'}
                  </span>
                  <span className="fj-hide-desktop" style={{ fontSize: '0.75rem' }}>
                    {isWaterRippleEnabled ? 'FX' : 'OFF'}
                  </span>
                </Button>
              )}
              <span className="fj-hide-mobile">
                <Avatar name="Biagio Scaglia" size="sm" />
              </span>
              <a
                href="https://github.com/biagio-scaglia/frutiger-js"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="primary"
                  size="sm"
                  leftIcon={<IconStar size={14} />}
                  style={{ minWidth: 0, paddingInline: '0.6rem' }}
                >
                  <span className="fj-hide-mobile">GitHub</span>
                </Button>
              </a>
            </div>
          }
        >
          <NavLink
            href="#overview"
            isActive={activeNav === 'overview'}
            onClick={() => onNavClick('overview')}
          >
            Overview
          </NavLink>
          <NavLink
            href="#widgets"
            isActive={activeNav === 'widgets'}
            onClick={() => onNavClick('widgets')}
          >
            Dashboard
          </NavLink>
          <NavLink
            href="#components"
            isActive={activeNav === 'components'}
            onClick={() => onNavClick('components')}
          >
            Components
          </NavLink>
          <NavLink
            href="#components"
            isActive={activeNav === 'icons'}
            onClick={() => {
              onNavClick('icons');
              onExploreIcons();
            }}
          >
            Aero Icons
          </NavLink>
          <NavLink
            href="#responsive-lab"
            isActive={activeNav === 'responsive-lab'}
            onClick={() => {
              onNavClick('responsive-lab');
              onExploreResponsive();
            }}
          >
            Responsive Lab
          </NavLink>
          <NavLink
            href="#tokens"
            isActive={activeNav === 'tokens'}
            onClick={() => onNavClick('tokens')}
          >
            Tokens
          </NavLink>
          <NavLink
            href="#creator"
            isActive={activeNav === 'creator'}
            onClick={() => onNavClick('creator')}
          >
            Biagio Scaglia
          </NavLink>
        </Navbar>
      </header>
    );
  }
);
NavbarHeader.displayName = 'NavbarHeader';
