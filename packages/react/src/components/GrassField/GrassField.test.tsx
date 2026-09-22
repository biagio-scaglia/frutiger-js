import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { GrassField } from './GrassField';

describe('GrassField Component Suite', () => {
  beforeEach(() => {
    // Mock HTMLCanvasElement.getContext and getBoundingClientRect for JSDOM
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      clearRect: vi.fn(),
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      quadraticCurveTo: vi.fn(),
      lineTo: vi.fn(),
      closePath: vi.fn(),
      fill: vi.fn(),
      stroke: vi.fn(),
      arc: vi.fn(),
      createLinearGradient: vi.fn().mockReturnValue({
        addColorStop: vi.fn(),
      }),
      scale: vi.fn(),
    });

    HTMLCanvasElement.prototype.getBoundingClientRect = vi.fn().mockReturnValue({
      left: 0,
      top: 0,
      width: 800,
      height: 140,
      right: 800,
      bottom: 140,
    });
  });

  it('renders grass field container and canvas without crashing', () => {
    const { container } = render(<GrassField height={120} />);
    const root = container.querySelector('.fj-grass-field');
    expect(root).toBeInTheDocument();
    expect(root).toHaveStyle({ height: '120px' });
    const canvas = container.querySelector('.fj-grass-field__canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('applies non-interactive class when interactive is false', () => {
    const { container } = render(<GrassField interactive={false} />);
    const root = container.querySelector('.fj-grass-field');
    expect(root).toHaveClass('fj-grass-field--non-interactive');
  });

  it('renders ambient sunlight caustics glow when showGlow is true', () => {
    const { container } = render(<GrassField showGlow={true} />);
    const glow = container.querySelector('.fj-grass-field__glow');
    expect(glow).toBeInTheDocument();
  });
});
