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
  IconSearch,
  IconCheck,
  AeroIconBadge,
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
} from '@frutiger-js/react';

export interface IconDefinition {
  name: string;
  component: React.FC<{ size?: number | string; variant?: 'aero' | 'outline'; className?: string }>;
  category: string;
  tags: string[];
}

export const AERO_ICONS_LIST: IconDefinition[] = [
  {
    name: 'IconFish',
    component: IconFish,
    category: 'Nature & Life',
    tags: ['fish', 'goldfish', 'water', 'nature', 'pet', 'aqua'],
  },
  {
    name: 'IconBubble',
    component: IconBubble,
    category: 'Aero Glass',
    tags: ['bubble', 'aqua', 'sphere', 'water', '3d', 'specular'],
  },
  {
    name: 'IconWater',
    component: IconWater,
    category: 'Nature & Life',
    tags: ['water', 'drop', 'droplet', 'liquid', 'aqua', 'dew'],
  },
  {
    name: 'IconLeaf',
    component: IconLeaf,
    category: 'Nature & Life',
    tags: ['leaf', 'plant', 'nature', 'green', 'eco', 'organic'],
  },
  {
    name: 'IconSprout',
    component: IconSprout,
    category: 'Nature & Life',
    tags: ['sprout', 'seedling', 'plant', 'nature', 'green', 'growth'],
  },
  {
    name: 'IconSun',
    component: IconSun,
    category: 'Atmosphere',
    tags: ['sun', 'day', 'weather', 'light', 'amber', 'solar'],
  },
  {
    name: 'IconCloud',
    component: IconCloud,
    category: 'Atmosphere',
    tags: ['cloud', 'weather', 'sky', 'overcast', 'cumulus'],
  },
  {
    name: 'IconGlobe',
    component: IconGlobe,
    category: 'Atmosphere',
    tags: ['globe', 'world', 'earth', 'planet', 'network', 'latitude'],
  },
  {
    name: 'IconRainbow',
    component: IconRainbow,
    category: 'Atmosphere',
    tags: ['rainbow', 'spectrum', 'color', 'sky', 'prism', 'arc'],
  },
  {
    name: 'IconFlame',
    component: IconFlame,
    category: 'Nature & Life',
    tags: ['flame', 'fire', 'burn', 'hot', 'orange', 'warm'],
  },
  {
    name: 'IconAeroOrb',
    component: IconAeroOrb,
    category: 'Aero Glass',
    tags: ['orb', 'vista', 'sphere', 'button', 'badge', '3d', 'chrome'],
  },
  {
    name: 'IconDisc',
    component: IconDisc,
    category: 'Hardware & Media',
    tags: ['disc', 'cd', 'dvd', 'music', 'hologram', 'sheen'],
  },
  {
    name: 'IconMonitor',
    component: IconMonitor,
    category: 'Hardware & Media',
    tags: ['monitor', 'screen', 'display', 'desktop', 'computer'],
  },
  {
    name: 'IconCamera',
    component: IconCamera,
    category: 'Hardware & Media',
    tags: ['camera', 'photo', 'lens', 'picture', 'shot', 'reflex'],
  },
  {
    name: 'IconSpeaker',
    component: IconSpeaker,
    category: 'Hardware & Media',
    tags: ['speaker', 'audio', 'sound', 'volume', 'cone'],
  },
  {
    name: 'IconBattery',
    component: IconBattery,
    category: 'Hardware & Media',
    tags: ['battery', 'energy', 'power', 'charge', 'green'],
  },
  {
    name: 'IconWifi',
    component: IconWifi,
    category: 'Hardware & Media',
    tags: ['wifi', 'wireless', 'network', 'signal', 'waves'],
  },
  {
    name: 'IconShield',
    component: IconShield,
    category: 'Security & System',
    tags: ['shield', 'security', 'protect', 'safe', 'defender'],
  },
  {
    name: 'IconLock',
    component: IconLock,
    category: 'Security & System',
    tags: ['lock', 'security', 'padlock', 'private', 'gold'],
  },
  {
    name: 'IconUnlock',
    component: IconUnlock,
    category: 'Security & System',
    tags: ['unlock', 'open', 'access', 'security'],
  },
  {
    name: 'IconCompass',
    component: IconCompass,
    category: 'Hardware & Media',
    tags: ['compass', 'navigation', 'direction', 'safari', 'needle'],
  },
  {
    name: 'IconSettings',
    component: IconSettings,
    category: 'Security & System',
    tags: ['settings', 'gear', 'config', 'preferences', 'metal'],
  },
  {
    name: 'IconFolder',
    component: IconFolder,
    category: 'Security & System',
    tags: ['folder', 'directory', 'files', 'storage', 'aqua'],
  },
  {
    name: 'IconTrash',
    component: IconTrash,
    category: 'Security & System',
    tags: ['trash', 'recycle', 'bin', 'delete', 'glass'],
  },
  {
    name: 'IconMusic',
    component: IconMusic,
    category: 'Hardware & Media',
    tags: ['music', 'song', 'audio', 'notes', 'eighth'],
  },
  {
    name: 'IconPlay',
    component: IconPlay,
    category: 'Hardware & Media',
    tags: ['play', 'start', 'media', 'triangle'],
  },
  {
    name: 'IconPause',
    component: IconPause,
    category: 'Hardware & Media',
    tags: ['pause', 'stop', 'media', 'bars'],
  },
  {
    name: 'IconUser',
    component: IconUser,
    category: 'Communication',
    tags: ['user', 'profile', 'avatar', 'person', 'account'],
  },
  {
    name: 'IconUsers',
    component: IconUsers,
    category: 'Communication',
    tags: ['users', 'group', 'people', 'team', 'community'],
  },
  {
    name: 'IconMail',
    component: IconMail,
    category: 'Communication',
    tags: ['mail', 'email', 'message', 'envelope', 'post'],
  },
  {
    name: 'IconHeart',
    component: IconHeart,
    category: 'Communication',
    tags: ['heart', 'like', 'love', 'favorite', 'ruby', '3d'],
  },
  {
    name: 'IconStar',
    component: IconStar,
    category: 'Communication',
    tags: ['star', 'favorite', 'rating', 'gold', '3d', 'spark'],
  },
  {
    name: 'IconSparkles',
    component: IconSparkles,
    category: 'Atmosphere',
    tags: ['sparkles', 'magic', 'shine', 'starburst', 'glow'],
  },
  {
    name: 'IconSearch',
    component: IconSearch,
    category: 'UI Navigation',
    tags: ['search', 'find', 'magnifier', 'explore', 'glass'],
  },
  {
    name: 'IconCheck',
    component: IconCheck,
    category: 'UI Navigation',
    tags: ['check', 'success', 'done', 'tick', 'green'],
  },
  {
    name: 'IconClose',
    component: IconClose,
    category: 'UI Navigation',
    tags: ['close', 'cancel', 'error', 'remove', 'cross'],
  },
  {
    name: 'IconMenu',
    component: IconMenu,
    category: 'UI Navigation',
    tags: ['menu', 'hamburger', 'nav', 'list', 'pills'],
  },
  {
    name: 'IconInfo',
    component: IconInfo,
    category: 'UI Navigation',
    tags: ['info', 'help', 'details', 'about', 'badge'],
  },
  {
    name: 'IconAlertTriangle',
    component: IconAlertTriangle,
    category: 'UI Navigation',
    tags: ['alert', 'warning', 'danger', 'caution', 'amber'],
  },
  {
    name: 'IconChevronDown',
    component: IconChevronDown,
    category: 'UI Navigation',
    tags: ['chevron', 'down', 'arrow', 'expand'],
  },
  {
    name: 'IconChevronUp',
    component: IconChevronUp,
    category: 'UI Navigation',
    tags: ['chevron', 'up', 'arrow', 'collapse'],
  },
  {
    name: 'IconChevronLeft',
    component: IconChevronLeft,
    category: 'UI Navigation',
    tags: ['chevron', 'left', 'arrow', 'back'],
  },
  {
    name: 'IconChevronRight',
    component: IconChevronRight,
    category: 'UI Navigation',
    tags: ['chevron', 'right', 'arrow', 'forward'],
  },
  {
    name: 'IconDownload',
    component: IconDownload,
    category: 'UI Navigation',
    tags: ['download', 'save', 'arrow', 'get', 'receive'],
  },
  {
    name: 'IconUpload',
    component: IconUpload,
    category: 'UI Navigation',
    tags: ['upload', 'send', 'arrow', 'put', 'transmit'],
  },
  {
    name: 'IconRefresh',
    component: IconRefresh,
    category: 'UI Navigation',
    tags: ['refresh', 'reload', 'sync', 'update', 'arrows'],
  },
  {
    name: 'IconEye',
    component: IconEye,
    category: 'UI Navigation',
    tags: ['eye', 'view', 'visible', 'preview', 'look'],
  },
  {
    name: 'IconClock',
    component: IconClock,
    category: 'Hardware & Media',
    tags: ['clock', 'time', 'watch', 'timer', 'analog'],
  },
  {
    name: 'IconCalendar',
    component: IconCalendar,
    category: 'Hardware & Media',
    tags: ['calendar', 'date', 'schedule', 'day', 'month'],
  },
  {
    name: 'IconLayers',
    component: IconLayers,
    category: 'Aero Glass',
    tags: ['layers', 'plates', 'glass', 'stack', 'design'],
  },
  {
    name: 'IconZap',
    component: IconZap,
    category: 'Atmosphere',
    tags: ['zap', 'bolt', 'lightning', 'energy', 'power', 'electric'],
  },
];

