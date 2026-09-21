import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AeroCursor } from './AeroCursor';

describe('AeroCursor Suite', () => {
  beforeEach(() => {
    // Mock matchMedia
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query.includes('hover: hover'),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  it('renders custom cursor on fine pointer desktop devices', () => {
    const { container } = render(<AeroCursor mode="droplet" />);
    const root = container.querySelector('.fj-cursor-root');
    expect(root).toBeInTheDocument();
    expect(root).toHaveAttribute('aria-hidden', 'true');
    expect(container.querySelector('.fj-cursor-ring--droplet')).toBeInTheDocument();
    expect(container.querySelector('.fj-cursor-pointer--droplet')).toBeInTheDocument();
  });

  it('does not render when mode is default', () => {
    const { container } = render(<AeroCursor mode="default" />);
    expect(container.querySelector('.fj-cursor-root')).toBeNull();
  });

  it('does not render on touch mobile devices without hover pointer', () => {
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: false,
      media: '',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { container } = render(<AeroCursor mode="crystal" />);
    expect(container.querySelector('.fj-cursor-root')).toBeNull();
  });
});
