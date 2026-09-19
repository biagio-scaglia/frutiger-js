import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import * as Icons from './index';
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

    const { container: speakerContainer } = render(<IconSpeaker />);
    expect(speakerContainer.querySelector('.fj-icon-speaker')).toBeInTheDocument();

    const { container: batteryContainer } = render(<IconBattery />);
    expect(batteryContainer.querySelector('.fj-icon-battery')).toBeInTheDocument();

    const { container: wifiContainer } = render(<IconWifi />);
    expect(wifiContainer.querySelector('.fj-icon-wifi')).toBeInTheDocument();

    const { container: compassContainer } = render(<IconCompass />);
    expect(compassContainer.querySelector('.fj-icon-compass')).toBeInTheDocument();
  });

  it('renders security, navigation and system icons', () => {
    const { container: shieldContainer } = render(<IconShield />);
    expect(shieldContainer.querySelector('.fj-icon-shield')).toBeInTheDocument();

    const { container: settingsContainer } = render(<IconSettings />);
    expect(settingsContainer.querySelector('.fj-icon-settings')).toBeInTheDocument();

    const { container: folderContainer } = render(<IconFolder />);
    expect(folderContainer.querySelector('.fj-icon-folder')).toBeInTheDocument();

    const { container: trashContainer } = render(<IconTrash />);
    expect(trashContainer.querySelector('.fj-icon-trash')).toBeInTheDocument();

    const { container: searchContainer } = render(<IconSearch />);
    expect(searchContainer.querySelector('.fj-icon-search')).toBeInTheDocument();

    const { container: checkContainer } = render(<IconCheck />);
    expect(checkContainer.querySelector('.fj-icon-check')).toBeInTheDocument();

    const { container: closeContainer } = render(<IconClose />);
    expect(closeContainer.querySelector('.fj-icon-close')).toBeInTheDocument();

    const { container: menuContainer } = render(<IconMenu />);
    expect(menuContainer.querySelector('.fj-icon-menu')).toBeInTheDocument();
  });

  it('renders atmosphere and media playback icons', () => {
    const { container: sunContainer } = render(<IconSun />);
    expect(sunContainer.querySelector('.fj-icon-sun')).toBeInTheDocument();

    const { container: cloudContainer } = render(<IconCloud />);
    expect(cloudContainer.querySelector('.fj-icon-cloud')).toBeInTheDocument();

    const { container: globeContainer } = render(<IconGlobe />);
    expect(globeContainer.querySelector('.fj-icon-globe')).toBeInTheDocument();

    const { container: sparklesContainer } = render(<IconSparkles />);
    expect(sparklesContainer.querySelector('.fj-icon-sparkles')).toBeInTheDocument();

    const { container: musicContainer } = render(<IconMusic />);
    expect(musicContainer.querySelector('.fj-icon-music')).toBeInTheDocument();

    const { container: playContainer } = render(<IconPlay />);
    expect(playContainer.querySelector('.fj-icon-play')).toBeInTheDocument();

    const { container: pauseContainer } = render(<IconPause />);
    expect(pauseContainer.querySelector('.fj-icon-pause')).toBeInTheDocument();

    const { container: waterContainer } = render(<IconWater />);
    expect(waterContainer.querySelector('.fj-icon-water')).toBeInTheDocument();
  });

  it('renders communication, time and transfer icons', () => {
    const { container: userContainer } = render(<IconUser />);
    expect(userContainer.querySelector('.fj-icon-user')).toBeInTheDocument();

    const { container: heartContainer } = render(<IconHeart />);
    expect(heartContainer.querySelector('.fj-icon-heart')).toBeInTheDocument();

    const { container: starContainer } = render(<IconStar />);
    expect(starContainer.querySelector('.fj-icon-star')).toBeInTheDocument();

    const { container: lockContainer } = render(<IconLock />);
    expect(lockContainer.querySelector('.fj-icon-lock')).toBeInTheDocument();

    const { container: zapContainer } = render(<IconZap />);
    expect(zapContainer.querySelector('.fj-icon-zap')).toBeInTheDocument();

    const { container: downloadContainer } = render(<IconDownload />);
    expect(downloadContainer.querySelector('.fj-icon-download')).toBeInTheDocument();

    const { container: uploadContainer } = render(<IconUpload />);
    expect(uploadContainer.querySelector('.fj-icon-upload')).toBeInTheDocument();

    const { container: refreshContainer } = render(<IconRefresh />);
    expect(refreshContainer.querySelector('.fj-icon-refresh')).toBeInTheDocument();

    const { container: clockContainer } = render(<IconClock />);
    expect(clockContainer.querySelector('.fj-icon-clock')).toBeInTheDocument();

    const { container: calendarContainer } = render(<IconCalendar />);
    expect(calendarContainer.querySelector('.fj-icon-calendar')).toBeInTheDocument();

    const { container: layersContainer } = render(<IconLayers />);
    expect(layersContainer.querySelector('.fj-icon-layers')).toBeInTheDocument();
  });

  it('renders all exported icon components without crashing', () => {
    Object.entries(Icons).forEach(([name, Component]) => {
      if (typeof Component === 'function' && name.startsWith('Icon')) {
        const IconComp = Component as React.FC<{ size?: number }>;
        const { container } = render(<IconComp size={20} />);
        expect(container.querySelector('svg')).toBeInTheDocument();
      }
    });
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
