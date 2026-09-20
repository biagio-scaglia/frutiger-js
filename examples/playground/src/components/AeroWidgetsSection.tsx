import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Button,
  Grid,
  Progress,
  Slider,
  Divider,
  Spinner,
  IconCloud,
  IconSun,
  IconMusic,
  IconPlay,
  IconPause,
  IconCheck,
} from '@frutiger.js/react';

export const AeroWidgetsSection: React.FC = React.memo(() => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songProgress, setSongProgress] = useState(38);
  const [sliderVolumeVal, setSliderVolumeVal] = useState(82);

  return (
    <section
      id="widgets"
      aria-labelledby="widgets-heading"
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '0 500px',
      }}
    >
      <h2
        id="widgets-heading"
        style={{
          fontSize: 'var(--fj-font-size-2xl)',
          fontWeight: 700,
          marginBottom: '1.25rem',
          color: 'var(--fj-color-text)',
        }}
      >
        Interactive Aero Dashboard Widgets
      </h2>

      <Grid columns="repeat(auto-fit, minmax(min(100%, 280px), 1fr))" gap="1.5rem">
        {/* Weather Widget */}
        <Card variant="glass" className="fj-animate-float">
          <CardHeader>
            <div>
              <CardTitle>San Francisco</CardTitle>
              <CardDescription>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <IconCloud size={14} /> Clear Sky • Coastal Breeze
                </span>
              </CardDescription>
            </div>
            <Badge variant="nature" icon={<IconCheck size={12} />}>
              Live Radar
            </Badge>
          </CardHeader>
          <CardContent>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '1rem 0',
              }}
            >
              <div
                style={{
                  fontSize: '3.2rem',
                  fontWeight: 800,
                  color: 'var(--fj-color-sky-800)',
                }}
              >
                22°C
              </div>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 30%, #fef08a 0%, #f59e0b 80%)',
                  boxShadow: '0 0 24px rgba(245, 158, 11, 0.5), inset 0 2px 2px #fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#78350f',
                }}
              >
                <IconSun size={34} />
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.5rem',
                textAlign: 'center',
              }}
            >
              {[
                { day: 'Mon', temp: '21°' },
                { day: 'Tue', temp: '23°' },
                { day: 'Wed', temp: '20°' },
                { day: 'Thu', temp: '22°' },
              ].map(f => (
                <div
                  key={f.day}
                  style={{
                    padding: '0.5rem 0.25rem',
                    borderRadius: 'var(--fj-radius-md)',
                    background: 'rgba(255, 255, 255, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'var(--fj-font-size-xs)',
                      color: 'var(--fj-color-text-muted)',
                    }}
                  >
                    {f.day}
                  </div>
                  <div style={{ fontWeight: 700, marginTop: '2px' }}>{f.temp}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" leftIcon={<Spinner size="sm" />}>
              Syncing Satellite
            </Button>
          </CardFooter>
        </Card>

        {/* Glass Media Player Widget */}
        <Card variant="floating">
          <CardHeader>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <IconMusic size={18} color="var(--fj-color-sky-500)" />
              <CardTitle>Aero Player</CardTitle>
            </div>
            <Badge variant="primary">Lossless Audio</Badge>
          </CardHeader>
          <CardContent>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontWeight: 700, fontSize: 'var(--fj-font-size-md)' }}>
                Aquatic Ambience
              </div>
              <div
                style={{
                  fontSize: 'var(--fj-font-size-sm)',
                  color: 'var(--fj-color-text-muted)',
                }}
              >
                David Wise (2007 Remaster)
              </div>
            </div>

            <Progress
              value={songProgress}
              aria-label="Audio track playback progress"
              style={{ marginBottom: '0.75rem' }}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 'var(--fj-font-size-xs)',
                color: 'var(--fj-color-text-muted)',
                marginBottom: '1.25rem',
              }}
            >
              <span>01:24</span>
              <span>03:45</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <Button
                variant="glass"
                size="sm"
                onClick={() => setSongProgress(Math.max(0, songProgress - 15))}
              >
                -15s
              </Button>
              <Button
                variant="aero"
                size="md"
                onClick={() => setIsPlaying(!isPlaying)}
                leftIcon={isPlaying ? <IconPause size={16} /> : <IconPlay size={16} />}
              >
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              <Button
                variant="glass"
                size="sm"
                onClick={() => setSongProgress(Math.min(100, songProgress + 15))}
              >
                +15s
              </Button>
            </div>

            <Divider label="Master Volume" style={{ margin: '1.25rem 0 0.75rem 0' }} />

            <Slider
              aria-label="Master Volume"
              value={sliderVolumeVal}
              onChange={e => setSliderVolumeVal(Number(e.target.value))}
              valueFormat={v => `${v}%`}
              showValue
            />
          </CardContent>
        </Card>

        {/* System Resource Monitor */}
        <Card variant="nature">
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <Badge variant="success">Optimal</Badge>
          </CardHeader>
          <CardContent>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginBottom: '1.25rem',
              }}
            >
              <Progress
                variant="circular"
                value={28}
                size={70}
                strokeWidth={7}
                showLabel
                aria-label="CPU Utilization percentage"
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: 'var(--fj-font-size-sm)' }}>
                  CPU Utilization
                </div>
                <div
                  style={{
                    fontSize: 'var(--fj-font-size-xs)',
                    color: 'var(--fj-color-text-muted)',
                  }}
                >
                  8 Cores • 3.8 GHz
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '0.75rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 'var(--fj-font-size-xs)',
                  marginBottom: '4px',
                }}
              >
                <span>Memory Pool</span>
                <span style={{ fontWeight: 700 }}>4.2 / 16 GB</span>
              </div>
              <Progress value={26} aria-label="Memory usage" />
            </div>

            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 'var(--fj-font-size-xs)',
                  marginBottom: '4px',
                }}
              >
                <span>Glass Rendering Engine</span>
                <span style={{ fontWeight: 700, color: 'var(--fj-color-grass-700)' }}>
                  Hardware Accel (60 FPS)
                </span>
              </div>
              <Progress value={94} status="success" aria-label="GPU Compositing status" />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </section>
  );
});
