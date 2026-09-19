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
  Slider,
  Divider,
  ScrollArea,
  Dropzone,
  Skeleton,
  WindowFrame,
  WindowFrameVariant,
  GalleryGrid,
  GalleryItem,
  StatCard,
  FaqList,
  FaqItem,
  IconSun,
  IconWater,
  IconLeaf,
  IconSprout,
  IconCloud,
  IconGlobe,
  IconRainbow,
  IconFlame,
  IconFish,
  IconBubble,
  IconAeroOrb,
  IconDisc,
  IconMonitor,
  IconCamera,
  IconSpeaker,
  IconBattery,
  IconWifi,
  IconShield,
  IconLock,
  IconUnlock,
  IconCompass,
  IconSettings,
  IconFolder,
  IconTrash,
  IconMusic,
  IconPlay,
  IconPause,
  IconUser,
  IconUsers,
  IconMail,
  IconHeart,
  IconStar,
  IconSparkles,
  IconSearch,
  IconCheck,
  IconClose,
  IconMenu,
  IconInfo,
  IconAlertTriangle,
  IconChevronDown,
  IconChevronUp,
  IconChevronLeft,
  IconChevronRight,
  IconDownload,
  IconUpload,
  IconRefresh,
  IconEye,
  IconClock,
  IconCalendar,
  IconLayers,
  IconZap,
  AeroIconBadge,
} from '@frutiger-js/react';

interface ArchiveMediaItem {
  id: string;
  title: string;
  category: 'wallpapers' | 'gadgets' | 'themes' | 'concept';
  badge: string;
  year: string;
  author: string;
  description: string;
  gradient: string;
  tags: string[];
}

const ARCHIVE_ITEMS: ArchiveMediaItem[] = [
  {
    id: 'vista-aurora',
    title: 'Windows Vista Aurora Bliss',
    category: 'wallpapers',
    badge: '3840 × 2160',
    year: '2006',
    author: 'Microsoft Design Team',
    description:
      'The iconic high-resolution organic glass ribbons, fluid aurora bokeh, and brilliant daylight blue gradients that defined the Aero glass era.',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 35%, #22c55e 70%, #eab308 100%)',
    tags: ['Vista', 'Aurora', 'Desktop'],
  },
  {
    id: 'aqua-orb-raytrace',
    title: 'Aqua Orb Sphere 3D Raytrace',
    category: 'concept',
    badge: 'Ultra HD 4K',
    year: '2007',
    author: 'Skeuomorphic Archive',
    description:
      '3D raytraced liquid sphere suspended in mid-air with caustic internal refractions, specular Fresnel highlights, and subsurface light scattering.',
    gradient:
      'radial-gradient(circle at 35% 30%, #ffffff 0%, #38bdf8 40%, #0369a1 80%, #082f49 100%)',
    tags: ['Raytrace', 'Liquid', 'Sphere'],
  },
  {
    id: 'sony-w995-glass',
    title: 'Sony Ericsson Walkman UI Theme',
    category: 'themes',
    badge: 'Mobile Theme',
    year: '2008',
    author: 'Sony Ericsson Creative',
    description:
      'Embedded flash UI theme with tactile glossy navigation discs, floating bubble equalizers, and vibrant citrus-emerald accent rings.',
    gradient: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #f59e0b 100%)',
    tags: ['Symbian', 'Walkman', 'Mobile'],
  },
  {
    id: 'eco-biosphere-2007',
    title: 'Frutiger Eco Biosphere Concept',
    category: 'concept',
    badge: 'Concept Render',
    year: '2007',
    author: 'Future Forward Lab',
    description:
      'Utopian eco-technological habitat encased in a crystal glass biodome, showcasing symbiotic green technology, clear turquoise water, and solar daylight.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
    tags: ['Eco', 'Solar', 'Biodome'],
  },
  {
    id: 'wmp11-aurora-viz',
    title: 'Windows Media Player 11 Visualizer',
    category: 'themes',
    badge: 'WMP Skin',
    year: '2006',
    author: 'Digital Media Studio',
    description:
      'Translucent onyx and aqua glass playback deck featuring harmonic frequency spectrums, glossy transport dials, and real-time audio wave reflections.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #0369a1 60%, #38bdf8 100%)',
    tags: ['Media Player', 'Onyx', 'Audio'],
  },
  {
    id: 'wii-forecast-globe',
    title: 'Nintendo Wii Forecast Glass Globe',
    category: 'gadgets',
    badge: 'Wii Channel',
    year: '2006',
    author: 'Nintendo R&D',
    description:
      'Interactive rotating 3D terrestrial globe with glass cloud layers, sunny weather icons, and soothing ambient synthesis audio cues.',
    gradient: 'linear-gradient(135deg, #60a5fa 0%, #93c5fd 45%, #a7f3d0 100%)',
    tags: ['Wii', 'Weather', 'Interactive'],
  },
  {
    id: 'zune-hd-fluid-glass',
    title: 'Zune HD Fluid Glass Touch UI',
    category: 'themes',
    badge: 'OLED UI',
    year: '2009',
    author: 'Zune Team',
    description:
      'Silky smooth fluid gesture UI with parallax album art floating behind frosted glass overlays, typography masks, and glowing phosphor accents.',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f43f5e 100%)',
    tags: ['Zune', 'OLED', 'Typography'],
  },
  {
    id: 'clear-skies-horizon',
    title: 'Clear Skies & Daylight Vector Horizon',
    category: 'wallpapers',
    badge: 'Vector 4K',
    year: '2007',
    author: 'Frutiger Aesthetic Vault',
    description:
      'Vibrant azure sky with photorealistic cumulus clouds, lens flare sunlight bursts, and lush green rolling hill horizons.',
    gradient: 'linear-gradient(180deg, #0284c7 0%, #7dd3fc 60%, #4ade80 85%, #16a34a 100%)',
    tags: ['Sky', 'Clouds', 'Nature'],
  },
];

