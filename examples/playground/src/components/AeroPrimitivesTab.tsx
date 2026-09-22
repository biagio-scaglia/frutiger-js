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
  Stack,
  AeroSurface,
  AeroSurfaceVariant,
  Glass,
  Gloss,
  Bevel,
  Glow,
  Reflection,
  IconSparkles,
  IconWater,
  IconLeaf,
  IconSun,
  IconAeroOrb,
  IconBubble,
  IconDisc,
  GrassField,
} from '@frutiger.js/react';

export const AeroPrimitivesTab: React.FC = React.memo(() => {
  const [selectedVariant, setSelectedVariant] = useState<AeroSurfaceVariant>('crystal');
  const [hasBevel, setHasBevel] = useState<'deep' | boolean>('deep');
  const [selectedGlow, setSelectedGlow] = useState<'aqua' | 'sun' | 'meadow' | 'aurora'>('aqua');
  const [hasGlossCap, setHasGlossCap] = useState(true);

  // GrassField state
  const [grassColor, setGrassColor] = useState<'lush' | 'sunny' | 'emerald' | 'golden'>('lush');
  const [grassWind, setGrassWind] = useState<'calm' | 'breeze' | 'windy'>('breeze');
  const [grassDensity, setGrassDensity] = useState<'low' | 'medium' | 'high'>('medium');
  const [grassDew, setGrassDew] = useState(true);
  const [grassFlowers, setGrassFlowers] = useState(true);

  return (
    <Stack spacing="xl">
      {/* Interactive Aero Grass Field Studio */}
      <Card variant="glass">
        <CardHeader>
          <div>
            <CardTitle>Aero Living Grass Field (&lt;GrassField /&gt;)</CardTitle>
            <CardDescription>
              Photorealistic Frutiger Aero organic grass field with real-time mouse bending physics,
              sinusoidal wind simulation, morning dew drops, and blooming daisies.
            </CardDescription>
          </div>
          <Badge variant="nature" icon={<IconLeaf size={14} />}>
            Interactive Biosphere
          </Badge>
        </CardHeader>
        <CardContent>
          <Stack spacing="md">
            {/* Live Interactive Canvas */}
            <div
              style={{
                borderRadius: 'var(--fj-radius-xl)',
                overflow: 'hidden',
                background:
                  'radial-gradient(ellipse at 50% 0%, #e0f2fe 0%, #bae6fd 60%, #7dd3fc 100%)',
                boxShadow:
                  'inset 0 1px 2px #fff, 0 8px 24px rgba(2, 132, 199, 0.15)',
                border: '1px solid rgba(186, 230, 253, 0.8)',
                position: 'relative',
              }}
            >
              <GrassField
                height={160}
                colorScheme={grassColor}
                windSpeed={grassWind}
                density={grassDensity}
                showDew={grassDew}
                showFlowers={grassFlowers}
                interactive={true}
              />
            </div>

            {/* Live Controls */}
            <div
              style={{
                display: 'flex',
                gap: '1.25rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.5rem',
              }}
            >
              {/* Color Scheme */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--fj-color-text-muted)' }}>
                  Color:
                </span>
                {(['lush', 'sunny', 'emerald', 'golden'] as const).map((scheme) => (
                  <Button
                    key={scheme}
                    size="sm"
                    variant={grassColor === scheme ? 'primary' : 'glass'}
                    onClick={() => setGrassColor(scheme)}
                  >
                    {scheme.charAt(0).toUpperCase() + scheme.slice(1)}
                  </Button>
                ))}
              </div>

              {/* Wind Speed */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--fj-color-text-muted)' }}>
                  Wind:
                </span>
                {(['calm', 'breeze', 'windy'] as const).map((w) => (
                  <Button
                    key={w}
                    size="sm"
                    variant={grassWind === w ? 'primary' : 'glass'}
                    onClick={() => setGrassWind(w)}
                  >
                    {w.charAt(0).toUpperCase() + w.slice(1)}
                  </Button>
                ))}
              </div>

              {/* Density */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--fj-color-text-muted)' }}>
                  Density:
                </span>
                {(['low', 'medium', 'high'] as const).map((d) => (
                  <Button
                    key={d}
                    size="sm"
                    variant={grassDensity === d ? 'primary' : 'glass'}
                    onClick={() => setGrassDensity(d)}
                  >
                    {d.charAt(0).toUpperCase() + d.slice(1)}
                  </Button>
                ))}
              </div>

              {/* Toggles */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Button
                  size="sm"
                  variant={grassDew ? 'aero' : 'glass'}
                  onClick={() => setGrassDew(!grassDew)}
                >
                  Dew: {grassDew ? 'ON' : 'OFF'}
                </Button>
                <Button
                  size="sm"
                  variant={grassFlowers ? 'aero' : 'glass'}
                  onClick={() => setGrassFlowers(!grassFlowers)}
                >
                  Flowers: {grassFlowers ? 'ON' : 'OFF'}
                </Button>
              </div>
            </div>
          </Stack>
        </CardContent>
      </Card>
      <Card variant="glass">
        <CardHeader>
          <div>
            <CardTitle>Aero Visual Primitives Studio</CardTitle>
            <CardDescription>
              Foundational building blocks of the Frutiger Aero visual language. Compose surfaces,
              specular curvatures, bevels, ambient glows, and ground reflections.
            </CardDescription>
          </div>
          <Badge variant="nature" icon={<IconSparkles size={14} />}>
            v0.3 Visual Engine
          </Badge>
        </CardHeader>
        <CardContent>
          {/* Interactive Composition Matrix */}
          <Grid columns="repeat(auto-fit, minmax(min(100%, 300px), 1fr))" gap="2rem">
            {/* Live Interactive Primitive Preview */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2.5rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.4)',
                borderRadius: 'var(--fj-radius-xl)',
                border: '1px dashed var(--fj-color-sky-400)',
                minHeight: '320px',
              }}
            >
              <AeroSurface
                variant={selectedVariant}
                hasBevel={hasBevel}
                glow={selectedGlow}
                hasGlossCap={hasGlossCap}
                isInteractive
                style={{
                  width: 'min(100%, 280px)',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '0.75rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {selectedVariant === 'crystal' && <IconAeroOrb size={44} />}
                  {selectedVariant === 'water' && <IconWater size={44} />}
                  {selectedVariant === 'glass' && <IconBubble size={44} />}
                  {selectedVariant === 'gloss' && <IconSparkles size={44} />}
                  {selectedVariant === 'acrylic' && <IconSun size={44} />}
                  {selectedVariant === 'chrome' && <IconDisc size={44} />}
                </div>
                <h4
                  style={{
                    margin: '0 0 0.5rem 0',
                    fontSize: 'var(--fj-font-size-md)',
                    fontWeight: 800,
                  }}
                >
                  {selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Surface
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: 'var(--fj-font-size-xs)',
                    color: 'var(--fj-color-text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  Interactive skeuomorphic primitive with tactile specular highlights.
                </p>
              </AeroSurface>
            </div>

            {/* Primitive Controls */}
            <div>
              <h4
                style={{
                  margin: '0 0 1rem 0',
                  fontSize: 'var(--fj-font-size-md)',
                  fontWeight: 700,
                  color: 'var(--fj-color-sky-950)',
                }}
              >
                Configure Surface Layers
              </h4>

              <div style={{ marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontSize: 'var(--fj-font-size-xs)',
                    fontWeight: 700,
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  Base Variant:
                </span>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {(
                    [
                      'crystal',
                      'water',
                      'glass',
                      'gloss',
                      'acrylic',
                      'chrome',
                    ] as AeroSurfaceVariant[]
                  ).map(v => (
                    <Button
                      key={v}
                      size="sm"
                      variant={selectedVariant === v ? 'aero' : 'glass'}
                      onClick={() => setSelectedVariant(v)}
                    >
                      {v.toUpperCase()}
                    </Button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontSize: 'var(--fj-font-size-xs)',
                    fontWeight: 700,
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  Ambient Specular Glow:
                </span>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {(['aqua', 'sun', 'meadow', 'aurora'] as const).map(g => (
                    <Button
                      key={g}
                      size="sm"
                      variant={selectedGlow === g ? 'primary' : 'glass'}
                      onClick={() => setSelectedGlow(g)}
                    >
                      {g.toUpperCase()}
                    </Button>
                  ))}
                </div>
              </div>

              <div
                style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}
              >
                <Button
                  size="sm"
                  variant={hasGlossCap ? 'success' : 'ghost'}
                  onClick={() => setHasGlossCap(!hasGlossCap)}
                >
                  Specular Gloss Cap: {hasGlossCap ? 'ON' : 'OFF'}
                </Button>
                <Button
                  size="sm"
                  variant={hasBevel ? 'success' : 'ghost'}
                  onClick={() => setHasBevel(hasBevel ? false : 'deep')}
                >
                  Tactile Bevel: {hasBevel ? 'DEEP' : 'NONE'}
                </Button>
              </div>
            </div>
          </Grid>
        </CardContent>
      </Card>

      {/* Discrete Primitives Showcase */}
      <Grid columns="repeat(auto-fit, minmax(min(100%, 240px), 1fr))" gap="1.5rem">
        {/* Glass Primitive */}
        <Card variant="default">
          <CardHeader>
            <CardTitle>
              <IconWater size={16} /> &lt;Glass /&gt;
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Glass specular style={{ padding: '1.5rem 1rem', textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 'var(--fj-font-size-sm)' }}>
                Acrylic Vista Glass
              </div>
              <div
                style={{ fontSize: 'var(--fj-font-size-xs)', color: 'var(--fj-color-text-muted)' }}
              >
                High-blur refraction
              </div>
            </Glass>
          </CardContent>
        </Card>

        {/* Gloss Cap Primitive */}
        <Card variant="default">
          <CardHeader>
            <CardTitle>
              <IconSparkles size={16} /> &lt;Gloss /&gt;
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              style={{
                position: 'relative',
                height: '100px',
                borderRadius: 'var(--fj-radius-lg)',
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                fontSize: 'var(--fj-font-size-sm)',
                overflow: 'hidden',
              }}
            >
              <Gloss curvature="dome" intensity="bright" />
              Specular Dome Cap
            </div>
          </CardContent>
        </Card>

        {/* Bevel Primitive */}
        <Card variant="default">
          <CardHeader>
            <CardTitle>
              <IconSun size={16} /> &lt;Bevel /&gt;
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Bevel
              depth={2}
              style={{
                padding: '1.5rem 1rem',
                borderRadius: 'var(--fj-radius-lg)',
                background: 'rgba(240, 249, 255, 0.9)',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: 'var(--fj-font-size-sm)',
                color: 'var(--fj-color-text)',
              }}
            >
              Tactile 3D Bevel Edge
            </Bevel>
          </CardContent>
        </Card>

        {/* Glow Primitive */}
        <Card variant="default">
          <CardHeader>
            <CardTitle>
              <IconSparkles size={16} /> &lt;Glow /&gt;
            </CardTitle>
          </CardHeader>
          <CardContent style={{ textAlign: 'center' }}>
            <Glow
              color="aqua"
              style={{
                padding: '1.5rem 1rem',
                borderRadius: 'var(--fj-radius-lg)',
                background: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 700,
                fontSize: 'var(--fj-font-size-sm)',
                color: 'var(--fj-color-text)',
              }}
            >
              Ambient Aqua Glow
            </Glow>
          </CardContent>
        </Card>

        {/* Reflection Mirror Primitive */}
        <Card variant="default">
          <CardHeader>
            <CardTitle>
              <IconLeaf size={16} /> &lt;Reflection /&gt;
            </CardTitle>
          </CardHeader>
          <CardContent style={{ textAlign: 'center', paddingBottom: '2.5rem' }}>
            <Reflection>
              <Badge variant="nature">Mirror Reflection</Badge>
            </Reflection>
          </CardContent>
        </Card>
      </Grid>
    </Stack>
  );
});
