import React from 'react';
import {
  Navbar,
  NavLink,
  Button,
  Avatar,
  IconWater,
  IconStar,
  IconSparkles,
  IconLeaf,
  IconSun,
  IconMonitor,
  IconCloud,
  IconClose,
  IconBubble,
  IconAeroOrb,
  Dropdown,
  DropdownItem,
  DropdownHeader,
  AeroCursorMode,
  AeroBackgroundFXMode,
} from '@frutiger.js/react';

export interface NavbarHeaderProps {
  activeNav: string;
  onNavClick: (nav: string) => void;
  onExploreIcons: () => void;
  onExploreResponsive: () => void;
  ambientFXMode?: AeroBackgroundFXMode;
  onSelectAmbientFXMode?: (mode: AeroBackgroundFXMode) => void;
  isWaterRippleEnabled?: boolean;
  onToggleWaterRipple?: () => void;
  cursorMode?: AeroCursorMode;
  onSelectCursorMode?: (mode: AeroCursorMode) => void;
}

export const NavbarHeader: React.FC<NavbarHeaderProps> = React.memo(
  ({
    activeNav,
    onNavClick,
    onExploreIcons,
    onExploreResponsive,
    ambientFXMode = 'bubbles',
    onSelectAmbientFXMode,
    isWaterRippleEnabled = true,
    onToggleWaterRipple,
    cursorMode = 'droplet',
    onSelectCursorMode,
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
              {/* Desktop-Only Aero Cursor Selector */}
              {onSelectCursorMode && (
                <div className="fj-hide-mobile">
                  <Dropdown
                    align="right"
                    trigger={
                      <Button
                        variant="glass"
                        size="sm"
                        leftIcon={
                          cursorMode === 'bubble' ? (
                            <IconBubble size={14} />
                          ) : cursorMode === 'cyber' ? (
                            <IconAeroOrb size={14} />
                          ) : cursorMode === 'crystal' ? (
                            <IconSparkles size={14} />
                          ) : cursorMode === 'nature' ? (
                            <IconLeaf size={14} />
                          ) : cursorMode === 'classic' ? (
                            <IconSun size={14} />
                          ) : cursorMode === 'default' ? (
                            <IconMonitor size={14} />
                          ) : (
                            <IconWater size={14} />
                          )
                        }
                        title="Select Desktop Cursor Style"
                        style={{ minWidth: 0, paddingInline: '0.65rem' }}
                      >
                        Cursor:{' '}
                        {cursorMode === 'droplet'
                          ? 'Droplet'
                          : cursorMode === 'bubble'
                            ? 'Bubble'
                            : cursorMode === 'cyber'
                              ? 'Cyber'
                              : cursorMode === 'crystal'
                                ? 'Crystal'
                                : cursorMode === 'nature'
                                  ? 'Emerald'
                                  : cursorMode === 'classic'
                                    ? 'Classic'
                                    : 'Default'}{' '}
                        ▾
                      </Button>
                    }
                  >
                    <DropdownHeader>Desktop Cursor Style</DropdownHeader>
                    <DropdownItem
                      icon={<IconWater size={16} />}
                      isActive={cursorMode === 'droplet'}
                      showCheck
                      onClick={() => onSelectCursorMode('droplet')}
                    >
                      Aero Water Droplet
                    </DropdownItem>
                    <DropdownItem
                      icon={<IconBubble size={16} />}
                      isActive={cursorMode === 'bubble'}
                      showCheck
                      onClick={() => onSelectCursorMode('bubble')}
                    >
                      Iridescent Soap Bubble
                    </DropdownItem>
                    <DropdownItem
                      icon={<IconAeroOrb size={16} />}
                      isActive={cursorMode === 'cyber'}
                      showCheck
                      onClick={() => onSelectCursorMode('cyber')}
                    >
                      Cyber Aurora Plasma
                    </DropdownItem>
                    <DropdownItem
                      icon={<IconSparkles size={16} />}
                      isActive={cursorMode === 'crystal'}
                      showCheck
                      onClick={() => onSelectCursorMode('crystal')}
                    >
                      Specular Crystal
                    </DropdownItem>
                    <DropdownItem
                      icon={<IconLeaf size={16} />}
                      isActive={cursorMode === 'nature'}
                      showCheck
                      onClick={() => onSelectCursorMode('nature')}
                    >
                      Biosphere Emerald
                    </DropdownItem>
                    <DropdownItem
                      icon={<IconSun size={16} />}
                      isActive={cursorMode === 'classic'}
                      showCheck
                      onClick={() => onSelectCursorMode('classic')}
                    >
                      Classic Web 2.0
                    </DropdownItem>
                    <DropdownItem
                      icon={<IconMonitor size={16} />}
                      isActive={cursorMode === 'default'}
                      showCheck
                      onClick={() => onSelectCursorMode('default')}
                    >
                      System Native
                    </DropdownItem>
                  </Dropdown>
                </div>
              )}

              {/* Ambient FX Selector Dropdown */}
              {onSelectAmbientFXMode ? (
                <Dropdown
                  align="right"
                  trigger={
                    <Button
                      variant={ambientFXMode !== 'none' ? 'aero' : 'glass'}
                      size="sm"
                      leftIcon={
                        ambientFXMode === 'aurora' ? (
                          <IconSparkles size={14} />
                        ) : ambientFXMode === 'leaves' ? (
                          <IconLeaf size={14} />
                        ) : ambientFXMode === 'clouds' ? (
                          <IconCloud size={14} />
                        ) : ambientFXMode === 'none' ? (
                          <IconClose size={14} />
                        ) : (
                          <IconWater size={14} />
                        )
                      }
                      title="Select Ambient Environmental FX"
                      style={{ minWidth: 0, paddingInline: '0.65rem' }}
                    >
                      <span className="fj-hide-mobile">
                        FX:{' '}
                        {ambientFXMode === 'bubbles'
                          ? 'Bubbles'
                          : ambientFXMode === 'aurora'
                            ? 'Aurora'
                            : ambientFXMode === 'leaves'
                              ? 'Leaves'
                              : ambientFXMode === 'clouds'
                                ? 'Clouds'
                                : 'Off'}{' '}
                        ▾
                      </span>
                      <span className="fj-hide-desktop" style={{ fontSize: '0.75rem' }}>
                        {ambientFXMode !== 'none' ? 'FX' : 'OFF'}
                      </span>
                    </Button>
                  }
                >
                  <DropdownHeader>Ambient Background FX</DropdownHeader>
                  <DropdownItem
                    icon={<IconWater size={16} />}
                    isActive={ambientFXMode === 'bubbles'}
                    showCheck
                    onClick={() => onSelectAmbientFXMode('bubbles')}
                  >
                    Water Bubbles & Ripples
                  </DropdownItem>
                  <DropdownItem
                    icon={<IconSparkles size={16} />}
                    isActive={ambientFXMode === 'aurora'}
                    showCheck
                    onClick={() => onSelectAmbientFXMode('aurora')}
                  >
                    Aurora & Sunbeams
                  </DropdownItem>
                  <DropdownItem
                    icon={<IconLeaf size={16} />}
                    isActive={ambientFXMode === 'leaves'}
                    showCheck
                    onClick={() => onSelectAmbientFXMode('leaves')}
                  >
                    Floating Botanical Leaves
                  </DropdownItem>
                  <DropdownItem
                    icon={<IconCloud size={16} />}
                    isActive={ambientFXMode === 'clouds'}
                    showCheck
                    onClick={() => onSelectAmbientFXMode('clouds')}
                  >
                    Drifting Aero Clouds
                  </DropdownItem>
                  <DropdownItem
                    icon={<IconClose size={16} />}
                    isActive={ambientFXMode === 'none'}
                    showCheck
                    onClick={() => onSelectAmbientFXMode('none')}
                  >
                    Disable FX
                  </DropdownItem>
                </Dropdown>
              ) : onToggleWaterRipple ? (
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
              ) : null}

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
