import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { WaterRipple } from './WaterRipple';

describe('WaterRipple Suite', () => {
  it('renders canvas element with aria-hidden true', () => {
    // Mock getContext
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      clearRect: vi.fn(),
      beginPath: vi.fn(),
      arc: vi.fn(),
      stroke: vi.fn(),
      fill: vi.fn(),
      scale: vi.fn(),
    });

    const { container } = render(<WaterRipple data-testid="water-ripple-test" />);
    const rippleContainer = container.querySelector('.fj-water-ripple');
    expect(rippleContainer).toBeInTheDocument();
    expect(rippleContainer).toHaveAttribute('aria-hidden', 'true');
    expect(rippleContainer?.querySelector('canvas')).toBeInTheDocument();
  });

  it('renders with relative positioning when isFixed is false', () => {
    const { container } = render(<WaterRipple isFixed={false} />);
    const rippleContainer = container.querySelector('.fj-water-ripple--relative');
    expect(rippleContainer).toBeInTheDocument();
  });
});
