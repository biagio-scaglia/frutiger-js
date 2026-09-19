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
  BadgeVariant,
  Alert,
  AlertVariant,
  Tooltip,
  Modal,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Progress,
  Spinner,
  Avatar,
  Breadcrumb,
  Navbar,
  NavLink,
  Container,
  Stack,
  Grid,
  IconSun,
  IconWater,
  IconLeaf,
  IconCloud,
  IconMusic,
  IconPlay,
  IconPause,
  IconSparkles,
  IconCheck,
} from '@frutiger-js/react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBtnSize, setSelectedBtnSize] = useState<ButtonSize>('md');
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  // Form states
  const [inputVal, setInputVal] = useState('frutiger.aero@web2007.net');
  const [radioVal, setRadioVal] = useState('sky');
  const [switchChecked, setSwitchChecked] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  // Media Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [songProgress, setSongProgress] = useState(38);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install @frutiger-js/core @frutiger-js/react');
    alert('Copied to clipboard: npm install @frutiger-js/core @frutiger-js/react');
  };

  return (
    <div className="fj-bg-aero" style={{ minHeight: '100vh' }}>
      {/* Top Aero Navigation */}
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
              Frutiger<span style={{ color: 'var(--fj-color-sky-500)' }}>.js</span>
            </span>
          </div>
        }
        actions={
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Avatar name="Aero User" size="sm" />
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
        <NavLink href="#overview" isActive>
          Overview
        </NavLink>
        <NavLink href="#widgets">Dashboard</NavLink>
        <NavLink href="#components">Components</NavLink>
        <NavLink href="#tokens">Tokens</NavLink>
      </Navbar>

      <Container size="xl" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
        <Stack spacing="xl">
          {/* Hero Section */}
          <div
            id="overview"
            className="fj-glass"
            style={{
              padding: '3.5rem 2.5rem',
              borderRadius: 'var(--fj-radius-2xl)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient specular highlight */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '15%',
                right: '15%',
                height: '50%',
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '0 0 100% 100%',
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
              style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Button variant="aero" size="lg" onClick={() => setIsModalOpen(true)}>
                Explore Live Modal
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={handleCopyInstall}
                leftIcon={<IconSparkles size={16} />}
              >
                npm install @frutiger-js/react
              </Button>
            </div>
          </div>

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

          {/* Aero Desktop Widgets Showcase */}
          <div id="widgets">
            <h2
              style={{
                fontSize: 'var(--fj-font-size-2xl)',
                fontWeight: 700,
                marginBottom: '1.25rem',
                color: 'var(--fj-color-text)',
              }}
            >
              Interactive Aero Dashboard Widgets
            </h2>

            <Grid columns="repeat(auto-fit, minmax(320px, 1fr))" gap="1.5rem">
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
                        color: 'var(--fj-color-sky-600)',
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

                  <Progress value={songProgress} style={{ marginBottom: '0.75rem' }} />

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
                    <Progress variant="circular" value={28} size={70} strokeWidth={7} showLabel />
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
                      <span>Memory (DDR4)</span>
                      <span>6.8 / 16 GB (42%)</span>
                    </div>
                    <Progress value={42} status="success" />
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
                      <span>Bandwidth</span>
                      <span>1 Gbps Optical</span>
                    </div>
                    <Progress value={85} />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </div>

          {/* Interactive Component Lab */}
          <div id="components">
            <h2
              style={{
                fontSize: 'var(--fj-font-size-2xl)',
                fontWeight: 700,
                marginBottom: '1.25rem',
                color: 'var(--fj-color-text)',
              }}
            >
              Interactive Component Explorer
            </h2>

            <Tabs defaultValue="buttons">
              <TabList>
                <Tab value="buttons">Buttons</Tab>
                <Tab value="cards">Cards & Surfaces</Tab>
                <Tab value="forms">Form Controls</Tab>
                <Tab value="feedback">Alerts & Badges</Tab>
                <Tab value="navigation">Tabs & Accordion</Tab>
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
                  {(['default', 'glass', 'gloss', 'floating', 'nature'] as CardVariant[]).map(v => (
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
                  ))}
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
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value)}
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

                  <div
                    style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
                  >
                    {(
                      [
                        'primary',
                        'success',
                        'warning',
                        'danger',
                        'info',
                        'nature',
                      ] as BadgeVariant[]
                    ).map(bv => (
                      <Tooltip key={bv} content={`Badge variant: ${bv}`}>
                        <Badge variant={bv}>{bv.toUpperCase()}</Badge>
                      </Tooltip>
                    ))}
                  </div>
                </Stack>
              </TabPanel>

              {/* NAVIGATION TAB */}
              <TabPanel value="navigation">
                <Accordion type="single" defaultValue="faq1">
                  <AccordionItem value="faq1">
                    <AccordionTrigger>What makes Frutiger Aero unique?</AccordionTrigger>
                    <AccordionContent>
                      Frutiger Aero (popularized between 2004–2013) is characterized by skeuomorphic
                      tactility, clear skies, lush grass, water droplets, glass reflections, and
                      bright optimistic colors.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq2">
                    <AccordionTrigger>How is the CSS architecture built?</AccordionTrigger>
                    <AccordionContent>
                      It relies on pure CSS Cascade Layers (@layer fj.*) and native CSS Custom
                      Properties, making it compatible with any stack without Tailwind or CSS-in-JS
                      dependencies.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq3">
                    <AccordionTrigger>Is it fully accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes! Every component adheres to WCAG 2.2 AA standards with full keyboard
                      interaction, ARIA attributes, focus states, and reduced-motion fallbacks.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
            </Tabs>
          </div>

          {/* Tokens Visual Swatches */}
          <div id="tokens">
            <h2
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
                    { name: 'Neutral 200', color: 'var(--fj-color-neutral-200)', text: '#0f2d4a' },
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
          </div>
        </Stack>
      </Container>

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
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          padding: '2rem 1rem',
          textAlign: 'center',
          fontSize: 'var(--fj-font-size-sm)',
          color: 'var(--fj-color-text-muted)',
        }}
      >
        <Container size="lg">
          <p>
            Frutiger.js • Open Source Frutiger Aero Design System • Released under MIT License ©{' '}
            {new Date().getFullYear()} Biagio Scaglia
          </p>
        </Container>
      </footer>
    </div>
  );
}