const FAQ_ITEMS = [
  {
    id: 'faq-1',
    category: 'Design & Philosophy',
    question: 'What is Frutiger Aero and why is it experiencing a massive renaissance?',
    answer:
      'Frutiger Aero is a broad design aesthetic that dominated consumer technology, operating systems, advertising, and architecture from roughly 2004 to 2013 (named after the Adrian Frutiger typeface and Windows Aero). Characterized by glossy textures, water droplets, clear blue skies, lush greenery, glassmorphism, lens flares, and digital optimism, it represented a bright, tactile future before the flat design homogenization of the 2010s. Frutiger.js modernizes this spirit for contemporary high-performance web applications.',
  },
  {
    id: 'faq-2',
    category: 'Design & Philosophy',
    question: 'How does Frutiger Aero differ from Skeuomorphism, Y2K, and Frutiger Eco?',
    answer:
      'While Y2K (1997-2003) favored cyberpunk metallics, chrome, and blobitecture, and classic Skeuomorphism directly mimicked leather/wood/paper textures, Frutiger Aero focuses specifically on nature-technology harmony: translucent aero glass, sunlight refractions, aquatic themes, vibrant greens and sky blues, glossy bubbles, and crisp humanist typography. Frutiger Eco is a nature-heavy sub-genre focusing on green architecture, renewable solar/wind, and living biospheres.',
  },
  {
    id: 'faq-3',
    category: 'Engineering & Performance',
    question:
      'How does Frutiger.js deliver authentic glass and gloss without dragging down performance?',
    answer:
      'Frutiger.js achieves rich tactile aesthetics using pure hardware-accelerated CSS properties: linear and radial CSS gradients, backdrop-filter: blur(), CSS box-shadows, and transform layers. There are zero heavy JavaScript animation loops or 3D canvas runtimes required for base components. It compiles down to pure vanilla CSS tokens and semantic React components.',
  },
  {
    id: 'faq-4',
    category: 'Responsive Architecture',
    question: 'Is Frutiger.js truly responsive across all mobile viewports?',
    answer:
      'Yes! Frutiger.js is built from the ground up on a Fluid-First responsive architecture. Using continuous CSS clamp() interpolation, auto-fit container grids, minmax() calculations, and safe-touch target sizing (44px minimum touch targets on mobile), components fluidly adapt from 320px compact smartphones up to 3840px 4K ultrawide monitors with zero horizontal overflow.',
  },
  {
    id: 'faq-5',
    category: 'Accessibility',
    question: 'Are Frutiger.js components accessible and compliant with WCAG 2.1 AA?',
    answer:
      'Absolutely. Every component adheres to WCAG 2.1 AA standards: high contrast text tokens (e.g. #034870 on light backgrounds, minimum 4.5:1 ratio), native semantic HTML tags (<button>, <details>, <dialog>, <nav>), visible high-contrast focus rings, full keyboard navigation (Enter, Space, Arrow keys, Escape), and ARIA attributes (aria-expanded, aria-controls, role="region").',
  },
  {
    id: 'faq-6',
    category: 'Integration & Frameworks',
    question: 'Can I use Frutiger.js with Next.js App Router, Remix, Vite, or plain HTML?',
    answer:
      'Yes! @frutiger-js/core is completely framework-agnostic vanilla CSS that can be used in any web project with simple class names (e.g., .fj-btn, .fj-card, .fj-window-frame, .fj-gallery-grid). @frutiger-js/react provides fully typed React 18/19 components with SSR support and zero CSS-in-JS runtime overhead.',
  },
];

