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
  Stack,
  Input,
  Table,
  TableContainer,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@frutiger.js/react';

export const AeroResponsiveTab: React.FC = React.memo(() => {
  const [simulatedWidth, setSimulatedWidth] = useState<string>('100%');

  return (
    <Stack spacing="lg">
      <Card variant="glass">
        <CardHeader>
          <div>
            <CardTitle>Viewport Simulator & Container Query Tester</CardTitle>
            <CardDescription>
              Test how Frutiger.js components fluidly adapt to constrained widths and mobile
              devices.
            </CardDescription>
          </div>
          <Badge variant="nature">Fluid-First System</Badge>
        </CardHeader>
        <CardContent>
          {/* Viewport Presets Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              alignItems: 'center',
              marginBottom: '1.5rem',
              padding: '0.75rem 1rem',
              background: 'rgba(255, 255, 255, 0.45)',
              borderRadius: 'var(--fj-radius-lg)',
            }}
          >
            <span
              style={{
                fontSize: 'var(--fj-font-size-sm)',
                fontWeight: 600,
                marginRight: '0.5rem',
              }}
            >
              Viewport Frame:
            </span>
            {[
              { label: '320px (Compact Mobile)', width: '320px' },
              { label: '375px (Standard Phone)', width: '375px' },
              { label: '768px (Tablet)', width: '768px' },
              { label: '1024px (Laptop)', width: '1024px' },
              { label: '100% (Fluid Full)', width: '100%' },
            ].map(preset => (
              <Button
                key={preset.width}
                size="sm"
                variant={simulatedWidth === preset.width ? 'aero' : 'glass'}
                onClick={() => setSimulatedWidth(preset.width)}
              >
                {preset.label}
              </Button>
            ))}
          </div>

          {/* Simulated Viewport Boundary */}
          <div
            style={{
              border: '2px dashed var(--fj-color-sky-400)',
              borderRadius: 'var(--fj-radius-xl)',
              padding: '1.5rem',
              background: 'rgba(240, 249, 255, 0.5)',
              maxWidth: simulatedWidth,
              margin: '0 auto',
              transition: 'max-width 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <Badge variant="primary">Width: {simulatedWidth}</Badge>
            </div>

            {/* Test Component inside Frame */}
            <Stack spacing="md">
              <Card variant="default">
                <CardHeader>
                  <div>
                    <CardTitle>Intrinsic Responsive Card</CardTitle>
                    <CardDescription>
                      Uses @container queries for automatic stacking
                    </CardDescription>
                  </div>
                  <Badge variant="nature">Safe Area</Badge>
                </CardHeader>
                <CardContent>
                  <p
                    style={{
                      fontSize: 'var(--fj-font-size-sm)',
                      marginBottom: '1rem',
                    }}
                  >
                    This card automatically reorganizes its header and actions when its container is
                    below 360px.
                  </p>
                  <Input label="Fluid Input" placeholder="Type here..." />
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm">
                    Dismiss
                  </Button>
                  <Button variant="aero" size="sm">
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
                  gap: '0.75rem',
                }}
              >
                <Button variant="primary" isFullWidth size="sm">
                  Action 1
                </Button>
                <Button variant="secondary" isFullWidth size="sm">
                  Action 2
                </Button>
              </div>
            </Stack>
          </div>
        </CardContent>
      </Card>

      {/* Diagnostic Verification Matrix */}
      <Card variant="default">
        <CardHeader>
          <CardTitle>Responsive Support Matrix</CardTitle>
          <CardDescription>Verified target screen resolutions and behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <TableContainer>
            <Table responsiveMode="stack" isStriped isHoverable>
              <TableCaption>
                Verified 320px–3840px responsive viewport compliance matrix.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Target Viewport</TableHead>
                  <TableHead>Device Category</TableHead>
                  <TableHead>Navbar Mode</TableHead>
                  <TableHead>Grid Columns</TableHead>
                  <TableHead>Touch Hit Target</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    vp: '320 × 568',
                    cat: 'iPhone SE (1st gen)',
                    nav: 'Hamburger Drawer',
                    grid: '1 Column',
                    hit: '44px Touch Target',
                    status: 'Verified',
                  },
                  {
                    vp: '375 × 812',
                    cat: 'iPhone Mini / Standard',
                    nav: 'Hamburger Drawer',
                    grid: '1 Column',
                    hit: '44px Touch Target',
                    status: 'Verified',
                  },
                  {
                    vp: '412 × 915',
                    cat: 'Samsung Galaxy / Pixel',
                    nav: 'Hamburger Drawer',
                    grid: '1–2 Columns',
                    hit: '44px Touch Target',
                    status: 'Verified',
                  },
                  {
                    vp: '768 × 1024',
                    cat: 'iPad / Tablet Portrait',
                    nav: 'Full Desktop Nav',
                    grid: '2–3 Columns',
                    hit: '40px Intrinsic',
                    status: 'Verified',
                  },
                  {
                    vp: '1024 × 768',
                    cat: 'Tablet Landscape / Laptop',
                    nav: 'Full Desktop Nav',
                    grid: '3 Columns',
                    hit: '40px Intrinsic',
                    status: 'Verified',
                  },
                  {
                    vp: '1440 × 900',
                    cat: 'MacBook / Desktop',
                    nav: 'Full Desktop Nav',
                    grid: '3–4 Columns',
                    hit: '40px Intrinsic',
                    status: 'Verified',
                  },
                  {
                    vp: '3840 × 2160',
                    cat: '4K Ultra-wide Display',
                    nav: 'Constrained Max-width',
                    grid: '4 Columns',
                    hit: '40px Intrinsic',
                    status: 'Verified',
                  },
                ].map((row, i) => (
                  <TableRow key={i}>
                    <TableCell dataLabel="Target Viewport" style={{ fontWeight: 600 }}>
                      {row.vp}
                    </TableCell>
                    <TableCell dataLabel="Device Category">{row.cat}</TableCell>
                    <TableCell dataLabel="Navbar Mode">{row.nav}</TableCell>
                    <TableCell dataLabel="Grid Columns">{row.grid}</TableCell>
                    <TableCell dataLabel="Touch Hit Target">{row.hit}</TableCell>
                    <TableCell dataLabel="Status">
                      <Badge variant="success">{row.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Stack>
  );
});
AeroResponsiveTab.displayName = 'AeroResponsiveTab';
