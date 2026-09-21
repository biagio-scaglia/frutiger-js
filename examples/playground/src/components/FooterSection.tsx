import React from 'react';
import { Container, Badge } from '@frutiger.js/react';

export const FooterSection: React.FC = React.memo(() => {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(186, 230, 253, 0.6)',
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        padding: '3rem 1rem',
        textAlign: 'center',
        fontSize: 'var(--fj-font-size-sm)',
        color: 'var(--fj-color-text-muted)',
      }}
    >
      <Container size="lg">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '0.75rem',
          }}
        >
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--fj-color-sky-950)' }}>
            Frutiger<span style={{ color: 'var(--fj-color-sky-600)' }}>.js</span>
          </span>
          <Badge variant="primary">v1.0.9</Badge>
        </div>
        <p style={{ margin: '0 0 0.75rem 0', fontWeight: 600, color: 'var(--fj-color-sky-900)' }}>
          The Premier Frutiger Aero UI Component Suite & CSS Design System for React
        </p>
        <p style={{ margin: '0 0 1rem 0', lineHeight: 1.6 }}>
          Designed, architected & crafted with 💚 by{' '}
          <a
            href="https://biagiocyberspace.it"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--fj-color-sky-700)', fontWeight: 800, textDecoration: 'none' }}
          >
            Biagio Scaglia
          </a>{' '}
          (Full Stack Software Engineer & UX/UI Designer)
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            fontWeight: 600,
          }}
        >
          <a
            href="https://biagiocyberspace.it"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--fj-color-sky-800)', textDecoration: 'none' }}
          >
            🌐 Portfolio (biagiocyberspace.it)
          </a>
          <a
            href="https://github.com/biagio-scaglia"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--fj-color-sky-800)', textDecoration: 'none' }}
          >
            🐙 GitHub (@biagio-scaglia)
          </a>
          <a
            href="https://linkedin.com/in/biagio-scaglia"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--fj-color-sky-800)', textDecoration: 'none' }}
          >
            💼 LinkedIn
          </a>
        </div>
        <p style={{ margin: '1.5rem 0 0 0', fontSize: 'var(--fj-font-size-xs)', opacity: 0.8 }}>
          Released under MIT License © {new Date().getFullYear()} Biagio Scaglia. Inspired by
          Frutiger Aero, Windows Vista & Web 2.0.
        </p>
      </Container>
    </footer>
  );
});
FooterSection.displayName = 'FooterSection';
