import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Avatar,
  Badge,
  Button,
  IconCheck,
  IconSparkles,
  IconStar,
  IconLeaf,
} from '@frutiger.js/react';

export const CreatorSection: React.FC = React.memo(() => {
  return (
    <section
      id="creator"
      aria-labelledby="creator-heading"
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '0 450px',
      }}
    >
      <h2
        id="creator-heading"
        style={{
          fontSize: 'var(--fj-font-size-2xl)',
          fontWeight: 700,
          marginBottom: '1.25rem',
          color: 'var(--fj-color-text)',
        }}
      >
        Architect & Creator
      </h2>

      <Card
        variant="floating"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(224, 242, 254, 0.85) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 20px 45px -15px rgba(2, 132, 199, 0.3), inset 0 1px 1px #ffffff',
        }}
      >
        <CardContent style={{ padding: '2.5rem 2rem' }}>
          <Grid
            columns="repeat(auto-fit, minmax(min(100%, 320px), 1fr))"
            gap="2.5rem"
            style={{ alignItems: 'center' }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginBottom: '1.25rem',
                }}
              >
                <Avatar
                  name="Biagio Scaglia"
                  size="lg"
                  style={{
                    width: 64,
                    height: 64,
                    fontSize: '1.5rem',
                    boxShadow:
                      '0 0 0 3px rgba(255, 255, 255, 0.95), 0 8px 20px rgba(2, 132, 199, 0.4)',
                  }}
                />
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: 'var(--fj-font-size-xl)',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      Biagio Scaglia
                    </h3>
                    <Badge variant="nature" icon={<IconCheck size={12} />}>
                      Lead Architect
                    </Badge>
                  </div>
                  <p
                    style={{
                      margin: '0.25rem 0 0 0',
                      color: 'var(--fj-color-sky-700)',
                      fontWeight: 600,
                      fontSize: 'var(--fj-font-size-sm)',
                    }}
                  >
                    Senior Frontend Engineer & Design Systems Specialist
                  </p>
                </div>
              </div>

              <p
                style={{
                  lineHeight: 1.7,
                  color: 'var(--fj-color-text-muted)',
                  fontSize: 'var(--fj-font-size-md)',
                  marginBottom: '1.5rem',
                }}
              >
                Creator and architect of <strong>Frutiger.js</strong>. Built with a passion for
                tactile skeuomorphism, digital optimism, and modern UI engineering. Frutiger.js
                delivers a responsive design system spanning 320px mobile to 4K ultrawide displays,
                paired with strict accessibility and zero runtime dependencies for core CSS.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/biagio-scaglia"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="aero" size="md" leftIcon={<IconSparkles size={16} />}>
                    @biagio-scaglia on GitHub
                  </Button>
                </a>
                <a
                  href="https://github.com/biagio-scaglia/frutiger-js"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="glass" size="md" leftIcon={<IconStar size={16} />}>
                    Star Repository
                  </Button>
                </a>
              </div>
            </div>

            {/* Architecture & Engineering Highlights */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '2rem',
                borderRadius: 'var(--fj-radius-xl)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                boxShadow: 'inset 0 1px 2px #ffffff, 0 8px 25px rgba(2, 132, 199, 0.12)',
              }}
            >
              <h4
                style={{
                  margin: '0 0 1rem 0',
                  fontSize: 'var(--fj-font-size-md)',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--fj-color-sky-900)',
                }}
              >
                <IconLeaf size={18} color="var(--fj-color-grass-600)" /> Engineering Standards
              </h4>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '1.25rem',
                  lineHeight: 1.8,
                  fontSize: 'var(--fj-font-size-sm)',
                  color: 'var(--fj-color-text)',
                }}
              >
                <li>
                  <strong>Fluid-First Scaling:</strong> Continuous fluid interpolation via CSS clamp
                  and container queries from 320px to 3840px.
                </li>
                <li>
                  <strong>Pure Daylight Atmosphere:</strong> Authentic 2000s Web 2.0 glass
                  gradients, organic curves, and specular reflections.
                </li>
                <li>
                  <strong>WCAG 2.1 AA Accessibility:</strong> High-contrast tokens, tactile focus
                  rings, and full ARIA keyboard navigation.
                </li>
                <li>
                  <strong>Modern Developer Experience:</strong> Strict TypeScript definitions,
                  composable React APIs, and zero CSS dependencies.
                </li>
              </ul>
            </div>
          </Grid>
        </CardContent>
      </Card>
    </section>
  );
});
CreatorSection.displayName = 'CreatorSection';
