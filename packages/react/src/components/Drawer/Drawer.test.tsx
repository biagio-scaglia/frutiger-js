import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Drawer } from './Drawer';

describe('Drawer Suite', () => {
  it('renders drawer dialog when isOpen is true', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose} title="Aqua Settings" placement="right">
        <p>Drawer Content</p>
      </Drawer>
    );

    expect(screen.getByRole('dialog', { name: 'Aqua Settings' })).toBeInTheDocument();
    expect(screen.getByText('Drawer Content')).toBeInTheDocument();

    const closeBtn = screen.getByRole('button', { name: 'Close drawer' });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('closes on Escape key press', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose} title="Glass Inspector">
        <div>Inspector Content</div>
      </Drawer>
    );

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not render when isOpen is false', () => {
    render(
      <Drawer isOpen={false} onClose={vi.fn()} title="Hidden Drawer">
        <div>Hidden Content</div>
      </Drawer>
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
