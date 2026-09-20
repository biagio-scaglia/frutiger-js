import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('IconButton Suite', () => {
  it('renders icon button with accessible aria-label', () => {
    render(<IconButton aria-label="Refresh data" icon={<span data-testid="icon">↻</span>} />);

    const button = screen.getByRole('button', { name: 'Refresh data' });
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('triggers onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<IconButton aria-label="Play media" icon={<span>▶</span>} onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'Play media' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies loading state and sets aria-busy', () => {
    render(<IconButton aria-label="Saving file" icon={<span>💾</span>} isLoading />);

    const button = screen.getByRole('button', { name: 'Saving file' });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
  });
});
