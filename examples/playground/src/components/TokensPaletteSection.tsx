import React from 'react';
import { Card, CardContent, Grid } from '@frutiger.js/react';

export const TokensPaletteSection: React.FC = React.memo(() => {
  return (
    <section
      id="tokens"
      aria-labelledby="tokens-heading"
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '0 400px',
      }}
    >
      <h2
        id="tokens-heading"
        style={{
          fontSize: 'var(--fj-font-size-2xl)',
          fontWeight: 700,
          marginBottom: '1.25rem',
          color: 'var(--fj-color-text)',
        }}
      >
        Design Tokens Palette
      </h2>

      <Card variant="default">
        <CardContent>
          <Grid columns="repeat(auto-fit, minmax(130px, 1fr))" gap="0.75rem">
            {[
              { name: 'Sky 500', color: 'var(--fj-color-sky-500)', text: '#fff' },
              { name: 'Ocean 600', color: 'var(--fj-color-ocean-600)', text: '#fff' },
              { name: 'Grass 500', color: 'var(--fj-color-grass-500)', text: '#fff' },
              { name: 'Water 400', color: 'var(--fj-color-water-400)', text: '#0f2d4a' },
              { name: 'Sun 400', color: 'var(--fj-color-sun-400)', text: '#0f2d4a' },
              { name: 'Berry 500', color: 'var(--fj-color-berry-500)', text: '#fff' },
              { name: 'Leaf 500', color: 'var(--fj-color-leaf-500)', text: '#fff' },
              {
                name: 'Neutral 200',
                color: 'var(--fj-color-neutral-200)',
                text: '#0f2d4a',
              },
            ].map(swatch => (
              <div
                key={swatch.name}
                style={{
                  background: swatch.color,
                  color: swatch.text,
                  padding: '1.25rem 0.75rem',
                  borderRadius: 'var(--fj-radius-lg)',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontSize: 'var(--fj-font-size-xs)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                {swatch.name}
              </div>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </section>
  );
});
TokensPaletteSection.displayName = 'TokensPaletteSection';
