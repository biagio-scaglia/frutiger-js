import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import {
  IconFish,
  IconBubble,
  IconWater,
  IconLeaf,
  IconSun,
  IconCloud,
  IconGlobe,
  IconAeroOrb,
  IconDisc,
  IconMonitor,
  IconCamera,
  IconSpeaker,
  IconBattery,
  IconWifi,
  IconShield,
  IconLock,
  IconCompass,
  IconSettings,
  IconFolder,
  IconTrash,
  IconMusic,
  IconPlay,
  IconPause,
  IconUser,
  IconHeart,
  IconStar,
  IconSparkles,
  IconSearch,
  IconCheck,
  IconClose,
  IconMenu,
  IconDownload,
  IconUpload,
  IconRefresh,
  IconClock,
  IconCalendar,
  IconLayers,
  IconZap,
  AeroIconBadge,
} from './index';

describe('Frutiger Aero Custom Icons', () => {
  it('renders IconFish with default aero variant and custom size', () => {
    const { container } = render(<IconFish size={32} data-testid="fish-icon" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
    expect(svg?.classList.contains('fj-icon-fish')).toBe(true);
  });

  it('renders IconBubble and IconWater in outline and aero variants', () => {
    const { container: aeroContainer } = render(<IconBubble variant="aero" />);
    expect(aeroContainer.querySelector('radialGradient')).toBeInTheDocument();

    const { container: outlineContainer } = render(<IconBubble variant="outline" />);
    expect(outlineContainer.querySelector('circle')).toBeInTheDocument();
  });

  it('renders hardware and media icons correctly', () => {
    const { container: orbContainer } = render(<IconAeroOrb size={28} />);
    expect(orbContainer.querySelector('.fj-icon-aero-orb')).toBeInTheDocument();

    const { container: cdContainer } = render(<IconDisc />);
    expect(cdContainer.querySelector('.fj-icon-disc')).toBeInTheDocument();

    const { container: cameraContainer } = render(<IconCamera />);
    expect(cameraContainer.querySelector('.fj-icon-camera')).toBeInTheDocument();

    const { container: monitorContainer } = render(<IconMonitor />);
    expect(monitorContainer.querySelector('.fj-icon-monitor')).toBeInTheDocument();
  });

  it('renders core UI and communication icons', () => {
    const { container: heartContainer } = render(<IconHeart />);
    expect(heartContainer.querySelector('.fj-icon-heart')).toBeInTheDocument();

    const { container: starContainer } = render(<IconStar />);
    expect(starContainer.querySelector('.fj-icon-star')).toBeInTheDocument();

    const { container: lockContainer } = render(<IconLock />);
    expect(lockContainer.querySelector('.fj-icon-lock')).toBeInTheDocument();

    const { container: zapContainer } = render(<IconZap />);
    expect(zapContainer.querySelector('.fj-icon-zap')).toBeInTheDocument();
  });

  it('renders AeroIconBadge with gloss reflections and glow', () => {
    const { container } = render(
      <AeroIconBadge size="lg" variant="nature" glow data-testid="aero-badge">
        <IconLeaf size={24} />
      </AeroIconBadge>
    );

    const badge = container.querySelector('.fj-aero-icon-badge');
    expect(badge).toBeInTheDocument();
    expect(badge?.classList.contains('fj-aero-icon-badge--glow')).toBe(true);
    expect(badge?.querySelector('.fj-icon-leaf')).toBeInTheDocument();
  });
});