const AERO_ICONS_LIST = [
  { name: 'IconFish', component: IconFish, category: 'Nature & Life', tags: ['fish', 'goldfish', 'water', 'nature', 'pet', 'aqua'] },
  { name: 'IconBubble', component: IconBubble, category: 'Aero Glass', tags: ['bubble', 'aqua', 'sphere', 'water', '3d', 'specular'] },
  { name: 'IconWater', component: IconWater, category: 'Nature & Life', tags: ['water', 'drop', 'droplet', 'liquid', 'aqua', 'dew'] },
  { name: 'IconLeaf', component: IconLeaf, category: 'Nature & Life', tags: ['leaf', 'plant', 'nature', 'green', 'eco', 'organic'] },
  { name: 'IconSprout', component: IconSprout, category: 'Nature & Life', tags: ['sprout', 'seedling', 'plant', 'nature', 'green', 'growth'] },
  { name: 'IconSun', component: IconSun, category: 'Atmosphere', tags: ['sun', 'day', 'weather', 'light', 'amber', 'solar'] },
  { name: 'IconCloud', component: IconCloud, category: 'Atmosphere', tags: ['cloud', 'weather', 'sky', 'overcast', 'cumulus'] },
  { name: 'IconGlobe', component: IconGlobe, category: 'Atmosphere', tags: ['globe', 'world', 'earth', 'planet', 'network', 'latitude'] },
  { name: 'IconRainbow', component: IconRainbow, category: 'Atmosphere', tags: ['rainbow', 'spectrum', 'color', 'sky', 'prism', 'arc'] },
  { name: 'IconFlame', component: IconFlame, category: 'Nature & Life', tags: ['flame', 'fire', 'burn', 'hot', 'orange', 'warm'] },
  { name: 'IconAeroOrb', component: IconAeroOrb, category: 'Aero Glass', tags: ['orb', 'vista', 'sphere', 'button', 'badge', '3d', 'chrome'] },
  { name: 'IconDisc', component: IconDisc, category: 'Hardware & Media', tags: ['disc', 'cd', 'dvd', 'music', 'hologram', 'sheen'] },
  { name: 'IconMonitor', component: IconMonitor, category: 'Hardware & Media', tags: ['monitor', 'screen', 'display', 'desktop', 'computer'] },
  { name: 'IconCamera', component: IconCamera, category: 'Hardware & Media', tags: ['camera', 'photo', 'lens', 'picture', 'shot', 'reflex'] },
  { name: 'IconSpeaker', component: IconSpeaker, category: 'Hardware & Media', tags: ['speaker', 'audio', 'sound', 'volume', 'cone'] },
  { name: 'IconBattery', component: IconBattery, category: 'Hardware & Media', tags: ['battery', 'energy', 'power', 'charge', 'green'] },
  { name: 'IconWifi', component: IconWifi, category: 'Hardware & Media', tags: ['wifi', 'wireless', 'network', 'signal', 'waves'] },
  { name: 'IconShield', component: IconShield, category: 'Security & System', tags: ['shield', 'security', 'protect', 'safe', 'defender'] },
  { name: 'IconLock', component: IconLock, category: 'Security & System', tags: ['lock', 'security', 'padlock', 'private', 'gold'] },
  { name: 'IconUnlock', component: IconUnlock, category: 'Security & System', tags: ['unlock', 'open', 'access', 'security'] },
  { name: 'IconCompass', component: IconCompass, category: 'Hardware & Media', tags: ['compass', 'navigation', 'direction', 'safari', 'needle'] },
  { name: 'IconSettings', component: IconSettings, category: 'Security & System', tags: ['settings', 'gear', 'config', 'preferences', 'metal'] },
  { name: 'IconFolder', component: IconFolder, category: 'Security & System', tags: ['folder', 'directory', 'files', 'storage', 'aqua'] },
  { name: 'IconTrash', component: IconTrash, category: 'Security & System', tags: ['trash', 'recycle', 'bin', 'delete', 'glass'] },
  { name: 'IconMusic', component: IconMusic, category: 'Hardware & Media', tags: ['music', 'song', 'audio', 'notes', 'eighth'] },
  { name: 'IconPlay', component: IconPlay, category: 'Hardware & Media', tags: ['play', 'start', 'media', 'triangle'] },
  { name: 'IconPause', component: IconPause, category: 'Hardware & Media', tags: ['pause', 'stop', 'media', 'bars'] },
  { name: 'IconUser', component: IconUser, category: 'Communication', tags: ['user', 'profile', 'avatar', 'person', 'account'] },
  { name: 'IconUsers', component: IconUsers, category: 'Communication', tags: ['users', 'group', 'people', 'team', 'community'] },
  { name: 'IconMail', component: IconMail, category: 'Communication', tags: ['mail', 'email', 'message', 'envelope', 'post'] },
  { name: 'IconHeart', component: IconHeart, category: 'Communication', tags: ['heart', 'like', 'love', 'favorite', 'ruby', '3d'] },
  { name: 'IconStar', component: IconStar, category: 'Communication', tags: ['star', 'favorite', 'rating', 'gold', '3d', 'spark'] },
  { name: 'IconSparkles', component: IconSparkles, category: 'Atmosphere', tags: ['sparkles', 'magic', 'shine', 'starburst', 'glow'] },
  { name: 'IconSearch', component: IconSearch, category: 'UI Navigation', tags: ['search', 'find', 'magnifier', 'explore', 'glass'] },
  { name: 'IconCheck', component: IconCheck, category: 'UI Navigation', tags: ['check', 'success', 'done', 'tick', 'green'] },
  { name: 'IconClose', component: IconClose, category: 'UI Navigation', tags: ['close', 'cancel', 'error', 'remove', 'cross'] },
  { name: 'IconMenu', component: IconMenu, category: 'UI Navigation', tags: ['menu', 'hamburger', 'nav', 'list', 'pills'] },
  { name: 'IconInfo', component: IconInfo, category: 'UI Navigation', tags: ['info', 'help', 'details', 'about', 'badge'] },
  { name: 'IconAlertTriangle', component: IconAlertTriangle, category: 'UI Navigation', tags: ['alert', 'warning', 'danger', 'caution', 'amber'] },
  { name: 'IconChevronDown', component: IconChevronDown, category: 'UI Navigation', tags: ['chevron', 'down', 'arrow', 'expand'] },
  { name: 'IconChevronUp', component: IconChevronUp, category: 'UI Navigation', tags: ['chevron', 'up', 'arrow', 'collapse'] },
  { name: 'IconChevronLeft', component: IconChevronLeft, category: 'UI Navigation', tags: ['chevron', 'left', 'arrow', 'back'] },
  { name: 'IconChevronRight', component: IconChevronRight, category: 'UI Navigation', tags: ['chevron', 'right', 'arrow', 'forward'] },
  { name: 'IconDownload', component: IconDownload, category: 'UI Navigation', tags: ['download', 'save', 'arrow', 'get', 'receive'] },
  { name: 'IconUpload', component: IconUpload, category: 'UI Navigation', tags: ['upload', 'send', 'arrow', 'put', 'transmit'] },
  { name: 'IconRefresh', component: IconRefresh, category: 'UI Navigation', tags: ['refresh', 'reload', 'sync', 'update', 'arrows'] },
  { name: 'IconEye', component: IconEye, category: 'UI Navigation', tags: ['eye', 'view', 'visible', 'preview', 'look'] },
  { name: 'IconClock', component: IconClock, category: 'Hardware & Media', tags: ['clock', 'time', 'watch', 'timer', 'analog'] },
  { name: 'IconCalendar', component: IconCalendar, category: 'Hardware & Media', tags: ['calendar', 'date', 'schedule', 'day', 'month'] },
  { name: 'IconLayers', component: IconLayers, category: 'Aero Glass', tags: ['layers', 'plates', 'glass', 'stack', 'design'] },
  { name: 'IconZap', component: IconZap, category: 'Atmosphere', tags: ['zap', 'bolt', 'lightning', 'energy', 'power', 'electric'] },
];

