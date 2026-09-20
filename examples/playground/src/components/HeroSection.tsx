import React from 'react';
import { Badge, Button, IconLeaf, IconSparkles, IconStar } from '@frutiger.js/react';

export interface HeroSectionProps {
  onCopyInstall: () => void;
  onExploreIcons: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = React.memo(
  ({ onCopyInstall, onExploreIcons }) => {
    return (
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

        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '1.25rem',
          }}
        >
          <Badge variant="nature" icon={<IconLeaf size={14} />}>
            v1.0.5 • Web 2.0 Aesthetic Reborn
          </Badge>
          <a
            href="https://biagiocyberspace.it"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Badge variant="primary" icon={<IconSparkles size={14} />}>
              Created by Biagio Scaglia
            </Badge>
          </a>
        </div>

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
          Frutiger.js is a modern React UI library and pure CSS design system inspired by Frutiger
          Aero, glossy surfaces, organic curves, nature imagery, and early Web 2.0 optimism.
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
              Explore Components
            </Button>
          </a>
          <a href="#components" style={{ textDecoration: 'none' }} onClick={onExploreIcons}>
            <Button variant="glass" size="lg" leftIcon={<IconSparkles size={18} />}>
              Aero Icons (45+)
            </Button>
          </a>
          <Button
            variant="glass"
            size="lg"
            onClick={onCopyInstall}
            leftIcon={<IconSparkles size={16} />}
          >
            npm install @frutiger.js/react
          </Button>
          <a
            href="https://github.com/biagio-scaglia/frutiger-js"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="secondary" size="lg" leftIcon={<IconStar size={18} />}>
              GitHub
            </Button>
          </a>
        </div>
      </section>
    );
  }
);
HeroSection.displayName = 'HeroSection';
