import { useState, lazy, Suspense } from 'react';
import {
  Container,
  Stack,
  Breadcrumb,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Modal,
  Drawer,
  Field,
  Label,
  Input,
  Select,
  HelperText,
  Button,
  IconSparkles,
  IconWater,
  IconLeaf,
  IconSun,
  IconMonitor,
  IconCloud,
  IconClose,
  AeroBackgroundFX,
  AeroBackgroundFXMode,
  AeroCursor,
  AeroCursorMode,
  useToast,
} from '@frutiger.js/react';

// Core layout sections
import { NavbarHeader } from './components/NavbarHeader';
import { HeroSection } from './components/HeroSection';
import { AeroWidgetsSection } from './components/AeroWidgetsSection';
import { AeroPrimitivesTab } from './components/AeroPrimitivesTab';
import { FooterSection } from './components/FooterSection';

// Lazy-loaded secondary tabs & modules for high-speed bundle splitting
const AeroButtonsTab = lazy(() =>
  import('./components/AeroButtonsTab').then(m => ({ default: m.AeroButtonsTab }))
);
const AeroCardsTab = lazy(() =>
  import('./components/AeroCardsTab').then(m => ({ default: m.AeroCardsTab }))
);
const AeroFormsTab = lazy(() =>
  import('./components/AeroFormsTab').then(m => ({ default: m.AeroFormsTab }))
);
const AeroFeedbackTab = lazy(() =>
  import('./components/AeroFeedbackTab').then(m => ({ default: m.AeroFeedbackTab }))
);
const AeroNavigationTab = lazy(() =>
  import('./components/AeroNavigationTab').then(m => ({ default: m.AeroNavigationTab }))
);
const AeroOverflowTab = lazy(() =>
  import('./components/AeroOverflowTab').then(m => ({ default: m.AeroOverflowTab }))
);
const AeroArchiveTab = lazy(() =>
  import('./components/AeroArchiveTab').then(m => ({ default: m.AeroArchiveTab }))
);
const AeroDesktopDemo = lazy(() =>
  import('./components/AeroDesktopDemo').then(m => ({ default: m.AeroDesktopDemo }))
);
const AeroIconExplorer = lazy(() =>
  import('./components/AeroIconExplorer').then(m => ({ default: m.AeroIconExplorer }))
);
const AeroFaqTab = lazy(() =>
  import('./components/AeroFaqTab').then(m => ({ default: m.AeroFaqTab }))
);
const AeroResponsiveTab = lazy(() =>
  import('./components/AeroResponsiveTab').then(m => ({ default: m.AeroResponsiveTab }))
);
const TokensPaletteSection = lazy(() =>
  import('./components/TokensPaletteSection').then(m => ({ default: m.TokensPaletteSection }))
);
const CreatorSection = lazy(() =>
  import('./components/CreatorSection').then(m => ({ default: m.CreatorSection }))
);

// Audio & utilities
import { playAeroChime, playAeroClick } from './utils/aeroAudio';

const TabLoadingFallback: React.FC = () => (
  <div
    className="fj-glass"
    style={{
      padding: '3rem 2rem',
      borderRadius: 'var(--fj-radius-xl)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      minHeight: '260px',
    }}
  >
    <div
      className="fj-animate-spin"
      style={{
        width: 38,
        height: 38,
        borderRadius: '50%',
        border: '3px solid rgba(186, 230, 253, 0.4)',
        borderTopColor: 'var(--fj-color-sky-500)',
      }}
    />
    <span style={{ fontSize: '0.9rem', color: 'var(--fj-color-text-muted)', fontWeight: 600 }}>
      Loading Aero Component Module...
    </span>
  </div>
);