const CATEGORIES = [
  'all',
  'Nature & Life',
  'Aero Glass',
  'Atmosphere',
  'Hardware & Media',
  'Security & System',
  'UI Navigation',
  'Communication',
];

export const AeroIconExplorer: React.FC = React.memo(() => {
  const [iconSearch, setIconSearch] = useState('');
  const [iconCategory, setIconCategory] = useState('all');
  const [iconVariant, setIconVariant] = useState<'aero' | 'outline'>('aero');
  const [iconSize, setIconSize] = useState<number>(32);
  const [copiedIconToast, setCopiedIconToast] = useState<string | null>(null);

  const filteredIcons = useMemo(() => {
    const query = iconSearch.trim().toLowerCase();
    return AERO_ICONS_LIST.filter(item => {
      const matchCat = iconCategory === 'all' || item.category === iconCategory;
      if (!matchCat) return false;
      if (!query) return true;
      return (
        item.name.toLowerCase().includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query))
      );
    });
  }, [iconSearch, iconCategory]);

  return (
    <Card variant="glass">
      <CardHeader>
        <div>
          <CardTitle>Frutiger Aero Custom Icon Pack</CardTitle>
          <CardDescription>
            Skeuomorphic SVG icons with specular dome reflections, multi-layer liquid gradients, and
            tactile depth.
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
            {CATEGORIES.map(cat => (
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
            <div
              style={{
                display: 'flex',
                gap: '0.25rem',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.6)',
                padding: '0.25rem 0.5rem',
                borderRadius: 'var(--fj-radius-md)',
              }}
            >
              <span
                style={{ fontSize: 'var(--fj-font-size-xs)', fontWeight: 600, marginRight: '4px' }}
              >
                Style:
              </span>
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

            <div
              style={{
                display: 'flex',
                gap: '0.25rem',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.6)',
                padding: '0.25rem 0.5rem',
                borderRadius: 'var(--fj-radius-md)',
              }}
            >
              <span
                style={{ fontSize: 'var(--fj-font-size-xs)', fontWeight: 600, marginRight: '4px' }}
              >
                Size:
              </span>
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
          {filteredIcons.map(item => {
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
  );
});
