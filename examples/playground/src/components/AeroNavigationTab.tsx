import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Button,
  Stack,
  Dropdown,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  DropdownSelect,
  Avatar,
  AvatarGroup,
  Pagination,
  EmptyState,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  IconSparkles,
  IconWater,
  IconLeaf,
  IconSun,
  IconStar,
  IconGlobe,
  useToast,
} from '@frutiger.js/react';
import { playAeroClick, playAeroChime } from '../utils/aeroAudio';

export interface AeroNavigationTabProps {
  onOpenDrawer: () => void;
  sliderGainVal?: number;
  onExportTokens: () => void;
  onExportComponents: () => void;
}

export const AeroNavigationTab: React.FC<AeroNavigationTabProps> = React.memo(
  ({ onOpenDrawer, sliderGainVal = 74, onExportTokens, onExportComponents }) => {
    const [selectedLang, setSelectedLang] = useState<'en' | 'it'>('en');
    const [selectedPreset, setSelectedPreset] = useState('daylight');
    const [paginationPage, setPaginationPage] = useState(2);
    const { toast } = useToast();

    return (
      <Stack spacing="lg">
        {/* Dropdown Showcase */}
        <Card variant="glass">
          <CardHeader>
            <div>
              <CardTitle>Aero Glass Dropdowns & Context Menus</CardTitle>
              <CardDescription>
                Tactile translucent popup menus with specular borders, glowing hover states, and
                keyboard accessibility.
              </CardDescription>
            </div>
            <Badge variant="nature">Interactive Menus</Badge>
          </CardHeader>
          <CardContent>
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <Dropdown
                trigger={
                  <Button variant="primary" size="md">
                    File Operations ▾
                  </Button>
                }
              >
                <DropdownHeader>System Vault</DropdownHeader>
                <DropdownItem
                  icon={<IconSparkles size={16} />}
                  onClick={() => {
                    playAeroChime(sliderGainVal);
                    const id = Math.floor(1000 + Math.random() * 9000);
                    toast({
                      title: 'Workspace Initialized ✨',
                      description: `Created new Aero workspace AERO-WS-${id}`,
                      variant: 'info',
                    });
                  }}
                >
                  New Workspace
                </DropdownItem>
                <DropdownItem
                  icon={<IconWater size={16} />}
                  onClick={() => {
                    playAeroClick(sliderGainVal);
                    toast({
                      title: 'Atmospheric Telemetry Sync 💧',
                      description: 'Synchronized with Global Frutiger Network.',
                      variant: 'info',
                    });
                  }}
                >
                  Aero Atmospheric Sync
                </DropdownItem>
                <DropdownDivider />
                <DropdownHeader>Exports</DropdownHeader>
                <DropdownItem icon={<IconLeaf size={16} />} onClick={onExportTokens}>
                  Export CSS Tokens
                </DropdownItem>
                <DropdownItem icon={<IconSun size={16} />} onClick={onExportComponents}>
                  Export Component Package
                </DropdownItem>
              </Dropdown>

              <Dropdown
                trigger={
                  <Button variant="glass" size="md">
                    User Preferences ▾
                  </Button>
                }
              >
                <DropdownHeader>Session Account</DropdownHeader>
                <DropdownItem
                  icon={<IconStar size={16} />}
                  onClick={() => {
                    playAeroClick(sliderGainVal);
                    onOpenDrawer();
                  }}
                >
                  Biagio Scaglia (Admin)
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem
                  icon={<IconGlobe size={16} />}
                  isActive={selectedLang === 'en'}
                  showCheck
                  onClick={() => {
                    setSelectedLang('en');
                    playAeroClick(sliderGainVal);
                    toast({
                      title: '🌐 Language Changed',
                      description: 'System language set to English (US).',
                      variant: 'info',
                    });
                  }}
                >
                  English (US)
                </DropdownItem>
                <DropdownItem
                  icon={<IconGlobe size={16} />}
                  isActive={selectedLang === 'it'}
                  showCheck
                  onClick={() => {
                    setSelectedLang('it');
                    playAeroClick(sliderGainVal);
                    toast({
                      title: '🇮🇹 Lingua Modificata',
                      description: 'Lingua di sistema impostata su Italiano (IT).',
                      variant: 'success',
                    });
                  }}
                >
                  Italiano (IT)
                </DropdownItem>
              </Dropdown>

              {/* DropdownSelect Demo */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  flexWrap: 'wrap',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    fontSize: 'var(--fj-font-size-sm)',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  Format:
                </span>
                <DropdownSelect
                  value={selectedPreset}
                  onChange={val => {
                    setSelectedPreset(val);
                    playAeroClick(sliderGainVal);
                    toast({
                      title: `Format Switched: ${val.toUpperCase()} ✨`,
                      description: `Active preview format is now ${val}.`,
                      variant: val === 'emerald' ? 'success' : 'info',
                    });
                  }}
                  options={[
                    {
                      value: 'daylight',
                      label: 'Daylight Sky (Theme)',
                      icon: <IconWater size={14} />,
                    },
                    {
                      value: 'gloss',
                      label: 'Specular Crystal (Theme)',
                      icon: <IconSparkles size={14} />,
                    },
                    {
                      value: 'emerald',
                      label: 'Biosphere Green (Theme)',
                      icon: <IconLeaf size={14} />,
                    },
                    {
                      value: 'json',
                      label: 'JSON Schema (Export)',
                      icon: <IconSun size={14} />,
                    },
                    {
                      value: 'css',
                      label: 'CSS Tokens (Variables)',
                      icon: <IconSparkles size={14} />,
                    },
                    {
                      value: 'tsx',
                      label: 'React TSX (Component)',
                      icon: <IconStar size={14} />,
                    },
                  ]}
                />
              </div>
            </div>

            {/* Live Format Output & Preview Container */}
            <div
              style={{
                marginTop: '1.25rem',
                padding: '1rem',
                borderRadius: 'var(--fj-radius-lg)',
                background:
                  selectedPreset === 'daylight'
                    ? 'linear-gradient(135deg, rgba(224, 242, 254, 0.8) 0%, rgba(186, 230, 253, 0.5) 100%)'
                    : selectedPreset === 'emerald'
                      ? 'linear-gradient(135deg, rgba(220, 252, 231, 0.8) 0%, rgba(187, 247, 208, 0.5) 100%)'
                      : selectedPreset === 'gloss'
                        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 249, 255, 0.7) 100%)'
                        : 'rgba(15, 23, 42, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow:
                  'inset 0 1px 2px rgba(255, 255, 255, 0.9), 0 2px 8px rgba(12, 74, 110, 0.08)',
                transition: 'all 0.3s ease',
                maxWidth: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  marginBottom: '0.75rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  <Badge
                    variant={
                      selectedPreset === 'emerald'
                        ? 'nature'
                        : selectedPreset === 'gloss'
                          ? 'info'
                          : 'primary'
                    }
                    style={{ flexShrink: 0, whiteSpace: 'nowrap' }}
                  >
                    Active Format: {selectedPreset.toUpperCase()}
                  </Badge>

                  <Button
                    size="sm"
                    variant="glass"
                    style={{ flexShrink: 0 }}
                    onClick={() => {
                      const codeSnippets: Record<string, string> = {
                        daylight: ':root { --fj-theme: daylight; --fj-color-sky-500: #0ea5e9; }',
                        gloss: ':root { --fj-surface: glass; --fj-backdrop-blur: 16px; }',
                        emerald: ':root { --fj-theme: nature; --fj-color-nature-500: #22c55e; }',
                        json: '{\n  "name": "@frutiger.js/theme",\n  "version": "1.0.6",\n  "preset": "aero-glass"\n}',
                        css: ':root {\n  --fj-color-primary: #0284c7;\n  --fj-color-secondary: #0d9488;\n}',
                        tsx: '<Button variant="aero" size="md">Click Me</Button>',
                      };
                      navigator.clipboard.writeText(codeSnippets[selectedPreset] || selectedPreset);
                      playAeroChime(sliderGainVal);
                      toast({
                        title: 'Payload Copied! 📋',
                        description: `Copied ${selectedPreset.toUpperCase()} output to clipboard.`,
                        variant: 'success',
                      });
                    }}
                  >
                    Copy Payload
                  </Button>
                </div>

                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--fj-color-sky-900)',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    wordBreak: 'break-word',
                  }}
                >
                  {selectedPreset === 'daylight' && '☀️ Daylight Aero Sky Color Tokens'}
                  {selectedPreset === 'gloss' && '✨ Frosted Specular Refractive Preset'}
                  {selectedPreset === 'emerald' && '🌿 Organic Biosphere Foliage Tokens'}
                  {selectedPreset === 'json' && '📦 Structured JSON Export Manifest'}
                  {selectedPreset === 'css' && '🎨 Pure CSS Root Variable Definitions'}
                  {selectedPreset === 'tsx' && '⚛️ React Component Implementation Code'}
                </div>
              </div>

              <pre
                style={{
                  margin: 0,
                  padding: '0.75rem 1rem',
                  background: 'rgba(15, 23, 42, 0.85)',
                  color: '#e0f2fe',
                  borderRadius: 'var(--fj-radius-md)',
                  fontSize: '0.825rem',
                  fontFamily: 'monospace',
                  overflowX: 'auto',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                }}
              >
                {selectedPreset === 'daylight' &&
                  `/* Daylight Sky Theme Variables */\n:root {\n  --fj-color-sky-400: #38bdf8;\n  --fj-color-sky-500: #0ea5e9;\n  --fj-color-sky-600: #0284c7;\n  --fj-gloss-sheen: rgba(255, 255, 255, 0.75);\n}`}
                {selectedPreset === 'gloss' &&
                  `/* Specular Crystal Preset */\n.fj-surface--specular {\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(16px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95);\n}`}
                {selectedPreset === 'emerald' &&
                  `/* Biosphere Nature Preset */\n:root {\n  --fj-color-nature-400: #4ade80;\n  --fj-color-nature-500: #22c55e;\n  --fj-color-nature-600: #16a34a;\n  --fj-glow-nature: 0 0 16px rgba(34, 197, 94, 0.5);\n}`}
                {selectedPreset === 'json' &&
                  `{\n  "name": "@frutiger.js/playground",\n  "version": "1.0.6",\n  "designSystem": "Frutiger Aero",\n  "activePreset": "${selectedPreset}"\n}`}
                {selectedPreset === 'css' &&
                  `:root {\n  --fj-radius-pill: 9999px;\n  --fj-radius-lg: 1rem;\n  --fj-shadow-aero: 0 4px 14px rgba(14, 165, 233, 0.45);\n}`}
                {selectedPreset === 'tsx' &&
                  `import { Button, Dropdown, DropdownSelect } from '@frutiger.js/react';\n\nexport const MyComponent = () => (\n  <Button variant="aero" size="md">Frutiger Aero Button</Button>\n);`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* AvatarGroup & Pagination Showcase */}
        <Card variant="glass">
          <CardHeader>
            <div>
              <CardTitle>Aero Avatar Groups & Pagination</CardTitle>
              <CardDescription>
                Tactile overlapping user bubbles and responsive glass page navigators.
              </CardDescription>
            </div>
            <Badge variant="primary">Data Navigation</Badge>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}
                >
                  Aero Core Contributors (AvatarGroup):
                </span>
                <AvatarGroup max={4} size="md">
                  <Avatar name="Biagio Scaglia" size="md" />
                  <Avatar name="Aero Aqua" size="md" />
                  <Avatar name="Biosphere Green" size="md" />
                  <Avatar name="Solar Flare" size="md" />
                  <Avatar name="Hydrosphere" size="md" />
                  <Avatar name="Crystal Dome" size="md" />
                </AvatarGroup>
              </div>

              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}
                >
                  Interactive Aero Pagination (Page {paginationPage} of 8):
                </span>
                <div
                  style={{
                    overflowX: 'auto',
                    paddingBottom: '0.25rem',
                    maxWidth: '100%',
                  }}
                >
                  <Pagination
                    currentPage={paginationPage}
                    totalPages={8}
                    onPageChange={setPaginationPage}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* EmptyState Showcase */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle>Tactile Empty State Container</CardTitle>
            <CardDescription>
              Aero empty data fallback with luminous halo and interactive calls-to-action.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={<IconWater size={36} color="var(--fj-color-sky-600)" />}
              title="No Hydrosphere Data Points Found"
              description="Your atmospheric water cache is currently clear. Sync your environmental sensors to populate data."
              actions={
                <>
                  <Button
                    variant="primary"
                    leftIcon={<IconSparkles size={16} />}
                    onClick={() =>
                      toast({
                        title: 'Sync Triggered',
                        description: 'Connecting to Aero weather telemetry network...',
                        variant: 'info',
                      })
                    }
                  >
                    Sync Weather Sensors
                  </Button>
                  <Button variant="glass">Configure Parameters</Button>
                </>
              }
            />
          </CardContent>
        </Card>

        {/* Accordions */}
        <Accordion>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Frutiger Aero?</AccordionTrigger>
            <AccordionContent>
              Frutiger Aero is an optimistic, nature-infused design movement prominent from 2004 to
              2013, characterized by glossy textures, clean typography, skeuomorphism, and daylight
              themes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Why choose Frutiger.js?</AccordionTrigger>
            <AccordionContent>
              Frutiger.js combines nostalgia with enterprise-grade React architecture, zero bloat,
              pure CSS tokens, and full responsive fluid layout scaling.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it fully accessible?</AccordionTrigger>
            <AccordionContent>
              Yes! Every component adheres to WCAG 2.2 AA standards with full keyboard interaction,
              ARIA attributes, focus states, and reduced-motion fallbacks.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Stack>
    );
  }
);
AeroNavigationTab.displayName = 'AeroNavigationTab';
