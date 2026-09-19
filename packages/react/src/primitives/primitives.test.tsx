import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AeroSurface, Glass, Gloss, Bevel, Glow, Reflection } from './index';

describe('Aero Visual Primitives Suite', () => {
  it('renders AeroSurface with variant, bevel, and glow', () => {
    render(
      <AeroSurface
        variant="crystal"
        hasBevel="deep"
        glow="aqua"
        data-testid="aero-surface"
      >
        <span>Crystal Content</span>
      </AeroSurface>
    );

    const surface = screen.getByTestId('aero-surface');
    expect(surface).toBeInTheDocument();
    expect(surface).toHaveClass('fj-aero-surface');
    expect(surface).toHaveClass('fj-aero-surface--crystal');
    expect(surface).toHaveClass('fj-bevel--deep');
    expect(surface).toHaveClass('fj-glow');
    expect(surface).toHaveClass('fj-glow--aqua');
    expect(screen.getByText('Crystal Content')).toBeInTheDocument();
  });

  it('renders Glass primitive with specular highlight', () => {
    const { container } = render(
      <Glass specular data-testid="glass-box">
        <div>Glass Content</div>
      </Glass>
    );

    const glass = screen.getByTestId('glass-box');
    expect(glass).toHaveClass('fj-aero-surface--glass');
    expect(container.querySelector('.fj-gloss-cap')).toBeInTheDocument();
  });

  it('renders Gloss, Bevel, and Glow primitives', () => {
    const { container } = render(
      <div>
        <Gloss curvature="flat" intensity="bright" data-testid="gloss" />
        <Bevel depth={2} data-testid="bevel">Beveled Box</Bevel>
        <Glow color="sun" data-testid="glow">Glowing Orb</Glow>
      </div>
    );

    expect(container.querySelector('.fj-gloss-cap--flat')).toBeInTheDocument();
    expect(container.querySelector('.fj-gloss-cap--bright')).toBeInTheDocument();
    expect(screen.getByTestId('bevel')).toHaveClass('fj-bevel--deep');
    expect(screen.getByTestId('glow')).toHaveClass('fj-glow--sun');
  });

  it('renders Reflection mirror primitive', () => {
    render(
      <Reflection data-testid="reflection-wrap">
        <span>Aero Reflection</span>
      </Reflection>
    );

    expect(screen.getByTestId('reflection-wrap')).toHaveClass('fj-reflection-wrap');
    expect(screen.getAllByText('Aero Reflection').length).toBe(2);
  });
});
