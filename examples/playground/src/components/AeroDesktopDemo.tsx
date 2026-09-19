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
} from '@frutiger-js/react';

export const AeroDesktopDemo: React.FC = React.memo(() => {
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [windowVariant, setWindowVariant] = useState<WindowFrameVariant>('aero');
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  const [isExplorerMinimized, setIsExplorerMinimized] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isPlayerMinimized, setIsPlayerMinimized] = useState(false);

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
        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge variant="nature">Desktop Suite</Badge>
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
            minHeight: '480px',
            height: 'clamp(480px, 65vh, 540px)',
            borderRadius: 'var(--fj-radius-xl)',
            background:
              'radial-gradient(circle at 50% 30%, #e0f2fe 0%, #bae6fd 45%, #7dd3fc 85%, #38bdf8 100%)',
            border: '1px solid rgba(255, 255, 255, 0.95)',
            boxShadow:
              'inset 0 2px 8px rgba(2, 132, 199, 0.2), 0 10px 30px rgba(2, 132, 199, 0.15)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
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
              left: '15%',
              width: '70%',
              height: '50%',
              background:
                'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Desktop Work Area */}
          <div style={{ position: 'relative', flex: 1, padding: '0.75rem', overflow: 'hidden' }}>
            {/* Desktop Shortcut Icons */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                width: '70px',
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
                  padding: '0.4rem',
                  borderRadius: 'var(--fj-radius-md)',
                  color: '#0f2d4a',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'none')}
              >
                <div style={{ fontSize: '1.8rem' }}>📁</div>
                <span style={{ fontSize: '11px', fontWeight: 700, textShadow: '0 1px 2px #fff' }}>
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
                  padding: '0.4rem',
                  borderRadius: 'var(--fj-radius-md)',
                  color: '#0f2d4a',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'none')}
              >
                <div style={{ fontSize: '1.8rem' }}>🎵</div>
                <span style={{ fontSize: '11px', fontWeight: 700, textShadow: '0 1px 2px #fff' }}>
                  WMP 11
                </span>
              </button>
            </div>

            {/* Window 1: Aero Explorer */}
            {isExplorerOpen && !isExplorerMinimized && (
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: 'clamp(8px, 10vw, 96px)',
                  right: '8px',
                  maxWidth: '560px',
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
                        background: '#fff',
                        borderRadius: 'var(--fj-radius-sm)',
                        border: '1px solid rgba(14, 165, 233, 0.4)',
                        fontSize: 'var(--fj-font-size-xs)',
                        marginBottom: '0.75rem',
                        color: 'var(--fj-color-sky-900)',
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
                        { name: 'aurora_4k.png', icon: '🌄', sz: '14.2 MB' },
                        { name: 'aqua_orb.c4d', icon: '🔮', sz: '38.4 MB' },
                        { name: 'ambience.flac', icon: '🎵', sz: '28.1 MB' },
                      ].map((f, i) => (
                        <div
                          key={i}
                          style={{
                            padding: '0.5rem 0.25rem',
                            borderRadius: 'var(--fj-radius-md)',
                            background: 'rgba(255, 255, 255, 0.85)',
                            border: '1px solid rgba(255, 255, 255, 0.95)',
                            textAlign: 'center',
                            cursor: 'pointer',
                          }}
                        >
                          <div style={{ fontSize: '1.4rem' }}>{f.icon}</div>
                          <div
                            style={{
                              fontSize: '10px',
                              fontWeight: 600,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {f.name}
                          </div>
                          <div style={{ fontSize: '9px', color: 'var(--fj-color-text-muted)' }}>
                            {f.sz}
                          </div>
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
                  top: 'clamp(20px, 8vw, 75px)',
                  left: 'clamp(12px, 14vw, 130px)',
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
                        fontSize: 'var(--fj-font-size-md)',
                        color: 'var(--fj-color-sky-950)',
                      }}
                    >
                      Aquatic Ambience
                    </div>
                    <div
                      style={{
                        fontSize: 'var(--fj-font-size-xs)',
                        color: 'var(--fj-color-text-muted)',
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
                  icon: '📁',
                  onClick: () => {
                    setIsExplorerOpen(true);
                    setIsExplorerMinimized(false);
                    setIsStartOpen(false);
                  },
                },
                {
                  id: 'player',
                  label: 'Media Player 11',
                  subtitle: 'High fidelity audio',
                  icon: '🎵',
                  onClick: () => {
                    setIsPlayerOpen(true);
                    setIsPlayerMinimized(false);
                    setIsStartOpen(false);
                  },
                },
                {
                  id: 'browser',
                  label: 'Aero Web Browser',
                  subtitle: 'Fast daylight navigation',
                  icon: '🌐',
                  onClick: () => {
                    alert('Launching Aero Web Browser');
                    setIsStartOpen(false);
                  },
                },
              ]}
              places={[
                { id: 'docs', label: 'Documents', icon: '📄' },
                { id: 'pics', label: 'Pictures', icon: '🖼️' },
                { id: 'music', label: 'Music', icon: '🎶' },
                { id: 'ctrl', label: 'Control Panel', icon: '⚙️' },
              ]}
            />
          </div>

          {/* Authentic Taskbar Dock */}
          <Taskbar>
            {/* Start Button */}
            <TaskbarStart
              isOpen={isStartOpen}
              onClick={() => setIsStartOpen(!isStartOpen)}
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
                  onClick={() => setIsExplorerMinimized(!isExplorerMinimized)}
                />
              )}
              {isPlayerOpen && (
                <TaskbarItem
                  label="Media Player"
                  icon={<IconMusic size={14} />}
                  isActive={!isPlayerMinimized}
                  isMinimized={isPlayerMinimized}
                  onClick={() => setIsPlayerMinimized(!isPlayerMinimized)}
                />
              )}
              <TaskbarItem
                label="Frutiger Web"
                icon={<IconGlobe size={14} />}
                isActive={false}
                onClick={() => alert('Frutiger.js online!')}
              />
            </TaskbarItems>

            {/* System Tray */}
            <TaskbarTray>
              <div className="fj-taskbar-tray-icon" title="Wi-Fi Connected">
                <IconWifi size={14} />
              </div>
              <div className="fj-taskbar-tray-icon" title="Speakers 80%">
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
