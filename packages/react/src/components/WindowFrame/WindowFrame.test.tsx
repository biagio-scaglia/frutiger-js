import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { WindowFrame, WindowFrameVariant } from './WindowFrame';

describe('WindowFrame', () => {
  it('renders window title and triggers close callback', () => {
    const handleClose = vi.fn();
    render(
      <WindowFrame title="Explorer - Pictures" onClose={handleClose}>
        <p>Window content</p>
      </WindowFrame>
    );
    expect(screen.getByText('Explorer - Pictures')).toBeInTheDocument();
    const closeBtn = screen.getByRole('button', { name: /close window/i });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalled();
  });

  it('renders correctly with different variants', () => {
    const variants: WindowFrameVariant[] = [
      'aero',
      'vista',
      'windows7',
      'glass',
      'glossy',
      'frosted',
    ];

    variants.forEach(v => {
      const { container } = render(
        <WindowFrame title={`Window ${v}`} variant={v}>
          <p>Content</p>
        </WindowFrame>
      );
      const win = container.querySelector('.fj-window');
      expect(win).toBeInTheDocument();
      if (v !== 'aero') {
        expect(win).toHaveClass(`fj-window--${v}`);
      }
    });
  });
});

