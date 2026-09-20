import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Button,
  Grid,
  WindowFrame,
  WindowFrameVariant,
  Taskbar,
  TaskbarStart,
  TaskbarItems,
  TaskbarItem,
  TaskbarTray,
  TaskbarClock,
  StartMenu,
  IconWater,
  IconMusic,
  IconSparkles,
  IconGlobe,
  IconFolder,
  IconWifi,
  IconSpeaker,
  IconSun,
  IconAeroOrb,
  IconCamera,
  IconSettings,
  useToast,
} from '@frutiger.js/react';
import { playAeroChime, playAeroClick } from '../utils/aeroAudio';

const DESKTOP_THEMES: Record<
  WindowFrameVariant,
  {
    name: string;
    bg: string;
    ambientGlow: string;
    border: string;
    shadow: string;
    textColor: string;
    addressBg: string;
    addressBorder: string;
    addressText: string;
    cardBg: string;
    cardBorder: string;
    cardText: string;
    subText: string;
    playerTitle: string;
  }
> = {
  aero: {
    name: 'Daylight Sky',
    bg: 'radial-gradient(circle at 50% 30%, #e0f2fe 0%, #bae6fd 45%, #7dd3fc 85%, #38bdf8 100%)',
    ambientGlow:
      'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 70%)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    shadow: 'inset 0 2px 8px rgba(2, 132, 199, 0.2), 0 10px 30px rgba(2, 132, 199, 0.15)',
    textColor: '#0f2d4a',
    addressBg: '#ffffff',
    addressBorder: '1px solid rgba(14, 165, 233, 0.4)',
    addressText: 'var(--fj-color-sky-900, #0c4a6e)',
    cardBg: 'rgba(255, 255, 255, 0.85)',
    cardBorder: '1px solid rgba(255, 255, 255, 0.95)',
    cardText: 'var(--fj-color-sky-950, #082f49)',
    subText: 'var(--fj-color-text-muted, #1e4976)',
    playerTitle: 'var(--fj-color-sky-950, #082f49)',
  },
  vista: {
    name: 'Vista Dark Aurora',
    bg: 'radial-gradient(circle at 50% 20%, #0369a1 0%, #0f172a 45%, #020617 100%)',
    ambientGlow:
      'radial-gradient(ellipse at 50% 35%, rgba(14, 165, 233, 0.4) 0%, rgba(2, 6, 23, 0) 70%)',
    border: '1px solid rgba(56, 189, 248, 0.4)',
    shadow: 'inset 0 2px 12px rgba(0, 0, 0, 0.6), 0 12px 36px rgba(0, 0, 0, 0.5)',
    textColor: '#f0f9ff',
    addressBg: 'rgba(15, 23, 42, 0.95)',
    addressBorder: '1px solid rgba(56, 189, 248, 0.5)',
    addressText: '#7dd3fc',
    cardBg: 'rgba(30, 41, 59, 0.85)',
    cardBorder: '1px solid rgba(56, 189, 248, 0.3)',
    cardText: '#f8fafc',
    subText: '#94a3b8',
    playerTitle: '#f0f9ff',
  },
  windows7: {
    name: 'Win7 Glacier Blue',
    bg: 'radial-gradient(circle at 50% 35%, #bae6fd 0%, #38bdf8 35%, #0284c7 75%, #075985 100%)',
    ambientGlow:
      'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 70%)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    shadow: 'inset 0 2px 10px rgba(2, 132, 199, 0.25), 0 10px 30px rgba(2, 132, 199, 0.2)',
    textColor: '#082f49',
    addressBg: '#ffffff',
    addressBorder: '1px solid rgba(14, 165, 233, 0.5)',
    addressText: '#0369a1',
    cardBg: 'rgba(255, 255, 255, 0.9)',
    cardBorder: '1px solid rgba(255, 255, 255, 0.98)',
    cardText: '#082f49',
    subText: '#64748b',
    playerTitle: '#082f49',
  },
  glass: {
    name: 'Prismatic Crystal',
    bg: 'radial-gradient(circle at 45% 25%, #ffffff 0%, #e0f2fe 30%, #a5f3fc 60%, #0284c7 100%)',
    ambientGlow:
      'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 65%)',
    border: '1px solid rgba(255, 255, 255, 0.98)',
    shadow: 'inset 0 2px 12px rgba(6, 182, 212, 0.2), 0 12px 32px rgba(6, 182, 212, 0.18)',
    textColor: '#0c4a6e',
    addressBg: 'rgba(255, 255, 255, 0.9)',
    addressBorder: '1px solid rgba(103, 232, 249, 0.8)',
    addressText: '#0e7490',
    cardBg: 'rgba(255, 255, 255, 0.8)',
    cardBorder: '1px solid rgba(255, 255, 255, 0.95)',
    cardText: '#0c4a6e',
    subText: '#475569',
    playerTitle: '#0c4a6e',
  },
  glossy: {
    name: 'Aqua Gel Cerulean',
    bg: 'radial-gradient(circle at 50% 20%, #67e8f9 0%, #06b6d4 35%, #0e7490 70%, #164e63 100%)',
    ambientGlow:
      'radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.5) 0%, rgba(6, 182, 212, 0) 70%)',
    border: '1px solid rgba(255, 255, 255, 0.9)',
    shadow: 'inset 0 2px 10px rgba(8, 145, 178, 0.3), 0 12px 36px rgba(8, 145, 178, 0.25)',
    textColor: '#083344',
    addressBg: 'rgba(255, 255, 255, 0.92)',
    addressBorder: '1px solid #0284c7',
    addressText: '#0369a1',
    cardBg: 'rgba(240, 249, 255, 0.9)',
    cardBorder: '1px solid rgba(14, 165, 233, 0.4)',
    cardText: '#0c4a6e',
    subText: '#475569',
    playerTitle: '#0369a1',
  },
  frosted: {
    name: 'Biosphere Aurora',
    bg: 'radial-gradient(circle at 50% 25%, #f0fdf4 0%, #bbf7d0 30%, #6ee7b7 65%, #0f766e 100%)',
    ambientGlow:
      'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.6) 0%, rgba(52, 211, 153, 0) 70%)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    shadow: 'inset 0 2px 10px rgba(13, 148, 136, 0.25), 0 12px 30px rgba(13, 148, 136, 0.18)',
    textColor: '#064e3b',
    addressBg: 'rgba(255, 255, 255, 0.92)',
    addressBorder: '1px solid rgba(110, 231, 183, 0.8)',
    addressText: '#0f766e',
    cardBg: 'rgba(240, 253, 244, 0.85)',
    cardBorder: '1px solid rgba(167, 243, 208, 0.8)',
    cardText: '#064e3b',
    subText: '#475569',
    playerTitle: '#064e3b',
  },
};

