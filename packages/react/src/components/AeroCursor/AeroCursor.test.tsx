import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AeroCursor } from './AeroCursor';

describe('AeroCursor Suite', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('fj-custom-cursor-active');
    document.body.classList.remove('fj-custom-cursor-active');

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

  it('renders custom cursor on fine pointer desktop devices and hides native cursor', () => {
    const { container } = render(<AeroCursor mode="droplet" />);
    const root = container.querySelector('.fj-cursor-root');
    expect(root).toBeInTheDocument();
    expect(root).toHaveAttribute('aria-hidden', 'true');
    expect(container.querySelector('.fj-cursor-ring--droplet')).toBeInTheDocument();
    expect(container.querySelector('.fj-cursor-pointer--droplet')).toBeInTheDocument();
    expect(document.documentElement.classList.contains('fj-custom-cursor-active')).toBe(true);
  });

  it('renders bubble and cyber cursor variants with tailored pointers', () => {
    const { container: bubbleContainer } = render(<AeroCursor mode="bubble" />);
    expect(bubbleContainer.querySelector('.fj-cursor-pointer--bubble')).toBeInTheDocument();

    const { container: cyberContainer } = render(<AeroCursor mode="cyber" />);
    expect(cyberContainer.querySelector('.fj-cursor-pointer--cyber')).toBeInTheDocument();
  });

  it('does not render and removes hiding class when mode is default', () => {
    const { container } = render(<AeroCursor mode="default" />);
    expect(container.querySelector('.fj-cursor-root')).toBeNull();
    expect(document.documentElement.classList.contains('fj-custom-cursor-active')).toBe(false);
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
