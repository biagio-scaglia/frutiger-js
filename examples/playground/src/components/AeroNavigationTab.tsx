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
                      title: `Preset: ${val.toUpperCase()} ✨`,
                      description: `Format preset switched to ${val}.`,
                      variant: val === 'emerald' ? 'success' : 'info',
                    });
                  }}
                  options={[
                    {
                      value: 'daylight',
                      label: 'Daylight Sky',
                      icon: <IconWater size={14} />,
                    },
                    {
                      value: 'gloss',
                      label: 'Specular Crystal',
                      icon: <IconSparkles size={14} />,
                    },
                    {
                      value: 'emerald',
                      label: 'Biosphere Green',
                      icon: <IconLeaf size={14} />,
                    },
                  ]}
                />
              </div>
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