export const AeroDesktopDemo: React.FC = React.memo(() => {
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [windowVariant, setWindowVariant] = useState<WindowFrameVariant>('aero');
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  const [isExplorerMinimized, setIsExplorerMinimized] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isPlayerMinimized, setIsPlayerMinimized] = useState(false);
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);
  const [isBrowserMinimized, setIsBrowserMinimized] = useState(false);

  const { toast } = useToast();
  const currentTheme = DESKTOP_THEMES[windowVariant] || DESKTOP_THEMES.aero;

  return (
    <Card variant="glass">
      <CardHeader>
        <div>
          <CardTitle>Frutiger Aero Desktop Environment & Taskbar</CardTitle>
          <CardDescription>
            Interactive Aero Glass desktop featuring floating windows, 3D Start Orb, task switcher,
            and live system tray clock.
          </CardDescription>
        </div>
        <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge variant="nature">{currentTheme.name}</Badge>
          {(
            ['aero', 'vista', 'windows7', 'glass', 'glossy', 'frosted'] as WindowFrameVariant[]
          ).map(v => (
            <Button
              key={v}
              size="sm"
              variant={windowVariant === v ? 'primary' : 'glass'}
              onClick={() => setWindowVariant(v)}
            >
              {v.toUpperCase()}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        {/* Virtual Desktop Canvas */}
        <div
          style={{
            position: 'relative',
            minHeight: '460px',
            height: 'clamp(460px, 65vh, 540px)',
            borderRadius: 'var(--fj-radius-xl, 16px)',
            background: currentTheme.bg,
            border: currentTheme.border,
            boxShadow: currentTheme.shadow,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
          }}
          onClick={e => {
            // Close start menu if clicked outside
            if (
              isStartOpen &&
              !(e.target as HTMLElement).closest('.fj-start-menu') &&
              !(e.target as HTMLElement).closest('.fj-taskbar-start')
            ) {
              setIsStartOpen(false);
            }
          }}
        >
          {/* Desktop Wallpaper Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              left: '10%',
              width: '80%',
              height: '55%',
              background: currentTheme.ambientGlow,
              pointerEvents: 'none',
              transition: 'background 0.4s ease',
            }}
          />

          {/* Desktop Work Area */}
          <div style={{ position: 'relative', flex: 1, padding: '0.75rem', overflow: 'hidden' }}>
            {/* Desktop Shortcut Icons */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                width: '64px',
                zIndex: 1,
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setIsExplorerOpen(true);
                  setIsExplorerMinimized(false);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '0.35rem 0.2rem',
                  borderRadius: 'var(--fj-radius-md, 8px)',
                  color: currentTheme.textColor,
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'none')}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '32px',
                  }}
                >
                  <IconFolder size={30} />
                </div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textShadow:
                      windowVariant === 'vista' ? '0 1px 3px rgba(0, 0, 0, 0.9)' : '0 1px 2px #fff',
                    marginTop: '3px',
                    textAlign: 'center',
                  }}
                >
                  Aero Files
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsPlayerOpen(true);
                  setIsPlayerMinimized(false);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '0.35rem 0.2rem',
                  borderRadius: 'var(--fj-radius-md, 8px)',
                  color: currentTheme.textColor,
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'none')}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '32px',
                  }}
                >
                  <IconMusic size={30} />
                </div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textShadow:
                      windowVariant === 'vista' ? '0 1px 3px rgba(0, 0, 0, 0.9)' : '0 1px 2px #fff',
                    marginTop: '3px',
                    textAlign: 'center',
                  }}
                >
                  WMP 11
                </span>
              </button>
            </div>

            {/* Window 1: Aero Explorer */}
            {isExplorerOpen && !isExplorerMinimized && (
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: 'clamp(74px, 16vw, 96px)',
                  right: '8px',
                  maxWidth: '540px',
                  zIndex: 10,
                  animation: 'fj-fade-in 0.2s ease',
                }}
              >
                <WindowFrame
                  title="Windows Aero Explorer — Computer ‣ C:\Media"
                  icon={<IconFolder size={16} />}
                  variant={windowVariant}
                  isActive={true}
                  onClose={() => setIsExplorerOpen(false)}
                  onMinimize={() => setIsExplorerMinimized(true)}
                  onMaximize={() => {}}
                >
                  <div style={{ padding: '0.25rem 0' }}>
                    <div
                      style={{
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'center',
                        padding: '0.35rem 0.6rem',
                        background: currentTheme.addressBg,
                        borderRadius: 'var(--fj-radius-sm, 6px)',
                        border: currentTheme.addressBorder,
                        fontSize: 'var(--fj-font-size-xs, 0.75rem)',
                        marginBottom: '0.75rem',
                        color: currentTheme.addressText,
                        fontWeight: 600,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Computer ‣ Local Disk (C:) ‣ Media ‣ Wallpapers
                    </div>

                    <Grid columns="repeat(auto-fit, minmax(min(100%, 75px), 1fr))" gap="0.5rem">
                      {[
                        { name: 'aurora_4k.png', icon: <IconSun size={20} />, sz: '14.2 MB' },
                        { name: 'aqua_orb.c4d', icon: <IconAeroOrb size={20} />, sz: '38.4 MB' },
                        { name: 'ambience.flac', icon: <IconMusic size={20} />, sz: '28.1 MB' },
                      ].map((f, i) => (
                        <div
                          key={i}
                          style={{
                            padding: '0.5rem 0.25rem',
                            borderRadius: 'var(--fj-radius-md, 8px)',
                            background: currentTheme.cardBg,
                            border: currentTheme.cardBorder,
                            textAlign: 'center',
                            cursor: 'pointer',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              height: '24px',
                            }}
                          >
                            {f.icon}
                          </div>
                          <div
                            style={{
                              fontSize: '10px',
                              fontWeight: 600,
                              color: currentTheme.cardText,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              marginTop: '2px',
                            }}
                          >
                            {f.name}
                          </div>
                          <div style={{ fontSize: '9px', color: currentTheme.subText }}>{f.sz}</div>
                        </div>
                      ))}
                    </Grid>
                  </div>
                </WindowFrame>
              </div>
            )}

            {/* Window 2: Media Player */}
            {isPlayerOpen && !isPlayerMinimized && (
              <div
                style={{
                  position: 'absolute',
                  top: 'clamp(20px, 8vw, 65px)',
                  left: 'clamp(74px, 18vw, 130px)',
                  right: '12px',
                  maxWidth: '320px',
                  zIndex: 20,
                  animation: 'fj-fade-in 0.2s ease',
                }}
              >
                <WindowFrame
                  title="Aero Glass Media Player"
                  icon={<IconMusic size={16} />}
                  variant={windowVariant}
                  isActive={true}
                  onClose={() => setIsPlayerOpen(false)}
                  onMinimize={() => setIsPlayerMinimized(true)}
                  onMaximize={() => {}}
                >
                  <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: 'var(--fj-font-size-md, 1rem)',
                        color: currentTheme.playerTitle,
                      }}
                    >
                      Aquatic Ambience
                    </div>
                    <div
                      style={{
                        fontSize: 'var(--fj-font-size-xs, 0.75rem)',
                        color: currentTheme.subText,
                        marginBottom: '0.75rem',
                      }}
                    >
                      2007 Lossless Remaster
                    </div>
                    <Badge variant="nature" icon={<IconSparkles size={12} />}>
                      FLAC 24-bit / 96kHz
                    </Badge>
                  </div>
                </WindowFrame>
              </div>
            )}

            {/* Window 3: Aero Web Browser */}
            {isBrowserOpen && !isBrowserMinimized && (
              <div
                style={{
                  position: 'absolute',
                  top: 'clamp(15px, 5vw, 40px)',
                  left: 'clamp(60px, 12vw, 100px)',
                  right: '10px',
                  maxWidth: '520px',
                  zIndex: 25,
                  animation: 'fj-fade-in 0.2s ease',
                }}
              >
                <WindowFrame
                  title="Internet Explorer 7 — Frutiger Aero Network"
                  icon={<IconGlobe size={16} />}
                  variant={windowVariant}
                  isActive={true}
                  onClose={() => setIsBrowserOpen(false)}
                  onMinimize={() => setIsBrowserMinimized(true)}
                  onMaximize={() => {}}
                >
                  <div style={{ padding: '0.25rem 0' }}>
                    <div
                      style={{
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'center',
                        padding: '0.35rem 0.6rem',
                        background: currentTheme.addressBg,
                        borderRadius: 'var(--fj-radius-sm, 6px)',
                        border: currentTheme.addressBorder,
                        fontSize: 'var(--fj-font-size-xs, 0.75rem)',
                        marginBottom: '0.75rem',
                        color: currentTheme.addressText,
                        fontWeight: 600,
                      }}
                    >
                      <span style={{ color: '#22c55e' }}>🔒</span>
                      <span>https://biagiocyberspace.it/frutiger-aero</span>
                    </div>

                    <div
                      style={{
                        padding: '1rem',
                        background: currentTheme.cardBg,
                        borderRadius: 'var(--fj-radius-md, 8px)',
                        border: currentTheme.cardBorder,
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: 'var(--fj-font-size-md)',
                          color: currentTheme.textColor,
                          marginBottom: '0.35rem',
                        }}
                      >
                        🌐 Frutiger Aero Cyberspace
                      </div>
                      <p
                        style={{
                          fontSize: '0.75rem',
                          color: currentTheme.subText,
                          margin: '0 0 0.75rem 0',
                          lineHeight: 1.5,
                        }}
                      >
                        Web 2.0 daylight browsing experience with hardware-accelerated translucent
                        canvases and skeuomorphic UI components.
                      </p>
                      <Button
                        size="sm"
                        variant="aero"
                        onClick={() => {
                          playAeroChime();
                          toast({
                            title: 'Navigation Synchronized',
                            description: 'Loaded https://biagiocyberspace.it successfully.',
                            variant: 'success',
                          });
                        }}
                      >
                        Refresh Web Node
                      </Button>
                    </div>
                  </div>
                </WindowFrame>
              </div>
            )}

            {/* Start Menu Popup */}
            <StartMenu
              isOpen={isStartOpen}
              onClose={() => setIsStartOpen(false)}
              userName="Biagio Scaglia"
              programs={[
                {
                  id: 'exp',
                  label: 'Aero Explorer',
                  subtitle: 'Browse files & media vault',
                  icon: <IconFolder size={20} />,
                  onClick: () => {
                    playAeroClick();
                    setIsExplorerOpen(true);
                    setIsExplorerMinimized(false);
                    setIsStartOpen(false);
                  },
                },
                {
                  id: 'player',
                  label: 'Media Player 11',
                  subtitle: 'High fidelity audio',
                  icon: <IconMusic size={20} />,
                  onClick: () => {
                    playAeroClick();
                    setIsPlayerOpen(true);
                    setIsPlayerMinimized(false);
                    setIsStartOpen(false);
                  },
                },
                {
                  id: 'browser',
                  label: 'Aero Web Browser',
                  subtitle: 'Fast daylight navigation',
                  icon: <IconGlobe size={20} />,
                  onClick: () => {
                    playAeroClick();
                    setIsBrowserOpen(true);
                    setIsBrowserMinimized(false);
                    setIsStartOpen(false);
                  },
                },
              ]}
              places={[
                {
                  id: 'docs',
                  label: 'Documents',
                  icon: <IconFolder size={16} />,
                  onClick: () => {
                    playAeroClick();
                    setIsExplorerOpen(true);
                    setIsExplorerMinimized(false);
                    setIsStartOpen(false);
                    toast({
                      title: 'Documents Folder',
                      description: 'Opened C:\\Users\\Biagio\\Documents',
                      variant: 'info',
                    });
                  },
                },
                {
                  id: 'pics',
                  label: 'Pictures',
                  icon: <IconCamera size={16} />,
                  onClick: () => {
                    playAeroClick();
                    setIsExplorerOpen(true);
                    setIsExplorerMinimized(false);
                    setIsStartOpen(false);
                    toast({
                      title: 'Pictures Folder',
                      description: 'Opened C:\\Users\\Biagio\\Pictures (Aero Wallpapers)',
                      variant: 'info',
                    });
                  },
                },
                {
                  id: 'music',
                  label: 'Music',
                  icon: <IconMusic size={16} />,
                  onClick: () => {
                    playAeroClick();
                    setIsPlayerOpen(true);
                    setIsPlayerMinimized(false);
                    setIsStartOpen(false);
                  },
                },
                {
                  id: 'ctrl',
                  label: 'Control Panel',
                  icon: <IconSettings size={16} />,
                  onClick: () => {
                    playAeroChime();
                    setIsStartOpen(false);
                    toast({
                      title: 'Aero Control Panel',
                      description: `Active Theme: ${currentTheme.name} (${windowVariant.toUpperCase()})`,
                      variant: 'success',
                      icon: <IconSettings size={16} />,
                    });
                  },
                },
              ]}
            />
          </div>

          {/* Authentic Taskbar Dock */}
          <Taskbar>
            {/* Start Button */}
            <TaskbarStart
              isOpen={isStartOpen}
              onClick={() => {
                playAeroClick();
                setIsStartOpen(!isStartOpen);
              }}
              icon={<IconWater size={18} />}
            />

            {/* Running Application Tabs */}
            <TaskbarItems>
              {isExplorerOpen && (
                <TaskbarItem
                  label="Aero Explorer"
                  icon={<IconFolder size={14} />}
                  isActive={!isExplorerMinimized}
                  isMinimized={isExplorerMinimized}
                  onClick={() => {
                    playAeroClick();
                    setIsExplorerMinimized(!isExplorerMinimized);
                  }}
                />
              )}
              {isPlayerOpen && (
                <TaskbarItem
                  label="Media Player"
                  icon={<IconMusic size={14} />}
                  isActive={!isPlayerMinimized}
                  isMinimized={isPlayerMinimized}
                  onClick={() => {
                    playAeroClick();
                    setIsPlayerMinimized(!isPlayerMinimized);
                  }}
                />
              )}
              {isBrowserOpen && (
                <TaskbarItem
                  label="Frutiger Web"
                  icon={<IconGlobe size={14} />}
                  isActive={!isBrowserMinimized}
                  isMinimized={isBrowserMinimized}
                  onClick={() => {
                    playAeroClick();
                    setIsBrowserMinimized(!isBrowserMinimized);
                  }}
                />
              )}
              {!isBrowserOpen && (
                <TaskbarItem
                  label="Frutiger Web"
                  icon={<IconGlobe size={14} />}
                  isActive={false}
                  onClick={() => {
                    playAeroClick();
                    setIsBrowserOpen(true);
                    setIsBrowserMinimized(false);
                  }}
                />
              )}
            </TaskbarItems>

            {/* System Tray */}
            <TaskbarTray>
              <div
                className="fj-taskbar-tray-icon"
                title="Wi-Fi Connected"
                onClick={() => {
                  playAeroClick();
                  toast({
                    title: 'Network Telemetry',
                    description: 'Connected to AeroNet-5G (1.2 Gbps)',
                    variant: 'info',
                  });
                }}
              >
                <IconWifi size={14} />
              </div>
              <div
                className="fj-taskbar-tray-icon"
                title="Speakers 80%"
                onClick={() => {
                  playAeroChime();
                  toast({
                    title: 'Audio Master',
                    description: 'Synthesizer Output: 80% (Lossless 24-bit/96kHz)',
                    variant: 'info',
                  });
                }}
              >
                <IconSpeaker size={14} />
              </div>
              <TaskbarClock showDate />
            </TaskbarTray>
          </Taskbar>
        </div>
      </CardContent>
    </Card>
  );
});
