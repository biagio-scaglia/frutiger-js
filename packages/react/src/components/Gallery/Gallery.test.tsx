import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { GalleryGrid, GalleryItem } from './Gallery';

describe('Gallery', () => {
  it('renders gallery item and fires onSelect', () => {
    const handleSelect = vi.fn();
    render(
      <GalleryGrid>
        <GalleryItem
          title="Vista Aurora Borealis"
          description="Iconic 2006 digital art"
          category="Wallpaper"
          onSelect={handleSelect}
        />
      </GalleryGrid>
    );
    expect(screen.getByText('Vista Aurora Borealis')).toBeInTheDocument();
    expect(screen.getByText('Wallpaper')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('article'));
    expect(handleSelect).toHaveBeenCalled();
  });
});