export default function App() {
  const [activeNav, setActiveNav] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBtnSize, setSelectedBtnSize] = useState<ButtonSize>('md');
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [simulatedWidth, setSimulatedWidth] = useState<string>('100%');

  // Archive & Media Gallery states
  const [archiveCategory, setArchiveCategory] = useState<string>('all');
  const [archiveSearch, setArchiveSearch] = useState('');
  const [lightboxItem, setLightboxItem] = useState<ArchiveMediaItem | null>(null);

  // WindowFrame State
  const [windowVariant, setWindowVariant] = useState<WindowFrameVariant>('aero');
  const [isWindowActive, setIsWindowActive] = useState(true);

  // FAQ State
  const [faqSearch, setFaqSearch] = useState('');

  // Form states
  const [inputVal, setInputVal] = useState('frutiger.aero@web2007.net');
  const [radioVal, setRadioVal] = useState('sky');
  const [switchChecked, setSwitchChecked] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [sliderAquaVal, setSliderAquaVal] = useState(68);
  const [sliderVolumeVal, setSliderVolumeVal] = useState(82);

  // Media Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [songProgress, setSongProgress] = useState(38);

  // Icon Explorer State
  const [iconSearch, setIconSearch] = useState('');
  const [iconCategory, setIconCategory] = useState('all');
  const [iconVariant, setIconVariant] = useState<'aero' | 'outline'>('aero');
  const [iconSize, setIconSize] = useState<number>(32);
  const [copiedIconToast, setCopiedIconToast] = useState<string | null>(null);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install @frutiger-js/core @frutiger-js/react');
    alert('Copied to clipboard: npm install @frutiger-js/core @frutiger-js/react');
  };

  const filteredArchive = ARCHIVE_ITEMS.filter(item => {
    const matchesCategory = archiveCategory === 'all' || item.category === archiveCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(archiveSearch.toLowerCase()) ||
      item.description.toLowerCase().includes(archiveSearch.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(archiveSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const filteredFaqs = FAQ_ITEMS.filter(item => {
    return (
      item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.answer.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.category.toLowerCase().includes(faqSearch.toLowerCase())
    );
  });

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
            href="#responsive-lab"
            isActive={activeNav === 'responsive-lab'}
            onClick={() => setActiveNav('responsive-lab')}
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
              {/* Smooth full-width glossy sheen without sharp vertical cutoffs */}
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

            {/* Aero Desktop Widgets Showcase */}
            <section id="widgets" aria-labelledby="widgets-heading">
              <h2
                id="widgets-heading"
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
                          color: 'var(--fj-color-sky-800)',
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

                    <Progress
                      value={songProgress}
                      aria-label="Audio track playback progress"
                      style={{ marginBottom: '0.75rem' }}
                    />

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

                    <Divider label="Master Volume" style={{ margin: '1.25rem 0 0.75rem 0' }} />

                    <Slider
                      aria-label="Master Volume"
                      value={sliderVolumeVal}
                      onChange={e => setSliderVolumeVal(Number(e.target.value))}
                      valueFormat={v => `${v}%`}
                      showValue
                    />
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
                      <Progress
                        variant="circular"
                        value={28}
                        size={70}
                        strokeWidth={7}
                        showLabel
                        aria-label="CPU Utilization percentage"
                      />
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
                      <Progress value={42} status="success" aria-label="Memory usage progress" />
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
                      <Progress value={85} aria-label="Bandwidth capacity usage" />
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </section>

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

              <Tabs defaultValue="buttons">
                <TabList>
                  <Tab value="buttons">Buttons</Tab>
                  <Tab value="cards">Cards & Surfaces</Tab>
                  <Tab value="forms">Form Controls</Tab>
                  <Tab value="feedback">Alerts & Badges</Tab>
                  <Tab value="navigation">Tabs & Accordion</Tab>
                  <Tab value="overflow">Custom Overflow</Tab>
                  <Tab value="archive">Aero Gallery & Archive</Tab>
                  <Tab value="window">Aero Window Frame</Tab>
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
                          value={sliderVolumeVal}
                          onChange={e => setSliderVolumeVal(Number(e.target.value))}
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

                    <div
                      style={{
                        marginTop: '1rem',
                        display: 'flex',
                        gap: '0.75rem',
                        flexWrap: 'wrap',
                      }}
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

                    <Divider
                      label="Iridescent Skeleton Shimmer Loaders"
                      style={{ margin: '1.5rem 0 1rem 0' }}
                    />

                    <Grid columns="repeat(auto-fit, minmax(260px, 1fr))" gap="1rem">
                      <Card variant="default">
                        <CardContent style={{ padding: '1.25rem' }}>
                          <div
                            style={{
                              display: 'flex',
                              gap: '1rem',
                              alignItems: 'center',
                              marginBottom: '1rem',
                            }}
                          >
                            <Skeleton variant="circle" width="48px" height="48px" />
                            <div
                              style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                              }}
                            >
                              <Skeleton height="16px" width="75%" />
                              <Skeleton height="12px" width="50%" />
                            </div>
                          </div>
                          <Skeleton height="14px" width="100%" style={{ marginBottom: '0.5rem' }} />
                          <Skeleton height="14px" width="85%" style={{ marginBottom: '1rem' }} />
                          <Skeleton variant="pill" height="32px" width="110px" />
                        </CardContent>
                      </Card>

                      <Card variant="glass">
                        <CardContent style={{ padding: '1.25rem' }}>
                          <Skeleton
                            height="110px"
                            width="100%"
                            style={{
                              borderRadius: 'var(--fj-radius-lg)',
                              marginBottom: '1rem',
                            }}
                          />
                          <Skeleton height="18px" width="80%" style={{ marginBottom: '0.5rem' }} />
                          <Skeleton height="14px" width="60%" />
                        </CardContent>
                      </Card>
                    </Grid>
                  </Stack>
                </TabPanel>

                {/* NAVIGATION TAB */}
                <TabPanel value="navigation">
                  <Accordion type="single" defaultValue="faq1">
                    <AccordionItem value="faq1">
                      <AccordionTrigger>What makes Frutiger Aero unique?</AccordionTrigger>
                      <AccordionContent>
                        Frutiger Aero (popularized between 2004–2013) is characterized by
                        skeuomorphic tactility, clear skies, lush grass, water droplets, glass
                        reflections, and bright optimistic colors.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq2">
                      <AccordionTrigger>How is the CSS architecture built?</AccordionTrigger>
                      <AccordionContent>
                        It relies on pure CSS Cascade Layers (@layer fj.*) and native CSS Custom
                        Properties, making it compatible with any stack without Tailwind or
                        CSS-in-JS dependencies.
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

                {/* AERO ARCHIVE & GALLERY TAB */}
                <TabPanel value="archive">
                  <Stack spacing="lg">
                    {/* StatCards Banner inspired by frutigeraeroarchive.org */}
                    <Grid columns="repeat(auto-fit, minmax(min(100%, 220px), 1fr))" gap="1rem">
                      <StatCard
                        title="Archive Media Assets"
                        value="2,480"
                        subtitle="High-res wallpapers & renders"
                        icon="🖼️"
                        variant="aero"
                        trend={{ value: '+14.2%', isPositive: true }}
                      />
                      <StatCard
                        title="Themes & Gadgets"
                        value="640"
                        subtitle="Packaged Vista/7 widgets"
                        icon="✨"
                        variant="sky"
                        trend={{ value: '+8.5%', isPositive: true }}
                      />
                      <StatCard
                        title="Lossless Audio & FX"
                        value="1,120"
                        subtitle="44.1kHz FLAC & WAV cues"
                        icon="🎵"
                        variant="grass"
                        trend={{ value: '+4.1%', isPositive: true }}
                      />
                      <StatCard
                        title="Global Community"
                        value="48.2k"
                        subtitle="Active aero enthusiasts"
                        icon="🌐"
                        variant="glass"
                        trend={{ value: '+28.7%', isPositive: true }}
                      />
                    </Grid>

                    {/* Archive Showcase Container */}
                    <Card variant="glass">
                      <CardHeader>
                        <div>
                          <CardTitle>Frutiger Aero Museum & Digital Vault</CardTitle>
                          <CardDescription>
                            Curated digital artifacts from 2004–2013: wallpapers, concepts,
                            operating system themes, and glossy skeuomorphic media.
                          </CardDescription>
                        </div>
                        <Badge variant="nature" icon={<IconSparkles size={14} />}>
                          Archive Verified
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        {/* Filter and Search Bar */}
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1rem',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1.5rem',
                            padding: '1rem',
                            background: 'rgba(255, 255, 255, 0.45)',
                            borderRadius: 'var(--fj-radius-lg)',
                            border: '1px solid rgba(255, 255, 255, 0.7)',
                          }}
                        >
                          {/* Category Buttons */}
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '0.5rem',
                              alignItems: 'center',
                            }}
                          >
                            {[
                              { id: 'all', label: 'All Artifacts' },
                              { id: 'wallpapers', label: 'Wallpapers' },
                              { id: 'concept', label: 'Concept Art' },
                              { id: 'themes', label: 'UI Themes' },
                              { id: 'gadgets', label: 'Gadgets' },
                            ].map(cat => (
                              <Button
                                key={cat.id}
                                size="sm"
                                variant={archiveCategory === cat.id ? 'aero' : 'glass'}
                                onClick={() => setArchiveCategory(cat.id)}
                              >
                                {cat.label}
                              </Button>
                            ))}
                          </div>

                          {/* Search Input */}
                          <div style={{ width: 'clamp(200px, 100%, 300px)' }}>
                            <Input
                              placeholder="Search archive artifacts..."
                              aria-label="Search archive artifacts"
                              value={archiveSearch}
                              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setArchiveSearch(e.target.value)
                              }
                            />
                          </div>
                        </div>

                        {/* Gallery Grid */}
                        <GalleryGrid cols={3} minWidth="260px" gap="1.5rem">
                          {filteredArchive.map(item => (
                            <GalleryItem
                              key={item.id}
                              title={item.title}
                              category={`${item.year} • ${item.badge}`}
                              description={item.description}
                              badge={item.tags[0]}
                              onClick={() => setLightboxItem(item)}
                              imageNode={
                                <div
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    minHeight: '160px',
                                    background: item.gradient,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  {/* Specular glossy circle reflection overlay */}
                                  <div
                                    style={{
                                      position: 'absolute',
                                      top: '-20%',
                                      left: '-20%',
                                      width: '140%',
                                      height: '80%',
                                      background:
                                        'radial-gradient(ellipse at center, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 70%)',
                                      pointerEvents: 'none',
                                    }}
                                  />
                                  <div
                                    style={{
                                      fontSize: '3rem',
                                      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))',
                                    }}
                                  >
                                    {item.category === 'wallpapers'
                                      ? '🌄'
                                      : item.category === 'concept'
                                        ? '🔮'
                                        : item.category === 'themes'
                                          ? '📱'
                                          : '📟'}
                                  </div>
                                </div>
                              }
                              footer={
                                <div
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: 'var(--fj-font-size-xs)',
                                      color: 'var(--fj-color-sky-800)',
                                      fontWeight: 600,
                                    }}
                                  >
                                    {item.author}
                                  </span>
                                  <Button size="sm" variant="glass">
                                    Inspect 🔍
                                  </Button>
                                </div>
                              }
                            />
                          ))}
                        </GalleryGrid>

                        {filteredArchive.length === 0 && (
                          <div
                            style={{
                              textAlign: 'center',
                              padding: '3rem 1rem',
                              color: 'var(--fj-color-text-muted)',
                            }}
                          >
                            <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                              No artifacts matching &ldquo;{archiveSearch}&rdquo;
                            </p>
                            <Button
                              variant="primary"
                              size="sm"
                              onClick={() => {
                                setArchiveSearch('');
                                setArchiveCategory('all');
                              }}
                            >
                              Reset Filters
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Stack>
                </TabPanel>

                {/* AERO WINDOW FRAME TAB */}
                <TabPanel value="window">
                  <Stack spacing="lg">
                    <Card variant="glass">
                      <CardHeader>
                        <div>
                          <CardTitle>Aero Window Frame (Vista & 7 Glass)</CardTitle>
                          <CardDescription>
                            Authentic skeuomorphic desktop window frames with specular titlebars,
                            jewel traffic-light controls, address breadcrumbs, and content
                            containers.
                          </CardDescription>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <Button
                            size="sm"
                            variant={isWindowActive ? 'aero' : 'glass'}
                            onClick={() => setIsWindowActive(!isWindowActive)}
                          >
                            {isWindowActive ? 'Active Window' : 'Inactive Window'}
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {/* Variant Selection Bar */}
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.75rem',
                            marginBottom: '1.5rem',
                            alignItems: 'center',
                            padding: '0.75rem 1rem',
                            background: 'rgba(255, 255, 255, 0.45)',
                            borderRadius: 'var(--fj-radius-lg)',
                          }}
                        >
                          <span style={{ fontSize: 'var(--fj-font-size-sm)', fontWeight: 600 }}>
                            Window Theme Variant:
                          </span>
                          {(['aero', 'glass', 'glossy', 'frosted'] as WindowFrameVariant[]).map(
                            v => (
                              <Button
                                key={v}
                                size="sm"
                                variant={windowVariant === v ? 'primary' : 'glass'}
                                onClick={() => setWindowVariant(v)}
                              >
                                {v.toUpperCase()}
                              </Button>
                            )
                          )}
                        </div>

                        {/* Live Window Frame Preview */}
                        <div
                          style={{
                            padding: '1.5rem',
                            background:
                              'radial-gradient(circle at 50% 30%, #e0f2fe 0%, #bae6fd 60%, #7dd3fc 100%)',
                            borderRadius: 'var(--fj-radius-xl)',
                            boxShadow: 'inset 0 2px 6px rgba(2, 132, 199, 0.15)',
                          }}
                        >
                          <WindowFrame
                            title="Windows Aero Explorer — C:\Media\FrutigerArchive\Renders"
                            icon={<IconWater size={16} />}
                            variant={windowVariant}
                            isActive={isWindowActive}
                            onClose={() => alert('Window close action triggered')}
                            onMinimize={() => alert('Window minimize action triggered')}
                            onMaximize={() => alert('Window maximize action triggered')}
                            headerActions={
                              <div style={{ display: 'flex', gap: '0.25rem' }}>
                                <Badge variant="nature">Ready</Badge>
                              </div>
                            }
                            footer={
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  width: '100%',
                                }}
                              >
                                <span>8 items • 124.6 MB available in Aero storage</span>
                                <span>Protected by Frutiger.js</span>
                              </div>
                            }
                          >
                            {/* Simulated Explorer Content */}
                            <div style={{ padding: '0.5rem 0' }}>
                              {/* Address & Navigation Toolbar */}
                              <div
                                style={{
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  gap: '0.75rem',
                                  alignItems: 'center',
                                  padding: '0.6rem 0.8rem',
                                  background: 'rgba(255, 255, 255, 0.8)',
                                  borderRadius: 'var(--fj-radius-md)',
                                  border: '1px solid rgba(186, 230, 253, 0.6)',
                                  marginBottom: '1rem',
                                }}
                              >
                                <div style={{ display: 'flex', gap: '0.35rem' }}>
                                  <Button
                                    size="sm"
                                    variant="glass"
                                    style={{ padding: '0.2rem 0.5rem' }}
                                  >
                                    ←
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="glass"
                                    style={{ padding: '0.2rem 0.5rem' }}
                                  >
                                    →
                                  </Button>
                                </div>
                                <div
                                  style={{
                                    flex: 1,
                                    minWidth: '180px',
                                    padding: '0.35rem 0.75rem',
                                    background: '#ffffff',
                                    borderRadius: 'var(--fj-radius-sm)',
                                    border: '1px solid rgba(14, 165, 233, 0.4)',
                                    fontSize: 'var(--fj-font-size-xs)',
                                    color: 'var(--fj-color-sky-900)',
                                    fontWeight: 500,
                                  }}
                                >
                                  Computer ‣ Local Disk (C:) ‣ Media ‣ FrutigerArchive
                                </div>
                                <div style={{ width: '160px' }}>
                                  <Input
                                    placeholder="Search folder..."
                                    aria-label="Search folder"
                                  />
                                </div>
                              </div>

                              {/* Explorer Files Grid */}
                              <Grid columns="repeat(auto-fit, minmax(130px, 1fr))" gap="0.75rem">
                                {[
                                  {
                                    name: 'aurora_bliss.png',
                                    type: 'PNG Image',
                                    icon: '🖼️',
                                    size: '14.2 MB',
                                  },
                                  {
                                    name: 'aqua_orb_3d.c4d',
                                    type: '3D Project',
                                    icon: '🔮',
                                    size: '42.8 MB',
                                  },
                                  {
                                    name: 'wii_forecast.gadget',
                                    type: 'Desktop Gadget',
                                    icon: '📟',
                                    size: '2.1 MB',
                                  },
                                  {
                                    name: 'walkman_ui.swf',
                                    type: 'Flash Theme',
                                    icon: '📱',
                                    size: '8.4 MB',
                                  },
                                  {
                                    name: 'wmp11_aurora.wms',
                                    type: 'Skin File',
                                    icon: '🎵',
                                    size: '11.6 MB',
                                  },
                                  {
                                    name: 'eco_dome.max',
                                    type: '3D Scene',
                                    icon: '🌿',
                                    size: '38.2 MB',
                                  },
                                ].map((f, i) => (
                                  <div
                                    key={i}
                                    style={{
                                      padding: '0.75rem',
                                      borderRadius: 'var(--fj-radius-md)',
                                      background: 'rgba(255, 255, 255, 0.75)',
                                      border: '1px solid rgba(255, 255, 255, 0.9)',
                                      textAlign: 'center',
                                      cursor: 'pointer',
                                      transition: 'all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
                                      boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                                    }}
                                    onMouseEnter={e => {
                                      e.currentTarget.style.background = 'rgba(224, 242, 254, 0.9)';
                                      e.currentTarget.style.borderColor = 'var(--fj-color-sky-400)';
                                    }}
                                    onMouseLeave={e => {
                                      e.currentTarget.style.background =
                                        'rgba(255, 255, 255, 0.75)';
                                      e.currentTarget.style.borderColor =
                                        'rgba(255, 255, 255, 0.9)';
                                    }}
                                  >
                                    <div style={{ fontSize: '2rem', marginBottom: '0.35rem' }}>
                                      {f.icon}
                                    </div>
                                    <div
                                      style={{
                                        fontSize: 'var(--fj-font-size-xs)',
                                        fontWeight: 600,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                      }}
                                    >
                                      {f.name}
                                    </div>
                                    <div
                                      style={{
                                        fontSize: '0.65rem',
                                        color: 'var(--fj-color-text-muted)',
                                        marginTop: '2px',
                                      }}
                                    >
                                      {f.size}
                                    </div>
                                  </div>
                                ))}
                              </Grid>
                            </div>
                          </WindowFrame>
                        </div>
                      </CardContent>
                    </Card>
                  </Stack>
                </TabPanel>

                {/* FAQ KNOWLEDGEBASE TAB */}
                <TabPanel value="faq">
                  <Stack spacing="lg">
                    <Card variant="glass">
                      <CardHeader>
                        <div>
                          <CardTitle>Aero Knowledgebase & FAQ</CardTitle>
                          <CardDescription>
                            Essential questions and deep dives into Frutiger Aero aesthetics,
                            skeuomorphism, modern design system architecture, and accessibility.
                          </CardDescription>
                        </div>
                        <Badge variant="nature" icon={<IconLeaf size={14} />}>
                          Living Documentation
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        {/* Search Bar for FAQ */}
                        <div style={{ marginBottom: '1.5rem', maxWidth: '400px' }}>
                          <Input
                            placeholder="Search questions or keywords..."
                            aria-label="Search questions or keywords"
                            value={faqSearch}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              setFaqSearch(e.target.value)
                            }
                          />
                        </div>

                        {/* FaqList Component */}
                        <FaqList>
                          {filteredFaqs.map(faq => (
                            <FaqItem
                              key={faq.id}
                              question={faq.question}
                              badge={<Badge variant="nature">{faq.category}</Badge>}
                              defaultOpen={faq.id === 'faq-1'}
                            >
                              <p
                                style={{
                                  margin: 0,
                                  lineHeight: 1.7,
                                  color: 'var(--fj-color-text)',
                                }}
                              >
                                {faq.answer}
                              </p>
                            </FaqItem>
                          ))}
                        </FaqList>

                        {filteredFaqs.length === 0 && (
                          <div
                            style={{
                              textAlign: 'center',
                              padding: '2.5rem 1rem',
                              color: 'var(--fj-color-text-muted)',
                            }}
                          >
                            <p>No questions found matching &ldquo;{faqSearch}&rdquo;</p>
                            <Button variant="primary" size="sm" onClick={() => setFaqSearch('')}>
                              View All Questions
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Stack>
                </TabPanel>

                {/* AERO ICONS TAB */}
                <TabPanel value="icons">
                  <Stack spacing="lg">
                    <Card variant="glass">
                      <CardHeader>
                        <div>
                          <CardTitle>Frutiger Aero Custom Icon Pack</CardTitle>
                          <CardDescription>
                            Skeuomorphic SVG icons with specular dome reflections, multi-layer liquid gradients, and tactile depth.
                          </CardDescription>
                        </div>
                        <Badge variant="nature">45+ Authentic Icons</Badge>
                      </CardHeader>
                      <CardContent>
                        {/* Interactive Toolbar */}
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1rem',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '1.5rem',
                            padding: '1rem 1.25rem',
                            background: 'rgba(255, 255, 255, 0.55)',
                            borderRadius: 'var(--fj-radius-xl)',
                            border: '1px solid rgba(186, 230, 253, 0.8)',
                          }}
                        >
                          {/* Search */}
                          <div style={{ flex: '1 1 240px', maxWidth: '320px' }}>
                            <Input
                              placeholder="Search icons (e.g. fish, bubble, disc)..."
                              value={iconSearch}
                              onChange={(e: ChangeEvent<HTMLInputElement>) => setIconSearch(e.target.value)}
                              leftIcon={<IconSearch size={16} />}
                            />
                          </div>

                          {/* Category Filter */}
                          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            {['all', 'Nature & Life', 'Aero Glass', 'Atmosphere', 'Hardware & Media', 'Security & System', 'UI Navigation', 'Communication'].map(cat => (
                              <Button
                                key={cat}
                                size="sm"
                                variant={iconCategory === cat ? 'aero' : 'glass'}
                                onClick={() => setIconCategory(cat)}
                              >
                                {cat === 'all' ? 'All Icons' : cat}
                              </Button>
                            ))}
                          </div>

                          {/* Controls: Variant & Size */}
                          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center', background: 'rgba(255,255,255,0.6)', padding: '0.25rem 0.5rem', borderRadius: 'var(--fj-radius-md)' }}>
                              <span style={{ fontSize: 'var(--fj-font-size-xs)', fontWeight: 600, marginRight: '4px' }}>Style:</span>
                              <Button
                                size="sm"
                                variant={iconVariant === 'aero' ? 'primary' : 'ghost'}
                                onClick={() => setIconVariant('aero')}
                              >
                                Aero Gloss
                              </Button>
                              <Button
                                size="sm"
                                variant={iconVariant === 'outline' ? 'primary' : 'ghost'}
                                onClick={() => setIconVariant('outline')}
                              >
                                Outline
                              </Button>
                            </div>

                            <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center', background: 'rgba(255,255,255,0.6)', padding: '0.25rem 0.5rem', borderRadius: 'var(--fj-radius-md)' }}>
                              <span style={{ fontSize: 'var(--fj-font-size-xs)', fontWeight: 600, marginRight: '4px' }}>Size:</span>
                              {[20, 28, 36, 48].map(sz => (
                                <Button
                                  key={sz}
                                  size="sm"
                                  variant={iconSize === sz ? 'aero' : 'ghost'}
                                  onClick={() => setIconSize(sz)}
                                >
                                  {sz}px
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Copied Toast */}
                        {copiedIconToast && (
                          <div
                            style={{
                              marginBottom: '1rem',
                              padding: '0.75rem 1rem',
                              background: 'rgba(34, 197, 94, 0.15)',
                              border: '1px solid rgba(34, 197, 94, 0.5)',
                              borderRadius: 'var(--fj-radius-lg)',
                              color: '#15803d',
                              fontWeight: 600,
                              fontSize: 'var(--fj-font-size-sm)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              animation: 'fj-fade-in 0.3s ease',
                            }}
                          >
                            <IconCheck size={18} />
                            Copied to clipboard: <code>{copiedIconToast}</code>
                          </div>
                        )}

                        {/* Icon Grid */}
                        <Grid columns="repeat(auto-fill, minmax(140px, 1fr))" gap="1rem">
                          {AERO_ICONS_LIST.filter(item => {
                            const matchCat = iconCategory === 'all' || item.category === iconCategory;
                            const matchSearch =
                              item.name.toLowerCase().includes(iconSearch.toLowerCase()) ||
                              item.tags.some(t => t.toLowerCase().includes(iconSearch.toLowerCase()));
                            return matchCat && matchSearch;
                          }).map(item => {
                            const IconComponent = item.component;
                            return (
                              <button
                                key={item.name}
                                type="button"
                                onClick={() => {
                                  const snippet = `<${item.name} size={${iconSize}} variant="${iconVariant}" />`;
                                  navigator.clipboard.writeText(snippet);
                                  setCopiedIconToast(snippet);
                                  setTimeout(() => setCopiedIconToast(null), 3000);
                                }}
                                style={{
                                  background: 'rgba(255, 255, 255, 0.7)',
                                  border: '1px solid rgba(186, 230, 253, 0.9)',
                                  borderRadius: 'var(--fj-radius-xl)',
                                  padding: '1.25rem 0.75rem',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '0.75rem',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                                  boxShadow: '0 2px 8px rgba(2, 132, 199, 0.08), inset 0 1px 0 #fff',
                                }}
                                onMouseEnter={e => {
                                  e.currentTarget.style.transform = 'translateY(-3px)';
                                  e.currentTarget.style.boxShadow =
                                    '0 8px 18px rgba(2, 132, 199, 0.2), inset 0 1px 1px #fff';
                                  e.currentTarget.style.borderColor = 'var(--fj-color-sky-400)';
                                }}
                                onMouseLeave={e => {
                                  e.currentTarget.style.transform = 'translateY(0)';
                                  e.currentTarget.style.boxShadow =
                                    '0 2px 8px rgba(2, 132, 199, 0.08), inset 0 1px 0 #fff';
                                  e.currentTarget.style.borderColor = 'rgba(186, 230, 253, 0.9)';
                                }}
                              >
                                <div
                                  style={{
                                    width: Math.max(iconSize, 44),
                                    height: Math.max(iconSize, 44),
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <IconComponent size={iconSize} variant={iconVariant} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                  <div
                                    style={{
                                      fontWeight: 700,
                                      fontSize: 'var(--fj-font-size-xs)',
                                      color: 'var(--fj-color-sky-950)',
                                      marginBottom: '2px',
                                      wordBreak: 'break-word',
                                    }}
                                  >
                                    {item.name}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: '10px',
                                      color: 'var(--fj-color-text-muted)',
                                    }}
                                  >
                                    {item.category}
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </Grid>

                        {/* Aero Icon Badges Showcase */}
                        <div
                          style={{
                            marginTop: '2.5rem',
                            padding: '1.5rem',
                            background: 'rgba(255, 255, 255, 0.45)',
                            borderRadius: 'var(--fj-radius-xl)',
                            border: '1px solid rgba(255, 255, 255, 0.8)',
                          }}
                        >
                          <h4
                            style={{
                              margin: '0 0 0.5rem 0',
                              fontSize: 'var(--fj-font-size-lg)',
                              fontWeight: 700,
                              color: 'var(--fj-color-sky-950)',
                            }}
                          >
                            3D Aero Gel Badges (<code style={{ fontSize: '0.85em' }}>&lt;AeroIconBadge /&gt;</code>)
                          </h4>
                          <p
                            style={{
                              fontSize: 'var(--fj-font-size-sm)',
                              color: 'var(--fj-color-text-muted)',
                              marginBottom: '1.25rem',
                            }}
                          >
                            Wrap any icon in a glossy 3D gel bubble badge with specular light cap and glow aura.
                          </p>

                          <div
                            style={{
                              display: 'flex',
                              gap: '1.5rem',
                              flexWrap: 'wrap',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <AeroIconBadge variant="aero" size="lg" glow>
                              <IconFish size={28} />
                            </AeroIconBadge>
                            <AeroIconBadge variant="water" size="lg" glow>
                              <IconBubble size={28} />
                            </AeroIconBadge>
                            <AeroIconBadge variant="nature" size="lg" glow>
                              <IconLeaf size={28} />
                            </AeroIconBadge>
                            <AeroIconBadge variant="sun" size="lg" glow>
                              <IconSun size={28} />
                            </AeroIconBadge>
                            <AeroIconBadge variant="berry" size="lg" glow>
                              <IconHeart size={28} />
                            </AeroIconBadge>
                            <AeroIconBadge variant="glass" size="lg">
                              <IconGlobe size={28} />
                            </AeroIconBadge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Stack>
                </TabPanel>
              </Tabs>
            </section>

            {/* Tokens Visual Swatches */}
            <section id="tokens" aria-labelledby="tokens-heading">
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
            <section id="creator" aria-labelledby="creator-heading">
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

      {/* Lightbox / Media Detail Modal */}
      {lightboxItem && (
        <Modal
          isOpen={true}
          onClose={() => setLightboxItem(null)}
          title={`Archive Artifact: ${lightboxItem.title}`}
        >
          <div style={{ marginBottom: '1.25rem' }}>
            <div
              style={{
                height: '180px',
                borderRadius: 'var(--fj-radius-lg)',
                background: lightboxItem.gradient,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                boxShadow: 'inset 0 1px 1px #fff, 0 6px 20px rgba(2, 132, 199, 0.25)',
              }}
            >
              <div
                style={{
                  fontSize: '4rem',
                  filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.3))',
                }}
              >
                {lightboxItem.category === 'wallpapers'
                  ? '🌄'
                  : lightboxItem.category === 'concept'
                    ? '🔮'
                    : lightboxItem.category === 'themes'
                      ? '📱'
                      : '📟'}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.75rem',
              }}
            >
              <span
                style={{
                  fontSize: 'var(--fj-font-size-sm)',
                  color: 'var(--fj-color-sky-800)',
                  fontWeight: 700,
                }}
              >
                Created: {lightboxItem.year} • {lightboxItem.author}
              </span>
              <Badge variant="nature">{lightboxItem.badge}</Badge>
            </div>

            <p style={{ lineHeight: 1.7, color: 'var(--fj-color-text)', margin: 0 }}>
              {lightboxItem.description}
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <Button variant="ghost" onClick={() => setLightboxItem(null)}>
              Close
            </Button>
            <Button
              variant="aero"
              onClick={() => {
                alert(`Downloaded metadata for "${lightboxItem.title}"`);
                setLightboxItem(null);
              }}
            >
              Download Asset Preset
            </Button>
          </div>
        </Modal>
      )}

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
