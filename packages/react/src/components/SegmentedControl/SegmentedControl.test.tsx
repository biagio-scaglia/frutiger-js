import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SegmentedControl } from './SegmentedControl';

describe('SegmentedControl Suite', () => {
  it('renders options with radiogroup semantics and triggers onChange', () => {
    const handleChange = vi.fn();
    render(
      <SegmentedControl
        value="list"
        onChange={handleChange}
        options={[
          { value: 'grid', label: 'Grid View' },
          { value: 'list', label: 'List View' },
          { value: 'compact', label: 'Compact' },
        ]}
      />
    );

    const radiogroup = screen.getByRole('radiogroup');
    expect(radiogroup).toBeInTheDocument();

    const listBtn = screen.getByRole('radio', { name: 'List View' });
    expect(listBtn).toHaveAttribute('aria-checked', 'true');

    const gridBtn = screen.getByRole('radio', { name: 'Grid View' });
    fireEvent.click(gridBtn);
    expect(handleChange).toHaveBeenCalledWith('grid');
  });
});
