import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EmptyState } from './EmptyState';

describe('EmptyState Suite', () => {
  it('renders title, description and action buttons', () => {
    render(
      <EmptyState
        icon={<span data-testid="empty-orb">💧</span>}
        title="No Media Found"
        description="Your glass media library is currently empty."
        actions={<button>Upload Media</button>}
      />
    );

    expect(screen.getByText('No Media Found')).toBeInTheDocument();
    expect(screen.getByText('Your glass media library is currently empty.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Upload Media' })).toBeInTheDocument();
    expect(screen.getByTestId('empty-orb')).toBeInTheDocument();
  });
});
