import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Grid,
  Stack,
  ScrollArea,
  IconWater,
} from '@frutiger.js/react';

export const AeroOverflowTab: React.FC = React.memo(() => {
  return (
    <Stack spacing="lg">
      <Card variant="glass">
        <CardHeader>
          <div>
            <CardTitle>Custom Aero Scrollbars & Dynamic Overflow Regions</CardTitle>
            <CardDescription>
              Tactile skeuomorphic scrollbars with aqua gradient thumbs, subtle tracks, and dynamic
              top/bottom shadow masks.
            </CardDescription>
          </div>
          <Badge variant="nature">Touch & A11y Region</Badge>
        </CardHeader>
        <CardContent>
          <Grid columns="repeat(auto-fit, minmax(min(100%, 300px), 1fr))" gap="1.5rem">
            {/* Vertical ScrollArea Demo */}
            <div>
              <h4
                style={{
                  margin: '0 0 0.75rem 0',
                  fontSize: 'var(--fj-font-size-md)',
                  fontWeight: 700,
                  color: 'var(--fj-color-sky-950)',
                }}
              >
                Vertical ScrollArea (with Dynamic Fade Shadows)
              </h4>
              <ScrollArea
                maxHeight="250px"
                showOverflowShadows
                style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  padding: '1.25rem',
                  borderRadius: 'var(--fj-radius-lg)',
                  border: '1px solid rgba(186, 230, 253, 0.85)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    {
                      title: 'Windows Vista Aero Glass',
                      desc: 'Translucent glass surfaces with specular highlights and vivid nature wallpapers.',
                    },
                    {
                      title: 'Mac OS X Aqua Interface',
                      desc: 'Luminous gel buttons, ripple effects, crystal spheres, and skeuomorphic organic joy.',
                    },
                    {
                      title: 'PlayStation 3 XMB Wave',
                      desc: 'Dynamic flowing ribbon waves, particle dust, and iridescent daylight illumination.',
                    },
                    {
                      title: 'Nintendo Wii Channel UI',
                      desc: 'Soft rounded rectangles, bubbly cursor feedback, and clean digital optimism.',
                    },
                    {
                      title: 'iOS 6 Skeuomorphic Precision',
                      desc: 'Rich tactile textures, custom dials, stitched borders, and glossy chrome highlights.',
                    },
                    {
                      title: 'Windows 7 Desktop Gadgets',
                      desc: 'Translucent floating desktop widgets showing dials, weather radars, and analog clocks.',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '0.75rem 1rem',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: 'var(--fj-radius-md)',
                        border: '1px solid rgba(255, 255, 255, 0.95)',
                        boxShadow: '0 2px 6px rgba(2, 132, 199, 0.08)',
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 'var(--fj-font-size-sm)',
                          color: 'var(--fj-color-sky-900)',
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: 'var(--fj-font-size-xs)',
                          color: 'var(--fj-color-text-muted)',
                          marginTop: '0.2rem',
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Horizontal ScrollArea Demo */}
            <div>
              <h4
                style={{
                  margin: '0 0 0.75rem 0',
                  fontSize: 'var(--fj-font-size-md)',
                  fontWeight: 700,
                  color: 'var(--fj-color-sky-950)',
                }}
              >
                Horizontal Custom Scrollbar Demo
              </h4>
              <ScrollArea
                maxHeight="250px"
                showOverflowShadows={false}
                style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  padding: '1.25rem',
                  borderRadius: 'var(--fj-radius-lg)',
                  border: '1px solid rgba(186, 230, 253, 0.85)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    width: 'max-content',
                    paddingBottom: '0.5rem',
                  }}
                >
                  {[
                    { name: 'Pure Sky Blue', hex: '#38bdf8' },
                    { name: 'Deep Ocean Blue', hex: '#0284c7' },
                    { name: 'Lagoon Turquoise', hex: '#2dd4bf' },
                    { name: 'Meadow Green', hex: '#22c55e' },
                    { name: 'Solar Sun Amber', hex: '#fbbf24' },
                    { name: 'Berry Crystal Pink', hex: '#f43f5e' },
                    { name: 'Spring Fresh Leaf', hex: '#86efac' },
                    { name: 'Cloud Light Aqua', hex: '#e0f2fe' },
                  ].map((c, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: 135,
                        padding: '1.25rem 0.85rem',
                        background: `linear-gradient(135deg, ${c.hex} 0%, rgba(255,255,255,0.85) 100%)`,
                        borderRadius: 'var(--fj-radius-lg)',
                        border: '1px solid rgba(255, 255, 255, 0.95)',
                        boxShadow: 'inset 0 1px 1px #fff, 0 4px 12px rgba(2, 132, 199, 0.15)',
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: 'var(--fj-font-size-xs)',
                        color: '#0f2d4a',
                      }}
                    >
                      <div
                        style={{
                          marginBottom: '0.4rem',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <IconWater size={20} />
                      </div>
                      <div>{c.name}</div>
                      <div
                        style={{
                          opacity: 0.85,
                          marginTop: '4px',
                          fontFamily: 'monospace',
                        }}
                      >
                        {c.hex}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
});
AeroOverflowTab.displayName = 'AeroOverflowTab';
