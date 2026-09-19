import { useState, ChangeEvent } from 'react';
import {
  Button,
  ButtonVariant,
  ButtonSize,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardVariant,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Badge,
  Alert,
  AlertVariant,
  Modal,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Avatar,
  Breadcrumb,
  Navbar,
  NavLink,
  Container,
  Stack,
  Grid,
  Slider,
  Divider,
  ScrollArea,
  Dropzone,
  IconWater,
  IconLeaf,
  IconSparkles,
  IconCheck,
} from '@frutiger-js/react';
import { AeroWidgetsSection } from './components/AeroWidgetsSection';
import { AeroArchiveTab } from './components/AeroArchiveTab';
import { AeroFaqTab } from './components/AeroFaqTab';
import { AeroIconExplorer } from './components/AeroIconExplorer';
import { AeroDesktopDemo } from './components/AeroDesktopDemo';

export default function App() {
  const [activeNav, setActiveNav] = useState('overview');
  const [selectedExplorerTab, setSelectedExplorerTab] = useState('buttons');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBtnSize, setSelectedBtnSize] = useState<ButtonSize>('md');
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [simulatedWidth, setSimulatedWidth] = useState<string>('100%');

  // Form states
  const [inputVal, setInputVal] = useState('frutiger.aero@web2007.net');
  const [radioVal, setRadioVal] = useState('sky');
  const [switchChecked, setSwitchChecked] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [sliderAquaVal, setSliderAquaVal] = useState(68);
  const [sliderGainVal, setSliderGainVal] = useState(74);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install @frutiger-js/core @frutiger-js/react');
    alert('Copied to clipboard: npm install @frutiger-js/core @frutiger-js/react');
  };

  return (
    <div className="fj-bg-aero" style={{ minHeight: '100vh' }}>
      {/* Top Aero Header Landmark */}
      <header role="banner">
        <Navbar
          brand={
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div
                className="fj-animate-bubble"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle at 35% 30%, #ffffff 0%, #38bdf8 50%, #0284c7 100%)',
                  boxShadow: 'inset 0 1px 1px #fff, 0 4px 10px rgba(2, 132, 199, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <IconWater size={18} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                Frutiger<span style={{ color: 'var(--fj-color-sky-700)' }}>.js</span>
              </span>
            </div>
          }
          actions={
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Avatar name="Biagio Scaglia" size="sm" />
              <a
                href="https://github.com/biagio-scaglia/frutiger-js"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="primary" size="sm">
                  GitHub
                </Button>
              </a>
            </div>
          }
        >
          <NavLink
            href="#overview"
            isActive={activeNav === 'overview'}
            onClick={() => setActiveNav('overview')}
          >
            Overview
          </NavLink>
          <NavLink
            href="#widgets"
            isActive={activeNav === 'widgets'}
            onClick={() => setActiveNav('widgets')}
          >
            Dashboard
          </NavLink>
          <NavLink
            href="#components"
            isActive={activeNav === 'components'}
            onClick={() => setActiveNav('components')}
          >
            Components
          </NavLink>
          <NavLink
            href="#components"
            isActive={activeNav === 'icons'}
            onClick={() => {
              setActiveNav('icons');
              setSelectedExplorerTab('icons');
            }}
          >
            Aero Icons
          </NavLink>
          <NavLink
            href="#responsive-lab"
            isActive={activeNav === 'responsive-lab'}
            onClick={() => {
              setActiveNav('responsive-lab');
              setSelectedExplorerTab('responsive');
            }}
          >
            Responsive Lab
          </NavLink>
          <NavLink
            href="#tokens"
            isActive={activeNav === 'tokens'}
            onClick={() => setActiveNav('tokens')}
          >
            Tokens
          </NavLink>
          <NavLink
            href="#creator"
            isActive={activeNav === 'creator'}
            onClick={() => setActiveNav('creator')}
          >
            Biagio Scaglia
          </NavLink>
        </Navbar>
      </header>

      {/* Main Content Landmark */}
      <main id="main-content" role="main">
        <Container size="xl" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
          <Stack spacing="xl">
            {/* Hero Section */}
            <section
              id="overview"
              aria-labelledby="hero-heading"
              className="fj-glass"
              style={{
                padding: '3.5rem 2.5rem',
                borderRadius: 'var(--fj-radius-2xl)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
                  pointerEvents: 'none',
                }}
              />

              <Badge
                variant="nature"
                icon={<IconLeaf size={14} />}
                style={{ marginBottom: '1.25rem' }}
              >
                v0.1.0 • Web 2.0 Aesthetic Reborn
              </Badge>

              <h1
                id="hero-heading"
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: '1rem',
                  letterSpacing: '-0.03em',
                  color: 'var(--fj-color-text)',
                }}
              >
                Bring the blue sky back to the web.
              </h1>

              <p
                style={{
                  maxWidth: '680px',
                  margin: '0 auto 2rem auto',
                  fontSize: 'var(--fj-font-size-lg)',
                  color: 'var(--fj-color-text-muted)',
                  lineHeight: 1.6,
                }}
              >
                Frutiger.js is a modern React UI library and pure CSS design system inspired by
                Frutiger Aero, glossy surfaces, organic curves, nature imagery, and early Web 2.0
                optimism.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}
              >
                <a href="#components" style={{ textDecoration: 'none' }}>
                  <Button variant="aero" size="lg">
                    Explore Components →
                  </Button>
                </a>
                <a
                  href="#components"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setSelectedExplorerTab('icons')}
                >
                  <Button variant="glass" size="lg" leftIcon={<IconSparkles size={18} />}>
                    Aero Icons (45+) ✨
                  </Button>
                </a>
                <Button
                  variant="glass"
                  size="lg"
                  onClick={handleCopyInstall}
                  leftIcon={<IconSparkles size={16} />}
                >
                  npm install @frutiger-js/react
                </Button>
                <a
                  href="https://github.com/biagio-scaglia/frutiger-js"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="secondary" size="lg">
                    GitHub ★
                  </Button>
                </a>
              </div>
            </section>

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

            {/* Interactive Component Lab */}
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

                {/* BUTTONS TAB */}
                <TabPanel value="buttons">
                  <Card variant="glass">
                    <CardHeader>
                      <CardTitle>Button Matrix & Live Playground</CardTitle>
                      <CardDescription>Explore all 7 glossy variants and sizes.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Controls */}
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '1rem',
                          marginBottom: '1.5rem',
                          padding: '1rem',
                          background: 'rgba(255, 255, 255, 0.4)',
                          borderRadius: 'var(--fj-radius-lg)',
                          alignItems: 'center',
                        }}
                      >
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <span style={{ fontSize: 'var(--fj-font-size-sm)', fontWeight: 600 }}>
                            Size:
                          </span>
                          {(['sm', 'md', 'lg'] as ButtonSize[]).map(s => (
                            <Button
                              key={s}
                              size="sm"
                              variant={selectedBtnSize === s ? 'aero' : 'glass'}
                              onClick={() => setSelectedBtnSize(s)}
                            >
                              {s}
                            </Button>
                          ))}
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                          <Checkbox
                            label="Loading"
                            checked={isBtnLoading}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              setIsBtnLoading(e.target.checked)
                            }
                          />
                          <Checkbox
                            label="Disabled"
                            checked={isBtnDisabled}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              setIsBtnDisabled(e.target.checked)
                            }
                          />
                        </div>
                      </div>

                      {/* All Variant Showcase */}
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '1rem',
                          alignItems: 'center',
                        }}
                      >
                        {(
                          [
                            'aero',
                            'primary',
                            'secondary',
                            'success',
                            'danger',
                            'glass',
                            'ghost',
                          ] as ButtonVariant[]
                        ).map(variant => (
                          <Button
                            key={variant}
                            variant={variant}
                            size={selectedBtnSize}
                            isLoading={isBtnLoading}
                            disabled={isBtnDisabled}
                          >
                            {variant.charAt(0).toUpperCase() + variant.slice(1)}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabPanel>

                {/* CARDS TAB */}
                <TabPanel value="cards">
                  <Grid columns="repeat(auto-fit, minmax(240px, 1fr))" gap="1rem">
                    {(['default', 'glass', 'gloss', 'floating', 'nature'] as CardVariant[]).map(
                      v => (
                        <Card key={v} variant={v}>
                          <CardHeader>
                            <CardTitle>{v.charAt(0).toUpperCase() + v.slice(1)} Card</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p style={{ fontSize: 'var(--fj-font-size-sm)' }}>
                              Surface rendered with {v} preset and tactile highlights.
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Badge variant="primary">Active</Badge>
                          </CardFooter>
                        </Card>
                      )
                    )}
                  </Grid>
                </TabPanel>

                {/* FORMS TAB */}
                <TabPanel value="forms">
                  <Card variant="glass">
                    <CardHeader>
                      <CardTitle>Aero Form Controls</CardTitle>
                      <CardDescription>
                        Accessible inputs with focus rings, validation, and custom skins.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Grid columns="repeat(auto-fit, minmax(280px, 1fr))" gap="1.5rem">
                        <Input
                          label="User Email"
                          value={inputVal}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setInputVal(e.target.value)
                          }
                          helperText="We will never share your email."
                        />
                        <Input
                          label="Validated Field"
                          defaultValue="Clean Input"
                          success="Username available."
                        />
                        <Input
                          label="Error State"
                          defaultValue="invalid-syntax"
                          error="Please enter a valid format."
                        />
                        <Select
                          label="Select Environment"
                          options={[
                            { value: 'sky', label: 'Sky & Atmosphere' },
                            { value: 'ocean', label: 'Deep Ocean' },
                            { value: 'meadow', label: 'Nature Meadow' },
                          ]}
                        />
                      </Grid>

                      <div style={{ marginTop: '1.5rem' }}>
                        <Textarea
                          label="User Feedback"
                          placeholder="Write your impressions of the Frutiger Aero design system..."
                          rows={3}
                        />
                      </div>

                      <div
                        style={{
                          marginTop: '1.5rem',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '2rem',
                          alignItems: 'center',
                        }}
                      >
                        <Checkbox
                          label="Enable Specular Glow"
                          checked={checkboxChecked}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setCheckboxChecked(e.target.checked)
                          }
                        />
                        <Switch
                          label="Atmospheric Ambient Audio"
                          checked={switchChecked}
                          onChange={(checked: boolean) => setSwitchChecked(checked)}
                        />
                        <div style={{ display: 'flex', gap: '1rem' }}>
                          <Radio
                            name="env"
                            label="Sky"
                            checked={radioVal === 'sky'}
                            onChange={() => setRadioVal('sky')}
                          />
                          <Radio
                            name="env"
                            label="Ocean"
                            checked={radioVal === 'ocean'}
                            onChange={() => setRadioVal('ocean')}
                          />
                        </div>
                      </div>

                      <Divider
                        label="Aero Range Sliders & Tactile Controls"
                        style={{ margin: '2rem 0 1.5rem 0' }}
                      />

                      <Grid columns="repeat(auto-fit, minmax(280px, 1fr))" gap="1.5rem">
                        <Slider
                          label="Aqua Ambient Luminescence"
                          value={sliderAquaVal}
                          onChange={e => setSliderAquaVal(Number(e.target.value))}
                          valueFormat={v => `${v}% Lumens`}
                        />
                        <Slider
                          label="Audio Synthesis Gain"
                          value={sliderGainVal}
                          onChange={e => setSliderGainVal(Number(e.target.value))}
                          valueFormat={v => `${v} dB`}
                        />
                      </Grid>

                      <Divider
                        label="Skeuomorphic File Upload & Dropzone"
                        style={{ margin: '2rem 0 1.5rem 0' }}
                      />

                      <Dropzone
                        title="Drag & drop Frutiger Aero assets or click to browse"
                        subtitle="Supports wallpapers, 3D icons, audio stems, and vector packages up to 50MB"
                        onFilesSelected={files =>
                          alert(`Uploaded ${files.length} asset(s): ${files[0].name}`)
                        }
                      />
                    </CardContent>
                  </Card>
                </TabPanel>

                {/* FEEDBACK TAB */}
                <TabPanel value="feedback">
                  <Stack spacing="md">
                    {(['info', 'success', 'warning', 'danger'] as AlertVariant[]).map(av => (
                      <Alert
                        key={av}
                        variant={av}
                        title={`${av.charAt(0).toUpperCase() + av.slice(1)} Notification`}
                        onClose={() => alert(`Dismissed ${av} alert`)}
                      >
                        This is an authentic Frutiger Aero alert with translucent frosted backing.
                      </Alert>
                    ))}
                  </Stack>
                </TabPanel>

                {/* NAVIGATION TAB */}
                <TabPanel value="navigation">
                  <Accordion>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is Frutiger Aero?</AccordionTrigger>
                      <AccordionContent>
                        Frutiger Aero is an optimistic, nature-infused design movement prominent
                        from 2004 to 2013, characterized by glossy textures, clean typography,
                        skeuomorphism, and daylight themes.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Why choose Frutiger.js?</AccordionTrigger>
                      <AccordionContent>
                        Frutiger.js combines nostalgia with enterprise-grade React architecture,
                        zero bloat, pure CSS tokens, and full responsive fluid layout scaling.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is it fully accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes! Every component adheres to WCAG 2.2 AA standards with full keyboard
                        interaction, ARIA attributes, focus states, and reduced-motion fallbacks.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabPanel>

                {/* OVERFLOW & SCROLLAREA TAB */}
                <TabPanel value="overflow">
                  <Stack spacing="lg">
                    <Card variant="glass">
                      <CardHeader>
                        <div>
                          <CardTitle>Custom Aero Scrollbars & Dynamic Overflow Regions</CardTitle>
                          <CardDescription>
                            Tactile skeuomorphic scrollbars with aqua gradient thumbs, subtle
                            tracks, and dynamic top/bottom shadow masks.
                          </CardDescription>
                        </div>
                        <Badge variant="nature">Touch & A11y Region</Badge>
                      </CardHeader>
                      <CardContent>
                        <Grid
                          columns="repeat(auto-fit, minmax(min(100%, 300px), 1fr))"
                          gap="1.5rem"
                        >
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
                              <div
                                style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                              >
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
                                      boxShadow:
                                        'inset 0 1px 1px #fff, 0 4px 12px rgba(2, 132, 199, 0.15)',
                                      textAlign: 'center',
                                      fontWeight: 700,
                                      fontSize: 'var(--fj-font-size-xs)',
                                      color: '#0f2d4a',
                                    }}
                                  >
                                    <div style={{ marginBottom: '0.4rem', fontSize: '1.25rem' }}>
                                      💧
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
                </TabPanel>

                {/* RESPONSIVE LAB TAB */}
                <TabPanel value="responsive">
                  <Stack spacing="lg">
                    <Card variant="glass">
                      <CardHeader>
                        <div>
                          <CardTitle>Viewport Simulator & Container Query Tester</CardTitle>
                          <CardDescription>
                            Test how Frutiger.js components fluidly adapt to constrained widths and
                            mobile devices.
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
                                  This card automatically reorganizes its header and actions when
                                  its container is below 360px.
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
                                gridTemplateColumns:
                                  'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
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
                        <CardDescription>
                          Verified target screen resolutions and behavior
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div style={{ overflowX: 'auto' }}>
                          <table
                            style={{
                              width: '100%',
                              borderCollapse: 'collapse',
                              textAlign: 'left',
                              fontSize: 'var(--fj-font-size-sm)',
                            }}
                          >
                            <thead>
                              <tr
                                style={{
                                  borderBottom: '2px solid rgba(186, 230, 253, 0.8)',
                                  background: 'rgba(224, 242, 254, 0.3)',
                                }}
                              >
                                <th style={{ padding: '0.75rem' }}>Target Viewport</th>
                                <th style={{ padding: '0.75rem' }}>Device Category</th>
                                <th style={{ padding: '0.75rem' }}>Navbar Mode</th>
                                <th style={{ padding: '0.75rem' }}>Grid Columns</th>
                                <th style={{ padding: '0.75rem' }}>Touch Hit Target</th>
                                <th style={{ padding: '0.75rem' }}>Status</th>
                              </tr>
                            </thead>
                            <tbody>
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
                                <tr
                                  key={i}
                                  style={{ borderBottom: '1px solid rgba(186, 230, 253, 0.4)' }}
                                >
                                  <td style={{ padding: '0.75rem', fontWeight: 600 }}>{row.vp}</td>
                                  <td style={{ padding: '0.75rem' }}>{row.cat}</td>
                                  <td style={{ padding: '0.75rem' }}>{row.nav}</td>
                                  <td style={{ padding: '0.75rem' }}>{row.grid}</td>
                                  <td style={{ padding: '0.75rem' }}>{row.hit}</td>
                                  <td style={{ padding: '0.75rem' }}>
                                    <Badge variant="success">{row.status}</Badge>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </Stack>
                </TabPanel>

                {/* MEMOIZED AERO ARCHIVE & GALLERY TAB */}
                <TabPanel value="archive">
                  <AeroArchiveTab />
                </TabPanel>

                {/* AERO DESKTOP & TASKBAR TAB */}
                <TabPanel value="window">
                  <AeroDesktopDemo />
                </TabPanel>

                {/* MEMOIZED FAQ KNOWLEDGEBASE TAB */}
                <TabPanel value="faq">
                  <AeroFaqTab />
                </TabPanel>

                {/* MEMOIZED AERO ICONS TAB */}
                <TabPanel value="icons">
                  <AeroIconExplorer />
                </TabPanel>
              </Tabs>
            </section>

            {/* Tokens Visual Swatches */}
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
                          boxShadow:
                            'inset 0 1px 0 rgba(255,255,255,0.6), 0 2px 6px rgba(0,0,0,0.1)',
                        }}
                      >
                        {swatch.name}
                      </div>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </section>

            {/* Biagio Scaglia - Creator & Lead Architect Section */}
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
                        Creator and architect of <strong>Frutiger.js</strong>. Built with a passion
                        for tactile skeuomorphism, digital optimism, and modern UI engineering.
                        Frutiger.js delivers a responsive design system spanning 320px mobile to 4K
                        ultrawide displays, paired with strict accessibility and zero runtime
                        dependencies for core CSS.
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
                          <Button variant="glass" size="md">
                            Star Repository ★
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
                        <IconLeaf size={18} color="var(--fj-color-grass-600)" /> Engineering
                        Standards
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
                          <strong>Fluid-First Scaling:</strong> Continuous fluid interpolation via
                          CSS clamp and container queries from 320px to 3840px.
                        </li>
                        <li>
                          <strong>Pure Daylight Atmosphere:</strong> Authentic 2000s Web 2.0 glass
                          gradients, organic curves, and specular reflections.
                        </li>
                        <li>
                          <strong>WCAG 2.1 AA Accessibility:</strong> High-contrast tokens, tactile
                          focus rings, and full ARIA keyboard navigation.
                        </li>
                        <li>
                          <strong>Modern Developer Experience:</strong> Strict TypeScript
                          definitions, composable React APIs, and zero CSS dependencies.
                        </li>
                      </ul>
                    </div>
                  </Grid>
                </CardContent>
              </Card>
            </section>
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
          You have successfully initialized <strong>Frutiger.js</strong>. Enjoy the crisp glossy
          surfaces, specular dome highlights, and natural digital textures!
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="aero" onClick={() => setIsModalOpen(false)}>
            Confirm Experience
          </Button>
        </div>
      </Modal>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(186, 230, 253, 0.6)',
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(12px)',
          padding: '2.5rem 1rem',
          textAlign: 'center',
          fontSize: 'var(--fj-font-size-sm)',
          color: 'var(--fj-color-text-muted)',
        }}
      >
        <Container size="lg">
          <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600, color: 'var(--fj-color-sky-900)' }}>
            Frutiger.js • Open Source Frutiger Aero Design System
          </p>
          <p style={{ margin: 0 }}>
            Conceived and architected with passion by{' '}
            <a
              href="https://github.com/biagio-scaglia"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--fj-color-sky-800)', fontWeight: 700, textDecoration: 'none' }}
            >
              Biagio Scaglia
            </a>{' '}
            • Released under MIT License © {new Date().getFullYear()}
          </p>
        </Container>
      </footer>
    </div>
  );
}