export default function App() {
  const [activeNav, setActiveNav] = useState('overview');
  const [selectedExplorerTab, setSelectedExplorerTab] = useState('primitives');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sliderGainVal, setSliderGainVal] = useState(74);
  const [cursorMode, setCursorMode] = useState<AeroCursorMode>('droplet');
  const [ambientFXMode, setAmbientFXMode] = useState<AeroBackgroundFXMode>('bubbles');

  const { toast } = useToast();

  const handleSelectAmbientFXMode = (mode: AeroBackgroundFXMode) => {
    setAmbientFXMode(mode);
    playAeroClick(sliderGainVal);
    const fxNames: Record<AeroBackgroundFXMode, string> = {
      bubbles: 'Water Bubbles & Ripples',
      aurora: 'Aurora & Sunbeams',
      leaves: 'Floating Botanical Leaves',
      clouds: 'Drifting Aero Clouds',
      none: 'Ambient FX Disabled',
    };
    const fxIcons: Record<AeroBackgroundFXMode, React.ReactElement> = {
      bubbles: <IconWater size={18} />,
      aurora: <IconSparkles size={18} />,
      leaves: <IconLeaf size={18} />,
      clouds: <IconCloud size={18} />,
      none: <IconClose size={18} />,
    };
    toast({
      title: `Ambient FX: ${fxNames[mode]}`,
      description:
        mode === 'none'
          ? 'Background ambient particle shaders paused.'
          : `Activated ${fxNames[mode]} dynamic environment.`,
      variant: mode === 'none' ? 'warning' : 'info',
      icon: fxIcons[mode],
    });
  };

  const handleSelectCursorMode = (mode: AeroCursorMode) => {
    setCursorMode(mode);
    playAeroClick(sliderGainVal);
    const modeNames: Record<AeroCursorMode, string> = {
      droplet: 'Aero Water Droplet',
      crystal: 'Specular Crystal',
      nature: 'Biosphere Emerald',
      classic: 'Classic Web 2.0',
      default: 'System Native',
    };
    const modeIcons: Record<AeroCursorMode, React.ReactElement> = {
      droplet: <IconWater size={18} />,
      crystal: <IconSparkles size={18} />,
      nature: <IconLeaf size={18} />,
      classic: <IconSun size={18} />,
      default: <IconMonitor size={18} />,
    };
    toast({
      title: `Cursor: ${modeNames[mode]}`,
      description:
        mode === 'default'
          ? 'Reverted to native operating system cursor.'
          : `Activated ${modeNames[mode]} dynamic cursor preset.`,
      variant: 'info',
      icon: modeIcons[mode],
    });
  };

  const handleCopyInstall = () => {
    playAeroClick(sliderGainVal);
    navigator.clipboard.writeText('npm install @frutiger.js/core @frutiger.js/react');
    toast({
      title: 'Command Copied! 💧',
      description:
        'npm install @frutiger.js/core @frutiger.js/react has been copied to your clipboard.',
      variant: 'success',
      icon: <IconSparkles size={18} />,
    });
  };

  const handleExportTokens = () => {
    const cssContent = `/* 💧 Frutiger Aero CSS Design Tokens (Generated by Frutiger.js) */
@layer fj.tokens {
  :root {
    --fj-color-sky-50: #f0f9ff;
    --fj-color-sky-100: #e0f2fe;
    --fj-color-sky-200: #bae6fd;
    --fj-color-sky-300: #7dd3fc;
    --fj-color-sky-400: #38bdf8;
    --fj-color-sky-500: #0ea5e9;
    --fj-color-sky-600: #0284c7;
    --fj-color-sky-700: #0369a1;
    --fj-color-sky-800: #075985;
    --fj-color-sky-900: #0c4a6e;
    --fj-color-sky-950: #082f49;

    --fj-color-grass-500: #22c55e;
    --fj-color-water-400: #38bdf8;
  }
}`;
    const blob = new Blob([cssContent], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'frutiger-tokens.css';
    a.click();
    URL.revokeObjectURL(url);
    playAeroChime(sliderGainVal);
    toast({
      title: 'Tokens Exported! 💧',
      description: 'Downloaded frutiger-tokens.css design system tokens.',
      variant: 'success',
    });
  };

  const handleExportComponents = () => {
    const manifest = {
      name: '@frutiger.js',
      version: '1.11.0',
      author: 'Biagio Scaglia',
      repository: 'https://github.com/biagio-scaglia/frutiger-js',
      componentsCount: 45,
      tokensCategory: ['colors', 'radii', 'shadows', 'typography', 'glassmorphism'],
    };
    const blob = new Blob([JSON.stringify(manifest, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'frutiger-manifest.json';
    a.click();
    URL.revokeObjectURL(url);
    playAeroChime(sliderGainVal);
    toast({
      title: 'Package Manifest Exported! ✨',
      description: 'Downloaded frutiger-manifest.json successfully.',
      variant: 'success',
    });
  };

  return (
    <div className="fj-bg-aero" style={{ minHeight: '100vh' }}>
      {/* Interactive Aero Environmental Background FX (Bubbles, Aurora, Leaves, Clouds) */}
      <AeroBackgroundFX mode={ambientFXMode} colorScheme="sky" />

      {/* Custom Aero Cursor (Desktop Only) */}
      <AeroCursor mode={cursorMode} />

      {/* Top Aero Header */}
      <NavbarHeader
        activeNav={activeNav}
        onNavClick={setActiveNav}
        ambientFXMode={ambientFXMode}
        onSelectAmbientFXMode={handleSelectAmbientFXMode}
        cursorMode={cursorMode}
        onSelectCursorMode={handleSelectCursorMode}
        onExploreIcons={() => {
          setActiveNav('icons');
          setSelectedExplorerTab('icons');
        }}
        onExploreResponsive={() => {
          setActiveNav('responsive-lab');
          setSelectedExplorerTab('responsive');
        }}
      />

      {/* Main Content */}
      <main id="main-content" role="main">
        <Container size="xl" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
          <Stack spacing="xl">
            {/* Hero Banner */}
            <HeroSection
              onCopyInstall={handleCopyInstall}
              onExploreIcons={() => setSelectedExplorerTab('icons')}
            />

            {/* Breadcrumb Demo */}
            <div style={{ padding: '0 0.5rem' }}>
              <Breadcrumb
                items={[
                  { label: 'Home', href: '#' },
                  { label: 'Design System', href: '#components' },
                  { label: 'Frutiger Aero Playground', isActive: true },
                ]}
              />
            </div>

            {/* Memoized Aero Desktop Widgets Showcase */}
            <AeroWidgetsSection />

            {/* Interactive Component Explorer Tabs */}
            <section id="components" aria-labelledby="components-heading">
              <h2
                id="components-heading"
                style={{
                  fontSize: 'var(--fj-font-size-2xl)',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                  color: 'var(--fj-color-text)',
                }}
              >
                Interactive Component Explorer
              </h2>

              <Tabs value={selectedExplorerTab} onValueChange={setSelectedExplorerTab}>
                <TabList>
                  <Tab value="primitives">Aero Primitives</Tab>
                  <Tab value="buttons">Buttons</Tab>
                  <Tab value="cards">Cards & Surfaces</Tab>
                  <Tab value="forms">Form Controls</Tab>
                  <Tab value="feedback">Alerts & Badges</Tab>
                  <Tab value="navigation">Tabs & Accordion</Tab>
                  <Tab value="overflow">Custom Overflow</Tab>
                  <Tab value="archive">Aero Gallery & Archive</Tab>
                  <Tab value="window">Aero Desktop & Taskbar</Tab>
                  <Tab value="icons">Aero Custom Icons</Tab>
                  <Tab value="faq">FAQ Knowledgebase</Tab>
                  <Tab value="responsive">Responsive Lab</Tab>
                </TabList>

                {/* 1. PRIMITIVES */}
                <TabPanel value="primitives">
                  <AeroPrimitivesTab />
                </TabPanel>

                {/* 2. BUTTONS */}
                <TabPanel value="buttons">
                  <Suspense fallback={<TabLoadingFallback />}>
                    <AeroButtonsTab sliderGainVal={sliderGainVal} />
                  </Suspense>
                </TabPanel>

                {/* 3. CARDS */}
                <TabPanel value="cards">
                  <Suspense fallback={<TabLoadingFallback />}>
                    <AeroCardsTab />
                  </Suspense>
                </TabPanel>

                {/* 4. FORMS */}
                <TabPanel value="forms">
                  <Suspense fallback={<TabLoadingFallback />}>
                    <AeroFormsTab sliderGainVal={sliderGainVal} onGainChange={setSliderGainVal} />
                  </Suspense>
                </TabPanel>

                {/* 5. FEEDBACK */}
                <TabPanel value="feedback">
                  <Suspense fallback={<TabLoadingFallback />}>
                    <AeroFeedbackTab
                      onOpenDrawer={() => setIsDrawerOpen(true)}
                      sliderGainVal={sliderGainVal}
                    />
                  </Suspense>
                </TabPanel>

                {/* 6. NAVIGATION */}
                <TabPanel value="navigation">
                  <Suspense fallback={<TabLoadingFallback />}>
                    <AeroNavigationTab
                      onOpenDrawer={() => setIsDrawerOpen(true)}
                      sliderGainVal={sliderGainVal}
                      onExportTokens={handleExportTokens}
                      onExportComponents={handleExportComponents}
                    />
                  </Suspense>
                </TabPanel>

                {/* 7. OVERFLOW */}
                <TabPanel value="overflow">
                  <Suspense fallback={<TabLoadingFallback />}>
                    <AeroOverflowTab />
                  </Suspense>
                </TabPanel>

                {/* 8. ARCHIVE */}
                <TabPanel value="archive">
                  <Suspense fallback={<TabLoadingFallback />}>
                    <AeroArchiveTab />
                  </Suspense>
                </TabPanel>

                {/* 9. WINDOW & DESKTOP */}
                <TabPanel value="window">
                  <Suspense fallback={<TabLoadingFallback />}>
                    <AeroDesktopDemo />
                  </Suspense>
                </TabPanel>

                {/* 10. ICONS */}
                <TabPanel value="icons">
                  <Suspense fallback={<TabLoadingFallback />}>
                    <AeroIconExplorer />
                  </Suspense>
                </TabPanel>

                {/* 11. FAQ */}
                <TabPanel value="faq">
                  <Suspense fallback={<TabLoadingFallback />}>
                    <AeroFaqTab />
                  </Suspense>
                </TabPanel>

                {/* 12. RESPONSIVE */}
                <TabPanel value="responsive">
                  <Suspense fallback={<TabLoadingFallback />}>
                    <AeroResponsiveTab />
                  </Suspense>
                </TabPanel>
              </Tabs>
            </section>

            {/* Design Tokens Palette Section */}
            <Suspense fallback={<TabLoadingFallback />}>
              <TokensPaletteSection />
            </Suspense>

            {/* Biagio Scaglia - Creator & Architect Section */}
            <Suspense fallback={<TabLoadingFallback />}>
              <CreatorSection />
            </Suspense>
          </Stack>
        </Container>
      </main>

      {/* Interactive Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to Frutiger.js"
      >
        <p style={{ marginBottom: '1.25rem', lineHeight: 1.6 }}>
          Experience the authentic glassmorphic, glossy, skeuomorphic aesthetic of the Windows Vista
          and 7 era, re-engineered for modern React applications.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
            Dismiss
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Aero Onward
          </Button>
        </div>
      </Modal>

      {/* Interactive Aero Slide Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Aero Slide-Over Workspace"
        placement="right"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsDrawerOpen(false)}>
              Dismiss
            </Button>
            <Button variant="primary" onClick={() => setIsDrawerOpen(false)}>
              Apply Changes
            </Button>
          </>
        }
      >
        <Stack spacing="md">
          <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.5 }}>
            This slide-over drawer is rendered with acrylic hardware-accelerated glass backdrop
            filters, specular rim highlights, and complete WCAG 2.2 keyboard navigation (ESC key
            dismiss).
          </p>

          <Field>
            <Label isRequired htmlFor="drawer-preset">
              Workspace Name
            </Label>
            <Input id="drawer-preset" defaultValue="Aero Biosphere Lab" />
            <HelperText>Visible to all synchronized network nodes.</HelperText>
          </Field>

          <Field>
            <Label htmlFor="drawer-mode">Rendering Pipeline</Label>
            <Select
              id="drawer-mode"
              options={[
                { value: 'vulkan', label: 'Hardware Accelerated Glass' },
                { value: 'directx', label: 'DirectX Acrylic Shaders' },
                { value: 'webgl', label: 'WebGL Water Caustics' },
              ]}
            />
          </Field>
        </Stack>
      </Drawer>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
