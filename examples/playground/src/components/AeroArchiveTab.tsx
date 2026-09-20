import React, { useState, useMemo, ChangeEvent } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Input,
  Button,
  Grid,
  Stack,
  StatCard,
  GalleryGrid,
  GalleryItem,
  Modal,
  IconSearch,
  IconCamera,
  IconSparkles,
  IconLeaf,
  IconUsers,
  IconSun,
  IconAeroOrb,
  IconMonitor,
  IconFolder,
} from '@frutiger.js/react';

export interface ArchiveMediaItem {
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

export const ARCHIVE_ITEMS: ArchiveMediaItem[] = [
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

export const AeroArchiveTab: React.FC = React.memo(() => {
  const [archiveCategory, setArchiveCategory] = useState<string>('all');
  const [archiveSearch, setArchiveSearch] = useState('');
  const [lightboxItem, setLightboxItem] = useState<ArchiveMediaItem | null>(null);

  const filteredArchive = useMemo(() => {
    const query = archiveSearch.trim().toLowerCase();
    return ARCHIVE_ITEMS.filter(item => {
      const matchCat = archiveCategory === 'all' || item.category === archiveCategory;
      if (!matchCat) return false;
      if (!query) return true;
      return (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query))
      );
    });
  }, [archiveCategory, archiveSearch]);

  return (
    <Stack spacing="lg">
      {/* StatCards Banner */}
      <Grid columns="repeat(auto-fit, minmax(min(100%, 220px), 1fr))" gap="1rem">
        <StatCard
          title="Archive Media Assets"
          value="2,480"
          subtitle="High-res wallpapers & renders"
          icon={<IconCamera size={22} />}
          variant="aero"
          trend={{ value: '+14.2%', isPositive: true }}
        />
        <StatCard
          title="Themes & Gadgets"
          value="640"
          subtitle="Packaged Vista/7 widgets"
          icon={<IconSparkles size={22} />}
          variant="sky"
          trend={{ value: '+8.5%', isPositive: true }}
        />
        <StatCard
          title="Eco Biospheres"
          value="128"
          subtitle="3D daylight renders"
          icon={<IconLeaf size={22} />}
          variant="grass"
          trend={{ value: '+22.0%', isPositive: true }}
        />
        <StatCard
          title="Active Curators"
          value="1,920"
          subtitle="Community contributors"
          icon={<IconUsers size={22} />}
          variant="default"
          trend={{ value: '+5.1%', isPositive: true }}
        />
      </Grid>

      {/* Main Gallery Archive Explorer */}
      <Card variant="glass">
        <CardHeader>
          <div>
            <CardTitle>Aero Media Gallery & Digital Vault</CardTitle>
            <CardDescription>
              Explore high-fidelity skeuomorphic renders, OS themes, and tactile concept art.
            </CardDescription>
          </div>
          <Badge variant="nature">{filteredArchive.length} Items Found</Badge>
        </CardHeader>
        <CardContent>
          {/* Controls toolbar */}
          <Stack spacing="md" style={{ marginBottom: '1.5rem' }}>
            <Grid columns="repeat(auto-fit, minmax(min(100%, 260px), 1fr))" gap="1rem">
              <Input
                placeholder="Search archive assets (e.g. Vista, Orbs, Aurora)..."
                value={archiveSearch}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setArchiveSearch(e.target.value)}
                leftIcon={<IconSearch size={16} />}
              />
              <div
                style={{
                  display: 'flex',
                  gap: '0.4rem',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}
              >
                {(['all', 'wallpapers', 'gadgets', 'themes', 'concept'] as const).map(cat => (
                  <Button
                    key={cat}
                    size="sm"
                    variant={archiveCategory === cat ? 'primary' : 'glass'}
                    onClick={() => setArchiveCategory(cat)}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </Grid>
          </Stack>

          {/* Gallery Items Grid */}
          <GalleryGrid columns="repeat(auto-fill, minmax(min(100%, 260px), 1fr))" gap="1.25rem">
            {filteredArchive.map(item => (
              <GalleryItem
                key={item.id}
                title={item.title}
                subtitle={`${item.year} • ${item.category}`}
                badge={item.badge}
                onClick={() => setLightboxItem(item)}
                aspectRatio="16/10"
                image={
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: item.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Simulated lens glare */}
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
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))',
                      }}
                    >
                      {item.category === 'wallpapers' && <IconSun size={48} />}
                      {item.category === 'concept' && <IconAeroOrb size={48} />}
                      {item.category === 'themes' && <IconMonitor size={48} />}
                      {item.category === 'gadgets' && <IconFolder size={48} />}
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
                    <Button size="sm" variant="glass" leftIcon={<IconSearch size={14} />}>
                      Inspect
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
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                <IconSearch size={44} />
              </div>
              <p style={{ fontWeight: 600 }}>No assets found matching your query.</p>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setArchiveSearch('');
                  setArchiveCategory('all');
                }}
              >
                Reset Search Filters
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <Modal
          isOpen={Boolean(lightboxItem)}
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.3))',
                }}
              >
                {lightboxItem.category === 'wallpapers' && <IconSun size={64} />}
                {lightboxItem.category === 'concept' && <IconAeroOrb size={64} />}
                {lightboxItem.category === 'themes' && <IconMonitor size={64} />}
                {lightboxItem.category === 'gadgets' && <IconFolder size={64} />}
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
    </Stack>
  );
});
