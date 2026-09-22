import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { AeroBackgroundFX } from './AeroBackgroundFX';

describe('AeroBackgroundFX Component Suite', () => {
  beforeEach(() => {
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
      save: vi.fn(),
      restore: vi.fn(),
      translate: vi.fn(),
      rotate: vi.fn(),
      fillRect: vi.fn(),
      createLinearGradient: vi.fn().mockReturnValue({
        addColorStop: vi.fn(),
      }),
      createRadialGradient: vi.fn().mockReturnValue({
        addColorStop: vi.fn(),
      }),
      scale: vi.fn(),
    });

    HTMLCanvasElement.prototype.getBoundingClientRect = vi.fn().mockReturnValue({
      left: 0,
      top: 0,
      width: 1024,
      height: 768,
      right: 1024,
      bottom: 768,
    });
  });

  it('renders canvas when mode is bubbles', () => {
    const { container } = render(<AeroBackgroundFX mode="bubbles" />);
    const canvas = container.querySelector('.fj-water-ripple__canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('renders canvas when mode is aurora', () => {
    const { container } = render(<AeroBackgroundFX mode="aurora" />);
    const canvas = container.querySelector('.fj-water-ripple__canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('renders canvas when mode is leaves', () => {
    const { container } = render(<AeroBackgroundFX mode="leaves" />);
    const canvas = container.querySelector('.fj-water-ripple__canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('renders canvas when mode is clouds', () => {
    const { container } = render(<AeroBackgroundFX mode="clouds" />);
    const canvas = container.querySelector('.fj-water-ripple__canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('renders nothing when mode is none', () => {
    const { container } = render(<AeroBackgroundFX mode="none" />);
    expect(container.firstChild).toBeNull();
  });
});
